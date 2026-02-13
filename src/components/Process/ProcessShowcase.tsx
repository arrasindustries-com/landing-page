import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp } from "@/types/types";
import { motion, useTransform } from "framer-motion";
import { BadgeCheck, Bolt, LineChart, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { ProcessStep } from "./ProcessStep";
import { ProcessStepMobile } from "../Mobile/ProcessStep";
import { useElementScrollProgressEl } from "@/lib/useElementScrollProgress";

export function ProcessShowcase() {
  const { t } = useLanguage();
  const [el, setEl] = useState<HTMLDivElement | null>(null);

  // progress 0..1 coerente con lo scroll del blocco
  const progress = useElementScrollProgressEl(el, { start: 0.8, end: 0.35 });

  // glow solo in opacità (linea cresce con scaleX)
  const glowO = useTransform(progress, [0, 1], [0, 1]);

  const icons = useMemo(
    () => [
      <Users className="h-5 w-5" />,
      <Bolt className="h-5 w-5" />,
      <BadgeCheck className="h-5 w-5" />,
      <LineChart className="h-5 w-5" />,
    ],
    [],
  );

  const steps = useMemo(() => {
    const safeIcon = (i: number) => icons[i] ?? <Bolt className="h-5 w-5" />;
    return (t.process.steps ?? []).slice(0, 4).map((s: any, i: number) => ({
      ...s,
      icon: safeIcon(i),
    }));
  }, [t.process.steps, icons]);

  return (
    <div ref={setEl} className="relative">
      <motion.div {...fadeUp} className="max-w-3xl">
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          {t.process.title}
        </h2>
        <p className="mt-2 text-white/70">{t.process.subtitle}</p>
      </motion.div>

      <div className="mt-10 rounded-[14px] border border-white/10 bg-[#0C0D10]/80 p-6 backdrop-blur md:p-8">
        <div className="relative">
          {/* desktop horizontal timeline */}
          <div className="absolute left-0 right-0 top-[36px] hidden h-px bg-white/10 md:block" />

          {/* progress line (robusta): scaleX invece di width % */}
          <motion.div
            style={{
              scaleX: progress,
              transformOrigin: "left",
              backgroundImage:
                "linear-gradient(90deg, #3B82F6, #60A5FA, #A78BFA)",
            }}
            className="absolute left-0 right-0 top-[36px] hidden h-[3px] md:block"
          />

          {/* glow che cresce insieme alla line */}
          <motion.div
            style={{
              scaleX: progress,
              transformOrigin: "left",
              opacity: glowO,
              backgroundImage:
                "linear-gradient(90deg, rgba(59,130,246,0), rgba(59,130,246,0.25), rgba(167,139,250,0))",
            }}
            className="absolute left-0 right-0 top-[30px] hidden h-5 blur-2xl md:block"
          />

          <div className="hidden gap-6 md:grid md:grid-cols-4">
            {steps.map((step: any, index: number) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
                progress={progress}
              />
            ))}
          </div>

          <div className="md:hidden">
            <div className="flex flex-col gap-6">
              {steps.map((step: any, index: number) => (
                <ProcessStepMobile
                  key={`${step.number}-mobile`}
                  step={step}
                  index={index}
                  total={steps.length}
                  progress={progress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
