import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageSeo } from "@/hooks/usePageSeo";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/projects";

export default function PortfolioPage() {
  const { language } = useLanguage();
  const isIt = language === "it";
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
        hasPart: projects.map((p) => ({
          "@type": "SoftwareSourceCode",
          name: p.name,
          description: isIt ? p.description.it : p.description.en,
          ...(p.repo ? { codeRepository: p.repo } : {}),
          url: p.url,
        })),
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
              ? "Una selezione del nostro lavoro: applicazioni, soluzioni web3 e strumenti software. Clicca una scheda per scoprire il progetto."
              : "A selection of our work: applications, web3 solutions, and software tools. Click a card to explore the project."}
          </p>
        </motion.div>

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

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-auto inline-flex w-fit items-center gap-2 border border-[var(--border)] px-3 py-2 text-xs font-medium uppercase tracking-[0.1em] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                  >
                    <Github className="h-4 w-4" />
                    {isIt ? "Repository" : "Repository"}
                  </a>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
