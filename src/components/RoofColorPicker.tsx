"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RoofColorHouse from "./RoofColorHouse";

const tileColors = [
  {
    key: "ziegelrot",
    label: "Ziegelrot",
    color: "#a8422a",
    description: "Warmes, klassisches Terrakotta, der zeitlose Standard unter den Dachziegeln.",
  },
  {
    key: "anthrazit",
    label: "Anthrazit",
    color: "#33363a",
    description: "Tiefes, mattes Anthrazit, modern und dezent, passend zu fast jeder Fassade.",
  },
  {
    key: "schiefergrau",
    label: "Schiefergrau",
    color: "#6b7280",
    description: "Kühles Schiefergrau, klassisch norddeutsch und unaufdringlich elegant.",
  },
  {
    key: "kupferpatina",
    label: "Kupferpatina",
    color: "#5c8a72",
    description: "Grünlich patiniertes Kupfer-Finish, ungewöhnlich und langlebig im Charakter.",
  },
  {
    key: "moosgruen",
    label: "Moosgrün",
    color: "#556b3f",
    description: "Erdiges Moosgrün, fügt sich besonders harmonisch in grüne Umgebungen ein.",
  },
] as const;

export default function RoofColorPicker() {
  const [active, setActive] = useState(0);
  const color = tileColors[active];

  return (
    <div className="overflow-hidden rounded-3xl bg-ink">
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
        <div className="min-w-0">
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
            <RoofColorHouse color={color.color} />
            <AnimatePresence mode="wait">
              <motion.span
                key={color.key}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.25 }}
                className="eyebrow absolute left-5 top-5 rounded-full bg-ink/70 px-3 py-1.5 text-paper backdrop-blur-sm"
              >
                {color.label}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 p-8 sm:p-10">
          <div>
            <p className="eyebrow text-copper-light">{"// Farbwahl"}</p>
            <h3 className="mt-3 font-display text-2xl font-medium text-paper sm:text-3xl">
              Welche Farbe trägt Ihr Dach?
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/60">
              Dasselbe Haus, {tileColors.length} Farbtöne. Wählen Sie einen Ton und sehen Sie, wie
              er wirkt: die echten Musterziegel bringen wir zum Termin mit.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {tileColors.map((c, i) => (
                <button
                  key={c.key}
                  onClick={() => setActive(i)}
                  aria-label={c.label}
                  aria-pressed={active === i}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                    active === i
                      ? "border-copper bg-paper/10 text-paper"
                      : "border-paper/15 text-paper/60 hover:border-paper/35 hover:text-paper/85"
                  }`}
                >
                  <span
                    className="h-4 w-4 rounded-full border border-paper/20"
                    style={{ backgroundColor: c.color }}
                  />
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="border-t border-paper/10 pt-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={color.key}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm leading-relaxed text-paper/70"
                >
                  {color.description}
                </motion.p>
              </AnimatePresence>
            </div>
            <Link
              href="/kontakt"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3 text-sm font-semibold text-paper transition hover:bg-copper-light"
            >
              Dieses Dach anfragen →
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-paper/40">
              Illustrative Vorschau an einem Musterhaus. Wir bringen die echten Musterziegel zum
              kostenlosen Vor-Ort-Termin mit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
