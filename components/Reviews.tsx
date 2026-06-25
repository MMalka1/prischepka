"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Waves } from "./Waves";

const REVIEWS = [
  {
    name: "Анна",
    tag: "с детьми",
    text: "Приехали на весь день — дети не вылезали из воды. Чисто, тепло, есть тень и кафе. Лучшее лето в Красноярске!",
  },
  {
    name: "Дмитрий",
    tag: "закатный сеанс",
    text: "Брали билеты после 17:00 — выгодно и не жарко. Закат над водой просто космос. Точно вернёмся.",
  },
  {
    name: "Карина",
    tag: "с подругами",
    text: "Атмосфера южного курорта прямо в городе. Музыка, коктейли, шезлонги. Зависли до самого вечера.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-gold" aria-label="5 из 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="m12 2 2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-sand-fade py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-water/20 blur-3xl" />
      <div className="container-px relative">
        <Reveal>
          <span className="inline-block rounded-full bg-water/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-water-deep">
            Отзывы
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl font-black text-ink sm:text-6xl">
            Нас любят за лето
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <motion.blockquote
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-[0_25px_60px_-30px_rgba(11,37,69,0.35)]"
              >
                <Stars />
                <p className="mt-4 flex-1 text-lg leading-relaxed text-ink/80">
                  «{r.text}»
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sunset font-display text-lg font-black text-white">
                    {r.name[0]}
                  </span>
                  <span>
                    <span className="block font-bold text-ink">{r.name}</span>
                    <span className="block text-sm text-ink/50">{r.tag}</span>
                  </span>
                </footer>
              </motion.blockquote>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Волна-переход в «Вопросы» (тёмная секция) */}
      <div className="absolute inset-x-0 bottom-0">
        <Waves colorTop="#0B2545" colorBottom="#102B4F" className="-mb-px" />
      </div>
    </section>
  );
}
