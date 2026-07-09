import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { img } from "@/lib/images";

export default function HomeTransformTeaser() {
  return (
    <section className="bg-slate py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl lg:aspect-[4/5]">
          <Image
            src={img.transformHeader}
            alt="Haus mit Baugerüst während einer Dachsanierung"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow text-copper-light">{"// Die Verwandlung"}</p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-paper sm:text-5xl">
            Was an Ihrem Dach alles möglich ist.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-paper/70">
            Von der neuen Eindeckung über Dachfenster und Dämmung bis zur eigenen
            Photovoltaik-Anlage: Scrollen Sie durch unsere interaktive Haus-Illustration und
            entdecken Sie, was bei einer Sanierung alles zusammenspielt.
          </p>
          <Link
            href="/verwandlung"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-copper-light"
          >
            Verwandlung entdecken
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
