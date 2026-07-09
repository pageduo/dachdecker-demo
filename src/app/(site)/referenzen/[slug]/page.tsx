import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SwipeGallery from "@/components/SwipeGallery";
import CompareSlider from "@/components/CompareSlider";
import RoofConditionHouse from "@/components/RoofConditionHouse";
import { galleryProjects } from "@/lib/content";
import { img } from "@/lib/images";

export function generateStaticParams() {
  return galleryProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = galleryProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — TRAVEDACH Referenzen (Demo)` };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = galleryProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const images = img.gallery[project.slug];

  return (
    <article>
      <div className="relative h-[60svh] min-h-[420px] w-full overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <SwipeGallery
            images={[...images]}
            alt={project.title}
            aspectClassName="h-full"
            className="rounded-none"
            dotsPosition="top"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-5 pb-10 sm:px-8">
          <p className="eyebrow text-copper-light">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-medium text-paper sm:text-5xl">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <Reveal>
          <p className="text-lg leading-relaxed text-stone">{project.description}</p>
        </Reveal>

        {project.hasBeforeAfter && (
          <Reveal delay={0.1} className="mt-14">
            <p className="eyebrow mb-4 text-copper-dark">{"// Vorher / Nachher"}</p>
            <p className="mb-4 text-sm leading-relaxed text-stone">
              Dasselbe Haus, unverändert — einzig die Dacheindeckung wird komplett erneuert.
              Schematische Darstellung, ziehen Sie den Regler.
            </p>
            <CompareSlider
              before={<RoofConditionHouse condition="vorher" />}
              after={<RoofConditionHouse condition="nachher" />}
            />
          </Reveal>
        )}

        <Reveal delay={0.15} className="mt-14 flex flex-wrap gap-4">
          <Link
            href="/referenzen"
            className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mist"
          >
            ← Zurück zu allen Referenzen
          </Link>
          <Link
            href="/kontakt"
            className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-paper transition hover:bg-copper-light"
          >
            Ähnliches Projekt anfragen
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
