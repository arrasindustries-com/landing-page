import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageSeo } from "@/hooks/usePageSeo";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/Ui";
import { projects, websites } from "@/lib/projects";
import {
  publications,
  publicationTypeLabels,
  publicationTypeOrder,
  type PublicationType,
} from "@/lib/publications";

type Tab = "projects" | "websites" | "publications";
type PubCategory = PublicationType | "all";

export default function PortfolioPage() {
  const { language } = useLanguage();
  const isIt = language === "it";
  const [tab, setTab] = useState<Tab>("projects");
  const [pubCategory, setPubCategory] = useState<PubCategory>("all");

  // Type groups that actually have publications, in display order.
  const availableTypes = publicationTypeOrder.filter((type) =>
    publications.some((p) => p.type === type),
  );
  const siteOrigin = (
    (import.meta.env.VITE_SITE_URL as string | undefined)?.trim() ||
    "https://arrasindustries.com"
  ).replace(/\/+$/, "");

  usePageSeo({
    titleIt: "Portfolio | Arras Industries",
    titleEn: "Portfolio | Arras Industries",
    descriptionIt:
      "I progetti realizzati da Arras Industries: applicazioni, soluzioni web3 e strumenti software con i relativi repository.",
    descriptionEn:
      "Projects built by Arras Industries: applications, web3 solutions, and software tools with their repositories.",
    keywordsIt: [
      "portfolio arras industries",
      "progetti software",
      "progetti web3",
      "progetti blockchain",
    ],
    keywordsEn: [
      "arras industries portfolio",
      "software projects",
      "web3 projects",
      "blockchain projects",
    ],
    path: "/portfolio",
    jsonLd: [
      {
        "@type": "CollectionPage",
        "@id": `${siteOrigin}/portfolio#portfolio`,
        url: `${siteOrigin}/portfolio`,
        name: isIt ? "Portfolio" : "Portfolio",
        inLanguage: isIt ? "it-IT" : "en-US",
        hasPart: [
          ...projects.map((p) => ({
            "@type": "SoftwareSourceCode",
            name: p.name,
            description: isIt ? p.description.it : p.description.en,
            ...(p.repo ? { codeRepository: p.repo } : {}),
            url: p.url,
          })),
          ...websites.map((site) => ({
            "@type": "WebSite",
            name: site.name,
            description: isIt ? site.description.it : site.description.en,
            url: site.url,
          })),
          ...publications.map((pub) => ({
            "@type": "ScholarlyArticle",
            headline: pub.title,
            author: pub.authors.map((name) => ({ "@type": "Person", name })),
            isPartOf: pub.venue,
            datePublished: String(pub.year),
            ...(pub.doi ? { sameAs: `https://doi.org/${pub.doi}` } : {}),
            ...(pub.url ? { url: pub.url } : {}),
          })),
        ],
      },
    ],
  });

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-14 md:px-6 md:pb-32 md:pt-20">
        <PageHero
          eyebrow="Portfolio"
          title={
            isIt ? (
              <>
                Progetti <span className="hl">e ricerca.</span>
              </>
            ) : (
              <>
                Projects <span className="hl">and research.</span>
              </>
            )
          }
          description={
            isIt
              ? "Software che abbiamo costruito, siti che abbiamo realizzato e articoli che abbiamo pubblicato. Il codice dei progetti è pubblico su GitHub."
              : "Software we have built, websites we have made and papers we have published. The code for our projects is public on GitHub."
          }
        />

        <div className="mt-16 flex gap-6 overflow-x-auto border-b border-[var(--border)] md:mt-20 md:gap-8">
          {(
            [
              { id: "projects", label: isIt ? "Progetti" : "Projects", count: projects.length },
              {
                id: "websites",
                label: isIt ? "Siti vetrina" : "Websites",
                count: websites.length,
              },
              {
                id: "publications",
                label: isIt ? "Pubblicazioni" : "Publications",
                count: publications.length,
              },
            ] as { id: Tab; label: string; count: number }[]
          ).map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={[
                "relative -mb-px inline-flex shrink-0 items-baseline gap-2 border-b-2 py-4 font-display text-lg font-medium tracking-[var(--tk-title)] transition-colors",
                tab === item.id
                  ? "border-[var(--accent-bright)] text-[var(--text)]"
                  : "border-transparent text-[var(--text-soft)] hover:text-[var(--text)]",
              ].join(" ")}
            >
              {item.label}
              <span className="font-mono text-[11px] tracking-normal text-[var(--text-soft)]">
                {String(item.count).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>

        {tab === "projects" && (
          <div className="mt-12 grid gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col"
              >
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border border-[var(--border)] bg-white transition-colors duration-300 group-hover:border-[var(--border-strong)]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt=""
                      className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  ) : (
                    <span className="font-display text-6xl font-semibold text-[var(--text-soft)]">
                      {project.name.charAt(0)}
                    </span>
                  )}
                  <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center bg-[var(--surface-strong)] text-[var(--text)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h2 className="text-2xl">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="after:absolute after:inset-0 after:content-['']"
                    >
                      {project.name}
                    </a>
                  </h2>
                  <span className="font-mono text-[11px] text-[var(--text-soft)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  {isIt ? project.description.it : project.description.en}
                </p>

                {(project.repo || project.demo) && (
                  <div className="relative z-10 mt-5 flex flex-wrap gap-2">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-[var(--border)] px-3 py-2 text-[13px] font-medium text-[var(--text-muted)] transition-colors hover:border-[var(--text)] hover:text-[var(--text)]"
                      >
                        <Github className="h-4 w-4" />
                        Repository
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-[var(--border)] px-3 py-2 text-[13px] font-medium text-[var(--text-muted)] transition-colors hover:border-[var(--text)] hover:text-[var(--text)]"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    )}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        )}

        {tab === "websites" && (
          <div className="mt-12 grid gap-x-5 gap-y-14 md:grid-cols-2">
            {websites.map((site, index) => {
              const host = new URL(site.url).hostname.replace(/^www\./, "");
              return (
                <motion.article
                  key={site.url}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex flex-col"
                >
                  <div className="overflow-hidden border border-[var(--border)] bg-[var(--surface-strong)] transition-colors duration-300 group-hover:border-[var(--border-strong)]">
                    <div className="flex h-9 items-center gap-3 border-b border-[var(--border)] px-3">
                      <span className="flex gap-1.5" aria-hidden>
                        <span className="h-2 w-2 rounded-full bg-[var(--border-strong)]" />
                        <span className="h-2 w-2 rounded-full bg-[var(--border-strong)]" />
                        <span className="h-2 w-2 rounded-full bg-[var(--border-strong)]" />
                      </span>
                      <span className="flex-1 truncate text-center font-mono text-[11px] text-[var(--text-soft)]">
                        {host}
                      </span>
                      <span className="w-[30px]" aria-hidden />
                    </div>
                    <div className="aspect-[16/10] overflow-hidden bg-[var(--surface)]">
                      <img
                        src={site.image}
                        alt={isIt ? `Anteprima del sito ${site.name}` : `${site.name} website preview`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h2 className="text-2xl">
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="after:absolute after:inset-0 after:content-['']"
                      >
                        {site.name}
                      </a>
                    </h2>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text)]">
                      {isIt ? "Visita il sito" : "Visit site"}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--text-muted)]">
                    {isIt ? site.description.it : site.description.en}
                  </p>
                </motion.article>
              );
            })}
          </div>
        )}

        {tab === "publications" && (
          <>
            <div className="mt-8 flex flex-wrap gap-2">
              {(["all", ...availableTypes] as PubCategory[]).map((cat) => {
                const label =
                  cat === "all"
                    ? isIt
                      ? "Tutte"
                      : "All"
                    : isIt
                      ? publicationTypeLabels[cat].it
                      : publicationTypeLabels[cat].en;
                return (
                  <button
                    key={cat}
                    onClick={() => setPubCategory(cat)}
                    className={[
                      "border px-3 py-2 text-[13px] font-medium transition-colors",
                      pubCategory === cat
                        ? "border-[var(--text)] bg-[var(--text)] text-[var(--page-bg)]"
                        : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:text-[var(--text)]",
                    ].join(" ")}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 space-y-12">
            {availableTypes
              .filter((type) => pubCategory === "all" || pubCategory === type)
              .map((type) => ({
                type,
                items: publications
                  .filter((p) => p.type === type)
                  .sort((a, b) => b.year - a.year),
              }))
              .map((group) => (
                <div key={group.type}>
                  <h2 className="eyebrow">
                    {isIt
                      ? publicationTypeLabels[group.type].it
                      : publicationTypeLabels[group.type].en}
                  </h2>
                  <div className="mt-5 border-t border-[var(--border)]">
                    {group.items.map((pub, index) => {
                      const inner = (
                        <>
                          <div>
                            <h3 className="font-display text-lg font-medium leading-7 tracking-[var(--tk-title)] text-[var(--text)] transition-colors group-hover:text-[var(--accent)] md:text-xl">
                              {pub.title}
                            </h3>
                            <p className="mt-2 text-sm text-[var(--text-muted)]">
                              {pub.authors.join(", ")}
                            </p>
                            <p className="mt-1 text-sm text-[var(--text-soft)]">
                              {pub.venue}, {pub.year}
                            </p>
                            {pub.doi && (
                              <p className="mt-2 font-mono text-[11px] tracking-[0.04em] text-[var(--text-soft)]">
                                DOI: {pub.doi}
                              </p>
                            )}
                          </div>
                          {pub.url && (
                            <ExternalLink className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--text-muted)] transition-colors group-hover:text-[var(--text)]" />
                          )}
                        </>
                      );
                      const cardClass =
                        "group flex items-start justify-between gap-6 border-b border-[var(--border)] py-6 md:py-7";
                      const anim = {
                        initial: { opacity: 0, y: 14 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.35, delay: 0.06 * index },
                      };
                      return pub.url ? (
                        <motion.a
                          key={pub.title}
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          {...anim}
                          className={cardClass}
                        >
                          {inner}
                        </motion.a>
                      ) : (
                        <motion.div key={pub.title} {...anim} className={cardClass}>
                          {inner}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
}
