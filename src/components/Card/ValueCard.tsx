import { motion } from "framer-motion";

export function ValueCard({
  value,
  index,
}: {
  value: { title: string; desc: string; image: string };
  index: number;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-[14px] border border-white/10 bg-white/5 backdrop-blur"
      variants={{
        hidden: { opacity: 0, y: -720, scale: 0.9, rotate: -4 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          scaleX: [1, 1.16, 1],
          scaleY: [1, 0.78, 1],
          borderRadius: [
            "14px",
            "44px 26px 42px 28px / 30px 44px 24px 36px",
            "14px",
          ],
          transition: {
            y: {
              type: "spring",
              stiffness: 220,
              damping: 12,
              bounce: 0.7,
            },
            rotate: { type: "spring", stiffness: 180, damping: 12 },
            opacity: { duration: 0.35 },
            scale: { type: "spring", stiffness: 200, damping: 12 },
            scaleX: {
              delay: 0.25 + index * 0.32,
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            },
            scaleY: {
              delay: 0.25 + index * 0.32,
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            },
            borderRadius: {
              delay: 0.25 + index * 0.32,
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        },
      }}
      onPointerMove={(e) => {
        const rect = (
          e.currentTarget as HTMLDivElement
        ).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        e.currentTarget.style.setProperty("--mx", `${x}%`);
        e.currentTarget.style.setProperty("--my", `${y}%`);
      }}
      onPointerLeave={(e) => {
        e.currentTarget.style.setProperty("--mx", "50%");
        e.currentTarget.style.setProperty("--my", "50%");
      }}
    >
      <div className="absolute inset-0">
        <img
          src={value.image}
          alt={value.title}
          loading="lazy"
          decoding="async"
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
        <div
          className="text-lg font-semibold ripple-text"
          data-text={value.title}
        >
          {value.title}
        </div>
        <div
          className="mt-2 text-sm text-white/70 ripple-text"
          data-text={value.desc}
        >
          {value.desc}
        </div>
        <div className="mt-6 h-px w-10 bg-gradient-to-r from-[#3B82F6] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>

      <div className="absolute inset-0 transition duration-300 group-hover:-translate-y-1" />
    </motion.div>
  );
}
