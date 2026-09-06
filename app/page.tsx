import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { Picture } from '@/components/Picture';
import { Figure } from '@/components/Figure';
import { SectionHead } from '@/components/SectionHead';
import { FactBar } from '@/components/FactBar';
import { ServiceList } from '@/components/ServiceList';
import { ContactCta } from '@/components/ContactCta';
import { site } from '@/lib/data/site';
import { services } from '@/lib/data/services';

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` });
const featured = services[0];
const rest = services.slice(1);
const facts = [
  { label: 'Qualifikation', value: 'TÜV-geprüft', note: 'Qualifiziertes Unternehmen' },
  { label: 'Erfahrung', value: 'Seit vielen Jahren', note: 'Fachbetrieb für Behälterschutz' },
  { label: 'Standort', value: 'Ubstadt-Weiher', note: site.street },
  { label: 'Leistungen', value: `${services.length} Fachbereiche`, note: 'Von Reinigung bis Neuanlage' },
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__bg" aria-hidden="true" />
        <div className="container container--wide hero__grid">
          <div className="hero__text">
            <span className="eyebrow reveal">Fachbetrieb für Tankschutz · Ubstadt-Weiher</span>
            <h1 id="hero-title" className="hero__title reveal" style={d(90)}>Der kompetente Partner rund um Ihre Tankanlage.</h1>
            <p className="hero__lead reveal" style={d(180)}>Qualifiziertes, TÜV-geprüftes Unternehmen mit langjähriger Erfahrung: Tankreinigung, Tankschutz, Demontage und Neutankanlagen aus einer Hand.</p>
            <div className="btn-row reveal" style={d(270)}>
              <Link href="/leistungen/" className="btn btn--light">Leistungen ansehen <Icon name="arrow" /></Link>
              <a href={site.phoneHref} className="btn btn--outline-light"><Icon name="phone" /> {site.phone}</a>
            </div>
            <ol className="band reveal reveal--fade" style={d(360)} aria-label="Leistungsbereiche">
              {services.map((x) => <li key={x.slug}><Link href={`/leistungen/${x.slug}/`}><span className="band__n">{x.index}</span>{x.short}</Link></li>)}
            </ol>
          </div>
          <div className="hero__media reveal reveal--fade" style={d(150)}>
            <div className="hero__frame">
              <Picture name="fahrzeug-header" alt="Montagefahrzeug von Tank Service Batho mit TS-Emblem und Tankschutz-Anhänger" sizes="(min-width: 1024px) 58vw, 100vw" priority />
              <span className="ticks" aria-hidden="true" />
              <span className="hero__mark hero__mark--t mono" aria-hidden="true">GGVS-Montage-LKW</span>
            </div>
            <div className="hero__sub">
              <div className="hero__frame hero__frame--2">
                <Picture name="baustelle-erdtanks" alt="Erdtanks in der Baugrube auf einer Baustelle" sizes="(min-width: 1024px) 24vw, 50vw" priority />
                <span className="ticks" aria-hidden="true" />
              </div>
              <div className="hero__spec">
                <div className="hero__spec-head">
                  <span className="plaque__k">Im Einsatz</span>
                  <span className="hero__spec-v">Fachbetrieb für Tankschutz<br />Ubstadt-Weiher</span>
                </div>
                <dl className="hero__spec-dl">
                  <div><dt>Anschrift</dt><dd>{site.street}, {site.zip} {site.city}</dd></div>
                  <div><dt>Telefon</dt><dd><a href={site.phoneHref}>{site.phone}</a></dd></div>
                  <div><dt>Qualifikation</dt><dd>TÜV-geprüftes Unternehmen</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust" aria-label="Fakten zum Betrieb"><div className="container"><FactBar items={facts} /></div></section>

      <section className="section" id="leistungen" aria-labelledby="h-leistungen">
        <div className="container">
          <SectionHead id="h-leistungen" num="01" eyebrow="Leistungen" title="Ein großes Leistungsspektrum. Aus einer Hand." lead="Bei der Planung, Installation und Modernisierung Ihrer Tankanlage unterstützen wir Sie gerne. Am Anfang steht immer die Besichtigung vor Ort und ein umfassendes Beratungsgespräch." />
          <div className="svc">
            <Link href={`/leistungen/${featured.slug}/`} className="svc__feat reveal">
              <div className="svc__feat-img">
                <Picture name="oelschlamm-tankboden" alt="Ölschlamm und Rückstände am Boden eines Heizöltanks" sizes="(min-width: 900px) 45vw, 100vw" />
                <span className="ticks" aria-hidden="true" />
              </div>
              <div className="svc__feat-body">
                <span className="num">{featured.index} · Kernleistung</span>
                <h3>{featured.title}</h3>
                <p>{featured.lead}</p>
                <ul className="svc__feat-facts">
                  <li>Mündlicher Tankzustandsbericht vor Ort</li>
                  <li>Zwischenlagerung bis 5.000 Liter Heizöl ohne Mehrkosten</li>
                  <li>Kostenloses Beratungsgespräch vor Ort</li>
                </ul>
                <span className="link-arrow">Tankreinigung im Detail <Icon name="arrow" /></span>
              </div>
            </Link>
            <div className="svc__list">
              <ServiceList services={rest} />
              <Link href="/leistungen/" className="btn btn--ghost svc__all">Alle Leistungen <Icon name="arrow" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="h-betrieb">
        <div className="container">
          <SectionHead id="h-betrieb" num="02" eyebrow="Unser Betrieb" title="Leistung und Qualität im Behälterschutz." split={false} />
          <div className="about">
            <div className="about__media">
              <Figure name="baustelle-erdtanks" alt="Baustelle mit Bagger und zwei Erdtanks in der Baugrube" caption="Erdtanks in der Baugrube, Neubauprojekt" num="Fig. 01" ratio="4 / 3" />
              <div className="about__stamp reveal" style={d(120)}><span className="plaque__k">Betrieb</span><span>Seit vielen Jahren im Behälterschutz</span></div>
            </div>
            <div className="about__text">
              <p className="lead reveal">Seit vielen Jahren steht unser Betrieb für Leistung und Qualität im Bereich Behälterschutz. Mit den sich wandelnden Anforderungen, vor allem in der Umwelttechnik, haben wir unser Leistungsspektrum kontinuierlich erweitert.</p>
              <p className="about__p reveal" style={d(80)}>Unsere langjährige Erfahrung und Fachkompetenz versetzt uns in die Lage, Sie jederzeit umfassend zu Ihrem Vorhaben zu beraten. Als Fachbetrieb legen wir großen Wert auf die Aus- und Weiterbildung unserer Mitarbeiter, damit wir Ihnen stets die aktuellste Technik für Ihre Installationen empfehlen können.</p>
              <dl className="about__facts reveal" style={d(160)}>
                <div><dt>Qualifikation</dt><dd>TÜV-geprüftes Unternehmen</dd></div>
                <div><dt>Ausrüstung</dt><dd>GGVS-Montage-LKW, stets mit zwei Tankschutz-Fachkräften besetzt</dd></div>
                <div><dt>Beratung</dt><dd>Besichtigung vor Ort und umfassendes Beratungsgespräch zu Beginn jedes Projekts</dd></div>
              </dl>
              <Link href="/unser-betrieb/" className="link-arrow reveal" style={d(220)}>Mehr über unseren Betrieb <Icon name="arrow" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section know" aria-labelledby="h-know">
        <div className="container">
          <SectionHead id="h-know" num="03" eyebrow="Fachwissen" title="Warum regelmäßiger Tankschutz so wichtig ist." lead="Von außen lässt sich das Innere eines Tanks nicht beurteilen. Was sich am Tankboden abspielt und welche Folgen das haben kann, zeigen unsere Erfahrungen aus der Praxis." />
          <div className="know__layout">
            <ol className="proc">
              {[
                ['Sedimente lagern sich ab', 'Durch die Alterung des Heizöls entstehen Sedimente, die sich am Tankboden ablagern. In Verbindung mit Kondenswasser, Schwitzwasser und Schwefel aus dem Heizöl bildet sich dort eine Sumpfphase.'],
                ['Korrosion und Versprödung', 'Bei Stahltanks führt die Sumpfphase zu Lochfraß- und Flächenkorrosion. Bei Kunststofftanks wandern die Weichmacher aus: Der Kunststoff wird hart und spröde, verformt sich und kann reißen.'],
                ['Störungen an der Heizung', 'Wird der Ölschlamm angesaugt, führt das zu Störungen oder Defekten an der Heizungsanlage. Im schlimmsten Fall läuft Heizöl aus dem durchkorrodierten Tankboden aus.'],
                ['Reinigung stoppt den Prozess', 'Eine sorgfältige Tankreinigung entfernt den aggressiven Schlamm. Der Korrosionsvorgang ist gestoppt, und der Zustand des Tanks kann von innen beurteilt werden.'],
              ].map(([h, p], i) => (
                <li key={h} className="proc__step reveal" style={d(i * 60)}>
                  <span className="proc__num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="proc__body"><h3>{h}</h3><p>{p}</p></div>
                </li>
              ))}
            </ol>
            <div className="know__media">
              <Figure name="monteur-im-tank" alt="Monteur von Tank Service Batho bei der manuellen Reinigung im Inneren eines Tanks" caption="Manuelle Reinigung im Tank" num="Fig. 02" ratio="4 / 3" sizes="(min-width: 900px) 40vw, 100vw" />
              <Figure name="domschacht-absaugung" alt="Blick in einen geöffneten Domschacht mit Absaugschlauch" caption="Geöffneter Domschacht mit Absaugung" num="Fig. 03" ratio="4 / 3" className="know__media-2" sizes="(min-width: 900px) 34vw, 85vw" />
            </div>
          </div>
          <div className="info reveal" role="group" aria-label="Fachliche Hinweise">
            <div className="info__col">
              <span className="info__k">Rechtsgrundlage</span>
              <span className="info__big">§ 22 <small>WHG</small></span>
              <p>Nach § 22 des Wasserhaushaltsgesetzes haften Halter von Öltanks für alle Veränderungen der Beschaffenheit des Grundwassers in vollem Umfang.</p>
            </div>
            <div className="info__col">
              <span className="info__k">Reinigungsintervall</span>
              <span className="info__big">5 <small>Jahre</small></span>
              <p>Spätestens alle 5 Jahre sollte jeder Heizöltank gereinigt und untersucht werden. Die Tankreinigung ist Bestandteil Ihrer Betreiberpflicht.</p>
            </div>
            <div className="info__col info__col--list">
              <span className="info__k">Faktoren der Ölschlammbildung</span>
              <ol className="info__list">
                {['Lichteinfall', 'Wärme', 'Kondenswasser', 'Pilz- oder Bakterienbefall', 'Buntmetalle im Tank, z. B. Kupferleitungen', 'Sauerstoffeintrag ins Öl, z. B. Rücklaufleitung'].map((t, i) => <li key={t}><span>{String(i + 1).padStart(2, '0')}</span>{t}</li>)}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface" aria-labelledby="h-team">
        <div className="container">
          <SectionHead id="h-team" num="04" eyebrow="Ihr Ansprechpartner" title="Persönlich beraten, fachlich auf dem neuesten Stand." lead="Als langjähriger Fachbetrieb legen wir großen Wert auf die Aus- und Weiterbildung unserer Mitarbeiter. Ihr Ansprechpartner berät Sie persönlich zu Ihrem Vorhaben." />
          <div className="person reveal">
            <div className="person__photo"><Picture name="sebastian-batho" alt="Sebastian Batho, Geschäftsführer von Tank Service Batho" sizes="118px" /></div>
            <div className="person__body">
              <span className="num">Geschäftsführer</span>
              <h3>{site.ceo}</h3>
              <p className="person__p">Rufen Sie einfach an oder schreiben Sie uns. Wir beraten Sie gerne umfassend zu Ihrem Vorhaben.</p>
            </div>
            <ul className="person__contact">
              <li><span className="fact__label">Telefon</span><a href={site.phoneHref}>{site.phone}</a></li>
              <li><span className="fact__label">E-Mail</span><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><span className="fact__label">Adresse</span><span>{site.street}, {site.zip} {site.city}</span></li>
            </ul>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
