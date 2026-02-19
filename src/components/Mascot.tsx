import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export type Pose =
  | "idle"
  | "think"
  | "think2"
  | "point"
  | "point2"
  | "celebrate";

const POSE_SRC: Record<Pose, string> = {
  idle: "/mascot/idle.png",
  think: "/mascot/think.png",
  think2: "/mascot/think2.png",
  point: "/mascot/point.png",
  point2: "/mascot/point2.png",
  celebrate: "/mascot/celebrate.png",
};

const POSE_ORDER: Pose[] = [
  "idle",
  "think",
  "think2",
  "point",
  "point2",
  "celebrate",
];

export function Mascot({
  pose = "idle",
  size = 110,
}: {
  pose?: Pose;
  size?: number;
}) {
  const [localPose, setLocalPose] = useState<Pose>(pose);

  // blink ogni tot (leggermente random per non sembrare robotico)

  const src = POSE_SRC[localPose];

  useEffect(() => {
    setLocalPose(pose);
  }, [pose]);

  const nextPose = () => {
    setLocalPose((p) => {
      const i = POSE_ORDER.indexOf(p);
      return POSE_ORDER[(i + 1) % POSE_ORDER.length];
    });
  };

  return (
    <motion.button
      type="button"
      className="pointer-events-auto fixed right-6 bottom-6 z-[9999] cursor-pointer rounded-2xl"
      style={{ background: "transparent", border: "none", padding: 0 }}
      aria-label="Mascot"
      onClick={nextPose}
    >
      {/* “vivacità” base */}
      <motion.div
        className="relative"
        style={{ width: size, height: size }}
        animate={{ y: [0, -6, 0], rotate: [0, -1.2, 0, 1.2, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        whileTap={{ scale: 0.92, rotate: 2 }}
      >
        <img
          src={src}
          alt={`mascot ${pose}`}
          className="h-full w-full select-none object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.45)]"
          draggable={false}
        />

        {/* blink overlay (se la faccia è circa in alto) */}
      </motion.div>
    </motion.button>
  );
}
