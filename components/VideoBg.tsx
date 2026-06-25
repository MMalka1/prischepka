"use client";

import { useRef, useState } from "react";

/**
 * Фоновое видео. Если файла /videos/hero.mp4 ещё нет — видео просто
 * не появляется, и под ним остаётся фото-фон. Закинул файл — заиграло.
 * Видео без звука, зациклено, автозапуск (как требуют браузеры).
 */
export function VideoBg({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  return (
    <video
      ref={ref}
      className={`${className} transition-opacity duration-700 ${
        ready ? "opacity-100" : "opacity-0"
      }`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onCanPlay={() => setReady(true)}
      onError={() => setReady(false)}
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
