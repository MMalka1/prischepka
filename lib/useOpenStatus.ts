"use client";

import { useEffect, useState } from "react";

/**
 * Определяет, открыт ли парк прямо сейчас (09:00–21:00 по Красноярску, UTC+7).
 * Время берём по часовому поясу парка, а не посетителя — поэтому статус
 * одинаков для всех. Обновляется раз в минуту.
 *
 * Изначально (до монтирования на клиенте) считаем «открыто», чтобы не было
 * расхождения с серверным HTML; затем уточняем по реальному времени.
 */
export function useOpenStatus(): boolean {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const check = () => {
      const hour = Number(
        new Intl.DateTimeFormat("ru-RU", {
          timeZone: "Asia/Krasnoyarsk",
          hour: "numeric",
          hour12: false,
        }).format(new Date())
      );
      setIsOpen(hour >= 9 && hour < 21);
    };
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  return isOpen;
}
