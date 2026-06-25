"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Показывает фото пользователя (src). Если такого файла ещё нет —
 * автоматически подставляет красивый постер-заглушку (fallback).
 * Благодаря этому можно просто закинуть файл в папку — и он появится,
 * ничего не трогая в коде.
 */
export function SmartImage({
  src,
  fallback,
  alt,
  className,
  sizes,
  priority,
}: {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [current, setCurrent] = useState(src);
  return (
    <Image
      src={current}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
}
