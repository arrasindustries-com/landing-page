import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp } from "@/types/types";
import { motion } from "framer-motion";
import { ValueCard } from "../Card/ValueCard";

export function ValuesSection() {
  const { t } = useLanguage();
  const images = [
    "/images/hero.jpg",
    "/images/process.jpg",
    "/images/usecase.jpg",
  ];
  const values = t.values.values.map((v, i) => ({
    title: v.title,
    desc: v.desc,
    image: images[i],
  }));

  return (
    <section className="mx-auto max-w-6xl px-4 pt-4 pb-16 md:pt-8">
      <motion.div {...fadeUp} className="text-center">
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
          {t.values.title}
        </h2>
        <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent" />
      </motion.div>

      <motion.div
        className="mt-10 grid gap-4 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.12, delayChildren: 0.05 },
          },
        }}
      >
        {values.map((value, index) => (
          <ValueCard key={value.title} value={value} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
