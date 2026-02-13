import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SectionBridge({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.3"],
  });
  const line = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glow = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-4 py-10">
      <div className="relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)]" />
        <div className="relative grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {eyebrow}
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              {title}
            </div>
            <div className="mt-2 max-w-2xl text-sm text-white/70">
              {subtitle}
            </div>
          </div>

          <div className="relative h-10 w-full overflow-hidden rounded-full border border-white/10 bg-white/5 md:w-[220px]">
            <motion.div
              style={{ width: line, opacity: glow }}
              className="h-full rounded-full bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#A78BFA]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
