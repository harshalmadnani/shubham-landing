import { analyticsProvider } from "./analytics";
import { bookingProvider } from "./booking";
import type { RichText } from "./types";

/**
 * Company details, and the three policy documents.
 *
 * READ THIS BEFORE GOING LIVE. These are drafts written from what the site
 * itself does, and they are accurate about that — the site has no forms, no
 * analytics and no cookies, which is why the privacy policy is as short as it
 * is. What they cannot be accurate about is the handful of facts only the
 * business holds, and every one of those is a `{ token }` placeholder that
 * renders as a visible "pending" chip rather than as an invented fact.
 *
 * Two of the placeholders are legally material and should be filled before
 * this site takes a payment:
 *
 *   - The company registration number and registered address. If AVIROwork
 *     Consultancy is a registered company, UK law requires them on the site.
 *     If it trades as a sole trader or partnership, the trading name and a
 *     geographic address are required instead, and the Terms should say which.
 *   - The refund window and what happens after a programme has started. This
 *     is a contractual promise. It is the one thing here that cannot be
 *     drafted from the outside, because it is a commercial decision about how
 *     much of a part-delivered programme is refundable.
 *
 * The statutory rights described are the actual UK position for distance
 * contracts with consumers (Consumer Contracts Regulations 2013: a 14-day
 * cancellation right, which a customer may waive for services that start
 * inside that window, and the Consumer Rights Act 2015 on services performed
 * with reasonable care and skill). They are stated because they apply whatever
 * the business's own policy says. They are not legal advice, and a solicitor
 * should read all three documents before launch — particularly if you sell
 * into Canada, where provincial consumer legislation also applies and is not
 * covered here.
 */

export type LegalSection = {
  readonly heading: string;
  readonly paragraphs: readonly RichText[];
  readonly bullets?: readonly RichText[];
};

export type LegalDocument = {
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  /** Shown as "last updated". A pending chip until the business signs it off. */
  readonly updated: RichText;
  readonly sections: readonly LegalSection[];
};

export const company = {
  legalName: "AVIROwork Consultancy",
  email: "info@avirowork.com",
  phone: "+44 7491 270610",
  phoneHref: "tel:+447491270610",
  address: "128 City Rd, London EC1V 2NX, United Kingdom",
  /** Companies House number, or the note that the business is unincorporated. */
  registration: { token: "Company registration number" },
  markets: "United Kingdom and Canada",
  /** Weekdays we answer, so "we will respond" is not open-ended. */
  responseTime: "within one working day",
} as const;

export const contactPage = {
  title: "Contact",
  lead: "A real person answers all three of these. WhatsApp is usually fastest, and it is the same number as the phone line.",
  note: "We answer enquiries within one working day, Monday to Friday. If you are asking about a specific programme, saying which one lets us put the right person on it.",
} as const;

const privacy: LegalDocument = {
  slug: "privacy",
  title: "Privacy policy",
  summary:
    "What this website collects, which is almost nothing, and what happens to what you send us.",
  updated: [{ token: "Date this policy was approved" }],
  sections: [
    {
      heading: "What this website collects",
      /*
       * Written from `analyticsProvider` and `bookingProvider` rather than by
       * hand, so this section cannot describe a site other than the one that
       * shipped. Switching either of them on rewrites the wording below in the
       * same build, which is the only way a policy and a codebase stay in
       * agreement over years.
       */
      paragraphs: [
        analyticsProvider || bookingProvider
          ? "Almost nothing, and nothing that identifies you unless you choose to hand it over. This site is a set of static pages: no accounts, no advertising pixels, and no cookies of its own."
          : "Nothing. This site is a set of static pages. It has no contact forms, no accounts, no analytics or tracking scripts, no advertising pixels, and it sets no cookies of its own. You can read every page here without giving us anything and without us building any record of your visit.",

        ...(analyticsProvider
          ? [
              `We do measure how many people visit, using ${analyticsProvider.name}, which is processed in ${analyticsProvider.processedIn}. It is deliberately a privacy-preserving choice: it sets no cookies, stores nothing on your device, and does not build a profile of you or follow you to any other website. What it tells us is aggregate — how many people read a page, which site linked them here, roughly which country they were in, and whether they were on a phone or a computer. None of that identifies an individual, which is also why this site shows you no cookie banner: there is nothing to ask your permission for.`,
            ]
          : []),

        // The booking page is the one place on this site where a visitor can
        // hand over personal data, and the one place a third party can store
        // anything on their device. Both facts are stated rather than buried.
        ...(bookingProvider
          ? [
              `The exception is the booking page, where you can pick a time for a consultation. That calendar is run by ${bookingProvider.name}, and it does not load until you press the button asking for it — so if you never open it, nothing of theirs runs and nothing is stored on your device. That is also why this site shows you no cookie banner. Once you do open it, ${bookingProvider.name} sets the cookies its calendar needs, and what you enter — your name, your email address, and anything you write in the notes — goes to them and then to us.`,
            ]
          : []),

        "Our hosting provider keeps standard server logs, which include IP addresses, as almost all web hosting does. Those exist so the service can be run and secured, and we do not use them to identify or profile visitors.",
      ],
    },
    {
      heading: "When you contact us",
      paragraphs: [
        bookingProvider
          ? `Most enquiry buttons on this site open WhatsApp or your email client, and the booking page opens a calendar run by ${bookingProvider.name}. Either way the details go through that company before they reach us, and their handling of them is governed by their own privacy terms rather than ours. If you would rather not use any of them, phone us instead — the number is below.`
          : "Every enquiry button on this site opens WhatsApp or your email client. That means the message goes through WhatsApp or your email provider before it reaches us, and their handling of it is governed by their own privacy terms rather than ours. If you would rather not use WhatsApp, phone or email us instead.",
        [
          "Once a message reaches us we hold what you sent — typically your name, your contact details, and what you told us about your background and what you want to do — for as long as we are dealing with your enquiry, and afterwards while there is a reason to keep it, such as an ongoing programme or our accounting obligations. Our lawful basis is legitimate interest for answering an enquiry and contract for anyone who enrols. We do not sell it and we do not use it for advertising. Retention period: ",
          { token: "How long enquiry records are kept" },
          ".",
        ],
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "Under UK data protection law you can ask us for a copy of what we hold about you, ask us to correct it, ask us to delete it, or object to our holding it. Write to the address below and we will respond within one month, which is the statutory deadline.",
        [
          "If you are not satisfied with how we have handled a request you can complain to the Information Commissioner's Office at ico.org.uk. Our ICO registration: ",
          { token: "ICO registration number, or a note that registration is not required" },
          ".",
        ],
      ],
    },
    {
      heading: "Contacting us about this policy",
      paragraphs: [
        `Email ${company.email}, or write to ${company.address}.`,
      ],
    },
  ],
};

const terms: LegalDocument = {
  slug: "terms",
  title: "Terms and conditions",
  summary:
    "The terms you agree to when you enrol on a programme, and what each side is responsible for.",
  updated: [{ token: "Date these terms were approved" }],
  sections: [
    {
      heading: "Who you are contracting with",
      paragraphs: [
        [
          `${company.legalName}, ${company.address}. `,
          company.registration,
          ".",
        ],
        "These terms apply to the training, bootcamp, mentoring and resume marketing services described on this site. They form the agreement between us once you enrol and we confirm your place.",
      ],
    },
    {
      heading: "What we will do",
      paragraphs: [
        "Deliver the programme you enrolled on: the published number of live instructor-led hours, the projects, the mentoring, and the placement support described on the programme's page and on the training-structure page. Our services will be performed with reasonable care and skill, as the Consumer Rights Act 2015 requires.",
        "Where a session cannot run as scheduled — an instructor is ill, a public holiday falls mid-programme — we will reschedule it rather than drop it, and the hours you were sold are the hours you receive.",
      ],
    },
    {
      heading: "What we do not promise",
      paragraphs: [
        "We do not guarantee a job offer, an interview, a salary, or a visa or immigration outcome. Placement support means our work continues until you are hired rather than stopping on a fixed date; it does not mean an employer has agreed to hire you. Anyone in this market who promises you a job is either misdescribing their service or misunderstanding it.",
        "We do not guarantee that a third-party certification will be awarded. Certifications are awarded by the bodies that own them, on their own criteria.",
      ],
    },
    {
      heading: "What we ask of you",
      paragraphs: [
        "Attend the live sessions, because a programme delivered live cannot be delivered to an empty seat. Where a programme states a minimum attendance, that figure is on the programme's page and it is a condition of completion, not a target. Do the practice between sessions, submit the project work, and tell us early if something in your circumstances changes so we can work around it.",
      ],
    },
    {
      heading: "Fees and payment",
      paragraphs: [
        "Prices are published per region on this site and include tax: the figure shown is the figure you pay. The four stages are priced separately, so you can take the training without the bootcamp, or the bootcamp without resume marketing.",
        [
          "Payment terms, including whether a programme may be paid in instalments: ",
          { token: "Payment and instalment terms" },
          ".",
        ],
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "Course materials, slides and project briefs remain ours, and are licensed to you for your own learning. You may not redistribute or resell them. Work you build during the programme is yours — it is your portfolio, and that is the point of it.",
      ],
    },
    {
      heading: "Cancellation, complaints and governing law",
      paragraphs: [
        "Your cancellation and refund rights are set out in the refund policy, which forms part of these terms.",
        `If something has gone wrong, email ${company.email} and say so. We would rather hear about it while we can still fix it.`,
        [
          "These terms are governed by the law of ",
          { token: "Governing law and jurisdiction — England and Wales, or elsewhere" },
          ". Nothing in them affects your statutory rights as a consumer.",
        ],
      ],
    },
  ],
};

const refunds: LegalDocument = {
  slug: "refunds",
  title: "Refund policy",
  summary:
    "Your statutory cancellation right, and what happens if you withdraw once a programme has started.",
  updated: [{ token: "Date this policy was approved" }],
  sections: [
    {
      heading: "Your 14-day cancellation right",
      paragraphs: [
        "Because you buy these programmes at a distance, UK consumer law gives you 14 days from the day we confirm your place to change your mind and cancel for a full refund, without giving a reason. This is the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, and it applies whatever else this policy says.",
        "One thing to know: if you ask us to start delivering inside those 14 days and we do, you can still cancel, but we may keep a proportionate amount for what was delivered before you cancelled. If you would rather keep the full right intact, start after the 14 days.",
        `To cancel, email ${company.email}. Saying so in writing is enough — there is no form to complete. Refunds are made by the method you paid with, within 14 days of us receiving your cancellation.`,
      ],
    },
    {
      heading: "After the 14 days",
      paragraphs: [
        [
          "Our own policy for withdrawing after the statutory window, once a programme is under way: ",
          { token: "Refund terms after the 14-day window — the commercial decision" },
          ".",
        ],
        "This needs to state at least three things: whether any part of the fee is refundable once teaching has begun, how a part-completed programme is treated across the four stages, and how long after enrolment the policy applies. Until it does, this section is deliberately blank rather than filled with something we might not honour.",
      ],
    },
    {
      heading: "If we cancel",
      paragraphs: [
        "If we cancel a programme before it starts, or cannot deliver it after it has started, you get a full refund of anything not yet delivered — and we will tell you as early as we know, not on the day.",
      ],
    },
    {
      heading: "If something has gone wrong",
      paragraphs: [
        `Under the Consumer Rights Act 2015 our services must be performed with reasonable care and skill. If they have not been, you may be entitled to have the problem put right or to a price reduction. Email ${company.email} and describe what happened — this route exists whether or not the refund window has closed.`,
      ],
    },
  ],
};

export const legalDocuments: readonly LegalDocument[] = [
  privacy,
  terms,
  refunds,
];

export function findLegalDocument(slug: string): LegalDocument | undefined {
  return legalDocuments.find((document) => document.slug === slug);
}
