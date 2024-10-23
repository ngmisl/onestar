import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://onestar.cloud/",
  compressHTML: true,
  build: {
    assets: "assets",
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
    ssr: {
      noExternal: ["astro-icon"],
    },
    i18n: {
      defaultLocale: "en",
      locales: ["en", "es"],
      routing: {
        prefixDefaultLocale: false,
      },
    },
  },
});
