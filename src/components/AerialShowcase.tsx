"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { aerialShowcaseStages } from "@/lib/content";
import { img } from "@/lib/images";

const STAGE_DURATION_MS = 3200;

export default function AerialShowcase() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % aerialShowcaseStages.length);
    }, STAGE_DURATION_MS);
    return () => window.clearInterval(timer);
  }, [playing]);

  const stage = aerialShowcaseStages[index];

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-ink sm:aspect-[16/9]">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={img.aerialShowcase[index]}
            alt={`Luftbild: ${stage.label}`}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.3 }}
            className="rounded-full bg-ink/60 px-3 py-1 text-xs font-semibold tracking-wide text-paper"
          >
            {stage.time} / {aerialShowcaseStages[aerialShowcaseStages.length - 1].time}
          </motion.span>
        </AnimatePresence>
        <span className="eyebrow rounded-full bg-copper/90 px-3 py-1 text-paper">
          Vogelperspektive
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 sm:p-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-display text-xl font-medium text-paper sm:text-2xl">{stage.label}</p>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-paper/70">
              {stage.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-3">
          <button
            aria-label={playing ? "Pausieren" : "Abspielen"}
            onClick={() => setPlaying((p) => !p)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper text-ink transition hover:bg-copper-light"
          >
            {playing ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <rect x="5" y="4" width="5" height="16" rx="1" />
                <rect x="14" y="4" width="5" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4.5v15l13-7.5-13-7.5Z" />
              </svg>
            )}
          </button>

          <div className="flex flex-1 gap-1.5">
            {aerialShowcaseStages.map((s, i) => (
              <button
                key={s.label}
                aria-label={`Zu Etappe „${s.label}“ springen`}
                onClick={() => setIndex(i)}
                className="h-1.5 flex-1 overflow-hidden rounded-full bg-paper/25"
              >
                <span
                  className="block h-full bg-copper transition-all"
                  style={{
                    width: i < index ? "100%" : i > index ? "0%" : undefined,
                  }}
                >
                  {i === index && (
                    <motion.span
                      key={`${index}-${playing}`}
                      className="block h-full bg-copper"
                      initial={{ width: "0%" }}
                      animate={{ width: playing ? "100%" : "0%" }}
                      transition={{ duration: STAGE_DURATION_MS / 1000, ease: "linear" }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>

          <Link
            href="/referenzen"
            className="hidden shrink-0 rounded-full border border-paper/30 px-4 py-2 text-xs font-semibold text-paper transition hover:bg-paper/10 sm:block"
          >
            Referenzen entdecken
          </Link>
        </div>
      </div>
    </div>
  );
}
