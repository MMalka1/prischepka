"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SmartImage } from "./SmartImage";
import { Waves } from "./Waves";

function Icon({ name }: { name: "wave" | "sun" | "drink" | "umbrella" | "music" }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "wave":
      return (
        <svg {...common}><path d="M2 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" /><path d="M2 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" /></svg>
      );
    case "sun":
      return (
        <svg {...common}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" /></svg>
      );
    case "drink":
      return (
        <svg {...common}><path d="M5 4h14l-7 8-7-8ZM12 12v6M8 20h8" /></svg>
      );
    case "umbrella":
      return (
        <svg {...common}><path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9ZM12 12v7a2 2 0 0 0 4 0" /></svg>
      );
    case "music":
      return (
        <svg {...common}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
      );
  }
}

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="container-px">
        <Reveal>
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-gold">
            Что у нас есть
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-black leading-tight text-white sm:text-6xl">
            Целый день <span className="text-sunset">настоящего лета</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {/* Big photo tile */}
          <Reveal className="col-span-2 row-span-2" delay={0.05}>
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group relative h-full overflow-hidden rounded-3xl"
            >
              <SmartImage
                src="/images/photo-1.jpg"
                fallback="/images/pool.svg"
                alt="Бассейн с бирюзовой водой"
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center gap-2 text-gold">
                  <Icon name="wave" />
                  <span className="text-sm font-bold uppercase tracking-wider">Вода</span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-black text-white sm:text-3xl">
                  Бассейны и бирюзовая вода
                </h3>
              </div>
            </motion.div>
          </Reveal>

          {[
            { icon: "sun" as const, title: "Загар и шезлонги", color: "from-sun to-coral" },
            { icon: "drink" as const, title: "Кафе и коктейли", color: "from-water to-water-deep" },
            { icon: "umbrella" as const, title: "Тень и зоны отдыха", color: "from-coral to-sun-deep" },
            { icon: "music" as const, title: "Музыка и движ", color: "from-gold to-sun" },
          ].map((f, i) => (
            <Reveal key={f.title} delay={0.1 + i * 0.06}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br ${f.color} p-6 text-white`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                  <Icon name={f.icon} />
                </span>
                <h3 className="font-display text-lg font-black leading-snug sm:text-xl">
                  {f.title}
                </h3>
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Волны — переход в галерею */}
      <div className="absolute inset-x-0 bottom-0">
        <Waves colorTop="#FDE9C8" colorBottom="#F3D9A8" className="-mb-px" />
      </div>
    </section>
  );
}
