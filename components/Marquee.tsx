"use client";

import { motion, useReducedMotion } from "framer-motion";

const WORDS = [
  "ЛЕТО",
  "СОЛНЦЕ",
  "ВОДА",
  "БАССЕЙНЫ",
  "ОТДЫХ",
  "ДРАЙВ",
  "ЗАКАТ",
  "КАЙФ",
];

function Star() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className="mx-6 shrink-0" aria-hidden>
      <path
        d="M12 1.5c.4 4.8 1.7 6.1 6.5 6.5-4.8.4-6.1 1.7-6.5 6.5-.4-4.8-1.7-6.1-6.5-6.5 4.8-.4 6.1-1.7 6.5-6.5Z"
        fill="#0B2545"
      />
    </svg>
  );
}

export function Marquee() {
  const reduce = useReducedMotion();
  const loop = [...WORDS, ...WORDS];

  return (
    <div className="relative overflow-hidden border-y-4 border-ink bg-gold py-4">
      <motion.div
        className="flex w-max items-center"
        animate={reduce ? {} : { x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((w, i) => (
          <div key={i} className="flex items-center">
            <span className="font-display text-2xl font-black tracking-tight text-ink sm:text-4xl">
              {w}
            </span>
            <Star />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
