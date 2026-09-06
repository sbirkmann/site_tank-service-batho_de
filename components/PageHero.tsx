import Link from 'next/link';
import type { ReactNode } from 'react';
import { Breadcrumbs, type Crumb } from './Breadcrumbs';
interface Props { eyebrow?: string; title: string; lead?: string; crumbs?: Crumb[]; index?: string; media?: ReactNode; actions?: ReactNode }
/** Dunkler Seitenkopf für Unterseiten: Breadcrumb, Eyebrow, H1, Lead, CTAs; optional Bildfläche oder dekorativer Zähler */
export function PageHero({ eyebrow, title, lead, crumbs = [], index, media, actions }: Props) {
  return (
    <section className="phero section--dark">
      <div className="tech-grid" aria-hidden="true" />
      <div className="container phero__inner">
        {crumbs.length > 0 && <Breadcrumbs crumbs={crumbs} />}
        <div className={`phero__grid${media ? ' phero__grid--media' : ''}`}>
          <div className="phero__text">
            {eyebrow && <span className="eyebrow reveal">{eyebrow}</span>}
            <h1 className="reveal" style={{ ['--d' as string]: '80ms' }}>{title}</h1>
            {lead && <p className="lead reveal" style={{ ['--d' as string]: '160ms' }}>{lead}</p>}
            {actions}
          </div>
          {media ? <div className="phero__media reveal reveal--fade" style={{ ['--d' as string]: '200ms' }}>{media}{index && <span className="phero__badge" aria-hidden="true">{index}</span>}</div>
            : index && <span className="phero__index reveal reveal--fade" aria-hidden="true" style={{ ['--d' as string]: '240ms' }}>{index}</span>}
        </div>
      </div>
    </section>
  );
}
export { Link };
