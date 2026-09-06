import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { Blocks } from '@/components/Blocks';
import { ContactCta } from '@/components/ContactCta';
import { Figure } from '@/components/Figure';
import { Icon } from '@/components/Icon';
import { ServiceNav, PrevNext } from '@/components/ServiceNav';
import { services, getService } from '@/lib/data/services';
import { site } from '@/lib/data/site';
import type { ImageName } from '@/components/Picture';

const images: Record<string, ImageName> = { oelschlamm: 'oelschlamm-tankboden', monteur: 'monteur-im-tank', domschacht: 'domschacht-absaugung', baustelle: 'baustelle-erdtanks', fahrzeug: 'fahrzeug-header' };
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` });
/** Zweites Praxisbild für den Einstieg, immer verschieden vom Hero-Bild */
const captions: Record<ImageName, string> = {
  'oelschlamm-tankboden': 'Ölschlamm und Rückstände am Tankboden', 'monteur-im-tank': 'Manuelle Reinigung im Inneren eines Tanks', 'domschacht-absaugung': 'Geöffneter Domschacht mit Absaugung',
  'baustelle-erdtanks': 'Erdtanks in der Baugrube', 'fahrzeug-header': 'Tankschutz-Montagefahrzeug', 'sebastian-batho': '', 'referenz-handtuchhalter': '', 'referenz-heizung': '', 'referenz-thermostat': '',
};
const pool: ImageName[] = ['monteur-im-tank', 'domschacht-absaugung', 'oelschlamm-tankboden', 'baustelle-erdtanks'];

export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = getService((await params).slug);
  return s ? { title: s.title, description: `${s.teaser} ${site.name}, ${site.city}.` } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const img = s.image ? images[s.image] : null;
  const alt = s.imageAlt ?? '';
  const img2 = pool.find((n) => n !== img) ?? 'monteur-im-tank';
  return (
    <>
      <PageHero eyebrow={`Leistung ${s.index}`} title={s.title} lead={s.lead} index={s.index} crumbs={[{ label: 'Leistungen', href: '/leistungen/' }, { label: s.short }]}
        media={img ? <Figure name={img} alt={alt} ratio="16 / 10" sizes="(min-width: 1024px) 42vw, 100vw" priority /> : undefined}
        actions={<div className="btn-row reveal" style={d(240)}><Link href="/kontakt/" className="btn btn--light">Anfrage stellen <Icon name="arrow" /></Link><a href={site.phoneHref} className="btn btn--outline-light"><Icon name="phone" /> {site.phone}</a></div>} />

      <section className="section detail">
        <div className="container">
          <div className="entry entry--wide">
            <Figure name={img2} alt={captions[img2]} caption={captions[img2]} num="Fig. 01" ratio="4 / 3" className="entry__img" sizes="(min-width: 1024px) 34vw, 100vw" />
            <div className="entry__ctx reveal" style={d(80)}>
              <span className="num">{s.index} · {s.short}</span>
              <h2>Auf einen Blick</h2>
              <p>{s.teaser}</p>
              <p>Am Anfang steht die Besichtigung vor Ort und ein umfassendes Beratungsgespräch. Anfahrt mit GGVS-Montage-LKW inklusive Tankschutz-Fachkräften.</p>
            </div>
            <div className="entry__contact reveal" style={d(160)}>
              <span className="plaque__k">Direkt erreichbar</span>
              <a href={site.phoneHref} className="entry__phone">{site.phone}</a>
              <p>Rufen Sie einfach an oder nutzen Sie unser Kontaktformular.</p>
              <Link href="/kontakt/" className="btn btn--accent">Kontaktformular <Icon name="arrow" /></Link>
            </div>
          </div>

          <div className="detail__grid">
            <article className="detail__main"><Blocks blocks={s.blocks} /></article>
            <aside className="detail__aside">
              <div className="aside__box reveal">
                <span className="fact__label">Ihr Ansprechpartner</span>
                <strong className="aside__name">{site.ceo}</strong>
                <a href={site.phoneHref} className="aside__phone">{site.phone}</a>
                <a href={`mailto:${site.email}`} className="aside__mail">{site.email}</a>
              </div>
              <ServiceNav current={s.slug} />
            </aside>
          </div>
        </div>
      </section>

      <PrevNext current={s.slug} />
      <ContactCta />
    </>
  );
}
