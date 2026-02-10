import { motion } from "framer-motion";
import { CircleDollarSign, Shield, Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import TimelineSection from "@/components/sections/TimelineSection";
import TimelineFeature from "@/components/sections/TimelineFeature";
import { fadeUp } from "@/lib/motion";

export default function ImpactSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <motion.div {...fadeUp} className="flex flex-col gap-3">
        <Badge className="border-white/15 bg-white/5 text-white/80">
          Per realtà piccole, impatto grande
        </Badge>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Tecnologia che riduce caos e aumenta margine.
        </h2>
        <p className="max-w-2xl text-white/70">
          Niente “software su misura” generico: partiamo dai vostri flussi reali,
          misuriamo il problema, costruiamo una soluzione semplice da usare e
          facile da mantenere.
        </p>
      </motion.div>

      <TimelineSection>
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-black/10" />
        <TimelineFeature
          side="left"
          icon={<Timer className="h-5 w-5" />}
          title="Meno tempo perso"
          desc="Automazioni e dashboard per eliminare attività ripetitive e fogli sparsi."
          imageSrc="/images/process.jpg"
        />

        <TimelineFeature
          side="right"
          icon={<CircleDollarSign className="h-5 w-5" />}
          title="Più entrate"
          desc="Upsell, fidelizzazione e canali digitali per aumentare scontrino e ritorno cliente."
          imageSrc="/images/usecase.jpg"
        />

        <TimelineFeature
          side="left"
          icon={<Shield className="h-5 w-5" />}
          title="Controllo e sicurezza"
          desc="Accessi, ruoli, audit e backup: soluzioni solide, non prototipi fragili."
          imageSrc="/images/hero.jpg"
        />
      </TimelineSection>
    </section>
  );
}
