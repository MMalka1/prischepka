"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Waves } from "./Waves";

/**
 * Видео-тур по парку. Закинь файл  public/videos/tour.mp4  — и он
 * появится здесь. Пока видео нет, показывается постер-заглушка.
 * Клик по кнопке включает звук и запускает на весь экран ощущение.
 */
export function VideoSection() {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(true);

  // Ленивая загрузка: видео начинает грузиться только когда секция
  // приближается к экрану — сайт открывается быстро.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          v.load();
          v.play().catch(() => {});
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) v.play().catch(() => {});
  };

  return (
    <section id="video" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      {/* Волны — переход из галереи */}
      <div className="absolute inset-x-0 top-0 z-[2]">
        <Waves flip colorTop="#FDE9C8" colorBottom="#F3D9A8" className="-mt-px" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-sun/20 blur-3xl" />
      <div className="container-px relative text-center">
        <Reveal>
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-gold">
            Видео-тур
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl font-black text-white sm:text-6xl">
            Посмотри, как у нас <span className="text-sunset">кайфово</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="group relative mx-auto mt-12 aspect-video max-w-4xl overflow-hidden rounded-[2rem] bg-water-deep shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] ring-4 ring-white/10"
          >
            {/* Постер-заглушка под видео */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/images/sunset.svg)" }}
            />

            <video
              ref={ref}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                ready ? "opacity-100" : "opacity-0"
              }`}
              muted
              loop
              playsInline
              preload="none"
              poster="/images/sunset.svg"
              onCanPlay={() => setReady(true)}
              onError={() => setReady(false)}
            >
              <source src="/videos/tour.mp4" type="video/mp4" />
            </video>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />

            {/* Заглушка, пока видео tour.mp4 не залито */}
            {!ready && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 text-center">
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-sun-deep shadow-glow">
                  <span className="absolute inset-0 animate-pulse-ring rounded-full bg-white/60" />
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7L8 5Z" />
                  </svg>
                </span>
                <span className="rounded-full bg-ink/40 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
                  Видео скоро появится
                </span>
              </div>
            )}

            {/* Кнопка звука — только когда видео реально играет */}
            {ready && (
              <button
                onClick={toggleSound}
                className="absolute bottom-5 right-5 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/90 text-ink shadow-lg backdrop-blur transition-transform hover:scale-110 active:scale-95"
                aria-label={muted ? "Включить звук" : "Выключить звук"}
              >
                {muted ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5Z" /><path d="m23 9-6 6M17 9l6 6" /></svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5Z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14" /></svg>
                )}
              </button>
            )}
          </motion.div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-md text-sm text-white/50">
            Видео без звука включается само. Нажми на динамик, чтобы услышать лето.
          </p>
        </Reveal>
      </div>

      {/* Волна-переход в «Билеты» (вода) */}
      <div className="absolute inset-x-0 bottom-0 z-[2]">
        <Waves colorTop="#0EA5E9" colorBottom="#06B6D4" className="-mb-px" />
      </div>
    </section>
  );
}
