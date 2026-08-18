# AVIROwork Consultancy

Marketing site for AVIROwork Consultancy, an IT training and placement business serving
the UK and Canada: a long-form landing page, a training-structure page, and a
curriculum page for each program in the catalogue.

The programme model — instructor-led training, a project bootcamp, and resume
marketing that runs until placement — follows the pattern established by
NCPL Consulting. The catalogue covers the same 37 subjects. Copy, curricula,
imagery and design are AVIROwork Consultancy's own and are not reproduced from any other
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
    training-structure/     the four pathways and their prices per region, the
                            stages they are built from, what we ask in return,
                            and how to enrol
    programs/                the catalogue: all 37 cards, filterable by
                            specialization
    programs/[slug]/        curriculum page, statically generated per program
  components/               one component per landing-page section
    SectionHeading.tsx      shared eyebrow + headline + lead for every section
    Reveal.tsx              fade-up on scroll; no-JS and reduced-motion safe
  content/
    types.ts                shared content types
    site.ts                 brand, nav, hero, footer, WhatsApp links
    sections.ts             copy for every landing-page section
    trainingStructure.ts    copy for the training-structure page
    regions.ts              the UK and Canada price lists, and currency rules
    pathways.ts             the four routes, and which stages each contains
    programs.ts             the 37-program catalogue
    programDetails.ts       the curriculum behind each of the 37 programs
public/
  logo/                     wordmark, light and reversed
  images/                   one banner per specialization
  images/CREDITS.json       where every image came from — read before adding one
  og.png                    share image: wordmark, one accent rule
```

Content and presentation are kept apart: components hold no copy, and the files
under `src/content` hold no markup. Editing the site's words does not mean
touching a component.

## The catalogue

The catalogue lives on `/programs` and nowhere else. The landing page carried
it once, then carried a summary of it; both made the home page mostly
catalogue. It now hands off through the nav and the hero's call to action
instead, and the counts on `/programs` all derive from the same array, so
adding a program updates the tabs and the totals together.

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
- **The look is a hybrid.** White canvas, near-black ink and one azure accent
  give the clarity of a large course platform; Fraunces is held back for `h1`
  and section `h2` only, which is what keeps the site from looking like every
  other education template. Card titles, numerals and UI chrome are all sans.
  If you add a heading, ask whether it is a page-level moment — if not, it is
  sans. The legacy utility names (`text-gradient`, `bg-brand-gradient`,
  `bg-mesh`, `bg-grid`, `glass`) still exist but resolve to flat, on-palette
  styles, so a straggler cannot reintroduce the old neon.
- **The primary button is the accent, not ink.** On a white canvas a blue CTA
  is the clearest "click this" signal the page has; keep it that way rather
  than making every action equally loud.

## Pricing

`regions.ts` holds a price list per market. Three things to keep true:

- **The two lists are independent.** Canada is that market's own pricing, not
  a conversion of the UK figures — do not "correct" one against an exchange
  rate.
- **Stages link to prices by key**, never by display title, so renaming a
  stage on the page cannot silently detach its price.
- **The region switch sits above the prices**, never below them. A control
  placed after the figures lets someone read a whole price list in the wrong
  currency before discovering it was switchable.

The choice persists in `localStorage` and is read after mount rather than
during render, so the prerendered HTML and the first client render agree.

`pathways.ts` layers the four routes on top of that. A pathway is not a product
with a price of its own: it is an ordered list of stage keys, and
`pathwayTotal()` adds them up at render time. There is no bundle discount and
no stored total, so a route can never quote a figure its stages have moved away
from. Pathway 4 holds a single stage by design — Marketing is resume marketing
on its own.

Stage cards carry a `kind` ("Training", "Project work", "Placement") rather
than a step number, because the same stage sits in a different position in
every row: the bootcamp is second in pathway 1 and first in pathway 3, and a
number would contradict whichever row it was standing in.

## Photography

`public/images` holds one banner per specialization, wired up through
`categoryImage()` in `programs.ts` and keyed on the category name, so a new
category with no image fails visibly rather than rendering a broken `src`.

Two rules, both deliberate:

- **No people.** Stock faces beside a training business imply students we
  cannot vouch for. Objects, screens and spaces only.
- **Provenance is recorded.** `CREDITS.json` names the source of every file —
  some are Unsplash photographs, some are generated. An image nobody can
  account for is how the previous asset folder became a liability. If you add
  one, add its row.
- **They are graded to match.** Raw, the nine spanned a 4.5x brightness range
  and a 6.7x saturation range and read as nine unrelated pictures. All are
  graded to roughly L70 with a common cool cast. A new banner needs the same
  treatment or it will stand out; the grading pass is a short script, not a
  hand edit.

## Pending data

The site publishes no invented statistics. Figures the business has not
supplied render as a visible dashed chip — `[X — pending real data]` — via
`PendingChip`, rather than as a plausible-looking number.

To fill one in, replace the `{ token: "X" }` entry in the relevant
`src/content` file with the real text.

## Enquiry routes

Everything funnels to WhatsApp on `whatsAppNumber` in `src/content/site.ts`:

- `ChatWithUs` — the floating button, pinned bottom-right on every page from
  `layout.tsx`. Deliberately stateless so it is in the HTML at first paint;
  `ScrollToTop` offsets itself above it.
- Every hero, section and program CTA, via `whatsAppUrl(message)`.

Changing that one constant repoints every route on the site.

## Outstanding

1. **Replace the stand-in photography.** The nine category banners are
   licensed or generated stand-ins with their provenance recorded. Real
   photographs of your own sessions and workspaces would beat all of them,
   and swapping them is a same-named file drop with no code change.
2. **Curriculum review by a practitioner.** All 37 curricula are now distinct
   and name real tooling, but nobody who teaches these subjects has signed
   them off. Have each track's trainer read their own page and correct it —
   module hours especially, since those are the numbers a candidate plans
   around.
3. **Outcome claims.** The site publishes no placement statistics, by choice.
   Add them only once they are measured and can be defined precisely.
