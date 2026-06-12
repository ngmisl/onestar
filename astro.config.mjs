import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://onestar.cloud/",
  integrations: [sitemap(), icon()],
  compressHTML: true,
  build: {
    assets: "assets",
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
