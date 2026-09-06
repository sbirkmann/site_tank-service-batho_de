import Link from 'next/link';
export interface Crumb { label: string; href?: string }
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="crumbs" aria-label="Brotkrumen">
      <ol>
        <li><Link href="/">Start</Link></li>
        {crumbs.map((c) => <li key={c.label}>{c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>)}
      </ol>
    </nav>
  );
}
