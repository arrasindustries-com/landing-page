import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { MagneticButton } from "../Button/MagneticButton";
import { scrollToId } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { HeroImage } from "./HeroImage";

export function Hero() {
  const { t, language } = useLanguage();
  const words = useMemo(() => t.hero.words, [t]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIdx((p) => (p + 1) % words.length),
      2200,
    );
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="w-full pt-16 md:pt-20 min-h-[70vh] md:min-h-[80vh]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="mt-5 min-h-[4.6em] text-4xl font-semibold tracking-[-0.02em] md:min-h-[3.15em] md:text-7xl">
            {language === "it" ? "Software per PMI," : "Software for SMBs,"}
            <span className="relative mt-0.5 block min-h-[2.4em] align-top md:mt-0 md:ml-1 md:inline-block md:min-h-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={words[idx]}
                  initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                  transition={{ duration: 0.45 }}
                  className="hero-rotating-word inline-block rounded-[12px] bg-gradient-to-r from-[var(--accent)] via-[#8e7859] to-[var(--accent-soft)] px-3 py-1 leading-tight shadow-[0_14px_28px_-20px_rgba(122,102,72,0.42)]"
                >
                  {words[idx]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="block leading-tight">
              {language === "it"
                ? "quando serve, con obiettivi chiari."
                : "when needed, with clear objectives."}
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-[var(--muted)]">{t.hero.subtitle}</p>

          <div className="mt-7 hidden gap-2 sm:flex sm:flex-row">
            <MagneticButton onClick={() => scrollToId("contatto")}>
              {t.hero.requestCall} <ArrowRight className="h-4 w-4" />
            </MagneticButton>

            <MagneticButton
              variant="outline"
              onClick={() => scrollToId("servizi")}
            >
              {t.nav.services}
            </MagneticButton>
          </div>
        </motion.div>

        <HeroImage />
      </div>
    </section>
  );
}
