import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ServiceCard } from '@/components/ServiceCard';
import { ContactCta } from '@/components/ContactCta';
import { Figure } from '@/components/Figure';
import { Icon } from '@/components/Icon';
import { SectionHead } from '@/components/SectionHead';
import { services } from '@/lib/data/services';
export const metadata: Metadata = { title: 'Leistungen', description: 'Unser Leistungsspektrum: Tankreinigung, Beschichtungen, Anodenschutz, Innenhülle / Leckschutzauskleidung, Beseitigung von Ölschäden, Stilllegung, Tankdemontage und Neutankanlagen.' };
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` });
export default function Page() {
  return (
    <>
      <PageHero eyebrow="Leistungen" title="Ein großes Leistungsspektrum rund um Ihre Tankanlage." lead="Bei der Planung, Installation und Modernisierung Ihrer Tankanlage unterstützen wir Sie gerne. Am Anfang all unserer Projekte steht die Besichtigung Ihrer Räumlichkeiten und ein umfassendes Beratungsgespräch." crumbs={[{ label: 'Leistungen' }]}
        media={<Figure name="monteur-im-tank" alt="Monteur von Tank Service Batho im Inneren eines Tanks" caption="Manuelle Reinigung im Tank" num="Fig. 01" ratio="16 / 10" sizes="(min-width: 1024px) 40vw, 100vw" priority />} />
      <section className="section">
        <div className="container">
          <div className="grid grid-4">{services.map((s, i) => <ServiceCard key={s.slug} service={s} delay={i * 60} />)}</div>
        </div>
      </section>
      <section className="section section--surface">
        <div className="container">
          <SectionHead num="02" eyebrow="Unsere Arbeitsweise" title="Die Lösung, die zu Ihren Ansprüchen und Ihrem Kostenrahmen passt." lead="Wir stellen die Lösung zusammen, die genau zu Ihren Ansprüchen und Ihrem Kostenrahmen passt. Legen Sie die Arbeit in unsere Hände: Wir sorgen dafür, dass während der Baumaßnahmen so wenig Unannehmlichkeiten wie möglich entstehen." />
          <div className="approach">
            <div className="approach__text">
              <ol className="approach__steps reveal" style={d(120)}>
                <li><span className="mono">01</span><div><strong>Besichtigung vor Ort</strong><p>Wir sehen uns Ihre Räumlichkeiten und Ihre Tankanlage an.</p></div></li>
                <li><span className="mono">02</span><div><strong>Umfassendes Beratungsgespräch</strong><p>Wir beraten Sie zu Ihrem Vorhaben und den passenden Maßnahmen.</p></div></li>
                <li><span className="mono">03</span><div><strong>Ausführung durch Fachkräfte</strong><p>Unsere Tankschutz-Fachkräfte führen die Arbeiten mit GGVS-Montage-LKW aus.</p></div></li>
              </ol>
              <Link href="/kontakt/" className="btn reveal" style={d(200)}>Beratung anfragen <Icon name="arrow" /></Link>
            </div>
            <div className="approach__gallery">
              <Figure name="oelschlamm-tankboden" alt="Ölschlamm und Rückstände am Boden eines Heizöltanks" caption="Ölschlamm am Tankboden" num="Fig. 02" ratio="16 / 9" sizes="(min-width: 900px) 40vw, 100vw" />
              <Figure name="domschacht-absaugung" alt="Blick in einen geöffneten Domschacht mit Absaugschlauch" caption="Domschacht" num="Fig. 03" sizes="(min-width: 900px) 20vw, 50vw" delay={100} />
              <Figure name="baustelle-erdtanks" alt="Erdtanks in der Baugrube" caption="Erdtanks, Baustelle" num="Fig. 04" sizes="(min-width: 900px) 20vw, 50vw" delay={160} />
            </div>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
