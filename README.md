# Green House Cafe — website concept

> **Live demo:** https://hello-aditya-dev.github.io/green-house-cafe-website/

An independent, unsolicited design concept for **Green House Cafe** — a real 24-hour tiffin
center and coffee house at River View Colony, Koni, Bilaspur, Chhattisgarh, India.
This is a portfolio demo by [hello-aditya-dev](https://github.com/hello-aditya-dev),
not the cafe's official website, and is not commissioned or endorsed by the business.

## What this is

A complete, single-page, static marketing website for a small neighbourhood cafe:

- **Real photography only** — every image is the actual cafe, cropped and optimised from its own
  public [Google Maps listing](https://maps.app.goo.gl/NagLjbTe1cDkdwCZ7). No stock, no AI images.
- **Verified facts only** — hours, phone, category and rating come from the listing (researched
  Oct 2026; see `docs/research.md`). The site deliberately publishes **no menu items or prices**
  because no verified, dated price list exists for this business — instead it routes menu
  questions to a tap-to-call action, which is how a tiffin center actually works.
- **Conversion-first local UX** — sticky call/directions bar on mobile, tap-to-call everywhere,
  straight-to-directions deep link, plus code, hours table, accessible photo lightbox.
- **Art direction** — "the green house after dark": deep pine greens, warm gold, cream paper,
  Fraunces + Karla + Noto Devanagari; a dark, atmospheric hero using the cafe's real dusk
  photograph; restrained scroll reveals that respect `prefers-reduced-motion`.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript, **fully static export** (`output: "export"`) — no backend, no database; a cafe brochure site shouldn't need one.
- Tailwind CSS 4 (design tokens as CSS `@theme` variables).
- Hand-written responsive `srcset` images (5 widths, generated with sharp; see `work` notes in docs).
- SEO: metadata, Open Graph, `robots.ts`, `sitemap.ts`, `CafeOrCoffeeShop` JSON-LD built **only**
  from verified listing facts (no fabricated reviews or counts).
- Accessibility: semantic landmarks, skip link, keyboard-operable lightbox and mobile menu,
  visible focus rings, reduced-motion support, 44px+ touch targets.

## Run it locally

```bash
bun install        # or: npm install
bun run dev        # http://localhost:3101
```

## Build & deploy

```bash
bun run build                # static export to ./out (no base path, for local preview)
bun run build:pages          # static export with the GitHub Pages base path + site URL
```

Deployment is automated with GitHub Actions (`.github/workflows/deploy.yml`):
pushing to `main` builds the site and publishes it to GitHub Pages.

## Repo layout

```
src/app/            layout, page, globals.css, robots.ts, sitemap.ts
src/components/     Header, Hero, Story, Serve, House (gallery+lightbox), Visit, Footer, MobileBar
src/lib/data.ts     all business facts in one place (single source of truth)
public/images/      optimised crops of the cafe's own listing photo (+ favicon.svg)
docs/               research.md, asset-sources.md, originals/ (provenance)
```

## Scope & honesty notes

- Demo disclosure is included in the footer; the developer is not affiliated with the cafe.
- Facts excluded on purpose (no verified source): menu items, prices, review counts, review
  quotes, history, awards, social handles. See `docs/research.md` §8.
- PIN codes: the business's two Google listings disagree (495001 vs 495009), so the site shows
  the address without a PIN and links to the live listing for directions.
- The one thing this site cannot do: answer "what's today's tiffin" — only the cafe's phone can
  (+91 95892 64628), which is why it's the primary call-to-action.

## Licence & credits

- Code: MIT.
- Photographs: from the cafe's own public Google Maps listing, used to promote the business and
  credited inline + in `docs/asset-sources.md`; they remain the property of their contributor.
  Replace via `public/images/` if the owner prefers their own assets.
- Icons: inline SVG (Lucide-style, ISC).
