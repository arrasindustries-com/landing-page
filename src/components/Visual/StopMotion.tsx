import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function StopMotion({
  frames,
  alt,
  className,
  fps = 220,
  float = true,
}: {
  frames: string[];
  alt: string;
  className?: string;
  fps?: number;
  float?: boolean;
}) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [ready, setReady] = useState(frames.length < 2);

  useEffect(() => {
    if (frames.length < 2) { setReady(true); return; }
    setReady(false);
    let cancelled = false;
    let loaded = 0;
    const imgs = frames.map((src) => {
      const img = new Image();
      const onDone = () => { loaded += 1; if (!cancelled && loaded === frames.length) setReady(true); };
      img.onload = onDone;
      img.onerror = onDone;
      img.src = src;
      return img;
    });
    return () => { cancelled = true; imgs.length = 0; };
  }, [frames]);

  useEffect(() => {
    if (!ready || frames.length < 2) return;
    const id = window.setInterval(() => setFrameIndex((i) => (i + 1) % frames.length), fps);
    return () => window.clearInterval(id);
  }, [ready, frames, fps]);

  const frames_ui = ready
    ? frames.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === frameIndex ? alt : ""}
          aria-hidden={i !== frameIndex}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          className={[
            "absolute inset-0 h-full w-full object-cover transition-none",
            i === frameIndex ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
      ))
    : (
        <img
          src={frames[0]}
          alt={alt}
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      );

  const containerClass = `relative ${className ?? ""}`;

  if (float) {
    return (
      <motion.div
        className={containerClass}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        {frames_ui}
      </motion.div>
    );
  }

  return <div className={containerClass}>{frames_ui}</div>;
}
