import type { RichText } from "./types";

/**
 * The blog.
 *
 * Posts are structured content rather than Markdown files, which is the same
 * convention every other content file here follows — the site is a static
 * export with no MDX pipeline, and adding one for a handful of posts would be
 * more machinery than the problem needs. A post is a list of blocks; the page
 * knows how to render each kind.
 *
 * WRITING A POST. Add an entry to `posts` below. `slug` becomes the URL and
 * must not change once published — a changed slug is a dead link and a lost
 * search ranking. `published` is an ISO date; posts sort newest first from it.
 * Reading time is counted from the words rather than stored, so it cannot
 * drift from the text.
 *
 * WHAT BELONGS HERE. This is the one part of the site that can rank for
 * something other than the brand name. The 37 curriculum pages answer "what
 * does this course teach"; nobody searches that. People search "data analyst
 * salary uk", "how to change career into IT", "do I need a degree for cloud" —
 * questions the business can answer honestly and at length. Write those.
 *
 * WHAT DOES NOT. Anything that implies an outcome the business has not
 * measured. The rule that holds everywhere else on this site holds here too:
 * market data with a source and a date is publishable, a graduate outcome is
 * not until there is one to report.
 */

export type BlogBlock =
  | { readonly kind: "paragraph"; readonly text: RichText }
  | { readonly kind: "heading"; readonly text: string }
  | { readonly kind: "list"; readonly items: readonly RichText[] }
  /**
   * The UK salary and vacancy table, rendered from `marketData.ts`. Kept as a
   * block rather than typed out so the post and the programme cards can never
   * disagree about a figure — refresh the data once and both move.
   */
  | { readonly kind: "marketTable" };

export type BlogPost = {
  /** URL segment. Permanent once published. */
  readonly slug: string;
  readonly title: string;
  /** One sentence, used on the index and as the meta description. */
  readonly summary: string;
  /** ISO date, e.g. "2026-08-25". */
  readonly published: string;
  readonly blocks: readonly BlogBlock[];
};

export const posts: readonly BlogPost[] = [
  {
    slug: "uk-it-salaries-and-vacancies",
    title: "What IT roles actually pay in the UK — and how many jobs there are",
    summary:
      "Median advertised salaries and live vacancy counts for fourteen IT roles, from a single source, with the date they were measured.",
    published: "2026-08-25",
    blocks: [
      {
        kind: "paragraph",
        text: "Most training providers will tell you the salary you could earn. Very few will tell you where the number came from, when it was measured, or how many of those jobs actually exist. Here is the whole table, from one source, with the date attached.",
      },
      {
        kind: "paragraph",
        text: "Two columns matter and they matter differently. The salary tells you what the job is worth. The vacancy count tells you how many chances you get — and a well-paid role with two hundred openings a year is a harder target than a middling one with three thousand.",
      },
      { kind: "marketTable" },
      { kind: "heading", text: "How to read this without misleading yourself" },
      {
        kind: "paragraph",
        text: "These are median advertised salaries, not starting salaries. The median is the middle of everything advertised, which includes people with ten years of experience. Your first role in any of these will sit below the figure shown — often well below. Treat the table as the shape of a career, not a starting offer.",
      },
      {
        kind: "paragraph",
        text: "The vacancy counts are permanent roles advertised over six months, not a live count of what is open this minute. They are useful for comparing one field against another, which is what they are here for.",
      },
      { kind: "heading", text: "The three things the table actually tells you" },
      {
        kind: "list",
        items: [
          "Volume and pay are not the same decision. AI roles lead on both, but IT support has more openings than data science and cloud engineering combined — and it is the most common way people without a technical background get their first job in the industry at all.",
          "Some well-paid fields are small. SAP consulting pays the most in this table and advertises the fewest roles. That is not a reason to avoid it; it is a reason to know what you are choosing before you spend months on it.",
          "The entry point and the destination can be different roles. Plenty of people start in support or analysis and move into cloud or data within two years, which is a far more common path than jumping straight into the highest-paid column.",
        ],
      },
      { kind: "heading", text: "Where these figures came from" },
      {
        kind: "paragraph",
        text: "IT Jobs Watch, which derives both the salary and the vacancy count from UK job adverts over a rolling six-month window. Every row links to the page it came from, so you can check any of it yourself and see how it has moved since.",
      },
      {
        kind: "paragraph",
        text: "These describe the market you would be entering. They are not our graduates' results — we do not publish outcome figures we have not measured, and when we have them, they will be labelled as ours rather than as the market's.",
      },
    ],
  },
];

/** Newest first. */
export const sortedPosts: readonly BlogPost[] = posts
  .slice()
  .sort((a, b) => b.published.localeCompare(a.published));

export function findPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

/**
 * Reading time in minutes, counted from the post rather than stored.
 *
 * 220 words a minute is the usual estimate for adult non-fiction. Rounded up,
 * and never less than one, so a short post does not claim "0 min read".
 */
export function readingMinutes(post: BlogPost): number {
  const words = post.blocks.reduce((total, block) => {
    if (block.kind === "paragraph") {
      return total + countWords(block.text);
    }
    if (block.kind === "heading") {
      return total + block.text.split(/\s+/).length;
    }
    if (block.kind === "list") {
      return total + block.items.reduce((sum, item) => sum + countWords(item), 0);
    }
    // The market table is scanned rather than read; treat it as half a minute.
    return total + 110;
  }, 0);

  return Math.max(1, Math.ceil(words / 220));
}

function countWords(value: RichText): number {
  if (typeof value === "string") return value.split(/\s+/).length;
  return value.reduce(
    (sum, part) => sum + (typeof part === "string" ? part.split(/\s+/).length : 1),
    0,
  );
}

/** "25 August 2026" — written out, because 25/08 and 08/25 mean different things. */
export function formatPublished(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
