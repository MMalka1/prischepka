"use client";

import { Reveal } from "./Reveal";
import { Socials } from "./Socials";
import { OpenBadge } from "./OpenBadge";
import { SITE } from "@/lib/site";

function PinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function Info() {
  return (
    <section id="info" className="relative bg-sand py-24 dark:bg-night sm:py-32">
      <div className="container-px">
        <Reveal>
          <span className="inline-block rounded-full bg-water/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-water-deep">
            Инфо и контакты
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl font-black text-ink dark:text-cloud sm:text-6xl">
            Ждём тебя на берегу
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact cards */}
          <div className="grid gap-5">
            <Reveal>
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-3xl bg-white p-6 shadow-[0_20px_50px_-25px_rgba(11,37,69,0.3)] dark:bg-night-card dark:shadow-none transition-transform duration-200 hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sunset text-white">
                  <PinIcon />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-wide text-ink/50 dark:text-cloud/50">
                    Адрес
                  </span>
                  <span className="mt-1 block text-lg font-bold text-ink dark:text-cloud group-hover:text-sun-deep">
                    {SITE.address}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-water-deep">
                    Открыть в Яндекс.Картах →
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex items-start gap-4 rounded-3xl bg-white p-6 shadow-[0_20px_50px_-25px_rgba(11,37,69,0.3)] dark:bg-night-card dark:shadow-none">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-water text-white">
                  <ClockIcon />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-wide text-ink/50 dark:text-cloud/50">
                    Часы работы
                  </span>
                  <span className="mt-1 block text-lg font-bold text-ink dark:text-cloud">
                    {SITE.hours}
                  </span>
                  <span className="mt-1 block">
                    <OpenBadge variant="info" />
                  </span>
                </span>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal delay={0.12}>
                <a
                  href={`tel:${SITE.phonePark.tel}`}
                  className="group flex h-full items-start gap-4 rounded-3xl bg-white p-6 shadow-[0_20px_50px_-25px_rgba(11,37,69,0.3)] dark:bg-night-card dark:shadow-none transition-transform duration-200 hover:-translate-y-1"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-coral text-white">
                    <PhoneIcon />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold uppercase tracking-wide text-ink/50 dark:text-cloud/50">
                      Парк
                    </span>
                    <span className="mt-1 block text-lg font-bold text-ink dark:text-cloud group-hover:text-coral">
                      {SITE.phonePark.label}
                    </span>
                  </span>
                </a>
              </Reveal>

              <Reveal delay={0.16}>
                <a
                  href={`tel:${SITE.phoneOffice.tel}`}
                  className="group flex h-full items-start gap-4 rounded-3xl bg-white p-6 shadow-[0_20px_50px_-25px_rgba(11,37,69,0.3)] dark:bg-night-card dark:shadow-none transition-transform duration-200 hover:-translate-y-1"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold text-ink">
                    <PhoneIcon />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold uppercase tracking-wide text-ink/50 dark:text-cloud/50">
                      Офис
                    </span>
                    <span className="mt-1 block text-lg font-bold text-ink dark:text-cloud group-hover:text-sun-deep">
                      {SITE.phoneOffice.label}
                    </span>
                  </span>
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="flex items-center justify-between gap-4 rounded-3xl bg-white p-6 shadow-[0_20px_50px_-25px_rgba(11,37,69,0.3)] dark:bg-night-card dark:shadow-none">
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-wide text-ink/50 dark:text-cloud/50">
                    Мы в соцсетях
                  </span>
                  <span className="mt-1 block text-lg font-bold text-ink dark:text-cloud">
                    Новости, акции и фото
                  </span>
                </span>
                <Socials size={48} />
              </div>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal delay={0.1}>
            <div className="h-[360px] overflow-hidden rounded-3xl shadow-[0_30px_70px_-30px_rgba(11,37,69,0.5)] lg:h-full">
              <iframe
                src={SITE.mapEmbed}
                title="Пляж-парк Прищепка на карте — Садовая ул., 2Г/1, Красноярск"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
