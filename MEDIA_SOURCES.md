# Medien-Audit — TRAVEDACH

Stand: 31.10.2026 · Branch `legal/medien-audit` · Prüfer: Claude Opus 5 im Auftrag von PageDuo

Geprüft wurden alle Bilder, Videos, Grafiken, Schriften und Icon-Bibliotheken
dieses Repositorys auf Herkunft, Lizenzlage und Kennzeichnungspflicht nach
Art. 50 Abs. 4 EU AI Act (in Kraft seit 02.08.2026).

**Grundregel dieses Dokuments: Es wird nichts geraten.** Wo die Herkunft nicht
belegbar ist, steht „unklar" — nicht die wahrscheinlichste Vermutung.

---

## Überblick

| Ampel | Anzahl | |
|---|---|---|
| 🟢 GRÜN | 1 | die Schriften |
| 🟡 GELB | 46 | Unsplash-Motive: Quelle belegt, Lizenz und KI-Status nicht |
| 🔴 ROT | 0 | — |

Kein Medium wurde gekennzeichnet, gelöscht oder ausgetauscht. Das war in
diesem Schritt so vorgesehen.

---

## Der eine Befund, der alles andere trägt

Die Unsplash-Fotoseiten sind **nicht erreichbar**. Die lange Zahlenkette in
`images.unsplash.com/photo-1600880292203-757bb62b4baf` ist die Kennung des
Bildservers, nicht der Adressteil der Fotoseite; `unsplash.com/photos/<diese ID>`
antwortet mit 404. Ohne die Fotoseite lässt sich je Bild nicht feststellen:

- wer es aufgenommen hat,
- ob die freie Unsplash-Lizenz oder die abweichende **Unsplash+**-Lizenz gilt,
- ob Unsplash es als **KI-generiert** ausweist.

Der Dateikopf von `src/lib/images.ts` nennt die Unsplash-Lizenz und hält fest, die Motive seien
visuell geprüft worden. Das ist eine Angabe im Repo und zählt als Hinweis —
aber nicht als Nachweis gegenüber einem Rechteinhaber. Deshalb stehen alle
Unsplash-Motive auf 🟡, nicht auf 🟢.

**Was 🟢 daraus machen würde:** je Motiv die Fotoseite über die Bildersuche von
Unsplash auflösen und Fotograf, Lizenzart und KI-Kennzeichnung notieren. Oder
die Motive durch eigene beziehungsweise beauftragte Fotografie ersetzen — was
der Dateikopf für den echten Kundenbetrieb ohnehin vorsieht.

---

## Inventar

### Extern eingebundene Fotos (Unsplash)

Alle 44 Motive werden vom Bildserver `images.unsplash.com` geladen und liegen
**nicht** im Repository. Für sie gilt durchgehend: Quelle Unsplash (durch den
Auslieferungshost belegt), Fotograf **unklar**, Lizenzart **unklar**, KI
**unklar**, fotorealistisch ja, Ampel 🟡, keine Kennzeichnung gesetzt.

| Einsatzort im Code | Unsplash-ID | Motiv laut Repo |
|---|---|---|
| `hero` | `1635424709961-f3a150459ad4` | *(im Repo nicht beschrieben)* |
| `leistungenHero, gallery` | `1686858230933-430406195ea9` | Wiederverwendung des "Flachdach-Kante"-Motivs aus der Referenzen-Galerie als ruhiger, handwerklich hochwertiger Einstieg in die Leistungsübersicht. |
| `referenzenHero, aerialShowcase` | `1755114203680-d39d95efa82c` | Sauberer Drohnen-Blick auf ein frisch eingedecktes Steildach. |
| `teamHero` | `1635424824800-692767998d07` | *(im Repo nicht beschrieben)* |
| `ablaufHero` | `1742112125635-6f8201c6ee3f` | *(im Repo nicht beschrieben)* |
| `faqHero` | `1642522029691-029b5a432954` | *(im Repo nicht beschrieben)* |
| `services.steildach` | `1614418583513-8e96d9160333` | *(im Repo nicht beschrieben)* |
| `services.flachdach` | `1768677432858-b9a8608dd849` | Echtes Flachdach mit Lüftungs-/Klimatechnik aus der Vogelperspektive. |
| `services.gauben, gallery` | `1519115226133-94046df0e272` | *(im Repo nicht beschrieben)* |
| `services.daemmung` | `1752852381113-7d93abc9d7ea` | *(im Repo nicht beschrieben)* |
| `services.solar, aerialShowcase` | `1694327671725-e2a81cda3436` | *(im Repo nicht beschrieben)* |
| `services.klempner` | `1634853982486-c06f0e17940f` | *(im Repo nicht beschrieben)* |
| `process` | `1772442198624-4fc4d7281e89` | *(im Repo nicht beschrieben)* |
| `process, gallery` | `1503387762-592deb58ef4e` | *(im Repo nicht beschrieben)* |
| `process, gallery` | `1633759593085-1eaeb724fc88` | *(im Repo nicht beschrieben)* |
| `process` | `1758599543152-a73184816eba` | Heller, freundlicher Handschlag statt der bisherigen dunklen/unklaren Aufnahme. |
| `transformHeader` | `1635961134620-5da36ab4ad72` | *(im Repo nicht beschrieben)* |
| `aerialShowcase` | `1543155704-976b3cb78a8b` | *(im Repo nicht beschrieben)* |
| `aerialShowcase` | `1697486235884-e473b6884504` | *(im Repo nicht beschrieben)* |
| `aerialShowcase` | `1532608159195-6d28b5be267b` | *(im Repo nicht beschrieben)* |
| `gallery, locations` | `1779778386825-508570178cce` | *(im Repo nicht beschrieben)* |
| `gallery` | `1566071634551-224a639a1c7d` | *(im Repo nicht beschrieben)* |
| `gallery` | `1635424710928-0544e8512eae` | *(im Repo nicht beschrieben)* |
| `gallery` | `1527484728228-e601f31ddefa` | *(im Repo nicht beschrieben)* |
| `gallery` | `1772057594578-3ec47554bbd8` | *(im Repo nicht beschrieben)* |
| `gallery` | `1679232065280-7551023ee326` | *(im Repo nicht beschrieben)* |
| `gallery` | `1580642866497-dde93c97492b` | *(im Repo nicht beschrieben)* |
| `gallery` | `1617459973560-33aea09d1c22` | *(im Repo nicht beschrieben)* |
| `gallery` | `1624397640148-949b1732bb0a` | *(im Repo nicht beschrieben)* |
| `gallery` | `1583345237708-add35a664d77` | *(im Repo nicht beschrieben)* |
| `gallery` | `1637417494521-78b4d1d33029` | *(im Repo nicht beschrieben)* |
| `team.torben, testimonialAvatars` | `1530983822321-fcac2d3c0f06` | *(im Repo nicht beschrieben)* |
| `team.kira, testimonialAvatars` | `1716037991590-c975184b37df` | *(im Repo nicht beschrieben)* |
| `team.matthes, testimonialAvatars` | `1461938337379-4b537cd2db74` | *(im Repo nicht beschrieben)* |
| `team.selin` | `1566821500855-7976094bcfa4` | *(im Repo nicht beschrieben)* |
| `team.wiebke` | `1728379891769-5429538b17fc` | *(im Repo nicht beschrieben)* |
| `team.finn` | `1621905252507-b35492cc74b4` | *(im Repo nicht beschrieben)* |
| `team.meike` | `1758691737605-69a0e78bd193` | *(im Repo nicht beschrieben)* |
| `locations` | `1764725244223-31c386c74a7f` | *(im Repo nicht beschrieben)* |
| `locations` | `1778774692105-7ae1085f7a3f` | *(im Repo nicht beschrieben)* |
| `locations` | `1764015658454-45de2ce59f38` | *(im Repo nicht beschrieben)* |
| `karriere` | `1683115098516-9b8d5c643b5b` | *(im Repo nicht beschrieben)* |
| `karriere` | `1705919034530-5da5e29b3aa4` | *(im Repo nicht beschrieben)* |
| `about` | `1426927308491-6380b6a9936f` | *(im Repo nicht beschrieben)* |

### Extern eingebundene Videos (Pexels)

Geladen von `videos.pexels.com`, **nicht** im Repository. Für alle gilt:
Quelle Pexels (durch den Auslieferungshost belegt), Urheber **unklar**,
Lizenzart **unklar**, KI **unklar**, fotorealistisch ja, Ampel 🟡, keine
Kennzeichnung gesetzt. Die Video-Seite bei Pexels lässt sich aus der
Datei-ID nicht herleiten, genauso wenig wie bei Unsplash.

| Einsatzort im Code | Datei-ID | Motiv laut Repo |
|---|---|---|
| `heroAerial` | `4770380` | Drohnenflug über ein Wohngebiet mit Einfamilienhausdächern — Hero-Hintergrund Startseite. |
| `transformAerial` | `4198818` | Drohnenaufnahme über einem Haus während der Sanierung — Kopfbereich /verwandlung. |

### Schriften

Eingebunden über `next/font/google`. Next.js lädt die Schriftdateien zur
Bauzeit herunter und liefert sie von der eigenen Domain aus; beim Seitenaufruf
entsteht **kein Aufruf an Google**. Google Fonts stehen unter der SIL Open
Font License. 🟢

### Icon-Bibliotheken

Keine. Die Symbole sind Inline-SVG im Quelltext. 🟢

---

## Zusätzliche Prüfungen

### Öffentliches Repository und Weitergabe der Originaldateien

`pageduo/dachdecker-demo` ist auf GitHub **öffentlich**. Jede im Repository liegende
Bilddatei wird damit als Originaldatei zum Download angeboten.

Im Repository liegen keine Fotos — die Unsplash-Motive werden extern geladen.
Betroffen sind nur die Gerüstgrafiken aus der Next.js-Vorlage (MIT) und das
Favicon. Beide dürfen weitergegeben werden. **Kein Befund.**

### Externe Aufrufe beim Seitenaufruf

Beim Laden der Live-Seite werden die Motive von `images.unsplash.com` geholt.
Dabei erfährt Unsplash die **IP-Adresse jedes Besuchers**, dazu Zeitpunkt,
Browser und die verweisende Seite. Eine Einwilligung wird nicht eingeholt, und
die Datenschutzerklärung der Demo verweist auf PageDuo, deren Erklärung sagt:
„Beim Aufruf werden keine Inhalte von Drittanbietern geladen."

**Das deckt sich nicht.** Entweder die Bilder wandern ins Repository (sofern die
Lizenz das erlaubt — siehe oben, derzeit ungeklärt), oder die Datenschutz-
erklärung muss den Abruf benennen. Hier wurde nichts umgebaut.

---

## KI-Kennzeichnung

**Es wurde keine gesetzt.** Art. 50 Abs. 4 EU AI Act verlangt die Offenlegung bei
KI-erzeugten Medien, die echt wirken. Ob eines der Motive KI-erzeugt ist, lässt
sich ohne die Unsplash-Fotoseiten nicht feststellen — und die Regel aus dem
Prüfauftrag lautet: Bei „unklar" **nicht** kennzeichnen, sondern melden.

Eine Kennzeichnung auf Verdacht wäre nicht die sichere Seite, sondern eine
falsche Angabe über ein möglicherweise von Hand fotografiertes Bild.

## Bildnachweise

Keine erforderlich. Die Unsplash-Lizenz verlangt keine Namensnennung. Sollte sich
bei der Klärung herausstellen, dass ein Motiv unter Unsplash+ steht, ist dessen
Lizenz gesondert zu prüfen.

---

## Klärung nötig

| Was | Wie viele | Warum offen |
|---|---|---|
| KI-Status der Unsplash-Motive | 44 | Fotoseite nicht erreichbar |
| Lizenzart (frei oder Unsplash+) | 44 | dito |

---

## Werkzeuge und Methode

`exiftool`, `ffprobe` und ImageMagick stehen auf diesem Rechner nicht zur
Verfügung. Die Metadaten wurden deshalb direkt aus den Dateien gelesen: JPEG-
Segmente (EXIF, XMP, IPTC, Kommentar, C2PA), PNG-Textkammern und die Kopf-Atome
von MP4. Gesucht wurde nach `Software`, `Artist`, `Creator`, `Credit`,
`Copyright`, `DigitalSourceType` sowie nach Spuren bekannter KI-Werkzeuge.

Dazu: Git-Historie der Dateien, Kommentare und Dokumente im Repo, Sichtprüfung,
und für die externen Aufrufe eine Aufzeichnung aller Netzwerk-Anfragen der
Live-Seite.
