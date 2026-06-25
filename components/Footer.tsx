import { Waves } from "./Waves";
import { ClothesPin } from "./ClothesPin";
import { Socials } from "./Socials";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <Waves colorTop="#0B2545" colorBottom="#0369A1" className="-mt-1" />

      <div className="container-px relative pb-10 pt-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-display text-2xl font-black">
              <ClothesPin className="h-9 w-auto" />
              ПРИЩЕПКА
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Пляж-парк в Красноярске. Лето, солнце и отдых у воды каждый день.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
              Адрес
            </h3>
            <a
              href={SITE.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block font-medium text-white/90 transition-colors hover:text-gold"
            >
              {SITE.address}
            </a>
            <a
              href={SITE.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-water-sky hover:text-gold"
            >
              Как добраться →
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
              Часы
            </h3>
            <p className="mt-3 font-medium text-white/90">{SITE.hours}</p>
            <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Открыто
            </span>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50">
              Телефоны
            </h3>
            <div className="mt-3 flex flex-col gap-3">
              <a
                href={`tel:${SITE.phonePark.tel}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 font-semibold transition-colors hover:bg-sunset"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                {SITE.phonePark.label}
              </a>
              <a
                href={`tel:${SITE.phoneOffice.tel}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 font-semibold transition-colors hover:bg-sunset"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                {SITE.phoneOffice.label}
              </a>
            </div>
            <div className="mt-4">
              <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-white/50">
                Соцсети
              </span>
              <Socials size={42} />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <span>© 2026 Пляж-парк «Прищепка», Красноярск</span>
          <a href="#hero" className="hover:text-gold">
            Наверх ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
