"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ClothesPin } from "./ClothesPin";
import { OpenBadge } from "./OpenBadge";

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
          ? "bg-white/85 shadow-[0_8px_30px_-12px_rgba(11,37,69,0.25)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between sm:h-[72px]">
        <a
          href="#hero"
          className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight sm:text-xl"
        >
          <ClothesPin className="h-8 w-auto drop-shadow" />
          <span className={scrolled ? "text-ink" : "text-white drop-shadow"}>
            ПРИЩЕПКА
          </span>
        </a>

        <div
          className={`hidden items-center gap-7 text-sm font-semibold lg:flex ${
            scrolled ? "text-ink" : "text-white"
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
