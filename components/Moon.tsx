"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Милая луна с лицом 🌙 — ночной двойник <Sun />.
 *  • мягко «дышит» и легонько покачивается
 *  • глазки и лицо следят за курсором, периодически моргает
 *  • вокруг мерцают звёздочки
 * Появляется в тёмной теме (восход — в Hero).
 */
export function Moon({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  const dirX = useMotionValue(0);
  const dirY = useMotionValue(0);
  const sx = useSpring(dirX, { stiffness: 140, damping: 16 });
  const sy = useSpring(dirY, { stiffness: 140, damping: 16 });

  const pupilX = useTransform(sx, (v) => v * 4.5);
  const pupilY = useTransform(sy, (v) => v * 4.5);
  const faceX = useTransform(sx, (v) => v * 6);
  const faceY = useTransform(sy, (v) => v * 6);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      let dx = (e.clientX - cx) / (r.width / 2);
      let dy = (e.clientY - cy) / (r.height / 2);
      const len = Math.hypot(dx, dy) || 1;
      if (len > 1) {
        dx /= len;
        dy /= len;
      }
      dirX.set(dx);
      dirY.set(dy);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [dirX, dirY]);

  // Звёздочки вокруг луны
  const stars = [
    { x: 28, y: 36, r: 2.4, d: 2.2 },
    { x: 206, y: 60, r: 3, d: 2.8 },
    { x: 40, y: 188, r: 2, d: 2.5 },
    { x: 198, y: 196, r: 2.6, d: 3.1 },
    { x: 120, y: 18, r: 1.8, d: 2.0 },
  ];

  return (
    <div
      ref={wrapRef}
      className={`pointer-events-none relative select-none ${className}`}
      aria-hidden
    >
      {/* Холодное лунное свечение */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#9fc0ff]/45 blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Мерцающие звёздочки */}
      <svg viewBox="0 0 240 240" className="absolute inset-0 h-full w-full">
        {stars.map((s, i) => (
          <motion.path
            key={i}
            d={`M${s.x} ${s.y - s.r * 2.2}c.15 ${s.r * 1.8} .6 ${s.r * 2.1} ${s.r * 2.2} ${s.r * 2.2}c-${s.r * 1.6} .1-${s.r * 2.05} .6-${s.r * 2.2} ${s.r * 2.2}c-.15-${s.r * 1.6}-.6-${s.r * 2.1}-${s.r * 2.2}-${s.r * 2.2}c${s.r * 1.6}-.1 ${s.r * 2.05}-.6 ${s.r * 2.2}-${s.r * 2.2}Z`}
            fill="#FFF6D8"
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: s.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            style={{ transformOrigin: `${s.x}px ${s.y}px` }}
          />
        ))}
      </svg>

      {/* Тело луны + лицо — мягкое дыхание и покачивание */}
      <motion.svg
        viewBox="0 0 240 240"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: [-2.5, 2.5, -2.5], y: [0, -4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "50% 50%" }}
      >
        <defs>
          <radialGradient id="moonCore" cx="42%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#FBFDFF" />
            <stop offset="48%" stopColor="#DCE7FB" />
            <stop offset="100%" stopColor="#A9C0E6" />
          </radialGradient>
        </defs>

        <motion.circle
          cx="120"
          cy="120"
          r="58"
          fill="url(#moonCore)"
          animate={{ r: [56, 60, 56] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Кратеры */}
        <g fill="#BCCDEC" opacity="0.65">
          <circle cx="150" cy="96" r="9" />
          <circle cx="158" cy="132" r="6" />
          <circle cx="92" cy="158" r="7" />
        </g>
        <circle cx="100" cy="102" r="18" fill="#FFFFFF" opacity="0.45" />

        {/* Милое лицо — следит за курсором */}
        <motion.g style={{ x: faceX, y: faceY }}>
          {/* румянец */}
          <circle cx="92" cy="138" r="8.5" fill="#8FB0E8" opacity="0.5" />
          <circle cx="148" cy="138" r="8.5" fill="#8FB0E8" opacity="0.5" />

          {/* глаза с морганием */}
          <motion.g
            animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
            transition={{
              duration: 4.5,
              times: [0, 0.9, 0.94, 0.98, 1],
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "120px 116px" }}
          >
            <motion.g style={{ x: pupilX, y: pupilY }}>
              <circle cx="102" cy="116" r="6" fill="#2A3A5E" />
              <circle cx="138" cy="116" r="6" fill="#2A3A5E" />
              <circle cx="104" cy="114" r="2" fill="#fff" />
              <circle cx="140" cy="114" r="2" fill="#fff" />
            </motion.g>
          </motion.g>

          {/* улыбка */}
          <path
            d="M101 142 Q120 158 139 142"
            stroke="#2A3A5E"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}
