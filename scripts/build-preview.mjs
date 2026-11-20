// Bouwt preview/pm-academy-preview.html: de demoversie als één zelfstandig bestand
// (opmaak, scripts, inhoud en afbeeldingen ingebakken, geen database). Handig om te delen of te bekijken.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = f => readFileSync(join(root, f), "utf8");
const dataUri = (f, type) => `data:${type};base64,${readFileSync(join(root, f)).toString("base64")}`;

const assets = {
  "/brand/wordmark-cream.png": dataUri("public/brand/wordmark-cream.png", "image/png"),
  "/brand/wordmark-red.png": dataUri("public/brand/wordmark-red.png", "image/png"),
  "/brand/mark.svg": dataUri("public/brand/mark.svg", "image/svg+xml"),
};
const inlineAssets = s => Object.entries(assets).reduce((acc, [k, v]) => acc.replaceAll(k, v), s);
const safeScript = s => s.replace(/<\/script/gi, "<\\/script");

const app = read("src/app.js").replace(/if \("serviceWorker" in navigator[^\n]*\n/, "");
const scripts = [
  "window.PM_CONFIG = {};",
  read("src/curriculum.default.js"),
  read("src/backend.js"),
  inlineAssets(app),
].map(s => `<script>\n${safeScript(s)}\n</script>`).join("\n");

const html = `<title>PM Agency Academy</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="icon" href="${dataUri("public/favicon.svg", "image/svg+xml")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&family=Bodoni+Moda:opsz,wght@6..96,500&family=Montserrat:wght@400;500;600;700;800&display=swap">
<style>
${read("src/styles.css")}
</style>
<div class="app">
  <aside class="side" id="side"></aside>
  <main class="main"><div class="wrap" id="view"></div></main>
  <nav class="tabbar" id="tabbar" aria-label="Hoofdmenu"></nav>
</div>
<div class="toast" id="toast" role="status" hidden></div>
${scripts}
`;

mkdirSync(join(root, "preview"), { recursive: true });
writeFileSync(join(root, "preview", "pm-academy-preview.html"), html);
console.log(`preview/pm-academy-preview.html (${(html.length / 1024).toFixed(0)} kB)`);
