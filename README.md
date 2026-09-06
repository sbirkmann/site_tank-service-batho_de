# Tank Service Batho – Website-Relaunch

Statische Website auf Basis von [Astro](https://astro.build). Alle Inhalte (Texte, Leistungen,
Kontaktdaten, Bilder) stammen von der bisherigen Website www.tank-service-batho.de und wurden
ausschließlich sprachlich überarbeitet und neu strukturiert.

## Entwicklung

```bash
npm install
npm run dev      # Entwicklungsserver
npm run build    # statischer Build nach ./dist
npm run preview  # Build lokal ansehen
```

Der Inhalt von `dist/` kann auf jeden Webspace (Apache, nginx, IONOS-Webhosting …) kopiert werden.

## Struktur

- `src/data/site.ts` – Firmendaten, Adresse, Telefon, E-Mail (eine zentrale Stelle)
- `src/data/services.ts` – Inhalte aller acht Leistungsseiten als strukturierte Blöcke
- `src/components/` – wiederverwendbare Bausteine (Header, Footer, Logo, Hero, Karten, Formular …)
- `src/pages/` – Seiten; `leistungen/[slug].astro` erzeugt die Detailseiten aus den Daten
- `src/styles/global.css` – Design-Tokens (Farben, Typografie, Abstände) und Basis-Utilities
- `src/assets/img/` – Originalbilder der alten Website (werden beim Build automatisch als WebP in mehreren Größen optimiert)
- `public/fonts/` – selbst gehostete Schriften (Archivo, Inter, IBM Plex Mono), kein Google-Fonts-Aufruf

## Kontaktformular

Das Formular ist statisch. Wird die Umgebungsvariable `PUBLIC_FORM_ENDPOINT` beim Build gesetzt
(z. B. ein Formmail-Skript des Hosters oder ein Dienst wie Formspree), sendet das Formular per
`POST` dorthin. Ohne Endpoint öffnet es das E-Mail-Programm des Besuchers mit vorbereiteter
Nachricht an die Kontaktadresse.

```bash
PUBLIC_FORM_ENDPOINT=https://example.com/formmail npm run build
```

## Hinweise zum Inhalt

- **Logo:** Auf der alten Website gab es keine Logo-Datei. Die Bildmarke wurde als SVG aus dem
  blauen „TS“-Tank-Emblem rekonstruiert, das auf dem Fahrzeugfoto zu sehen ist.
- **Neutankanlagen:** Die alte Unterseite war leer. Die neue Seite verwendet nur Aussagen von der
  Leistungsübersicht und der Betriebsseite.
- **Referenzprojekte:** Die drei Bilder der alten Referenzseite wurden unverändert übernommen.
- Eine Datenschutzerklärung war auf der alten Website nicht vorhanden und wurde deshalb nicht erfunden.
