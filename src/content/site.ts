/**
 * Site-wide identity and contact configuration.
 *
 * Every direct-contact button on the site routes through `whatsAppUrl`, so
 * swapping the number below is all it takes to point the whole site at a real
 * inbox. The consultation buttons are the exception: those go to the booking
 * page, which is configured in `content/booking.ts`
 */

export const site = {
  name: "AVIROwork Consultancy",
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

export type NavLink = {
  readonly label: string;
  readonly href: string;
  /** A short line describing the destination, shown in dropdown menus. */
  readonly summary?: string;
  /** Present on entries that open a menu instead of navigating. */
  readonly children?: readonly NavLink[];
};

/**
 * Primary navigation. "Home" earns its place now that the site is more than
 * one page — from a curriculum page the logo was the only way back.
 *
 * Entries whose href carries a `#` are sections of the home page; the rest are
 * pages in their own right, and the header highlights whichever one you are on.
 *
 * Six entries is the ceiling before the row starts wrapping, and Contact takes
 * the sixth. "Who We Help" and the FAQ live in the footer rather than the
 * header: both sections are still on the home page and still linked, they are
 * just no longer competing with the pages somebody actually navigates to.
 * Anything added from here has to displace something.
 *
 * "How It Works" carries children, so it opens a menu rather than navigating.
 * Its own href is still real — the overview page — which is what the footer
 * points at and what a typed URL resolves to.
 */
export const navLinks: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Training Structure", href: "/training-structure" },
  {
    label: "How It Works",
    href: "/how-it-works",
    children: [
      {
        label: "Training",
        href: "/how-it-works/training",
        summary: "Live sessions, batches, attendance and certification",
      },
      {
        label: "Bootcamp",
        href: "/how-it-works/bootcamp",
        summary: "Five projects, four phases, one portfolio",
      },
      {
        label: "Mentoring",
        href: "/how-it-works/mentoring",
        summary: "Your mentor, and what they are there for",
      },
      {
        label: "Marketing",
        href: "/how-it-works/marketing",
        summary: "Resume, positioning and the search until you are hired",
      },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "IT training & placement support",
  /** Split so the second half can carry the accent colour. */
  headline: "Develop the skills",
  headlineAccent: "and build up your career.",
  body: "Training in IT, together with mentoring and assistance with job placement.",
  /**
   * Explore Programs leads, because somebody arriving cold wants to see what is
   * taught before they will agree to talk to anyone. The consultation is the
   * second button here and the floating WhatsApp button everywhere else, so it
   * is never more than one tap away.
   */
  primaryCta: { label: "Explore Programs", href: "/programs" },
  secondaryCta: { label: "Free Consultation" },
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
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Training Structure", href: "/training-structure" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Blog", href: "/blog" },
      { label: "Who We Help", href: "/#who-we-help" },
    ],
  },
  {
    heading: "Get in touch",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Book a consultation", href: "/book" },
      { label: "info@avirowork.com", href: "mailto:info@avirowork.com" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms and conditions", href: "/legal/terms" },
      { label: "Privacy policy", href: "/legal/privacy" },
      { label: "Refund policy", href: "/legal/refunds" },
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
