"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SmartImage } from "./SmartImage";
import { GALLERY } from "@/lib/gallery";

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-sand py-24 dark:bg-night sm:py-32">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="inline-block rounded-full bg-coral/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-coral">
                Галерея
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-black text-ink dark:text-cloud sm:text-6xl">
                Здесь хочется остаться
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-xs text-ink/60 dark:text-cloud/55 sm:text-right">
              Загляни одним глазком — и поймёшь, почему сюда возвращаются всё лето.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {GALLERY.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={i * 0.05}
              className={
                photo.span === "tall"
                  ? "row-span-2"
                  : photo.span === "wide"
                  ? "col-span-2"
                  : ""
              }
            >
              <motion.figure
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative h-full w-full overflow-hidden rounded-3xl shadow-[0_20px_50px_-25px_rgba(11,37,69,0.4)]"
              >
                <SmartImage
                  src={photo.src}
                  fallback={photo.fallback}
                  alt={photo.alt}
                  sizes="(max-width:1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80" />
                <figcaption className="absolute bottom-4 left-4 translate-y-2 font-display text-lg font-bold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.caption}
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
