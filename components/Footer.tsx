import Link from 'next/link';
import { Logo } from './Logo';
import { Icon } from './Icon';
import { site } from '@/lib/data/site';
import { services } from '@/lib/data/services';
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Logo light size={44} />
          <p className="footer__claim">Qualifizierter, TÜV-geprüfter Fachbetrieb für Tankreinigung, Tankschutz, Demontage und Neutankanlagen aus Ubstadt-Weiher.</p>
        </div>
        <div className="footer__col">
          <h3 className="footer__h">Leistungen</h3>
          <ul className="footer__list">{services.map((s) => <li key={s.slug}><Link href={`/leistungen/${s.slug}/`}>{s.short}</Link></li>)}</ul>
        </div>
        <div className="footer__col">
          <h3 className="footer__h">Unternehmen</h3>
          <ul className="footer__list">
            <li><Link href="/unser-betrieb/">Unser Betrieb</Link></li>
            <li><Link href="/referenzprojekte/">Referenzprojekte</Link></li>
            <li><Link href="/kontakt/">Kontakt &amp; Anfahrt</Link></li>
            <li><Link href="/impressum/">Impressum</Link></li>
            <li><Link href="/agb/">Allgemeine Geschäftsbedingungen</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h3 className="footer__h">Kontakt</h3>
          <address className="footer__addr"><span>{site.name}</span><span>{site.street}</span><span>{site.zip} {site.city}</span></address>
          <ul className="footer__list footer__list--contact">
            <li><a href={site.phoneHref}><Icon name="phone" /> {site.phone}</a></li>
            <li><span><Icon name="fax" /> Fax {site.fax}</span></li>
            <li><a href={`mailto:${site.email}`}><Icon name="mail" /> {site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {year} {site.name}</span>
        <span className="mono footer__coords">{site.street} · {site.zip} {site.city}</span>
      </div>
    </footer>
  );
}
