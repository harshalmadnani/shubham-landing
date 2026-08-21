# AVIROwork Consultancy

Marketing site for AVIROwork Consultancy, an IT training and placement business
serving the UK and Canada: a long-form landing page, the four priced pathways,
a page per process, an about page, and a curriculum page for each of the 37
programmes in the catalogue.

The programme model — instructor-led training, a project bootcamp, and resume
marketing that runs until placement — follows the pattern established by NCPL
Consulting, and the catalogue covers the same 37 subjects. **Copy, curricula,
artwork and design are AVIROwork's own and are not reproduced from any other
provider.** That has been measured, not assumed: no five-word run on the four
process pages appears on the pages they were researched from. Keep it that way
when editing.

The design system is called **Signal** and is documented below. Read that
section before adding anything visual — it is a system with rules, not a set of
preferences.

## Stack

- Next.js 15 (App Router, React 19), built with `output: "export"`
- Tailwind CSS v4, configured entirely through `@theme` tokens
- TypeScript
- Three Google fonts, loaded through `next/font`
- No UI or icon dependencies — every icon and diagram is inlined SVG

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
    layout.tsx              root layout, the three fonts, skip link, metadata
    not-found.tsx           a real 404 with the chrome and four routes out
    globals.css             the entire design system (see below)
    page.tsx                landing page — composes the sections in order
    training-structure/     the four pathways and their prices per region, the
                            stages they are built from, what we ask in return,
                            and how to enrol
    about/                  who we are, what we do, what we hold to
    how-it-works/           overview of the four processes
    how-it-works/[slug]/    one page per process: training, bootcamp,
                            mentoring, marketing
    programs/                the catalogue: all 37 cards, filterable by
                            specialization
    programs/[slug]/        curriculum page, statically generated per program
  components/               one component per landing-page section
    SectionHeading.tsx      shared eyebrow + headline + lead for every section
    Reveal.tsx              wipe on scroll; no-JS and reduced-motion safe
    RouteBoard.tsx          the four routes as a departure board
    Illustrations.tsx       one route schematic per process page
    NavMenu.tsx             the one nav entry that opens a menu
  content/
    types.ts                shared content types
    site.ts                 brand, nav, hero, footer, WhatsApp links
    sections.ts             copy for every landing-page section
    trainingStructure.ts    copy for the training-structure page
    processes.ts            copy for the four How It Works process pages
    about.ts                copy for the About page
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

## Design system — "Signal"

`src/app/globals.css` is the single source of truth for colour, type, spacing
and layout. Components reference tokens (`bg-paper`, `text-ink-2`, `gap-lg`,
`px-rail`) and never raw values, so the whole identity is that one block.

The system takes its grammar from wayfinding. The product sells four named
routes from wherever somebody is standing to a job offer, and signage design
exists for exactly that problem: making a route legible at a glance, to a
stranger, under pressure. So the site is built from signage panels, route
lines, interchange nodes and timetable data rather than from cards and
gradients.

Four rules hold it together, and breaking any one of them is what will make
an addition look bolted on:

- **White is the ground.** `--color-paper` (`#f8fafc`) — white to the eye, with
  just enough cool tint that `--color-raised` (`#ffffff`) can still read as a
  *raised panel* above it. The sunk panels and rules are the only greys.
- **Corners are square.** A radius appears only on a route node, which is a
  circle because it is a node. No `rounded-lg`.
- **Blue is a signal, not a decoration.** It marks direction, the live state,
  and the one action on the screen. Nothing on this site is blue merely to look
  nice.
- **Nothing sits on the 4.5 line.** This is a site people read to decide
  whether to spend money on training, often on a phone in daylight. Every text
  pairing in the system clears AA with margin — see below.

Four more things worth knowing before editing:

- **Three faces, three jobs.** Bricolage Grotesque sets the signs, Newsreader
  is what you actually read, JetBrains Mono carries every label, price, count
  and route code. A heading is display, a paragraph is serif, a number is mono
  — there are no exceptions in the codebase and adding one will show.
- **Type steps are fluid and complete.** `text-mega` is a clamp carrying its
  own line-height, tracking and weight. There is one token per role rather
  than a mobile/tablet/desktop trio.
- **Spacing steps avoid the container names.** They are spelled `xxs`/`xxl`/
  `xxxl`, never `2xl`/`3xl`, because Tailwind resolves `max-w-<name>` against
  the spacing namespace *before* the container scale. `xs`/`sm`/`md`/`lg`/`xl`
  all exist here, so **`max-w-xl` is 34px, not 36rem** — that bug has shipped
  once. Use `max-w-2xl`, `max-w-3xl`, or an arbitrary `max-w-[46ch]`.
- **Heading accents take their colour at the usage.** `h1 em` only normalises
  `font-style`; the colour is `text-signal` on white and `text-signal-on-night`
  on the dark bands. Setting it globally made every accent invisible on the
  dark heroes. Note the trap the other way too: during the move to blue, these
  accents were briefly `text-night`, which is near-black — an "accent" the same
  colour as the body text around it.

### Contrast rules that are not negotiable

This palette is blue, black and white — the combination an education business
is expected to use, and the reason the contrast came out easier than it did
with the orange it replaced. A saturated orange is too light to carry text, so
it needed a darkened token for type *and* a lightened one for dark grounds.
Blue at `#0b5ed7` is dark enough to be a graphic colour and a text colour at
once, and white type sits on it comfortably.

Every text token was set by measurement, not by eye:

| Pairing | Ratio |
| --- | --- |
| `ink` on white / sunk / raised | 17.6 / 15.9 / 18.4 |
| `ink-2` on white / sunk | 8.5 / 7.7 |
| `ink-3` (every mono label) on white / sunk | 7.2 / 6.5 |
| `signal-text` on white / sunk / raised | 5.6 / 5.1 / 5.8 |
| `night-ink` on night / deep / raised | 17.7 / 19.2 / 15.9 |
| `night-ink-2` on night / deep / raised | 7.9 / 8.5 / 7.1 |
| `signal-on-night` on night / deep / raised | 7.5 / 8.1 / 6.7 |
| Primary button label, rest / hover | 5.8 / 8.0 |
| WhatsApp button label, rest / hover | 7.3 / 5.7 |

All 25 pairings clear AA; 14 reach AAA; none sits below 5.0.

Two things carried over from the previous palette's hard-won lessons:

- **The primary button hovers *darker*.** Under the old orange it had to hover
  *lighter*, because the label was ink and deepening the ground dropped it to
  4.0:1. Blue takes a white label, so deepening raises it from 5.8:1 to 8.0:1.
  If the accent ever changes hue again, re-derive this — the correct hover
  direction depends on whether the label is light or dark.
- **`--color-ink-3`** carries every mono label on the site, so it is the tier
  most worth over-building. It has been 3.5:1, then 5.1:1, then 6.6:1, and is
  now 7.2:1.

The WhatsApp button carries **ink** on the brand green for the same reason.
White on `#25d366` is 1.98:1; ink is 7.3:1 and it still reads unmistakably as
WhatsApp.

### Motion

`Reveal` wipes left-to-right rather than fading up — signage is revealed by
taking the cover off it. Content starts visible and is only hidden once the
observer is known to be running, so the page reads without JavaScript, and
`prefers-reduced-motion` skips the effect entirely.

One caveat when screenshotting: the wipe uses `clip-path`, so a capture taken
mid-animation looks like a layout bug with content sliced off at a vertical
edge. Drive the browser with reduced motion when checking layout.

## About

`about.ts` carries only what the business can stand behind today: what it
sells, how it sells it, where it operates, how to reach it. There is no
founding date, no headcount, no student total and no success rate, because
none has been supplied — and an About page is the single worst place on a site
to invent one.

Two sections are still missing by design: **the story** (why this exists, and
since when) and **the people** (who teaches, and what they have actually done).
Both need to come from the business. Add them to `about.ts` and drop them into
`about/page.tsx` between "How we work" and "Where we work".

## How It Works

Four process pages — training, bootcamp, mentoring, marketing — all rendered
by one `ProcessPage` component from one array in `processes.ts`. They share a
layout on purpose: somebody weighing the bootcamp against marketing is already
comparing two things that differ in substance, and giving each page its own
shape would add a difference that means nothing.

Content follows the same rule as the rest of the site: the process model comes
from the pattern NCPL established, the words do not. Nothing on these pages
shares even a five-word run with theirs — worth re-checking if you rewrite one.

Two things are deliberately missing, and should stay missing until the business
decides them:

- **Service levels nobody has committed to.** How many applications go out a
  day, how often a mentor calls, how often the campaign is reviewed. The pages
  describe the activity without inventing a number.
- **Post-placement guarantees.** The provider this model comes from offers a
  365-day one. We publish no such promise, because promising it is a
  contractual act, not a copy decision.

Add either to `processes.ts` once they are real; the pages render the same
shape with or without them.

The nav entry that opens them is the only one with `children`, which is what
makes `NavMenu` render instead of a link. Two rules there:

- **Click, not hover.** A hover menu is unreachable on a touch screen and
  fires on every pass of the cursor.
- **The parent does not double as a link.** An element that both navigates and
  opens a menu has to guess what a tap meant, and guesses wrong on touch — so
  the overview is an entry inside the menu, and `/how-it-works` is what the
  footer and a typed URL resolve to.

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

## Imagery

There is none, by design. No photographs, no raster illustration, nothing from
a stock library. Everything visual on the site is either type, a rule, or
inline SVG:

- `Illustrations.tsx` holds one **route schematic** per process page, plus one
  for About — diagrams of how a stage actually works, drawn in near-black
  lines, blue nodes and plates. Each is cropped to its own drawing's bounds via
  the `viewBox` prop so no frame carries dead ground, and each is
  `aria-hidden`, because the page states everything the diagram shows.
- `RouteBoard.tsx` is the signature graphic — the four real routes, built from
  the same `pathways` array that prices them, so the picture cannot drift from
  the product. It is HTML rather than SVG, which means it sets in the site's
  own faces and reflows on a phone instead of scaling to nothing.
- The catalogue's specialisation bands are **signage plates**: a dark block
  with the name and the count. The nine photographs that used to sit there were
  licensed and generated stand-ins and were the weakest thing on the site;
  removing them took 568KB off the build.

If real photography is ever added — your own sessions, your own workspaces —
record its provenance in `public/images/CREDITS.json` before it ships.

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

Ranked by what leaving it costs. The first two need the business, not the
codebase.

1. **Point the domain at this site.** Every canonical tag and the sitemap
   declare `www.avirowork.com`, which currently redirects to a different
   website. Until that moves, nothing published here can rank.
2. **The four legal gaps.** No privacy notice (UK GDPR — every CTA opens
   WhatsApp, which is personal data), no terms or cancellation rights
   (Consumer Contracts Regulations 2013 — a 14-day right to cancel must be
   given before purchase), no company identity in the footer (registered name,
   number, office), and prices state "VAT included" with no VAT number shown.
   Copy can be drafted; the facts have to be confirmed.
3. **Decide on the "50 hours" claim.** The catalogue publishes it on all 37
   programme pages and the home hero; `/training-structure` deliberately
   publishes no training hours. Both claims are currently reachable in one
   visit.
4. **Structured data.** No JSON-LD anywhere. Course (×37), Organization and
   FAQPage all apply and all come from content that already exists.
5. **Meta descriptions.** Twenty-one run past 160 characters, the four process
   pages worst at 277–340, because they are derived rather than written.
6. **British spelling.** The copy mixes `programme`/`program`,
   `behaviour`/`behavior`, `enrol`/`enroll`. The `/programs/` URL is the one to
   think twice about — changing it means redirects.
7. **The About page's story and people.** Deliberately absent until the
   business supplies them. Trainer names and real experience are the strongest
   trust signal the site could carry.
8. **Curriculum review by a practitioner.** All 37 curricula are distinct and
   name real tooling, but nobody who teaches these subjects has signed them
   off — module hours especially, since those are what a candidate plans
   around.
