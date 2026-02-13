import { useEffect } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";

type Options = { start?: number; end?: number };

export function useElementScrollProgressEl(
  el: HTMLElement | null,
  options: Options = {}
): MotionValue<number> {
  const progress = useMotionValue(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!el) return;

    const startRatio = options.start ?? 0.85;
    const endRatio = options.end ?? 0.2;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      const startPx = viewportH * startRatio;
      const endPx = viewportH * endRatio;
      const total = rect.height + (startPx - endPx);
      const current = startPx - rect.top;
      const raw = total === 0 ? 0 : current / total;
      progress.set(Math.min(1, Math.max(0, raw)));
    };

    update();

    const onScroll = () => update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    ro?.observe(el);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      ro?.disconnect();
    };
  }, [el, progress, options.start, options.end]);

  return progress;
}
