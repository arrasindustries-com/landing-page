import { motion } from "framer-motion";

export default function ValueCard({
  value,
  index,
}: {
  value: { title: string; desc: string; image: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5 backdrop-blur"
    >
      <div className="absolute inset-0">
        <img
          src={value.image}
          alt=""
          className="h-full w-full object-cover grayscale opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] via-[#0F0F11]/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_50%)]" />
      </div>

      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "120%" }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-white/40 to-transparent"
      />

      <div className="relative p-6">
        <div className="text-lg font-semibold">{value.title}</div>
        <div className="mt-2 text-sm text-white/70">{value.desc}</div>
        <div className="mt-6 h-px w-10 bg-gradient-to-r from-[#3B82F6] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>

      <div className="absolute inset-0 transition duration-300 group-hover:-translate-y-1" />
    </motion.div>
  );
}
