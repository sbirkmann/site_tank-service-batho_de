import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ContactCta } from '@/components/ContactCta';
import { Figure } from '@/components/Figure';
import { SectionHead } from '@/components/SectionHead';
import type { ImageName } from '@/components/Picture';
export const metadata: Metadata = { title: 'Referenzprojekte', description: 'Referenzprojekte und Einblicke in die Arbeit von Tank Service Batho aus Ubstadt-Weiher.' };
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` });
const work: { img: ImageName; title: string; service: string; href: string; ctx: string; text: string; ratio?: string }[] = [
  { img: 'baustelle-erdtanks', title: 'Erdtanks in der Baugrube', service: 'Neutankanlagen', href: '/leistungen/neutankanlagen/', ctx: 'Neubau, Baustelle', text: 'Zwei Erdtanks vor dem Setzen in der Baugrube. Planung, Installation und Modernisierung von Tankanlagen gehören zu unserem Leistungsspektrum.' },
  { img: 'monteur-im-tank', title: 'Manuelle Reinigung im Tank', service: 'Tankreinigung', href: '/leistungen/tankreinigung/', ctx: 'Stahltank, Innenansicht', text: 'Unser Monteur reinigt den Behälter manuell und beurteilt den Zustand der Anlage von innen. Sie erhalten vor Ort einen mündlichen Tankzustandsbericht.', ratio: '4 / 3' },
  { img: 'domschacht-absaugung', title: 'Geöffneter Domschacht', service: 'Tankreinigung, Stilllegung', href: '/leistungen/stilllegung/', ctx: 'Erdtank, Domschacht', text: 'Über den Domschacht werden Rückstände wie Öl-Schlamm-Wasser-Gemisch und Sinkstoffe abgesaugt und ordnungsgemäß entsorgt.' },
  { img: 'oelschlamm-tankboden', title: 'Ölschlamm am Tankboden', service: 'Tankreinigung, Beschichtungen', href: '/leistungen/beschichtungen/', ctx: 'Heizöltank, Tankboden', text: 'So sieht die Sumpfphase am Tankboden aus: ein aggressives Öl-Wasser-Schlamm-Gemisch, das zu Lochfraßkorrosion führt, wenn es nicht entfernt wird.' },
];
const refs: { img: ImageName; alt: string; cap: string }[] = [
  { img: 'referenz-handtuchhalter', alt: 'Handtuchhalter – Referenzprojekt', cap: 'Handtuchhalter' },
  { img: 'referenz-heizung', alt: 'Heizung mit Stufenanzeige – Referenzprojekt', cap: 'Heizung mit Stufenanzeige' },
  { img: 'referenz-thermostat', alt: 'Thermostat – Referenzprojekt', cap: 'Thermostat' },
];
export default function Page() {
  return (
    <>
      <PageHero eyebrow="Referenzprojekte" title="Einblicke in unsere Arbeit." lead="Hier finden Sie einige Referenzprojekte der Firma Tank Service Batho sowie Eindrücke von unseren Einsätzen an der Tankanlage." crumbs={[{ label: 'Referenzprojekte' }]}
        media={<Figure name="baustelle-erdtanks" alt="Erdtanks in der Baugrube" caption="Erdtanks in der Baugrube" num="Fig. 01" ratio="16 / 10" sizes="(min-width: 1024px) 42vw, 100vw" priority />} />
      <section className="section">
        <div className="container">
          <SectionHead num="01" eyebrow="Projektarchiv" title="Einsätze an der Tankanlage" split={false} />
          <div className="archive">
            {work.map((w, i) => (
              <article key={w.img} className="archive__item">
                <div className="archive__media"><Figure name={w.img} alt={w.title} caption={w.title} num={`Fig. ${String(i + 2).padStart(2, '0')}`} ratio={w.ratio ?? '16 / 10'} sizes="(min-width: 900px) 58vw, 100vw" /></div>
                <div className="archive__meta reveal" style={d(100)}>
                  <span className="num">Projekt {String(i + 1).padStart(2, '0')}</span>
                  <h2>{w.title}</h2>
                  <p>{w.text}</p>
                  <dl>
                    <div><dt>Leistung</dt><dd><Link href={w.href} className="link-arrow" style={{ fontWeight: 600 }}>{w.service}</Link></dd></div>
                    <div><dt>Kontext</dt><dd>{w.ctx}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--surface">
        <div className="container">
          <SectionHead num="02" eyebrow="Referenzprojekte" title="Weitere Referenzen" split={false} />
          <div className="gal gal--3">{refs.map((r, i) => <Figure key={r.img} name={r.img} alt={r.alt} caption={r.cap} num={`Ref. ${String(i + 1).padStart(2, '0')}`} sizes="(min-width: 900px) 33vw, 100vw" delay={i * 80} />)}</div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
