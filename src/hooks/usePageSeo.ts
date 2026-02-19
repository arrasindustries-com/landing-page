import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export interface PageSeoConfig {
  titleIt: string;
  titleEn: string;
  descriptionIt: string;
  descriptionEn: string;
  keywordsIt: string[];
  keywordsEn: string[];
  path: string;
  ogImagePath?: string;
  jsonLd: object[];
}

export function usePageSeo(config: PageSeoConfig) {
  const { language } = useLanguage();

  useEffect(() => {
    const siteOrigin = (
      (import.meta.env.VITE_SITE_URL as string | undefined)?.trim() ||
      "https://arrasindustries.com"
    ).replace(/\/+$/, "");

    const canonicalUrl = `${siteOrigin}${config.path}`;
    const currentHost = window.location.hostname.toLowerCase();
    const canonicalHost = new URL(siteOrigin).hostname.toLowerCase();
    const isPreviewHost =
      currentHost.endsWith(".vercel.app") && currentHost !== canonicalHost;
    const isItalian = language === "it";

    const title = isItalian ? config.titleIt : config.titleEn;
    const description = isItalian
      ? config.descriptionIt
      : config.descriptionEn;
    const keywords = (isItalian ? config.keywordsIt : config.keywordsEn).join(", ");
    const ogImage = `${siteOrigin}${config.ogImagePath || "/images/hero.jpg"}`;

    document.title = title;
    document.documentElement.lang = isItalian ? "it" : "en";

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector) as HTMLMetaElement | null;
      if (el) el.content = content;
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[name="keywords"]', keywords);
    setMeta("meta[property='og:title']", title);
    setMeta("meta[property='og:description']", description);
    setMeta("meta[property='og:url']", canonicalUrl);
    setMeta("meta[property='og:site_name']", "Arras Industries");
    setMeta(
      "meta[property='og:locale']",
      isItalian ? "it_IT" : "en_US",
    );
    setMeta("meta[name='twitter:title']", title);
    setMeta("meta[name='twitter:description']", description);
    setMeta(
      "meta[name='robots']",
      isPreviewHost
        ? "noindex,nofollow,noarchive,max-image-preview:none"
        : "index,follow,max-image-preview:large",
    );
    setMeta("meta[property='og:image']", ogImage);
    setMeta("meta[name='twitter:image']", ogImage);

    const canonical = document.querySelector(
      "link[rel='canonical']",
    ) as HTMLLinkElement | null;
    if (canonical) canonical.href = canonicalUrl;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        ...config.jsonLd,
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: title,
          description,
          inLanguage: isItalian ? "it-IT" : "en-US",
          keywords,
          isPartOf: {
            "@id": `${siteOrigin}/#website`,
          },
          about: (isItalian ? config.keywordsIt : config.keywordsEn)
            .slice(0, 3)
            .map((kw) => ({ "@type": "Thing", name: kw })),
        },
      ],
    };

    let script = document.getElementById(
      "ld-json-arras",
    ) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "ld-json-arras";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schema);
  }, [language, config]);
}
