import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ScrollyCard } from "./ScrollyCard";

export function ScrollyStory() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowO = useTransform(scrollYProgress, [0, 1], [0, 0.45]);

  const steps = t.process.phaseSteps;

  return (
    <section
      id="storia"
      className="mx-auto max-w-6xl px-4 py-16 overflow-visible"
    >
      <div
        ref={ref}
        className="grid items-start gap-10 overflow-visible md:grid-cols-[1.05fr_1.25fr] md:items-start"
      >
        <div className="md:sticky md:top-24 md:self-start md:h-fit">
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {t.process.title}
          </h2>
          <p className="mt-3 text-white/70">{t.process.subtitle}</p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-white/10" />
          <motion.div
            style={{ height: lineH }}
            className="pointer-events-none absolute left-4 top-0 w-px bg-gradient-to-b from-[#3B82F6] via-[#60A5FA] to-[#A78BFA]"
          />
          <motion.div
            style={{ opacity: glowO }}
            className="pointer-events-none absolute left-4 top-0 h-full w-6 -translate-x-1/2 bg-gradient-to-b from-transparent via-[#3B82F6]/30 to-transparent blur-xl"
          />

          <div className="space-y-10 pl-12">
            {steps.map((step, index) => (
              <ScrollyCard
                key={step.title}
                step={step}
                progress={scrollYProgress}
                index={index}
                total={steps.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
