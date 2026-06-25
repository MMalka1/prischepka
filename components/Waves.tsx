"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Layered, horizontally-drifting SVG waves.
 * Two stacked paths animate their x position out of phase for a living sea.
 */
export function Waves({
  className = "",
  flip = false,
  colorTop = "#06B6D4",
  colorBottom = "#0EA5E9",
}: {
  className?: string;
  flip?: boolean;
  colorTop?: string;
  colorBottom?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${
        flip ? "rotate-180" : ""
      } ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="h-[70px] w-[200%] sm:h-[110px]"
      >
        <motion.path
          fill={colorBottom}
          fillOpacity="0.55"
          d="M0,64 C180,110 360,20 540,52 C720,84 900,120 1080,84 C1260,48 1350,40 1440,60 L1440,140 L0,140 Z M1440,64 C1620,110 1800,20 1980,52 C2160,84 2340,120 2520,84 C2700,48 2790,40 2880,60 L2880,140 L1440,140 Z"
          animate={reduce ? {} : { x: [0, -1440] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          fill={colorTop}
          d="M0,84 C160,52 340,116 520,92 C700,68 880,36 1080,68 C1260,96 1360,104 1440,88 L1440,140 L0,140 Z M1440,84 C1600,52 1780,116 1960,92 C2140,68 2320,36 2520,68 C2700,96 2800,104 2880,88 L2880,140 L1440,140 Z"
          animate={reduce ? {} : { x: [0, -1440] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}
