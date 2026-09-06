# Tank Service Batho – Website-Relaunch

Statische Website auf Basis von [Next.js](https://nextjs.org) (App Router, `output: 'export'`). Alle Inhalte (Texte, Leistungen,
Kontaktdaten, Bilder) stammen von der bisherigen Website www.tank-service-batho.de und wurden
ausschließlich sprachlich überarbeitet und neu strukturiert.

## Entwicklung

```bash
npm install
npm run images   # WebP-Varianten der Originalfotos erzeugen (läuft auch automatisch vor dem Build)
npm run dev      # Entwicklungsserver (http://localhost:3000)
npm run build    # statischer Export nach ./out
```

Der Inhalt von `out/` kann auf jeden Webspace kopiert werden. Das `Dockerfile` baut die Site und liefert sie über nginx aus (Coolify).

## Struktur

- `lib/data/site.ts` – Firmendaten, Adresse, Telefon, E-Mail (eine zentrale Stelle)
- `lib/data/services.ts` – Inhalte aller acht Leistungsseiten als strukturierte Blöcke
- `components/` – wiederverwendbare Bausteine: Header, Footer, Logo, PageHero, Breadcrumbs, SectionHead, FactBar, Figure, ServiceList, Blocks (Prozess/Optionen), ServiceNav, ContactCta, ContactForm
- `app/` – Routen; `app/leistungen/[slug]/page.tsx` erzeugt die Detailseiten aus den Daten
- `app/styles/base.css` – Design-Tokens (Farben, Typografie, Spacing-System) und Utilities; `components.css` – Komponentenstile (BEM)
- `public/img/` – Originalbilder der alten Website; `scripts/images.mjs` erzeugt daraus WebP-Varianten in `public/img/gen` und `lib/images.json`
- `public/fonts/` – selbst gehostete Schriften (Archivo, Inter, IBM Plex Mono), kein Google-Fonts-Aufruf

## Kontaktformular

Das Formular ist statisch. Wird die Umgebungsvariable `NEXT_PUBLIC_FORM_ENDPOINT` beim Build gesetzt
(z. B. ein Formmail-Skript des Hosters oder ein Dienst wie Formspree), sendet das Formular per
`POST` dorthin. Ohne Endpoint öffnet es das E-Mail-Programm des Besuchers mit vorbereiteter
Nachricht an die Kontaktadresse.

```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://example.com/formmail npm run build
```

## Hinweise zum Inhalt

- **Logo:** Auf der alten Website gab es keine Logo-Datei. Die Bildmarke wurde als SVG aus dem
  blauen „TS“-Tank-Emblem rekonstruiert, das auf dem Fahrzeugfoto zu sehen ist.
- **Neutankanlagen:** Die alte Unterseite war leer. Die neue Seite verwendet nur Aussagen von der
  Leistungsübersicht und der Betriebsseite.
- **Referenzprojekte:** Die drei Bilder der alten Referenzseite wurden unverändert übernommen.
- Eine Datenschutzerklärung war auf der alten Website nicht vorhanden und wurde deshalb nicht erfunden.
