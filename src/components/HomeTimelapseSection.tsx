import Reveal from "./Reveal";
import AerialShowcase from "./AerialShowcase";

export default function HomeTimelapseSection() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-copper-dark">{"// Vogelperspektive"}</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
            Dächer, wie man sie sonst nicht sieht.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone">
            Ein Blick von oben zeigt, worauf es bei einem guten Dach ankommt, von der
            Eindeckung bis zur Photovoltaik-Anlage.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <AerialShowcase />
        </Reveal>
      </div>
    </section>
  );
}
