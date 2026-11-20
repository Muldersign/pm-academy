/* PM Agency Academy */
"use strict";

/* ---------- Iconen ---------- */
const IC = {
  home: '<path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h5v17H6a2 2 0 0 0-2 1z"/><path d="M20 5a2 2 0 0 0-2-2h-5v17h5a2 2 0 0 1 2 1z"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14 7 22l5-3 5 3-1.5-8"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v9H5v-9M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  check: '<path d="m5 12 5 5 9-10"/>',
  play: '<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
  right: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  left: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  down: '<path d="M12 5v14M6 13l6 6 6-6"/>',
  chev: '<path d="m9 6 6 6-6 6"/>',
  clip: '<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4V3h6v1M9 11h6M9 15h4"/>',
  quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01"/>',
  dl: '<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
  video: '<rect x="3" y="5" width="13" height="14" rx="2"/><path d="m16 10 5-3v10l-5-3"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  route: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h7a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h7"/>',
  crown: '<path d="m3 8 4 4 5-7 5 7 4-4-2 11H5z"/>',
  ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>',
  folder: '<path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  chat: '<path d="M4 5h16v11H8l-4 4z"/><path d="M8 9h8M8 12h5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  file: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/>',
  paperclip: '<path d="m20 11-8.5 8.5a5 5 0 0 1-7-7L13 4a3.3 3.3 0 0 1 4.7 4.7L9.2 17.2a1.7 1.7 0 0 1-2.4-2.4L14.5 7"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6a7 7 0 0 0 0 2.4l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 21h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z"/>',
};
const icon = (n, s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n] || ""}</svg>`;
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const clone = x => JSON.parse(JSON.stringify(x));
const uid = p => p + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

/* ---------- Datums ---------- */
const DAY = 86400000;
const iso = d => { const x = new Date(d); return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}-${String(x.getDate()).padStart(2, "0")}`; };
const parseDay = s => { const [y, m, d] = String(s).slice(0, 10).split("-").map(Number); return new Date(y, m - 1, d); };
const startOfDay = d => { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; };
const isWorkday = d => d.getDay() !== 0 && d.getDay() !== 6;
const nextDay = d => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
function workdaysSince(s, now = new Date()) { let d = parseDay(s), n = 0; const end = startOfDay(now); while (d < end) { if (isWorkday(d)) n++; d = nextDay(d); } return n; }
function dayAfterWorkdays(s, n) { let d = parseDay(s), c = 0; while (c < n) { if (isWorkday(d)) c++; d = nextDay(d); } return d; }
function addMonths(ts, n) { const d = new Date(ts), day = d.getDate(); d.setDate(1); d.setMonth(d.getMonth() + n); d.setDate(Math.min(day, new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate())); return d; }
const MONTHS = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
const fmtDate = d => { const x = new Date(d); return `${x.getDate()} ${MONTHS[x.getMonth()]} ${x.getFullYear()}`; };
const fmtShort = d => { const x = new Date(d); return `${x.getDate()} ${MONTHS[x.getMonth()].slice(0, 3)}`; };
const greeting = () => { const h = new Date().getHours(); return h < 12 ? "Goedemorgen" : h < 18 ? "Goedemiddag" : "Goedenavond"; };

/* ---------- Vaste gegevens ---------- */
const LEVELS = [
  { n: "Rookie", min: 0, t: "Start" }, { n: "Talent", min: 50 }, { n: "Professional", min: 100 }, { n: "Ster", min: 200 },
  { n: "Wereldklasse", min: 500 }, { n: "Legendarisch", min: 750 }, { n: "GOAT", min: 1000 },
];
const ROLE_LABEL = { super_admin: "Super-admin", admin: "Admin", management: "Management", user: "Gebruiker" };
const KIND_LABEL = { training: "Training", verdieping: "Verdieping" };

/* ---------- State ---------- */
const CFG = window.PM_CONFIG || {};
const be = window.createBackend(CFG);
// UNLOCK_ALL: alle modules en onderwerpen tijdelijk open (instelling UNLOCK_ALL). Openingsregels blijven bewaard.
const UNLOCK_ALL = !!CFG.unlockAll;
const allOpen = () => S.preview || UNLOCK_ALL;
const blankProgress = () => ({ topics: {}, activity: [] });
let P = blankProgress();
let C = clone(window.PM_DEFAULT_CURRICULUM);
const S = {
  route: { v: "dash" }, tab: "video", quiz: null, me: null, preview: false, saveState: "",
  cMeta: null, benefits: { items: [] }, lb: [], lbMode: "month", users: null, userDraft: {}, addUser: null,
  confirm: null, benDraft: null, ed: null, login: { step: "email", email: "", busy: false, error: "" },
};
function lsGet(k) { try { return localStorage.getItem(k); } catch { return null; } }
function lsSet(k, v) { try { localStorage.setItem(k, v); } catch {} }
try { const r = JSON.parse(lsGet("pm-academy-ui") || "{}"); if (r.route) S.route = r.route; if (r.tab) S.tab = r.tab; } catch {}
const persistUi = () => lsSet("pm-academy-ui", JSON.stringify({ route: S.route, tab: S.tab }));

const role = () => (S.me && S.me.role) || "user";
const isAdmin = () => role() === "admin" || role() === "super_admin";
const isSuper = () => role() === "super_admin";
const myName = () => ((S.me && S.me.display_name) || "").trim();
const firstName = () => myName().split(/\s+/)[0] || "";
const initials = n => { n = (n || "").replace(/^Voorbeeld · /, ""); return n ? n.split(/\s+/).map(p => p[0]).slice(0, 2).join("").toUpperCase() : "PM"; };
const sales = () => Number(S.me && S.me.sales_total) || 0;

/* ---------- Curriculum ---------- */
let TR = [], MODS = [], ALL = [];
const TOP = new Map(), MOD_OF = new Map(), TRK_OF = new Map();
function indexC() {
  TR = (C.tracks || []).filter(t => t.published !== false || isAdmin());
  MODS = []; ALL = []; TOP.clear(); MOD_OF.clear(); TRK_OF.clear();
  for (const t of TR) for (const m of t.modules || []) {
    TRK_OF.set(m, t); MODS.push(m);
    for (const tp of m.topics || []) { MOD_OF.set(tp, m); TOP.set(tp.id, tp); ALL.push(tp); }
  }
}
const passMark = () => Number(C.passMark) || 80;
const tst = id => (P.topics[id] ||= { wb: {}, best: 0, passedAt: null, attempts: 0 });
const passed = id => !!(P.topics[id] && P.topics[id].passedAt);
const wbDone = t => (t.workbook || []).every((_, i) => ((P.topics[t.id] && P.topics[t.id].wb[i]) || "").trim().length >= 3);
const modDone = m => m.topics.length > 0 && m.topics.every(t => passed(t.id));
const modDoneAt = m => modDone(m) ? Math.max(...m.topics.map(t => new Date(P.topics[t.id].passedAt).getTime())) : null;
const modCount = m => m.topics.filter(t => passed(t.id)).length;
const realMods = t => (t.modules || []).filter(m => m.topics.length);
const trackDone = t => realMods(t).length > 0 && realMods(t).every(modDone);
const trackDoneAt = t => trackDone(t) ? Math.max(...realMods(t).map(modDoneAt)) : null;
const certTracks = () => TR.filter(t => t.certificate);
const certCount = () => certTracks().filter(trackDone).length;
const topicNo = t => MOD_OF.get(t).topics.indexOf(t) + 1;

function lock(reason, short, extra) { return Object.assign({ open: false, reason, short }, extra || {}); }
function modStatus(m) {
  if (allOpen()) return { open: true };
  const u = m.unlock || {}, i = MODS.indexOf(m), prev = i > 0 ? MODS[i - 1] : null;
  if (u.prev && prev && prev.topics.length && !modDone(prev)) return lock(`Rond eerst ${prev.code || prev.title} af`, `Na ${prev.code || "vorige"}`);
  if (u.workdays) {
    const sd = S.me && S.me.start_date;
    if (!sd) return lock("Je startdatum ontbreekt. Vul hem in bij Profiel.", "Startdatum nodig", { profile: true });
    if (workdaysSince(sd) < u.workdays) { const at = dayAfterWorkdays(sd, u.workdays); return lock(`Opent op ${fmtDate(at)}, na je eerste ${u.workdays} werkdagen`, `Opent ${fmtShort(at)}`); }
  }
  if (u.sales && sales() < u.sales) return lock(`Opent bij ${u.sales} sales. Je staat op ${sales()}.`, `${sales()}/${u.sales} sales`, { progress: sales() / u.sales });
  if (u.months && prev && prev.topics.length) {
    if (!modDone(prev)) return lock(`Opent ${u.months === 1 ? "een maand" : u.months + " maanden"} na het afronden van ${prev.code || prev.title}`, `Na ${prev.code || "vorige"}`);
    const at = addMonths(modDoneAt(prev), u.months);
    if (Date.now() < at.getTime()) return lock(`Opent op ${fmtDate(at)}, ${u.months === 1 ? "een maand" : u.months + " maanden"} na het afronden van ${prev.code || prev.title}`, `Opent ${fmtShort(at)}`);
  }
  return { open: true };
}
function unlockText(m) {
  const u = m.unlock || {}, parts = [];
  if (u.prev) parts.push("na de vorige module");
  if (u.workdays) parts.push(`na ${u.workdays} werkdagen`);
  if (u.sales) parts.push(`vanaf ${u.sales} sales`);
  if (u.months) parts.push(`${u.months === 1 ? "een maand" : u.months + " maanden"} na de vorige`);
  return parts.length ? "Opent " + parts.join(", ") : "Direct open";
}
function topicOpen(t) {
  const m = MOD_OF.get(t);
  if (!m || !modStatus(m).open) return false;
  if (allOpen()) return true;
  const i = m.topics.indexOf(t);
  return i === 0 || passed(m.topics[i - 1].id);
}
function nextTopic() { return ALL.find(t => !passed(t.id) && topicOpen(t)) || ALL.find(t => !passed(t.id)) || null; }
function overall() { const list = ALL.filter(t => TRK_OF.get(MOD_OF.get(t)).published !== false); const done = list.filter(t => passed(t.id)).length; return { done, total: list.length, pct: list.length ? Math.round(done / list.length * 100) : 0 }; }
function statusOf() { let s = C.startStatus || "Junior-Ambassadeur"; for (const t of TR) if (t.statusOnComplete && t.published !== false && trackDone(t)) s = t.statusOnComplete; return s; }
function levelIdx(s) { let i = 0; LEVELS.forEach((l, k) => { if (s >= l.min) i = k; }); return i; }
function streak() {
  const set = new Set(P.activity || []); let n = 0, d = startOfDay(new Date());
  if (!set.has(iso(d))) d = new Date(d.getTime() - DAY);
  while (set.has(iso(d))) { n++; d = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1); }
  return n;
}
function markActive() { const k = iso(new Date()); P.activity ||= []; if (!P.activity.includes(k)) { P.activity.push(k); P.activity = P.activity.slice(-120); } }

/* ---------- Opslaan ---------- */
let saveTimer = null;
function save() {
  clearTimeout(saveTimer);
  setSaveState("Opslaan…");
  saveTimer = setTimeout(async () => {
    const o = overall(), nt = nextTopic();
    try {
      await be.saveProgress(P, { name: myName(), email: S.me.email, done: o.done, total: o.total, pct: o.pct, current_id: nt ? nt.id : "", current_title: nt ? nt.title : "", certs: certCount(), status: statusOf() });
      setSaveState(be.mode === "demo" ? "Demo · opgeslagen in deze browser" : "Opgeslagen");
    } catch { setSaveState("Niet opgeslagen. Controleer je verbinding."); }
  }, 700);
}
function setSaveState(t) { S.saveState = t; const el = document.getElementById("save-state"); if (el) el.textContent = t; }
let toastTimer;
function toast(t) { const el = document.getElementById("toast"); el.textContent = t; el.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => el.hidden = true, 2800); }

/* ---------- Navigatie ---------- */
const NAV = [
  { v: "dash", label: "Dashboard", short: "Home", ic: "home" },
  { v: "train", label: "Trainingen", short: "Training", ic: "book" },
  { v: "journey", label: "PM Journey", short: "Journey", ic: "route" },
  { v: "certs", label: "Certificaten", ic: "award" },
  { v: "benefits", label: "PM Benefits", ic: "gift" },
  { v: "lb", label: "Leaderboard", short: "Ranking", ic: "trophy" },
  { v: "mydossier", label: "Mijn dossier", ic: "folder" },
];
const staffNav = () => [{ v: "users", label: "Gebruikers", ic: "users" }, { v: "dossiers", label: "Dossiers", ic: "folder" }, { v: "formats", label: "Gespreksformats", ic: "chat" }].concat(isAdmin() ? [{ v: "content", label: "Inhoud", ic: "layers" }] : []);
const STAFF_ROUTES = ["users", "dossiers", "dossier", "formats"];
const TABBAR = ["dash", "train", "journey", "lb", "profile"];
function go(v, extra = {}) {
  if (S.ed && S.ed.dirty && S.route.v === "content" && v !== "content") { S.confirm = { kind: "leave", v, extra }; return render(true); }
  S.route = Object.assign({ v }, extra); S.quiz = null; S.confirm = null; persistUi(); render(true); window.scrollTo({ top: 0 });
  if (v === "lb") loadLb();
  if (v === "users") loadUsers();
  if (v === "dossiers") loadDossiers();
  if (v === "dossier") loadDossier(extra.id);
  if (v === "formats" && !S.templates) loadTemplates().then(() => render());
  if (v === "mydossier") loadMyDossier();
}
function activeNav() { const v = S.route.v; return v === "topic" || v === "wb" ? "train" : v === "cert" ? "certs" : v === "dossier" ? "dossiers" : v; }
function renderShell() {
  const navBtn = n => `<button data-go="${n.v}" ${activeNav() === n.v ? 'aria-current="page"' : ""}>${icon(n.ic)}<span>${n.label}</span>${n.v === "certs" ? `<span class="badge">${certCount()}/${certTracks().length}</span>` : ""}</button>`;
  document.getElementById("side").innerHTML = `
    <div class="side-brand"><img class="wm" src="/brand/wordmark-cream.png" alt="PM Agency"><small>Academy</small></div>
    <nav class="nav" aria-label="Hoofdmenu"><div class="nav-label">Menu</div>${NAV.map(navBtn).join("")}</nav>
    ${isStaff() ? `<nav class="nav" aria-label="Beheer"><div class="nav-label">Beheer</div>${staffNav().map(navBtn).join("")}</nav>` : ""}
    <div class="side-foot">
      <div class="save-state" id="save-state">${esc(S.saveState)}</div>
      <button class="me-chip" data-go="profile"><span class="avatar">${esc(initials(myName()))}</span><span class="who"><b>${esc(myName() || "Jouw profiel")}</b><span>${esc(statusOf())}${isStaff() ? " · " + ROLE_LABEL[role()] : ""}</span></span></button>
    </div>`;
  const items = TABBAR.map(v => v === "profile" ? { v, short: "Profiel", ic: "user" } : NAV.find(n => n.v === v));
  document.getElementById("tabbar").innerHTML = items.map(n => `<button data-go="${n.v}" ${activeNav() === n.v || (n.v === "profile" && ["certs", "cert", "benefits", "users", "content", "dossiers", "dossier", "formats", "mydossier"].includes(S.route.v)) ? 'aria-current="page"' : ""}>${icon(n.ic, 22)}<span>${n.short || n.label}</span></button>`).join("");
}
function topline(left) {
  return `<div class="topline"><span>${left}</span><span class="row">${S.preview ? '<span class="pill warn">Voorbeeldmodus: alles open</span>' : UNLOCK_ALL ? '<span class="pill warn">Alle modules staan open</span>' : ""}</span></div>
  <div class="mobile-top"><img src="/brand/wordmark-cream.png" alt="PM Agency"><button class="iconbtn" data-go="profile" aria-label="Profiel">${icon("user", 18)}</button></div>
  ${be.mode === "demo" ? `<div class="demo-bar">${icon("info", 16)}<span><b>Demoversie.</b> Er is nog geen database gekoppeld; alles wordt in deze browser bewaard.</span></div>` : ""}`;
}

/* ---------- Dashboard ---------- */
function vDash() {
  const o = overall(), nt = nextTopic(), st = streak(), s = sales(), li = levelIdx(s), lv = LEVELS[li], nx = LEVELS[li + 1];
  let hero;
  if (!ALL.length) hero = `<div class="hero"><div><div class="eyebrow">Academy</div><h2>Er staan nog geen trainingen klaar.</h2><p>${isAdmin() ? "Maak je eerste module aan onder Beheer → Inhoud." : "Je beheerder voegt binnenkort de trainingen toe."}</p></div>${isAdmin() ? `<button class="btn accent arrow" data-go="content"><span class="dot">${icon("plus", 16)}</span>Inhoud beheren</button>` : ""}</div>`;
  else if (!nt) hero = `<div class="hero"><div><div class="eyebrow">Alles afgerond</div><h2>Je hebt alle trainingen afgerond.</h2><p>Bekijk en download je certificaten.</p></div><button class="btn accent arrow" data-go="certs"><span class="dot">${icon("award", 16)}</span>Certificaten</button></div>`;
  else if (topicOpen(nt)) {
    const m = MOD_OF.get(nt), x = P.topics[nt.id];
    const stage = x && wbDone(nt) && nt.quiz.length ? "Quiz" : x && Object.keys(x.wb || {}).length ? "Workbook" : "Video";
    hero = `<div class="hero"><div><div class="eyebrow">Volgende stap · ${esc(m.code)} · ${stage}</div><h2>${esc(nt.title)}</h2><p>${esc(m.title)} · onderwerp ${topicNo(nt)} van ${m.topics.length}</p></div><button class="btn accent arrow" data-topic="${nt.id}"><span class="dot">${icon("play", 14)}</span>Verder</button></div>`;
  } else {
    const m = MOD_OF.get(nt), ms = modStatus(m);
    hero = `<div class="hero"><div><div class="eyebrow">Nog even wachten · ${esc(m.code)}</div><h2>${esc(m.title)} is nog op slot.</h2><p>${esc(ms.reason || "")}</p></div>${ms.profile ? `<button class="btn accent arrow" data-go="profile"><span class="dot">${icon("user", 16)}</span>Startdatum invullen</button>` : `<button class="btn ghost" data-go="journey">Bekijk je journey</button>`}</div>`;
  }
  const road = MODS.filter(m => m.topics.length).map(m => {
    const ms = modStatus(m), done = modDone(m), c = modCount(m);
    const pill = done ? `<span class="pill ok">${icon("check", 13)} Afgerond</span>` : ms.open ? `<span class="pill go">${c}/${m.topics.length}</span>` : `<span class="pill lock">${icon("lock", 12)} ${esc(ms.short)}</span>`;
    return `<div class="road-item"><span class="code">${esc(m.code)}</span><div><b>${esc(m.title)}</b><div class="why">${done ? `Afgerond op ${fmtDate(modDoneAt(m))}` : ms.open ? esc(unlockText(m)) : esc(ms.reason)}</div>${!done && !ms.open && ms.progress != null ? `<div class="bar" style="margin-top:8px;max-width:240px"><i style="width:${Math.min(100, ms.progress * 100)}%"></i></div>` : ""}</div>${pill}</div>`;
  }).join("");
  const toNext = nx ? nx.min - s : 0;
  return `${topline("Dashboard")}
  <div class="spread" style="align-items:flex-end"><div class="stack-sm"><span class="eyebrow red">${greeting()}</span><h1 class="hello">${firstName() ? esc(firstName()) : "Welkom"}</h1></div>
  <span class="status-chip"><span class="ic">${icon("crown", 14)}</span>${esc(statusOf())}</span></div>
  ${hero}
  <button class="card linkcard stack" data-go="journey" style="gap:14px">
    <div class="spread"><div class="stack-sm" style="gap:2px"><span class="eyebrow">PM Journey</span><span class="display" style="font-size:34px">${esc(lv.n)}</span></div>
    <div style="text-align:right"><div class="big-num tnum">${s}<small>sales</small></div><span class="small muted">${nx ? `Nog ${toNext} tot ${esc(nx.n)}` : "Hoogste niveau bereikt"}</span></div></div>
    <div class="journey-mini">${LEVELS.map((l, k) => `<i class="${k < li ? "on" : k === li ? "cur" : ""}" title="${esc(l.n)}"></i>`).join("")}</div>
  </button>
  <div class="grid-3">
    <div class="card stack-sm"><span class="eyebrow">Voortgang</span><div class="big-num tnum">${o.pct}<small>%</small></div><div class="bar"><i style="width:${o.pct}%"></i></div><span class="small muted tnum">${o.done} van ${o.total} onderwerpen</span></div>
    <button class="card stack-sm linkcard" data-go="certs"><span class="eyebrow">Certificaten</span><div class="big-num tnum">${certCount()}<small>/ ${certTracks().length}</small></div><span class="small muted">${certCount() ? "Bekijk en download" : "Rond " + esc((certTracks()[0] || {}).code || "een training") + " af voor je eerste"}</span></button>
    <div class="card stack-sm"><span class="eyebrow">Reeks</span><div class="big-num tnum">${st}<small>${st === 1 ? "dag" : "dagen"}</small></div><span class="small muted">Leer elke dag een stukje</span></div>
  </div>
  <div class="grid-2">
    <button class="card stack-sm linkcard" data-go="wb"><span class="row">${icon("clip")}<b>Mijn workbook</b></span><span class="small muted">Lees al je antwoorden terug.</span></button>
    <button class="card stack-sm linkcard" data-go="benefits"><span class="row">${icon("gift")}<b>PM Benefits</b></span><span class="small muted">Wat je bij PM Agency krijgt naast je verdiensten.</span></button>
  </div>
  ${road ? `<section class="stack"><div class="sec-head"><h2 class="h-sec">Jouw route</h2><span class="count">${MODS.filter(modDone).length}/${MODS.filter(m => m.topics.length).length} modules</span></div><div class="road">${road}</div></section>` : ""}`;
}

/* ---------- PM Journey ---------- */
function vJourney() {
  const s = sales(), li = levelIdx(s), nx = LEVELS[li + 1];
  const pct = nx ? Math.round((s - LEVELS[li].min) / (nx.min - LEVELS[li].min) * 100) : 100;
  const statusTracks = TR.filter(t => t.statusOnComplete && t.published !== false);
  return `${topline("PM Journey")}
  <div class="stack-sm"><span class="eyebrow red">The PM Journey</span><h1 class="h-page">Van Rookie tot GOAT</h1><p class="lede">Je niveau groeit mee met je totale aantal sales. Je beheerder werkt de sales bij.</p></div>
  <div class="hero"><div><div class="eyebrow">Jouw niveau</div><h2>${esc(LEVELS[li].n)}</h2><p>${nx ? `${s} sales. Nog ${nx.min - s} tot ${esc(nx.n)}.` : `${s} sales. Je hebt het hoogste niveau bereikt.`}</p><div class="bar" style="margin-top:14px;max-width:360px;background:rgba(255,255,255,.18)"><i style="width:${pct}%;background:#fff"></i></div></div><div class="big-num tnum" style="font-size:88px;color:#fff">${s}</div></div>
  <div class="journey">${LEVELS.map((l, k) => `<div class="lvl ${k < li ? "done" : k === li ? "cur" : ""}">${k === li ? '<span class="me">JIJ</span>' : ""}<span class="t">${k === 0 ? "Start" : l.min + " sales"}</span><span class="n">${esc(l.n)}</span>${k < li ? `<span class="t">${icon("check", 14)} Behaald</span>` : ""}</div>`).join("")}</div>
  <section class="stack"><div class="sec-head"><h2 class="h-sec">Jouw status</h2><span class="status-chip"><span class="ic">${icon("crown", 14)}</span>${esc(statusOf())}</span></div>
    <div class="road"><div class="road-item"><span class="code">Start</span><div><b>${esc(C.startStatus || "Junior-Ambassadeur")}</b><div class="why">Iedereen begint hier</div></div><span class="pill ok">${icon("check", 13)} Behaald</span></div>
    ${statusTracks.map(t => `<div class="road-item"><span class="code">${esc(t.code)}</span><div><b>${esc(t.statusOnComplete)}</b><div class="why">Na het afronden van ${esc(t.code)} ${esc(t.title)}</div></div>${trackDone(t) ? `<span class="pill ok">${icon("check", 13)} Behaald</span>` : `<span class="pill lock">${icon("lock", 12)} Nog niet</span>`}</div>`).join("")}</div></section>`;
}

/* ---------- Trainingen ---------- */
function trackBlock(tr) {
  const done = tr.modules.reduce((a, m) => a + modCount(m), 0), total = tr.modules.reduce((a, m) => a + m.topics.length, 0);
  const cur = nextTopic();
  const mods = tr.modules.filter(m => m.topics.length || isAdmin()).map(m => {
    const ms = modStatus(m), c = modCount(m), md = modDone(m);
    const open = ms.open && ((cur && MOD_OF.get(cur) === m) || S.route.open === m.id);
    const rows = m.topics.map((t, i) => {
      const ok = passed(t.id), avail = topicOpen(t), isCur = cur && cur.id === t.id;
      return `<button class="topic-row" data-topic="${t.id}" ${avail ? "" : "disabled"}><span class="st ${ok ? "ok" : isCur && avail ? "cur" : ""}">${ok ? icon("check", 13) : avail ? i + 1 : icon("lock", 11)}</span><span>${esc(t.title)}</span><span class="meta tnum">${ok && t.quiz.length ? `quiz ${P.topics[t.id].best}%` : ok ? "afgerond" : avail ? [t.video || t.core ? "video" : "", t.workbook.length ? "workbook" : "", t.quiz.length ? "quiz" : ""].filter(Boolean).join(" · ") : ""}</span></button>`;
    }).join("") || `<div class="small muted" style="padding:14px 20px">Nog geen onderwerpen.</div>`;
    const pill = md ? `<span class="pill ok">${icon("check", 13)} Afgerond</span>` : ms.open ? `<span class="pill go tnum">${c}/${m.topics.length}</span>` : `<span class="pill lock">${icon("lock", 12)} ${esc(ms.short)}</span>`;
    return `<details class="module ${ms.open ? "" : "locked"}" ${open ? "open" : ""}><summary><span class="code">${esc(m.code)}</span><div><h3>${esc(m.title)}</h3><div class="sub">${ms.open ? `${m.topics.length} onderwerpen · ${esc(unlockText(m))}` : esc(ms.reason)}</div></div>${pill}<span class="chev">${icon("chev", 18)}</span></summary><div class="topic-list">${rows}</div></details>`;
  }).join("");
  return `<section class="trm-block"><div class="trm-head"><div class="stack-sm" style="gap:6px"><span class="num">${esc(tr.code)} <span style="font-family:var(--body);font-size:16px;font-weight:700;text-transform:none;vertical-align:middle">${esc(tr.title)}</span></span><span class="muted small">${esc(tr.sub || "")}</span></div><span class="row">${tr.published === false ? '<span class="pill warn">Concept: alleen beheerders zien dit</span>' : ""}${tr.certificate ? `<span class="pill brand">${icon("award", 12)} Certificaat</span>` : ""}<span class="pill ${total && done === total ? "ok" : ""} tnum">${done}/${total}</span></span></div>${mods}</section>`;
}
function vTrain() {
  const trainings = TR.filter(t => (t.kind || "training") === "training"), deep = TR.filter(t => t.kind === "verdieping");
  return `${topline("Trainingen")}
  <div class="spread" style="align-items:flex-end"><div class="stack-sm"><h1 class="h-page">Trainingen</h1><p class="lede">Elk onderwerp heeft een video, een workbook en een quiz. Haal minimaal ${passMark()}% om het volgende onderwerp te openen.</p></div><div class="row"><button class="btn ghost" data-go="wb">${icon("clip", 16)} Mijn workbook</button>${isAdmin() ? `<button class="btn ghost" data-go="content">${icon("edit", 16)} Bewerken</button>` : ""}</div></div>
  ${trainings.map(trackBlock).join("") || (deep.length ? "" : `<div class="empty"><h2 class="h-sec">Nog geen trainingen.</h2></div>`)}
  ${deep.length ? `<div class="sec-head" style="margin-top:12px"><h2 class="h-sec">Verdieping</h2><span class="count">${deep.length} ${deep.length === 1 ? "module" : "modules"}</span></div>${deep.map(trackBlock).join("")}` : ""}`;
}

/* ---------- Onderwerp ---------- */
// Rustige YouTube-inbedding: geen gerelateerde video's van andere kanalen, afspelen in de pagina.
const YT = "?rel=0&modestbranding=1&playsinline=1&iv_load_policy=3";
function embedOf(url) {
  try {
    const u = new URL(url), h = u.hostname.replace(/^www\./, "");
    if (h === "loom.com") return { src: "https://www.loom.com/embed/" + u.pathname.split("/").filter(Boolean).pop() };
    if (h === "youtu.be") return { src: "https://www.youtube-nocookie.com/embed/" + u.pathname.slice(1) + YT };
    if (h.endsWith("youtube.com")) { const v = u.searchParams.get("v") || (/^\/(embed|shorts)\//.test(u.pathname) ? u.pathname.split("/")[2] : ""); if (v) return { src: "https://www.youtube-nocookie.com/embed/" + v + YT }; }
    if (h === "vimeo.com") { const id = u.pathname.split("/").filter(Boolean)[0]; if (/^\d+$/.test(id)) return { src: "https://player.vimeo.com/video/" + id }; }
    if (h === "player.vimeo.com") return { src: url };
    if (/\.(mp4|webm|mov)$/i.test(u.pathname)) return { file: url };
  } catch {}
  return null;
}
function vTopic() {
  const t = TOP.get(S.route.id); if (!t) return vTrain();
  const m = MOD_OF.get(t), tr = TRK_OF.get(m);
  if (!topicOpen(t)) return `${topline(esc(m.code))}<button class="linkbtn" data-go="train">${icon("left", 16)} Trainingen</button><div class="empty"><span class="pill lock">${icon("lock", 12)} Op slot</span><h2 class="h-sec">${esc(t.title)}</h2><p class="muted">${esc(modStatus(m).open ? `Rond eerst het vorige onderwerp af met ${passMark()}% of meer.` : modStatus(m).reason)}</p></div>`;
  const st = P.topics[t.id] || {}, ok = passed(t.id);
  const hasVideo = !!(t.video || t.core || (t.points || []).length), hasWb = t.workbook.length > 0, hasQuiz = t.quiz.length > 0;
  const tabs = [["video", "Video", "video", hasVideo, !!st.seen], ["workbook", "Workbook", "clip", hasWb, wbDone(t)], ["quiz", hasQuiz ? "Quiz" : "Afronden", hasQuiz ? "quiz" : "check", true, ok]].filter(x => x[3]);
  if (!tabs.some(x => x[0] === S.tab)) S.tab = tabs[0][0];
  const body = S.tab === "video" ? tVideo(t, st) : S.tab === "workbook" ? tWorkbook(t) : tQuiz(t);
  const i = ALL.indexOf(t), prev = ALL[i - 1], nxt = ALL[i + 1];
  return `${topline(`${esc(tr.code)} · ${esc(m.title)}`)}
  <div class="spread"><button class="linkbtn" data-go="train">${icon("left", 16)} Trainingen</button>${isAdmin() ? `<button class="btn ghost sm" data-edit-topic="${t.id}">${icon("edit", 14)} Bewerk dit onderwerp</button>` : ""}</div>
  <div class="stack-sm"><span class="eyebrow red">${esc(m.code)} · Onderwerp ${topicNo(t)} van ${m.topics.length}</span><div class="spread"><h1 class="h-page">${esc(t.title)}</h1>${ok ? `<span class="pill ok">${icon("check", 13)} Afgerond${st.best ? " · " + st.best + "%" : ""}</span>` : ""}</div></div>
  <div class="tabs" role="tablist">${tabs.map(([k, l, ic, , done]) => `<button role="tab" data-tab="${k}" aria-selected="${S.tab === k}">${icon(ic, 16)}${l}${done ? `<span class="tick">${icon("check", 14)}</span>` : ""}</button>`).join("")}</div>
  ${body}
  <div class="pager">${prev && topicOpen(prev) ? `<button class="linkbtn" data-topic="${prev.id}">${icon("left", 16)} ${esc(prev.title)}</button>` : "<span></span>"}${nxt && topicOpen(nxt) ? `<button class="linkbtn" data-topic="${nxt.id}">${esc(nxt.title)} ${icon("right", 16)}</button>` : nxt ? `<span class="pill lock">${icon("lock", 12)} Volgende: rond dit onderwerp af</span>` : ""}</div>`;
}
function tVideo(t, st) {
  const e = t.video ? embedOf(t.video) : null;
  let v;
  if (e && e.src && CFG.noEmbed) v = `<div class="stripes"></div><div class="vt"><small>${esc(MOD_OF.get(t).code)}</small>${esc(t.title)}</div><a class="play" href="${esc(t.video)}" target="_blank" rel="noopener" aria-label="Video openen">${icon("play", 34)}</a><div class="vfoot" style="position:absolute;left:24px;bottom:18px;font-size:13px;opacity:.75">De video opent in een nieuw tabblad</div>`;
  else if (e && e.src) v = `<iframe src="${esc(e.src)}" title="${esc(t.title)}" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowfullscreen loading="lazy"></iframe>`;
  else if (e && e.file) v = `<video src="${esc(e.file)}" controls playsinline style="position:absolute;inset:0;width:100%;height:100%;background:#000"></video>`;
  else if (t.video) v = `<div class="stripes"></div><div class="vt"><small>${esc(MOD_OF.get(t).code)}</small>${esc(t.title)}</div><a class="play" href="${esc(t.video)}" target="_blank" rel="noopener" aria-label="Video openen">${icon("play", 34)}</a>`;
  else v = `<div class="stripes"></div><div class="vt"><small>${esc(MOD_OF.get(t).code)}</small>${esc(t.title)}</div><div class="none">${icon("video", 28)}<p style="margin-top:8px">De video voor dit onderwerp volgt.</p></div>`;
  const next = t.workbook.length ? ["workbook", "Naar het workbook"] : ["quiz", t.quiz.length ? "Naar de quiz" : "Afronden"];
  return `<div class="video">${v}</div>
  ${t.core ? `<p class="core">${esc(t.core)}</p>` : ""}
  ${(t.points || []).length ? `<div class="points">${t.points.map((p, i) => `<div class="card"><div class="k">Kernpunt ${i + 1}</div><p>${esc(p)}</p></div>`).join("")}</div>` : ""}
  <div class="row">${t.video && !st.seen ? `<button class="btn ghost" data-seen="${t.id}">${icon("check", 16)} Video bekeken</button>` : ""}<button class="btn arrow" data-tab="${next[0]}"><span class="dot">${icon("right", 16)}</span>${next[1]}</button></div>`;
}
function tWorkbook(t) {
  const x = tst(t.id), filled = t.workbook.filter((_, i) => (x.wb[i] || "").trim().length >= 3).length;
  return `<div class="spread"><p class="muted">Beantwoord de vragen in je eigen woorden. Je antwoorden worden automatisch opgeslagen.</p><span class="pill tnum" id="wb-count">${filled}/${t.workbook.length} ingevuld</span></div>
  <div class="stack" style="gap:24px">${t.workbook.map((q, i) => `<div class="wb-q"><label for="wb-${t.id}-${i}"><span class="n">${String(i + 1).padStart(2, "0")}</span><span>${esc(q)}</span></label><textarea id="wb-${t.id}-${i}" data-wb="${t.id}" data-i="${i}" placeholder="Jouw antwoord">${esc(x.wb[i] || "")}</textarea></div>`).join("")}</div>
  <div class="row"><button class="btn arrow" data-tab="quiz" id="to-quiz" ${filled === t.workbook.length ? "" : "disabled"}><span class="dot">${icon("right", 16)}</span>${t.quiz.length ? "Naar de quiz" : "Afronden"}</button><span class="small muted" id="wb-hint">${filled === t.workbook.length ? "" : "Vul alle vragen in om verder te gaan."}</span></div>`;
}
function seeded(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
function hash(str) { let h = 2166136261; for (const c of String(str)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
function startQuiz(t) {
  const rnd = seeded(hash(t.id + ":" + (tst(t.id).attempts || 0) + ":" + (S.me && S.me.id)));
  const order = t.quiz.map(q => { const idx = q.options.map((_, i) => i); for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; } return idx; });
  S.quiz = { id: t.id, order, answers: {}, result: null };
}
function tQuiz(t) {
  if (!wbDone(t) && !allOpen()) return `<div class="empty"><span class="pill lock">${icon("lock", 12)} Op slot</span><h2 class="h-sec">Maak eerst het workbook af.</h2><p class="muted">Vul alle ${t.workbook.length} workbookvragen in.</p><button class="btn" data-tab="workbook">Naar het workbook</button></div>`;
  const i = ALL.indexOf(t), nxt = ALL[i + 1];
  if (!t.quiz.length) {
    if (passed(t.id)) return `<div class="card stack-sm"><h2 class="h-sec">Dit onderwerp is afgerond.</h2>${nxt && topicOpen(nxt) ? `<div><button class="btn accent arrow" data-topic="${nxt.id}" data-tab-go="video"><span class="dot">${icon("right", 16)}</span>${esc(nxt.title)}</button></div>` : ""}</div>`;
    return `<div class="card stack-sm"><h2 class="h-sec">Klaar met dit onderwerp?</h2><p class="muted">Dit onderwerp heeft geen quiz. Rond het af om verder te gaan.</p><div><button class="btn accent" data-complete="${t.id}">${icon("check", 16)} Markeer als afgerond</button></div></div>`;
  }
  if (!S.quiz || S.quiz.id !== t.id) startQuiz(t);
  const Q = S.quiz, st = P.topics[t.id] || {}, need = Math.ceil(t.quiz.length * passMark() / 100), res = Q.result;
  const qs = t.quiz.map((q, qi) => {
    const opts = Q.order[qi].map(oi => {
      const sel = Q.answers[qi] === oi;
      let cls = sel ? "sel" : "";
      if (res && res.pass && oi === q.answer) cls = "right";
      else if (res && sel) cls = oi === q.answer ? "right" : "wrong";
      return `<label class="opt ${cls}"><input type="radio" name="q${qi}" value="${oi}" data-q="${qi}" ${sel ? "checked" : ""} ${res ? "disabled" : ""}><span>${esc(q.options[oi])}</span></label>`;
    }).join("");
    return `<fieldset class="q"><h3><span class="n">${String(qi + 1).padStart(2, "0")}</span><span>${esc(q.q)}</span></h3><div class="opts">${opts}</div></fieldset>`;
  }).join("");
  let foot;
  if (!res) foot = `<div class="row"><button class="btn accent" data-submit-quiz="${t.id}" id="submit-quiz" ${Object.keys(Q.answers).length === t.quiz.length ? "" : "disabled"}>Inleveren</button><span class="small muted">Je kunt de quiz zo vaak maken als nodig.</span></div>`;
  else {
    const m = MOD_OF.get(t), tr = TRK_OF.get(m), last = t === m.topics.at(-1);
    const trDone = last && trackDone(tr), mDone = last && modDone(m);
    const r = 46, c = 2 * Math.PI * r, ring = `<svg width="112" height="112" viewBox="0 0 112 112" role="img" aria-label="Score ${res.pct}%"><circle cx="56" cy="56" r="${r}" fill="none" stroke="var(--raised)" stroke-width="9"/><circle cx="56" cy="56" r="${r}" fill="none" stroke="${res.pass ? "var(--ok)" : "var(--accent)"}" stroke-width="9" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - res.pct / 100)}" transform="rotate(-90 56 56)"/><text x="56" y="64" text-anchor="middle" font-family="Anton, Impact, sans-serif" font-size="28" fill="var(--ink)">${res.pct}%</text></svg>`;
    const title = !res.pass ? "Nog niet gehaald." : trDone ? `${tr.code} afgerond!${tr.statusOnComplete ? ` Je bent nu ${tr.statusOnComplete}.` : ""}` : mDone ? `${m.code} afgerond.` : "Gehaald. Op naar het volgende onderwerp.";
    const action = !res.pass ? `<button class="btn" data-retry="${t.id}">Opnieuw proberen</button><button class="btn ghost" data-tab="video">Terug naar de stof</button>`
      : trDone && tr.certificate ? `<button class="btn accent" data-cert="${tr.id}">${icon("award", 16)} Bekijk je certificaat</button>`
      : nxt && topicOpen(nxt) ? `<button class="btn accent arrow" data-topic="${nxt.id}" data-tab-go="video"><span class="dot">${icon("right", 16)}</span>${esc(nxt.title)}</button>` : `<button class="btn" data-go="dash">Naar dashboard</button>`;
    foot = `<div class="card result">${ring}<div class="stack-sm"><h2 class="h-sec">${esc(title)}</h2><p class="muted">${res.correct} van ${t.quiz.length} goed.${res.pass ? "" : ` Je hebt er ${need} nodig. De rood gemarkeerde antwoorden waren fout.`}</p><div class="row" style="margin-top:8px">${action}</div></div></div>`;
  }
  return `<div class="spread"><p class="muted">${t.quiz.length} vragen. Je hebt er ${need} goed nodig (${passMark()}%).${st.attempts ? ` Beste score: ${st.best}%.` : ""}</p><span class="pill tnum" id="q-count">${Object.keys(Q.answers).length}/${t.quiz.length} beantwoord</span></div><div class="stack" style="gap:26px">${qs}</div>${foot}`;
}
function completeTopic(t, pct) {
  const st = tst(t.id);
  const m = MOD_OF.get(t), tr = TRK_OF.get(m), wasDone = trackDone(tr), oldStatus = statusOf();
  if (pct != null) { st.attempts = (st.attempts || 0) + 1; st.best = Math.max(st.best || 0, pct); }
  if ((pct == null || pct >= passMark()) && !st.passedAt) st.passedAt = new Date().toISOString();
  markActive(); save();
  if (!wasDone && trackDone(tr)) toast(statusOf() !== oldStatus ? `Gefeliciteerd! Je status is nu ${statusOf()}.` : `${tr.code} afgerond!`);
}

/* ---------- Workbook-overzicht ---------- */
function vWorkbook() {
  let filled = 0, total = 0;
  for (const t of ALL) { total += t.workbook.length; filled += t.workbook.filter((_, i) => ((P.topics[t.id] && P.topics[t.id].wb[i]) || "").trim().length >= 3).length; }
  const started = ALL.filter(t => t.workbook.some((_, i) => ((P.topics[t.id] && P.topics[t.id].wb[i]) || "").trim()));
  const list = started.length ? started.map(t => {
    const ans = P.topics[t.id].wb, f = t.workbook.filter((_, i) => (ans[i] || "").trim().length >= 3).length;
    return `<details class="module"><summary><span class="code">${esc(MOD_OF.get(t).code)}</span><div><h3>${esc(t.title)}</h3><div class="sub tnum">${f}/${t.workbook.length} vragen beantwoord</div></div>${passed(t.id) ? `<span class="pill ok">${icon("check", 13)} Afgerond</span>` : `<span class="pill">Bezig</span>`}<span class="chev">${icon("chev", 18)}</span></summary>
      <div class="topic-list" style="padding:20px;display:flex;flex-direction:column;gap:18px">${t.workbook.map((q, i) => `<div class="stack-sm" style="gap:4px"><b>${esc(q)}</b><p class="muted" style="white-space:pre-wrap">${esc(ans[i] || "Nog niet ingevuld")}</p></div>`).join("")}<div><button class="btn ghost sm" data-topic="${t.id}" data-tab-go="workbook">${icon("edit", 14)} Antwoorden aanpassen</button></div></div></details>`;
  }).join("") : `<div class="empty">${icon("clip", 24)}<h2 class="h-sec">Nog geen antwoorden.</h2><p class="muted">Je antwoorden verschijnen hier zodra je je eerste workbook invult.</p>${ALL.length ? `<button class="btn" data-topic="${(nextTopic() || ALL[0]).id}">Begin met leren</button>` : ""}</div>`;
  return `${topline("Mijn workbook")}<button class="linkbtn" data-go="train">${icon("left", 16)} Trainingen</button>
  <div class="stack-sm"><h1 class="h-page">Mijn workbook</h1><p class="lede">Alle antwoorden die je hebt gegeven: ${filled} van ${total} ingevuld.</p></div><div class="stack" style="gap:12px">${list}</div>`;
}

/* ---------- Certificaten ---------- */
const certNo = t => `PM-${String(t.code).replace(/\s+/g, "")}-${iso(trackDoneAt(t)).replace(/-/g, "")}-${(hash((S.me && S.me.id) + t.id) % 46656).toString(36).toUpperCase().padStart(3, "0")}`;
function vCerts() {
  const list = certTracks();
  const cards = list.map(t => {
    const done = trackDone(t), rm = realMods(t);
    return `<div class="card stack"><div class="cert-thumb ${done ? "on" : ""}">${done ? `<img src="/brand/mark.svg" alt=""><span class="lbl">${esc(t.code)}</span>` : icon("lock", 22)}</div><div class="stack-sm" style="gap:2px"><span class="eyebrow">${esc(t.code)}</span><h3 class="h-sec" style="font-size:18px">${esc(t.title)}</h3><span class="small muted">${done ? `Behaald op ${fmtDate(trackDoneAt(t))}` : `${rm.filter(modDone).length}/${rm.length} onderdelen afgerond`}</span></div>${done ? `<div><button class="btn sm" data-cert="${t.id}">Bekijken</button></div>` : `<span class="pill lock" style="align-self:flex-start">${icon("lock", 12)} Nog niet behaald</span>`}</div>`;
  }).join("");
  return `${topline("Certificaten")}<div class="stack-sm"><h1 class="h-page">Certificaten</h1><p class="lede">Elke afgeronde trainingsmodule levert een eigen digitaal certificaat op. Je rondt een module af als je alle quizzen met ${passMark()}% of meer hebt gehaald.</p></div>
  ${list.length ? `<div class="grid-${list.length >= 3 ? 3 : 2}">${cards}</div>` : `<div class="empty"><h2 class="h-sec">Nog geen certificaten ingesteld.</h2></div>`}`;
}
function vCert() {
  const t = TR.find(x => x.id === S.route.id);
  if (!t || !trackDone(t)) return vCerts();
  const nm = myName(), rm = realMods(t);
  return `${topline("Certificaat")}<button class="linkbtn" data-go="certs">${icon("left", 16)} Alle certificaten</button>
  ${nm ? "" : `<div class="note">${icon("info", 18)}<span>Je naam ontbreekt. Vul hem in bij <button class="linkbtn" data-go="profile" style="text-decoration:underline">Profiel</button>.</span></div>`}
  <div class="cert-full">
    <div class="spread"><img src="/brand/wordmark-red.png" alt="PM Agency" style="width:200px"><span class="eyebrow">Certificaat · ${esc(t.code)}</span></div>
    <div class="stack-sm" style="gap:12px"><span class="ctitle">Certificaat ${esc(t.code)}</span><span style="color:#8c7a7b">Hierbij verklaren wij dat</span><div class="cname">${esc(nm || "Jouw naam")}</div><p style="max-width:62ch;color:#5a4446">de trainingsmodule <b>${esc(t.code)} ${esc(t.title)}</b> met goed gevolg heeft afgerond: ${rm.map(m => esc(m.code + " " + m.title)).join(", ")}. Elke quiz is behaald met ${passMark()}% of meer.</p></div>
    <div class="cmeta"><div><span class="eyebrow">Datum</span><b>${fmtDate(trackDoneAt(t))}</b></div><div><span class="eyebrow">Onderwerpen</span><b class="tnum">${rm.reduce((a, m) => a + m.topics.length, 0)}</b></div><div><span class="eyebrow">Certificaatnummer</span><b>${certNo(t)}</b></div></div>
  </div>
  <div class="row"><button class="btn accent" data-download-cert="${t.id}">${icon("dl", 16)} Download als afbeelding</button></div>`;
}

/* ---------- Benefits ---------- */
function vBenefits() {
  const B = S.benefits, items = (B.items || []).filter(b => b && b.title);
  let body;
  if (isAdmin() && S.benDraft) {
    body = `<div class="stack">${S.benDraft.map((b, i) => `<div class="card stack-sm"><div class="grid-2"><label class="field"><span>Titel</span><input type="text" data-ben="${i}" data-k="title" value="${esc(b.title)}"></label><label class="field"><span>Voorwaarde</span><input type="text" data-ben="${i}" data-k="req" value="${esc(b.req)}" placeholder="Bijv. vanaf 50 sales per maand"></label></div><label class="field"><span>Omschrijving</span><textarea data-ben="${i}" data-k="desc" style="min-height:70px">${esc(b.desc)}</textarea></label><div><button class="linkbtn" data-ben-del="${i}">${icon("trash", 16)} Verwijderen</button></div></div>`).join("")}
      <div class="row"><button class="btn ghost" data-ben-add>${icon("plus", 16)} Benefit toevoegen</button><button class="btn accent" data-ben-save>Opslaan</button><button class="linkbtn" data-ben-cancel>Annuleren</button></div></div>`;
  } else if (!items.length) body = `<div class="empty">${icon("gift", 24)}<h2 class="h-sec">Hier komen de PM Benefits.</h2><p class="muted">${isAdmin() ? "Voeg de voordelen toe die je verkopers krijgen." : "De benefits worden binnenkort toegevoegd."}</p>${isAdmin() ? `<button class="btn" data-ben-edit>${icon("plus", 16)} Benefits toevoegen</button>` : ""}</div>`;
  else body = `${B.example ? `<div class="note">${icon("info", 18)}<span>Dit zijn voorbeeldbenefits.${isAdmin() ? " Pas ze aan via Bewerken." : ""}</span></div>` : ""}<div class="grid-3">${items.map(b => `<div class="card benefit"><span class="ic">${icon("star", 20)}</span><h3>${esc(b.title)}</h3>${b.desc ? `<p class="muted">${esc(b.desc)}</p>` : ""}${b.req ? `<span class="pill" style="align-self:flex-start">${esc(b.req)}</span>` : ""}</div>`).join("")}</div>${isAdmin() ? `<div><button class="btn ghost sm" data-ben-edit>${icon("edit", 14)} Bewerken</button></div>` : ""}`;
  return `${topline("PM Benefits")}<div class="stack-sm"><span class="eyebrow red">Meer dan verdienen</span><h1 class="h-page">PM Benefits</h1><p class="lede">Wat je bij PM Agency krijgt naast je verdiensten.</p></div>${body}`;
}

/* ---------- Leaderboard ---------- */
async function loadLb() { try { S.lb = await be.leaderboard(); } catch { S.lb = []; } if (S.route.v === "lb") render(); }
function vLb() {
  const key = S.lbMode === "month" ? "sales_month" : "sales_total";
  const rows = (S.lb || []).slice().sort((a, b) => (b[key] || 0) - (a[key] || 0));
  const seg = `<div class="seg" role="group" aria-label="Periode"><button data-lbmode="month" aria-pressed="${S.lbMode === "month"}">Deze maand</button><button data-lbmode="total" aria-pressed="${S.lbMode === "total"}">Totaal</button></div>`;
  let body;
  if (!rows.length) body = `<div class="empty">${icon("trophy", 24)}<h2 class="h-sec">Nog geen standen.</h2><p class="muted">${isAdmin() ? "Vul de sales in onder Beheer → Gebruikers." : "De leaderboard wordt bijgewerkt door PM Agency."}</p></div>`;
  else {
    const top = rows.slice(0, 3), order = top.length === 3 ? [top[1], top[0], top[2]] : top;
    body = `<div class="podium">${order.map(r => { const k = rows.indexOf(r) + 1; return `<div class="pod ${k === 1 ? "first" : ""}"><span class="rank">#${k}</span><span class="nm">${esc(r.name || "Onbekend")}</span><span class="val">${r[key] || 0}</span><span class="small" style="opacity:.7">${esc(LEVELS[levelIdx(r.sales_total || 0)].n)} · ${esc(r.status || "")}</span></div>`; }).join("")}</div>
    <div class="table-wrap"><table><thead><tr><th>#</th><th>Naam</th><th>Journey</th><th>Status</th><th class="num">Deze maand</th><th class="num">Totaal</th></tr></thead><tbody>${rows.map((r, i) => `<tr class="${S.me && r.id === S.me.id ? "me" : ""}"><td>${i + 1}</td><td><b>${esc(r.name || "Onbekend")}</b>${S.me && r.id === S.me.id ? ' <span class="pill go">jij</span>' : ""}</td><td>${esc(LEVELS[levelIdx(r.sales_total || 0)].n)}</td><td class="small muted">${esc(r.status || "")}</td><td class="num">${r.sales_month || 0}</td><td class="num">${r.sales_total || 0}</td></tr>`).join("")}</tbody></table></div>`;
  }
  return `${topline("Leaderboard")}<div class="spread" style="align-items:flex-end"><div class="stack-sm"><span class="eyebrow red">Salesgame</span><h1 class="h-page">Leaderboard</h1></div><div class="row">${rows.length ? seg : ""}${isAdmin() ? `<button class="btn ghost sm" data-go="users">${icon("edit", 14)} Sales bijwerken</button>` : ""}</div></div>${body}`;
}

/* ---------- Profiel ---------- */
function vProfile() {
  const s = sales();
  return `${topline("Profiel")}<div class="stack-sm"><h1 class="h-page">Profiel</h1><div class="row"><span class="status-chip"><span class="ic">${icon("crown", 14)}</span>${esc(statusOf())}</span><span class="pill">${esc(LEVELS[levelIdx(s)].n)} · ${s} sales</span>${isStaff() ? `<span class="pill brand">${ROLE_LABEL[role()]}</span>` : ""}</div></div>
  <div class="grid-2">
    <div class="card stack"><h2 class="h-sec">Over jou</h2>
      <label class="field"><span>Naam op certificaten</span><input type="text" id="p-name" value="${esc(myName())}" placeholder="Voor- en achternaam" autocomplete="name"></label>
      <label class="field"><span>Startdatum bij PM Agency</span><input type="date" id="p-start" value="${esc((S.me.start_date || "").slice(0, 10))}"><small>Sommige modules openen na een aantal werkdagen vanaf je startdatum.</small></label>
      <div><button class="btn sm" data-save-profile>Opslaan</button></div>
    </div>
    <div class="card stack"><h2 class="h-sec">Snel naar</h2>
      <button class="btn ghost" data-go="certs">${icon("award", 16)} Certificaten (${certCount()}/${certTracks().length})</button>
      <button class="btn ghost" data-go="benefits">${icon("gift", 16)} PM Benefits</button>
      <button class="btn ghost" data-go="wb">${icon("clip", 16)} Mijn workbook</button>
      <button class="btn ghost" data-go="mydossier">${icon("folder", 16)} Mijn dossier</button>
      ${isStaff() ? `<button class="btn ghost" data-go="users">${icon("users", 16)} Gebruikers</button><button class="btn ghost" data-go="dossiers">${icon("folder", 16)} Dossiers</button><button class="btn ghost" data-go="formats">${icon("chat", 16)} Gespreksformats</button>` : ""}
      ${isAdmin() ? `<button class="btn ghost" data-go="content">${icon("layers", 16)} Inhoud beheren</button>` : ""}
    </div>
  </div>
  ${isAdmin() ? `<div class="card stack-sm"><h2 class="h-sec">Voorbeeldmodus</h2><label class="check"><input type="checkbox" id="p-preview" ${S.preview ? "checked" : ""}><span>Open alle modules en quizzen voor jezelf om de inhoud na te lopen. Telt niet mee voor je voortgang en geldt alleen in dit tabblad.</span></label></div>` : ""}
  ${be.mode === "demo" ? `<div class="card stack-sm"><h2 class="h-sec">Demo: bekijk als</h2><p class="small muted">Wissel van rol om te zien wat elke rol ziet.</p><div class="seg">${["super_admin", "admin", "management", "user"].map(r => `<button data-demo-role="${r}" aria-pressed="${role() === r}">${ROLE_LABEL[r]}</button>`).join("")}</div></div>` : ""}
  <div class="card stack-sm"><h2 class="h-sec">Opnieuw beginnen</h2><p class="small muted">Wist je workbookantwoorden, quizscores en certificaten.</p>
  ${S.confirm && S.confirm.kind === "reset" ? `<div class="confirm"><span class="small">Weet je het zeker? Dit kun je niet ongedaan maken.</span><button class="btn sm" data-reset-yes>Ja, alles wissen</button><button class="linkbtn" data-confirm-no>Annuleren</button></div>` : `<div><button class="btn ghost sm" data-reset>Voortgang wissen</button></div>`}</div>
  <div class="card spread"><div class="stack-sm" style="gap:2px"><span class="eyebrow">Ingelogd als</span><b>${esc(S.me.email)}</b></div><button class="btn ghost sm" data-logout>${be.mode === "demo" ? "Demo opnieuw beginnen" : "Uitloggen"}</button></div>`;
}

/* ---------- Beheer: gebruikers ---------- */
async function loadUsers() { if (!isStaff()) return; try { S.users = await be.listUsers(); } catch (e) { S.users = []; toast(e.message || "Laden lukte niet"); } S.userDraft = {}; if (S.route.v === "users") render(); }
function vUsers() {
  if (!isStaff()) return vDash();
  const ro = !isAdmin();
  const U = S.users;
  const draftN = Object.keys(S.userDraft).length;
  const add = S.addUser ? `<div class="card stack"><h2 class="h-sec">Gebruiker toevoegen</h2>
    <div class="grid-2"><label class="field"><span>Naam</span><input type="text" id="nu-name" value="${esc(S.addUser.name)}" placeholder="Voor- en achternaam"></label><label class="field"><span>E-mailadres</span><input type="email" id="nu-email" value="${esc(S.addUser.email)}" placeholder="naam@pmagency.nl"></label>
    <label class="field"><span>Startdatum</span><input type="date" id="nu-start" value="${esc(S.addUser.start_date)}"></label>
    <label class="field"><span>Rol</span><select id="nu-role">${["user", "management", "admin"].filter(r => r === "user" || isSuper()).map(r => `<option value="${r}" ${S.addUser.role === r ? "selected" : ""}>${ROLE_LABEL[r]}</option>`).join("")}</select>${isSuper() ? "" : "<small>Alleen de super-admin kan management en admins toevoegen.</small>"}</label></div>
    <p class="small muted">De nieuwe gebruiker start als ${esc(C.startStatus || "Junior-Ambassadeur")} en logt in op deze site met dit e-mailadres en een code die per mail komt.</p>
    <div class="row"><button class="btn accent" data-user-create ${S.addUser.busy ? "disabled" : ""}>${S.addUser.busy ? "Bezig…" : "Toevoegen"}</button><button class="linkbtn" data-user-add-cancel>Annuleren</button></div></div>` : "";
  let table;
  if (!U) table = `<p class="muted">Laden…</p>`;
  else table = `<div class="table-wrap"><table><thead><tr><th>Naam</th><th>Rol</th><th>Status</th><th>Voortgang</th><th>Journey</th><th class="num">Sales maand</th><th class="num">Sales totaal</th><th>Startdatum</th><th>Laatst actief</th><th></th></tr></thead><tbody>${U.map(u => {
    const d = S.userDraft[u.id] || {}, val = k => d[k] ?? u[k] ?? "", sm = u.summary || {};
    const canRole = isSuper() && u.id !== S.me.id, canDel = !ro && u.id !== S.me.id && u.role !== "super_admin" && (isSuper() || u.role === "user");
    const confirmDel = S.confirm && S.confirm.kind === "deluser" && S.confirm.id === u.id;
    return `<tr><td><b>${esc(u.display_name || sm.name || "Naam onbekend")}</b><div class="small muted">${esc(u.email || "")}</div></td>
      <td>${canRole ? `<select class="cell-select" data-user-role="${u.id}">${["user", "management", "admin", "super_admin"].map(r => `<option value="${r}" ${u.role === r ? "selected" : ""}>${ROLE_LABEL[r]}</option>`).join("")}</select>` : `<span class="pill ${u.role === "user" ? "" : "brand"}">${ROLE_LABEL[u.role] || u.role}</span>`}</td>
      <td class="small">${esc(sm.status || C.startStatus || "Junior-Ambassadeur")}</td>
      <td><div class="row" style="flex-wrap:nowrap;gap:8px"><div class="bar" style="width:90px"><i style="width:${Math.min(100, sm.pct || 0)}%"></i></div><span class="small tnum">${sm.pct || 0}%</span></div>${sm.current_title ? `<div class="small muted">${esc(sm.current_title)}</div>` : ""}</td>
      <td class="small">${esc(LEVELS[levelIdx(Number(val("sales_total")) || 0)].n)}</td>
      ${ro ? `<td class="num">${u.sales_month || 0}</td><td class="num">${u.sales_total || 0}</td><td class="small">${u.start_date ? fmtDate(u.start_date) : "–"}</td>` : `<td class="num"><input class="cell-input" type="number" min="0" inputmode="numeric" data-user="${u.id}" data-k="sales_month" value="${esc(val("sales_month"))}" aria-label="Sales deze maand"></td>
      <td class="num"><input class="cell-input" type="number" min="0" inputmode="numeric" data-user="${u.id}" data-k="sales_total" value="${esc(val("sales_total"))}" aria-label="Sales totaal"></td>
      <td><input class="cell-input" style="width:150px!important;text-align:left" type="date" data-user="${u.id}" data-k="start_date" value="${esc(String(val("start_date")).slice(0, 10))}" aria-label="Startdatum"></td>`}
      <td class="small muted">${sm.last_active ? fmtDate(sm.last_active) : "Nog niet"}</td>
      <td><span class="row" style="flex-wrap:nowrap;gap:6px"><button class="btn ghost sm" data-dossier="${u.id}">${icon("folder", 14)} Dossier</button>${confirmDel ? `<span class="row" style="flex-wrap:nowrap;gap:6px"><button class="btn danger sm" data-user-del-yes="${u.id}">Verwijderen</button><button class="linkbtn" data-confirm-no>Nee</button></span>` : canDel ? `<button class="iconbtn" data-user-del="${u.id}" aria-label="Gebruiker verwijderen">${icon("trash", 15)}</button>` : ""}</span></td></tr>`;
  }).join("")}</tbody></table></div>`;
  const resetConfirm = S.confirm && S.confirm.kind === "monthreset";
  return `${topline("Beheer")}<div class="spread" style="align-items:flex-end"><div class="stack-sm"><span class="eyebrow red">Beheer</span><h1 class="h-page">Gebruikers</h1><p class="lede">${ro ? "Voortgang, sales en dossiers van het team. Als management kun je meekijken en gesprekken toevoegen aan dossiers." : "Voeg verkopers toe, werk dagelijks de sales bij en volg de voortgang."}${isSuper() ? " Als super-admin wijzig je ook rollen." : ""}</p></div>${S.addUser || ro ? "" : `<button class="btn accent" data-user-add>${icon("plus", 16)} Gebruiker toevoegen</button>`}</div>
  ${add}${table}
  ${ro ? "" : `<div class="row"><button class="btn accent" id="users-save" data-users-save ${draftN ? "" : "disabled"}>${draftN ? `Wijzigingen opslaan (${draftN})` : "Wijzigingen opslaan"}</button><button class="linkbtn" id="users-discard" data-users-discard ${draftN ? "" : "hidden"}>Annuleren</button><span class="small muted">Pas sales of startdatum aan in de tabel en klik op Opslaan.</span>
  <span style="margin-left:auto">${resetConfirm ? `<span class="confirm"><span class="small">Alle "sales deze maand" op 0 zetten?</span><button class="btn sm" data-month-reset-yes>Ja, nieuwe maand</button><button class="linkbtn" data-confirm-no>Annuleren</button></span>` : `<button class="btn ghost sm" data-month-reset>Nieuwe maand starten</button>`}</span></div>`}`;
}

/* ---------- Beheer: inhoud ---------- */
function edFind(id) {
  const d = S.ed.d;
  if (id === "settings") return { kind: "settings", node: d };
  for (const t of d.tracks) {
    if (t.id === id) return { kind: "track", node: t, arr: d.tracks };
    for (const m of t.modules) {
      if (m.id === id) return { kind: "module", node: m, arr: t.modules, track: t };
      for (const tp of m.topics) if (tp.id === id) return { kind: "topic", node: tp, arr: m.topics, module: m, track: t };
    }
  }
  return null;
}
function openEditor(selId) {
  if (!S.ed) S.ed = { d: clone(C), sel: null, dirty: false };
  if (selId) S.ed.sel = selId;
  if (!S.ed.sel || !edFind(S.ed.sel)) S.ed.sel = (S.ed.d.tracks[0] || {}).id || "settings";
}
function treeHtml() {
  const d = S.ed.d, cur = S.ed.sel;
  const n = (id, cls, label, tag) => `<button class="node ${cls}" data-ed-sel="${id}" aria-current="${cur === id}"><span>${esc(label)}</span>${tag ? `<span class="tag">${esc(tag)}</span>` : ""}</button>`;
  return n("settings", "lv0", "Algemene instellingen") + d.tracks.map(t =>
    n(t.id, "lv0", `${t.code} ${t.title}`, t.published === false ? "concept" : KIND_LABEL[t.kind || "training"]) +
    t.modules.map(m => n(m.id, "lv1", `${m.code} ${m.title}`) + m.topics.map(tp => n(tp.id, "lv2", tp.title || "Naamloos onderwerp")).join("") + `<button class="node add" data-ed-add="topic:${m.id}">${icon("plus", 14)} Onderwerp</button>`).join("") +
    `<button class="node add l1" data-ed-add="module:${t.id}">${icon("plus", 14)} Onderdeel</button>`).join("") +
    `<button class="node add l0" data-ed-add="track">${icon("plus", 14)} Nieuwe module</button>`;
}
const fld = (label, html, hint) => `<label class="field"><span>${label}</span>${html}${hint ? `<small>${hint}</small>` : ""}</label>`;
const inp = (f, v, ph = "", type = "text") => `<input type="${type}" data-ef="${f}" value="${esc(v ?? "")}" placeholder="${esc(ph)}">`;
function formHtml() {
  const f = edFind(S.ed.sel); if (!f) return "";
  const N = f.node, delC = S.confirm && S.confirm.kind === "eddel";
  const tools = f.kind === "settings" ? "" : `<div class="row"><button class="iconbtn" data-ed-move="up" aria-label="Omhoog">${icon("up", 16)}</button><button class="iconbtn" data-ed-move="down" aria-label="Omlaag">${icon("down", 16)}</button>${delC ? `<span class="confirm"><span class="small">${f.kind === "topic" ? "Onderwerp" : f.kind === "module" ? "Onderdeel met alle onderwerpen" : "Module met alles erin"} verwijderen? Voortgang van gebruikers hierop vervalt.</span><button class="btn danger sm" data-ed-del-yes>Verwijderen</button><button class="linkbtn" data-confirm-no>Annuleren</button></span>` : `<button class="btn ghost sm" data-ed-del>${icon("trash", 14)} Verwijderen</button>`}</div>`;
  if (f.kind === "settings") return `<div class="card form-card"><div class="stack-sm"><span class="eyebrow">Algemeen</span><h2 class="h-sec">Instellingen</h2></div>
    <div class="grid-2">${fld("Slaagpercentage quiz (%)", inp("passMark", N.passMark ?? 80, "80", "number"), "Geldt voor alle quizzen.")}${fld("Startstatus nieuwe gebruikers", inp("startStatus", N.startStatus ?? "Junior-Ambassadeur", "Junior-Ambassadeur"), "De status die iedereen bij de start heeft.")}</div></div>`;
  if (f.kind === "track") return `<div class="card form-card"><div class="spread"><div class="stack-sm"><span class="eyebrow">Module</span><h2 class="h-sec">${esc(N.code)} ${esc(N.title)}</h2></div>${tools}</div>
    <div class="grid-2">${fld("Code", inp("code", N.code, "TRM 3"), "Korte naam, bijvoorbeeld TRM 3 of Verdieping 1.")}${fld("Naam", inp("title", N.title, "Closing en klantrelatie"))}
    ${fld("Specificatie", `<select data-ef="kind"><option value="training" ${N.kind !== "verdieping" ? "selected" : ""}>Training</option><option value="verdieping" ${N.kind === "verdieping" ? "selected" : ""}>Verdieping</option></select>`, "Verdiepingen staan apart onder Trainingen.")}
    ${fld("Nieuwe status na afronden", inp("statusOnComplete", N.statusOnComplete, "Bijv. Ambassadeur"), "Leeg laten als de status niet verandert.")}</div>
    ${fld("Korte omschrijving", inp("sub", N.sub, "Waar gaat deze module over?"))}
    <label class="check"><input type="checkbox" data-ef="certificate" data-type="bool" ${N.certificate ? "checked" : ""}><span><b>Certificaat</b> bij afronden van deze module</span></label>
    <label class="check"><input type="checkbox" data-ef="published" data-type="bool" ${N.published !== false ? "checked" : ""}><span><b>Zichtbaar voor gebruikers</b>. Uit = concept, alleen beheerders zien het.</span></label>
    <div><button class="btn ghost sm" data-ed-add="module:${N.id}">${icon("plus", 14)} Onderdeel toevoegen</button></div></div>`;
  if (f.kind === "module") {
    const u = N.unlock || {};
    return `<div class="card form-card"><div class="spread"><div class="stack-sm"><span class="eyebrow">Onderdeel van ${esc(f.track.code)}</span><h2 class="h-sec">${esc(N.code)} ${esc(N.title)}</h2></div>${tools}</div>
    <div class="grid-2">${fld("Code", inp("code", N.code, "3.1"))}${fld("Naam", inp("title", N.title, "Afsluittechnieken"))}</div>
    <div class="stack-sm"><span class="eyebrow">Wanneer gaat dit onderdeel open?</span><p class="small muted">Alle ingevulde voorwaarden moeten kloppen. Laat alles leeg om het direct open te zetten.</p></div>
    <label class="check"><input type="checkbox" data-eu="prev" ${u.prev ? "checked" : ""}><span>Pas na het afronden van het vorige onderdeel</span></label>
    <div class="grid-3">${fld("Minimaal aantal sales", `<input type="number" min="0" data-eu="sales" value="${esc(u.sales || "")}" placeholder="Bijv. 100">`, "Totaal aantal sales van de gebruiker.")}
    ${fld("Na aantal werkdagen", `<input type="number" min="0" data-eu="workdays" value="${esc(u.workdays || "")}" placeholder="Bijv. 4">`, "Vanaf de startdatum.")}
    ${fld("Maanden na vorige onderdeel", `<input type="number" min="0" data-eu="months" value="${esc(u.months || "")}" placeholder="Bijv. 1">`, "Gerekend vanaf het afronden.")}</div>
    <div><button class="btn ghost sm" data-ed-add="topic:${N.id}">${icon("plus", 14)} Onderwerp toevoegen</button></div></div>`;
  }
  const arr = (key, label, ph) => `<div class="stack-sm"><span class="eyebrow">${label}</span><div class="list-edit">${(N[key] || []).map((v, i) => `<div class="item"><textarea data-earr="${key}" data-i="${i}" placeholder="${esc(ph)}">${esc(v)}</textarea><button class="iconbtn" data-earr-del="${key}:${i}" aria-label="Verwijderen">${icon("trash", 14)}</button></div>`).join("")}</div><div><button class="btn ghost sm" data-earr-add="${key}">${icon("plus", 14)} Toevoegen</button></div></div>`;
  const quiz = `<div class="stack-sm"><span class="eyebrow">Quizvragen</span><p class="small muted">Kies per vraag het juiste antwoord met het rondje. De volgorde van de antwoorden wordt per poging geschud.</p>${N.quiz.map((q, i) => `<div class="qedit"><div class="spread"><b>Vraag ${i + 1}</b><button class="iconbtn" data-eq-del="${i}" aria-label="Vraag verwijderen">${icon("trash", 14)}</button></div><input type="text" data-eq="${i}" value="${esc(q.q)}" placeholder="De vraag">${q.options.map((o, j) => `<div class="optrow"><input type="radio" name="ans-${i}" data-ea="${i}:${j}" ${q.answer === j ? "checked" : ""} aria-label="Juiste antwoord"><input type="text" data-eo="${i}:${j}" value="${esc(o)}" placeholder="Antwoord ${j + 1}"><button class="iconbtn" data-eo-del="${i}:${j}" aria-label="Antwoord verwijderen" ${q.options.length <= 2 ? "disabled" : ""}>${icon("trash", 14)}</button></div>`).join("")}<div><button class="linkbtn" data-eo-add="${i}">${icon("plus", 14)} Antwoord</button></div></div>`).join("")}<div><button class="btn ghost sm" data-eq-add>${icon("plus", 14)} Vraag toevoegen</button></div></div>`;
  return `<div class="card form-card"><div class="spread"><div class="stack-sm"><span class="eyebrow">Onderwerp in ${esc(f.module.code)}</span><h2 class="h-sec">${esc(N.title || "Naamloos onderwerp")}</h2></div>${tools}</div>
    ${fld("Titel", inp("title", N.title, "Titel van het onderwerp"))}
    ${fld("Video", inp("video", N.video, "https://www.loom.com/share/…", "url"), "Plak een link van Loom, YouTube of Vimeo, of een directe link naar een mp4. De video wordt in de pagina getoond.")}
    ${fld("Uitleg", `<textarea data-ef="core" style="min-height:130px" placeholder="De kern van dit onderwerp">${esc(N.core)}</textarea>`)}
    ${arr("points", "Kernpunten", "Een kernpunt")}
    ${arr("workbook", "Workbookvragen", "Een open vraag voor het workbook")}
    ${quiz}</div>`;
}
function vContent() {
  if (!isAdmin()) return vDash();
  openEditor();
  const leave = S.confirm && S.confirm.kind === "leave";
  return `${topline("Beheer")}<div class="stack-sm"><span class="eyebrow red">Beheer</span><h1 class="h-page">Inhoud</h1><p class="lede">Bewerk modules, onderdelen en onderwerpen: video, uitleg, kernpunten, workbook en quiz. Wijzigingen zijn pas zichtbaar voor gebruikers na Opslaan.</p></div>
  <div class="editor"><nav class="tree" id="tree" aria-label="Inhoud">${treeHtml()}</nav><div id="ed-form">${formHtml()}</div></div>
  <div class="savebar" id="savebar" ${S.ed.dirty || leave ? "" : "hidden"}>${leave ? `<span>Je hebt wijzigingen die nog niet zijn opgeslagen.</span><span class="row"><button class="btn accent sm" data-ed-save>Opslaan</button><button class="btn ghost sm" data-ed-leave>Niet opslaan</button><button class="btn ghost sm" data-confirm-no>Blijven</button></span>` : `<span>Niet-opgeslagen wijzigingen</span><span class="row"><button class="btn ghost sm" data-ed-discard>Ongedaan maken</button><button class="btn accent sm" data-ed-save>Opslaan</button></span>`}</div>`;
}
function edDirty() { S.ed.dirty = true; const sb = document.getElementById("savebar"); if (sb) sb.hidden = false; const tr = document.getElementById("tree"); if (tr) tr.innerHTML = treeHtml(); }
function validate(d) {
  for (const t of d.tracks) {
    if (!t.code || !t.title) return `Geef module "${t.code || t.title || "zonder naam"}" een code en een naam.`;
    for (const m of t.modules) {
      if (!m.title) return `Een onderdeel in ${t.code} heeft geen naam.`;
      for (const tp of m.topics) {
        if (!tp.title) return `Een onderwerp in ${m.code} heeft geen titel.`;
        tp.points = tp.points.filter(x => x.trim()); tp.workbook = tp.workbook.filter(x => x.trim());
        for (const [i, q] of tp.quiz.entries()) {
          q.options = q.options.map(o => o.trim());
          if (!q.q.trim()) return `Vraag ${i + 1} van "${tp.title}" is leeg.`;
          if (q.options.filter(Boolean).length < 2 || q.options.some(o => !o)) return `Vraag ${i + 1} van "${tp.title}" heeft lege of te weinig antwoorden.`;
          if (!(q.answer >= 0 && q.answer < q.options.length)) return `Kies het juiste antwoord bij vraag ${i + 1} van "${tp.title}".`;
        }
      }
    }
  }
  return null;
}

/* ---------- Login ---------- */
function vLogin() {
  const L = S.login;
  const form = L.step === "email"
    ? `<form class="stack" id="login-form" data-login="email"><label class="field"><span>E-mailadres</span><input type="email" id="login-email" required autocomplete="email" inputmode="email" placeholder="naam@pmagency.nl" value="${esc(L.email)}"></label><button class="btn accent" type="submit" ${L.busy ? "disabled" : ""}>${L.busy ? "Bezig…" : "Stuur inlogcode"}</button></form>`
    : `<form class="stack" id="login-form" data-login="code"><p class="muted small">We hebben een code gestuurd naar <b>${esc(L.email)}</b>. Kijk ook in je spam.</p><label class="field"><span>Inlogcode</span><input type="text" id="login-code" required autocomplete="one-time-code" inputmode="numeric" pattern="[0-9]{6,10}" maxlength="10" placeholder="123456"></label><button class="btn accent" type="submit" ${L.busy ? "disabled" : ""}>${L.busy ? "Bezig…" : "Inloggen"}</button><button class="linkbtn" type="button" data-login-back>Ander e-mailadres</button></form>`;
  return `<div class="login-wrap"><div class="login-card"><div class="top"><img src="/brand/wordmark-cream.png" alt="PM Agency"><span>Academy</span></div><div class="body">
    <div class="stack-sm"><h1 class="h-page" style="font-size:40px">Inloggen</h1><p class="muted">Log in met je e-mailadres. Je krijgt een code per mail; een wachtwoord is niet nodig.</p></div>
    ${L.error ? `<div class="note">${icon("info", 18)}<span>${esc(L.error)}</span></div>` : ""}${form}
    <p class="small muted">Nog geen toegang? Vraag je teamleider om je toe te voegen.</p></div></div></div>`;
}

/* ---------- Render ---------- */
let pendingRender = false;
function editing() { const a = document.activeElement; return a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName) && a.closest("#view") && a.type !== "radio" && a.type !== "checkbox"; }
function render(force) {
  if (!force && editing()) { pendingRender = true; return; }
  pendingRender = false;
  const login = S.route.v === "login";
  document.querySelector(".app").classList.toggle("is-login", login);
  if (login) { document.getElementById("view").innerHTML = vLogin(); return; }
  indexC();
  renderShell();
  const v = S.route.v;
  const views = { dash: vDash, train: vTrain, topic: vTopic, wb: vWorkbook, journey: vJourney, certs: vCerts, cert: vCert, benefits: vBenefits, lb: vLb, profile: vProfile, users: vUsers, dossiers: vDossiers, dossier: vDossier, formats: vFormats, mydossier: vMyDossier, content: vContent };
  document.getElementById("view").innerHTML = (views[v] || vDash)();
}
document.addEventListener("focusout", () => setTimeout(() => { if (pendingRender && !editing()) render(); }, 0));

/* ---------- Gebeurtenissen ---------- */
document.addEventListener("click", async e => {
  const el = e.target.closest("button, a[data-seen]"); if (!el) return;
  const d = el.dataset;
  if (d.go) return go(d.go);
  if (d.topic) { S.tab = d.tabGo || (S.route.v === "topic" && S.route.id === d.topic ? S.tab : defaultTab(d.topic)); return go("topic", { id: d.topic }); }
  if (d.tab) { S.tab = d.tab; persistUi(); return render(true); }
  if (d.seen) { tst(d.seen).seen = true; markActive(); save(); return render(true); }
  if (d.submitQuiz) return submitQuiz(TOP.get(d.submitQuiz));
  if (d.complete) { completeTopic(TOP.get(d.complete), null); return render(true); }
  if (d.retry) { S.quiz = null; render(true); return window.scrollTo({ top: 0 }); }
  if (d.cert) return go("cert", { id: d.cert });
  if (d.downloadCert) return downloadCert(TR.find(t => t.id === d.downloadCert));
  if (d.lbmode) { S.lbMode = d.lbmode; return render(true); }
  if (d.editTopic) { S.ed = null; openEditor(d.editTopic); return go("content"); }
  if ("confirmNo" in d) { S.confirm = null; return render(true); }
  if (await dossierClick(d)) return;

  // Profiel
  if ("saveProfile" in d) {
    const patch = { display_name: document.getElementById("p-name").value.trim(), start_date: document.getElementById("p-start").value || null };
    try { await be.updateMe(patch); Object.assign(S.me, patch); save(); toast("Profiel opgeslagen"); render(true); } catch (err) { toast(err.message || "Opslaan lukte niet"); }
    return;
  }
  if ("reset" in d) { S.confirm = { kind: "reset" }; return render(true); }
  if ("resetYes" in d) { P = blankProgress(); S.confirm = null; save(); toast("Voortgang gewist"); return render(true); }
  if ("logout" in d) { await be.signOut(); lsSet("pm-academy-ui", "{}"); location.reload(); return; }
  if (d.demoRole) { be.setDemoRole(d.demoRole); S.me = await be.me(); S.users = null; S.dStats = null; S.dossier = null; S.entry = null; if (isStaff() && !S.templates) await loadTemplates(); return render(true); }
  if ("loginBack" in d) { S.login = { step: "email", email: S.login.email, busy: false, error: "" }; return render(true); }

  // Benefits
  if ("benEdit" in d) { S.benDraft = (S.benefits.items || []).map(b => ({ title: b.title || "", desc: b.desc || "", req: b.req || "" })); if (!S.benDraft.length) S.benDraft.push({ title: "", desc: "", req: "" }); return render(true); }
  if ("benAdd" in d) { S.benDraft.push({ title: "", desc: "", req: "" }); return render(true); }
  if (d.benDel) { S.benDraft.splice(Number(d.benDel), 1); return render(true); }
  if ("benCancel" in d) { S.benDraft = null; return render(true); }
  if ("benSave" in d) {
    const items = S.benDraft.filter(b => b.title.trim()).map(b => ({ title: b.title.trim(), desc: b.desc.trim(), req: b.req.trim() }));
    try { await be.saveContent("benefits", { items, example: false }); S.benefits = { items, example: false }; S.benDraft = null; toast("Benefits opgeslagen"); render(true); } catch (err) { toast(err.message || "Opslaan lukte niet"); }
    return;
  }

  // Gebruikers
  if ("userAdd" in d) { S.addUser = { name: "", email: "", role: "user", start_date: iso(new Date()), busy: false }; return render(true); }
  if ("userAddCancel" in d) { S.addUser = null; return render(true); }
  if ("userCreate" in d) {
    const A = S.addUser; A.name = document.getElementById("nu-name").value.trim(); A.email = document.getElementById("nu-email").value.trim(); A.start_date = document.getElementById("nu-start").value; A.role = document.getElementById("nu-role").value;
    if (!A.name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(A.email)) { toast("Vul een naam en een geldig e-mailadres in"); return render(true); }
    A.busy = true; render(true);
    try { await be.createUser({ email: A.email, name: A.name, role: A.role, start_date: A.start_date || null }); toast(`${A.name} is toegevoegd`); S.addUser = null; await loadUsers(); }
    catch (err) { A.busy = false; toast(err.message || "Toevoegen lukte niet"); }
    return render(true);
  }
  if (d.userDel) { S.confirm = { kind: "deluser", id: d.userDel }; return render(true); }
  if (d.userDelYes) { try { await be.deleteUser(d.userDelYes); toast("Gebruiker verwijderd"); S.confirm = null; await loadUsers(); } catch (err) { toast(err.message || "Verwijderen lukte niet"); } return render(true); }
  if ("usersDiscard" in d) { S.userDraft = {}; return render(true); }
  if ("usersSave" in d) {
    let n = 0;
    for (const [id, patch] of Object.entries(S.userDraft)) {
      const p = {};
      for (const [k, v] of Object.entries(patch)) p[k] = k === "start_date" ? (v || null) : Math.max(0, Number(v) || 0);
      try { await be.updateUser(id, p); n++; } catch (err) { toast(err.message || "Opslaan lukte niet"); }
    }
    if (n) toast(`${n} ${n === 1 ? "gebruiker" : "gebruikers"} bijgewerkt`);
    await loadUsers(); S.me = await be.me(); return render(true);
  }
  if ("monthReset" in d) { S.confirm = { kind: "monthreset" }; return render(true); }
  if ("monthResetYes" in d) { for (const u of S.users || []) if (u.sales_month) { try { await be.updateUser(u.id, { sales_month: 0 }); } catch {} } S.confirm = null; toast("Nieuwe maand gestart"); await loadUsers(); S.me = await be.me(); return render(true); }

  // Inhoud
  if (S.route.v === "content" && S.ed) {
    const f = edFind(S.ed.sel);
    if (d.edSel) { S.ed.sel = d.edSel; S.confirm = null; return render(true); }
    if (d.edAdd) {
      const [kind, parent] = d.edAdd.split(":"); let id;
      if (kind === "track") { const n = S.ed.d.tracks.length + 1; id = uid("trk"); S.ed.d.tracks.push({ id, code: "TRM " + n, title: "Nieuwe module", sub: "", kind: "training", certificate: false, published: false, statusOnComplete: "", modules: [] }); }
      if (kind === "module") { const t = edFind(parent).node; id = uid("m"); const num = String(t.code).match(/\d+/); t.modules.push({ id, code: (num ? num[0] : t.modules.length + 1) + "." + (t.modules.length + 1), title: "Nieuw onderdeel", unlock: { prev: true }, topics: [] }); }
      if (kind === "topic") { const m = edFind(parent).node; id = uid("t"); m.topics.push({ id, title: "Nieuw onderwerp", video: "", core: "", points: [], workbook: [""], quiz: [{ q: "", options: ["", ""], answer: 0 }] }); }
      S.ed.sel = id; S.ed.dirty = true; return render(true);
    }
    if (d.edMove && f && f.arr) { const i = f.arr.indexOf(f.node), j = d.edMove === "up" ? i - 1 : i + 1; if (j >= 0 && j < f.arr.length) { [f.arr[i], f.arr[j]] = [f.arr[j], f.arr[i]]; S.ed.dirty = true; } return render(true); }
    if ("edDel" in d) { S.confirm = { kind: "eddel" }; return render(true); }
    if ("edDelYes" in d && f && f.arr) { f.arr.splice(f.arr.indexOf(f.node), 1); S.ed.sel = f.module ? f.module.id : f.track ? f.track.id : "settings"; S.ed.dirty = true; S.confirm = null; return render(true); }
    if (d.earrAdd && f) { f.node[d.earrAdd].push(""); S.ed.dirty = true; render(true); const list = document.querySelectorAll(`[data-earr="${d.earrAdd}"]`); list[list.length - 1]?.focus(); return; }
    if (d.earrDel && f) { const [k, i] = d.earrDel.split(":"); f.node[k].splice(Number(i), 1); S.ed.dirty = true; return render(true); }
    if ("eqAdd" in d && f) { f.node.quiz.push({ q: "", options: ["", "", ""], answer: 0 }); S.ed.dirty = true; return render(true); }
    if (d.eqDel && f) { f.node.quiz.splice(Number(d.eqDel), 1); S.ed.dirty = true; return render(true); }
    if (d.eoAdd && f) { f.node.quiz[Number(d.eoAdd)].options.push(""); S.ed.dirty = true; return render(true); }
    if (d.eoDel && f) { const [i, j] = d.eoDel.split(":").map(Number), q = f.node.quiz[i]; q.options.splice(j, 1); if (q.answer >= q.options.length) q.answer = 0; else if (q.answer > j) q.answer--; S.ed.dirty = true; return render(true); }
    if ("edDiscard" in d) { S.ed = null; S.confirm = null; toast("Wijzigingen ongedaan gemaakt"); return render(true); }
    if ("edLeave" in d) { const c = S.confirm; S.ed = null; S.confirm = null; return go(c.v, c.extra); }
    if ("edSave" in d) {
      const draft = clone(S.ed.d), problem = validate(draft);
      if (problem) { toast(problem); return; }
      try {
        S.cMeta = await be.saveContent("curriculum", draft, S.cMeta);
        C = draft; S.ed.d = clone(draft); S.ed.dirty = false; toast("Inhoud opgeslagen. Gebruikers zien de wijzigingen nu.");
        const c = S.confirm; S.confirm = null;
        if (c && c.kind === "leave") { S.ed = null; return go(c.v, c.extra); }
      } catch (err) { toast(err.code === "conflict" ? "Iemand anders heeft de inhoud intussen opgeslagen. Herlaad de pagina en probeer het opnieuw." : (err.message || "Opslaan lukte niet")); }
      return render(true);
    }
  }
});
function defaultTab(id) { const t = TOP.get(id); if (!t || passed(id)) return "video"; if (wbDone(t) && t.workbook.length) return "quiz"; const x = P.topics[id]; return x && Object.keys(x.wb || {}).length ? "workbook" : "video"; }

document.addEventListener("input", e => {
  const el = e.target, d = el.dataset;
  if (d.wb) {
    const t = TOP.get(d.wb); tst(t.id).wb[Number(d.i)] = el.value; markActive(); save();
    const filled = t.workbook.filter((_, i) => (P.topics[t.id].wb[i] || "").trim().length >= 3).length;
    const c = document.getElementById("wb-count"); if (c) c.textContent = `${filled}/${t.workbook.length} ingevuld`;
    const b = document.getElementById("to-quiz"); if (b) b.disabled = filled !== t.workbook.length;
    const h = document.getElementById("wb-hint"); if (h) h.textContent = filled === t.workbook.length ? "" : "Vul alle vragen in om verder te gaan.";
    return;
  }
  if (d.ben) { S.benDraft[Number(d.ben)][d.k] = el.value; return; }
  if (dossierInput(el, d)) return;
  if (d.user) {
    (S.userDraft[d.user] ||= {})[d.k] = el.value;
    const n = Object.keys(S.userDraft).length, btn = document.getElementById("users-save"), x = document.getElementById("users-discard");
    if (btn) { btn.disabled = false; btn.textContent = `Wijzigingen opslaan (${n})`; } if (x) x.hidden = false;
    return;
  }
  if (S.ed && S.route.v === "content") {
    const f = edFind(S.ed.sel); if (!f) return; const N = f.node;
    if (d.ef && d.type !== "bool") { N[d.ef] = el.type === "number" ? (el.value === "" ? "" : Number(el.value)) : el.value; return edDirty(); }
    if (d.eu && el.type === "number") { N.unlock ||= {}; if (el.value === "" || Number(el.value) <= 0) delete N.unlock[d.eu]; else N.unlock[d.eu] = Number(el.value); return edDirty(); }
    if (d.earr) { N[d.earr][Number(d.i)] = el.value; return edDirty(); }
    if (d.eq) { N.quiz[Number(d.eq)].q = el.value; return edDirty(); }
    if (d.eo) { const [i, j] = d.eo.split(":").map(Number); N.quiz[i].options[j] = el.value; return edDirty(); }
  }
});
document.addEventListener("change", async e => {
  const el = e.target, d = el.dataset;
  if (d.q != null && S.quiz) {
    S.quiz.answers[Number(d.q)] = Number(el.value);
    el.closest(".opts").querySelectorAll(".opt").forEach(o => o.classList.toggle("sel", o.contains(el)));
    const n = Object.keys(S.quiz.answers).length, t = TOP.get(S.quiz.id);
    const c = document.getElementById("q-count"); if (c) c.textContent = `${n}/${t.quiz.length} beantwoord`;
    const b = document.getElementById("submit-quiz"); if (b) b.disabled = n !== t.quiz.length;
    return;
  }
  if (await dossierChange(el, d)) return;
  if (el.id === "p-preview") { S.preview = el.checked; S.quiz = null; toast(el.checked ? "Voorbeeldmodus aan" : "Voorbeeldmodus uit"); return render(true); }
  if (d.userRole) {
    try { await be.updateUser(d.userRole, { role: el.value }); toast("Rol gewijzigd"); await loadUsers(); } catch (err) { toast(err.message || "Rol wijzigen lukte niet"); await loadUsers(); }
    return;
  }
  if (S.ed && S.route.v === "content") {
    const f = edFind(S.ed.sel); if (!f) return; const N = f.node;
    if (d.ef && d.type === "bool") { N[d.ef] = el.checked; return edDirty(); }
    if (d.ef && el.tagName === "SELECT") { N[d.ef] = el.value; return edDirty(); }
    if (d.eu === "prev") { N.unlock ||= {}; if (el.checked) N.unlock.prev = true; else delete N.unlock.prev; return edDirty(); }
    if (d.ea) { const [i, j] = d.ea.split(":").map(Number); N.quiz[i].answer = j; return edDirty(); }
  }
});
document.addEventListener("submit", async e => {
  const f = e.target; if (f.id !== "login-form") return;
  e.preventDefault(); const L = S.login;
  const emailIn = document.getElementById("login-email")?.value.trim();
  const token = (document.getElementById("login-code")?.value || "").replace(/\s/g, "");
  if (emailIn) L.email = emailIn;
  L.error = ""; L.busy = true; render(true);
  try {
    if (f.dataset.login === "email") { await be.sendCode(L.email); L.step = "code"; }
    else { await be.verifyCode(L.email, token); L.busy = false; await start(); return; }
  } catch (err) {
    const m = String(err && err.message || "");
    L.error = /signups not allowed|not found|Signups/i.test(m) ? "Dit e-mailadres heeft nog geen toegang. Vraag je teamleider om je toe te voegen."
      : /expired|invalid/i.test(m) ? "Deze code klopt niet of is verlopen. Vraag een nieuwe code aan."
      : /rate|too many|seconds/i.test(m) ? "Even wachten voordat je een nieuwe code aanvraagt."
      : "Inloggen lukte niet. Probeer het opnieuw.";
  }
  L.busy = false; render(true);
});

function submitQuiz(t) {
  const Q = S.quiz; if (!Q) return;
  const correct = t.quiz.filter((q, i) => Q.answers[i] === q.answer).length;
  const pct = Math.round(correct / t.quiz.length * 100);
  Q.result = { correct, pct, pass: pct >= passMark() };
  if (!S.preview) completeTopic(t, pct);
  render(true);
  document.querySelector(".result")?.scrollIntoView({ behavior: "smooth", block: "center" });
}

/* ---------- Certificaat als afbeelding ---------- */
function loadImg(src) { return new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src; }); }
async function downloadCert(t) {
  if (!t) return;
  try { await document.fonts.ready; } catch {}
  const W = 2000, H = 1414, c = document.createElement("canvas"); c.width = W; c.height = H;
  const g = c.getContext("2d"), rm = realMods(t), red = "#721417", ink = "#2a0709", mute = "#8c7a7b", paper = "#fffaf3", line = "#e2d6c9";
  g.fillStyle = paper; g.fillRect(0, 0, W, H);
  g.strokeStyle = red; g.lineWidth = 4; g.strokeRect(40, 40, W - 80, H - 80);
  g.strokeStyle = "rgba(114,20,23,.4)"; g.lineWidth = 1.5; g.strokeRect(56, 56, W - 112, H - 112);
  g.save(); g.globalAlpha = 0.06; g.fillStyle = red; g.beginPath(); g.moveTo(W - 700, 56); g.lineTo(W - 56, 56); g.lineTo(W - 56, 700); g.closePath(); g.fill(); g.restore();
  try { const wm = await loadImg("/brand/wordmark-red.png"); const w = 560; g.drawImage(wm, 140, 150, w, w * wm.height / wm.width); } catch {}
  const F = (w, s, fam) => `${w} ${s}px ${fam}`;
  g.textBaseline = "alphabetic"; g.fillStyle = mute; g.textAlign = "right"; g.font = F(700, 24, "Montserrat, Arial"); g.fillText(`CERTIFICAAT · ${String(t.code).toUpperCase()}`, W - 140, 200); g.textAlign = "left";
  g.fillStyle = ink; g.font = F(400, 96, "Anton, Impact, sans-serif"); g.fillText(`CERTIFICAAT ${String(t.code).toUpperCase()}`, 140, 420);
  g.fillStyle = mute; g.font = F(500, 32, "Montserrat, Arial"); g.fillText("Hierbij verklaren wij dat", 140, 510);
  const nm = myName() || "Jouw naam"; let size = 120; do { g.font = F(500, size, "'Bodoni Moda', Didot, Georgia, serif"); size -= 4; } while (g.measureText(nm).width > W - 280 && size > 50);
  g.fillStyle = red; g.fillText(nm, 136, 650);
  g.fillStyle = ink; g.font = F(500, 32, "Montserrat, Arial");
  wrap(g, `de trainingsmodule ${t.code} ${t.title} met goed gevolg heeft afgerond. Elke quiz is behaald met ${passMark()}% of meer.`, 140, 750, W - 280, 46);
  g.fillStyle = mute; g.font = F(500, 24, "Montserrat, Arial"); wrap(g, rm.map(m => `${m.code} ${m.title}`).join("   ·   "), 140, 870, W - 280, 36);
  g.strokeStyle = line; g.lineWidth = 2; g.beginPath(); g.moveTo(140, H - 250); g.lineTo(W - 140, H - 250); g.stroke();
  [["DATUM", fmtDate(trackDoneAt(t))], ["ONDERWERPEN", String(rm.reduce((a, m) => a + m.topics.length, 0))], ["CERTIFICAATNUMMER", certNo(t)]].forEach(([k, v], i) => { const x = 140 + i * 560; g.fillStyle = mute; g.font = F(700, 20, "Montserrat, Arial"); g.fillText(k, x, H - 195); g.fillStyle = ink; g.font = F(700, 32, "Montserrat, Arial"); g.fillText(v, x, H - 150); });
  try { const mk = await loadImg("/brand/mark.svg"); g.drawImage(mk, W - 380, H - 560, 240, 240 * 1340 / 1880); } catch {}
  const blob = await new Promise(r => c.toBlob(r, "image/png"));
  if (!blob) return toast("Downloaden lukte niet");
  const filename = `PM-Agency-certificaat-${String(t.code).replace(/\s+/g, "")}.png`;
  // In de Claude-preview loopt downloaden via de downloadfunctie van de viewer.
  const dl = window.claude && window.claude.use ? await window.claude.use("downloads").catch(() => null) : null;
  if (dl) { try { await dl.save({ filename, data: blob }); } catch (e) { if (!e || e.code !== "cancelled") toast("Downloaden lukte niet"); } return; }
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = filename;
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}
function wrap(g, text, x, y, w, lh) { const words = text.split(" "); let line = ""; for (const wd of words) { const t = line ? line + " " + wd : wd; if (g.measureText(t).width > w && line) { g.fillText(line, x, y); y += lh; line = wd; } else line = t; } if (line) g.fillText(line, x, y); }

/* ---------- Opstarten ---------- */
async function start() {
  S.me = await be.me();
  const [prog, cur, ben] = await Promise.all([be.loadProgress().catch(() => null), be.loadContent("curriculum").catch(() => null), be.loadContent("benefits").catch(() => null)]);
  P = Object.assign(blankProgress(), prog || {});
  if (cur && cur.data && Array.isArray(cur.data.tracks)) { C = cur.data; S.cMeta = cur.updated_at; } else S.cMeta = null;
  S.benefits = (ben && ben.data) || { items: [] };
  if (S.route.v === "login" || (S.route.v === "content" && !isAdmin()) || (STAFF_ROUTES.includes(S.route.v) && !isStaff())) S.route = { v: "dash" };
  setSaveState(be.mode === "demo" ? "Demo · opgeslagen in deze browser" : "");
  render(true);
  if (S.route.v === "lb") loadLb();
  if (S.route.v === "users") loadUsers();
  if (S.route.v === "dossiers") loadDossiers();
  if (S.route.v === "dossier") loadDossier(S.route.id);
  if (S.route.v === "mydossier") loadMyDossier();
  if (isStaff()) loadTemplates();
  if (!prog) save();
}
(async function boot() {
  const remembered = S.route;
  const sess = await be.session().catch(() => null);
  if (!sess) { S.route = { v: "login" }; render(true); be.onSignedOut(() => location.reload()); return; }
  S.route = remembered.v === "login" ? { v: "dash" } : remembered;
  be.onSignedOut(() => location.reload());
  await start();
  window.addEventListener("focus", async () => {
    if (S.route.v === "content" || editing()) return;
    try { S.me = await be.me(); const ben = await be.loadContent("benefits"); if (ben && ben.data) S.benefits = ben.data; render(); } catch {}
  });
})();
if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("/sw.js").catch(() => {});
