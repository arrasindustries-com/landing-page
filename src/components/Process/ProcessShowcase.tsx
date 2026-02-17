import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp } from "@/types/types";
import { motion, useTransform } from "framer-motion";
import { BadgeCheck, Bolt, LineChart, Users } from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { ProcessStep } from "./ProcessStep";
import { ProcessStepMobile } from "../Mobile/ProcessStep";
import { useElementScrollProgressEl } from "@/lib/useElementScrollProgress";
import { useTheme } from "@/contexts/useTheme";

type ProcessStepData = {
  number: string;
  title: string;
  desc: string;
  icon: ReactNode;
};

export function ProcessShowcase() {
  const { t } = useLanguage();
  const { theme } = useTheme();
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
    return (t.process.steps ?? []).slice(0, 4).map((s, i: number) => ({
      ...s,
      icon: safeIcon(i),
    })) as ProcessStepData[];
  }, [t.process.steps, icons]);

  return (
    <div ref={setEl} className="relative">
      <motion.div {...fadeUp} className="max-w-3xl">
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          {t.process.title}
        </h2>
        <p
          className={`mt-2 ${
            theme === "dark" ? "text-white/70" : "text-[var(--muted)]"
          }`}
        >
          {t.process.subtitle}
        </p>
      </motion.div>

      <div
        className={`relative mt-10 rounded-[14px] p-6 backdrop-blur md:p-8 ${
          theme === "dark"
            ? "border border-white/10 bg-[#0C0D10]/80"
            : "border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_48px_-30px_rgba(35,49,73,0.24)]"
        }`}
      >
        {theme === "light" ? (
          <>
            <div className="pointer-events-none absolute -top-16 -left-10 h-48 w-48 rounded-full bg-[#5c78a8]/18 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-[radial-gradient(circle_at_15%_20%,rgba(47,94,168,0.14),transparent_46%),radial-gradient(circle_at_85%_78%,rgba(126,113,90,0.12),transparent_44%)]" />
          </>
        ) : null}
        <div className="relative">
          {/* desktop horizontal timeline */}
          <div
            className={`absolute left-0 right-0 top-[36px] hidden h-px md:block ${
              theme === "dark" ? "bg-white/10" : "bg-[var(--line)]"
            }`}
          />

          {/* progress line (robusta): scaleX invece di width % */}
          <motion.div
            style={{
              scaleX: progress,
              transformOrigin: "left",
              backgroundImage: "linear-gradient(90deg, var(--accent), #8e7859, var(--accent-soft))",
            }}
            className="absolute left-0 right-0 top-[36px] z-20 hidden h-[3px] md:block"
          />

          {/* glow che cresce insieme alla line */}
          <motion.div
            style={{
              scaleX: progress,
              transformOrigin: "left",
              opacity: glowO,
              backgroundImage: "linear-gradient(90deg, rgba(122,102,72,0), rgba(122,102,72,0.24), rgba(164,143,114,0))",
            }}
            className="absolute left-0 right-0 top-[30px] z-10 hidden h-5 blur-2xl md:block"
          />

          <div className="hidden gap-6 md:grid md:grid-cols-4">
            {steps.map((step, index: number) => (
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
              {steps.map((step, index: number) => (
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
