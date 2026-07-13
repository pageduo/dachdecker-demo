import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Referenzen | TRAVEDACH Demo",
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="// Referenzen"
        title="Ausgewählte Projekte aus Lübeck und Umgebung."
        subline="Von der Altstadt-Sanierung bis zur Photovoltaik-Anlage auf dem Gewerbedach: ein Einblick in unsere Arbeit."
        image={img.referenzenHero}
        imageAlt="Luftaufnahme eines frisch eingedeckten Steildachs"
      />
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
