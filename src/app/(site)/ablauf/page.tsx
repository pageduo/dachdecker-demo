import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Ablauf | TRAVEDACH Demo",
};

export default function AblaufPage() {
  return (
    <>
      <PageHero
        eyebrow="// So arbeiten wir"
        title="Vier Schritte zu Ihrem sanierten Dach."
        subline="Transparent, terminfest und mit einem festen Ansprechpartner von der ersten Besichtigung bis zur Abnahme."
        image={img.ablaufHero}
        imageAlt="Zwei Handwerker in Warnweste besiegeln die Bauabnahme per Handschlag"
      />

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex flex-col gap-16">
            {processSteps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 0.05}
                className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={img.process[i]}
                    alt={step.title}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="eyebrow text-copper-dark">Schritt 0{i + 1}</span>
                  <h2 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">
                    {step.title}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-stone">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
