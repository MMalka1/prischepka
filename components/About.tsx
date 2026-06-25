"use client";

import { Reveal } from "./Reveal";
import { Waves } from "./Waves";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-sand-fade py-24 sm:py-32 dark:bg-none dark:bg-night"
    >
      {/* warm sun glow blobs */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-coral/20 blur-3xl" />

      <div className="container-px relative text-center">
        <Reveal>
          <span className="inline-block rounded-full bg-sun/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-sun-deep">
            О парке
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-black leading-tight text-ink dark:text-cloud sm:text-6xl">
            Город плавится от жары?{" "}
            <span className="text-sunset">Мы зовём к воде.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink/75 dark:text-cloud/70 sm:text-2xl">
            «Прищепка» — просторная зелёная территория для отдыха с четырьмя
            открытыми тёплыми бассейнами. Купайся под солнцем, отдыхай в тени
            деревьев и проводи здесь целый летний день — от утреннего заплыва
            до заката над водой.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-2.5 sm:gap-8">
            {[
              { prefix: "", value: "09–21", label: "каждый день" },
              { prefix: "", value: "4", label: "тёплых бассейна" },
              { prefix: "от", value: "1400 ₽", label: "за билет" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/70 px-2 py-4 shadow-[0_20px_50px_-20px_rgba(11,37,69,0.25)] backdrop-blur-sm dark:bg-white/[0.06] dark:shadow-none sm:rounded-3xl sm:p-7"
              >
                {s.prefix && (
                  <div className="text-[11px] font-bold uppercase tracking-wider text-sun-deep sm:text-sm">
                    {s.prefix}
                  </div>
                )}
                <div className="whitespace-nowrap text-base font-black tracking-tight text-sunset sm:font-display sm:text-3xl lg:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] font-medium leading-tight text-ink/60 dark:text-cloud/55 sm:text-base">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <Waves colorTop="#06B6D4" colorBottom="#0EA5E9" className="-mb-1" />
      </div>
    </section>
  );
}
