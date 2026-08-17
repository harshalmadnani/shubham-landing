import type {
  Audience,
  Expectation,
  FaqItem,
  IncludedGroup,
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
  [
    "Mentors with ",
    { token: "X+" },
    " years combined industry experience",
  ],
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
    image: "audience-recent-graduates",
    title: "Recent Graduates",
    body: "Start your IT career with a solid technical foundation and structured mentoring.",
    bullets: [
      "Build the practical skills hiring teams actually screen for",
      "Learn directly from mentors working in the industry",
      "Move from coursework to a real portfolio before you apply",
    ]
  },
  {
    image: "audience-career-changers",
    title: "Career Changers",
    body: "Move into IT from any background, with a path built around where you're starting from.",
    bullets: [
      "Learn the specific skills your target IT role requires",
      "Get guidance built around your existing experience, not a generic syllabus",
      "Work through the transition with a mentor, not alone",
    ]
  },
  {
    image: "audience-non-it-professionals",
    title: "Non-IT Professionals",
    body: "Move from a non-technical role into IT, using the experience you already have.",
    bullets: [
      "Build technical skills from the ground up, at a pace that fits a working schedule",
      "Apply your existing professional experience instead of starting over",
      "Get positioned for roles that value both your new skills and your background",
    ]
  },
  {
    image: "audience-it-professionals",
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
    image: "service-structured-training",
    title: "Structured training",
    body: "Instructor-led courses in web development, data, and cloud, built around real projects and the AI tools teams actually use — not pre-recorded lectures."
  },
  {
    image: "service-mentoring",
    title: "One-on-one mentoring",
    body: "Direct guidance from mentors who've actually worked the roles you're training for, not a generic advisor script."
  },
  {
    image: "service-resume-support",
    title: "Resume & profile support",
    body: "Your resume and LinkedIn profile rebuilt to actually get noticed by the hiring managers reviewing them."
  },
  {
    image: "service-bootcamps",
    title: "Project bootcamps",
    body: "Short, intensive bootcamps focused entirely on hands-on projects you can show, not just watch."
  },
  {
    image: "service-self-paced",
    title: "Self-paced resources",
    body: "Structured material for learners who want to move at their own pace, with guidance available when you need it."
  },
  {
    image: "service-placement-support",
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
    answer: [
      "Resume review, interview preparation, and introductions to hiring partners, continuing for ",
      { token: "X months" },
      " after you complete the program. It is support, not a guarantee of a job offer.",
    ]
  },
  {
    question: "Can I attend part-time alongside a job?",
    answer: "Yes — that is what the format is designed for. Sessions are an hour a day, with morning and evening batches, delivered online and recorded so you can catch up on anything you miss."
  },
  {
    question: "What happens if I don't finish the program?",
    answer: [
      "Breaks of up to 30 days are fine — tell your mentor and we will hold your place. Beyond that a rejoining fee applies, and ",
      { token: "refund/pause policy" },
      ".",
    ]
  },
];
