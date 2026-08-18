import type { PriceKey } from "./regions";
import type { FaqItem, RichText } from "./types";

/**
 * Training Structure page copy.
 *
 * The page describes how a programme actually runs — hours, batches,
 * attendance, projects — and what each stage costs. Prices live in
 * `regions.ts` keyed by market, because the UK and Canada have their own
 * price lists rather than one converted into the other. A stage links to a
 * price by key, never by its display title.
 */

export const structureHero = {
  eyebrow: "How our training works",
  headline: "Four pathways,",
  headlineAccent: "one destination.",
  body: "Every AVIROwork Consultancy programme is assembled from the same priced stages: instructor-led training — regular or AI-focused — a hands-on project bootcamp, and resume marketing that carries on until you are hired. Pick the pathway that matches where you are starting from and skip what you have already done.",
} as const;

export type PathwayStage = {
  /** What kind of stage this is, shown as the card's eyebrow. A stage sits in
   *  a different position in every pathway, so a step number would contradict
   *  the row it is standing in. */
  readonly kind: string;
  /** Short name, used on the pathway cards where the full title will not fit. */
  readonly label: string;
  readonly title: string;
  readonly body: RichText;
  /** Omitted for the two training options, which publish no hour count. */
  readonly stat?: string;
  readonly statLabel?: string;
  /** Looks the stage's price up per region. */
  readonly priceKey: PriceKey;
  readonly points: readonly RichText[];
};

/**
 * The stages a pathway is built from. Each is quoted on its own, so they are
 * steps you move through rather than tiers you choose between, and a pathway
 * costs whatever its stages come to.
 *
 * The two training stages are alternatives — the regular track or the
 * AI-focused one — and head their own pathways for that reason. Neither
 * publishes an hour count, since the two differ in shape as well as length and
 * any single figure would misrepresent one of them.
 */
export const pathwayStages: readonly PathwayStage[] = [
  {
    kind: "Training",
    label: "Regular Training",
    priceKey: "regular-training",
    title: "Regular Training Program",
    body: "Live instructor-led teaching in your chosen subject, on a fixed schedule rather than a shelf of recordings.",
    points: [
      "Daily one-hour sessions with a working practitioner",
      "Morning and evening batches, so the schedule fits around a job",
      "10–20 minutes of daily practice — short labs and challenges between sessions",
      "Every session recorded, so a missed class is not a missed module",
      "Certification preparation built into the syllabus rather than bolted on afterwards",
      "Closes with a job-readiness screening across technical and behavioural rounds",
    ],
  },
  {
    kind: "Training",
    label: "AI Training",
    priceKey: "ai-training",
    title: "AI Training Program",
    body: "The same structure, built around the AI skills employers now screen for — for anyone targeting an AI-titled role.",
    points: [
      "Everything in the regular programme, taught through an AI lens",
      "Large language models, prompting, RAG and agent patterns",
      "Applied projects on the AI services of AWS, Azure and Google Cloud",
      "Model evaluation, guardrails and responsible-use practice",
      "Suited to the AI Engineer, Gen AI, Agentic AI and AI analyst tracks",
      "Closes with the same job-readiness screening as the regular programme",
    ],
  },
  {
    kind: "Project work",
    label: "Bootcamp",
    priceKey: "bootcamp",
    title: "Hands-on project intensive",
    body: "The applied half of the pathway — building and shipping real work under deadline, rather than following along.",
    stat: "20",
    statLabel: "hours of intensive build time",
    points: [
      "Five projects, rising from fundamentals to a full capstone",
      "Each one runs through the same four phases: plan, architect, build, review",
      "100% hands-on, with live code review from the trainer who taught the material",
      "Built on the tooling employers actually run — cloud platforms, containers, CI",
      "You finish with a documented GitHub portfolio you can hand to an interviewer",
    ],
  },
  {
    kind: "Placement",
    label: "Resume Marketing",
    priceKey: "resume-marketing",
    title: "Positioning and placement support",
    body: "The part that usually stops the day a course ends. Here it runs until you have an offer.",
    stat: "1:1",
    statLabel: "mentoring throughout",
    points: [
      "An ATS-ready resume built around your target role, not a generic template",
      "Profile positioning so recruiters can see your fit in one pass",
      "Your profile marketed directly to employers and recruitment partners",
      "Mock interviews and technical preparation before you start applying",
      "Support continues until you are hired — support throughout, not a guaranteed offer",
    ],
  },
];

/** Requirements that apply across the training stage. */
export const commitments: readonly { value: string; label: string }[] = [
  { value: "90%", label: "attendance required across live sessions" },
  { value: "75%", label: "overall compliance — attendance, self-study and labs" },
  { value: "30 days", label: "maximum break before a rejoining fee applies" },
];

/** How someone moves from a published price to a place on a batch. */
export const quoteSteps: readonly { title: string; body: RichText }[] = [
  {
    title: "Book a consultation",
    body: "A real conversation about your background, your target role and which stages you actually need. Free, and there is no script.",
  },
  {
    title: "Agree the pathway",
    body: "Which programme, whether the AI-focused track is the better fit, and how the bootcamp slots around your week.",
  },
  {
    title: "Confirm and enrol",
    body: "Written confirmation of the stages you are taking and the total, with flexible payment options discussed on the call so the schedule fits your circumstances.",
  },
];

export const quotePanel = {
  heading: "A pathway costs what its stages add up to",
  body: "Every stage carries its own price, and a pathway is simply the stages it contains — nothing is marked up for being sold together, and nothing is hidden behind a package built around someone else\u2019s situation. Take the full route if you are starting from scratch, join at the bootcamp if you already have the theory, or come to us for resume marketing alone. You can add a stage later whenever it makes sense.",
} as const;

export const structureFaqs: readonly FaqItem[] = [
  {
    question: "Which pathway should I take?",
    answer:
      "It comes down to what you already have. New to the discipline: the Regular pathway teaches it, builds it and markets it. Chasing an AI-titled role: the AI pathway does the same with the training stage rebuilt around model and agent work. Holding the theory but with nothing shipped: the Bootcamp pathway starts you at the project stage. Able to do the job but stuck at the screening stage: the Marketing pathway is the one you need. If none of those obviously describes you, that is exactly what the free consultation is for.",
  },
  {
    question: "Can I start on one pathway and add to it later?",
    answer:
      "Yes. Because every stage is quoted on its own, adding one later costs the same as it would have cost on day one — there is no penalty for building your route in steps. People often take the training stage first, then come back for the bootcamp once they have seen how far the theory alone carries them.",
  },
  {
    question: "When do sessions run, and can I keep working?",
    answer:
      "Sessions are an hour a day, with morning and evening batches to choose from — the evening batch runs in UK hours specifically so it sits after a working day. Everything is delivered online and recorded, so the programme is built to fit around a full-time job.",
  },
  {
    question: "Can I join from outside London?",
    answer:
      "Yes. Training is delivered online, so you can take part from anywhere the batch times work for you — that covers the UK and Canada alike. We also run in-person meetups and one-to-one sessions in London for anyone who wants them, but nothing on the programme depends on attending in person.",
  },
  {
    question: "What happens if I miss a session?",
    answer:
      "Recordings go up after every class, so you can catch up in your own time. We do ask for 90% attendance across live sessions and 75% overall compliance once self-study and labs are counted, because the people who hit those numbers are the ones who finish job-ready.",
  },
  {
    question: "What currency are prices shown in, and is tax included?",
    answer:
      "Use the region switch above the prices to see the market you are in — UK prices are in pounds sterling, Canadian prices in Canadian dollars. Tax is included either way: the figure on the card is the amount you pay, with nothing added at the end.",
  },
  {
    question: "Do you support people who need visa sponsorship?",
    answer:
      "Yes — sponsorship-focused placement is a core part of what we do, and a large share of the people we work with are international candidates targeting UK tech roles. We help you identify licensed sponsoring employers, position your profile for them, and prepare for their process. We are a training and placement provider, not an immigration adviser, so we support the job search rather than the visa application itself.",
  },
  {
    question: "What happens if I need to pause partway through?",
    answer:
      "Breaks of up to 30 days are fine — tell your mentor and we will hold your place. Beyond 30 days a rejoining fee applies, because your batch will have moved on and you will need to pick up with a later one. Talk to us early either way; pausing is far easier to arrange before you fall behind than after.",
  },
];
