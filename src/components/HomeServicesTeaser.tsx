import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { services } from "@/lib/content";
import { img } from "@/lib/images";

const serviceImages: Record<string, string> = {
  steildach: img.services.steildach,
  flachdach: img.services.flachdach,
  gauben: img.services.gauben,
  daemmung: img.services.daemmung,
  solar: img.services.solar,
  klempner: img.services.klempner,
};

export default function HomeServicesTeaser() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow text-copper-dark">{"// Leistungen"}</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
              Alles rund ums Dach, aus einer Hand.
            </h2>
          </div>
          <Link
            href="/leistungen"
            className="shrink-0 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mist"
          >
            Alle Leistungen
          </Link>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, i) => (
            <Reveal key={service.key} delay={i * 0.08}>
              <Link
                href="/leistungen"
                data-cursor="Mehr erfahren"
                className="group relative block aspect-[4/5] cursor-none overflow-hidden rounded-2xl"
              >
                <Image
                  src={serviceImages[service.key]}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-lg font-medium text-paper">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">{service.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
