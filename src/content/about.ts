import type { RichText } from "./types";

/**
 * The About page.
 *
 * Everything here is something the business can stand behind today: what we
 * sell, how we sell it, where we operate, and how to reach us. There is no
 * founding date, no headcount, no student total and no success rate, because
 * none of those has been supplied — and an About page is exactly where an
 * invented one would do the most damage.
 *
 * The story and the people are the two sections still to come. Add them here
 * and drop them into `about/page.tsx`; nothing else has to move.
 */

export const aboutHero = {
  eyebrow: "About AVIROwork Consultancy",
  headline: "Training that ends in a job,",
  headlineAccent: "not a certificate.",
  body: "AVIROwork Consultancy is an IT training and placement business working across the United Kingdom and Canada. We teach the subject, put you through project work that gets reviewed, and then take your profile to employers — that last part being the one most training stops short of.",
} as const;

export const aboutFacts: readonly { value: string; label: string }[] = [
  { value: "37", label: "programmes, each with a published curriculum" },
  { value: "4", label: "pathways, priced stage by stage" },
  { value: "2", label: "markets served — the UK and Canada" },
];

export const whatWeDo: readonly { title: string; body: RichText }[] = [
  {
    title: "We teach it live",
    body: "An hour a day with somebody who works in the field, to a syllabus, in order. Morning and evening batches, every session recorded, and questions answered while you are still in the room rather than filed for later.",
  },
  {
    title: "We make you build",
    body: "Five briefed projects, each planned, designed, built and reviewed the way a delivery team would. You finish holding a documented portfolio, which is what an interviewer actually asks to see.",
  },
  {
    title: "We take you to market",
    body: "Your profile rebuilt for the roles you want, applications going out on your behalf, and recruiters approached directly — with the campaign adjusted on what comes back, until you are hired.",
  },
  {
    title: "One person stays with you",
    body: "A named mentor from the first call to the first day, who can see your attendance and your practice and who tells you what you need to hear rather than what keeps you enrolled.",
  },
];

export const principles: readonly { title: string; body: RichText }[] = [
  {
    title: "A course that ends at the certificate ends too early",
    body: "The gap between finishing a course and getting hired is where most people stall, and it is the part almost nobody sells. It is the reason placement support is a stage of our programme rather than a favour at the end of one.",
  },
  {
    title: "Prices you can read without booking a call",
    body: "Every stage carries a published price, per market, tax included. A pathway costs what its stages add up to. There is no bundle rate to negotiate and nothing that only appears once you are on the phone.",
  },
  {
    title: "No number we cannot stand behind",
    body: "We publish no placement rates, no student totals and no testimonials we have not collected. When a figure is not measured it is simply absent, because a plausible-looking statistic is worse than none.",
  },
  {
    title: "We say what a thing is not",
    body: "Support continues until you are hired — that is not a guaranteed offer, and we say so on the page that sells it. We help candidates approach licensed sponsoring employers, and we are not immigration advisers. Both belong in the shop window, not the small print.",
  },
];

export const reach = {
  title: "Where we work",
  body: "Training is delivered online, so where you live matters less than which batch time suits you. The evening batch runs in UK hours specifically so it sits after a working day. We price the UK and Canada separately, in their own currencies, because they are two markets rather than one converted into the other. Our office is in London, and we run occasional in-person sessions there — nothing on the programme depends on attending one.",
} as const;
