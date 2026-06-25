"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Sun } from "./Sun";
import { Waves } from "./Waves";
import { Particles } from "./Particles";
import { VideoBg } from "./VideoBg";
import { ClothesPin } from "./ClothesPin";
import { OpenBadge } from "./OpenBadge";
import { SITE } from "@/lib/site";
import { useIsDark } from "@/lib/useIsDark";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const isDark = useIsDark();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax layers — sun drifts slow, sand fast.
  const sunY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "55%"]);
  const waterY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "30%"]);
  const sandY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "12%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-20%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-water-sky via-water to-water-deep dark:from-[#0b1c34] dark:via-[#0a1426] dark:to-[#060d1c]"
    >
      {/* Background photo layer (parallax) — замени /images/hero-bg.svg своим фото */}
      <motion.div style={{ y: waterY }} className="absolute inset-0">
        <Image
          src="/images/hero-bg.svg"
          alt="Пляж-парк Прищепка: зелёная территория и тёплые бассейны"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        {/* Видео-фон: закинь /videos/hero.mp4 — заиграет автоматически */}
        <VideoBg
          src="/videos/hero.mp4"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </motion.div>

      {/* Warm sky overlay → sunset feel + readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/30 via-water/20 to-water-deep/50" />

      {/* Parallax sun — на закате (тёмная тема) опускается за горизонт,
          краснеет и гаснет. Внешний слой держит параллакс при скролле,
          внутренний играет сам закат при смене темы. */}
      <motion.div
        style={{ y: sunY }}
        className="absolute right-[6%] top-[10%] z-[6] h-48 w-48 sm:right-[12%] sm:top-[12%] sm:h-72 sm:w-72 lg:h-80 lg:w-80"
      >
        <motion.div
          className="h-full w-full"
          initial={false}
          animate={
            isDark
              ? {
                  y: 380,
                  scale: 0.78,
                  opacity: 0.16,
                  filter: "brightness(0.78) saturate(1.6) hue-rotate(-18deg)",
                }
              : {
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  filter: "brightness(1) saturate(1) hue-rotate(0deg)",
                }
          }
          transition={{ duration: reduce ? 0 : 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Sun className="relative h-full w-full" />
        </motion.div>
      </motion.div>

      {/* Закатное свечение у горизонта — проявляется в тёмной теме */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-2/5 bg-gradient-to-t from-[#FF6A3D]/40 via-[#FF3D6E]/12 to-transparent"
        initial={false}
        animate={{ opacity: isDark ? 1 : 0 }}
        transition={{ duration: reduce ? 0 : 1.8, ease: "easeInOut" }}
      />

      {/* Плавающая прищепка-предмет (бренд) */}
      <motion.div
        style={{ y: sandY }}
        className="absolute left-[5%] top-[14%] z-[6] h-32 w-auto sm:left-[8%] sm:top-[16%] sm:h-44 lg:h-56"
        initial={{ opacity: 0, rotate: -18, y: -30 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ rotate: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="h-full origin-top drop-shadow-[0_18px_30px_rgba(11,37,69,0.35)]"
        >
          <ClothesPin className="h-full w-auto" />
        </motion.div>
      </motion.div>

      {/* Floating glints */}
      <motion.div style={{ y: waterY }} className="absolute inset-0">
        <Particles />
      </motion.div>

      {/* Hero content with heat-haze shimmer */}
      <motion.div
        style={{ y: titleY, opacity: fade }}
        className="container-px relative z-10 mt-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <OpenBadge variant="hero" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="heat-haze mt-5 break-words font-display text-[14vw] font-black leading-[0.85] tracking-tight text-white drop-shadow-[0_10px_40px_rgba(3,105,161,0.5)] sm:text-[15vw] lg:text-[170px]"
        >
          ПРИЩЕПКА
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-4 max-w-xl text-lg font-medium text-white/95 sm:text-2xl"
        >
          {SITE.tagline} — лето, жара и отдых у воды
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#tickets"
            data-splash
            className="cta-glow relative w-full rounded-full bg-sunset px-8 py-4 text-center text-lg font-extrabold text-white shadow-glow-coral transition-transform duration-200 hover:scale-[1.04] active:scale-95 sm:w-auto"
          >
            Купить билет
          </a>
          <a
            href={SITE.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-splash
            className="w-full rounded-full border-2 border-white/80 bg-white/10 px-8 py-4 text-center text-lg font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-ink sm:w-auto"
          >
            Как добраться
          </a>
        </motion.div>
      </motion.div>

      {/* Parallax sand strip + waves at the bottom */}
      <motion.div
        style={{ y: sandY }}
        className="absolute inset-x-0 bottom-0 z-[5]"
      >
        <Waves colorTop="#FDE9C8" colorBottom="#F3D9A8" className="-mb-1" />
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/80"
        animate={reduce ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
