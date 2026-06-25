/**
 * ═══════════════════════════════════════════════════════════════
 *  КАК ДОБАВИТЬ СВОИ ФОТО — БЕЗ КОДА
 *
 *  Просто закинь свои фото в папку  public/images/  с такими именами:
 *
 *      photo-1.jpg   ← большое фото (бассейн / главное)
 *      photo-2.jpg
 *      photo-3.jpg
 *      photo-4.jpg   ← широкое фото (закат / общий вид)
 *      photo-5.jpg
 *      photo-6.jpg
 *
 *  И всё — они сами появятся на сайте вместо заглушек.
 *  Можно .jpg, .png или .webp — если используешь другой формат,
 *  поменяй расширение в строчке "src" ниже.
 *
 *  Пока файла нет — показывается красивый постер-заглушка.
 * ═══════════════════════════════════════════════════════════════
 */

export type Photo = {
  src: string; // твоё фото
  fallback: string; // заглушка, пока фото нет
  alt: string;
  caption: string;
  span?: "tall" | "wide";
};

export const GALLERY: Photo[] = [
  {
    src: "/images/photo-1.jpg",
    fallback: "/images/pool.svg",
    alt: "Бассейн пляж-парка Прищепка с бирюзовой водой",
    caption: "Чистая бирюзовая вода",
    span: "tall",
  },
  {
    src: "/images/photo-2.jpg",
    fallback: "/images/loungers.svg",
    alt: "Шезлонги и зонты на песке",
    caption: "Шезлонги и тень",
  },
  {
    src: "/images/photo-3.jpg",
    fallback: "/images/splash.svg",
    alt: "Брызги воды и веселье",
    caption: "Брызги и драйв",
  },
  {
    src: "/images/photo-4.jpg",
    fallback: "/images/sunset.svg",
    alt: "Закат над водой в Прищепке",
    caption: "Закатные сеансы",
    span: "wide",
  },
  {
    src: "/images/photo-5.jpg",
    fallback: "/images/food.svg",
    alt: "Коктейли и кафе на пляже",
    caption: "Кафе и коктейли",
  },
  {
    src: "/images/photo-6.jpg",
    fallback: "/images/palms.svg",
    alt: "Пальмы и тёплый закат",
    caption: "Атмосфера юга",
    span: "tall",
  },
];
