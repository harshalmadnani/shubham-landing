import type { RichText } from "./types";

/**
 * The four process pages behind "How It Works".
 *
 * Each one answers a single question — what actually happens during this part
 * of the programme — and every claim on them traces back to something the site
 * already commits to elsewhere: the stage cards on /training-structure, the
 * services list, and the FAQs. Nothing here invents a policy.
 *
 * Cadences the business has not fixed (how often a mentor calls, how long a
 * marketing campaign runs before it is reviewed) are deliberately absent
 * rather than guessed at. Add them here when they are decided; the pages read
 * the same shape either way.
 */

export type ProcessStep = {
  readonly title: string;
  readonly body: RichText;
};

export type ProcessFact = {
  readonly value: string;
  readonly label: string;
};

export type ProcessPage = {
  readonly slug: string;
  readonly navLabel: string;
  readonly eyebrow: string;
  readonly headline: string;
  readonly headlineAccent: string;
  readonly lead: RichText;
  /** The at-a-glance row under the hero. Three, or none. */
  readonly facts: readonly ProcessFact[];
  readonly stepsTitle: string;
  readonly stepsLead: RichText;
  readonly steps: readonly ProcessStep[];
  readonly includedTitle: string;
  readonly included: readonly RichText[];
  /** Who the stage suits, in their own words rather than ours. */
  readonly suitsTitle: string;
  readonly suits: readonly RichText[];
  /** Boundaries. Saying what a stage is not is what makes the rest credible. */
  readonly boundariesTitle: string;
  readonly boundaries: readonly RichText[];
  /** Where this stage sits in the four pathways. */
  readonly pathwayNote: RichText;
  readonly enquiry: string;
};

export const processIndex = {
  eyebrow: "How it works",
  headline: "Four processes,",
  headlineAccent: "no mystery in any of them.",
  body: "Every pathway is assembled from the same parts. These pages describe each one from the inside — what happens, in what order, and what we ask of you while it runs.",
} as const;

export const processes: readonly ProcessPage[] = [
  {
    slug: "training",
    navLabel: "Training",
    eyebrow: "Training process",
    headline: "One hour a day,",
    headlineAccent: "live, with a practitioner.",
    lead: "Training here is a schedule you keep, not a library you are handed. Sessions run daily, a person teaches them, and the short practice between them is what makes the last one stick.",
    facts: [
      { value: "1 hour", label: "live session every day" },
      { value: "2 batches", label: "morning or evening, so it fits around a job" },
      { value: "90%", label: "attendance we ask for across live sessions" },
    ],
    stepsTitle: "What happens, in order",
    stepsLead: "From the first call to the screening that closes the stage.",
    steps: [
      {
        title: "Free consultation",
        body: "A real conversation about your background and the role you are aiming at, which is what settles the program and the starting point inside it. No script, and no charge.",
      },
      {
        title: "Choose your track",
        body: "Regular or AI-focused. Same structure either way; the AI track rebuilds the teaching around models, prompting, RAG and agent patterns for anyone targeting a role with AI in the title.",
      },
      {
        title: "Pick your batch",
        body: "Morning or evening. The evening batch runs in UK hours specifically so it sits after a working day rather than through one.",
      },
      {
        title: "Daily live sessions",
        body: "An hour a day with someone who works in the field, teaching to a fixed syllabus. You can ask a question and get an answer in the same hour.",
      },
      {
        title: "Practice between sessions",
        body: "Ten to twenty minutes of short labs and challenges. Small on purpose — the point is that today's session is still in your hands when tomorrow's starts.",
      },
      {
        title: "Recordings for anything missed",
        body: "Every session is recorded and goes up afterwards, so a missed class is a catch-up rather than a missed module.",
      },
      {
        title: "Certification preparation",
        body: "Built into the syllabus as you go rather than bolted on as a cram week at the end.",
      },
      {
        title: "Job-readiness screening",
        body: "The stage closes with a screening across technical and behavioural rounds. It tells you — and us — whether you are ready for the next stage or need more time on this one.",
      },
    ],
    includedTitle: "What the fee covers",
    included: [
      "Daily live instruction from a working practitioner, for the length of the program",
      "A recording of every session, kept available to you",
      "Labs and challenges set between sessions, with feedback on them",
      "Certification preparation woven through the syllabus",
      "A mentor assigned to you for the whole stage",
      "The closing job-readiness screening, technical and behavioural",
    ],
    suitsTitle: "This is the right starting point if",
    suits: [
      "You are new to the discipline and want the whole thing taught properly, in order",
      "You have read around the subject but have never been taught it to a syllabus",
      "You are switching fields and need the fundamentals before anything else makes sense",
      "You are working full time and need a schedule that survives a working week",
    ],
    boundariesTitle: "What it is not",
    boundaries: [
      "Not a recorded course you work through alone — the sessions are live and scheduled",
      "Not self-paced. Batches move together, which is what makes the daily hour work",
      "Not a placement service on its own. Training teaches the subject; the marketing stage is what puts your profile in front of employers",
    ],
    pathwayNote:
      "Training opens pathways 1 and 2 — the regular track and the AI track — and both continue into the bootcamp and then marketing.",
    enquiry: "Hi! I'd like to know more about how the training runs.",
  },
  {
    slug: "bootcamp",
    navLabel: "Bootcamp",
    eyebrow: "Bootcamp process",
    headline: "Five projects,",
    headlineAccent: "four phases each.",
    lead: "The bootcamp is where the theory stops being theory. You build five things under deadline, each one reviewed line by line, and you leave holding a portfolio rather than a certificate.",
    facts: [
      { value: "20", label: "hours of intensive build time" },
      { value: "5", label: "projects, rising to a full capstone" },
      { value: "100%", label: "hands-on — nothing is demonstrated at you" },
    ],
    stepsTitle: "How a project runs",
    stepsLead: "Every one of the five moves through the same four phases, which is what turns five separate builds into one method you can repeat at work.",
    steps: [
      {
        title: "Plan",
        body: "You are given a brief, not a solution. The first job is deciding what the thing has to do, what it does not have to do, and what finished looks like.",
      },
      {
        title: "Architect",
        body: "The shape before the code: components, data, and where the thing will run. Decisions get made out loud, so a wrong turn is caught before it costs you the afternoon.",
      },
      {
        title: "Build",
        body: "Hands on the keyboard, on the tooling employers actually run — cloud platforms, containers, CI. The trainer is present while you build rather than waiting at the end.",
      },
      {
        title: "Review",
        body: "Live code review from the trainer who taught the material. The kind that names what is wrong and why, which is the part most courses skip.",
      },
    ],
    includedTitle: "What the fee covers",
    included: [
      "Five briefed projects, rising from fundamentals to a full capstone",
      "Twenty hours of guided build time with a trainer present",
      "Live code review on each project, not a grade at the end",
      "Work built on the tooling employers run — cloud, containers, CI",
      "A documented GitHub portfolio you can hand to an interviewer",
      "A certificate on completion, which the portfolio is the evidence behind",
    ],
    suitsTitle: "This is the right starting point if",
    suits: [
      "You have the theory — from a degree, a previous course, or the job itself — and nothing shipped to show for it",
      "Your interviews go well until someone asks what you have built",
      "You have just finished the training stage and want the applied half straight away",
      "You can already code but have never worked to a brief, a deadline and a review",
    ],
    boundariesTitle: "What it is not",
    boundaries: [
      "Not a first introduction to the subject. It assumes the fundamentals are already there",
      "Not a watch-along. Every hour of it is you building",
      "Not a placement service on its own — pair it with marketing if the goal is an offer",
    ],
    pathwayNote:
      "The bootcamp is the middle stage of pathways 1 and 2, and the opening stage of pathway 3 for anyone who already holds the theory.",
    enquiry: "Hi! I'd like to know more about how the bootcamp runs.",
  },
  {
    slug: "mentoring",
    navLabel: "Mentoring",
    eyebrow: "Mentoring",
    headline: "One person who knows",
    headlineAccent: "where you actually are.",
    lead: "Mentoring is not a stage you buy — it runs underneath the ones you do. From your first session you have a named mentor who has worked the role you are training for, and who is watching your progress closely enough to say something before a problem becomes a lost month.",
    facts: [
      { value: "1:1", label: "a named mentor, for the whole programme" },
      { value: "75%", label: "overall compliance we track — attendance, self-study and labs" },
      { value: "30 days", label: "the longest break we can hold your place for" },
    ],
    stepsTitle: "What a mentor is there for",
    stepsLead: "Less a scheduled call, more a person with the context to answer the question you actually have.",
    steps: [
      {
        title: "Placing you correctly",
        body: "Before anything is booked, your mentor is the one working out which program and which starting point fit what you can already do — including telling you when a cheaper route is the right one.",
      },
      {
        title: "Unblocking the subject",
        body: "Guidance from someone who has worked the role rather than read about it. The difference shows in the answers: what matters in practice, what is textbook detail, and what you can safely skip for now.",
      },
      {
        title: "Watching the numbers that predict trouble",
        body: "We ask for 90% attendance across live sessions and 75% overall once self-study and labs are counted. Your mentor sees both and raises a slip early, because the people who hit those numbers are the ones who finish job-ready.",
      },
      {
        title: "Handling a pause properly",
        body: "Life happens. Tell your mentor and a break of up to 30 days holds your place. Beyond that a rejoining fee applies, because your batch will have moved on — which is exactly why the conversation is easier before you fall behind than after.",
      },
      {
        title: "Preparing you for the screening",
        body: "The training stage closes with a technical and behavioural screening. Your mentor is who you rehearse with, and who tells you honestly whether you are ready.",
      },
      {
        title: "Staying with you into the search",
        body: "Mentoring does not end when the teaching does. Through the marketing stage it becomes interview preparation, feedback on the rounds you have sat, and a read on the offers in front of you.",
      },
    ],
    includedTitle: "What mentoring covers",
    included: [
      "A named mentor from your first session, matched to your field",
      "Guidance from someone who has worked the role you are training for",
      "Progress checks against attendance and self-study, raised with you early",
      "Rehearsal for the job-readiness screening, technical and behavioural",
      "Interview preparation and debriefs once the search starts",
      "A single point of contact for pauses, batch changes and anything that goes wrong",
    ],
    suitsTitle: "Where a mentor makes the difference",
    suits: [
      "You are not sure which program is honestly the right one for your background",
      "You can follow a session but freeze when you have to apply it",
      "You have fallen behind and would rather sort it out than quietly stop attending",
      "You are getting interviews and want to know why they are not converting",
    ],
    boundariesTitle: "What it is not",
    boundaries: [
      "Not a separate purchase — mentoring runs alongside the stages you take",
      "Not a replacement for the sessions. A mentor unblocks the subject; the trainer teaches it",
      "Not a careers adviser at arm's length — mentors are practitioners in your field",
    ],
    pathwayNote:
      "Mentoring runs through all four pathways rather than sitting inside any one of them.",
    enquiry: "Hi! I'd like to know more about how mentoring works.",
  },
  {
    slug: "marketing",
    navLabel: "Marketing",
    eyebrow: "Marketing process",
    headline: "Your profile,",
    headlineAccent: "in front of the right people.",
    lead: "This is the part that usually stops the day a course ends. Here it starts there instead: the resume rebuilt around the role you want, the profile positioned so a recruiter sees the fit in one pass, and the search worked until you are hired.",
    facts: [
      { value: "1:1", label: "mentoring throughout the search" },
      { value: "ATS", label: "resumes built to pass the screen that reads them first" },
      { value: "Until hired", label: "support continues — not a guaranteed offer" },
    ],
    stepsTitle: "What happens, in order",
    stepsLead: "From what you have now to an offer you can weigh up.",
    steps: [
      {
        title: "Read what you have",
        body: "Your current resume, your profile and your actual experience, read against the roles you are targeting. The gap between the three is usually the whole problem.",
      },
      {
        title: "Rebuild the resume",
        body: "Built around your target role rather than dropped into a template, and written to get through the automated screen that reads it before any person does.",
      },
      {
        title: "Position the profile",
        body: "Your public profile rewritten so a recruiter can see your fit in one pass. Same facts, ordered so the relevant ones are not on the second page.",
      },
      {
        title: "Take it to market",
        body: "Your profile marketed directly to employers and to recruitment partners, rather than left to sit on a job board waiting to be found.",
      },
      {
        title: "Prepare before you apply",
        body: "Mock interviews and technical preparation come before the applications go out, so the first real interview is not the practice run.",
      },
      {
        title: "Work the search until it lands",
        body: "Rounds get debriefed, the positioning gets adjusted on what comes back, and the campaign keeps running. Support continues until you are hired — support throughout, not a guaranteed offer.",
      },
    ],
    includedTitle: "What the fee covers",
    included: [
      "An ATS-ready resume built around your target role, not a generic template",
      "Profile positioning so recruiters can see your fit in one pass",
      "Your profile marketed directly to employers and recruitment partners",
      "Mock interviews and technical preparation before you start applying",
      "Debriefs after interview rounds, and adjustments based on them",
      "Support that continues until you are hired",
    ],
    suitsTitle: "This is the right starting point if",
    suits: [
      "You can already do the job and the problem is that applications go nowhere",
      "You trained somewhere else and were left with a certificate and no route to market",
      "You are getting screened out before a human reads anything",
      "You need sponsorship and want to be positioned for employers who actually hold a licence",
    ],
    boundariesTitle: "What it is not",
    boundaries: [
      "Not a guaranteed offer. Support continues until you are hired; the offer itself is never something anyone can promise",
      "Not immigration advice. We help you find and approach licensed sponsoring employers and prepare for their process — we are a training and placement provider, not an immigration adviser",
      "Not a job board subscription. The point is that your profile is taken to employers rather than left where they might find it",
    ],
    pathwayNote:
      "Marketing closes pathways 1, 2 and 3, and is the whole of pathway 4 for anyone who can already do the work.",
    enquiry: "Hi! I'd like to know more about how resume marketing works.",
  },
];

export function findProcess(slug: string): ProcessPage | undefined {
  return processes.find((process) => process.slug === slug);
}
