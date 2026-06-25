"use client";

import { useOpenStatus } from "@/lib/useOpenStatus";
import { SITE } from "@/lib/site";

function Dot({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="relative flex h-2.5 w-2.5">
      {isOpen && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
      )}
      <span
        className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
          isOpen ? "bg-emerald-500" : "bg-rose-500"
        }`}
      />
    </span>
  );
}

/**
 * Живой бейдж статуса «Открыто / Закрыто» — меняется автоматически
 * по времени работы парка (09:00–21:00 по Красноярску).
 */
export function OpenBadge({
  variant,
  scrolled = false,
}: {
  variant: "header" | "hero" | "info" | "footer";
  scrolled?: boolean;
}) {
  const isOpen = useOpenStatus();

  if (variant === "header") {
    return (
      <span
        className={`hidden items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold sm:inline-flex ${
          scrolled
            ? isOpen
              ? "bg-emerald-50 text-emerald-700"
              : "bg-rose-50 text-rose-700"
            : "bg-white/20 text-white"
        }`}
      >
        <Dot isOpen={isOpen} />
        {isOpen ? "Открыто" : "Закрыто"}
      </span>
    );
  }

  if (variant === "hero") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm sm:text-base">
        <Dot isOpen={isOpen} />
        {isOpen ? "Открыто" : "Закрыто"} · {SITE.hours}
      </span>
    );
  }

  if (variant === "info") {
    return (
      <span
        className={`inline-flex items-center gap-2 text-sm font-semibold ${
          isOpen ? "text-emerald-600" : "text-rose-600"
        }`}
      >
        <Dot isOpen={isOpen} />
        {isOpen ? "Сейчас открыто" : "Сейчас закрыто"}
      </span>
    );
  }

  // footer
  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-semibold ${
        isOpen ? "text-emerald-400" : "text-rose-400"
      }`}
    >
      <Dot isOpen={isOpen} />
      {isOpen ? "Открыто" : "Закрыто"}
    </span>
  );
}
