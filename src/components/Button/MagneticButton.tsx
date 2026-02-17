import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "./Button";
import { useIsMobile } from "@/lib/utils";

export function MagneticButton({
  children,
  variant,
  onClick,
}: {
  children: React.ReactNode;
  variant?: "default" | "outline";
  onClick?: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });
  const isMobile = useIsMobile();

  const buttonClass = [
    "w-full sm:w-auto",
    variant === "outline"
      ? "border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-strong)]"
      : "bg-[var(--accent)] text-white shadow-[0_12px_28px_-18px_rgba(47,94,168,0.45)] hover:scale-[1.02] hover:bg-[var(--accent-strong)] active:scale-[0.98]",
  ].join(" ");

  if (isMobile) {
    return (
      <Button
        variant={variant === "outline" ? "outline" : "default"}
        onClick={onClick}
        className={buttonClass}
      >
        {children}
      </Button>
    );
  }

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
        className={buttonClass}
      >
        {children}
      </Button>
    </motion.div>
  );
}
