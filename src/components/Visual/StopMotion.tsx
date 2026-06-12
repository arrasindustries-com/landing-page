import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function StopMotion({
  frames,
  alt,
  className,
  fps = 1800,
  float = true,
  objectPosition = "center",
}: {
  frames: string[];
  alt: string;
  className?: string;
  fps?: number;
  float?: boolean;
  objectPosition?: string;
}) {
  const [frameIndex, setFrameIndex] = useState(0);
  const frameKey = frames.join("\n");
  const hasMultipleFrames = frames.length > 1;
  const [loadedFrameKey, setLoadedFrameKey] = useState(
    hasMultipleFrames ? "" : frameKey,
  );
  const shouldReduceMotion = useReducedMotion();
  const ready = !hasMultipleFrames || loadedFrameKey === frameKey;

  useEffect(() => {
    if (!hasMultipleFrames) return;

    let cancelled = false;
    let loaded = 0;
    const imgs = frames.map((src) => {
      const img = new Image();
      const onDone = () => {
        loaded += 1;
        if (!cancelled && loaded === frames.length) {
          setLoadedFrameKey(frameKey);
        }
      };
      img.onload = onDone;
      img.onerror = onDone;
      img.src = src;
      return img;
    });
    return () => {
      cancelled = true;
      imgs.length = 0;
    };
  }, [frames, frameKey, hasMultipleFrames]);

  useEffect(() => {
    if (!ready || !hasMultipleFrames || shouldReduceMotion) return;
    const frameDuration = Math.max(fps, 900);
    const id = window.setInterval(
      () => setFrameIndex((i) => (i + 1) % frames.length),
      frameDuration,
    );
    return () => window.clearInterval(id);
  }, [ready, hasMultipleFrames, frames, fps, shouldReduceMotion]);

  const imgClass =
    "absolute inset-0 h-full w-full object-cover will-change-[opacity]";
  const imgStyle = { objectPosition };
  const activeFrameIndex = shouldReduceMotion
    ? 0
    : Math.min(frameIndex, frames.length - 1);
  const fadeDuration = Math.min(Math.max(fps * 0.45, 520), 920) / 1000;

  const framesUI = ready ? (
    frames.map((src, i) => (
      <motion.img
        key={src}
        src={src}
        alt={i === activeFrameIndex ? alt : ""}
        aria-hidden={i !== activeFrameIndex}
        loading={i === 0 ? "eager" : "lazy"}
        decoding="async"
        style={imgStyle}
        className={imgClass}
        initial={false}
        animate={{ opacity: i === activeFrameIndex ? 1 : 0 }}
        transition={{
          opacity: {
            duration: shouldReduceMotion ? 0 : fadeDuration,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
      />
    ))
  ) : (
    <img
      src={frames[0]}
      alt={alt}
      loading="eager"
      decoding="async"
      style={imgStyle}
      className={`${imgClass} opacity-100`}
    />
  );

  const containerClass = `relative ${className ?? ""}`;

  if (float) {
    return (
      <motion.div
        className={containerClass}
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {framesUI}
      </motion.div>
    );
  }

  return <div className={containerClass}>{framesUI}</div>;
}
