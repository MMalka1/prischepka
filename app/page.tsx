import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { GrainOverlay } from "@/components/GrainOverlay";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";
import { VideoSection } from "@/components/VideoSection";
import { Tickets } from "@/components/Tickets";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Info } from "@/components/Info";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AmusementPark",
  name: "Пляж-парк Прищепка",
  description:
    "Пляж-парк в Красноярске: солнце, бирюзовая вода и отдых у воды. Ежедневно 09:00–21:00.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Садовая ул., 2Г/1",
    addressLocality: "Красноярск",
    addressCountry: "RU",
  },
  openingHours: "Mo-Su 09:00-21:00",
  telephone: SITE.phonePark.label,
  hasMap: SITE.mapUrl,
  sameAs: [SITE.vk, SITE.tg, SITE.instagram],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <GrainOverlay />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Features />
        <Gallery />
        <VideoSection />
        <Tickets />
        <Reviews />
        <FAQ />
        <Info />
      </main>
      <Footer />
    </>
  );
}
