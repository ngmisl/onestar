# onestar.cloud

Landing site for OneStar: review and reputation management, Google Business Profile management, websites, and an AI-powered QR review system for local businesses. Bilingual (English at `/`, Spanish at `/es`). Built with Astro 6, deployed to GitHub Pages (see `CNAME`).

## Commands

| Command           | Action                                |
| :---------------- | :------------------------------------ |
| `bun install`     | Install dependencies                  |
| `bun run dev`     | Dev server at `localhost:4321`        |
| `bun run build`   | Production build to `./dist/`         |
| `bun run preview` | Preview the build locally             |

Requires Node 22+ (or run via bun).

## Structure

- `src/pages/` - routes; `es/` and `[lang]/` re-export the root pages, language resolves from the URL in `src/i18n/utils.ts`
- `src/i18n/en.json`, `es.json` - all visible copy (identical key sets)
- `src/layouts/Layout.astro` - head (SEO, JSON-LD, Matomo), design tokens, global styles
- `public/` - static assets, including the AI/agent discovery files

## AI compatibility

Served statically from `public/`:

- `/llms.txt` and `/llms-full.txt` (linked from `<head>` and footer)
- `/robots.txt` with AI crawlers explicitly allowed + sitemap pointer
- `/agents.txt`, `/humans.txt`, `/.well-known/security.txt` (RFC 9116)
- `/sitemap-index.xml` via `@astrojs/sitemap`
- JSON-LD (`Organization`, `WebSite`, `ProfessionalService`) with `sameAs`, `twitter:card`, absolute `og:image`, PNG favicons, web manifest

Content negotiation, structured JSON 404s, and rate-limit headers are not possible on GitHub Pages static hosting.
