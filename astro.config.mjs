import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://onestar.com', // Replace with your actual domain
  compressHTML: true,
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
    ssr: {
      noExternal: ['astro-icon'],
    },
  },
});