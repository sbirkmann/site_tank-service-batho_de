import Link from 'next/link';
import { Icon } from './Icon';
import { services } from '@/lib/data/services';
export function ServiceNav({ current }: { current: string }) {
  return (
    <nav className="snav reveal" style={{ ['--d' as string]: '100ms' }} aria-label="Alle Leistungen">
      <span className="fact__label">Alle Leistungen</span>
      <ol>
        {services.map((o) => (
          <li key={o.slug}><Link href={`/leistungen/${o.slug}/`} className={o.slug === current ? 'is-active' : undefined} aria-current={o.slug === current ? 'page' : undefined}><span className="num">{o.index}</span>{o.short}</Link></li>
        ))}
      </ol>
    </nav>
  );
}
export function PrevNext({ current }: { current: string }) {
  const idx = services.findIndex((x) => x.slug === current);
  const prev = services[(idx - 1 + services.length) % services.length];
  const next = services[(idx + 1) % services.length];
  return (
    <nav className="pn" aria-label="Vorherige und nächste Leistung">
      <div className="container pn__inner">
        <Link href={`/leistungen/${prev.slug}/`} className="pn__link"><span className="fact__label">Vorherige Leistung</span><span className="pn__t"><Icon name="arrow" className="pn__back" /><span className="num">{prev.index}</span>{prev.short}</span></Link>
        <Link href={`/leistungen/${next.slug}/`} className="pn__link pn__link--next"><span className="fact__label">Nächste Leistung</span><span className="pn__t"><span className="num">{next.index}</span>{next.short}<Icon name="arrow" /></span></Link>
      </div>
    </nav>
  );
}
