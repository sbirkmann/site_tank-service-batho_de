import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ContactCta } from '@/components/ContactCta';
import { Figure } from '@/components/Figure';
import { Picture } from '@/components/Picture';
import { Icon } from '@/components/Icon';
import { SectionHead } from '@/components/SectionHead';
import { FactBar } from '@/components/FactBar';
import { site } from '@/lib/data/site';
export const metadata: Metadata = { title: 'Unser Betrieb', description: 'Tank Service Batho in Ubstadt-Weiher: langjähriger Fachbetrieb für Behälterschutz mit Fachkompetenz, TÜV-geprüft. Geschäftsführer Sebastian Batho.' };
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` });
export default function Page() {
  return (
    <>
      <PageHero eyebrow="Unser Betrieb" title="Langjährige Erfahrung. Umfassende Beratung." lead="Unsere langjährige Erfahrung und Fachkompetenz versetzt uns in die Lage, Sie jederzeit umfassend zu Ihrem Vorhaben zu beraten." crumbs={[{ label: 'Unser Betrieb' }]}
        media={<Figure name="fahrzeug-header" alt="Montagefahrzeug von Tank Service Batho" caption="Tankschutz-Montagefahrzeug" num="Fig. 01" ratio="2.4 / 1" sizes="(min-width: 1024px) 42vw, 100vw" priority />} />
      <section className="trust" aria-label="Fakten zum Betrieb"><div className="container"><FactBar items={[
        { label: 'Qualifikation', value: 'TÜV-geprüft', note: 'Qualifiziertes Unternehmen' },
        { label: 'Betrieb', value: 'Seit vielen Jahren', note: 'Leistung und Qualität im Behälterschutz' },
        { label: 'Team', value: 'Zwei Monteure', note: 'Tankschutz-Fahrzeuge stets doppelt besetzt' },
        { label: 'Region', value: 'Ubstadt-Weiher', note: 'Landkreis Karlsruhe' },
      ]} /></div></section>

      <section className="section">
        <div className="container">
          <SectionHead num="01" eyebrow="Über uns" title="Fachbetrieb für Behälterschutz aus Ubstadt-Weiher." split={false} />
          <div className="story">
            <div className="story__row">
              <div className="story__text">
                <p className="lead reveal">Als qualifiziertes, TÜV-geprüftes Unternehmen mit langjähriger Erfahrung sind wir der kompetente Partner rund um Ihre Tankanlage. Seit vielen Jahren steht unser Betrieb für Leistung und Qualität im Bereich Behälterschutz.</p>
                <p className="reveal" style={d(80)}>Mit den sich wandelnden Anforderungen, vor allem im Bereich Umwelttechnik, haben wir unser Leistungsspektrum kontinuierlich erweitert. Heute umfasst es Tankreinigung, Tankschutz, Demontage und Neutankanlagen.</p>
                <Link href="/leistungen/" className="link-arrow reveal" style={d(140)}>Alle Leistungen <Icon name="arrow" /></Link>
              </div>
              <div className="story__media"><Figure name="baustelle-erdtanks" alt="Erdtanks in der Baugrube mit Bagger" caption="Erdtanks in der Baugrube, Neubauprojekt" num="Fig. 02" /></div>
            </div>
            <div className="story__row story__row--rev">
              <div className="story__text">
                <div className="story__k reveal"><span className="num">02</span><span className="eyebrow">Arbeitsweise</span></div>
                <h2 className="reveal" style={d(60)}>Erst besichtigen, dann beraten, dann ausführen.</h2>
                <p className="reveal" style={d(120)}>Am Anfang all unserer Projekte steht die Besichtigung Ihrer Räumlichkeiten und ein umfassendes Beratungsgespräch. Wir stellen die Lösung zusammen, die genau zu Ihren Ansprüchen und Ihrem Kostenrahmen passt, und sorgen dafür, dass während der Baumaßnahmen so wenig Unannehmlichkeiten wie möglich entstehen.</p>
                <p className="reveal" style={d(160)}>Bei der Tankreinigung erhalten Sie vor Ort einen mündlichen Tankzustandsbericht unserer Monteure und eine Beratung zu möglichen Sanierungsmaßnahmen. Nach Abschluss der Arbeiten stellen wir einen Lieferschein mit Revisionsbericht aus.</p>
              </div>
              <div className="story__media"><Figure name="monteur-im-tank" alt="Monteur von Tank Service Batho bei der Arbeit im Inneren eines Tanks" caption="Manuelle Reinigung und Prüfung im Tank" num="Fig. 03" sizes="(min-width: 900px) 50vw, 100vw" /></div>
            </div>
            <div className="story__row">
              <div className="story__text">
                <div className="story__k reveal"><span className="num">03</span><span className="eyebrow">Qualifikation und Ausstattung</span></div>
                <h2 className="reveal" style={d(60)}>Geschultes Personal, aktuelle Technik.</h2>
                <p className="reveal" style={d(120)}>Als langjähriger Fachbetrieb legen wir großen Wert auf die Aus- und Weiterbildung unserer Mitarbeiter. So können wir Ihnen stets die aktuellste Technik für Ihre Installationen empfehlen.</p>
                <dl className="spec reveal" style={d(180)}>
                  <div><dt>Qualifikation</dt><dd>TÜV-geprüftes Unternehmen</dd></div>
                  <div><dt>Fahrzeuge</dt><dd>GGVS-Montage-LKW, stets mit zwei Monteuren besetzt</dd></div>
                  <div><dt>Ausrüstung</dt><dd>Alle erforderlichen Werkzeuge, Maschinen und Geräte werden bereitgestellt</dd></div>
                  <div><dt>Zwischenlager</dt><dd>Heizöl bis 5.000 Liter ohne Mehrkosten, nach Absprache 30.000 Liter oder mehr</dd></div>
                  <div><dt>Innenhüllen</dt><dd>Mit Bauartzulassung, vakuumüberwacht über montiertes Leckwarngerät</dd></div>
                  <div><dt>Ölschäden</dt><dd>Technische Geräte und Fahrzeuge für schnelle, professionelle Hilfe</dd></div>
                </dl>
              </div>
              <div className="story__media"><Figure name="domschacht-absaugung" alt="Geöffneter Domschacht mit Absaugschlauch" caption="Geöffneter Domschacht mit Absaugung" num="Fig. 04" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <SectionHead num="04" eyebrow="Das Team" title="Ihr Ansprechpartner" lead="Ihr Ansprechpartner berät Sie persönlich zu Ihrem Vorhaben. Rufen Sie einfach an oder schreiben Sie uns." />
          <div className="person reveal">
            <div className="person__photo"><Picture name="sebastian-batho" alt="Sebastian Batho, Geschäftsführer" sizes="118px" /></div>
            <div className="person__body">
              <span className="num">Geschäftsführer</span>
              <h3>{site.ceo}</h3>
              <p className="person__p">{site.name}, {site.street}, {site.zip} {site.city}</p>
            </div>
            <ul className="person__contact">
              <li><span className="fact__label">Telefon</span><a href={site.phoneHref}>{site.phone}</a></li>
              <li><span className="fact__label">E-Mail</span><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><span className="fact__label">Fax</span><span>{site.fax}</span></li>
            </ul>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
