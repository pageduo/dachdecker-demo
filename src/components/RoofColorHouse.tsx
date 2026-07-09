"use client";

import { motion } from "framer-motion";

// Mischt eine Hex-Farbe proportional Richtung Weiß (percent > 0) oder
// Schwarz (percent < 0) — für konsistente, algorithmisch erzeugte
// Hell-/Schattenflächen auf den beiden Dachseiten, statt für jede Farbe
// von Hand zwei weitere Töne pflegen zu müssen.
function shade(hex: string, percent: number) {
  const num = parseInt(hex.slice(1), 16);
  const r = (num >> 16) & 0xff;
  const g = (num >> 8) & 0xff;
  const b = num & 0xff;
  const target = percent > 0 ? 255 : 0;
  const p = Math.min(1, Math.abs(percent) / 100);
  const nr = Math.round((target - r) * p + r);
  const ng = Math.round((target - g) * p + g);
  const nb = Math.round((target - b) * p + b);
  return `#${((1 << 24) + (nr << 16) + (ng << 8) + nb).toString(16).slice(1)}`;
}

const TRANSITION = { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const };

export default function RoofColorHouse({ color }: { color: string }) {
  const left = shade(color, 16);
  const right = shade(color, -20);
  const lines = shade(color, -32);

  return (
    <svg viewBox="0 0 600 440" className="h-full w-full" role="img" aria-label="Illustration eines Hauses mit wählbarer Dachfarbe">
      <defs>
        <linearGradient id="rcp-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9d4e8" />
          <stop offset="55%" stopColor="#e8d3c4" />
          <stop offset="100%" stopColor="#f6ead9" />
        </linearGradient>
        <linearGradient id="rcp-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8faa72" />
          <stop offset="100%" stopColor="#71875a" />
        </linearGradient>
        <radialGradient id="rcp-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff3d6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fff3d6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Himmel */}
      <rect x="0" y="0" width="600" height="300" fill="url(#rcp-sky)" />
      <circle cx="500" cy="80" r="90" fill="url(#rcp-sun)" />

      {/* Boden */}
      <rect x="0" y="298" width="600" height="142" fill="url(#rcp-ground)" />

      {/* Bäume */}
      <g opacity="0.85">
        <circle cx="70" cy="272" r="30" fill="#5c7248" />
        <circle cx="95" cy="282" r="24" fill="#63794d" />
        <rect x="80" y="295" width="6" height="20" fill="#4a4030" />
      </g>
      <g opacity="0.85">
        <circle cx="545" cy="262" r="26" fill="#5c7248" />
        <circle cx="565" cy="275" r="20" fill="#63794d" />
        <rect x="552" y="290" width="6" height="18" fill="#4a4030" />
      </g>

      {/* Einfahrt */}
      <polygon points="345,440 455,440 420,335 380,335" fill="#c9c3b6" opacity="0.9" />

      {/* Hauskörper */}
      <rect x="195" y="205" width="230" height="135" fill="#f2ead9" stroke="var(--color-stone)" strokeWidth="2" />
      {[228, 252, 276, 300, 324].map((y) => (
        <line key={y} x1="195" y1={y} x2="425" y2={y} stroke="var(--color-stone)" strokeWidth="1" opacity="0.25" />
      ))}

      {/* Garage */}
      <rect x="345" y="275" width="80" height="65" fill="#e4dcc9" stroke="var(--color-stone)" strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1={352 + i * 18} y1="280" x2={352 + i * 18} y2="340" stroke="var(--color-stone)" strokeWidth="1.5" opacity="0.5" />
      ))}

      {/* Fenster mit warmem Glühen */}
      <rect x="220" y="240" width="42" height="42" fill="#ffdca0" fillOpacity="0.85" stroke="var(--color-stone)" strokeWidth="2" />
      <line x1="241" y1="240" x2="241" y2="282" stroke="var(--color-stone)" strokeWidth="1.5" />
      <line x1="220" y1="261" x2="262" y2="261" stroke="var(--color-stone)" strokeWidth="1.5" />

      <rect x="292" y="240" width="42" height="42" fill="#ffdca0" fillOpacity="0.85" stroke="var(--color-stone)" strokeWidth="2" />
      <line x1="313" y1="240" x2="313" y2="282" stroke="var(--color-stone)" strokeWidth="1.5" />
      <line x1="292" y1="261" x2="334" y2="261" stroke="var(--color-stone)" strokeWidth="1.5" />

      {/* Tür */}
      <rect x="232" y="296" width="34" height="44" fill="var(--color-copper-dark)" stroke="var(--color-stone)" strokeWidth="2" />
      <circle cx="260" cy="320" r="1.8" fill="#f2ead9" />

      {/* Dach — linke (helle) und rechte (dunklere) Fläche für Tiefe */}
      <motion.polygon
        points="180,205 310,120 310,205"
        animate={{ fill: left }}
        transition={TRANSITION}
        stroke="var(--color-stone)"
        strokeWidth="2.5"
      />
      <motion.polygon
        points="310,120 440,205 310,205"
        animate={{ fill: right }}
        transition={TRANSITION}
        stroke="var(--color-stone)"
        strokeWidth="2.5"
      />

      {/* Ziegelreihen als Textur-Andeutung */}
      {[150, 168, 186].map((y, i) => {
        const t = (y - 120) / (205 - 120);
        const xOffsetL = t * 130;
        return (
          <motion.line
            key={"l" + y}
            x1={180 + xOffsetL}
            y1={y}
            x2={310}
            y2={y}
            animate={{ stroke: lines }}
            transition={TRANSITION}
            strokeWidth="1.3"
            opacity={0.5 - i * 0.05}
          />
        );
      })}
      {[150, 168, 186].map((y, i) => {
        const t = (y - 120) / (205 - 120);
        const xOffsetR = t * 130;
        return (
          <motion.line
            key={"r" + y}
            x1={310}
            y1={y}
            x2={440 - xOffsetR}
            y2={y}
            animate={{ stroke: lines }}
            transition={TRANSITION}
            strokeWidth="1.3"
            opacity={0.5 - i * 0.05}
          />
        );
      })}

      {/* First (Dachfirst-Linie) */}
      <line x1="180" y1="205" x2="310" y2="120" stroke="var(--color-stone)" strokeWidth="2.5" />
      <line x1="310" y1="120" x2="440" y2="205" stroke="var(--color-stone)" strokeWidth="2.5" />

      {/* Kamin */}
      <motion.rect
        x="365"
        y="140"
        width="22"
        height="45"
        animate={{ fill: right }}
        transition={TRANSITION}
        stroke="var(--color-stone)"
        strokeWidth="2"
      />
      <rect x="362" y="136" width="28" height="7" fill="var(--color-stone)" />

      {/* Dachrinne */}
      <line x1="176" y1="207" x2="444" y2="207" stroke="#8fb3c4" strokeWidth="3" />
    </svg>
  );
}
