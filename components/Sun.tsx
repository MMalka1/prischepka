"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Анимированное солнце с милым лицом 🙂
 *  • лучи вращаются (вращение на HTML-слое — работает железно везде)
 *  • солнце дышит, лицо моргает
 *  • глазки и лицо следят за курсором
 * Анимации работают всегда (брендовый центр страницы).
 */
export function Sun({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const rays = Array.from({ length: 16 });

  const dirX = useMotionValue(0);
  const dirY = useMotionValue(0);
  const sx = useSpring(dirX, { stiffness: 140, damping: 16 });
  const sy = useSpring(dirY, { stiffness: 140, damping: 16 });

  const pupilX = useTransform(sx, (v) => v * 5);
  const pupilY = useTransform(sy, (v) => v * 5);
  const faceX = useTransform(sx, (v) => v * 7);
  const faceY = useTransform(sy, (v) => v * 7);

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

  return (
    <div
      ref={wrapRef}
      className={`pointer-events-none relative select-none ${className}`}
      aria-hidden
    >
      {/* Свечение */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gold/60 blur-3xl"
        animate={{ opacity: [0.45, 0.85, 0.45], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* СЛОЙ ЛУЧЕЙ — вращается как HTML-div (надёжно) */}
      <motion.div
        className="absolute inset-0"
        style={{ transformOrigin: "50% 50%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <motion.svg
          viewBox="0 0 240 240"
          className="h-full w-full"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "50% 50%" }}
        >
          <defs>
            <linearGradient id="rayGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFC531" />
              <stop offset="100%" stopColor="#FF5A00" />
            </linearGradient>
          </defs>
          {rays.map((_, i) => {
            const angle = (360 / rays.length) * i;
            const long = i % 2 === 0;
            return (
              <rect
                key={i}
                x="117"
                y={long ? 2 : 12}
                width="6"
                height={long ? 30 : 18}
                rx="3"
                fill="url(#rayGrad)"
                transform={`rotate(${angle} 120 120)`}
              />
            );
          })}
        </motion.svg>
      </motion.div>

      {/* СЛОЙ ТЕЛА + ЛИЦА */}
      <svg viewBox="0 0 240 240" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="sunCore" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#FFE38A" />
            <stop offset="45%" stopColor="#FFC531" />
            <stop offset="100%" stopColor="#FF7A18" />
          </radialGradient>
        </defs>

        <motion.circle
          cx="120"
          cy="120"
          r="58"
          fill="url(#sunCore)"
          animate={{ r: [56, 61, 56] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="103" cy="103" r="20" fill="#FFF4C9" opacity="0.5" />

        {/* Милое лицо — следит за курсором */}
        <motion.g style={{ x: faceX, y: faceY }}>
          <circle cx="96" cy="132" r="9" fill="#FF7A6B" opacity="0.55" />
          <circle cx="144" cy="132" r="9" fill="#FF7A6B" opacity="0.55" />

          <motion.g
            animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
            transition={{
              duration: 4,
              times: [0, 0.92, 0.95, 0.98, 1],
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "120px 112px" }}
          >
            <ellipse cx="104" cy="112" rx="9" ry="11" fill="#3A1B0E" opacity="0.12" />
            <ellipse cx="136" cy="112" rx="9" ry="11" fill="#3A1B0E" opacity="0.12" />
            <motion.g style={{ x: pupilX, y: pupilY }}>
              <circle cx="104" cy="112" r="5.5" fill="#3A1B0E" />
              <circle cx="136" cy="112" r="5.5" fill="#3A1B0E" />
              <circle cx="106" cy="110" r="1.8" fill="#fff" />
              <circle cx="138" cy="110" r="1.8" fill="#fff" />
            </motion.g>
          </motion.g>

          <path
            d="M104 138 Q120 152 136 138"
            stroke="#3A1B0E"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
          />
        </motion.g>
      </svg>
    </div>
  );
}
