import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';
import { Icon } from '@/components/Icon';
import { Picture } from '@/components/Picture';
import { site } from '@/lib/data/site';
export const metadata: Metadata = { title: 'Kontakt', description: `Kontakt zu Tank Service Batho, ${site.street}, ${site.zip} ${site.city}. Telefon ${site.phone}, Fax ${site.fax}, E-Mail ${site.email}.` };
const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` });
export default function Page() {
  return (
    <>
      <PageHero eyebrow="Kontakt" title="Wir helfen Ihnen gerne." lead="Bitte nehmen Sie Kontakt mit uns auf: Rufen Sie einfach an oder nutzen Sie unser Kontaktformular." crumbs={[{ label: 'Kontakt' }]}
        actions={<div className="btn-row reveal" style={d(240)}><a href={site.phoneHref} className="btn btn--light"><Icon name="phone" /> {site.phone}</a><a href="#formular" className="btn btn--outline-light">Zum Formular <Icon name="arrow" /></a></div>} />
      <section className="section">
        <div className="container kpage">
          <div className="kpage__side">
            <div className="kprio">
              <div className="kprio__phone reveal">
                <span className="plaque__k">Telefon</span>
                <a href={site.phoneHref}>{site.phone}</a>
                <p>Rufen Sie einfach an. Fax {site.fax}</p>
              </div>
              <div className="kperson reveal" style={d(80)}>
                <div className="kperson__photo"><Picture name="sebastian-batho" alt="Sebastian Batho, Geschäftsführer" sizes="72px" /></div>
                <div className="kperson__body">
                  <span className="num">Ihr Ansprechpartner · Geschäftsführer</span>
                  <strong>{site.ceo}</strong>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </div>
            </div>
            <div className="fact-list reveal" style={{ ...d(160), marginTop: 'var(--block)' }}>
              <div className="fact"><span className="fact__icon"><Icon name="pin" /></span><div><div className="fact__label">Adresse</div><div className="fact__value">{site.name}<br />{site.street}<br />{site.zip} {site.city}</div></div></div>
              <div className="fact"><span className="fact__icon"><Icon name="external" /></span><div><div className="fact__label">Anfahrt</div><div className="fact__value"><a href={site.mapsUrl} target="_blank" rel="noopener" className="link-arrow">Route planen <Icon name="arrow" /></a></div></div></div>
            </div>
          </div>
          <div className="contact__form reveal" id="formular" style={d(120)}>
            <span className="num">Anfrage</span>
            <h2 className="contact__form-h">Kontaktformular</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
