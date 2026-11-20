// Bouwt dist/: kopieert src/ en public/, schrijft config.js uit de omgevingsvariabelen
// en zet een versienummer op de bestanden zodat browsers na een update de nieuwe versie laden.
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync, existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "dist");
const version = Date.now().toString(36);

if (existsSync(out)) rmSync(out, { recursive: true });
mkdirSync(out, { recursive: true });
cpSync(join(root, "public"), out, { recursive: true });
for (const f of readdirSync(join(root, "src"))) {
  let txt = readFileSync(join(root, "src", f), "utf8");
  if (f === "index.html") txt = txt.replaceAll("__VERSION__", version);
  writeFileSync(join(out, f), txt);
}
writeFileSync(join(out, "sw.js"), readFileSync(join(root, "public", "sw.js"), "utf8").replace("__VERSION__", version));

const config = {
  supabaseUrl: process.env.SUPABASE_URL || "",
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY || "",
  allowSignup: /^(1|true|ja)$/i.test(process.env.ALLOW_SIGNUP || ""),
  unlockAll: /^(1|true|ja)$/i.test(process.env.UNLOCK_ALL || ""),
};
writeFileSync(join(out, "config.js"), `window.PM_CONFIG = ${JSON.stringify(config, null, 2)};\n`);
console.log(`dist/ gebouwd (versie ${version}) · database: ${config.supabaseUrl ? "gekoppeld" : "niet gekoppeld, demomodus"}`);
