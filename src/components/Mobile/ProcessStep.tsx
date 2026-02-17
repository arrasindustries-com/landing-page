import { motion, useTransform, type useScroll } from "framer-motion";
import { useTheme } from "@/contexts/useTheme";

export function ProcessStepMobile({
  step,
  index,
  total,
  progress,
}: {
  step: { number: string; title: string; desc: string; icon: React.ReactNode };
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const { theme } = useTheme();
  const start = index * 0.2;
  const end = start + 0.35;
  const y = useTransform(progress, [start, start + 0.2, end], [16, 0, -8]);
  const opacity = useTransform(
    progress,
    [start, start + 0.2, end],
    [0.65, 1, 0.8],
  );

  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <motion.div
      style={{ opacity, y }}
      className="grid grid-cols-[3.5rem_1fr] gap-3"
    >
      <div className="relative flex items-center justify-center">
        {!isFirst && !isLast && (
          <>
            <div className="absolute left-1/2 -top-3 -bottom-3 w-px -translate-x-1/2 bg-gradient-to-b from-[#3B82F6] via-[#60A5FA] to-[#A78BFA]" />
            <div className="absolute left-1/2 -top-3 -bottom-3 w-5 -translate-x-1/2 bg-gradient-to-b from-transparent via-[#3B82F6]/25 to-transparent blur-xl" />
          </>
        )}
        {isFirst && !isLast && (
          <>
            <div className="absolute left-1/2 top-1/2 -bottom-3 w-px -translate-x-1/2 bg-gradient-to-b from-[#3B82F6] via-[#60A5FA] to-[#A78BFA]" />
            <div className="absolute left-1/2 top-1/2 -bottom-3 w-5 -translate-x-1/2 bg-gradient-to-b from-transparent via-[#3B82F6]/25 to-transparent blur-xl" />
          </>
        )}
        {!isFirst && isLast && (
          <>
            <div className="absolute left-1/2 -top-3 bottom-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-[#3B82F6] via-[#60A5FA] to-[#A78BFA]" />
            <div className="absolute left-1/2 -top-3 bottom-1/2 w-5 -translate-x-1/2 bg-gradient-to-b from-transparent via-[#3B82F6]/25 to-transparent blur-xl" />
          </>
        )}
        <div
          className={`relative grid h-10 w-10 place-items-center rounded-full shadow-[0_0_22px_rgba(59,130,246,0.35)] ${
            theme === "dark"
              ? "border border-white/20 bg-white/5 text-white"
              : "border border-[#9fbfe9] bg-gradient-to-br from-[#f6faff] to-[#dce9ff] text-[#1b4ea3] shadow-[0_14px_30px_-18px_rgba(59,130,246,0.5)]"
          }`}
        >
          <div className="absolute -inset-2 rounded-full bg-[#3B82F6]/20 blur-xl" />
          <span className="relative font-tech text-sm">{step.number}</span>
        </div>
      </div>

      <div
        className={`rounded-[16px] p-4 backdrop-blur ${
          theme === "dark"
            ? "border border-white/10 bg-white/5"
            : "border border-[#b6cdef] bg-gradient-to-br from-[#ebf3ff] via-[#f6faff] to-[#e7f1ff] shadow-[0_20px_48px_-28px_rgba(59,130,246,0.4)]"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <div
              className={`text-sm font-semibold ${
                theme === "dark" ? "text-white" : "text-[#0F0F11]"
              }`}
            >
              {step.title}
            </div>
            <div
              className={`mt-1 text-xs uppercase tracking-[0.2em] ${
                theme === "dark" ? "text-white/40" : "text-[#1f3f73]/55"
              }`}
            >
              {`Step ${step.number}`}
            </div>
          </div>
          <div
            className={`grid h-9 w-9 place-items-center rounded-[12px] ${
              theme === "dark"
                ? "border border-white/10 bg-white/5 text-white/70"
                : "border border-[#aac6ed] bg-gradient-to-br from-[#f7fbff] to-[#e2edff] text-[#1b4ea3] shadow-[0_10px_24px_-16px_rgba(59,130,246,0.45)]"
            }`}
          >
            {step.icon}
          </div>
        </div>
        <div
          className={`mt-3 text-sm ${
            theme === "dark" ? "text-white/70" : "text-[#223652]/78"
          }`}
        >
          {step.desc}
        </div>
      </div>
    </motion.div>
  );
}
