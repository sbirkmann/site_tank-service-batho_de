import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.tank-service-batho.de',
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,
});
