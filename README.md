# Shubham landing

Marketing site for an IT training and placement business: a long-form landing
page plus a curriculum page for each program in the catalogue.

Built as a copy of [avirowork.vercel.app](https://avirowork.vercel.app/), which
is itself a copy of [ncplconsulting.net/uk](https://www.ncplconsulting.net/uk).
Copy, layout, design tokens and imagery were reproduced from the source; the
rendered text of the landing page and of all 33 curriculum pages matches the
original exactly.

## Stack

- Next.js 15 (App Router, React 19), built with `output: "export"`
- Tailwind CSS v4, configured entirely through `@theme` tokens
- TypeScript
- No UI or icon dependencies — the six icons the site uses are inlined

Every page is prerendered, so `npm run build` emits a complete static site to
`out/` — plain HTML, CSS, JS and images with no server or database behind it.
`trailingSlash` is on, so routes export as `programs/<slug>/index.html` and any
static host serves them without rewrite rules. Because there is no server,
`next/image` optimization is off and the already-sized webp assets are served
directly.

## Deployment

`render.yaml` defines a Render static site: build with `npm ci && npm run build`
from the `shubham-landing` directory, publish `./out`.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`,
`npm run typecheck`.

## Layout

```
src/
  app/
    layout.tsx              root layout, font, metadata
    globals.css             the entire design system (see below)
    page.tsx                landing page — composes the sections in order
    pricing/                pricing page — what a pathway includes, and how it
                            gets quoted; publishes no figures by design
    programs/[slug]/        curriculum page, statically generated per program
  components/               one component per landing-page section
    SectionHeading.tsx      shared eyebrow + headline + lead for every section
    Reveal.tsx              fade-up on scroll; no-JS and reduced-motion safe
  content/
    types.ts                shared content types
    site.ts                 brand, nav, hero, footer, WhatsApp links
    sections.ts             copy for every landing-page section
    programs.ts             the 43-program catalogue
    programDetails.ts       curricula for the 33 programs with detail pages
public/
  images/                   section, audience, service and program photography
  images/icons/             "What's Included" icons
  logo/                     wordmark, light and reversed
```

Content and presentation are kept apart: components hold no copy, and the files
under `src/content` hold no markup. Editing the site's words does not mean
touching a component.

## Design system

`src/app/globals.css` is the single source of truth for colour, type, spacing
and layout. Components reference tokens (`bg-surface-1`, `text-card-title`,
`gap-lg`, `px-tab-x`) and never raw values, so a rebrand is a change to that one
block.

Four things worth knowing before editing:

- **Breakpoints are named, not numbered.** `tablet:` is 768px and `desktop:` is
  1180px. There are no other responsive prefixes in the codebase.
- **Type steps carry their own line-height, tracking and weight.** `text-headline`
  is a complete typographic decision, not just a font size. Display steps carry
  negative tracking; at those sizes default spacing reads loose.
- **Spacing steps avoid the container names.** They are spelled `xxs`/`xxl`/
  `xxxl`, never `2xl`/`3xl`, because Tailwind resolves `max-w-<name>` against
  the spacing namespace *before* the container scale. A `--spacing-3xl` would
  silently turn `max-w-3xl` into a 72px clamp. Same trap applies to `xs`, `sm`,
  `md`, `lg` and `xl` — those steps exist, so `max-w-xl` is 32px, not 36rem.
  Use `max-w-2xl`/`max-w-3xl` or an arbitrary `max-w-[…]`.
- **A few effects live as `@utility` rules**, not tokens, because they can't be
  expressed as a single value: `text-gradient` and `bg-brand-gradient` (the
  brand ramp as text fill and surface), `bg-grid` / `bg-grid-light` (texture),
  `bg-mesh` (the dark-section colour wash) and `glass` (frosted panels).

## Pending data

The source site deliberately publishes no invented statistics, and this copy
keeps that behaviour. Figures the business has not supplied render as a visible
dashed chip — `[X — pending real data]` — via `PendingChip`, rather than as a
plausible-looking number.

To fill one in, replace the `{ token: "X" }` entry in the relevant
`src/content` file with the real text.

## Before going live

Three things are placeholders inherited from the source and need real values:

1. **WhatsApp number.** `whatsAppNumber` in `src/content/site.ts` is
   `[WHATSAPP_NUMBER_PENDING]`. Every consultation and program-enquiry CTA on
   the site routes through it, so nothing reaches a real inbox until it is set.
2. **Logo.** `public/logo/logo-primary.webp` and `logo-reversed.webp` are still
   the source site's wordmark. Swap both files; the dimensions are declared in
   `site.ts`.
3. **Pending-data chips.** Every remaining chip is a figure someone needs to
   confirm — including the contact details in the footer.

Imagery under `public/images` also comes from the source site and should be
replaced with owned or licensed assets before a public launch.
