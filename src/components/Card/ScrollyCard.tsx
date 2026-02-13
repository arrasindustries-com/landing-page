import { motion, useTransform, type useScroll } from "framer-motion";
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
      <Card className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/10" />
        <CardHeader>
          <CardTitle className="text-lg">{step.title}</CardTitle>
          <CardDescription className="text-white/70">
            {step.desc}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-[12px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
            {step.metric}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
