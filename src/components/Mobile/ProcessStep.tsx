import { motion, useTransform, type useScroll } from "framer-motion";

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
        <div className="relative grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white shadow-[0_0_22px_rgba(59,130,246,0.35)]">
          <div className="absolute -inset-2 rounded-full bg-[#3B82F6]/20 blur-xl" />
          <span className="relative font-tech text-sm">{step.number}</span>
        </div>
      </div>

      <div className="rounded-[16px] border border-white/10 bg-white/5 p-4 backdrop-blur">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-white">{step.title}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
              {`Step ${step.number}`}
            </div>
          </div>
          <div className="grid h-9 w-9 place-items-center rounded-[12px] border border-white/10 bg-white/5 text-white/70">
            {step.icon}
          </div>
        </div>
        <div className="mt-3 text-sm text-white/70">{step.desc}</div>
      </div>
    </motion.div>
  );
}
