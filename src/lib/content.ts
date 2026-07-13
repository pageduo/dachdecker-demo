export const company = {
  name: "TRAVEDACH",
  fullName: "Travedach Bedachungen GmbH",
  founded: 1997,
  city: "Lübeck",
  claim: "Handwerk mit Höhe.",
  subline:
    "Steildach, Flachdach und energetische Dachsanierung für Privat- und Gewerbeimmobilien in Lübeck und der gesamten Hansestadt-Region.",
  usp: "Meisterbetrieb mit eigener Zimmerei- und Klempnerkolonne, alles aus einer Hand, von der Notreparatur bis zur Komplettsanierung.",
  phone: "+49 451 288 41 90",
  phoneHref: "tel:+494512884190",
  email: "anfrage@travedach-demo.de",
  address: {
    street: "Beckergrube 42",
    zip: "23552",
    city: "Lübeck",
  },
  hours: [
    { day: "Montag – Freitag", time: "7:00 – 17:00 Uhr" },
    { day: "Samstag", time: "9:00 – 12:00 Uhr (nach Vereinbarung)" },
    { day: "Sonntag", time: "Notdienst-Rufbereitschaft" },
  ],
  social: [{ label: "Instagram" }, { label: "Facebook" }, { label: "LinkedIn" }],
};

export const navPages = [
  { href: "/", label: "Start", number: "01" },
  { href: "/leistungen", label: "Leistungen", number: "02" },
  { href: "/verwandlung", label: "Verwandlung", number: "03" },
  { href: "/referenzen", label: "Referenzen", number: "04" },
  { href: "/team", label: "Team", number: "05" },
  { href: "/ablauf", label: "Ablauf", number: "06" },
  { href: "/preise", label: "Preise", number: "07" },
  { href: "/faq", label: "FAQ", number: "08" },
  { href: "/karriere", label: "Karriere", number: "09" },
  { href: "/standorte", label: "Standorte", number: "10" },
  { href: "/kontakt", label: "Kontakt", number: "11" },
] as const;

export const primaryNavHrefs = ["/", "/leistungen", "/referenzen", "/team", "/kontakt"];

export const stats = [
  { value: 28, suffix: "", label: "Jahre Erfahrung" },
  { value: 640, suffix: "+", label: "sanierte Dächer" },
  { value: 97, suffix: "%", label: "Weiterempfehlung" },
  { value: 19, suffix: "", label: "Fachkräfte im Team" },
];

export const services = [
  {
    key: "steildach",
    title: "Steildach-Eindeckung",
    description:
      "Neueindeckung und Reparatur mit Tondachziegeln, Schiefer oder Betonstein, fachgerecht verlegt nach den Regeln des Dachdeckerhandwerks.",
  },
  {
    key: "flachdach",
    title: "Flachdach-Abdichtung",
    description:
      "Bitumen-, Folien- und Gründach-Systeme für Wohn- und Gewerbebauten, inklusive Wärmedämmung und fachgerechter Entwässerungsplanung.",
  },
  {
    key: "gauben",
    title: "Dachfenster & Gauben",
    description:
      "Mehr Licht und Raum unterm Dach: Einbau von Dachflächenfenstern, Schleppgauben und Dachausbauten aus einer Hand.",
  },
  {
    key: "daemmung",
    title: "Dachdämmung & energetische Sanierung",
    description:
      "Auf- und Zwischensparrendämmung nach GEG-Standard: spürbar weniger Heizkosten und förderfähig nach BEG.",
  },
  {
    key: "solar",
    title: "Photovoltaik auf dem Dach",
    description:
      "Statikprüfung, Unterkonstruktion und Montage von PV-Anlagen, in Kombination mit der Dacheindeckung aus einer Hand geplant.",
  },
  {
    key: "klempner",
    title: "Klempnerarbeiten & Dachrinnen",
    description:
      "Dachrinnen, Fallrohre und Blecharbeiten in Zink, Kupfer oder Titanzink, inklusive Wartung und Reparatur im Notdienst.",
  },
] as const;

export const processSteps = [
  {
    title: "Bestandsaufnahme vor Ort",
    description:
      "Wir prüfen Dachfläche, Unterkonstruktion und Bausubstanz vor Ort und dokumentieren Schäden und Sanierungsbedarf fotografisch.",
  },
  {
    title: "Angebot & Planung",
    description:
      "Sie erhalten ein transparentes Festpreisangebot inklusive Material- und Zeitplan, auf Wunsch mit Fördermittel-Beratung für die Dämmung.",
  },
  {
    title: "Ausführung auf dem Dach",
    description:
      "Unsere Kolonnen führen Gerüstbau, Abdeckung, Zimmerer-, Dachdecker- und Klempnerarbeiten koordiniert und wetterfest abgesichert aus.",
  },
  {
    title: "Abnahme & Garantie",
    description:
      "Bei der gemeinsamen Abnahme erklären wir alle Details und übergeben Ihre Sanierungs- und Gewährleistungsunterlagen.",
  },
] as const;

// Etappen der interaktiven Verwandlungs-Illustration (gepinntes Scrollytelling
// auf /verwandlung). Jede Stage hebt einen Bereich der Haus-Illustration hervor.
export const transformStages = [
  {
    key: "eindeckung",
    title: "Neue Dacheindeckung",
    description:
      "Alte, poröse Ziegel raus. Neue Tondachziegel, Schiefer oder Betonstein sorgen für dichten, langlebigen Witterungsschutz.",
  },
  {
    key: "gauben",
    title: "Dachfenster & Gauben",
    description:
      "Ein Dachflächenfenster oder eine Schleppgaube holt Tageslicht und nutzbare Raumhöhe in den Dachgeschossausbau.",
  },
  {
    key: "daemmung",
    title: "Energetische Dämmung",
    description:
      "Aufsparrendämmung nach aktuellem GEG-Standard senkt den Heizwärmebedarf spürbar und ist förderfähig.",
  },
  {
    key: "solar",
    title: "Photovoltaik-Anlage",
    description:
      "Die Dachfläche wird zum Kraftwerk: Wir planen Unterkonstruktion und Statik passend zur neuen Eindeckung mit.",
  },
  {
    key: "dachrinne",
    title: "Dachrinne & Entwässerung",
    description:
      "Neue Rinnen und Fallrohre aus Titanzink leiten Regenwasser sicher ab und schützen Fassade und Fundament.",
  },
  {
    key: "fassade",
    title: "Fassadenanschluss",
    description:
      "Saubere Anschlüsse an Giebel, Kamin und Fassade verhindern Wärmebrücken und Feuchteschäden dauerhaft.",
  },
] as const;

export const galleryFilters = [
  "Alle",
  "Sanierung",
  "Steildach",
  "Flachdach",
  "Gauben & Dachfenster",
  "Solar",
] as const;

export const galleryProjects = [
  {
    slug: "altstadthaus-koenigstrasse",
    title: "Altstadthaus Königstraße",
    category: "Sanierung",
    year: 2024,
    description:
      "Komplettsanierung eines denkmalgeschützten Giebelhauses in der Lübecker Altstadt: neue Lattung, Aufsparrendämmung und historisch passende Tondachziegel, von der ersten Planung bis zur Ausführung auf dem Dach begleitet.",
    hasBeforeAfter: true,
  },
  {
    slug: "einfamilienhaus-travemuende",
    title: "Einfamilienhaus Travemünde",
    category: "Steildach",
    year: 2023,
    description:
      "Neueindeckung eines Einfamilienhauses nahe der Ostseeküste mit sturmsicheren Bitumenschindeln und verstärkter Windsogsicherung, wichtig in der exponierten Lage an der Trave-Mündung.",
    hasBeforeAfter: false,
  },
  {
    slug: "gewerbehalle-herrenwyk",
    title: "Gewerbehalle Herrenwyk",
    category: "Flachdach",
    year: 2024,
    description:
      "Abdichtung einer 1.800 m² großen Lagerhallen-Dachfläche mit mechanisch befestigter Kunststoffbahn und neuer Notentwässerung nach aktueller Flachdachrichtlinie.",
    hasBeforeAfter: false,
  },
  {
    slug: "altbau-gaube-innenstadt",
    title: "Altbau-Gaube Innenstadt",
    category: "Gauben & Dachfenster",
    year: 2022,
    description:
      "Einbau einer Schleppgaube und zweier Dachflächenfenster in ein Altbau-Staffelgeschoss: mehr Wohnraum und Tageslicht unterm Dach, ohne den Charakter der Fassade zu verändern.",
    hasBeforeAfter: false,
  },
  {
    slug: "solarpark-daenischburg",
    title: "Solaranlage Gewerbepark Dänischburg",
    category: "Solar",
    year: 2025,
    description:
      "Planung und Montage einer 84-kWp-Photovoltaikanlage auf einem Gewerbedach, inklusive Statikprüfung und Anpassung der Unterkonstruktion an die bestehende Trapezblecheindeckung.",
    hasBeforeAfter: false,
  },
] as const;

// Etappen des Projekt-Zeitraffers auf der Startseite (Altstadthaus Königstraße).
// Etappen des Luftbild-Showcases auf der Startseite: ein Rundgang aus der
// Vogelperspektive durch verschiedene Dachlandschaften und -leistungen, statt
// eines einzelnen (unrealistischen) Vorher-Nachher-Zeitraffers.
export const aerialShowcaseStages = [
  { label: "Ihr Dach aus der Vogelperspektive", time: "0:00", description: "Ein sauber eingedecktes Steildach, Maßstab für jede unserer Sanierungen." },
  { label: "Dachlandschaften der Region", time: "0:08", description: "Von der Hansestadt bis ins Umland: gewachsene Dachlandschaften, die wir pflegen und erneuern." },
  { label: "Jedes Detail zählt", time: "0:16", description: "Ob Tonziegel oder Schindel: Die Eindeckung entscheidet über Dichtigkeit und Lebensdauer." },
  { label: "Photovoltaik mitgedacht", time: "0:24", description: "Solarmodule werden direkt bei der Neueindeckung statisch und optisch integriert." },
  { label: "Ergebnis, das überzeugt", time: "0:32", description: "Ein Dach, das aus jeder Perspektive überzeugt, auch von oben." },
] as const;

export const pricingTiers = [
  {
    title: "Notdienst & Reparatur",
    price: "ab 280 €",
    description: "Sturmschäden, undichte Stellen und kleinere Reparaturen, meist innerhalb von 48 Stunden vor Ort.",
    features: ["Schadensaufnahme & Soforthilfe", "Ziegel- und Rinnenreparatur", "Notabdichtung bei Sturmschäden"],
    highlighted: false,
  },
  {
    title: "Dachsanierung Komplett",
    price: "ab 180 €/m²",
    description: "Neueindeckung inklusive Dämmung, Lattung und Entwässerung, mit Festpreisgarantie nach Vor-Ort-Termin.",
    features: ["Neueindeckung & Dämmung", "Dachrinnen & Klempnerarbeiten", "Fördermittel-Beratung (BEG)"],
    highlighted: true,
  },
  {
    title: "Neubau & Aufstockung",
    price: "auf Anfrage",
    description: "Komplette Dachkonstruktionen für Neubau, Aufstockung oder Dachgeschossausbau inklusive Statik.",
    features: ["Zimmerer- & Dachdeckerarbeiten", "Gauben & Dachfenster", "Photovoltaik-Vorbereitung"],
    highlighted: false,
  },
] as const;

export const estimateCalculator = {
  roofSizes: [
    { label: "bis 100 m²", multiplier: 0.7 },
    { label: "100 – 200 m²", multiplier: 1 },
    { label: "200 – 350 m²", multiplier: 1.7 },
    { label: "über 350 m²", multiplier: 2.6 },
  ],
  base: 19800,
};

export const team = [
  {
    key: "torben",
    name: "Torben Wiechmann",
    role: "Gründer & Dachdeckermeister",
    bio: "Führt den Betrieb seit 1997 und leitet als Meister die Qualitätssicherung auf jeder Baustelle.",
  },
  {
    key: "kira",
    name: "Kira Lassen",
    role: "Bauleitung Steildach",
    bio: "Koordiniert Kolonnen, Material und Zeitplan bei Neueindeckungen und Sanierungen.",
  },
  {
    key: "matthes",
    name: "Matthes Brügge",
    role: "Klempner- & Entwässerungstechnik",
    bio: "Zuständig für Dachrinnen, Fallrohre und alle Blecharbeiten in Zink, Kupfer und Titanzink.",
  },
  {
    key: "selin",
    name: "Selin Aydemir",
    role: "Energieberatung & Dämmtechnik",
    bio: "Berät zu Dämmstandards, Fördermitteln und plant die energetische Sanierung mit.",
  },
  {
    key: "wiebke",
    name: "Wiebke Carstens",
    role: "Zimmerei & Holzbau",
    bio: "Fertigt Dachstühle, Gauben und Unterkonstruktionen in der betriebseigenen Zimmerei.",
  },
  {
    key: "finn",
    name: "Finn Ahlers",
    role: "Auszubildender Dachdecker",
    bio: "Lernt das Handwerk von Grund auf und unterstützt die Kolonnen auf jeder Baustelle.",
  },
  {
    key: "meike",
    name: "Meike Voss",
    role: "Kundenberatung & Büro",
    bio: "Erster Ansprechpartner am Telefon, koordiniert Termine, Angebote und Rückfragen.",
  },
] as const;

export const rating = {
  value: 4.9,
  count: 138,
  source: "Google-Rezensionen",
};

export const testimonials = [
  {
    quote:
      "Vom Erstgespräch bis zur Abnahme lief alles termingerecht. Das Gerüst stand pünktlich, die Baustelle war immer sauber.",
    name: "Familie Petersen",
    context: "Dachsanierung, Lübeck-Innenstadt",
  },
  {
    quote:
      "Nach dem Sturm war innerhalb von 24 Stunden jemand vor Ort und hat das Dach provisorisch abgedichtet. Das gibt Vertrauen.",
    name: "R. Sommerfeld",
    context: "Notdienst, Bad Schwartau",
  },
  {
    quote:
      "Die PV-Anlage wurde direkt mit der neuen Eindeckung geplant, so mussten wir nicht zweimal ein Gerüst bezahlen.",
    name: "M. Kruse",
    context: "Photovoltaik & Eindeckung, Herrenwyk",
  },
] as const;

export const faqs = [
  {
    question: "Wie schnell sind Sie bei einem Sturmschaden vor Ort?",
    answer:
      "Bei akuten Schäden sind wir in der Regel innerhalb von 24 bis 48 Stunden vor Ort und sichern das Dach provisorisch ab, bevor die endgültige Reparatur erfolgt.",
  },
  {
    question: "Übernehmen Sie auch die Beratung zu Fördermitteln bei der Dämmung?",
    answer:
      "Ja, bei energetischen Sanierungen beraten wir zu den aktuellen BEG-Förderprogrammen und stellen die notwendigen Nachweise für den Antrag zusammen.",
  },
  {
    question: "Wie lange dauert eine komplette Dachsanierung?",
    answer:
      "Je nach Dachfläche und Umfang zwischen einer und drei Wochen reine Bauzeit, bei laufendem Betrieb oder bewohntem Haus planen wir zusätzliche Wetterpuffer ein.",
  },
  {
    question: "Kann eine Photovoltaik-Anlage direkt mit der Dachsanierung kombiniert werden?",
    answer:
      "Ja, das empfehlen wir sogar ausdrücklich. Statik, Unterkonstruktion und Dachhaken werden dann direkt bei der Neueindeckung mitgeplant und montiert.",
  },
  {
    question: "In welchem Umkreis von Lübeck sind Sie tätig?",
    answer:
      "Unser Kerngebiet umfasst Lübeck, Travemünde und Bad Schwartau, weitere Standorte und Einsatzgebiete finden Sie auf der Seite „Standorte“.",
  },
  {
    question: "Bieten Sie auch Wartungsverträge für Dach und Dachrinnen an?",
    answer:
      "Ja, wir bieten jährliche Wartungsverträge inklusive Dachrinnenreinigung und Sichtprüfung an, besonders sinnvoll nach Sturmsaisons im Herbst.",
  },
] as const;

export const jobs = [
  {
    title: "Dachdecker:in (Geselle/Gesellin)",
    type: "Vollzeit",
    description: "Steildach- und Flachdacharbeiten in wechselnden Kolonnen rund um Lübeck und die Ostseeküste.",
  },
  {
    title: "Auszubildende:r Dachdecker:in",
    type: "Ausbildung",
    description: "Dreijährige Ausbildung mit Übernahmegarantie bei guter Leistung, Berufsschule in Lübeck.",
  },
  {
    title: "Bauleiter:in Dachsanierung",
    type: "Vollzeit",
    description: "Koordination von Baustellen, Material und Kolonnen sowie Kundenkommunikation vor Ort.",
  },
] as const;

export const locations = [
  {
    name: "Betriebshof Beckergrube",
    area: "Lübeck-Altstadt",
    isMain: true,
    mapQuery: "Beckergrube 42, 23552 Lübeck",
    description:
      "Unser Hauptsitz mit Meisterbüro, Materiallager und Fuhrpark liegt zwischen den Giebelhäusern der Lübecker Altstadt. Hier laufen alle Projekte zusammen.",
  },
  {
    name: "Standort Travemünde",
    area: "Lübeck-Travemünde",
    isMain: false,
    mapQuery: "Travemünde, Lübeck",
    description:
      "Ein festes Team betreut von hier aus Sanierungen und Notdienste entlang der windexponierten Ostseeküste.",
  },
  {
    name: "Bauhof Herrenwyk",
    area: "Lübeck-Herrenwyk",
    isMain: false,
    mapQuery: "Herrenwyk, Lübeck",
    description: "Unser Außenlager für Gerüstmaterial und Flachdach-Baustoffe liegt nahe dem Gewerbegebiet im Hafenbereich.",
  },
  {
    name: "Einsatzgebiet Umland",
    area: "Bad Schwartau · Herzogtum Lauenburg · Ostholstein",
    isMain: false,
    mapQuery: "Bad Schwartau",
    description: "Für größere Sanierungs- und Gewerbeprojekte sind unsere Kolonnen regelmäßig auch im Lübecker Umland im Einsatz.",
  },
] as const;
