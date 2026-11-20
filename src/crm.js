/* PM Agency: orders uit de Fieldstars-export (xlsx of csv) inlezen en per medewerker optellen.
   Werkt in de browser (upload) en op de server (dagelijkse synchronisatie). Geen imports:
   de zip-functies (fflate) worden meegegeven, zodat dit bestand overal als gewoon script laadt. */
(function (root) {
  "use strict";

  const norm = s => String(s ?? "").normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
  const xmlText = s => String(s).replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).replace(/&amp;/g, "&");
  const colIndex = ref => { let n = 0; for (const ch of ref.replace(/\d+/g, "")) n = n * 26 + (ch.charCodeAt(0) - 64); return n - 1; };

  // Minimale xlsx-lezer: eerste werkblad, gedeelde teksten, inline teksten en getallen.
  function readXlsx(bytes, zip) {
    const files = zip.unzipSync(bytes);
    const get = name => files[name] ? zip.strFromU8(files[name]) : null;
    let sheetPath = "xl/worksheets/sheet1.xml";
    const wb = get("xl/workbook.xml"), rels = get("xl/_rels/workbook.xml.rels");
    if (wb && rels) {
      const first = wb.match(/<sheet\b[^>]*\br:id="([^"]+)"/) || wb.match(/<sheet\b[^>]*\bid="([^"]+)"/);
      if (first) {
        const rel = rels.match(new RegExp(`<Relationship\\b[^>]*Id="${first[1]}"[^>]*Target="([^"]+)"`)) || rels.match(new RegExp(`<Relationship\\b[^>]*Target="([^"]+)"[^>]*Id="${first[1]}"`));
        if (rel) sheetPath = rel[1].startsWith("/") ? rel[1].slice(1) : "xl/" + rel[1].replace(/^\.\//, "");
      }
    }
    const shared = [];
    const ss = get("xl/sharedStrings.xml");
    if (ss) for (const m of ss.matchAll(/<si>([\s\S]*?)<\/si>/g)) shared.push([...m[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map(t => xmlText(t[1])).join(""));
    const sheet = get(sheetPath);
    if (!sheet) throw new Error("In dit Excel-bestand staat geen werkblad.");
    const rows = [];
    for (const rm of sheet.matchAll(/<row\b[^>]*>([\s\S]*?)<\/row>/g)) {
      const row = [];
      for (const cm of rm[1].matchAll(/<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
        const attrs = cm[1], inner = cm[2] || "";
        const ref = (attrs.match(/\br="([A-Z]+)\d+"/) || [])[1];
        const t = (attrs.match(/\bt="([^"]+)"/) || [])[1];
        const v = (inner.match(/<v>([\s\S]*?)<\/v>/) || [])[1];
        let val = null;
        if (t === "s") val = shared[+v] ?? "";
        else if (t === "inlineStr") val = [...inner.matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map(x => xmlText(x[1])).join("");
        else if (t === "str" || t === "e") val = v != null ? xmlText(v) : "";
        else if (t === "b") val = v === "1";
        else if (v != null) val = Number(v);
        row[ref ? colIndex(ref) : row.length] = val;
      }
      rows.push(row);
    }
    return rows;
  }

  function readCsv(text) {
    const first = text.split(/\r?\n/, 1)[0] || "";
    const sep = (first.match(/;/g) || []).length > (first.match(/,/g) || []).length ? ";" : (first.includes("\t") ? "\t" : ",");
    const rows = []; let row = [], cell = "", q = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (q) { if (c === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += c; }
      else if (c === '"') q = true;
      else if (c === sep) { row.push(cell); cell = ""; }
      else if (c === "\n" || c === "\r") { if (c === "\r" && text[i + 1] === "\n") i++; row.push(cell); rows.push(row); row = []; cell = ""; }
      else cell += c;
    }
    if (cell || row.length) { row.push(cell); rows.push(row); }
    return rows.filter(r => r.some(x => String(x).trim() !== ""));
  }

  // Datum als JS Date: "14-01-2026", "2026-01-14", "14/01/2026" of een Excel-datumgetal.
  function parseDate(v) {
    if (v == null || v === "") return null;
    if (typeof v === "number") return new Date(Math.round((v - 25569) * 86400000));
    const s = String(v).trim();
    let m = s.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})/); if (m) return new Date(+m[3], +m[2] - 1, +m[1]);
    m = s.match(/^(\d{4})-(\d{2})-(\d{2})/); if (m) return new Date(+m[1], +m[2] - 1, +m[3]);
    return null;
  }

  const looksLikeHtml = bytes => { const head = Array.from(bytes.slice(0, 200), b => String.fromCharCode(b)).join("").toLowerCase(); return head.includes("<html") || head.includes("<!doctype"); };

  /* Orders inlezen. Geeft { orders: [{code, name, date, uitval, sales, netto}], skipped } terug. */
  function parseOrders(input, zip) {
    let rows;
    const bytes = input instanceof Uint8Array ? input : input instanceof ArrayBuffer ? new Uint8Array(input) : null;
    if (bytes && bytes[0] === 0x50 && bytes[1] === 0x4b) rows = readXlsx(bytes, zip);
    else if (bytes && looksLikeHtml(bytes)) throw new Error("Dit is een webpagina en geen export. Waarschijnlijk was de sessie verlopen of de exportlink klopt niet.");
    else rows = readCsv(bytes ? new TextDecoder("utf-8").decode(bytes).replace(/^﻿/, "") : String(input));
    if (!rows.length) throw new Error("Het bestand is leeg.");
    const head = rows[0].map(h => norm(h));
    const col = (...names) => { for (const n of names) { const i = head.indexOf(n); if (i >= 0) return i; } return -1; };
    const cCode = col("alias", "code", "medewerkercode"), cName = col("medewerker", "verkoper", "naam"), cDate = col("schrijfdatum", "datum", "orderdatum");
    const cUit = col("uitval"), cSales = col("sales", "aantal"), cNet = col("netto"), cId = col("id", "orderid", "order id", "briggsid");
    if (cName < 0 && cCode < 0) throw new Error('In de export staat geen kolom "medewerker" of "alias".');
    const orders = []; let skipped = 0;
    for (const r of rows.slice(1)) {
      if (!r || r.every(x => x == null || String(x).trim() === "")) continue;
      const code = cCode >= 0 ? String(r[cCode] ?? "").trim() : "", name = cName >= 0 ? String(r[cName] ?? "").replace(/\s+/g, " ").trim() : "";
      if (!code && !name) { skipped++; continue; }
      const uitval = cUit >= 0 ? /^(ja|yes|1|true)$/i.test(String(r[cUit] ?? "").trim()) : false;
      const sales = cSales >= 0 && r[cSales] !== "" && r[cSales] != null ? Number(String(r[cSales]).replace(",", ".")) || 0 : 1;
      const netto = cNet >= 0 && r[cNet] !== "" && r[cNet] != null ? Number(String(r[cNet]).replace(",", ".")) || 0 : (uitval ? 0 : sales);
      const date = cDate >= 0 ? parseDate(r[cDate]) : null;
      let id = cId >= 0 ? String(r[cId] ?? "").replace(/\.0$/, "").trim() : "";
      if (!id) id = "x-" + (code || norm(name)) + "-" + (date ? date.toISOString().slice(0, 10) : "") + "-" + orders.length;
      orders.push({ id, code, name, date, uitval, sales, netto });
    }
    return { orders, skipped };
  }

  /* Per medewerker optellen. countUitval: true = alle orders (bruto), false = alleen netto. */
  function aggregate(orders, opts) {
    const o = Object.assign({ countUitval: true, now: new Date() }, opts || {});
    const y = o.now.getFullYear(), mo = o.now.getMonth();
    const by = new Map();
    let first = null, last = null;
    for (const x of orders) {
      const key = x.code ? "c:" + x.code.toLowerCase() : "n:" + norm(x.name);
      const e = by.get(key) || { code: x.code, name: x.name, total: 0, month: 0, last: null };
      if (!e.name && x.name) e.name = x.name;
      const n = o.countUitval ? x.sales : x.netto;
      e.total += n;
      if (x.date && x.date.getFullYear() === y && x.date.getMonth() === mo) e.month += n;
      if (x.date) { if (!e.last || x.date > e.last) e.last = x.date; if (!first || x.date < first) first = x.date; if (!last || x.date > last) last = x.date; }
      by.set(key, e);
    }
    const rows = [...by.values()].sort((a, b) => b.total - a.total);
    return { rows, first, last, orders: orders.length };
  }

  /* Gebruiker zoeken bij een CRM-medewerker: eerst op code, dan op naam. */
  function matchUser(row, users) {
    if (row.code) { const u = users.find(u => u.crm_code && u.crm_code.toLowerCase() === row.code.toLowerCase()); if (u) return u; }
    const n = norm(row.name);
    return n ? users.find(u => norm(u.display_name) === n) || null : null;
  }

  const isoDate = d => d ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}` : null;
  root.CrmImport = { parseOrders, aggregate, matchUser, norm, isoDate };
})(typeof globalThis !== "undefined" ? globalThis : window);
