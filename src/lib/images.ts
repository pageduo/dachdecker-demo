// Kuratierte, lizenzfreie Unsplash-Motive (Unsplash-Lizenz: kostenlose kommerzielle Nutzung).
// Jede Bild-ID wurde einzeln heruntergeladen und visuell geprüft (Inhalt passt zur
// Bildunterschrift, keine fremden Firmenlogos/Wahrzeichen sichtbar), bevor sie hier
// eingetragen wurde. Für den echten Kundenbetrieb durch eigene / beauftragte
// Fotografie ersetzen.
function unsplash(id: string, w = 1600) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;
}

export const img = {
  hero: unsplash("1635424709961-f3a150459ad4", 2000),
  // Wiederverwendung des "Flachdach-Kante"-Motivs aus der Referenzen-Galerie als
  // ruhiger, handwerklich hochwertiger Einstieg in die Leistungsübersicht.
  leistungenHero: unsplash("1686858230933-430406195ea9", 2000),
  // Sauberer Drohnen-Blick auf ein frisch eingedecktes Steildach.
  referenzenHero: unsplash("1755114203680-d39d95efa82c", 2000),
  teamHero: unsplash("1635424824800-692767998d07", 2000),
  ablaufHero: unsplash("1742112125635-6f8201c6ee3f", 2000),
  faqHero: unsplash("1642522029691-029b5a432954", 2000),

  services: {
    steildach: unsplash("1614418583513-8e96d9160333"),
    // Echtes Flachdach mit Lüftungs-/Klimatechnik aus der Vogelperspektive.
    flachdach: unsplash("1768677432858-b9a8608dd849"),
    gauben: unsplash("1519115226133-94046df0e272"),
    daemmung: unsplash("1752852381113-7d93abc9d7ea"),
    solar: unsplash("1694327671725-e2a81cda3436"),
    klempner: unsplash("1634853982486-c06f0e17940f"),
  },

  process: [
    unsplash("1772442198624-4fc4d7281e89"),
    unsplash("1503387762-592deb58ef4e"),
    unsplash("1633759593085-1eaeb724fc88"),
    // Heller, freundlicher Handschlag statt der bisherigen dunklen/unklaren Aufnahme.
    unsplash("1758599543152-a73184816eba"),
  ],

  transformHeader: unsplash("1635961134620-5da36ab4ad72", 2000),

  // Luftbild-Etappen für den "Dächer aus der Vogelperspektive"-Player auf der
  // Startseite (Feature: Video/Projektentwicklung). Bewusst als Rundgang durch
  // verschiedene Dachtypen/-zustände gestaltet statt als (unrealistische) Vorher-
  // Nachher-Serie ein und desselben Hauses aus unterschiedlichen Stock-Fotos.
  aerialShowcase: [
    unsplash("1755114203680-d39d95efa82c", 1800),
    unsplash("1543155704-976b3cb78a8b", 1800),
    unsplash("1697486235884-e473b6884504", 1800),
    unsplash("1694327671725-e2a81cda3436", 1800),
    unsplash("1532608159195-6d28b5be267b", 1800),
  ],

  gallery: {
    "altstadthaus-koenigstrasse": [
      unsplash("1779778386825-508570178cce"),
      unsplash("1503387762-592deb58ef4e"),
      unsplash("1633759593085-1eaeb724fc88"),
    ],
    "einfamilienhaus-travemuende": [
      unsplash("1566071634551-224a639a1c7d"),
      unsplash("1635424710928-0544e8512eae"),
      unsplash("1527484728228-e601f31ddefa"),
    ],
    "gewerbehalle-herrenwyk": [
      unsplash("1686858230933-430406195ea9"),
      unsplash("1772057594578-3ec47554bbd8"),
      unsplash("1679232065280-7551023ee326"),
    ],
    "altbau-gaube-innenstadt": [
      unsplash("1580642866497-dde93c97492b"),
      unsplash("1617459973560-33aea09d1c22"),
      unsplash("1519115226133-94046df0e272"),
    ],
    "solarpark-daenischburg": [
      unsplash("1624397640148-949b1732bb0a"),
      unsplash("1583345237708-add35a664d77"),
      unsplash("1637417494521-78b4d1d33029"),
    ],
  },

  team: {
    torben: unsplash("1530983822321-fcac2d3c0f06", 900),
    kira: unsplash("1716037991590-c975184b37df", 900),
    matthes: unsplash("1461938337379-4b537cd2db74", 900),
    selin: unsplash("1566821500855-7976094bcfa4", 900),
    wiebke: unsplash("1728379891769-5429538b17fc", 900),
    finn: unsplash("1621905252507-b35492cc74b4", 900),
    meike: unsplash("1758691737605-69a0e78bd193", 900),
  },

  testimonialAvatars: [
    unsplash("1530983822321-fcac2d3c0f06", 200),
    unsplash("1716037991590-c975184b37df", 200),
    unsplash("1461938337379-4b537cd2db74", 200),
  ],

  locations: [
    unsplash("1779778386825-508570178cce", 1200),
    unsplash("1764725244223-31c386c74a7f", 1200),
    unsplash("1778774692105-7ae1085f7a3f", 1200),
    unsplash("1764015658454-45de2ce59f38", 1200),
  ],

  karriere: [
    unsplash("1683115098516-9b8d5c643b5b", 1200),
    unsplash("1705919034530-5da5e29b3aa4", 1200),
  ],

  about: unsplash("1426927308491-6380b6a9936f", 1400),
};
