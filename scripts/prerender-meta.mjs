/**
 * Post-build script: injects per-route meta tags into static HTML files.
 *
 * Crawlers (Bing, Google) receive the built index.html for every route via
 * the SPA rewrite.  Without this script every URL returns identical <head>
 * content, which looks like duplicate content to Bing.
 *
 * This script copies dist/index.html once per route and patches <title>,
 * description, keywords, canonical, OG, Twitter and lang attributes so each
 * URL has unique, correct meta tags *before* JavaScript executes.
 *
 * Vercel serves static files before applying rewrites, so
 * dist/gestionali/index.html is served when Bingbot visits /gestionali.
 * Client-side navigation still works normally (React Router handles it).
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const SITE = "https://arrasindustries.com";
const IS_PREVIEW = process.env.VERCEL_ENV === "preview";
const ROBOTS_CONTENT = IS_PREVIEW
  ? "noindex,nofollow,noarchive,max-image-preview:none"
  : "index,follow,max-image-preview:large";

const base = readFileSync(join(DIST, "index.html"), "utf-8");

// ---------------------------------------------------------------------------
// Route definitions — Italian defaults (primary SEO target)
// ---------------------------------------------------------------------------

const pages = [
  {
    path: "/",
    lang: "it",
    title: "Arras Industries | Software gestionali, siti web, web3",
    description:
      "Arras Industries realizza software gestionali, siti web performanti e soluzioni web3 per PMI con obiettivi chiari e risultati misurabili.",
    keywords:
      "software gestionale, gestionale PMI, sviluppo siti web, web developer Italia, azienda IT specializzata, soluzioni blockchain, integrazione web3, software su misura",
    ogImage: `${SITE}/images/hero.jpg`,
  },
  {
    path: "/gestionali",
    lang: "it",
    title: "Software Gestionale su Misura per PMI | Arras Industries",
    description:
      "Sviluppiamo software gestionali personalizzati per PMI italiane: backoffice, ordini, turni, scorte e dashboard operative. Risultati misurabili in 2-6 settimane.",
    keywords:
      "software gestionale su misura, gestionale PMI, sviluppo gestionale aziendale, software ordini e magazzino, gestione turni personale, developer software gestionale, azienda IT gestionale",
    ogImage: `${SITE}/images/hero.jpg`,
  },
  {
    path: "/siti-web",
    lang: "it",
    title: "Creazione Siti Web per Aziende e PMI | Arras Industries",
    description:
      "Creiamo siti web professionali per aziende e PMI italiane: SEO, lead generation, analytics e performance ottimizzate. Siti che portano contatti reali.",
    keywords:
      "creazione siti web, sviluppo siti web aziendali, web designer per aziende, agenzia sviluppo web, seo tecnico sito web, sviluppatore web Italia, azienda IT sviluppo web",
    ogImage: `${SITE}/images/process.jpg`,
  },
  {
    path: "/web3",
    lang: "it",
    title: "Soluzioni Blockchain e Web3 per Aziende | Arras Industries",
    description:
      "Integriamo blockchain e web3 nelle aziende italiane: tracciabilita supply chain, notarizzazione documenti, identita digitale e automazioni verificabili.",
    keywords:
      "blockchain per aziende, web3 per imprese, tracciabilita blockchain, notarizzazione blockchain, integrazione wallet aziendale, sviluppatore blockchain Italia, azienda IT web3",
    ogImage: `${SITE}/images/usecase.jpg`,
  },
];

// ---------------------------------------------------------------------------
// Meta-tag replacement helpers
// ---------------------------------------------------------------------------

/**
 * Replace the content="..." value inside a <meta> tag identified by a unique
 * attribute string.  Handles multi-line tags (the Vite build preserves the
 * original formatting).
 */
function replaceMeta(html, attr, newContent) {
  const escaped = attr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `(<meta[\\s\\S]*?${escaped}[\\s\\S]*?content=")[^"]*(")`
  );
  return html.replace(re, `$1${newContent}$2`);
}

function replaceLink(html, rel, attr, newValue) {
  const re = new RegExp(
    `(<link[\\s\\S]*?rel="${rel}"[\\s\\S]*?${attr}=")[^"]*(")`
  );
  return html.replace(re, `$1${newValue}$2`);
}

// ---------------------------------------------------------------------------
// Generate per-route HTML
// ---------------------------------------------------------------------------

for (const page of pages) {
  const canonical =
    page.path === "/" ? `${SITE}/` : `${SITE}${page.path}`;

  let html = base;

  // lang
  html = html.replace(/<html lang="[^"]*"/, `<html lang="${page.lang}"`);

  // <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);

  // Standard meta
  html = replaceMeta(html, 'name="robots"', ROBOTS_CONTENT);
  html = replaceMeta(html, 'name="description"', page.description);
  html = replaceMeta(html, 'name="keywords"', page.keywords);

  // Canonical
  html = replaceLink(html, "canonical", "href", canonical);

  // Open Graph
  html = replaceMeta(html, 'property="og:title"', page.title);
  html = replaceMeta(html, 'property="og:description"', page.description);
  html = replaceMeta(html, 'property="og:url"', canonical);
  html = replaceMeta(html, 'property="og:image"', page.ogImage);
  html = replaceMeta(html, 'property="og:locale"', "it_IT");

  // Twitter
  html = replaceMeta(html, 'name="twitter:title"', page.title);
  html = replaceMeta(html, 'name="twitter:description"', page.description);
  html = replaceMeta(html, 'name="twitter:image"', page.ogImage);

  // Write file
  if (page.path === "/") {
    writeFileSync(join(DIST, "index.html"), html);
  } else {
    const dir = join(DIST, page.path.slice(1));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html);
  }

  console.log(`  \u2713 ${page.path}`);
}

console.log(
  `\nInjected unique meta tags into ${pages.length} route HTML files.`
);
