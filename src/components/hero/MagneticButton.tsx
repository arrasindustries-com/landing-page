import type { ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function MagneticButton({
  children,
  variant,
  onClick,
}: {
  children: ReactNode;
  variant?: "default" | "outline";
  onClick?: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  return (
    <motion.div
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        x.set(dx * 0.12);
        y.set(dy * 0.12);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.98 }}
      className="w-full sm:w-auto"
    >
      <Button
        variant={variant === "outline" ? "outline" : "default"}
        onClick={onClick}
        className={[
          "w-full sm:w-auto",
          variant === "outline"
            ? "border-white/20 bg-white/5 text-white hover:bg-white/10"
            : "bg-[#3B82F6] text-white shadow-[0_0_28px_rgba(59,130,246,0.35)] hover:scale-[1.04] hover:bg-[#60A5FA] active:scale-[0.97]",
        ].join(" ")}
      >
        {children}
      </Button>
    </motion.div>
  );
}
