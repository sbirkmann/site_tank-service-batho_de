import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Icon } from '@/components/Icon';
import { site } from '@/lib/data/site';
export const metadata: Metadata = { title: 'Impressum', description: 'Impressum von Tank Service Batho, Ubstadt-Weiher.' };
export default function Page() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" crumbs={[{ label: 'Impressum' }]} />
      <section className="section">
        <div className="container legal">
          <div className="doc__meta"><span>Angaben gemäß § 5 TMG</span><span>{site.name}</span></div>
          <dl className="legal__dl reveal">
            <div><dt>Verantwortlich</dt><dd>{site.name}<br />{site.owner}<br />{site.street}<br />{site.zip} {site.city}</dd></div>
            <div><dt>Kontakt</dt><dd>Telefon: <a href={site.phoneHref}>{site.phone}</a><br />Telefax: {site.fax}<br />E-Mail: <a href={`mailto:${site.emailImpressum}`}>{site.emailImpressum}</a></dd></div>
            <div><dt>Umsatzsteuer-ID</dt><dd>Umsatzsteuer-Identifikationsnummer<br />{site.vatId}</dd></div>
            <div><dt>Aufsichtsbehörde</dt><dd>{site.authority}</dd></div>
          </dl>
          <p className="reveal"><Link href="/agb/" className="link-arrow">Allgemeine Geschäftsbedingungen <Icon name="arrow" /></Link></p>
        </div>
      </section>
    </>
  );
}
