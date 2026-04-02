import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { SupportSection } from "@/components/SupportUs";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageSeo } from "@/hooks/usePageSeo";

const reveal = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55 },
};

export default function SupportPage() {
  const { language } = useLanguage();
  const isItalian = language === "it";

  usePageSeo({
    titleIt: "Supporto | Arras Industries",
    titleEn: "Support | Arras Industries",
    descriptionIt:
      "Una pagina dedicata a chi vuole supportare la sperimentazione e lo sviluppo di strumenti più aperti, veloci e verificabili.",
    descriptionEn:
      "A dedicated page for anyone who wants to support experimentation and the development of more open, faster, and verifiable tools.",
    keywordsIt: [
      "supporto arras industries",
      "donazioni sviluppo software",
      "supporta innovazione web3",
    ],
    keywordsEn: [
      "support arras industries",
      "software innovation donations",
      "support web3 experimentation",
    ],
    path: "/support",
    jsonLd: [],
  });

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-14 md:pb-12 md:pt-16">
        <motion.div
          initial={reveal.initial}
          animate={reveal.animate}
          transition={reveal.transition}
          className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
              {isItalian ? "Supporto" : "Support"}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              {isItalian
                ? "Per chi vuole sostenere ricerca applicata e sperimentazione."
                : "For those who want to support applied research and experimentation."}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
              {isItalian
                ? "Qui trovi un canale facoltativo per sostenere prototipi, test tecnici e sviluppo di strumenti che alimentano il nostro lavoro più sperimentale."
                : "An optional channel is available here to support prototypes, technical testing, and tool development that feeds our more experimental work."}
            </p>
          </div>

          <div className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] px-6 py-6 shadow-[var(--shadow)] md:px-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-soft)]">
              {isItalian ? "Nota" : "Note"}
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
              {isItalian
                ? "Le donazioni non sostituiscono i progetti cliente: servono a finanziare sperimentazione, validazione tecnica e sviluppo di asset riutilizzabili nel tempo."
                : "Donations do not replace client work: they help fund experimentation, technical validation, and the development of reusable assets over time."}
            </p>
          </div>
        </motion.div>
      </section>

      <SupportSection />
      <Footer />
    </>
  );
}
