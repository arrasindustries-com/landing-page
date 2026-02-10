import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bolt, CircleDollarSign, LineChart, MessageSquare, Shield } from "lucide-react";
import Marquee from "react-fast-marquee";
import HeroImage from "@/components/hero/HeroImage";
import MagneticButton from "@/components/hero/MagneticButton";
import { scrollToId } from "@/lib/actions";

export default function Hero() {
  const words = useMemo(
    () => ["veloci", "chiari", "affidabili", "misurabili"],
    [],
  );
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 md:pt-20 min-h-[90vh]">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.02em] md:text-7xl">
            Gestionali su misura per locali e piccole attivita.
            <br />
            Risultati{" "}
            <span className="relative inline-block">
              <motion.span
                key={words[idx]}
                initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                transition={{ duration: 0.45 }}
                className="inline-block rounded-[12px] bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#A78BFA] px-3 py-1 text-white shadow-[0_0_30px_rgba(59,130,246,0.45)]"
              >
                {words[idx]}
              </motion.span>
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-white/80">
            Meno caos operativo, piu controllo. Partiamo dai flussi reali della
            tua attività e costruiamo un gestionale che il tuo team utilizza
            subito, senza formazione infinita.
          </p>

          <div className="mt-7 flex flex-col gap-2 sm:flex-row">
            <MagneticButton onClick={() => scrollToId("contatto")}>
              Richiedi una call <ArrowRight className="h-4 w-4" />
            </MagneticButton>

            <MagneticButton
              variant="outline"
              onClick={() => scrollToId("innovazione")}
            >
              Scopri l’innovazione
            </MagneticButton>
          </div>

          <div className="mt-8 rounded-[14px] border border-white/10 bg-white/5 p-3 backdrop-blur">
            <Marquee gradient={false} speed={35}>
              <div className="flex items-center gap-6 pr-10 text-xs text-white/70">
                <span className="inline-flex items-center gap-2">
                  <Bolt className="h-4 w-4" /> MVP in 1–3 settimane
                </span>
                <span className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4" /> Ruoli, log, backup
                </span>
                <span className="inline-flex items-center gap-2">
                  <LineChart className="h-4 w-4" /> KPI utili
                </span>
                <span className="inline-flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" /> WhatsApp/Email
                </span>
                <span className="inline-flex items-center gap-2">
                  <CircleDollarSign className="h-4 w-4" /> ROI prima della fuffa
                </span>
              </div>
            </Marquee>
          </div>
        </motion.div>

        <HeroImage />
      </div>
    </section>
  );
}
