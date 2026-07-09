"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { estimateCalculator } from "@/lib/content";

const currency = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export default function EstimateCalculator() {
  const [sizeIndex, setSizeIndex] = useState(1);
  const size = estimateCalculator.roofSizes[sizeIndex];

  const total = useMemo(() => estimateCalculator.base * size.multiplier, [size]);
  const lower = Math.round((total * 0.85) / 100) * 100;
  const upper = Math.round((total * 1.2) / 100) * 100;

  return (
    <div className="rounded-3xl bg-slate p-8 sm:p-10">
      <p className="eyebrow text-copper-light">Grobe Kosteneinschätzung</p>
      <h3 className="mt-3 font-display text-2xl font-medium text-paper sm:text-3xl">
        Wie groß ist Ihre Dachfläche?
      </h3>

      <div className="mt-8">
        <input
          type="range"
          min={0}
          max={estimateCalculator.roofSizes.length - 1}
          step={1}
          value={sizeIndex}
          onChange={(e) => setSizeIndex(Number(e.target.value))}
          className="w-full accent-copper"
        />
        <div className="mt-3 flex justify-between text-xs text-paper/50">
          {estimateCalculator.roofSizes.map((s, i) => (
            <span key={s.label} className={i === sizeIndex ? "text-copper-light" : ""}>
              {s.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-slate-light p-6">
        <p className="eyebrow text-paper/50">Richtpreis-Spanne für eine Komplettsanierung</p>
        <p className="mt-3 font-display text-3xl font-medium text-paper sm:text-4xl">
          {currency.format(lower)} <span className="text-paper/40">–</span> {currency.format(upper)}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-paper/60">
          Unverbindliche Schätzung für {size.label}. Der endgültige Preis hängt von
          Dachneigung, Material und Zugänglichkeit ab und wird immer nach einem kostenlosen
          Vor-Ort-Termin festgelegt.
        </p>
      </div>

      <Link
        href="/kontakt"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-copper-light"
      >
        Unverbindliches Angebot anfragen
      </Link>
    </div>
  );
}
