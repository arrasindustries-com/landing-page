import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp, item } from "@/types/types";
import { motion } from "framer-motion";
import { Card } from "../Card/Card";

export function ServiceHero({
  align,
  image,
  icon,
  title,
  subtitle,
  points,
  outcomes,
}: {
  align: "left" | "right";
  image: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  points: string[];
  outcomes: string[];
}) {
  const { t } = useLanguage();
  const isLeft = align === "left";

  return (
    <motion.div
      {...fadeUp}
      variants={item}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="relative overflow-hidden border-white/10 bg-[#101115]/90 backdrop-blur transition hover:shadow-[0_30px_80px_-50px_rgba(59,130,246,0.6)]">
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
            alt=""
            className={[
              "h-full w-full object-cover",
              "opacity-45 saturate-[1.05] grayscale-[10%]",
            ].join(" ")}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F11] via-[#0F0F11]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
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
              <motion.div
                className="grid h-11 w-11 place-items-center rounded-[12px] border border-white/15 bg-white/5 text-white shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                whileHover={{ rotate: 6, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
              >
                {icon}
              </motion.div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  {title}
                </div>
                <div className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
                  {subtitle}
                </div>
              </div>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-white/75">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={[
              "rounded-[14px] border border-white/10 bg-white/5 p-4 text-sm text-white/70",
              "backdrop-blur",
            ].join(" ")}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {t.services.result}
            </div>
            <div className="mt-2 space-y-2">
              {outcomes.map((o) => (
                <div
                  key={o}
                  className="rounded-[12px] border border-white/10 bg-white/5 px-3 py-2"
                >
                  {o}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
