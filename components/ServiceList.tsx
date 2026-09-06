import Link from 'next/link';
import { Icon } from './Icon';
import type { Service } from '@/lib/data/services';
export function ServiceList({ services, dark = false }: { services: Service[]; dark?: boolean }) {
  return (
    <ol className={`slist${dark ? ' slist--dark' : ''}`}>
      {services.map((s, i) => (
        <li key={s.slug} className="reveal" style={{ ['--d' as string]: `${i * 50}ms` }}>
          <Link href={`/leistungen/${s.slug}/`} className="slist__row">
            <span className="num">{s.index}</span>
            <span className="slist__body">
              <span className="slist__title">{s.short}</span>
              <span className="slist__teaser">{s.teaser}</span>
            </span>
            <span className="slist__arrow"><Icon name="arrow" /></span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
