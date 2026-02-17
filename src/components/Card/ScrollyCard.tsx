import { motion, useTransform, type useScroll } from "framer-motion";
import { useTheme } from "@/contexts/useTheme";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./Card";

export function ScrollyCard({
  step,
  progress,
  index,
  total,
}: {
  step: { title: string; desc: string; metric: string };
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}) {
  const { theme } = useTheme();
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(
    progress,
    [start, start + 0.15, end],
    [0.35, 1, 0.4],
  );
  const y = useTransform(progress, [start, start + 0.2, end], [28, 0, -18]);
  const scale = useTransform(
    progress,
    [start, start + 0.2, end],
    [0.98, 1, 0.98],
  );

  return (
    <motion.div style={{ opacity, y, scale }}>
      <Card
        className={`relative overflow-hidden backdrop-blur ${
          theme === "dark"
            ? "border-white/10 bg-white/5"
            : "border-[#bfd2ee] bg-gradient-to-br from-[#edf4ff] via-[#f8fbff] to-[#eaf3ff] shadow-[0_18px_48px_-26px_rgba(59,130,246,0.33)]"
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-0 ${
            theme === "dark"
              ? "bg-gradient-to-br from-transparent via-transparent to-white/10"
              : "bg-gradient-to-br from-white/20 via-transparent to-[#dbeafe]/60"
          }`}
        />
        <CardHeader>
          <CardTitle className="text-lg">{step.title}</CardTitle>
          <CardDescription
            className={theme === "dark" ? "text-white/70" : "text-[#24344f]/75"}
          >
            {step.desc}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className={`rounded-[12px] px-4 py-3 text-sm ${
              theme === "dark"
                ? "border border-white/10 bg-white/5 text-white/70"
                : "border border-[#bfd2ee] bg-white/65 text-[#24344f]/78"
            }`}
          >
            {step.metric}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
