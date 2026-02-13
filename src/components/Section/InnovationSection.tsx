import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BlockchainScene } from "../Blockchain/BlockchainScene";

export function InnovationSection() {
  const { t } = useLanguage();
  const slides = t.innovation.features.map((f) => ({
    title: f.title,
    detail: f.desc,
  }));
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5200);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="innovazione"
      className="relative mx-auto max-w-6xl px-4 pb-24 pt-12"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="h-full w-full opacity-[0.12]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(7)].map((_, i) => (
            <motion.path
              key={i}
              d={`M -200 ${180 + i * 110} C 420 ${120 + i * 70}, 860 ${420 + i * 110}, 1400 ${200 + i * 80}`}
              stroke="url(#meshGradient)"
              strokeWidth="1"
              fill="transparent"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 4.5, delay: i * 0.2, ease: "easeInOut" }}
            />
          ))}
          <defs>
            <linearGradient id="meshGradient">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-400 to-violet-400">
          {t.innovation.title}
        </h2>
        <p className="mt-3 max-w-2xl text-white/70">{t.innovation.subtitle}</p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.25),transparent_55%)]" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 opacity-30">
            <svg viewBox="0 0 200 200" className="h-full w-full">
              <defs>
                <linearGradient
                  id="blockGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                rx="10"
                fill="url(#blockGradient)"
                opacity="0.8"
              />
              <rect
                x="110"
                y="35"
                width="70"
                height="70"
                rx="12"
                fill="url(#blockGradient)"
                opacity="0.6"
              />
              <rect
                x="40"
                y="110"
                width="90"
                height="70"
                rx="12"
                fill="url(#blockGradient)"
                opacity="0.5"
              />
              <line
                x1="80"
                y1="50"
                x2="120"
                y2="60"
                stroke="#60A5FA"
                strokeWidth="3"
                opacity="0.6"
              />
              <line
                x1="85"
                y1="90"
                x2="70"
                y2="130"
                stroke="#7C3AED"
                strokeWidth="3"
                opacity="0.6"
              />
              <line
                x1="140"
                y1="105"
                x2="110"
                y2="135"
                stroke="#60A5FA"
                strokeWidth="3"
                opacity="0.6"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {t.innovation.useCases}
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight">
              {t.innovation.useCasesTitle}
            </div>
            <div className="mt-3 text-sm text-white/70">
              {t.innovation.useCasesDesc}
            </div>

            <div className="relative mt-6 min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[active].title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-[14px] border border-white/10 bg-white/5 p-5"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    {t.innovation.focus}
                  </div>
                  <div className="mt-2 text-xl font-semibold tracking-tight">
                    {slides[active].title}
                  </div>
                  <div className="mt-2 text-sm text-white/70">
                    {slides[active].detail}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(96,165,250,0.25),transparent_55%),radial-gradient(circle_at_70%_10%,rgba(59,130,246,0.25),transparent_55%)]" />
          <div className="relative h-[280px]">
            <BlockchainScene />
          </div>
          <div className="relative mt-4 text-sm text-white/70">
            {t.innovation.conceptual}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(124,58,237,0.25),transparent_55%)]" />
        <div className="relative grid gap-6 md:grid-cols-[0.7fr_1.3fr] items-center">
          <div className="rounded-[14px] border border-white/10 bg-white/5 p-4">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {t.innovation.digitalPayments}
            </div>
            <div className="mt-2 text-xl font-semibold tracking-tight">
              {t.innovation.checkoutTitle}
            </div>
            <p className="mt-2 text-sm text-white/70">
              {t.innovation.checkoutDesc}
            </p>
            <div className="mt-3 grid gap-2">
              {t.innovation.benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 rounded-[10px] border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-[12px] border border-white/10 bg-[#0F0F11] p-3">
              <div className="h-10 w-10 overflow-hidden rounded-[10px] border border-white/15 bg-white/5">
                <img
                  src="/metamask.png"
                  alt="MetaMask"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-sm text-white/70">Wallet: MetaMask</div>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
              Crypto ready
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-[auto_1fr_1fr_1fr] items-center">
            <motion.div
              className="hidden md:grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.98, 1.06, 0.98],
              }}
              transition={{ duration: 2.6, repeat: Infinity }}
            >
              →
            </motion.div>
            {t.innovation.cryptoFlow.steps.map((item, idx) => (
              <motion.div
                key={item.title}
                className="group relative h-full rounded-[12px] border border-white/10 bg-white/5 p-4 text-sm text-white/70"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(0,0,0,0)",
                    "0 0 18px rgba(96,165,250,0.35)",
                    "0 0 0 rgba(0,0,0,0)",
                  ],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: idx * 0.5,
                }}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Step {idx + 1}
                </div>
                <div className="mt-2 text-base font-semibold text-white">
                  {item.title}
                </div>
                <div className="mt-1">{item.desc}</div>
                <div className="mt-3 rounded-[10px] border border-white/10 bg-[#0B0C10] px-3 py-2 text-xs text-white/70 md:pointer-events-none md:absolute md:left-3 md:right-3 md:top-full md:z-10 md:mt-2 md:translate-y-2 md:opacity-0 md:transition md:duration-200 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  {item.tip}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
