import { motion, useTransform, type useScroll } from "framer-motion";
import { useTheme } from "@/contexts/useTheme";

export function ProcessStep({
  step,
  index,
  progress,
}: {
  step: { number: string; title: string; desc: string; icon: React.ReactNode };
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const { theme } = useTheme();
  const start = index * 0.2;
  const end = start + 0.35;
  const scale = useTransform(progress, [start, start + 0.2, end], [1, 1.08, 1]);
  const opacity = useTransform(
    progress,
    [start, start + 0.2, end],
    [0.6, 1, 0.7],
  );

  return (
    <motion.div style={{ opacity }} className="relative group">
      <motion.div style={{ scale }} className="flex flex-col items-start gap-4">
        <div
          className={`relative z-10 grid h-16 w-16 place-items-center rounded-full shadow-[0_0_26px_rgba(59,130,246,0.35)] transition group-hover:shadow-[0_0_36px_rgba(96,165,250,0.6)] ${
            theme === "dark"
              ? "border border-white/15 bg-white/5 text-white"
              : "border border-[#9fbfe9] bg-gradient-to-br from-[#f6faff] to-[#dce9ff] text-[#1b4ea3] shadow-[0_16px_34px_-20px_rgba(59,130,246,0.55)]"
          }`}
        >
          <div className="absolute -inset-2 rounded-full bg-[#3B82F6]/10 blur-xl transition group-hover:bg-[#60A5FA]/20" />
          <span className="relative font-tech text-lg">{step.number}</span>
        </div>
        <div
          className={`text-sm ${
            theme === "dark" ? "text-white/60" : "text-[#1f3f73]/75"
          }`}
        >
          {step.title}
        </div>
        <div
          className={`text-sm ${
            theme === "dark" ? "text-white/70" : "text-[#223652]/78"
          }`}
        >
          {step.desc}
        </div>
        <div
          className={`grid h-9 w-9 place-items-center rounded-[12px] ${
            theme === "dark"
              ? "border border-white/10 bg-white/5 text-white/70"
              : "border border-[#aac6ed] bg-gradient-to-br from-[#f7fbff] to-[#e2edff] text-[#1b4ea3] shadow-[0_12px_28px_-18px_rgba(59,130,246,0.45)]"
          }`}
        >
          {step.icon}
        </div>
      </motion.div>
    </motion.div>
  );
}
