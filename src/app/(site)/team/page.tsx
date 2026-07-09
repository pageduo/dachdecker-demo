import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { team } from "@/lib/content";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Team — TRAVEDACH Demo",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="// Das Team"
        title="Die Menschen hinter jedem Dach."
        subline="Die Gesichter hinter jeder Baustelle."
        image={img.teamHero}
        imageAlt="Dachdecker bei der Arbeit auf dem Dach"
      />

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => {
              const portrait = img.team[member.key as keyof typeof img.team];
              return (
                <Reveal key={member.name} delay={i * 0.08}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <Image
                      src={portrait}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-medium text-ink">{member.name}</h3>
                  <p className="text-sm font-medium text-copper-dark">{member.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{member.bio}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
