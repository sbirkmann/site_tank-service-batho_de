import Link from 'next/link';
import { Icon } from './Icon';
import type { Service } from '@/lib/data/services';
export function ServiceCard({ service: s, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Link href={`/leistungen/${s.slug}/`} className="scard card reveal" style={{ ['--d' as string]: `${delay}ms` }}>
      <div className="scard__top">
        <span className="scard__idx">{s.index}</span>
        <span className="scard__arrow"><Icon name="arrow" /></span>
      </div>
      <h3 className="scard__title">{s.short}</h3>
      <p className="scard__teaser">{s.teaser}</p>
      <span className="scard__line" aria-hidden="true" />
    </Link>
  );
}
