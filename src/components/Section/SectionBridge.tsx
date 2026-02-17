import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/contexts/useTheme";

export function SectionBridge({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.3"],
  });
  const glow = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-4 py-10">
      <div
        className={`relative overflow-hidden rounded-[14px] p-6 backdrop-blur md:p-8 ${
          theme === "dark"
            ? "border border-white/10 bg-white/5"
            : "border border-[var(--border)] bg-[var(--surface)] shadow-[0_16px_36px_-26px_rgba(35,49,73,0.22)]"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,102,72,0.12),transparent_58%)]" />
        <div className="relative grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div
              className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                theme === "dark" ? "text-white/60" : "text-[var(--muted)]"
              }`}
            >
              {eyebrow}
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              {title}
            </div>
            <div
              className={`mt-2 max-w-2xl text-sm ${
                theme === "dark" ? "text-white/70" : "text-[var(--muted)]"
              }`}
            >
              {subtitle}
            </div>
          </div>

          <div
            className={`relative h-10 w-full overflow-hidden rounded-full md:w-[220px] ${
              theme === "dark"
                ? "border border-white/10 bg-white/5"
                : "border border-[var(--border)] bg-[var(--surface-strong)]"
            }`}
          >
            <motion.div
              style={{
                scaleX: scrollYProgress,
                transformOrigin: "left",
                opacity: glow,
              }}
              className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] via-[#8e7859] to-[var(--accent-soft)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
