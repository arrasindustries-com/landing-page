import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BlockchainScene } from "../Blockchain/BlockchainScene";
import { useTheme } from "@/contexts/useTheme";

export function InnovationSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
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
              <stop offset="0%" stopColor="#7A6648" stopOpacity="0" />
              <stop offset="50%" stopColor="#9A8566" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#A48F72" stopOpacity="0" />
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
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent)] via-[#8e7859] to-[var(--accent-soft)]">
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
          className={`relative overflow-hidden rounded-[14px] p-6 backdrop-blur ${
            theme === "dark"
              ? "border border-white/10 bg-white/5"
              : "border border-[#c5d5ec] bg-gradient-to-br from-[#dfeafb] via-[#e8effc] to-[#ece8f8] shadow-[0_22px_56px_-30px_rgba(99,102,241,0.2)]"
          }`}
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
                  <stop offset="0%" stopColor="#9A8566" />
                  <stop offset="100%" stopColor="#A48F72" />
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
                stroke="#9A8566"
                strokeWidth="3"
                opacity="0.6"
              />
              <line
                x1="85"
                y1="90"
                x2="70"
                y2="130"
                stroke="#A48F72"
                strokeWidth="3"
                opacity="0.6"
              />
              <line
                x1="140"
                y1="105"
                x2="110"
                y2="135"
                stroke="#9A8566"
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

            <div className="relative mt-7 min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[active].title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`rounded-[14px] p-5 ${
                    theme === "dark"
                      ? "border border-white/10 bg-white/5"
                      : "border border-[#cfdbef] bg-gradient-to-br from-[#eef5ff] via-[#f2f7ff] to-[#f3efff] shadow-[0_24px_64px_-34px_rgba(59,130,246,0.14)] ring-1 ring-white/72"
                  }`}
                >
                  <div
                    className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                      theme === "dark" ? "text-white/60" : "text-[#4a6387]"
                    }`}
                  >
                    {t.innovation.focus}
                  </div>
                  <div
                    className={`mt-2 text-xl font-semibold tracking-tight ${
                      theme === "dark" ? "" : "text-[#0F0F11]"
                    }`}
                  >
                    {slides[active].title}
                  </div>
                  <div
                    className={`mt-2 text-sm ${
                      theme === "dark" ? "text-white/70" : "text-[#2a3f60]/80"
                    }`}
                  >
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
          className={`relative overflow-hidden rounded-[14px] p-6 backdrop-blur ${
            theme === "dark"
              ? "border border-white/10 bg-white/5"
              : "border border-[#c5d5ec] bg-gradient-to-br from-[#dfeafb] via-[#e8effc] to-[#ece8f8] shadow-[0_22px_56px_-30px_rgba(99,102,241,0.2)]"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(96,165,250,0.25),transparent_55%),radial-gradient(circle_at_70%_10%,rgba(59,130,246,0.25),transparent_55%)]" />
          <div className="relative h-[280px]">
            <BlockchainScene />
          </div>
          <div
            className={`relative mt-4 text-sm ${
              theme === "dark" ? "text-white/70" : "text-[#1f314d]/80"
            }`}
          >
            {t.innovation.conceptual}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`mt-10 relative overflow-hidden rounded-[14px] p-6 backdrop-blur ${
          theme === "dark"
            ? "border border-white/10 bg-white/5"
            : "border border-[#c5d5ec] bg-gradient-to-br from-[#dfeafb] via-[#e8effc] to-[#ece8f8] shadow-[0_24px_64px_-30px_rgba(99,102,241,0.2)]"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(124,58,237,0.25),transparent_55%)]" />
        <div className="relative grid gap-6 md:grid-cols-[0.7fr_1.3fr] items-center">
          <div
            className={`rounded-[14px] p-4 ${
              theme === "dark"
                ? "border border-white/10 bg-white/5"
                : "border border-[#cfdbef] bg-gradient-to-br from-[#eef5ff] via-[#f2f7ff] to-[#f3efff] shadow-[0_20px_52px_-30px_rgba(59,130,246,0.14)]"
            }`}
          >
            <div
              className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                theme === "dark" ? "text-white/60" : "text-[#4a6387]"
              }`}
            >
              {t.innovation.digitalPayments}
            </div>
            <div
              className={`mt-2 text-xl font-semibold tracking-tight ${
                theme === "dark" ? "" : "text-[#0F0F11]"
              }`}
            >
              {t.innovation.checkoutTitle}
            </div>
            <p
              className={`mt-2 text-sm ${
                theme === "dark" ? "text-white/70" : "text-[#2a3f60]/80"
              }`}
            >
              {t.innovation.checkoutDesc}
            </p>
            <div className="mt-3 grid gap-2">
              {t.innovation.benefits.map((item) => (
                <div
                  key={item}
                  className={`flex items-start gap-2 rounded-[10px] px-3 py-2 text-xs ${
                    theme === "dark"
                      ? "border border-white/10 bg-white/5 text-white/75"
                      : "border border-[#cfdbef] bg-gradient-to-r from-[#eef5ff]/92 to-[#f1ecff]/92 text-[#1f314d]/82"
                  }`}
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div
              className={`mt-4 flex items-center gap-3 rounded-[12px] p-3 ${
                theme === "dark"
                  ? "border border-white/10 bg-[#0F0F11]"
                  : "border border-[#cfdbef] bg-gradient-to-r from-[#edf5ff] to-[#f1ecff]"
              }`}
            >
              <div
                className={`h-10 w-10 overflow-hidden rounded-[10px] ${
                  theme === "dark"
                    ? "border border-white/15 bg-white/5"
                    : "border border-[#d2def0] bg-white"
                }`}
              >
                <img
                  src="/metamask.png"
                  alt="MetaMask"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-white/70" : "text-[#1f314d]/82"
                }`}
              >
                Wallet: MetaMask
              </div>
            </div>
            <div
              className={`mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ${
                theme === "dark"
                  ? "border border-white/10 bg-white/5 text-white/70"
                  : "border border-[#cfdbef] bg-gradient-to-r from-[#edf5ff]/92 to-[#f1ecff]/92 text-[#1f314d]/82"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Crypto ready
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-[auto_1fr_1fr_1fr] items-center">
            <motion.div
              className={`hidden md:grid h-12 w-12 place-items-center rounded-full ${
                theme === "dark"
                  ? "border border-white/10 bg-white/5 text-white/70"
                  : "border border-[#cfdbef] bg-gradient-to-r from-[#edf5ff] to-[#f1ecff] text-[#243a5a]"
              }`}
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
                className={`group relative h-full rounded-[12px] p-4 text-sm ${
                  theme === "dark"
                    ? "border border-white/10 bg-white/5 text-white/70"
                    : "border border-[#cfdbef] bg-gradient-to-br from-[#eef5ff] via-[#f2f7ff] to-[#f3efff] text-[#1f314d]/82 shadow-[0_18px_46px_-28px_rgba(59,130,246,0.14)]"
                }`}
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
                <div
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    theme === "dark" ? "text-white/60" : "text-[#4a6387]"
                  }`}
                >
                  Step {idx + 1}
                </div>
                <div
                  className={`mt-2 text-base font-semibold ${
                    theme === "dark" ? "text-white" : "text-[#0F0F11]"
                  }`}
                >
                  {item.title}
                </div>
                <div className="mt-1">{item.desc}</div>
                <div
                  className={`mt-3 rounded-[10px] px-3 py-2 text-xs shadow-[0_10px_24px_-16px_rgba(59,130,246,0.28)] md:pointer-events-none md:absolute md:left-3 md:right-3 md:top-full md:z-10 md:mt-2 md:translate-y-2 md:opacity-0 md:transition md:duration-200 md:group-hover:translate-y-0 md:group-hover:opacity-100 ${
                    theme === "dark"
                      ? "border border-[var(--accent)]/40 bg-[#3e3223] text-[#F5F7FA]"
                      : "border border-[#cfdbef] bg-gradient-to-r from-[#edf5ff] to-[#f1ecff] text-[#1f314d]"
                  }`}
                >
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
