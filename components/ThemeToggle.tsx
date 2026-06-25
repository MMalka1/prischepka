"use client";

import { useEffect, useState } from "react";

/**
 * Переключатель день/ночь.
 *
 * По умолчанию тема выбирается автоматически по времени парка
 * (Asia/Krasnoyarsk): ночь с 21:00 до 09:00 — тёмная, днём — светлая.
 * Как только посетитель нажал кнопку, его выбор запоминается в localStorage
 * и автопереключение отключается (до повторного клика).
 *
 * Класс `dark` на <html> ставится ещё до отрисовки инлайн-скриптом в layout,
 * поэтому «мигания» светлой темы ночью нет.
 */
function krskHour(): number {
  return Number(
    new Intl.DateTimeFormat("ru-RU", {
      timeZone: "Asia/Krasnoyarsk",
      hour: "numeric",
      hour12: false,
    }).format(new Date())
  );
}

function autoIsDark(): boolean {
  const h = krskHour();
  return h >= 21 || h < 9;
}

function applyDark(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark);
}

export function ThemeToggle({ scrolled = false }: { scrolled?: boolean }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const stored = localStorage.getItem("theme");
    const initial =
      stored === "dark" || stored === "light" ? stored === "dark" : autoIsDark();
    setDark(initial);
    applyDark(initial);

    // Пока нет ручного выбора — следим за временем и переключаемся сами.
    const id = window.setInterval(() => {
      if (localStorage.getItem("theme")) return;
      const next = autoIsDark();
      setDark(next);
      applyDark(next);
    }, 60_000);

    return () => window.clearInterval(id);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    applyDark(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Включить светлую тему" : "Включить тёмную тему"}
      title={dark ? "Светлая тема" : "Тёмная тема"}
      className={`flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 ${
        scrolled
          ? "text-ink hover:bg-ink/10 dark:text-cloud dark:hover:bg-white/10"
          : "text-white hover:bg-white/15"
      }`}
    >
      {/* До монтирования иконку не рисуем, чтобы не было рассинхрона с SSR */}
      {mounted &&
        (dark ? (
          // солнце — клик включит светлую тему
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
          </svg>
        ) : (
          // луна — клик включит тёмную тему
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
          </svg>
        ))}
    </button>
  );
}
