import type { RichText } from "./types";

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

export function programEnquiryMessage(programTitle: string): string {
  return `Hi! I'm interested in the ${programTitle} program. Can you share more details?`;
}

export const navLinks = [
  { label: "Programs", href: "/#programs" },
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

export const footerColumns = [
  {
    heading: "Programs",
    links: [
      { label: "Full-Stack Web Development", href: "/#programs" },
      { label: "Data Science & Analytics", href: "/#programs" },
      { label: "Cloud Fundamentals", href: "/#programs" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
] as const;

/**
 * Footer contact details. The phone number is live; the rest still need to come
 * from the business, so they stay as chips rather than plausible inventions.
 */
export const footerContacts: readonly RichText[] = [
  [{ token: "email" }],
  "+44 7491 270610",
  [{ token: "address" }],
];
