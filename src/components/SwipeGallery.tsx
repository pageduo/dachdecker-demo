"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";

const SWIPE_THRESHOLD = 60;

export default function SwipeGallery({
  images,
  alt,
  aspectClassName = "aspect-[4/5]",
  className = "",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  dotsPosition = "bottom",
}: {
  images: string[];
  alt: string;
  aspectClassName?: string;
  className?: string;
  sizes?: string;
  dotsPosition?: "bottom" | "top";
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (delta: number) => {
    setDirection(delta);
    setIndex((i) => (i + delta + images.length) % images.length);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x <= -SWIPE_THRESHOLD) go(1);
    else if (info.offset.x >= SWIPE_THRESHOLD) go(-1);
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-mist ${aspectClassName} ${className}`}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          drag={images.length > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.7}
          onDragEnd={onDragEnd}
          initial={{ x: direction >= 0 ? 60 : -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction >= 0 ? -60 : 60, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 touch-pan-y cursor-grab active:cursor-grabbing"
        >
          <Image
            src={images[index]}
            alt={`${alt}, Bild ${index + 1} von ${images.length}`}
            fill
            draggable={false}
            sizes={sizes}
            className="pointer-events-none object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            aria-label="Vorheriges Bild"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/50 text-paper opacity-0 transition group-hover:opacity-100"
          >
            ‹
          </button>
          <button
            aria-label="Nächstes Bild"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/50 text-paper opacity-0 transition group-hover:opacity-100"
          >
            ›
          </button>
          <div
            className={`pointer-events-none absolute inset-x-0 z-10 flex justify-center gap-1.5 ${
              dotsPosition === "top" ? "top-24" : "bottom-3"
            }`}
          >
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-5 bg-copper" : "w-1.5 bg-paper/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
