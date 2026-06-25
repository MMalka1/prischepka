import type { Metadata, Viewport } from "next";
import { Unbounded, Inter } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-unbounded",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://prischepka-j5dm.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Прищепка — пляж-парк в Красноярске | Лето, солнце, отдых у воды",
  description:
    "Пляж-парк «Прищепка» в Красноярске. Солнце, бирюзовая вода и отдых у воды каждый день с 09:00 до 21:00. Билеты от 1 400 ₽. Садовая ул., 2Г/1.",
  keywords: [
    "Прищепка",
    "пляж-парк Красноярск",
    "пляж Красноярск",
    "отдых у воды",
    "билеты на пляж",
    "Садовая 2Г",
  ],
  authors: [{ name: "Пляж-парк Прищепка" }],
  openGraph: {
    title: "Прищепка — пляж-парк в Красноярске",
    description:
      "Лето, жара, солнце и бирюзовая вода. Ежедневно 09:00–21:00. Билеты от 1 400 ₽.",
    url: SITE_URL,
    siteName: "Пляж-парк Прищепка",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Пляж-парк Прищепка в Красноярске",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Прищепка — пляж-парк в Красноярске",
    description: "Лето, солнце и отдых у воды. Ежедневно 09:00–21:00.",
  },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF7A18",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${unbounded.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
