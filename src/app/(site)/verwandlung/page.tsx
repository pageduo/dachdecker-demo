import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import TransformScrolly from "@/components/TransformScrolly";
import Reveal from "@/components/Reveal";
import { img } from "@/lib/images";
import { videos } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Die Verwandlung — TRAVEDACH Demo",
};

export default function VerwandlungPage() {
  return (
    <>
      <PageHero
        eyebrow="// Die Verwandlung"
        title="Was an Ihrem Dach alles möglich ist."
        subline="Ein Dach ist mehr als eine Eindeckung. Scrollen Sie durch die Illustration und entdecken Sie, welche Gewerke bei einer Sanierung zusammenspielen."
        image={img.transformHeader}
        imageAlt="Haus mit Baugerüst während einer Dachsanierung"
        video={videos.transformAerial}
      />

      <TransformScrolly />

      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-medium text-ink sm:text-4xl">
              Welche Kombination passt zu Ihrem Dach?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone">
              Bei einer Bestandsaufnahme vor Ort zeigen wir Ihnen konkret, was auf Ihrem Dach
              sinnvoll und förderfähig ist.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-copper-light"
            >
              Kostenlose Bestandsaufnahme anfragen
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
