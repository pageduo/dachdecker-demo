"use client";

import { motion } from "framer-motion";

const MUTED_STROKE = "var(--color-stone)";
const ACTIVE = "var(--color-copper)";

function Part({
  isActive,
  children,
}: {
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.g
      animate={{ opacity: isActive ? 1 : 0.55 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.g>
  );
}

export default function HouseIllustration({ active }: { active: string }) {
  const stroke = (key: string) => (active === key ? ACTIVE : MUTED_STROKE);
  const strokeWidth = (key: string) => (active === key ? 3.5 : 2);

  return (
    <svg viewBox="0 0 600 520" className="h-full w-full" role="img" aria-label="Illustration eines Hauses mit den verschiedenen Sanierungsbereichen am Dach">
      {/* Boden */}
      <line x1="60" y1="470" x2="540" y2="470" stroke={MUTED_STROKE} strokeWidth="2" />

      {/* Hauswand */}
      <Part isActive={active === "fassade"}>
        <rect x="150" y="270" width="300" height="200" fill="none" stroke={stroke("fassade")} strokeWidth={strokeWidth("fassade")} />
        {/* Fassaden-Klapprofile */}
        <line x1="150" y1="320" x2="450" y2="320" stroke={stroke("fassade")} strokeWidth="1" opacity="0.5" />
        <line x1="150" y1="370" x2="450" y2="370" stroke={stroke("fassade")} strokeWidth="1" opacity="0.5" />
        <line x1="150" y1="420" x2="450" y2="420" stroke={stroke("fassade")} strokeWidth="1" opacity="0.5" />
        {/* Tür */}
        <rect x="275" y="400" width="50" height="70" fill="none" stroke={stroke("fassade")} strokeWidth={strokeWidth("fassade")} />
        {/* Fenster */}
        <rect x="185" y="330" width="45" height="45" fill="none" stroke={stroke("fassade")} strokeWidth={strokeWidth("fassade")} />
        <rect x="370" y="330" width="45" height="45" fill="none" stroke={stroke("fassade")} strokeWidth={strokeWidth("fassade")} />
      </Part>

      {/* Kamin */}
      <Part isActive={active === "eindeckung"}>
        <rect x="360" y="110" width="30" height="80" fill="none" stroke={stroke("eindeckung")} strokeWidth={strokeWidth("eindeckung")} />
      </Part>

      {/* Dachfläche (Giebeldach) */}
      <Part isActive={active === "eindeckung"}>
        <polygon points="130,270 300,120 470,270" fill="none" stroke={stroke("eindeckung")} strokeWidth={strokeWidth("eindeckung")} />
        {/* Ziegelreihen */}
        {[160, 190, 220, 250].map((y) => {
          const t = (y - 120) / (270 - 120);
          const xOffset = t * 170;
          return (
            <line
              key={y}
              x1={130 + xOffset}
              y1={y}
              x2={470 - xOffset}
              y2={y}
              stroke={stroke("eindeckung")}
              strokeWidth="1"
              opacity="0.45"
            />
          );
        })}
      </Part>

      {/* Gaube */}
      <Part isActive={active === "gauben"}>
        <polygon points="175,230 175,190 210,165 245,190 245,230" fill="var(--color-paper)" stroke={stroke("gauben")} strokeWidth={strokeWidth("gauben")} />
        <rect x="195" y="200" width="30" height="30" fill="none" stroke={stroke("gauben")} strokeWidth={strokeWidth("gauben")} />
      </Part>

      {/* Solaranlage */}
      <Part isActive={active === "solar"}>
        {[0, 1, 2].map((row) =>
          [0, 1].map((col) => {
            const bx = 320 + col * 42;
            const by = 190 + row * 26;
            return (
              <rect
                key={`${row}-${col}`}
                x={bx}
                y={by}
                width="36"
                height="20"
                fill="none"
                stroke={stroke("solar")}
                strokeWidth={strokeWidth("solar")}
                transform={`skewY(-18) translate(${bx * 0.35}, 0)`}
              />
            );
          })
        )}
      </Part>

      {/* Dämmung (Aufklappung am Dachrand) */}
      <Part isActive={active === "daemmung"}>
        <polygon points="130,270 170,270 200,235 160,235" fill="var(--color-paper)" stroke={stroke("daemmung")} strokeWidth={strokeWidth("daemmung")} />
        <line x1="140" y1="260" x2="185" y2="248" stroke={stroke("daemmung")} strokeWidth="1.5" opacity="0.7" />
        <line x1="136" y1="252" x2="181" y2="240" stroke={stroke("daemmung")} strokeWidth="1.5" opacity="0.7" />
      </Part>

      {/* Dachrinne & Fallrohr */}
      <Part isActive={active === "dachrinne"}>
        <line x1="128" y1="271" x2="472" y2="271" stroke={stroke("dachrinne")} strokeWidth={strokeWidth("dachrinne")} />
        <line x1="465" y1="272" x2="465" y2="460" stroke={stroke("dachrinne")} strokeWidth={strokeWidth("dachrinne")} />
        <circle cx="465" cy="272" r="4" fill={stroke("dachrinne")} />
      </Part>
    </svg>
  );
}
