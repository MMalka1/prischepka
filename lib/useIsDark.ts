"use client";

import { useEffect, useState } from "react";

/**
 * Реактивно сообщает, активна ли тёмная тема (класс `dark` на <html>).
 * Следит за изменениями через MutationObserver, поэтому реагирует и на
 * авто-переключение по времени, и на ручной клик по кнопке темы.
 *
 * Стартовое значение читаем синхронно из DOM — ночью класс `dark` уже стоит
 * (его ставит анти-флэш скрипт в layout), так что «заката» при загрузке нет,
 * он играет только при переключении.
 */
export function useIsDark(): boolean {
  const [dark, setDark] = useState<boolean>(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const el = document.documentElement;
    const update = () => setDark(el.classList.contains("dark"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  return dark;
}
