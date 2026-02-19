/**
 * Post-build script: injects per-route meta tags into static HTML files.
 *
 * Crawlers (Bing, Google) receive the built index.html for every route via
 * the SPA rewrite.  Without this script every URL returns identical <head>
 * content, which looks like duplicate content to Bing.
 *
 * This script copies dist/index.html once per route and patches <title>,
 * description, keywords, canonical, OG, Twitter, lang, and JSON-LD so each
 * URL has unique, correct SEO metadata *before* JavaScript executes.
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
const SITE_NAVIGATION = [
  { name: "Home", url: `${SITE}/` },
  { name: "Gestionali", url: `${SITE}/gestionali` },
  { name: "Siti web", url: `${SITE}/siti-web` },
  { name: "Web3", url: `${SITE}/web3` },
  { name: "Chi siamo", url: `${SITE}/about` },
];

const base = readFileSync(join(DIST, "index.html"), "utf-8");

// ---------------------------------------------------------------------------
// Route definitions — Italian defaults (primary SEO target)
// ---------------------------------------------------------------------------

const pages = [
  {
    path: "/",
    lang: "it",
    title: "Arras Industries | Software gestionali, siti web e web3",
    h1: "Software gestionali, siti web e web3 per PMI",
    description:
      "Arras Industries realizza software gestionali, siti web performanti e soluzioni web3 per PMI con obiettivi chiari, KPI tracciati e risultati misurabili.",
    keywords:
      "software gestionale su misura, sviluppo software per PMI, sviluppo siti web aziendali, seo tecnico siti web, automazione processi aziendali, integrazioni blockchain e web3, sviluppo applicazioni web business, consulenza software Italia",
    ogImage: `${SITE}/images/hero.jpg`,
  },
  {
    path: "/about",
    lang: "it",
    title: "Chi siamo | Arras Industries",
    h1: "Chi siamo",
    description:
      "Team Arras Industries: profili, competenze e percorso tecnico in software, cybersecurity, blockchain e sviluppo web.",
    keywords:
      "team arras industries, silvio meneguzzo, silvio meneguzzo blockchain dlt, società sviluppo software Italia, software architect italy, team cybersecurity e sviluppo web, sviluppo gestionali e siti web",
    ogImage: `${SITE}/images/silvio.jpeg`,
  },
  {
    path: "/gestionali",
    lang: "it",
    title: "Software Gestionale su Misura per PMI | Arras Industries",
    h1: "Software gestionale su misura per PMI",
    description:
      "Sviluppiamo software gestionali personalizzati per PMI italiane: backoffice, ordini, turni, scorte e dashboard operative. Risultati misurabili in 2-6 settimane.",
    keywords:
      "software gestionale su misura, gestionale per PMI, software ordini e magazzino, gestione turni personale, automazione processi aziendali, sviluppo software aziendale",
    ogImage: `${SITE}/images/hero.jpg`,
  },
  {
    path: "/siti-web",
    lang: "it",
    title: "Creazione Siti Web per Aziende e PMI | Arras Industries",
    h1: "Creazione siti web per aziende e PMI",
    description:
      "Creiamo siti web professionali per aziende e PMI italiane: SEO, lead generation, analytics e performance ottimizzate. Siti che portano contatti reali.",
    keywords:
      "realizzazione siti web aziendali, sviluppo siti web aziendali, agenzia web per PMI, seo tecnico per siti web, sviluppatore web Italia, ottimizzazione conversioni sito, lead generation sito aziendale",
    ogImage: `${SITE}/images/process.jpg`,
  },
  {
    path: "/web3",
    lang: "it",
    title: "Soluzioni Blockchain e Web3 per Aziende | Arras Industries",
    h1: "Soluzioni blockchain e web3 per aziende",
    description:
      "Integriamo blockchain e web3 nelle aziende italiane: tracciabilità di filiera, notarizzazione documenti, identità digitale e automazioni verificabili.",
    keywords:
      "soluzioni blockchain per aziende, integrazioni web3 per imprese, tracciabilità blockchain, notarizzazione documentale blockchain, identità digitale decentralizzata, smart contract per processi aziendali, integrazione wallet aziendale",
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

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function upsertJsonLd(html, jsonText) {
  const scriptTag = `<script id="ld-json-arras-static" type="application/ld+json">${jsonText}</script>`;
  const re =
    /<script id="ld-json-arras-static" type="application\/ld\+json">[\s\S]*?<\/script>/;
  if (re.test(html)) return html.replace(re, scriptTag);
  return html.replace("</head>", `    ${scriptTag}\n  </head>`);
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
  html = html.replace(
    /(<h1 id="seo-fallback-h1" class="seo-fallback">)[\s\S]*?(<\/h1>)/,
    `$1${escapeHtml(page.h1)}$2`
  );

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
  html = replaceMeta(html, 'property="og:locale:alternate"', "en_US");

  // Twitter
  html = replaceMeta(html, 'name="twitter:title"', page.title);
  html = replaceMeta(html, 'name="twitter:description"', page.description);
  html = replaceMeta(html, 'name="twitter:image"', page.ogImage);

  const pageLabel = page.title.split("|")[0].trim();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "Arras Industries",
        url: `${SITE}/`,
        logo: `${SITE}/favicon-1-arc-reactor-512px.png`,
        email: "arras.industries.info@gmail.com",
        telephone: "+39 334 116 8370",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: `${SITE}/`,
        name: "Arras Industries",
        inLanguage: "it-IT",
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${SITE}/#site-navigation`,
        name: SITE_NAVIGATION.map((item) => item.name),
        url: SITE_NAVIGATION.map((item) => item.url),
      },
      ...(page.path === "/"
        ? []
        : [
            {
              "@type": "BreadcrumbList",
              "@id": `${canonical}#breadcrumb`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: `${SITE}/`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: pageLabel,
                  item: canonical,
                },
              ],
            },
          ]),
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: page.title,
        description: page.description,
        inLanguage: "it-IT",
        isPartOf: {
          "@id": `${SITE}/#website`,
        },
      },
    ],
  };
  html = upsertJsonLd(html, JSON.stringify(structuredData));

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
