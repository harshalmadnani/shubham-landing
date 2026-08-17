/**
 * Site-wide identity and contact configuration.
 *
 * Every consultation button on the page routes through `whatsAppUrl`, so
 * swapping the number below is all it takes to point the whole site at a real
 * inbox.
 */

export const site = {
  name: "Aviro Work",
  tagline: "IT training & placement support",
  description:
    "Structured IT training in web development, data, cloud and more, with placement support until you're hired.",
  logo: {
    primary: "/logo/logo-primary.webp",
    reversed: "/logo/logo-reversed.webp",
    width: 2060,
    height: 339,
  },
} as const;

/** Digits only, with country code and no separators — wa.me rejects the rest. */
export const whatsAppNumber = "447491270610";

/** Builds a wa.me deep link with the message pre-filled. */
export function whatsAppUrl(message: string): string {
  return `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`;
}

export const consultationMessage =
  "Hi! I'd like to book a free consultation.";

/** Opening line for the floating chat button, which carries no page context. */
export const chatMessage =
  "Hi! I'd like to know more about your training and placement support.";

export function programEnquiryMessage(programTitle: string): string {
  return `Hi! I'm interested in the ${programTitle} program. Can you share more details?`;
}

export const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Training Structure", href: "/training-structure" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Who We Help", href: "/#who-we-help" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const hero = {
  eyebrow: "IT training & placement support",
  /** Split so the second half can carry the brand gradient. */
  headline: "Structured training.",
  headlineAccent: "Real placement support.",
  body: "Aviro Work trains people for IT careers in web development, data, and cloud, including the AI skills employers now expect — and stays with you through placement, not just through the syllabus.",
  image: "/images/hero-training-session.webp",
  imageAlt:
    "An instructor and learners reviewing work together on a laptop",
} as const;

export const ctaBanner = {
  heading: "Ready to book your free consultation?",
  body: "No pressure, no commitment — just a real conversation about your goals, the right program, and what to expect.",
} as const;

/**
 * Every link here resolves to a page that exists. Nothing points at "#", and
 * no program is listed that is not in the catalogue.
 */
export const footerColumns = [
  {
    heading: "Programs",
    links: [
      { label: "Java Full Stack Developer", href: "/programs/java-full-stack-developer" },
      { label: "Data Analyst", href: "/programs/data-analyst" },
      { label: "AWS Cloud Engineer", href: "/programs/aws-cloud-engineer" },
      { label: "All 37 programs", href: "/programs" },
    ],
  },
  {
    heading: "Programme",
    links: [
      { label: "Training Structure", href: "/training-structure" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Who We Help", href: "/#who-we-help" },
    ],
  },
  {
    heading: "Get in touch",
    links: [
      { label: "Book a consultation", href: "/training-structure#what-it-costs" },
      { label: "info@avirowork.com", href: "mailto:info@avirowork.com" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
] as const;

/** Footer contact details. `href` set where the detail is actionable. */
export const footerContacts: readonly {
  readonly label: string;
  readonly href?: string;
}[] = [
  { label: "info@avirowork.com", href: "mailto:info@avirowork.com" },
  { label: "+44 7491 270610", href: "tel:+447491270610" },
  { label: "128 City Rd, London EC1V 2NX, United Kingdom" },
];
