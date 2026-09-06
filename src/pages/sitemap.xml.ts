import type { APIRoute } from 'astro';
import { services } from '../data/services';
export const GET: APIRoute = ({ site }) => {
  const base = site!.toString().replace(/\/$/, '');
  const urls = ['/', '/leistungen/', ...services.map((s) => `/leistungen/${s.slug}/`), '/unser-betrieb/', '/referenzprojekte/', '/kontakt/', '/impressum/', '/agb/'];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${base}${u}</loc></url>`).join('\n')}\n</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
