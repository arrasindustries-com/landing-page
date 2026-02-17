import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, item } from "@/types/types";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";
import { scrollToId } from "@/lib/utils";
import { Button } from "../Button/Button";
import { useTheme } from "@/contexts/useTheme";

export function ServiceHero({
  align,
  image,
  icon,
  title,
  subtitle,
  points,
  outcomes,
  detailLink,
  blurImageToRight = false,
}: {
  align: "left" | "right";
  image: string;
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  points: string[];
  outcomes: string[];
  detailLink?: string;
  blurImageToRight?: boolean;
}) {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isLeft = align === "left";
  const [panel, setPanel] = useState<"outcomes" | "plan">("outcomes");
  const copy = useMemo(
    () =>
      language === "it"
        ? {
            outcomes: "Risultati",
            nextSteps: "Prossimi passi",
            actionTitle: "Come partire",
            actionSubtitle:
              "Call breve, priorita condivise e rilascio del primo risultato.",
            steps: [
              "Call iniziale di 20 minuti",
              "Mappatura rapida del flusso",
              "Roadmap MVP con tempi realistici",
            ],
            cta: "Parliamone",
          }
        : {
            outcomes: "Outcomes",
            nextSteps: "Next steps",
            actionTitle: "How to start",
            actionSubtitle:
              "Short call, shared priorities, and first measurable release.",
            steps: [
              "20-minute kickoff call",
              "Quick workflow mapping",
              "MVP roadmap with realistic timeline",
            ],
            cta: "Let's talk",
          },
    [language],
  );

  return (
    <motion.div
      {...fadeUp}
      variants={item}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className={`relative overflow-hidden backdrop-blur transition hover:shadow-[0_30px_80px_-50px_rgba(59,130,246,0.6)] ${
          theme === "dark"
            ? "border-white/10 bg-[#101115]/90"
            : "border-[#b9cfef] bg-gradient-to-br from-[#eaf3ff] via-[#f8fbff] to-[#e7f1ff] shadow-[0_24px_64px_-30px_rgba(59,130,246,0.35)]"
        }`}
      >
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="absolute -left-24 top-8 h-40 w-40 rounded-full bg-[#60A5FA]/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-40 w-40 rounded-full bg-[#7C3AED]/20 blur-3xl" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute -inset-y-6 -left-1/3 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-xl"
          animate={{ x: ["-80%", "260%"] }}
          transition={{
            duration: 2.2,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 3.5,
          }}
        />
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className={[
              "h-full w-full object-cover",
              theme === "dark"
                ? "opacity-45 saturate-[1.05] grayscale-[10%]"
                : "opacity-62 saturate-[1.08] contrast-105",
            ].join(" ")}
          />
          {blurImageToRight ? (
            <img
              src={image}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className={[
                "pointer-events-none absolute inset-0 h-full w-full object-cover blur-md",
                theme === "dark" ? "opacity-35" : "opacity-42",
                "[mask-image:linear-gradient(to_right,transparent_36%,black_78%)]",
                "[-webkit-mask-image:linear-gradient(to_right,transparent_36%,black_78%)]",
              ].join(" ")}
            />
          ) : null}
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? isLeft
                  ? "bg-gradient-to-r from-[#0F0F11] via-[#0F0F11]/85 to-transparent"
                  : "bg-gradient-to-l from-[#0F0F11] via-[#0F0F11]/88 to-transparent"
                : isLeft
                  ? "bg-gradient-to-r from-[#eaf3ff] via-[#eaf3ff]/82 to-transparent"
                  : "bg-gradient-to-l from-[#eaf3ff] via-[#eaf3ff]/90 to-transparent"
            }`}
          />
          {blurImageToRight ? (
            <div
              className={`absolute inset-0 ${
                theme === "dark"
                  ? "bg-gradient-to-l from-[#0F0F11]/92 via-[#0F0F11]/72 to-transparent"
                  : "bg-gradient-to-l from-[#eaf3ff]/96 via-[#eaf3ff]/78 to-transparent"
              }`}
            />
          ) : null}
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-t from-black/40 via-transparent to-transparent"
                : "bg-gradient-to-t from-[#dce9ff]/45 via-transparent to-transparent"
            }`}
          />
        </div>

        <div
          className={[
            "relative grid gap-6 p-6 md:p-8",
            "md:grid-cols-[1.2fr_0.8fr]",
            isLeft ? "" : "md:grid-cols-[0.8fr_1.2fr]",
          ].join(" ")}
        >
          <div className={isLeft ? "" : "md:order-2"}>
            <div className="flex items-center gap-3">
              {icon ? (
                <motion.div
                  className={`grid h-11 w-11 place-items-center rounded-[12px] shadow-[0_0_20px_rgba(59,130,246,0.25)] ${
                    theme === "dark"
                      ? "border border-white/15 bg-white/5 text-white"
                      : "border border-[#b8cdf0] bg-white/75 text-[#1b4ea3]"
                  }`}
                  whileHover={{ rotate: 6, scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                >
                  {icon}
                </motion.div>
              ) : null}
              <div>
                <div
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    theme === "dark" ? "text-white/60" : "text-[#1f3f73]/75"
                  }`}
                >
                  {title}
                </div>
                <div className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
                  {subtitle}
                </div>
              </div>
            </div>

            <ul
              className={`mt-5 space-y-2 text-sm ${
                theme === "dark" ? "text-white/75" : "text-[#223652]/80"
              }`}
            >
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span
                    className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                      theme === "dark" ? "bg-white/60" : "bg-[#3B82F6]/75"
                    }`}
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            {detailLink && (
              <Link
                to={detailLink}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#3B82F6] transition-colors hover:text-[#60A5FA]"
              >
                {language === "it" ? "Scopri di piu" : "Learn more"}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>

          <div
            className={[
              theme === "dark"
                ? "rounded-[14px] border border-white/10 bg-white/5 p-4 text-sm text-white/70"
                : "rounded-[14px] border border-[#bfd2ee] bg-white/70 p-4 text-sm text-[#24344f]/78",
              "backdrop-blur",
            ].join(" ")}
          >
            <div className="flex items-center justify-between gap-2">
              <div
                className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                  theme === "dark" ? "text-white/60" : "text-[#1f3f73]/75"
                }`}
              >
                {t.services.result}
              </div>
              <div
                className={`inline-flex rounded-[10px] p-1 ${
                  theme === "dark"
                    ? "border border-white/10 bg-[#0F0F11]/70"
                    : "border border-[#b6cdef] bg-white/75"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setPanel("outcomes")}
                  className={[
                    "rounded-[8px] px-2.5 py-1 text-[11px] font-semibold transition",
                    panel === "outcomes"
                      ? "bg-[#3B82F6] text-white"
                      : theme === "dark"
                        ? "text-white/70 hover:text-white"
                        : "text-[#2d3d58]/75 hover:text-[#0F0F11]",
                  ].join(" ")}
                >
                  {copy.outcomes}
                </button>
                <button
                  type="button"
                  onClick={() => setPanel("plan")}
                  className={[
                    "rounded-[8px] px-2.5 py-1 text-[11px] font-semibold transition",
                    panel === "plan"
                      ? "bg-[#3B82F6] text-white"
                      : theme === "dark"
                        ? "text-white/70 hover:text-white"
                        : "text-[#2d3d58]/75 hover:text-[#0F0F11]",
                  ].join(" ")}
                >
                  {copy.nextSteps}
                </button>
              </div>
            </div>

            {panel === "outcomes" ? (
              <div className="mt-2 space-y-2">
                {outcomes.map((o) => (
                  <div
                    key={o}
                    className={`rounded-[12px] px-3 py-2 ${
                      theme === "dark"
                        ? "border border-white/10 bg-white/5"
                        : "border border-[#bfd2ee] bg-white/70"
                    }`}
                  >
                    {o}
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-2 space-y-3">
                <div
                  className={`rounded-[12px] px-3 py-2 ${
                    theme === "dark"
                      ? "border border-white/10 bg-white/5"
                      : "border border-[#bfd2ee] bg-white/70"
                  }`}
                >
                  <div
                    className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                      theme === "dark" ? "text-white/60" : "text-[#1f3f73]/75"
                    }`}
                  >
                    {copy.actionTitle}
                  </div>
                  <div className="mt-1">{copy.actionSubtitle}</div>
                </div>
                <ul className="space-y-2">
                  {copy.steps.map((step) => (
                    <li
                      key={step}
                      className={`rounded-[12px] px-3 py-2 ${
                        theme === "dark"
                          ? "border border-white/10 bg-white/5"
                          : "border border-[#bfd2ee] bg-white/70"
                      }`}
                    >
                      {step}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => scrollToId("contatto")}
                  className="w-full bg-[#3B82F6] text-white hover:bg-[#60A5FA]"
                >
                  {copy.cta} <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
