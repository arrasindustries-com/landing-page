import { motion } from "framer-motion";
import ValueCard from "@/components/sections/ValueCard";
import { fadeUp } from "@/lib/motion";

export default function ValuesSection() {
  const values = [
    {
      title: "Chiarezza",
      desc: "Processi semplici, misure precise, zero fumo.",
      image: "/images/hero.jpg",
    },
    {
      title: "Affidabilita",
      desc: "Ruoli, backup, logging: il gestionale regge davvero.",
      image: "/images/process.jpg",
    },
    {
      title: "Velocita",
      desc: "MVP rapido, iterazioni brevi, valore subito visibile.",
      image: "/images/usecase.jpg",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <motion.div {...fadeUp} className="text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          Chi siamo
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
          Un team tecnico, con un’estetica premium.
        </h2>
        <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent" />
      </motion.div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {values.map((value, index) => (
          <ValueCard key={value.title} value={value} index={index} />
        ))}
      </div>
    </section>
  );
}
