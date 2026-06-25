"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Drop = { dx: number; dy: number; size: number; color: string; dur: number };
type Burst = { id: number; x: number; y: number; drops: Drop[] };

const COLORS = ["#06B6D4", "#0EA5E9", "#7FE3F5", "#FFFFFF", "#FFC531"];

let counter = 0;

/**
 * Глобальный слой брызг воды. При нажатии на любой элемент с атрибутом
 * data-splash из точки клика разлетается весёлый фонтан капель + волна-кольцо.
 * Слой не перехватывает клики (pointer-events: none).
 */
export function SplashLayer() {
  const reduce = useReducedMotion();
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    if (reduce) return;
    const onDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || !target.closest("[data-splash]")) return;

      const count = 14;
      const drops: Drop[] = Array.from({ length: count }, (_, i) => {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const dist = 40 + Math.random() * 75;
        return {
          dx: Math.cos(angle) * dist,
          dy: Math.sin(angle) * dist - 12, // лёгкий подброс вверх
          size: 7 + Math.random() * 13,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          dur: 0.6 + Math.random() * 0.3,
        };
      });

      const id = ++counter;
      setBursts((b) => [...b, { id, x: e.clientX, y: e.clientY, drops }]);
      window.setTimeout(
        () => setBursts((b) => b.filter((x) => x.id !== id)),
        1100
      );
    };

    window.addEventListener("pointerdown", onDown);
    return () => window.removeEventListener("pointerdown", onDown);
  }, [reduce]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden>
      <AnimatePresence>
        {bursts.map((burst) => (
          <div
            key={burst.id}
            className="absolute"
            style={{ left: burst.x, top: burst.y }}
          >
            {/* Волна-кольцо */}
            <motion.span
              className="absolute rounded-full border-2"
              style={{
                borderColor: "#7FE3F5",
                left: 0,
                top: 0,
                translateX: "-50%",
                translateY: "-50%",
              }}
              initial={{ width: 4, height: 4, opacity: 0.7 }}
              animate={{ width: 130, height: 130, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            {/* Капли */}
            {burst.drops.map((d, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full"
                style={{
                  width: d.size,
                  height: d.size,
                  marginLeft: -d.size / 2,
                  marginTop: -d.size / 2,
                  background: d.color,
                  boxShadow: `0 0 6px ${d.color}`,
                }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: d.dx,
                  y: [0, d.dy, d.dy + 34],
                  opacity: [1, 1, 0],
                  scale: [1, 0.85, 0.2],
                }}
                transition={{
                  duration: d.dur,
                  ease: [0.2, 0.8, 0.3, 1],
                  times: [0, 0.55, 1],
                }}
              />
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
