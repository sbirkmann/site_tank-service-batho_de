import Link from 'next/link';
/** Bildmarke: vektorisierte Rekonstruktion des blauen „TS“-Tank-Emblems vom Fahrzeugfoto der bestehenden Website. */
export function Logo({ light = false, size = 40 }: { light?: boolean; size?: number }) {
  return (
    <Link href="/" className={`logo${light ? ' logo--light' : ''}`} aria-label="Tank Service Batho – Startseite">
      <svg className="logo__mark" width={size} height={size} viewBox="0 0 64 72" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M25 3h14a2 2 0 0 1 2 2v3h4.5a1.5 1.5 0 0 1 0 3H43v3.6C54 17.6 61.5 28 61.5 40.5 61.5 57 48.8 70 32 70S2.5 57 2.5 40.5C2.5 28 10 17.6 21 14.6V11h-2.5a1.5 1.5 0 0 1 0-3H23V5a2 2 0 0 1 2-2z" />
        <circle cx="32" cy="42" r="22.5" fill="var(--logo-bg, #fff)" />
        <circle cx="32" cy="42" r="19" fill="currentColor" />
        <text x="32" y="50.5" textAnchor="middle" fontFamily="Archivo, Inter, sans-serif" fontWeight="800" fontSize="23" letterSpacing="-1.5" fill="var(--logo-bg, #fff)">TS</text>
      </svg>
      <span className="logo__word">
        <span className="logo__name">Tank Service Batho</span>
        <span className="logo__sub">Tankschutz · Ubstadt-Weiher</span>
      </span>
    </Link>
  );
}
