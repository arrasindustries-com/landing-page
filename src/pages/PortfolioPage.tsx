import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageSeo } from "@/hooks/usePageSeo";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/projects";
import {
  publications,
  publicationTypeLabels,
  publicationTypeOrder,
  type PublicationType,
} from "@/lib/publications";

type Tab = "projects" | "publications";
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
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-14 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            {isIt ? "Portfolio" : "Portfolio"}
          </p>
          <h1 className="mt-4 text-[2rem] font-semibold tracking-tight sm:text-4xl md:text-6xl">
            {isIt ? "I progetti che costruiamo." : "The projects we build."}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
            {isIt
              ? "Una selezione del nostro lavoro: applicazioni, soluzioni web3, strumenti software e pubblicazioni."
              : "A selection of our work: applications, web3 solutions, software tools and publications."}
          </p>
        </motion.div>

        <div className="mt-10 flex gap-2 border-b border-[var(--border)]">
          {(
            [
              { id: "projects", label: isIt ? "Progetti" : "Projects" },
              {
                id: "publications",
                label: isIt ? "Pubblicazioni" : "Publications",
              },
            ] as { id: Tab; label: string }[]
          ).map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={[
                "relative -mb-px px-4 py-3 text-sm font-medium uppercase tracking-[0.12em] transition-colors",
                tab === item.id
                  ? "border-b-2 border-[var(--accent)] text-[var(--text)]"
                  : "border-b-2 border-transparent text-[var(--text-muted)] hover:text-[var(--text)]",
              ].join(" ")}
            >
              {item.label}
            </button>
          ))}
        </div>

        {tab === "projects" && (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * index }}
                className="group flex flex-col overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] transition-colors hover:border-[var(--border-strong)]"
              >
                <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-[var(--border)] bg-[var(--surface-strong)]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <span
                      className="text-5xl font-semibold text-[var(--text-soft)]"
                      style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
                    >
                      {project.name.charAt(0)}
                    </span>
                  )}
                  <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-[var(--text)]">
                      {project.name}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                      {isIt ? project.description.it : project.description.en}
                    </p>
                  </div>

                  {(project.repo || project.demo) && (
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex w-fit items-center gap-2 border border-[var(--border)] px-3 py-2 text-xs font-medium uppercase tracking-[0.1em] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                        >
                          <Github className="h-4 w-4" />
                          {isIt ? "Repository" : "Repository"}
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex w-fit items-center gap-2 border border-[var(--border)] px-3 py-2 text-xs font-medium uppercase tracking-[0.1em] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {isIt ? "Demo" : "Demo"}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.a>
            ))}
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
                      "border px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-colors",
                      pubCategory === cat
                        ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-contrast,#14110f)]"
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
                items: publications.filter((p) => p.type === type),
              }))
              .map((group) => (
                <div key={group.type}>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                    {isIt
                      ? publicationTypeLabels[group.type].it
                      : publicationTypeLabels[group.type].en}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {group.items.map((pub, index) => {
                      const inner = (
                        <>
                          <div>
                            <h3 className="text-base font-semibold leading-6 tracking-tight text-[var(--text)] md:text-lg">
                              {pub.title}
                            </h3>
                            <p className="mt-2 text-sm text-[var(--text-muted)]">
                              {pub.authors.join(", ")}
                            </p>
                            <p className="mt-1 text-sm italic text-[var(--text-soft)]">
                              {pub.venue}, {pub.year}
                            </p>
                            {pub.doi && (
                              <p className="mt-2 text-xs uppercase tracking-[0.1em] text-[var(--text-soft)]">
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
                        "group flex items-start justify-between gap-4 border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] md:p-6";
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
                          className={`${cardClass} transition-colors hover:border-[var(--border-strong)]`}
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
