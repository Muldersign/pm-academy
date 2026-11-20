/* PM Agency: werknemersdossiers.
   - Gesprekken per medewerker (evaluatie eerste 4 werkdagen, ambassadeursgesprek, kwartaal, POP en eigen types)
     volgens een format met vragen. Concept = alleen management en beheer; "gedeeld" = de medewerker ziet het ook.
   - Aantekeningen: ziek, te laat, niet op komen dagen (met datum en toelichting; alleen management en beheer).
   - Bijlagen (ingevulde formats, scans) per gesprek; formatdocumenten (zoals de junior guide) per gesprekstype. */
"use strict";

const NOTE_KINDS = [
  { k: "ziek", label: "Ziek", ic: "info" },
  { k: "te_laat", label: "Te laat", ic: "clock" },
  { k: "no_show", label: "Niet op komen dagen", short: "Niet gekomen", ic: "x" },
];

const DEFAULT_TEMPLATES = {
  example: true,
  types: [
    { id: "eval4", name: "Evaluatie eerste 4 werkdagen", sub: "Junior guide", files: [], questions: [
      "Hoe zijn je eerste vier werkdagen verlopen?", "Wat ging er goed?", "Waar liep je tegenaan?",
      "Hoe ver ben je met TRM 1.1 en 1.2?", "Waar heb je de komende weken hulp bij nodig?", "Afspraken voor de komende periode",
    ] },
    { id: "ambassadeur", name: "Ambassadeursgesprek", sub: "Na het afronden van TRM 1", files: [], questions: [
      "Terugblik op TRM 1: wat heb je het meest geleerd?", "Resultaten tot nu toe", "Wat betekent Ambassadeur zijn voor jou?",
      "Doelen voor de komende maand", "Afspraken",
    ] },
    { id: "kwartaal", name: "Kwartaalgesprek", sub: "Elk kwartaal", files: [], questions: [
      "Resultaten van dit kwartaal", "Wat ging er goed?", "Verbeterpunten", "Doelen voor het volgende kwartaal", "Afspraken",
    ] },
    { id: "pop", name: "POP-gesprek", sub: "Persoonlijk ontwikkelplan", files: [], questions: [
      "Waar sta je nu?", "Waar wil je over een jaar staan?", "Welke vaardigheden wil je ontwikkelen?",
      "Welke acties zet je daarvoor, en wie helpt je?", "Wanneer evalueren we dit plan?",
    ] },
  ],
};
const SHORT = { eval4: "Evaluatie", ambassadeur: "Ambassadeur", kwartaal: "Kwartaal", pop: "POP" };
const isStaff = () => isAdmin() || role() === "management";
const tpls = () => (S.templates && Array.isArray(S.templates.types)) ? S.templates : DEFAULT_TEMPLATES;
const tplOf = kind => tpls().types.find(t => t.id === kind) || { id: kind, name: kind, sub: "", questions: [], files: [] };
const newId = () => (crypto.randomUUID ? crypto.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c => (c ^ Math.random() * 16 >> c / 4).toString(16)));
const fmtSize = b => b > 1048576 ? (b / 1048576).toFixed(1) + " MB" : Math.max(1, Math.round(b / 1024)) + " kB";
const safeName = n => String(n).normalize("NFKD").replace(/[^\w.\-]+/g, "_").slice(-80);
const MAX_FILE = 20 * 1048576;

async function loadTemplates() { try { const r = await be.loadTemplates(); S.templates = r && Array.isArray(r.types) ? r : clone(DEFAULT_TEMPLATES); } catch { S.templates = clone(DEFAULT_TEMPLATES); } }
async function loadDossiers() {
  if (!isStaff()) return;
  try { const [users, stats] = await Promise.all([be.listUsers(), be.dossierStats()]); S.users = users; S.dStats = stats; } catch (e) { toast(e.message || "Laden lukte niet"); }
  if (S.route.v === "dossiers") render();
}
async function loadDossier(uidv) {
  if (!isStaff()) return;
  try {
    if (!S.users) S.users = await be.listUsers();
    if (!S.templates) await loadTemplates();
    S.dossier = Object.assign({ uid: uidv }, await be.listDossier(uidv));
  } catch (e) { toast(e.message || "Laden lukte niet"); }
  if (S.route.v === "dossier") render();
}
async function loadMyDossier() { try { S.myDossier = await be.myDossier(); } catch { S.myDossier = []; } if (S.route.v === "mydossier") render(); }
async function openFile(path) {
  const w = window.open("", "_blank");
  try { const url = await be.fileUrl(path); if (w) w.location = url; else location.href = url; }
  catch (e) { if (w) w.close(); toast(e.message || "Openen lukte niet"); }
}
const fileList = (files, canDel) => (files || []).length ? `<div class="stack-sm" style="gap:6px">${files.map((f, i) => `<div class="file-row"><button class="linkbtn" data-file-open="${esc(f.path)}">${icon("file", 16)} ${esc(f.name)}</button><span class="small muted">${fmtSize(f.size || 0)}</span>${canDel ? `<button class="iconbtn" data-file-del="${i}" aria-label="Bijlage verwijderen">${icon("trash", 14)}</button>` : ""}</div>`).join("")}</div>` : "";

/* Overzicht van alle dossiers */
function vDossiers() {
  if (!isStaff()) return vDash();
  const U = (S.users || []).filter(u => u.role !== "super_admin" || u.id === (S.me && S.me.id));
  const st = S.dStats || { entries: [], notes: [] };
  const count = (uid, kind) => st.notes.filter(n => n.user_id === uid && n.kind === kind).length;
  const has = (uid, kind) => st.entries.some(e => e.user_id === uid && e.kind === kind);
  const types = tpls().types;
  const rows = U.map(u => {
    const sm = u.summary || {}, sd = u.start_date, eval4 = types.find(t => t.id === "eval4");
    const due = eval4 && sd && !has(u.id, "eval4") && workdaysSince(sd) >= 4 && Date.now() - parseDay(sd).getTime() < 90 * DAY;
    return `<tr><td><button class="linkbtn" style="color:var(--ink)" data-dossier="${u.id}"><b>${esc(u.display_name || sm.name || u.email)}</b></button><div class="small muted">${esc(sm.status || C.startStatus || "Junior-Ambassadeur")}</div></td>
      <td class="small">${sd ? fmtDate(sd) : "–"}</td>
      <td><div class="row" style="gap:6px;flex-wrap:nowrap">${types.map(t => `<span class="pill ${has(u.id, t.id) ? "ok" : ""}" title="${esc(t.name)}">${has(u.id, t.id) ? icon("check", 12) : ""}${esc(SHORT[t.id] || t.name.split(" ")[0])}</span>`).join("")}${due ? `<span class="pill go">Evaluatie te doen</span>` : ""}</div></td>
      ${NOTE_KINDS.map(n => `<td class="num">${count(u.id, n.k) || "–"}</td>`).join("")}
      <td><button class="btn ghost sm" data-dossier="${u.id}">${icon("folder", 14)} Openen</button></td></tr>`;
  }).join("");
  return `${topline("Beheer")}<div class="stack-sm"><span class="eyebrow red">Beheer</span><h1 class="h-page">Dossiers</h1><p class="lede">Gesprekken en aantekeningen per medewerker. Medewerkers zien alleen gesprekken die met hen zijn gedeeld; aantekeningen zien ze niet.</p></div>
  ${!S.users ? `<p class="muted">Laden…</p>` : `<div class="table-wrap"><table><thead><tr><th>Medewerker</th><th>Startdatum</th><th>Gesprekken</th>${NOTE_KINDS.map(n => `<th class="num" title="${n.label}">${n.short || n.label}</th>`).join("")}<th></th></tr></thead><tbody>${rows}</tbody></table></div>`}`;
}

/* Dossier van één medewerker */
function vDossier() {
  if (!isStaff()) return vDash();
  const D = S.dossier && S.dossier.uid === S.route.id ? S.dossier : null;
  const u = (S.users || []).find(x => x.id === S.route.id);
  if (!D || !u) return `${topline("Dossier")}<button class="linkbtn" data-go="dossiers">${icon("left", 16)} Dossiers</button><p class="muted">Laden…</p>`;
  if (S.entry && S.entry.user_id === u.id) return vEntryEditor(u);
  const sm = u.summary || {}, name = u.display_name || sm.name || u.email;
  const nf = S.noteForm && S.noteForm.user_id === u.id ? S.noteForm : null;
  const notesByKind = k => D.notes.filter(n => n.kind === k);
  const noteCards = NOTE_KINDS.map(n => `<div class="card stack-sm note-card"><span class="eyebrow">${n.label}</span><div class="big-num tnum">${notesByKind(n.k).length}<small>${notesByKind(n.k).length === 1 ? "keer" : "keer"}</small></div><div><button class="btn ghost sm" data-note-new="${n.k}">${icon("plus", 14)} Registreren</button></div></div>`).join("");
  const noteForm = nf ? `<div class="card stack"><h3 class="h-sec" style="font-size:17px">${esc(NOTE_KINDS.find(n => n.k === nf.kind).label)} registreren</h3>
    <div class="grid-2"><label class="field"><span>Datum</span><input type="date" id="nf-date" value="${esc(nf.on_date)}"></label><label class="field"><span>Toelichting (optioneel)</span><input type="text" id="nf-note" value="${esc(nf.note)}" placeholder="Bijv. 20 minuten te laat, file op de A28"></label></div>
    <div class="row"><button class="btn accent" data-note-save>Opslaan</button><button class="linkbtn" data-note-cancel>Annuleren</button></div></div>` : "";
  const noteList = D.notes.length ? `<div class="table-wrap"><table><thead><tr><th>Datum</th><th>Soort</th><th>Toelichting</th><th>Door</th><th></th></tr></thead><tbody>${D.notes.map(n => {
    const c = S.confirm && S.confirm.kind === "delnote" && S.confirm.id === n.id;
    return `<tr><td>${fmtDate(n.on_date)}</td><td><span class="pill">${esc((NOTE_KINDS.find(k => k.k === n.kind) || {}).label || n.kind)}</span></td><td class="small" style="white-space:normal">${esc(n.note || "")}</td><td class="small muted">${esc(n.by_name || "")}</td><td>${c ? `<span class="row" style="flex-wrap:nowrap;gap:6px"><button class="btn danger sm" data-note-del-yes="${n.id}">Verwijderen</button><button class="linkbtn" data-confirm-no>Nee</button></span>` : `<button class="iconbtn" data-note-del="${n.id}" aria-label="Aantekening verwijderen">${icon("trash", 14)}</button>`}</td></tr>`;
  }).join("")}</tbody></table></div>` : `<p class="small muted">Nog geen aantekeningen.</p>`;
  const sd = u.start_date;
  const talks = tpls().types.map(t => {
    const list = D.entries.filter(e => e.kind === t.id);
    const due = t.id === "eval4" && !list.length && sd ? (workdaysSince(sd) >= 4 ? "Te doen: de eerste 4 werkdagen zijn voorbij" : `Gepland rond ${fmtDate(dayAfterWorkdays(sd, 4))}`) : "";
    return `<div class="card stack"><div class="spread"><div class="stack-sm" style="gap:2px"><h3 class="h-sec" style="font-size:17px">${esc(t.name)}</h3><span class="small muted">${esc(t.sub || "")}${due ? ` · <b style="color:var(--accent)">${esc(due)}</b>` : ""}</span></div><button class="btn sm" data-entry-new="${t.id}">${icon("plus", 14)} Nieuw gesprek</button></div>
      ${list.length ? `<div class="stack-sm" style="gap:0">${list.map(e => `<button class="topic-row" style="padding:12px 4px;grid-template-columns:28px minmax(0,1fr) auto" data-entry-open="${e.id}"><span class="st ${e.shared ? "ok" : ""}">${e.shared ? icon("eye", 13) : icon("chat", 13)}</span><span><b>${fmtDate(e.held_on)}</b> <span class="small muted">· door ${esc(e.by_name || "onbekend")}${(e.files || []).length ? ` · ${icon("paperclip", 12)} ${(e.files || []).length}` : ""}</span></span><span class="pill ${e.shared ? "ok" : "warn"}">${e.shared ? "Gedeeld met medewerker" : "Concept"}</span></button>`).join("")}</div>` : `<p class="small muted">Nog geen gesprekken.</p>`}</div>`;
  }).join("");
  return `${topline("Dossier")}<button class="linkbtn" data-go="dossiers">${icon("left", 16)} Dossiers</button>
  <div class="spread" style="align-items:flex-end"><div class="stack-sm"><span class="eyebrow red">Werknemersdossier</span><h1 class="h-page">${esc(name)}</h1>
    <div class="row"><span class="status-chip"><span class="ic">${icon("crown", 14)}</span>${esc(sm.status || C.startStatus || "Junior-Ambassadeur")}</span><span class="pill">${esc(LEVELS[levelIdx(u.sales_total || 0)].n)} · ${u.sales_total || 0} sales</span><span class="pill">Voortgang ${sm.pct || 0}%</span>${sd ? `<span class="pill">Gestart ${fmtDate(sd)}</span>` : ""}</div></div></div>
  <section class="stack"><div class="sec-head"><h2 class="h-sec">Gesprekken</h2><span class="count">${D.entries.length} ${D.entries.length === 1 ? "gesprek" : "gesprekken"}</span></div>
    <p class="small muted">Een gesprek is eerst een concept dat alleen management en beheer zien. Zet "Zichtbaar voor medewerker" aan om het te delen.</p>
    <div class="grid-2">${talks}</div></section>
  <section class="stack"><div class="sec-head"><h2 class="h-sec">Aantekeningen</h2><span class="count">Alleen zichtbaar voor management en beheer</span></div>
    <div class="grid-3">${noteCards}</div>${noteForm}${noteList}</section>`;
}

/* Gesprek invullen of bekijken */
function vEntryEditor(u) {
  const E = S.entry, t = tplOf(E.kind), name = u.display_name || (u.summary || {}).name || u.email;
  const canDel = isAdmin() && !E._new, c = S.confirm && S.confirm.kind === "delentry";
  return `${topline("Dossier")}<button class="linkbtn" data-entry-close>${icon("left", 16)} Dossier van ${esc(name)}</button>
  <div class="stack-sm"><span class="eyebrow red">${esc(t.name)}</span><h1 class="h-page">${E._new ? "Nieuw gesprek" : "Gesprek"} met ${esc(name.split(" ")[0])}</h1></div>
  <div class="card form-card">
    <div class="grid-2"><label class="field"><span>Datum van het gesprek</span><input type="date" data-en="held_on" value="${esc(E.held_on)}"></label><label class="field"><span>Gevoerd door</span><input type="text" data-en="by_name" value="${esc(E.by_name)}"></label></div>
    ${(t.files || []).length ? `<div class="stack-sm"><span class="eyebrow">Format${t.files.length > 1 ? "s" : ""}</span>${fileList(t.files, false)}</div>` : ""}
    <div class="stack" style="gap:18px">${E.answers.map((a, i) => `<div class="wb-q"><label for="ena-${i}"><span class="n">${String(i + 1).padStart(2, "0")}</span><span>${esc(a.q)}</span></label><textarea id="ena-${i}" data-ena="${i}" placeholder="Antwoord of samenvatting">${esc(a.a)}</textarea></div>`).join("") || `<p class="small muted">Dit gesprekstype heeft nog geen vragen. Voeg ze toe bij Gespreksformats, of gebruik het notitieveld.</p>`}</div>
    <label class="field"><span>Notities en afspraken</span><textarea data-en="notes" style="min-height:120px" placeholder="Wat is er besproken en afgesproken?">${esc(E.notes)}</textarea></label>
    <div class="stack-sm"><span class="eyebrow">Bijlagen</span><p class="small muted">Bijvoorbeeld het ingevulde en ondertekende format. PDF, Word of afbeelding, maximaal 20 MB.</p>${fileList(E.files, true)}
      <label class="btn ghost sm" style="align-self:flex-start;cursor:pointer">${icon("paperclip", 14)} ${S.uploading ? "Uploaden…" : "Bestand toevoegen"}<input type="file" data-upload="entry" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.heic" hidden></label></div>
    <label class="check"><input type="checkbox" data-en-shared ${E.shared ? "checked" : ""}><span><b>Zichtbaar voor medewerker.</b> ${esc(name.split(" ")[0])} ziet dit gesprek dan onder Mijn dossier, met de antwoorden, notities en bijlagen.</span></label>
    <div class="row"><button class="btn accent" data-entry-save>${icon("check", 16)} Opslaan</button><button class="linkbtn" data-entry-close>Annuleren</button>
      <span style="margin-left:auto">${canDel ? (c ? `<span class="confirm"><span class="small">Gesprek verwijderen?</span><button class="btn danger sm" data-entry-del-yes>Verwijderen</button><button class="linkbtn" data-confirm-no>Nee</button></span>` : `<button class="btn ghost sm" data-entry-del>${icon("trash", 14)} Verwijderen</button>`) : ""}</span></div>
  </div>`;
}

/* Gespreksformats */
function vFormats() {
  if (!isStaff()) return vDash();
  if (!S.templates) { loadTemplates().then(() => render()); return `${topline("Beheer")}<p class="muted">Laden…</p>`; }
  const T = isAdmin() && S.tplDraft ? S.tplDraft : tpls(), editing = isAdmin() && !!S.tplDraft;
  const cards = T.types.map((t, ti) => editing ? `<div class="card stack">
      <div class="grid-2"><label class="field"><span>Naam</span><input type="text" data-tf="${ti}" data-k="name" value="${esc(t.name)}"></label><label class="field"><span>Omschrijving</span><input type="text" data-tf="${ti}" data-k="sub" value="${esc(t.sub)}" placeholder="Bijv. Junior guide"></label></div>
      <div class="stack-sm"><span class="eyebrow">Vragen</span><div class="list-edit">${t.questions.map((q, qi) => `<div class="item"><textarea data-tq="${ti}:${qi}" style="min-height:50px">${esc(q)}</textarea><button class="iconbtn" data-tq-del="${ti}:${qi}" aria-label="Vraag verwijderen">${icon("trash", 14)}</button></div>`).join("")}</div><div><button class="btn ghost sm" data-tq-add="${ti}">${icon("plus", 14)} Vraag</button></div></div>
      <div class="stack-sm"><span class="eyebrow">Formatdocument</span>${fileList(t.files, true).replaceAll('data-file-del="', `data-tfile-del="${ti}:`)}<label class="btn ghost sm" style="align-self:flex-start;cursor:pointer">${icon("paperclip", 14)} ${S.uploading ? "Uploaden…" : "Document uploaden"}<input type="file" data-upload="tpl:${ti}" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" hidden></label></div>
      <div>${["eval4", "ambassadeur", "kwartaal", "pop"].includes(t.id) ? "" : `<button class="linkbtn" data-tpl-del="${ti}">${icon("trash", 14)} Gesprekstype verwijderen</button>`}</div></div>`
    : `<div class="card stack-sm"><h3 class="h-sec" style="font-size:17px">${esc(t.name)}</h3><span class="small muted">${esc(t.sub || "")}</span>
      <ol class="small" style="margin:6px 0 0;padding-left:20px;display:flex;flex-direction:column;gap:4px">${t.questions.map(q => `<li>${esc(q)}</li>`).join("") || "<li>Nog geen vragen</li>"}</ol>
      ${fileList(t.files, false)}</div>`).join("");
  return `${topline("Beheer")}<div class="spread" style="align-items:flex-end"><div class="stack-sm"><span class="eyebrow red">Beheer</span><h1 class="h-page">Gespreksformats</h1><p class="lede">De vragen en documenten per gesprekstype. Medewerkers zien de vragen pas als een gesprek met hen is gedeeld.</p></div>${isAdmin() && !editing ? `<button class="btn" data-tpl-edit>${icon("edit", 16)} Bewerken</button>` : ""}</div>
  ${T.example && !editing ? `<div class="note">${icon("info", 18)}<span>Dit zijn voorbeeldvragen. ${isAdmin() ? "Klik op Bewerken om jullie eigen format in te voeren en de junior guide te uploaden." : ""}</span></div>` : ""}
  <div class="grid-2">${cards}</div>
  ${editing ? `<div class="savebar"><span><button class="btn ghost sm" data-tpl-add>${icon("plus", 14)} Gesprekstype toevoegen</button></span><span class="row"><button class="btn ghost sm" data-tpl-cancel>Annuleren</button><button class="btn accent sm" data-tpl-save>Opslaan</button></span></div>` : ""}`;
}

/* Mijn dossier (medewerker) */
function vMyDossier() {
  const L = S.myDossier;
  const body = !L ? `<p class="muted">Laden…</p>` : !L.length ? `<div class="empty">${icon("folder", 24)}<h2 class="h-sec">Nog geen gesprekken.</h2><p class="muted">Gesprekken die je leidinggevende met je deelt, zoals je evaluatie en POP-gesprek, verschijnen hier.</p></div>`
    : L.map(e => { const t = tplOf(e.kind); return `<details class="module"><summary><span class="code">${icon("chat", 14)}</span><div><h3>${esc(t.name)}</h3><div class="sub">${fmtDate(e.held_on)} · met ${esc(e.by_name || "je leidinggevende")}</div></div><span class="pill">${(e.files || []).length ? `${icon("paperclip", 12)} ${(e.files || []).length}` : "Bekijken"}</span><span class="chev">${icon("chev", 18)}</span></summary>
      <div class="topic-list" style="padding:20px;display:flex;flex-direction:column;gap:16px">${(e.answers || []).filter(a => (a.a || "").trim()).map(a => `<div class="stack-sm" style="gap:4px"><b>${esc(a.q)}</b><p class="muted" style="white-space:pre-wrap">${esc(a.a)}</p></div>`).join("")}${e.notes ? `<div class="stack-sm" style="gap:4px"><b>Notities en afspraken</b><p class="muted" style="white-space:pre-wrap">${esc(e.notes)}</p></div>` : ""}${fileList(e.files, false)}</div></details>`; }).join("");
  return `${topline("Mijn dossier")}<div class="stack-sm"><span class="eyebrow red">Persoonlijk</span><h1 class="h-page">Mijn dossier</h1><p class="lede">Je gesprekken met PM Agency: evaluaties, ambassadeurs-, kwartaal- en POP-gesprekken.</p></div><div class="stack" style="gap:12px">${body}</div>`;
}

/* Gebeurtenissen voor dossiers. Geeft true terug als de klik is afgehandeld. */
async function dossierClick(d) {
  if (d.dossier) { S.entry = null; S.noteForm = null; go("dossier", { id: d.dossier }); return true; }
  if (d.fileOpen) { openFile(d.fileOpen); return true; }
  // Aantekeningen
  if (d.noteNew) { S.noteForm = { user_id: S.route.id, kind: d.noteNew, on_date: iso(new Date()), note: "" }; render(true); return true; }
  if ("noteCancel" in d) { S.noteForm = null; render(true); return true; }
  if ("noteSave" in d) {
    const f = S.noteForm; f.on_date = document.getElementById("nf-date").value || iso(new Date()); f.note = document.getElementById("nf-note").value.trim();
    try { await be.addNote({ user_id: f.user_id, kind: f.kind, on_date: f.on_date, note: f.note, by_name: myName() }); S.noteForm = null; toast("Aantekening opgeslagen"); await loadDossier(f.user_id); } catch (e) { toast(e.message || "Opslaan lukte niet"); }
    render(true); return true;
  }
  if (d.noteDel) { S.confirm = { kind: "delnote", id: d.noteDel }; render(true); return true; }
  if (d.noteDelYes) { try { await be.deleteNote(d.noteDelYes); S.confirm = null; await loadDossier(S.route.id); } catch (e) { toast(e.message || "Verwijderen lukte niet"); } render(true); return true; }
  // Gesprekken
  if (d.entryNew) {
    const t = tplOf(d.entryNew);
    S.entry = { _new: true, id: newId(), user_id: S.route.id, kind: t.id, held_on: iso(new Date()), by_name: myName(), answers: t.questions.map(q => ({ q, a: "" })), notes: "", files: [], shared: false, _uploaded: [] };
    S.confirm = null; render(true); window.scrollTo({ top: 0 }); return true;
  }
  if (d.entryOpen) { const e = S.dossier.entries.find(x => x.id === d.entryOpen); S.entry = Object.assign(clone(e), { answers: e.answers || [], files: e.files || [], _uploaded: [] }); S.confirm = null; render(true); window.scrollTo({ top: 0 }); return true; }
  if ("entryClose" in d) {
    if (S.entry && S.entry._new) for (const p of S.entry._uploaded) be.removeFile(p).catch(() => {});
    S.entry = null; S.confirm = null; render(true); return true;
  }
  if ("entrySave" in d) {
    const E = S.entry; if (!E.held_on) { toast("Vul de datum van het gesprek in"); return true; }
    const row = { id: E.id, user_id: E.user_id, kind: E.kind, held_on: E.held_on, by_name: E.by_name, answers: E.answers, notes: E.notes, files: E.files, shared: !!E.shared };
    try { await be.saveEntry(row); toast(E.shared ? "Gesprek opgeslagen en gedeeld met de medewerker" : "Gesprek opgeslagen als concept"); S.entry = null; await loadDossier(E.user_id); } catch (e) { toast(e.message || "Opslaan lukte niet"); }
    render(true); return true;
  }
  if ("entryDel" in d) { S.confirm = { kind: "delentry" }; render(true); return true; }
  if ("entryDelYes" in d) {
    const E = S.entry;
    try { await be.deleteEntry(E.id); for (const f of E.files) be.removeFile(f.path).catch(() => {}); toast("Gesprek verwijderd"); S.entry = null; S.confirm = null; await loadDossier(E.user_id); } catch (e) { toast(e.message || "Verwijderen lukte niet"); }
    render(true); return true;
  }
  if (d.fileDel && S.entry && S.route.v === "dossier") { const [f] = S.entry.files.splice(Number(d.fileDel), 1); if (f && S.entry._uploaded.includes(f.path)) be.removeFile(f.path).catch(() => {}); render(true); return true; }
  // Formats
  if ("tplEdit" in d) { S.tplDraft = clone(tpls()); render(true); return true; }
  if ("tplCancel" in d) { S.tplDraft = null; render(true); return true; }
  if (d.tqAdd) { S.tplDraft.types[Number(d.tqAdd)].questions.push(""); render(true); return true; }
  if (d.tqDel) { const [a, b] = d.tqDel.split(":").map(Number); S.tplDraft.types[a].questions.splice(b, 1); render(true); return true; }
  if (d.tfileDel) { const [a, b] = d.tfileDel.split(":").map(Number); S.tplDraft.types[a].files.splice(b, 1); render(true); return true; }
  if ("tplAdd" in d) { S.tplDraft.types.push({ id: "t" + Date.now().toString(36), name: "Nieuw gesprekstype", sub: "", questions: [""], files: [] }); render(true); return true; }
  if (d.tplDel) { S.tplDraft.types.splice(Number(d.tplDel), 1); render(true); return true; }
  if ("tplSave" in d) {
    const T = clone(S.tplDraft); T.example = false;
    for (const t of T.types) { t.name = t.name.trim() || "Gesprek"; t.questions = t.questions.map(q => q.trim()).filter(Boolean); }
    try { await be.saveTemplates(T); S.templates = T; S.tplDraft = null; toast("Gespreksformats opgeslagen"); } catch (e) { toast(e.message || "Opslaan lukte niet"); }
    render(true); return true;
  }
  return false;
}
function dossierInput(el, d) {
  if (S.entry && S.route.v === "dossier") {
    if (d.en) { S.entry[d.en] = el.value; return true; }
    if (d.ena) { S.entry.answers[Number(d.ena)].a = el.value; return true; }
  }
  if (S.tplDraft && S.route.v === "formats") {
    if (d.tf) { S.tplDraft.types[Number(d.tf)][d.k] = el.value; return true; }
    if (d.tq) { const [a, b] = d.tq.split(":").map(Number); S.tplDraft.types[a].questions[b] = el.value; return true; }
  }
  return false;
}
async function dossierChange(el, d) {
  if ("enShared" in d && S.entry) { S.entry.shared = el.checked; return true; }
  if (d.upload && el.files && el.files[0]) {
    const file = el.files[0];
    if (file.size > MAX_FILE) { toast("Dit bestand is groter dan 20 MB"); return true; }
    S.uploading = true; render(true);
    try {
      if (d.upload === "entry") {
        const E = S.entry, path = `${E.user_id}/${E.id}/${Date.now().toString(36)}-${safeName(file.name)}`;
        const meta = await be.uploadFile(path, file); E.files.push(meta); E._uploaded.push(path);
      } else {
        const ti = Number(d.upload.split(":")[1]), t = S.tplDraft.types[ti];
        const meta = await be.uploadFile(`templates/${safeName(t.id)}/${Date.now().toString(36)}-${safeName(file.name)}`, file); t.files.push(meta);
      }
      toast("Bestand toegevoegd");
    } catch (e) { toast(e.message || "Uploaden lukte niet"); }
    S.uploading = false; render(true); return true;
  }
  return false;
}
