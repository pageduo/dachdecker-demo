const WALL_STROKE = "var(--color-stone)";

// Ein und dasselbe Haus (identische Wände, Fenster, Tür, Kamin-Form) in zwei
// Zuständen — nur die Dacheindeckung selbst unterscheidet sich. Damit ist der
// Vorher/Nachher-Vergleich ehrlich: Es ist garantiert dasselbe Gebäude, kein
// Wechsel zwischen zwei unterschiedlichen Fotos.
export default function RoofConditionHouse({ condition }: { condition: "vorher" | "nachher" }) {
  const isAfter = condition === "nachher";

  return (
    <svg viewBox="0 0 600 480" className="h-full w-full" role="img" aria-label={condition === "vorher" ? "Haus mit maroder Dacheindeckung vor der Sanierung" : "Dasselbe Haus mit neuer Dacheindeckung nach der Sanierung"}>
      <rect x="0" y="0" width="600" height="480" fill={isAfter ? "#eaf4fb" : "#e9e6df"} />

      {/* Boden */}
      <line x1="50" y1="430" x2="550" y2="430" stroke={WALL_STROKE} strokeWidth="2" />

      {/* Hauswand — identisch in beiden Zuständen */}
      <rect x="140" y="250" width="320" height="180" fill="#f5f0e6" stroke={WALL_STROKE} strokeWidth="2.5" />
      <rect x="165" y="300" width="55" height="55" fill="#dce8ef" stroke={WALL_STROKE} strokeWidth="2" />
      <rect x="380" y="300" width="55" height="55" fill="#dce8ef" stroke={WALL_STROKE} strokeWidth="2" />
      <rect x="272" y="360" width="56" height="70" fill="#7a5a3a" stroke={WALL_STROKE} strokeWidth="2" />
      <circle cx="318" cy="396" r="2.5" fill={WALL_STROKE} />

      {/* Kamin — Form identisch, nur Farbe/Zustand unterschiedlich */}
      <rect
        x="370"
        y="100"
        width="34"
        height="90"
        fill={isAfter ? "#b5551f" : "#8f8577"}
        stroke={WALL_STROKE}
        strokeWidth="2"
      />

      {/* Dachfläche */}
      <polygon points="120,250 300,110 480,250" fill={isAfter ? "#c1652f" : "#8a8478"} stroke={WALL_STROKE} strokeWidth="2.5" />

      {isAfter ? (
        <g>
          {/* Nachher: gleichmäßige neue Tondachziegel-Reihen */}
          {[145, 172, 199, 226].map((y) => {
            const t = (y - 110) / (250 - 110);
            const xOffset = t * 180;
            return (
              <line key={y} x1={120 + xOffset} y1={y} x2={480 - xOffset} y2={y} stroke="#8a3f16" strokeWidth="1.5" opacity="0.55" />
            );
          })}
          <line x1="120" y1="250" x2="480" y2="250" stroke="#8fb3c4" strokeWidth="4" />
          <line x1="475" y1="251" x2="475" y2="420" stroke="#8fb3c4" strokeWidth="4" />
        </g>
      ) : (
        <g>
          {/* Vorher: unregelmäßige, beschädigte Eindeckung mit Moos und Flicken */}
          {[150, 178, 205].map((y, i) => {
            const t = (y - 110) / (250 - 110);
            const xOffset = t * 180;
            return (
              <line
                key={y}
                x1={120 + xOffset + i * 3}
                y1={y}
                x2={480 - xOffset - i * 4}
                y2={y + (i === 1 ? 6 : 0)}
                stroke="#5c584d"
                strokeWidth="1.5"
                opacity="0.6"
              />
            );
          })}
          {/* Fehlende Ziegel / Loch */}
          <polygon points="330,170 365,168 372,195 337,200" fill="#3a3733" opacity="0.85" />
          {/* Moosflecken */}
          <ellipse cx="200" cy="210" rx="20" ry="9" fill="#7a8f5c" opacity="0.55" />
          <ellipse cx="230" cy="222" rx="14" ry="6" fill="#7a8f5c" opacity="0.5" />
          {/* Provisorische Plane */}
          <polygon points="150,230 200,225 210,245 155,250" fill="#3f5b6b" opacity="0.8" />
          {/* Verrostete, hängende Dachrinne */}
          <line x1="120" y1="250" x2="480" y2="252" stroke="#7a6a52" strokeWidth="3" />
          <line x1="475" y1="253" x2="472" y2="420" stroke="#7a6a52" strokeWidth="3" />
        </g>
      )}
    </svg>
  );
}
