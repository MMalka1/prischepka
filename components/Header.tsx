"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ClothesPin } from "./ClothesPin";
import { OpenBadge } from "./OpenBadge";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/85 shadow-[0_8px_30px_-12px_rgba(11,37,69,0.25)] backdrop-blur-md dark:bg-night/85 dark:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between sm:h-[72px]">
        <a
          href="#hero"
          className="group flex items-center gap-2 font-display text-lg font-extrabold tracking-tight sm:text-xl"
        >
          <ClothesPin className="h-8 w-auto drop-shadow" />
          <span className={scrolled ? "text-ink dark:text-cloud" : "text-white drop-shadow"}>
            ПРИЩЕПК
            {/* Последняя «А» при наведении превращается в прищепку */}
            <span className="relative inline-block align-baseline">
              {/* сама буква — прячется (ширину сохраняем, чтобы текст не прыгал) */}
              <span className="inline-block origin-bottom transition-all duration-300 ease-out group-hover:scale-0 group-hover:opacity-0">
                А
              </span>
              {/* прищепка — выпрыгивает на месте буквы */}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-[0.1em] left-1/2 h-[1.32em] -translate-x-1/2 origin-bottom scale-0 rotate-[-18deg] opacity-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100"
              >
                <span className="block h-full origin-[50%_35%] group-hover:animate-pin-sway">
                  <ClothesPin className="h-full w-auto drop-shadow-[0_4px_8px_rgba(11,37,69,0.4)]" />
                </span>
              </span>
            </span>
          </span>
        </a>

        <div
          className={`hidden items-center gap-7 text-sm font-semibold lg:flex ${
            scrolled ? "text-ink dark:text-cloud" : "text-white"
          }`}
        >
          {[
            { href: "#about", label: "О парке" },
            { href: "#features", label: "Что у нас" },
            { href: "#gallery", label: "Галерея" },
            { href: "#tickets", label: "Билеты" },
            { href: "#info", label: "Контакты" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative transition-opacity hover:opacity-70 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-sun after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle scrolled={scrolled} />
          <OpenBadge variant="header" scrolled={scrolled} />

          <a
            href="#tickets"
            data-splash
            className="rounded-full bg-sunset px-4 py-2 text-sm font-bold text-white shadow-glow transition-transform duration-200 hover:scale-[1.04] active:scale-95 sm:px-5 sm:text-base"
          >
            Купить билет
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
