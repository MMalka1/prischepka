export const SITE = {
  name: "ПРИЩЕПКА",
  tagline: "Пляж-парк в Красноярске",
  hours: "Ежедневно 09:00–21:00",
  address: "Садовая ул., 2Г/1, Красноярск",
  mapUrl:
    "https://yandex.ru/maps/62/krasnoyarsk/house/sadovaya_ulitsa_2g_1/bUsYcQJlT0YDQFtsfXxzcXhnYg==/",
  mapEmbed:
    "https://yandex.ru/map-widget/v1/?ll=92.852470%2C56.020000&mode=search&oid=&ol=geo&text=%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA%2C%20%D0%A1%D0%B0%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%2C%202%D0%93%2F1&z=16",
  phonePark: { label: "+7 (391) 295-58-66", tel: "+73912955866" },
  phoneOffice: { label: "+7 (391) 281-25-25", tel: "+73912812525" },
} as const;

export type Ticket = { age: string; price: number };

export const TICKETS: Record<"before" | "after", Ticket[]> = {
  before: [
    { age: "3–6 лет", price: 1600 },
    { age: "7–13 лет", price: 1800 },
    { age: "от 14 лет", price: 2000 },
  ],
  after: [
    { age: "3–6 лет", price: 1400 },
    { age: "7–13 лет", price: 1600 },
    { age: "от 14 лет", price: 1800 },
  ],
};

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("ru-RU").format(n) + " ₽";
