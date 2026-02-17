import { useIsMobile } from "@/lib/utils";
import { motion } from "framer-motion";
import { Card } from "../Card/Card";
import { useTheme } from "@/contexts/useTheme";

export function TimelineFeature({
  side,
  icon,
  title,
  desc,
  imageSrc,
}: {
  side: "left" | "right";
  icon: React.ReactNode;
  title: string;
  desc: string;
  imageSrc: string;
}) {
  const { theme } = useTheme();
  const isLeft = side === "left";
  const isMobile = useIsMobile();

  // animazione MOLTO più evidente: parte fuori schermo
  const fromX = isMobile ? 0 : isLeft ? -520 : 520;
  const initialMotion = isMobile
    ? {
        opacity: 1,
        x: 0,
        rotate: 0,
        filter: "blur(0px)",
      }
    : {
        opacity: 0,
        x: fromX,
        rotate: isLeft ? -4 : 4,
        filter: "blur(2px)",
      };
  const inViewMotion = {
    opacity: 1,
    x: 0,
    rotate: 0,
    filter: "blur(0px)",
  };

  return (
    <div className="relative py-6">
      {/* linea centrale quasi impercettibile 
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />*/}

      {/* pallino sul centro */}
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full md:block ${
          theme === "dark" ? "bg-white/40" : "bg-[var(--accent)]/45"
        }`}
      />

      <motion.div
        whileInView={inViewMotion}
        initial={initialMotion}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }} // lenta e visibile
        className={[
          "relative flex w-full justify-center px-2 sm:px-3",
          isLeft ? "md:justify-start md:pr-16" : "md:justify-end md:pl-16",
        ].join(" ")}
      >
        {/* card non enorme: max width limitato e dimensionata sul contenuto */}
        <motion.div
          whileInView={{
            scale: [0.98, 1.03, 1],
            boxShadow: [
              "0 10px 30px -20px rgba(0,0,0,0.35)",
              "0 20px 60px -28px rgba(0,0,0,0.45)",
              "0 12px 36px -24px rgba(0,0,0,0.35)",
            ],
          }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.5 }}
          className="w-full max-w-[520px] md:w-[min(520px,calc(100%-2rem))]"
        >
          <Card
            className={[
              "relative overflow-hidden",
              theme === "dark"
                ? "border-white/10 bg-white/5 backdrop-blur"
                : "border-[var(--border)] bg-gradient-to-br from-[#f7f1e8] via-[#fffaf2] to-[#efe4d4] shadow-[0_18px_50px_-30px_rgba(54,43,28,0.24)]",
              "transition-transform duration-300 will-change-transform hover:-translate-y-1",
            ].join(" ")}
          >
            {/* soft gradient */}
            <div
              className={`pointer-events-none absolute inset-0 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-transparent via-transparent to-white/10"
                  : "bg-gradient-to-br from-white/20 via-transparent to-[#e8dcc9]/70"
              }`}
            />

            {/* glow pulse */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 0.7, scale: 1.05 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--accent)]/20 blur-3xl"
            />

            {/* subtle shine */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-[var(--accent-soft)]/24 blur-2xl opacity-40" />

            {/* noise */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-multiply [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E')]" />

            <div className="relative overflow-hidden rounded-2xl">
              {/* ghost image, molto poco invasiva */}
              <img
                src={imageSrc}
                alt={title}
                loading="lazy"
                decoding="async"
                className={[
                  "pointer-events-none absolute right-0 top-0 hidden h-full w-[48%] object-cover md:block",
                  theme === "dark"
                    ? "opacity-[0.12] saturate-0"
                    : "opacity-[0.34] saturate-[1.05] contrast-105",
                ].join(" ")}
              />
              <div
                className={`pointer-events-none absolute inset-0 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#0F0F11] via-[#0F0F11]/85 to-transparent"
                    : "bg-gradient-to-r from-[#f7f1e8] via-[#f7f1e8]/90 to-transparent"
                }`}
              />

              <div className="relative p-5">
                <div className="flex items-start gap-3">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0.6 }}
                    whileInView={{ scale: [0.9, 1.15, 1], opacity: 1 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-[12px] ${
                      theme === "dark"
                        ? "border border-white/10 bg-white/5"
                        : "border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--accent)]"
                    }`}
                  >
                    {icon}
                  </motion.div>

                  <div>
                    <div className="text-base font-semibold tracking-tight">
                      {title}
                    </div>
                    <div
                      className={`mt-1 text-sm ${
                        theme === "dark" ? "text-white/70" : "text-[var(--muted)]"
                      }`}
                    >
                      {desc}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
