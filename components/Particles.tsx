"use client";

import { motion, useReducedMotion } from "framer-motion";

// Deterministic positions → no hydration mismatch, no Math.random.
const DOTS = [
  { left: "8%", top: "22%", size: 10, dur: 7, delay: 0, color: "#FFC531" },
  { left: "18%", top: "70%", size: 6, dur: 9, delay: 1.2, color: "#fff" },
  { left: "30%", top: "35%", size: 14, dur: 8, delay: 0.5, color: "#FF4D6D" },
  { left: "42%", top: "80%", size: 8, dur: 10, delay: 2, color: "#06B6D4" },
  { left: "55%", top: "18%", size: 7, dur: 7.5, delay: 0.8, color: "#fff" },
  { left: "66%", top: "60%", size: 12, dur: 9.5, delay: 1.6, color: "#FFC531" },
  { left: "78%", top: "30%", size: 9, dur: 8.5, delay: 0.3, color: "#06B6D4" },
  { left: "88%", top: "72%", size: 11, dur: 7, delay: 2.4, color: "#FF7A18" },
  { left: "94%", top: "44%", size: 6, dur: 10, delay: 1, color: "#fff" },
  { left: "12%", top: "50%", size: 8, dur: 9, delay: 1.9, color: "#FF4D6D" },
];

export function Particles({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {DOTS.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            background: d.color,
            boxShadow: `0 0 ${d.size}px ${d.color}`,
          }}
          animate={{
            y: [0, -26, 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [0.8, 1.15, 0.8],
          }}
          transition={{
            duration: d.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: d.delay,
          }}
        />
      ))}
    </div>
  );
}
