import type { MetadataRoute } from 'next';
import { services } from '@/lib/data/services';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.tank-service-batho.de';
  const urls = ['/', '/leistungen/', ...services.map((s) => `/leistungen/${s.slug}/`), '/unser-betrieb/', '/referenzprojekte/', '/kontakt/', '/impressum/', '/agb/'];
  return urls.map((u) => ({ url: `${base}${u}` }));
}
