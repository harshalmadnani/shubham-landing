import type {
  Audience,
  Expectation,
  FaqItem,
  IncludedGroup,
  Inclusion,
  JourneyStage,
  Pathway,
  RichText,
  Service,
  Step,
  Struggle,
} from "./types";
import { totalProgramCount } from "./programs";

/** Headline figures for the strip under the hero. */
export const proofPoints: readonly RichText[] = [
  // Counted from the catalogue, so adding a program cannot leave this stale.
  `${totalProgramCount} industry-aligned programs`,
  "50 hours of instructor-led training per program",
  // Replaced the "years of combined experience" figure: the strip is a
  // three-column grid, and an unverifiable headline number is the weakest of
  // the four things we could put here.
  "Placement support that runs until you're hired",
];

export const struggles: readonly Struggle[] = [
  {
    title: "Targeting the Wrong Role",
    body: "Choosing roles based on what's familiar or convenient rather than what's actually in demand narrows your options from the start."
  },
  {
    title: "No Upskilling",
    body: "Staying in familiar territory with outdated skills — including AI tools — instead of learning what employers are actively hiring for."
  },
  {
    title: "Inconsistent Applications",
    body: "Applying heavily one week and not at all the next reduces your chances. Consistent, regular applications are what actually lead to interviews."
  },
  {
    title: "Entering the Market Unprepared",
    body: "Waiting to prepare until after landing an interview rarely works. Being interview-ready before you start applying makes the real difference."
  },
  {
    title: "Weak Resume",
    body: "Without ATS-friendly formatting, clear structure, and the right keywords, many resumes are filtered out before a person ever reviews them."
  },
  {
    title: "Targeting Too Many Roles",
    body: "Applying broadly across DevOps, QA, development, and admin roles at once dilutes your profile and makes it harder for recruiters to see your fit."
  },
];

export const audiences: readonly Audience[] = [
  {
    title: "Recent Graduates",
    body: "Start your IT career with a solid technical foundation and structured mentoring.",
    bullets: [
      "Build the practical skills hiring teams actually screen for",
      "Learn directly from mentors working in the industry",
      "Move from coursework to a real portfolio before you apply",
    ]
  },
  {
    title: "Career Changers",
    body: "Move into IT from any background, with a path built around where you're starting from.",
    bullets: [
      "Learn the specific skills your target IT role requires",
      "Get guidance built around your existing experience, not a generic syllabus",
      "Work through the transition with a mentor, not alone",
    ]
  },
  {
    title: "Non-IT Professionals",
    body: "Move from a non-technical role into IT, using the experience you already have.",
    bullets: [
      "Build technical skills from the ground up, at a pace that fits a working schedule",
      "Apply your existing professional experience instead of starting over",
      "Get positioned for roles that value both your new skills and your background",
    ]
  },
  {
    title: "IT Professionals",
    body: "Build on the technical career you already have.",
    bullets: [
      "Learn the AI tools and technologies your current role hasn't required yet",
      "Get mentoring focused on moving into senior or lead-track roles",
      "Prepare for compensation conversations with real market data, not guesswork",
    ]
  },
];

export const services: readonly Service[] = [
  {
    title: "Structured training",
    body: "Instructor-led courses in web development, data, and cloud, built around real projects and the AI tools teams actually use — not pre-recorded lectures."
  },
  {
    title: "One-on-one mentoring",
    body: "Direct guidance from mentors who've actually worked the roles you're training for, not a generic advisor script."
  },
  {
    title: "Resume & profile support",
    body: "Your resume and LinkedIn profile rebuilt to actually get noticed by the hiring managers reviewing them."
  },
  {
    title: "Project bootcamps",
    body: "Short, intensive bootcamps focused entirely on hands-on projects you can show, not just watch."
  },
  {
    title: "Self-paced resources",
    body: "Structured material for learners who want to move at their own pace, with guidance available when you need it."
  },
  {
    title: "Placement support",
    body: "Support continues after training ends — introductions to hiring partners, not just a certificate and a goodbye."
  },
];

export const howItWorks: readonly Step[] = [
  {
    title: "Enroll and assess",
    body: "A short conversation with an advisor to place you in the right program and starting point."
  },
  {
    title: "Train",
    body: "50 hours of instructor-led, project-based learning delivered as daily one-hour sessions, including the AI tools your field actually uses — not pre-recorded videos alone."
  },
  {
    title: "Build a portfolio",
    body: "Real projects you can show a hiring manager, not just a completion certificate."
  },
  {
    title: "Placement support",
    body: "Resume, interview preparation, and introductions to hiring partners, continuing after you complete the program."
  },
];

export const pathways: readonly Pathway[] = [
  {
    name: "Training Pathway",
    description: "For building technical skills from the ground up through structured learning.",
    steps: [
      {
        title: "Free consultation",
        body: "Skills assessment and a personalized learning roadmap."
      },
      {
        title: "Structured training",
        body: "50-hour instructor-led courses, with morning and evening batches to choose from."
      },
      {
        title: "Mentoring",
        body: "One-on-one guidance from a mentor throughout the program."
      },
      {
        title: "Resume & profile support",
        body: "Professional optimization and distribution to hiring partners."
      },
      {
        title: "Placement support",
        body: "Job search assistance and interview preparation."
      },
    ]
  },
  {
    name: "Self-Paced Pathway",
    description: "For self-motivated learners who prefer flexible, independent study with support available when needed.",
    steps: [
      {
        title: "Free consultation",
        body: "Skills assessment and a personalized learning roadmap."
      },
      {
        title: "Guided self-study",
        body: "Structured self-paced material with regular check-ins as you learn."
      },
      {
        title: "Mentoring",
        body: "One-on-one guidance from a mentor throughout the program."
      },
      {
        title: "Resume & profile support",
        body: "Professional optimization and distribution to hiring partners."
      },
      {
        title: "Placement support",
        body: "Job search assistance and interview preparation."
      },
    ]
  },
  {
    name: "Marketing Pathway",
    description: "For professionals who already have the technical skills and need strategic positioning to move forward.",
    steps: [
      {
        title: "Free consultation",
        body: "Career assessment and a positioning strategy session."
      },
      {
        title: "Mentoring",
        body: "Career strategy and positioning guidance."
      },
      {
        title: "Resume & profile support",
        body: "Strategic resume distribution to employers."
      },
      {
        title: "Placement support",
        body: "Interview coaching and offer-negotiation support."
      },
    ]
  },
  {
    name: "Bootcamp Pathway",
    description: "For intensive, project-based skill-building with hands-on guidance.",
    steps: [
      {
        title: "Free consultation",
        body: "Skills assessment and a personalized learning roadmap."
      },
      {
        title: "Intensive bootcamp",
        body: "20 hours of hands-on project work across five real projects, from fundamentals to a full capstone."
      },
      {
        title: "Portfolio building",
        body: "A professional GitHub portfolio with documented projects."
      },
      {
        title: "Resume & profile support",
        body: "Professional optimization and distribution."
      },
      {
        title: "Placement support",
        body: "Job search assistance and interview preparation."
      },
    ]
  },
];

export const includedGroups: readonly IncludedGroup[] = [
  {
    name: "Learning & Skill-Building",
    items: [
      {
        icon: "icon-structured-training",
        title: "Structured Training",
        body: "50-hour comprehensive courses built around real job requirements, including the AI tools those roles now expect."
      },
      {
        icon: "icon-intensive-bootcamps",
        title: "Intensive Bootcamps",
        body: "20-hour hands-on bootcamps for rapid, project-based skill-building."
      },
      {
        icon: "icon-self-paced-guidance",
        title: "Self-Paced Guidance",
        body: "Structured resources with regular check-ins for independent learners."
      },
      {
        icon: "icon-hands-on-labs",
        title: "Hands-on Labs",
        body: "Real-world exercises to build practical, job-ready skills."
      },
      {
        icon: "icon-certification-prep",
        title: "Certification Prep",
        body: "Structured preparation for industry-recognized certifications."
      },
      {
        icon: "icon-daily-checkins",
        title: "Daily Check-ins",
        body: "Scrum-style progress calls, so you learn how real IT teams actually work."
      },
    ]
  },
  {
    name: "Portfolio & Practice",
    items: [
      {
        icon: "icon-live-projects",
        title: "Live Projects",
        body: "Work on real projects, not simulated exercises."
      },
      {
        icon: "icon-project-reviews",
        title: "Project Reviews",
        body: "Expert feedback on your completed work before it goes in front of employers."
      },
    ]
  },
  {
    name: "Resume & Profile",
    items: [
      {
        icon: "icon-resume-preparation",
        title: "Resume Preparation",
        body: "A resume built around the specific roles you're targeting."
      },
      {
        icon: "icon-linkedin-optimization",
        title: "LinkedIn Optimization",
        body: "A profile built to actually get noticed by recruiters."
      },
      {
        icon: "icon-resume-marketing",
        title: "Resume Marketing",
        body: "Direct distribution of your resume to hiring partners."
      },
    ]
  },
  {
    name: "Interview & Offer Readiness",
    items: [
      {
        icon: "icon-interview-preparation",
        title: "Interview Preparation",
        body: "Preparation for both technical and behavioral rounds."
      },
      {
        icon: "icon-mock-interviews",
        title: "Mock Interviews",
        body: "Practice sessions with real feedback, not just a checklist."
      },
      {
        icon: "icon-role-play-interviews",
        title: "Role-Play Interviews",
        body: "Practice for different interview formats and scenarios."
      },
      {
        icon: "icon-background-check-guidance",
        title: "Background Check Guidance",
        body: "Support preparing for employment verification steps."
      },
    ]
  },
];

export const expectations: readonly Expectation[] = [
  {
    title: "Real Instructors",
    body: "Every course is led by instructors who've actually worked the roles they teach, not just presented a syllabus.",
    tone: "inverse"
  },
  {
    title: "Direct Mentoring",
    body: "Small groups and one-on-one mentoring, so you get real attention rather than a self-serve video library.",
    tone: "primary"
  },
  {
    title: "Honest About Outcomes",
    body: "We'll tell you our actual numbers, clearly defined, once we have them — not a rounded-up headline stat.",
    tone: "outline"
  },
];

export const faqs: readonly FaqItem[] = [
  {
    question: "Do I need a technical background to enroll?",
    answer: "It depends on the program — most beginner-track programs assume no prior experience. Program pages list the actual prerequisite."
  },
  {
    question: "What does \"placement support\" actually include?",
    answer: "An ATS-ready resume built around your target role, profile positioning, your profile marketed to employers and recruitment partners, mock interviews, and technical and behavioural preparation — continuing until you are hired rather than stopping the day the syllabus ends. It is support throughout the search, not a guarantee of a job offer."
  },
  {
    question: "Can I attend part-time alongside a job?",
    answer: "Yes — that is what the format is designed for. Sessions are an hour a day, with morning and evening batches, delivered online and recorded so you can catch up on anything you miss."
  },
  {
    question: "What happens if I don't finish the program?",
    answer: "Breaks of up to 30 days are fine — tell your mentor and we will hold your place. Beyond 30 days a rejoining fee applies, since your batch will have moved on and you would pick up with a later one. Either way, talk to us early: pausing is much easier to arrange before you fall behind."
  },
];

/**
 * What every programme includes, as one scannable strip.
 *
 * Each label carries a line of detail, because the labels on their own are the
 * same seven words every training provider uses. "Placement Support" means
 * nothing until it says what it is and, just as importantly, what it is not.
 */
export const inclusions: readonly Inclusion[] = [
  {
    label: "Live training",
    detail: "Taught live by a practitioner, not pre-recorded video you work through alone.",
  },
  {
    label: "50 hours",
    detail: "Per programme as standard — 60 for IT Support Analyst, 70 for the AI Consultant and cloud engineering tracks.",
  },
  {
    label: "Projects",
    detail: "Five briefs in your own stack, each scoped, designed, built and reviewed the way a delivery team would.",
  },
  {
    label: "Mentoring",
    detail: "One mentor who stays with you for the whole programme, rather than whoever is free that week.",
  },
  {
    label: "Resume & LinkedIn",
    detail: "Both rewritten around the work you actually built, and positioned for the roles you are targeting.",
  },
  {
    label: "Interview prep",
    detail: "Mock interviews on the technical and the competency side, including defending the projects you built.",
  },
  {
    label: "Placement support",
    detail: "Your profile put in front of employers, and the search continues until you are hired.",
  },
];

/**
 * The candidate's journey in five stages.
 *
 * This is the same programme described elsewhere as four priced services; the
 * five stages are what it feels like from the outside, and each names the
 * service that does the work so the two views cannot drift apart. Somebody
 * deciding whether to enrol thinks in stages, not in line items.
 */
export const journey: readonly JourneyStage[] = [
  {
    name: "Assess",
    body: "A free consultation to work out which role is realistic from where you are standing, and which programme gets you there. If the answer is that we are not the right fit, you get told that on the call.",
    service: "Free consultation",
  },
  {
    name: "Learn",
    body: "Live instructor-led sessions covering the syllabus, with daily practice between them and recordings for anything you miss. Certifications are earned as you go rather than at the end.",
    service: "Training",
  },
  {
    name: "Build",
    body: "Five projects in your own technology, each taken through briefing, architecture, supervised build and review. This is where the syllabus turns into a portfolio you can defend.",
    service: "Bootcamp",
  },
  {
    name: "Prepare",
    body: "Resume and LinkedIn rewritten around what you built, plus mock interviews on both the technical and competency side. You are interview-ready before you start applying, not after.",
    service: "Mentoring",
  },
  {
    name: "Apply",
    body: "Your profile goes out to employers and the search runs until you are hired, with the applications kept consistent rather than done in bursts.",
    service: "Resume marketing",
  },
];

/**
 * What placement support actually is.
 *
 * The phrase is the most over-promised one in this industry, so this section
 * exists to say what is and is not being offered. The last entry is a
 * deliberate non-promise: the campaign runs until you are hired, which is not
 * the same as a guaranteed job, and saying so here is worth more than the
 * enquiries it costs.
 */
export const placementSupport = {
  heading: "Placement support, spelled out",
  lead: "It is the part that usually stops the day a course ends. Here it starts there, and it is included in the programme rather than sold as an upgrade.",
  includes: [
    {
      title: "Your profile, rebuilt",
      body: "LinkedIn and the job boards that matter in your market rewritten around the titles and skills recruiters actually search on.",
    },
    {
      title: "A resume per application",
      body: "Not one resume but versions, each written against the job description in front of it and formatted to clear the automated screen that reads it first.",
    },
    {
      title: "Applications sent for you",
      body: "Applications go out daily from our side, matched to roles and employers where your profile has a genuine chance — targeted rather than sprayed.",
    },
    {
      title: "Recruiters approached directly",
      body: "In-house recruiters, the agencies that supply them, and the managers the role reports to, contacted with a message written for them.",
    },
    {
      title: "Interview preparation",
      body: "Mock interviews on the technical and the competency side, including defending the projects you built during the bootcamp.",
    },
    {
      title: "The campaign is adjusted",
      body: "What comes back changes what goes out next — the targeting, the positioning and the volume are reviewed rather than left running.",
    },
  ],
  /** Said plainly, and on the home page rather than buried in a FAQ. */
  limit: {
    title: "What it is not",
    body: "It is not a guaranteed job offer, and nobody honest can sell you one. The campaign continues until you are hired rather than stopping at a fixed number of weeks — that is the commitment, and it is the one we can actually keep.",
  },
} as const;
