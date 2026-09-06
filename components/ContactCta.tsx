import Link from 'next/link';
import { Icon } from './Icon';
import { site } from '@/lib/data/site';
export function ContactCta({ title = 'Sie haben Interesse oder Fragen?', text = 'Nehmen Sie am besten direkt Kontakt mit uns auf. Rufen Sie einfach an oder nutzen Sie unser Kontaktformular.', num = '05' }: { title?: string; text?: string; num?: string }) {
  return (
    <section className="cta section--dark" aria-labelledby="cta-title">
      <div className="tech-grid" aria-hidden="true" />
      <div className="container cta__inner">
        <div className="cta__text">
          <span className="eyebrow reveal"><span className="num" style={{ color: 'var(--warm)' }}>{num}</span>&nbsp; Kontakt</span>
          <h2 id="cta-title" className="reveal" style={{ ['--d' as string]: '80ms' }}>{title}</h2>
          <p className="lead reveal" style={{ ['--d' as string]: '160ms' }}>{text}</p>
          <div className="btn-row reveal" style={{ ['--d' as string]: '240ms' }}>
            <a href={site.phoneHref} className="btn btn--light"><Icon name="phone" /> {site.phone}</a>
            <Link href="/kontakt/" className="btn btn--accent">Anfrage stellen <Icon name="arrow" /></Link>
          </div>
        </div>
        <div className="cta__facts reveal" style={{ ['--d' as string]: '200ms' }}>
          <div className="fact"><span className="fact__icon"><Icon name="pin" /></span><div><div className="fact__label">Adresse</div><div className="fact__value">{site.street}<br />{site.zip} {site.city}</div></div></div>
          <div className="fact"><span className="fact__icon"><Icon name="mail" /></span><div><div className="fact__label">E-Mail</div><div className="fact__value"><a href={`mailto:${site.email}`}>{site.email}</a></div></div></div>
          <div className="fact"><span className="fact__icon"><Icon name="fax" /></span><div><div className="fact__label">Fax</div><div className="fact__value">{site.fax}</div></div></div>
        </div>
      </div>
    </section>
  );
}
