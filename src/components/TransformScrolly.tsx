"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { transformStages } from "@/lib/content";
import HouseIllustration from "./HouseIllustration";

export default function TransformScrolly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const index = Math.min(
      transformStages.length - 1,
      Math.max(0, Math.floor(value * transformStages.length))
    );
    setActive(index);
  });

  const stage = transformStages[active];

  return (
    <div ref={containerRef} style={{ height: `${transformStages.length * 100}vh` }} className="relative bg-cream">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="order-2 flex flex-col gap-1 lg:order-1">
            {transformStages.map((s, i) => (
              <div
                key={s.key}
                className={`border-l-2 py-4 pl-6 transition-all duration-500 ${
                  active === i ? "border-copper" : "border-ink/10"
                }`}
              >
                <p
                  className={`eyebrow mb-2 transition-colors duration-500 ${
                    active === i ? "text-copper-dark" : "text-stone/50"
                  }`}
                >
                  0{i + 1} / 0{transformStages.length}
                </p>
                <h3
                  className={`font-display text-xl font-medium transition-colors duration-500 sm:text-2xl ${
                    active === i ? "text-ink" : "text-ink/30"
                  }`}
                >
                  {s.title}
                </h3>
                <AnimatePresence>
                  {active === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-2 max-w-md overflow-hidden text-sm leading-relaxed text-stone"
                    >
                      {s.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="relative order-1 aspect-[6/5] w-full overflow-hidden rounded-3xl bg-paper p-6 shadow-sm lg:order-2">
            <HouseIllustration active={stage.key} />
          </div>
        </div>
      </div>
    </div>
  );
}
