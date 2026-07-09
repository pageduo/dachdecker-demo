"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { company } from "@/lib/content";
import { img } from "@/lib/images";
import { videos } from "@/lib/videos";
import BackgroundVideo from "./BackgroundVideo";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <BackgroundVideo src={videos.heroAerial} poster={img.hero} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="eyebrow text-copper-light"
        >
          {company.city} · seit {company.founded}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.05] text-paper sm:text-6xl lg:text-7xl"
        >
          {company.claim}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg"
        >
          {company.subline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <MagneticButton>
            <Link
              href="/kontakt"
              className="rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-copper-light"
            >
              Kostenlosen Vor-Ort-Termin anfragen
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/referenzen"
              className="rounded-full border border-paper/30 px-7 py-3.5 text-sm font-semibold text-paper transition hover:bg-paper/10"
            >
              Referenzen ansehen
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute inset-x-0 bottom-6 flex justify-center"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-paper/40 p-1.5"
        >
          <span className="h-1.5 w-1 rounded-full bg-paper/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
