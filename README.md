# Canopy — Green Energy Landing Page

A single-page marketing site for **Canopy**, a fictional climate-action organisation. The page walks visitors from the climate crisis ("Why It Matters") through what Canopy does ("Focus Areas", "How It Works"), the impact so far, a testimonial, and two conversion points — a pledge form and a newsletter signup.

## Workflow: Design → Build, orchestrated end-to-end

This project was built as an exercise in AI-orchestrated front-end delivery:

1. **Claude (Design)** — the visual design was created from scratch in Claude's design tooling: layout, color palette, typography, section flow, and component states (loading/empty/error/interactive) were explored as prototypes before any production code existed.
2. **Claude Code** — the prototypes were treated as *reference, not production code*. Claude Code rebuilt every section as typed, accessible, maintainable Next.js components: removing prototype-only styles and fake data, matching the real component/folder architecture, and verifying each section against real states rather than static mockups.
3. **Iteration loop** — once the structural build was in place, Claude Code was used for the second pass: Framer Motion scroll animations, SEO metadata, accessibility fixes (`prefers-reduced-motion`, skip links, `aria-live`), dynamic Open Graph image generation, and ongoing polish — all reviewed and committed incrementally rather than in one large batch.

The result is a record of handing a design off to an agentic coding tool and having it own the full path to a deployable, accessible, production-quality implementation.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, React Server Components) |
| UI library | [React 19](https://react.dev) |
| Language | TypeScript (strict mode) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) (CSS-based `@theme` config, no `tailwind.config.js`) |
| Animation | [Framer Motion](https://www.framer.com/motion/) — scroll-triggered reveals, `AnimatePresence` state transitions, spring-driven nav indicator |
| Fonts | `next/font` — Lora (display) + DM Sans (body), self-hosted, zero layout shift |
| Linting/formatting | ESLint (`eslint-config-next`, `simple-import-sort`), Prettier (`prettier-plugin-tailwindcss`) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env.local` and set your production URL:

```bash
cp .env.example .env.local
```

`NEXT_PUBLIC_SITE_URL` feeds the Open Graph `metadataBase`, `robots.txt`, and `sitemap.xml`. Leave it unset locally — those features degrade gracefully without it.

## Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with `--fix` |
| `npm run format` | Format the repo with Prettier |
| `npm run format:check` | Check formatting without writing |
| `npm run type-check` | Run `tsc --noEmit` |

## Project Structure

```
app/
  layout.tsx          Root layout, fonts, SEO metadata, skip-to-content link
  page.tsx             Section order for the page
  globals.css           Tailwind v4 @theme tokens, keyframes, component classes
  opengraph-image.tsx   Dynamically generated OG image (next/og ImageResponse)
  icon.svg              Branded favicon
  robots.ts / sitemap.ts
  not-found.tsx          Custom 404

components/
  layout/                Nav, Footer — site-wide chrome
  sections/               One folder per landing-page section
    <Section>/
      <Section>.tsx        Component
      <Section>.constants.ts  Copy + static data
      <Section>.types.ts      Local types (where needed)
      <Section>.hooks.ts       Local state/logic (where needed)
      index.ts                 Barrel export
  ui/                     Reusable primitives
    Button/, Logo/, BackToTop/
    Motion/                FadeUp, ScaleIn, SlideIn, Stagger — shared
                           Framer Motion wrappers, all respect
                           prefers-reduced-motion

shared/
  constants.ts            Cross-section data (nav links, stats, testimonial, etc.)
  types.ts                 Shared type definitions
  hooks/useCountUp.ts       Scroll-triggered number counter (IntersectionObserver)
```

Every section follows the same shape — component, constants, optional types/hooks, barrel export — so any section can be found and extended without reading the rest of the codebase.

## Features

- **Scroll-triggered animations** via four shared Framer Motion primitives (`FadeUp`, `ScaleIn`, `SlideIn`, `Stagger`), all fired once via `whileInView` and all disabled automatically when the OS `prefers-reduced-motion` setting is on.
- **Accessible by default** — skip-to-content link, `aria-live` regions on the Pledge and Newsletter form/success swaps, semantic landmarks, keyboard-navigable mobile drawer.
- **SEO** — Open Graph/Twitter metadata, a dynamically rendered OG image (no static asset to keep in sync), `robots.ts` and `sitemap.ts` generated from the same `NEXT_PUBLIC_SITE_URL`.
- **Animated nav** — active section is tracked via `IntersectionObserver` and highlighted with a spring-animated underline (`layoutId`) that slides between links.
- **Count-up stats** — crisis and impact numbers animate from zero once scrolled into view, also IntersectionObserver-driven.

## Design System

Defined in `app/globals.css` under `@theme` (Tailwind v4's CSS-native config — there is no `tailwind.config.js`):

- **Greens** — 7-step scale from `--color-green-deep` to `--color-green-mist`, used for backgrounds, text, and dark sections.
- **Warms** — amber, gold, terra — used for emphasis, CTAs, and icon accents.
- **Neutrals** — cream tones for light-section backgrounds.
- **Type** — Lora for headings/display (`--font-display`), DM Sans for body copy (`--font-body`).

Component-level utility classes (`.btn-primary`, `.card`, `.eyebrow`, `.section-heading`, etc.) live in `@layer components` in the same file, so styling stays Tailwind-native rather than introducing a separate CSS-in-JS layer.
