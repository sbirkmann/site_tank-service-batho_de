import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Icon } from '@/components/Icon';
export const metadata = { title: 'Seite nicht gefunden' };
export default function NotFound() {
  return (
    <PageHero eyebrow="Fehler 404" title="Diese Seite gibt es nicht." lead="Die aufgerufene Adresse existiert nicht oder wurde verschoben."
      actions={<div className="btn-row reveal" style={{ ['--d' as string]: '240ms' }}><Link href="/" className="btn btn--light">Zur Startseite <Icon name="arrow" /></Link><Link href="/leistungen/" className="btn btn--outline-light">Zu den Leistungen</Link></div>} />
  );
}
