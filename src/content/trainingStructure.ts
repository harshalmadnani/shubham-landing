import type { FaqItem, RichText } from "./types";

/**
 * Training Structure page copy.
 *
 * The page describes how a programme actually runs — hours, batches,
 * attendance, projects — and deliberately publishes no figures for cost. The
 * three stages are quoted separately, so a single headline price would be
 * wrong however it was written. Anything the business has not confirmed stays
 * a pending chip rather than a plausible invention, same as the rest of the
 * site.
 */

export const structureHero = {
  eyebrow: "How our training works",
  headline: "Three stages,",
  headlineAccent: "one route into work.",
  body: "Every Aviro Work programme runs through the same three stages: instructor-led training, a hands-on bootcamp, and resume marketing that carries on until you are hired. Take the stage you need or run all three end to end.",
} as const;

export type PathwayStage = {
  readonly step: string;
  readonly label: string;
  readonly title: string;
  readonly body: RichText;
  readonly stat: string;
  readonly statLabel: string;
  readonly points: readonly RichText[];
};

/**
 * The three stages of a pathway. Rendered as a sequence rather than a price
 * table — each is quoted on its own, so they are steps you move through, not
 * tiers you choose between.
 */
export const pathwayStages: readonly PathwayStage[] = [
  {
    step: "Stage 01",
    label: "Training",
    title: "Instructor-led programme",
    body: "Live teaching on a fixed schedule, not a shelf of recordings you work through alone.",
    stat: "50",
    statLabel: "hours of live instruction",
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
    step: "Stage 02",
    label: "Bootcamp",
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
    step: "Stage 03",
    label: "Resume marketing",
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

/** What replaces a published price list. */
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
    title: "Get it in writing",
    body: "A written quote covering each stage you take, with flexible payment options discussed on the call so the schedule fits your circumstances.",
  },
];

export const quotePanel = {
  heading: "Why there are no prices on this page",
  body: "The three stages are quoted separately, and a pathway is assembled around where you are starting from — so any single figure published here would be wrong for most people reading it. You get a firm number in writing before you commit to anything. It just comes from a conversation rather than a table.",
} as const;

export const structureFaqs: readonly FaqItem[] = [
  {
    question: "Do I have to take all three stages?",
    answer:
      "No. Each stage is quoted on its own, so you can take training alone, add the bootcamp when you want project experience, or come to us for resume marketing with skills you already have. Most people run all three in order, because that is the route that ends in an offer.",
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
    question: "What currency are quotes issued in, and is tax included?",
    answer:
      "We work with candidates in the UK and Canada. UK quotes are in pounds sterling, with VAT added where it applies under UK rules. Canadian quotes are in Canadian dollars, with GST or HST added on top in line with Canadian rules. Tax is always shown separately, never folded into the headline figure.",
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
