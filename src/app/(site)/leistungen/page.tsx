import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import RoofColorPicker from "@/components/RoofColorPicker";
import { services } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Leistungen | TRAVEDACH Demo",
};

const serviceImages: Record<string, string> = {
  steildach: img.services.steildach,
  flachdach: img.services.flachdach,
  gauben: img.services.gauben,
  daemmung: img.services.daemmung,
  solar: img.services.solar,
  klempner: img.services.klempner,
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="// Leistungen"
        title="Alles rund ums Dach, aus einer Hand."
        subline="Vom Notdienst bis zur Komplettsanierung: unsere Kolonnen decken alle Gewerke am und auf dem Dach ab."
        image={img.leistungenHero}
        imageAlt="Detailaufnahme einer sauberen Flachdachkante vor blauem Himmel"
      />

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-16 px-5 sm:px-8">
          {services.map((service, i) => (
            <Reveal
              key={service.key}
              className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={serviceImages[service.key]}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="eyebrow text-copper-dark">0{i + 1}</span>
                <h2 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-stone">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-5xl px-5 sm:px-8">
          <Reveal>
            <RoofColorPicker />
          </Reveal>
        </div>

        <div className="mx-auto mt-24 max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
              Nicht sicher, welche Leistung passt?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone">
              Bei einer kostenlosen Bestandsaufnahme vor Ort finden wir gemeinsam die richtige
              Lösung für Ihr Dach.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-copper-light"
            >
              Termin anfragen
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
