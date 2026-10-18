import type { Metadata } from "next";
import LegalHero from "@/components/LegalHero";
import DemoHinweis from "@/components/DemoHinweis";
import { PAGEDUO_EMAIL, PAGEDUO_NAME, PAGEDUO_PARTNERS, PAGEDUO_URL } from "@/lib/pageduo";

export const metadata: Metadata = {
  title: "Impressum | TRAVEDACH – Demo",
};

/*
 * Das Impressum nennt den Anbieter dieser Website, und das ist nicht der
 * dargestellte Betrieb - den gibt es nicht. Anbieter ist die Agentur, die
 * die Demo betreibt.
 *
 * Die frueheren Abschnitte (fiktive Anschrift, USt-IdNr., Eintragung in der
 * Handwerksrolle der Handwerkskammer Luebeck, EU-Streitschlichtung) sind
 * ersatzlos entfallen. Sie waren als Platzhalter gekennzeichnet, aber eine
 * erfundene Eintragung in einer echten Handwerkskammer bleibt eine falsche
 * Angabe mit dem Namen einer echten Koerperschaft darin - und "Meisterbetrieb"
 * ist eine gefuehrte Bezeichnung, keine Dekoration.
 */
export default function ImpressumPage() {
  return (
    <>
      <LegalHero eyebrow="// Rechtliches" title="Impressum" />
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <DemoHinweis className="mb-10" />

        <div className="flex flex-col gap-10 text-sm leading-relaxed text-stone">
          <section>
            <h2 className="mb-3 font-display text-xl font-medium text-ink">
              Anbieter dieser Website
            </h2>
            <p>
              {PAGEDUO_NAME} – Webdesign, Hamburg
              <br />
              Vertreten durch die Gesellschafter {PAGEDUO_PARTNERS.replace(", ", " und ")}
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${PAGEDUO_EMAIL}`}
                className="underline underline-offset-2 transition-colors hover:text-ink"
              >
                {PAGEDUO_EMAIL}
              </a>
            </p>
          </section>

          <section>
            <a
              href={`${PAGEDUO_URL}/impressum`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-slate px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-ink"
            >
              Vollständiges Impressum von PageDuo
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-medium text-ink">Bildnachweise</h2>
            <p>
              Die Fotografien dieser Demo stammen von Unsplash, das Videomaterial von Pexels, beide
              im Rahmen der jeweiligen kostenfreien Lizenz zu Demonstrationszwecken genutzt.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
