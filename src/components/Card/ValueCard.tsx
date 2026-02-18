import { motion } from "framer-motion";
import { useTheme } from "@/contexts/useTheme";

export function ValueCard({
  value,
}: {
  value: { title: string; desc: string; image: string };
}) {
  const { theme } = useTheme();
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-[14px] backdrop-blur ${
        theme === "dark"
          ? "border border-white/10 bg-white/5"
          : "border border-[#bfd2ee] bg-gradient-to-br from-[#edf4ff] via-[#f8fbff] to-[#eaf3ff] shadow-[0_22px_56px_-30px_rgba(59,130,246,0.35)]"
      }`}
      variants={{
        hidden: { opacity: 0, y: 32 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
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
          className={`h-full w-full object-cover ${
            theme === "dark"
              ? "grayscale opacity-50"
              : "opacity-45 saturate-[1.02] contrast-105"
          }`}
        />
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-gradient-to-t from-[#0F0F11] via-[#0F0F11]/70 to-transparent"
              : "bg-gradient-to-t from-[#dfeeff]/98 via-[#e9f3ff]/86 to-[#edf4ff]/58"
          }`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_50%)]" />
      </div>

      <div className="relative p-6">
        <div
          className="relative text-lg font-semibold ripple-text"
          data-text={value.title}
        >
          {value.title}
        </div>
        <div
          className={`relative mt-2 text-sm ripple-text ${
            theme === "dark" ? "text-white/70" : "text-[#24344f]/80"
          }`}
          data-text={value.desc}
        >
          {value.desc}
        </div>
        <div className="mt-6 h-px w-10 bg-gradient-to-r from-[#3B82F6] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}
