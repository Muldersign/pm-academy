// Dagelijkse synchronisatie van sales uit het CRM (Fieldstars, portal.pmagency.nl).
// Logt in met een eigen account, haalt de orderexport van de laatste dagen op, slaat de orders
// per order-id op en werkt sales_total en sales_month van gekoppelde gebruikers bij.
//
// Start: elke nacht door Vercel Cron (Authorization: Bearer CRON_SECRET),
// of met de knop "Nu synchroniseren" door een beheerder (Authorization: Bearer <Supabase-sessie>).
//
// Omgevingsvariabelen (Vercel → Settings → Environment Variables):
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY   database
//   FIELDSTARS_USERNAME, FIELDSTARS_PASSWORD  inlog voor portal.pmagency.nl (bij voorkeur een eigen account)
//   FIELDSTARS_EXPORT_URL                     link van de Excel-export, met {van} en {tot} voor de datums
//   FIELDSTARS_DAYS                           optioneel: aantal dagen terug (standaard 7)
//   CRON_SECRET                               geheime tekst die Vercel Cron meestuurt

import { unzipSync, strFromU8 } from "fflate";
import "../src/crm.js";

const { parseOrders, isoDate } = globalThis.CrmImport;
const SB = process.env.SUPABASE_URL, KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const PORTAL = (process.env.FIELDSTARS_URL || "https://portal.pmagency.nl").replace(/\/$/, "");

async function sb(path, init = {}) {
  const res = await fetch(SB + path, { ...init, headers: { apikey: KEY, Authorization: "Bearer " + KEY, "Content-Type": "application/json", ...(init.headers || {}) } });
  const text = await res.text(); let body = null; try { body = text ? JSON.parse(text) : null; } catch { body = text; }
  if (!res.ok) throw new Error(`Database (${res.status}): ${typeof body === "string" ? body : JSON.stringify(body)}`.slice(0, 300));
  return body;
}

// Kleine browser-nabootsing: cookies bewaren en redirects zelf volgen.
function session() {
  const jar = new Map();
  const keep = res => {
    const list = typeof res.headers.getSetCookie === "function" ? res.headers.getSetCookie() : (res.headers.get("set-cookie") || "").split(/,(?=\s*[A-Za-z0-9_\-]+=)/);
    for (const c of list) { const kv = c.split(";")[0]; const i = kv.indexOf("="); if (i > 0) jar.set(kv.slice(0, i).trim(), kv.slice(i + 1).trim()); }
  };
  return async function go(url, init = {}) {
    let u = url, opts = init;
    for (let hop = 0; hop < 8; hop++) {
      const res = await fetch(u, { ...opts, redirect: "manual", headers: { "User-Agent": "Mozilla/5.0 (PM Agency dashboard sync)", Accept: "*/*", ...(opts.headers || {}), Cookie: [...jar].map(([k, v]) => `${k}=${v}`).join("; ") } });
      keep(res);
      const loc = res.headers.get("location");
      if (res.status >= 300 && res.status < 400 && loc) { u = new URL(loc, u).toString(); opts = { method: "GET" }; continue; }
      return res;
    }
    throw new Error("Te veel doorverwijzingen bij de portal");
  };
}

const pad = n => String(n).padStart(2, "0");
function fillDates(tpl, from, to) {
  const f = { ddmmyyyy: d => `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()}`, yyyymmdd: d => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`, iso: d => isoDate(d) };
  return tpl
    .replaceAll("{van}", f.ddmmyyyy(from)).replaceAll("{tot}", f.ddmmyyyy(to))
    .replaceAll("{van_yyyymmdd}", f.yyyymmdd(from)).replaceAll("{tot_yyyymmdd}", f.yyyymmdd(to))
    .replaceAll("{van_iso}", f.iso(from)).replaceAll("{tot_iso}", f.iso(to));
}

async function callerIsAdmin(token) {
  const who = await fetch(SB + "/auth/v1/user", { headers: { apikey: KEY, Authorization: "Bearer " + token } });
  if (!who.ok) return false;
  const u = await who.json();
  const p = await sb(`/rest/v1/profiles?id=eq.${u.id}&select=role`);
  return p && p[0] && ["admin", "super_admin"].includes(p[0].role);
}

export async function runSync({ days, source }) {
  const user = process.env.FIELDSTARS_USERNAME, pass = process.env.FIELDSTARS_PASSWORD, tpl = process.env.FIELDSTARS_EXPORT_URL;
  if (!user || !pass || !tpl) throw Object.assign(new Error("De koppeling is nog niet ingesteld: FIELDSTARS_USERNAME, FIELDSTARS_PASSWORD en FIELDSTARS_EXPORT_URL ontbreken in Vercel."), { status: 400 });

  // 1. Inloggen
  const go = session();
  await go(PORTAL + "/index.cfm?mode=cms");
  const login = await go(PORTAL + "/index.cfm?mode=cms", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ username: user, password: pass }).toString() });
  const loginHtml = await login.text();
  if (/kt_sign_in_form/.test(loginHtml)) throw new Error("Inloggen bij Fieldstars lukte niet. Controleer FIELDSTARS_USERNAME en FIELDSTARS_PASSWORD.");

  // 2. Export van de laatste dagen ophalen
  const to = new Date(), from = new Date(to.getFullYear(), to.getMonth(), to.getDate() - (days - 1));
  let url = fillDates(tpl, from, to); if (!/^https?:/i.test(url)) url = PORTAL + "/" + url.replace(/^\/+/, "");
  const ex = await go(url);
  if (!ex.ok) throw new Error(`De export gaf een fout (${ex.status}).`);
  const bytes = new Uint8Array(await ex.arrayBuffer());
  const { orders, skipped } = parseOrders(bytes, { unzipSync, strFromU8 });

  // 3. Orders opslaan (per order-id: nieuw of bijgewerkt)
  const now = new Date().toISOString();
  const rows = orders.map(o => ({ id: o.id, code: o.code, name: o.name, order_date: isoDate(o.date), uitval: o.uitval, sales: o.sales, netto: o.netto, synced_at: now }));
  for (let i = 0; i < rows.length; i += 500) {
    await sb("/rest/v1/crm_orders?on_conflict=id", { method: "POST", headers: { Prefer: "resolution=merge-duplicates,return=minimal" }, body: JSON.stringify(rows.slice(i, i + 500)) });
  }

  // 4. Sales herberekenen en niet-gekoppelde medewerkers noteren
  const updated = await sb("/rest/v1/rpc/recompute_sales", { method: "POST", body: "{}" });
  const summary = await sb("/rest/v1/rpc/crm_summary", { method: "POST", body: "{}" });
  const profiles = await sb("/rest/v1/profiles?select=crm_code&crm_code=not.is.null");
  const known = new Set(profiles.map(p => String(p.crm_code).toLowerCase()));
  const unmatched = summary.filter(r => !known.has(String(r.code).toLowerCase())).map(r => ({ code: r.code, name: r.name, total: Number(r.total) }));
  const message = `${orders.length} orders van ${isoDate(from)} t/m ${isoDate(to)} verwerkt${skipped ? `, ${skipped} zonder medewerker overgeslagen` : ""}.`;
  await sb("/rest/v1/sync_runs", { method: "POST", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ source, ok: true, orders: orders.length, updated_users: Number(updated) || 0, message, unmatched }) });
  return { ok: true, orders: orders.length, updated: Number(updated) || 0, unmatched: unmatched.length, message };
}

export default async function handler(req, res) {
  if (!SB || !KEY) return res.status(500).json({ error: "SUPABASE_URL of SUPABASE_SERVICE_ROLE_KEY ontbreekt in Vercel" });
  const auth = String(req.headers.authorization || "");
  let source;
  if (process.env.CRON_SECRET && auth === "Bearer " + process.env.CRON_SECRET) source = "automatisch";
  else if (req.method === "POST" && auth.startsWith("Bearer ") && await callerIsAdmin(auth.slice(7))) source = "handmatig";
  else return res.status(401).json({ error: "Geen toegang" });

  const days = Math.min(400, Math.max(1, Number((req.query && req.query.dagen) || process.env.FIELDSTARS_DAYS) || 7));
  try {
    return res.status(200).json(await runSync({ days, source }));
  } catch (e) {
    const message = String(e && e.message || e).slice(0, 500);
    try { await sb("/rest/v1/sync_runs", { method: "POST", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ source, ok: false, message }) }); } catch {}
    return res.status(e && e.status || 500).json({ error: message });
  }
}
