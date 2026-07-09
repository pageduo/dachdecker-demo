"use client";

import { ReactNode, useCallback, useRef, useState } from "react";

export default function CompareSlider({
  before,
  after,
  beforeLabel = "Vorher",
  afterLabel = "Nachher",
}: {
  before: ReactNode;
  after: ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      className="relative aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-3xl"
    >
      <div className="pointer-events-none absolute inset-0">{after}</div>
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {before}
      </div>

      <div className="pointer-events-none absolute inset-x-4 top-4 flex justify-between text-xs font-semibold uppercase tracking-wide">
        <span className="rounded-full bg-ink/60 px-3 py-1 text-paper">{beforeLabel}</span>
        <span className="rounded-full bg-copper px-3 py-1 text-paper">{afterLabel}</span>
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-paper"
        style={{ left: `${position}%` }}
      >
        <div className="pointer-events-auto absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-paper shadow-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-ink">
            <path
              d="M8 6L2 12L8 18M16 6L22 12L16 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
