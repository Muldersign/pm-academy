// Gebruikersbeheer voor beheerders: gebruiker toevoegen en verwijderen.
// Draait als Vercel-functie met de service role key, die nooit naar de browser gaat.
// Rollen: super_admin mag admins en gebruikers beheren, admin alleen gebruikers.

const URL_ = process.env.SUPABASE_URL;
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function sb(path, init = {}) {
  const res = await fetch(URL_ + path, {
    ...init,
    headers: { apikey: SERVICE, Authorization: "Bearer " + SERVICE, "Content-Type": "application/json", ...(init.headers || {}) },
  });
  const text = await res.text();
  let body = null; try { body = text ? JSON.parse(text) : null; } catch { body = text; }
  return { ok: res.ok, status: res.status, body };
}
const fail = (res, status, error) => res.status(status).json({ error });

export default async function handler(req, res) {
  if (req.method !== "POST") return fail(res, 405, "Alleen POST");
  if (!URL_ || !SERVICE) return fail(res, 500, "SUPABASE_URL of SUPABASE_SERVICE_ROLE_KEY ontbreekt in Vercel");

  // Wie vraagt dit? Controleer het token bij Supabase en lees de rol.
  const token = String(req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  if (!token) return fail(res, 401, "Niet ingelogd");
  const who = await fetch(URL_ + "/auth/v1/user", { headers: { apikey: SERVICE, Authorization: "Bearer " + token } });
  if (!who.ok) return fail(res, 401, "Je sessie is verlopen. Log opnieuw in.");
  const caller = await who.json();
  const prof = await sb(`/rest/v1/profiles?id=eq.${caller.id}&select=role`);
  const callerRole = prof.body && prof.body[0] && prof.body[0].role;
  if (!["admin", "super_admin"].includes(callerRole)) return fail(res, 403, "Alleen beheerders kunnen gebruikers beheren");

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});

  if (body.action === "create") {
    const email = String(body.email || "").trim().toLowerCase();
    const name = String(body.name || "").trim().slice(0, 120);
    const role = ["user", "admin"].includes(body.role) ? body.role : "user";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !name) return fail(res, 400, "Vul een naam en een geldig e-mailadres in");
    if (role === "admin" && callerRole !== "super_admin") return fail(res, 403, "Alleen de super-admin kan admins toevoegen");
    const created = await sb("/auth/v1/admin/users", { method: "POST", body: JSON.stringify({ email, email_confirm: true, user_metadata: { name } }) });
    if (!created.ok) {
      const msg = JSON.stringify(created.body || "");
      return fail(res, created.status === 422 || /already/i.test(msg) ? 409 : 500, /already/i.test(msg) ? "Dit e-mailadres bestaat al" : "Aanmaken lukte niet");
    }
    const id = created.body.id;
    const start = /^\d{4}-\d{2}-\d{2}$/.test(body.start_date || "") ? body.start_date : null;
    // Het profiel is door de database-trigger aangemaakt; vul naam, rol en startdatum in.
    await sb(`/rest/v1/profiles?id=eq.${id}`, { method: "PATCH", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ display_name: name, role, start_date: start }) });
    return res.status(200).json({ id });
  }

  if (body.action === "delete") {
    const id = String(body.id || "");
    if (!/^[0-9a-f-]{36}$/i.test(id)) return fail(res, 400, "Onbekende gebruiker");
    if (id === caller.id) return fail(res, 400, "Je kunt jezelf niet verwijderen");
    const target = await sb(`/rest/v1/profiles?id=eq.${id}&select=role`);
    const targetRole = target.body && target.body[0] && target.body[0].role;
    if (!targetRole) return fail(res, 404, "Gebruiker niet gevonden");
    if (targetRole === "super_admin") return fail(res, 403, "Een super-admin kan niet worden verwijderd");
    if (targetRole === "admin" && callerRole !== "super_admin") return fail(res, 403, "Alleen de super-admin kan admins verwijderen");
    const del = await sb(`/auth/v1/admin/users/${id}`, { method: "DELETE" });
    if (!del.ok) return fail(res, 500, "Verwijderen lukte niet");
    return res.status(200).json({ ok: true });
  }

  return fail(res, 400, "Onbekende actie");
}
