import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StandorteMap from "@/components/StandorteMap";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Standorte | TRAVEDACH Demo",
};

export default function StandortePage() {
  return (
    <>
      <PageHero
        eyebrow="// Einzugsgebiet"
        title="Zuhause in Lübeck, im Einsatz an der ganzen Küste."
        subline="Wählen Sie einen Standort und laden Sie die interaktive Karte, um sich die Anfahrt anzusehen."
        image={img.locations[0]}
        imageAlt="Historische Backsteingebäude in der Lübecker Altstadt"
      />
      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <StandorteMap />
        </div>
      </section>
    </>
  );
}
