/* Opslaglaag. Twee varianten met dezelfde functies:
   - live: Supabase (inloggen met e-mailcode, Postgres met Row Level Security, /api/users voor gebruikersbeheer)
   - demo: alles in de browser (localStorage), voor uitproberen zonder database. */
"use strict";

window.createBackend = function createBackend(cfg) {
  if (cfg.supabaseUrl && cfg.supabaseAnonKey && window.supabase) return liveBackend(cfg);
  return demoBackend();
};

function liveBackend(cfg) {
  const sb = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey, { auth: { persistSession: true, autoRefreshToken: true } });
  let uid = null, email = "";
  const ok = r => { if (r.error) throw r.error; return r.data; };
  const now = () => new Date().toISOString();
  async function api(body) {
    const { data } = await sb.auth.getSession();
    const res = await fetch("/api/users", { method: "POST", headers: { "Content-Type": "application/json", Authorization: "Bearer " + (data.session?.access_token || "") }, body: JSON.stringify(body) });
    const out = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(out.error || "Er ging iets mis (" + res.status + ")");
    return out;
  }
  return {
    mode: "live",
    async session() {
      const { data } = await sb.auth.getSession();
      if (!data.session) return null;
      uid = data.session.user.id; email = data.session.user.email || "";
      return { uid, email };
    },
    async sendCode(addr) { ok(await sb.auth.signInWithOtp({ email: addr, options: { shouldCreateUser: !!cfg.allowSignup } })); },
    async verifyCode(addr, token) {
      const d = ok(await sb.auth.verifyOtp({ email: addr, token, type: "email" }));
      uid = d.session.user.id; email = d.session.user.email || ""; return { uid, email };
    },
    async signOut() { await sb.auth.signOut(); },
    onSignedOut(cb) { sb.auth.onAuthStateChange(ev => { if (ev === "SIGNED_OUT") cb(); }); },
    async me() { return ok(await sb.from("profiles").select("*").eq("id", uid).single()); },
    async updateMe(patch) { ok(await sb.from("profiles").update(patch).eq("id", uid)); },
    async loadProgress() { const d = ok(await sb.from("progress").select("data").eq("user_id", uid).maybeSingle()); return d ? d.data : null; },
    async saveProgress(data, summary) {
      ok(await sb.from("progress").upsert({ user_id: uid, data, updated_at: now() }));
      ok(await sb.from("team_summary").upsert(Object.assign({ user_id: uid, last_active: now() }, summary)));
    },
    async loadContent(key) { return ok(await sb.from("app_content").select("data,updated_at").eq("key", key).maybeSingle()); },
    async saveContent(key, data, expected) {
      if (expected !== undefined) {
        const cur = await this.loadContent(key);
        if ((cur ? cur.updated_at : null) !== (expected || null)) { const e = new Error("conflict"); e.code = "conflict"; throw e; }
      }
      ok(await sb.from("app_content").upsert({ key, data, updated_at: now(), updated_by: uid }));
      const after = await this.loadContent(key);
      return after ? after.updated_at : null;
    },
    async leaderboard() { return ok(await sb.rpc("get_leaderboard")) || []; },
    async listUsers() {
      const [p, t] = await Promise.all([sb.from("profiles").select("*").order("created_at"), sb.from("team_summary").select("*")]);
      const sum = new Map((ok(t) || []).map(r => [r.user_id, r]));
      return (ok(p) || []).map(u => Object.assign({}, u, { summary: sum.get(u.id) || null }));
    },
    async updateUser(id, patch) { ok(await sb.from("profiles").update(patch).eq("id", id)); },
    async createUser(body) { return api(Object.assign({ action: "create" }, body)); },
    async deleteUser(id) { return api({ action: "delete", id }); },
  };
}

function demoBackend() {
  const KEY = "pm-academy-demo-v2";
  const ROLE_KEY = "pm-academy-demo-role";
  const now = () => new Date().toISOString();
  const ago = d => new Date(Date.now() - d * 86400000).toISOString();
  function seed() {
    const people = [
      ["Voorbeeld · Daan", 38, 412, "Ambassadeur", 1], ["Voorbeeld · Lisa", 34, 287, "Ambassadeur", 2], ["Voorbeeld · Bram", 29, 156, "Ambassadeur", 0],
      ["Voorbeeld · Noor", 24, 98, "Junior-Ambassadeur", 1], ["Voorbeeld · Milan", 19, 64, "Junior-Ambassadeur", 4], ["Voorbeeld · Femke", 12, 31, "Junior-Ambassadeur", 0], ["Voorbeeld · Jesse", 7, 7, "Junior-Ambassadeur", 2],
    ];
    const users = [{ id: "demo-me", email: "demo@pmagency.nl", display_name: "Demo Beheerder", role: "super_admin", start_date: ago(14).slice(0, 10), sales_total: 64, sales_month: 19, created_at: ago(14) }];
    const summary = {};
    people.forEach(([name, m, tot, status, d], i) => {
      const id = "demo-" + i;
      users.push({ id, email: name.split("· ")[1].toLowerCase() + "@pmagency.nl", display_name: name, role: i === 0 ? "admin" : "user", start_date: ago(300 - i * 40).slice(0, 10), sales_total: tot, sales_month: m, created_at: ago(300 - i * 40) });
      const pct = Math.min(100, Math.round(tot / 4));
      summary[id] = { name, email: users.at(-1).email, done: Math.round(pct * 0.43), total: 43, pct, current_id: "", current_title: pct >= 100 ? "" : "Ja-flow", certs: status === "Ambassadeur" ? 1 : 0, status, last_active: ago(d) };
    });
    return { users, progress: {}, summary, content: {}, updated: now() };
  }
  let db;
  try { db = JSON.parse(localStorage.getItem(KEY) || "null"); } catch { db = null; }
  if (!db) db = seed();
  const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch {} };
  const me = () => db.users.find(u => u.id === "demo-me");
  let demoRole = null;
  try { demoRole = localStorage.getItem(ROLE_KEY); } catch {}
  if (demoRole) me().role = demoRole;
  const clone = x => JSON.parse(JSON.stringify(x));
  const isAdmin = () => ["admin", "super_admin"].includes(me().role);
  return {
    mode: "demo",
    async session() { return { uid: "demo-me", email: me().email }; },
    async sendCode() {}, async verifyCode() { return { uid: "demo-me", email: me().email }; },
    async signOut() { try { localStorage.removeItem(KEY); localStorage.removeItem(ROLE_KEY); } catch {} },
    onSignedOut() {},
    async me() { return clone(me()); },
    async updateMe(patch) { Object.assign(me(), patch); persist(); },
    setDemoRole(role) { me().role = role; try { localStorage.setItem(ROLE_KEY, role); } catch {} persist(); },
    async loadProgress() { return db.progress["demo-me"] ? clone(db.progress["demo-me"]) : null; },
    async saveProgress(data, summary) { db.progress["demo-me"] = clone(data); db.summary["demo-me"] = Object.assign({ last_active: now() }, summary); persist(); },
    async loadContent(key) { return db.content[key] ? clone(db.content[key]) : null; },
    async saveContent(key, data) { if (!isAdmin()) throw new Error("Alleen beheerders"); const t = now(); db.content[key] = { data: clone(data), updated_at: t }; persist(); return t; },
    async leaderboard() {
      return db.users.map(u => ({ id: u.id, name: u.display_name || (db.summary[u.id] || {}).name || u.email, sales_month: u.sales_month, sales_total: u.sales_total, status: (db.summary[u.id] || {}).status || "Junior-Ambassadeur" }));
    },
    async listUsers() { if (!isAdmin()) return []; return db.users.map(u => Object.assign(clone(u), { summary: db.summary[u.id] ? clone(db.summary[u.id]) : null })); },
    async updateUser(id, patch) {
      const u = db.users.find(x => x.id === id); if (!u) throw new Error("Onbekende gebruiker");
      if ("role" in patch && me().role !== "super_admin") throw new Error("Alleen de super-admin kan rollen wijzigen");
      Object.assign(u, patch); persist();
    },
    async createUser({ email, name, role, start_date }) {
      if (!isAdmin()) throw new Error("Alleen beheerders");
      if (db.users.some(u => u.email.toLowerCase() === email.toLowerCase())) throw new Error("Dit e-mailadres bestaat al");
      if (role !== "user" && me().role !== "super_admin") throw new Error("Alleen de super-admin kan beheerders toevoegen");
      const u = { id: "demo-" + Math.random().toString(36).slice(2, 8), email, display_name: name, role, start_date: start_date || null, sales_total: 0, sales_month: 0, created_at: now() };
      db.users.push(u); persist(); return { id: u.id };
    },
    async deleteUser(id) {
      const u = db.users.find(x => x.id === id);
      if (!u || u.id === "demo-me") throw new Error("Deze gebruiker kun je niet verwijderen");
      if (u.role !== "user" && me().role !== "super_admin") throw new Error("Alleen de super-admin kan beheerders verwijderen");
      db.users = db.users.filter(x => x.id !== id); delete db.summary[id]; persist(); return { ok: true };
    },
  };
}
