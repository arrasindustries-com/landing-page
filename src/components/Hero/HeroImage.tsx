import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/useTheme";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Card } from "../Card/Card";

export function HeroImage() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18 });
  const sy = useSpring(y, { stiffness: 120, damping: 18 });

  return (
    <motion.div
      className="relative"
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        x.set(dx * 18);
        y.set(dy * 18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ translateX: sx, translateY: sy }}
    >
      <motion.div
        animate={{ y: [0, -6, 0], rotateY: [0, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <Card className="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.35),transparent_45%)]" />

          <img
            src="/images/image.png"
            alt={t.hero.imageAlt}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-[420px] w-full object-cover md:h-[520px]"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-[#0F0F11]/40 via-transparent to-transparent" />

          <div
            className={`absolute bottom-4 left-4 right-4 rounded-[14px] p-4 backdrop-blur ${
              theme === "dark"
                ? "border border-white/15 bg-white/10"
                : "border border-[#c9daf3] bg-white/86 shadow-[0_12px_28px_-18px_rgba(59,130,246,0.35)]"
            }`}
          >
            <div
              className={`text-sm ${
                theme === "dark" ? "text-white/70" : "text-[#24344f]/80"
              }`}
            >
              {t.hero.quote2}
            </div>
          </div>
        </Card>
      </motion.div>

      {/* grana/noise per togliere l’effetto “piatto” */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-multiply [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E')]" />
    </motion.div>
  );
}
