import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TimelineSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.2"],
  });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowO = useTransform(scrollYProgress, [0, 1], [0.0, 0.35]);

  return (
    <div ref={ref} className="relative mt-10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />

      <motion.div
        style={{ height: lineH }}
        className="pointer-events-none absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-[#3B82F6] via-[#60A5FA] to-[#A78BFA]"
      />

      <motion.div
        style={{ opacity: glowO }}
        className="pointer-events-none absolute left-1/2 top-0 h-full w-6 -translate-x-1/2 bg-gradient-to-b from-transparent via-[#3B82F6]/25 to-transparent blur-xl"
      />

      {children}
    </div>
  );
}
