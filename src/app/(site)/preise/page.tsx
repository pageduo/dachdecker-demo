import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import EstimateCalculator from "@/components/EstimateCalculator";
import { pricingTiers } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Preise | TRAVEDACH Demo",
};

export default function PreisePage() {
  return (
    <>
      <PageHero
        eyebrow="// Preise & Pakete"
        title="Transparente Preise, klare Festpreisangebote."
        subline="Jede Sanierung ist anders. Hier finden Sie eine erste Orientierung, das genaue Angebot folgt immer nach einem kostenlosen Vor-Ort-Termin."
        image={img.services.flachdach}
        imageAlt="Flachdach eines Gewerbegebäudes mit Lüftungstechnik aus der Vogelperspektive"
      />

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <Reveal
                key={tier.title}
                delay={i * 0.08}
                className={`flex flex-col rounded-3xl border p-8 ${
                  tier.highlighted ? "border-copper bg-slate text-paper" : "border-ink/10 bg-cream text-ink"
                }`}
              >
                <h3 className="font-display text-xl font-medium">{tier.title}</h3>
                <p className={`mt-3 font-display text-3xl font-medium ${tier.highlighted ? "text-copper-light" : "text-copper-dark"}`}>
                  {tier.price}
                </p>
                <p className={`mt-4 text-sm leading-relaxed ${tier.highlighted ? "text-paper/70" : "text-stone"}`}>
                  {tier.description}
                </p>
                <ul className="mt-6 flex flex-col gap-2 text-sm">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className={tier.highlighted ? "text-copper-light" : "text-copper-dark"}>✓</span>
                      <span className={tier.highlighted ? "text-paper/80" : "text-ink/80"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-16">
            <EstimateCalculator />
          </Reveal>
        </div>
      </section>
    </>
  );
}
