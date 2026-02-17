import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

export function TimelineSection({
  children,
  progress,
}: {
  children: React.ReactNode;
  progress?: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.2"],
  });
  const activeProgress = progress ?? scrollYProgress;
  const glowO = useTransform(activeProgress, [0, 1], [0.0, 0.35]);

  return (
    <div ref={ref} className="relative mt-10">
      {/* linea base */}
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/5 md:block" />

      {/* linea che si disegna (robustissima) */}
      <motion.div
        style={{ scaleY: activeProgress, transformOrigin: "top" }}
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 md:block"
      >
        <div className="h-full w-full bg-gradient-to-b from-[var(--accent-soft)] via-[var(--accent)] to-[#6c5940]" />
      </motion.div>

      {/* glow leggero */}
      <motion.div
        style={{
          scaleY: activeProgress,
          transformOrigin: "top",
          opacity: glowO,
        }}
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-8 -translate-x-1/2 md:block"
      >
        <div className="h-full w-full bg-gradient-to-b from-transparent via-[var(--accent)]/30 to-transparent blur-xl" />
      </motion.div>

      {children}
    </div>
  );
}
