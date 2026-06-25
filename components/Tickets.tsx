"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Waves } from "./Waves";
import { TICKETS, formatPrice } from "@/lib/site";

type Tab = "before" | "after";

export function Tickets() {
  const [tab, setTab] = useState<Tab>("before");
  const list = TICKETS[tab];

  return (
    <section
      id="tickets"
      className="relative overflow-hidden bg-gradient-to-b from-water-sky to-water py-24 dark:bg-none dark:from-night dark:to-night sm:py-32"
    >
      <div className="container-px relative text-center">
        <Reveal>
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-white">
            Билеты
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl font-black text-white sm:text-6xl">
            Выбирай своё лето
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/85">
            После 17:00 — выгоднее. Заходи на закатный сеанс.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.2}>
          <div
            role="tablist"
            aria-label="Время посещения"
            className="mx-auto mt-10 inline-flex rounded-full bg-white/20 p-1.5 backdrop-blur-sm"
          >
            {(
              [
                { id: "before", label: "До 17:00" },
                { id: "after", label: "С 17:00" },
              ] as const
            ).map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className="relative cursor-pointer rounded-full px-6 py-2.5 text-base font-bold transition-colors duration-200 sm:px-10"
              >
                {tab === t.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-white shadow-lg"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    tab === t.id ? "text-ink" : "text-white"
                  }`}
                >
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              className="grid gap-6 sm:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {list.map((ticket, i) => {
                const featured = i === 1;
                return (
                  <motion.div
                    key={ticket.age}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -10 }}
                  className={`group relative flex flex-col items-center overflow-hidden rounded-[2rem] p-8 text-center shadow-xl transition-shadow duration-300 hover:shadow-glow ${
                    featured
                      ? "bg-sunset text-white ring-4 ring-white/40"
                      : "bg-white text-ink dark:bg-night-card dark:text-cloud"
                  }`}
                >
                  {/* hover glow sweep */}
                  <div className="pointer-events-none absolute -inset-1 bg-gradient-to-tr from-gold/0 via-white/30 to-gold/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                  {featured && (
                    <span className="relative mb-3 rounded-full bg-white/25 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      Популярно
                    </span>
                  )}

                  <div
                    className={`relative text-sm font-bold uppercase tracking-wider ${
                      featured ? "text-white/80" : "text-sun-deep"
                    }`}
                  >
                    {ticket.age}
                  </div>

                  <div className="relative mt-3 font-display text-5xl font-black sm:text-6xl">
                    {formatPrice(ticket.price)}
                  </div>

                  <div
                    className={`relative mt-2 text-sm ${
                      featured ? "text-white/75" : "text-ink/50 dark:text-cloud/55"
                    }`}
                  >
                    {tab === "before" ? "вход до 17:00" : "вход с 17:00"}
                  </div>

                  <a
                    href="#info"
                    data-splash
                    className={`relative mt-7 w-full cursor-pointer rounded-full px-6 py-3.5 text-base font-extrabold transition-transform duration-200 hover:scale-[1.03] active:scale-95 ${
                      featured
                        ? "bg-white text-sun-deep dark:bg-cloud"
                        : "bg-sunset text-white shadow-glow"
                    }`}
                  >
                    Купить
                  </a>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-sm text-white/70">
            Дети до 3 лет — бесплатно. Цены указаны за одного посетителя на весь
            день в рамках выбранного сеанса.
          </p>
        </Reveal>
      </div>

      {/* Волна-переход в «Отзывы» */}
      <div className="absolute inset-x-0 bottom-0">
        <Waves colorTop="#FDE9C8" colorBottom="#F3D9A8" className="-mb-px" />
      </div>
    </section>
  );
}
