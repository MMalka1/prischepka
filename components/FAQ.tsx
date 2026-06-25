"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Waves } from "./Waves";

const ITEMS = [
  {
    q: "Нужно ли бронировать билет заранее?",
    a: "В жаркие выходные бывает много гостей, поэтому советуем покупать билет заранее. В будни обычно можно прийти и купить на месте.",
  },
  {
    q: "Можно ли со своей едой?",
    a: "На территории работает кафе с напитками и перекусами. Подробности по своей еде уточняйте по телефону парка.",
  },
  {
    q: "До скольки лет детям бесплатно?",
    a: "Дети до 3 лет проходят бесплатно. С 3 лет действует детский тариф.",
  },
  {
    q: "Чем отличается сеанс «До 17:00» и «С 17:00»?",
    a: "После 17:00 билеты дешевле — это закатный сеанс. Парк работает до 21:00, так что времени на отдых хватит.",
  },
  {
    q: "Как до вас добраться?",
    a: "Мы на Садовой ул., 2Г/1 в Красноярске. Нажми «Как добраться» — откроется маршрут в Яндекс.Картах.",
  },
];

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 0.05}>
      <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-display text-lg font-bold text-ink sm:text-xl">
            {q}
          </span>
          <span
            className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-sunset text-white"
            aria-hidden
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.svg
                  key="lounger"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ opacity: 0, rotate: -40, scale: 0.4 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 40, scale: 0.4 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* лежак + откинутая спинка */}
                  <path d="M2 16h11l7-7" />
                  {/* второй рейл спинки (для объёма) */}
                  <path d="M13 16l6.5-6.5" />
                  {/* ножки */}
                  <path d="M4.5 16 3.5 20" />
                  <path d="M11.5 16 12.5 20" />
                  {/* солнышко над шезлонгом */}
                  <circle cx="18.5" cy="5.5" r="1.6" />
                </motion.svg>
              ) : (
                <motion.span
                  key="plus"
                  className="text-2xl font-light leading-none"
                  initial={{ opacity: 0, rotate: -90, scale: 0.4 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.4 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  +
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="px-6 pb-6 text-lg leading-relaxed text-ink/70">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-water/15 blur-3xl" />
      <div className="container-px relative max-w-3xl">
        <Reveal>
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-gold">
            Вопросы
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl font-black text-white sm:text-6xl">
            Коротко о главном
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-4">
          {ITEMS.map((item, i) => (
            <Item key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>

      {/* Волна-переход в «Контакты» */}
      <div className="absolute inset-x-0 bottom-0 z-[2]">
        <Waves colorTop="#FFF5E6" colorBottom="#FDE9C8" className="-mb-px" />
      </div>
    </section>
  );
}
