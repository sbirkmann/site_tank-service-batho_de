import type { Metadata } from 'next';
import './styles/base.css';
import './styles/components.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RevealObserver } from '@/components/Reveal';
import { site } from '@/lib/data/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tank-service-batho.de'),
  title: { default: `${site.name} – ${site.claim}`, template: `%s | ${site.name}` },
  description: 'Tank Service Batho aus Ubstadt-Weiher: qualifizierter, TÜV-geprüfter Fachbetrieb für Tankreinigung, Tankschutz, Demontage und Neutankanlagen.',
  icons: { icon: '/favicon.svg' },
  openGraph: { type: 'website', locale: 'de_DE', siteName: site.name },
};
export const viewport = { themeColor: '#0b1a33' };

const ld = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness', name: site.name, url: 'https://www.tank-service-batho.de/',
  telephone: site.phone, faxNumber: site.fax, email: site.email,
  address: { '@type': 'PostalAddress', streetAddress: site.street, postalCode: site.zip, addressLocality: site.city, addressCountry: 'DE' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preload" href="/fonts/archivo.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Zum Inhalt springen</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
