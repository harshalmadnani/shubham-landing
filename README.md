# Aviro Work

Marketing site for Aviro Work, an IT training and placement business serving
the UK and Canada: a long-form landing page, a training-structure page, and a
curriculum page for each program in the catalogue.

The programme model — instructor-led training, a project bootcamp, and resume
marketing that runs until placement — follows the pattern established by
NCPL Consulting. The catalogue covers the same 37 subjects. Copy, curricula,
imagery and design are Aviro Work's own and are not reproduced from any other
provider; keep it that way when editing.

## Stack

- Next.js 15 (App Router, React 19), built with `output: "export"`
- Tailwind CSS v4, configured entirely through `@theme` tokens
- TypeScript
- No UI or icon dependencies — the icons the site uses are inlined

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
    training-structure/     how a programme runs: the three pathway stages,
                            what we ask in return, and how a place is quoted.
                            Publishes no figures for cost by design
    programs/[slug]/        curriculum page, statically generated per program
  components/               one component per landing-page section
    SectionHeading.tsx      shared eyebrow + headline + lead for every section
    Reveal.tsx              fade-up on scroll; no-JS and reduced-motion safe
  content/
    types.ts                shared content types
    site.ts                 brand, nav, hero, footer, WhatsApp links
    sections.ts             copy for every landing-page section
    trainingStructure.ts    copy for the training-structure page
    programs.ts             the 37-program catalogue
    programDetails.ts       the curriculum behind each of the 37 programs
public/
  images/                   section, audience, service and program photography
  images/icons/             "What's Included" icons
  logo/                     wordmark, light and reversed
```

Content and presentation are kept apart: components hold no copy, and the files
under `src/content` hold no markup. Editing the site's words does not mean
touching a component.

## The catalogue

`programs.ts` (the cards) and `programDetails.ts` (the curricula) are joined by
slug, and every program has a detail page. Three invariants are worth keeping,
because nothing enforces them at build time:

- every `href` in `programs.ts` resolves to a `slug` in `programDetails.ts`
- a program's `meta` hours match its detail page's `hours`
- a detail page's module hours sum to its stated `hours`

Program hour counts follow the published programme: 50 hours as standard, 70
for AI Consultant and the AWS and Azure Cloud Engineer tracks, 60 for IT
Support Analyst.

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

The site publishes no invented statistics. Figures the business has not
supplied render as a visible dashed chip — `[X — pending real data]` — via
`PendingChip`, rather than as a plausible-looking number.

To fill one in, replace the `{ token: "X" }` entry in the relevant
`src/content` file with the real text.

## Before going live

1. **WhatsApp number.** `whatsAppNumber` in `src/content/site.ts` is
   `[WHATSAPP_NUMBER_PENDING]`. Every consultation and program-enquiry CTA on
   the site routes through it, so nothing reaches a real inbox until it is set.
2. **Pending-data chips.** Every remaining chip is a figure someone needs to
   confirm — placement-support duration, payment terms, currency and tax
   treatment per region, the visa-sponsorship policy, and the contact details
   in the footer.
3. **Photography.** The imagery under `public/images` predates this build and
   its provenance has not been confirmed. Verify each file is owned or
   licensed, and replace anything that is not, before a public launch.
