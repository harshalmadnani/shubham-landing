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

/**
 * A titled grid of short cards, hung under the main sequence — the five
 * projects, the programme guidelines, what we ask of you. A page has none,
 * one, or two.
 */
export type ProcessDetail = {
  readonly title: string;
  readonly lead: RichText;
  readonly items: readonly ProcessStep[];
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
  readonly details?: readonly ProcessDetail[];
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
    headline: "Five phases,",
    headlineAccent: "and none of them optional.",
    lead: "Training here is a pipeline rather than a playlist. Live sessions carry the syllabus, short daily practice fixes it in place, recordings cover anything you miss, certifications are earned as you go, and a screening at the end decides whether you are ready for the market — or whether you need longer.",
    facts: [
      { value: "1 hour", label: "of live instruction a day, led by a practitioner" },
      { value: "10–20 min", label: "of structured practice between sessions" },
      { value: "90%", label: "attendance required across live sessions" },
    ],
    stepsTitle: "The five phases",
    stepsLead: "Each one depends on the one before it, which is why none of them is a bolt-on.",
    steps: [
      {
        title: "Live instruction",
        body: "An hour a day with a trainer who works in the field, teaching a module-based syllabus in order. Questions get answered in the session rather than filed away, and a coordinator follows your progress alongside the trainer, so somebody notices before you are lost. Morning and evening batches both run, and the evening batch sits in UK hours so it lands after a working day rather than through one.",
      },
      {
        title: "Daily practice",
        body: "Ten to twenty minutes of set work between sessions — short labs, quick exercises, small challenges built on the material you have just been taught. Deliberately small, because the point is not volume: it is that today's session is still in your hands when tomorrow's begins.",
      },
      {
        title: "Recordings",
        body: "Every live session is recorded and made available afterwards. A clash at work, a bad week, or a concept that needed a second pass all have the same answer — go back to the session and watch it again. A missed class is a catch-up, never a missed module.",
      },
      {
        title: "Certifications",
        body: "The syllabus is aligned to the certification exams that carry weight in your field, so preparation happens throughout rather than as a panic at the end. Finish the modules, the practice and the certifications and the training certificate that follows rests on the work you did, not on attendance alone.",
      },
      {
        title: "Job-readiness screening",
        body: "The stage closes with a screening across technical and behavioural rounds. It is the gate into the placement pipeline, and it is honest in both directions: it tells you whether you are ready, and it stops anyone entering the market before they are.",
      },
    ],
    details: [
      {
        title: "Programme guidelines",
        lead: "The rules the programme runs on. Short, and all of them exist because ignoring them is what makes people drop out.",
        items: [
          {
            title: "Start when you are ready",
            body: "You can join at any point and start with the next module that opens. Self-study material and regular check-ins keep you moving in the meantime rather than waiting.",
          },
          {
            title: "90% attendance",
            body: "Across live sessions. The number is not arbitrary — it is where the difference between finishing job-ready and finishing on paper shows up.",
          },
          {
            title: "75% overall compliance",
            body: "Attendance, time spent studying alone and practical work, counted together. Your mentor sees the figure and will raise a slip with you early.",
          },
          {
            title: "Recordings stay available",
            body: "Every session is kept and accessible, so catching up and revising are the same simple thing rather than a favour you have to ask for.",
          },
          {
            title: "Breaks up to 30 days",
            body: "Tell your mentor and your place is held. Beyond 30 days a rejoining fee applies and a restart depends on batch availability, because your batch will have moved on without you.",
          },
          {
            title: "Certificate on completion",
            body: "It arrives once the modules, the practice activities and the certifications are all behind you — which is what makes it worth putting in front of anyone.",
          },
        ],
      },
    ],
    includedTitle: "What the fee covers",
    included: [
      "Daily live instruction from a working practitioner, for the length of the programme",
      "A module-based syllabus taught in order, not a shelf of recordings",
      "Practice activities set between sessions, with feedback on them",
      "A recording of every session, kept available to you",
      "Certification preparation woven through the syllabus rather than added at the end",
      "A coordinator and a mentor tracking your progress alongside the trainer",
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
      "Not self-paced. Batches move together, which is exactly what makes the daily hour work",
      "Not a placement service on its own. Training teaches the subject; the marketing stage is what puts your profile in front of employers",
    ],
    pathwayNote:
      "Training opens pathways 1 and 2 — the regular track and the AI track — and both continue into the bootcamp and then marketing.",
  },
  {
    slug: "bootcamp",
    navLabel: "Bootcamp",
    eyebrow: "Bootcamp process",
    headline: "Five projects,",
    headlineAccent: "four phases each.",
    lead: "The bootcamp is where the theory stops being theory. You take five briefs in your own technology and carry each one the way a delivery team would — scoped, designed, built and reviewed — with a trainer beside you rather than waiting at the end.",
    facts: [
      { value: "20", label: "hours of concentrated build time" },
      { value: "5", label: "projects, rising to a full capstone" },
      { value: "100%", label: "hands-on — nothing is demonstrated at you" },
    ],
    stepsTitle: "How every project runs",
    stepsLead: "The same four phases each time. Five separate builds become one method you can repeat on the job — which is the actual thing an employer is buying.",
    steps: [
      {
        title: "Briefing and scope",
        body: "Each project opens with a proper kick-off: what the thing has to do, the business reason it exists, which platforms and tooling the work sits on, and what counts as delivered. You get the reasoning, not just the task list — the same conversation a team has before any work starts.",
      },
      {
        title: "Architecture and design",
        body: "The shape before the code. You work through the infrastructure layout, how data moves, the deployment pipeline and the stack, and you argue for your choices out loud. It is the habit of thinking like the person who designs the system, not only the person who types it.",
      },
      {
        title: "Build under supervision",
        body: "The core of it — building, deploying and debugging with the trainer present and responding as you go. Feedback lands while the code is still warm, which is how the edge cases and the production-grade habits actually get learned rather than mentioned.",
      },
      {
        title: "Review and defence",
        body: "Every finished project is reviewed properly: the code, the architecture decisions, the documentation, and whether you can explain and defend the work you did. That last part is not a formality — it is the same skill an interviewer is testing when they ask what you built and why.",
      },
    ],
    details: [
      {
        title: "The five projects, in order",
        lead: "All five sit in the technology you enrolled in, so the portfolio you finish with is deep in one field rather than shallow across several.",
        items: [
          {
            title: "01 · Foundations",
            body: "A first build that puts the core concepts to work — environments configured, the basic workflows exercised, the fundamentals proven rather than assumed.",
          },
          {
            title: "02 · Multiple moving parts",
            body: "A larger solution with several components and an integration or two, applying the practices that are conventional in your stack rather than improvising.",
          },
          {
            title: "03 · Architecture that scales",
            body: "A design-led build: scalability, monitoring and the production-grade patterns your field actually uses, decided before they are implemented.",
          },
          {
            title: "04 · An enterprise scenario",
            body: "A realistic situation with services that depend on each other, security to harden and performance to tune — the kind of work that is waiting on the other side of the offer.",
          },
          {
            title: "05 · Capstone",
            body: "End to end, everything together: planned, designed, built, deployed and documented well enough to sit at the top of your GitHub profile.",
          },
        ],
      },
    ],
    includedTitle: "What the fee covers",
    included: [
      "Five briefed projects in your own technology, rising from foundations to capstone",
      "Twenty hours of guided build time with the trainer present throughout",
      "A live review of every project — code, architecture, documentation and your defence of it",
      "Work on the platforms employers actually run: AWS and Azure, Docker and Kubernetes, Terraform, CI pipelines",
      "A documented GitHub portfolio — real README files and a clean commit history, not a folder of exercises",
      "Morning and evening batches, so the bootcamp fits around work or study",
    ],
    suitsTitle: "This is the right starting point if",
    suits: [
      "You have the theory — from a degree, a previous course, or the job itself — and nothing shipped to show for it",
      "Your interviews go well until somebody asks what you have built",
      "You have just finished the training stage and want the applied half straight away",
      "You can already code but have never worked to a brief, a deadline and a review",
    ],
    boundariesTitle: "What it is not",
    boundaries: [
      "Not a first introduction to the subject. It assumes the fundamentals are already there",
      "Not a watch-along. Every hour of it is you building, with somebody watching the work",
      "Not a placement service on its own — pair it with marketing if the goal is an offer",
    ],
    pathwayNote:
      "The bootcamp is the middle stage of pathways 1 and 2, and the opening stage of pathway 3 for anyone who already holds the theory.",
  },
  {
    slug: "mentoring",
    navLabel: "Mentoring",
    eyebrow: "Mentoring",
    headline: "One person",
    headlineAccent: "with the whole picture.",
    lead: "Mentoring is not a stage you buy — it runs underneath the ones you do. From the first call you have a named mentor who has worked the role you are aiming at, who can see your attendance and your practice, and whose job is to say something before a slow week becomes a lost month.",
    facts: [
      { value: "1:1", label: "a named mentor, for the whole programme" },
      { value: "75%", label: "overall compliance tracked — attendance, self-study and practice" },
      { value: "30 days", label: "the longest break we can hold your place for" },
    ],
    stepsTitle: "What a mentor does, from first call to first day",
    stepsLead: "Less a slot in a calendar, more the one person with enough context to answer the question you actually have.",
    steps: [
      {
        title: "Kick-off and assessment",
        body: "The first proper conversation: what you have done, what you can do, which roles and which market you are aiming at. It ends with a route mapped out and milestones you can hold us to — including an honest answer about how long it is likely to take.",
      },
      {
        title: "Placing you correctly",
        body: "Which programme, which starting point, and whether you need all of it. This is where a mentor earns their keep by telling you that a cheaper route is the right one, or that the stage you wanted to skip is the one you need most.",
      },
      {
        title: "Unblocking the subject",
        body: "Guidance from somebody who has done the job rather than read about it. The difference shows in what they tell you to ignore: what matters in practice, what is textbook detail, and what can safely wait until you are working.",
      },
      {
        title: "Watching the numbers that predict trouble",
        body: "We ask for 90% attendance across live sessions and 75% overall once self-study and practice are counted. Your mentor sees both figures and raises a slip early — quietly, and long before it becomes a conversation about rejoining.",
      },
      {
        title: "Rehearsing the screening",
        body: "The training stage closes with a technical and behavioural screening, and your mentor is who you practise it with. A failed attempt is feedback and another go, not a door closing — the point is to be ready, not to pass first time.",
      },
      {
        title: "Through the search",
        body: "Once the marketing stage starts, mentoring becomes interview preparation: mock rounds, a debrief after every real one, and adjustments based on what actually came back rather than what we assumed would.",
      },
      {
        title: "At the offer",
        body: "Reading an offer properly — what it means for your next move, not only this one — plus the practical end of it: background checks, documentation, and being ready for a first day that goes well.",
      },
    ],
    details: [
      {
        title: "What we ask of you",
        lead: "Mentoring works in both directions. None of this is difficult, and all of it is visible to the employers looking at you.",
        items: [
          {
            title: "Keep your profile alive",
            body: "Post, comment and connect in your field. A profile with a pulse is found by recruiters searching; a dormant one has to be sent to them.",
          },
          {
            title: "Answer recruiters fast",
            body: "Same day, and sooner if you can. A recruiter waiting on a reply has usually moved to the next profile by the time it arrives.",
          },
          {
            title: "Turn up to what is booked",
            body: "Check-ins, mock interviews and reviews are the sessions that change outcomes, and they are the first ones people quietly drop.",
          },
          {
            title: "Write down what happened",
            body: "Log the interviews you sit and the conversations you have. Patterns in the rejections are only visible if somebody wrote them down.",
          },
          {
            title: "Keep building",
            body: "Keep a project moving and work towards the certifications your field respects. A search is not a pause in learning; the people who treat it as one interview worse a month in.",
          },
          {
            title: "Hold the 75% line",
            body: "Overall compliance across attendance, self-study and practice. It is the single number that best predicts who finishes and who drifts.",
          },
        ],
      },
    ],
    includedTitle: "What mentoring covers",
    included: [
      "A named mentor from your first session, matched to your field",
      "Guidance from somebody who has worked the role you are training for",
      "An assessment at the start, and a route mapped out with milestones",
      "Progress tracked against attendance and practice, and raised with you early",
      "Rehearsal for the job-readiness screening, with feedback between attempts",
      "Mock interviews and debriefs on the real rounds once the search starts",
      "A single point of contact for pauses, batch changes and anything that goes wrong",
    ],
    suitsTitle: "Where a mentor makes the difference",
    suits: [
      "You are not sure which programme is honestly the right one for your background",
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
  },
  {
    slug: "marketing",
    navLabel: "Marketing",
    eyebrow: "Marketing process",
    headline: "Your profile,",
    headlineAccent: "in front of the right people.",
    lead: "This is the part that usually stops the day a course ends. Here it starts there instead: your profile rebuilt for the roles you are actually chasing, applications going out on your behalf, recruiters approached directly, and the whole campaign adjusted on what comes back — until you are hired.",
    facts: [
      { value: "1:1", label: "mentoring throughout the search" },
      { value: "ATS", label: "resumes built to clear the screen that reads them first" },
      { value: "Until hired", label: "the campaign continues — not a guaranteed offer" },
    ],
    stepsTitle: "How the campaign runs",
    stepsLead: "Six steps, and you can see the state of all of them at any point.",
    steps: [
      {
        title: "Rebuild the profile",
        body: "Your LinkedIn and your profiles on the boards that matter in your market — Indeed, Reed and Totaljobs in the UK, the equivalents in Canada — rewritten around the language recruiters actually search on: the skills, the certifications and the job titles, in a headline and summary that survive a five-second read.",
      },
      {
        title: "Tailor the resume",
        body: "Not one resume, but versions. Each is written against the job description in front of it, formatted to clear the automated screen that reads it before any person does, and specific about what you achieved rather than what you were responsible for.",
      },
      {
        title: "Apply, on your behalf",
        body: "Applications go out daily from our side, matched to roles, employers and locations where your profile has a genuine chance. Targeted rather than sprayed: an application to a role you cannot get is not a free lottery ticket, it is a wasted day.",
      },
      {
        title: "Approach recruiters directly",
        body: "Beyond the applications, we go to the people who decide — in-house recruiters, the agencies that supply them, and the managers the role reports to — with a message written for them rather than a template sent to everyone. It is the route most candidates never use.",
      },
      {
        title: "Prepare before the calls come",
        body: "Mock interviews for the specific roles you are being put forward for, behavioural coaching, technical walkthroughs, and a straight conversation about salary before you need to have one. The first real interview should not be the first time you have said any of it out loud.",
      },
      {
        title: "Report, then adjust",
        body: "You see what went out, what came back and what was said — and the strategy moves accordingly. If a role type is not converting, the targeting changes; if the resume is not landing, it gets rewritten. A campaign nobody reviews is just activity.",
      },
    ],
    details: [
      {
        title: "Who this stage is for",
        lead: "Three routes into it, and the campaign is shaped differently for each.",
        items: [
          {
            title: "You finished the training",
            body: "You have the skills, the projects and the certifications. The job now is making sure the market sees them — which is a different discipline from learning them.",
          },
          {
            title: "You are changing fields",
            body: "Your experience is real but reads as the wrong industry. The work is repositioning it so the relevant half is on the first page and the rest supports it.",
          },
          {
            title: "You are already experienced",
            body: "You can do the job and want a better one. Targeting moves to senior roles, and the salary conversation becomes the part that matters most.",
          },
        ],
      },
    ],
    includedTitle: "What the fee covers",
    included: [
      "Your LinkedIn and job-board profiles rewritten around what recruiters search for",
      "An ATS-ready resume built around your target role, in more than one version",
      "Daily applications sent on your behalf, matched to roles you can realistically win",
      "Direct outreach to in-house recruiters, supplying agencies and the managers hiring for the role",
      "Mock interviews, behavioural coaching and technical preparation before you apply",
      "Salary and offer guidance when the conversation arrives",
      "Regular reporting on what went out, what came back, and what changed as a result",
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
      "Not a guaranteed offer. The campaign continues until you are hired; the offer itself is never something anyone can promise",
      "Not immigration advice. We help you find and approach licensed sponsoring employers and prepare for their process — we are a training and placement provider, not an immigration adviser",
      "Not a job-board subscription. The point is that your profile is taken to employers rather than left where they might find it",
    ],
    pathwayNote:
      "Marketing closes pathways 1, 2 and 3, and is the whole of pathway 4 for anyone who can already do the work.",
  },
];

export function findProcess(slug: string): ProcessPage | undefined {
  return processes.find((process) => process.slug === slug);
}

/**
 * The five bootcamp projects, exported on their own.
 *
 * Every programme's page shows these, because the projects are the same five
 * stages in whatever technology you enrolled in — that is the design of the
 * bootcamp, not a shortcut. Exported from here rather than copied onto the
 * programme pages so there is one description of them on the site.
 */
export const bootcampProjects =
  findProcess("bootcamp")?.details?.find((detail) =>
    detail.title.startsWith("The five projects"),
  )?.items ?? [];

