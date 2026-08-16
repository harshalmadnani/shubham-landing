import type { FaqItem, RichText } from "./types";

/**
 * Pricing page copy.
 *
 * The page deliberately publishes no figures. Everything the business has not
 * confirmed — rates, the bootcamp reduction, payment terms, tax treatment,
 * where in-person sessions run — is a pending chip rather than a plausible
 * invention, same as the rest of the site.
 */

export const pricingHero = {
  eyebrow: "Pricing & pathways",
  headline: "One pathway,",
  headlineAccent: "one price.",
  body: "Training, bootcamp and placement support aren't sold separately. A pathway bundles all three into a single route that runs from your first session through to an offer — so the price covers the whole journey, not a course in isolation.",
} as const;

export type PathwayPart = {
  readonly label: string;
  readonly title: string;
  readonly body: RichText;
  readonly points: readonly RichText[];
};

/** The three things every pathway combines. Rendered as an assembly, not a
 *  price table — they add up to one thing rather than competing as options. */
export const pathwayParts: readonly PathwayPart[] = [
  {
    label: "Training",
    title: "Instructor-led programme",
    body: "Live teaching on a schedule, not a shelf of recordings you work through alone.",
    points: [
      "Choose a standard track or an AI-focused one",
      ["Sessions run ", { token: "schedule options" }],
      ["Roughly ", { token: "X+" }, " hours of live instruction"],
    ],
  },
  {
    label: "Practice",
    title: "Hands-on bootcamp",
    body: "The applied half — building and shipping real work rather than following along.",
    points: [
      ["Added alongside training at a reduced rate of ", { token: "bootcamp discount" }],
      "Project work you can point an interviewer at",
      "Reviewed by the mentors who taught the material",
    ],
  },
  {
    label: "Placement",
    title: "Resume marketing & support",
    body: "The part that usually stops when a course ends. Here it carries on.",
    points: [
      "Positioning, resume marketing and applications",
      "Interview preparation before you start applying",
      [
        "Continues for ",
        { token: "X months" },
        " after you finish — support, not a guarantee of an offer",
      ],
    ],
  },
];

/** What replaces a published price list. */
export const quoteSteps: readonly { title: string; body: RichText }[] = [
  {
    title: "Book a consultation",
    body: "A real conversation about your background and target role. Free, and there's no script.",
  },
  {
    title: "Agree the pathway",
    body: "Which programme, whether the AI-focused track fits, and how the bootcamp slots in around your week.",
  },
  {
    title: "Get it in writing",
    body: [
      "A written quote covering the full pathway, with payment options — ",
      { token: "payment terms" },
      ".",
    ],
  },
];

export const quotePanel = {
  heading: "Why there's no price list here",
  body: "A pathway is assembled around where you're starting from, so a single published figure would be wrong for most people who read it. You get a firm number before you commit to anything — it just comes from a conversation rather than a table.",
} as const;

export const pricingFaqs: readonly FaqItem[] = [
  {
    question: "What currency are prices quoted in, and is tax included?",
    answer: [
      "Quotes are issued in ",
      { token: "currency" },
      ", with tax shown separately where it applies — ",
      { token: "VAT treatment" },
      ".",
    ],
  },
  {
    question: "Do you support people who need visa sponsorship?",
    answer: [{ token: "sponsorship support policy" }],
  },
  {
    question: "Can I join from outside the local area?",
    answer: [
      "Programmes are delivered online, so you can take part from anywhere sessions fall at a workable hour — ",
      { token: "schedule options" },
      ". In-person meetups and one-to-one sessions run in ",
      { token: "in-person location" },
      ".",
    ],
  },
  {
    question: "What happens if I need to pause partway through?",
    answer: [{ token: "refund/pause policy" }],
  },
];
