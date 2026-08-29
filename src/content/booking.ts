/**
 * The free consultation, and the scheduler behind it.
 *
 * WHAT THIS REPLACES. Every "Book a free consultation" button used to open
 * WhatsApp with a message pre-filled, which put the work of finding a time on
 * both people and lost anyone who does not use WhatsApp. This file backs a real
 * booking page at `/book`: the visitor picks a day and a time from the
 * consultant's actual availability and gets a confirmation and a calendar
 * invite without anybody typing a message.
 *
 * WHY A HOSTED SCHEDULER RATHER THAN OUR OWN. This site is a static export —
 * there is no server and no database to hold appointments in. A hand-written
 * grid of times would be a picture of availability rather than availability: it
 * cannot know the consultant is already booked, cannot stop two people taking
 * the same slot, cannot send a confirmation, and cannot show a Toronto visitor
 * a Toronto time. A hosted scheduler reads the real calendar, so every slot it
 * offers is a slot that exists.
 *
 * TO SWITCH IT ON — create a free scheduling link, then either paste it into
 * `BOOKING_LINK` below, or set NEXT_PUBLIC_BOOKING_URL in Render
 * (Dashboard → Environment) and redeploy. The environment variable wins if both
 * are set. It must be NEXT_PUBLIC_ because this is a static export and the
 * value is inlined at build time.
 *
 *   Cal.com (free, open source)   https://cal.com/<you>/consultation
 *   Calendly (free tier)          https://calendly.com/<you>/30min
 *   Google Appointment Schedule   https://calendar.app.google/<code>
 *
 * Set the event to 30 minutes and connect the calendar the consultant actually
 * uses — the whole point is that the page cannot offer a time that is already
 * taken.
 *
 * UNTIL THEN. `/book` still works. With no link configured it shows the
 * consultation details and the three direct channels — WhatsApp, phone, email —
 * which is exactly what the site did before. Nothing renders a dead calendar.
 *
 * PRIVACY. `bookingProvider` also drives the "What this website collects"
 * section of the privacy policy, the same way `analytics.ts` does. A scheduler
 * takes a visitor's name, email and whatever they type into the notes box, and
 * a policy that says this site collects nothing while a booking form sits on
 * `/book` would be a false statement. The two are generated from one flag so
 * they cannot drift apart.
 */

/**
 * Paste a scheduling link here to switch the booking calendar on.
 *
 * Leave it empty to keep the direct-contact fallback. NEXT_PUBLIC_BOOKING_URL
 * overrides it, so the same build can be pointed somewhere else without a code
 * change.
 */
const BOOKING_LINK = "";

export type BookingProvider = {
  readonly id: "cal" | "calendly" | "google" | "other";
  /** Shown to visitors in the privacy policy. The name they would recognise. */
  readonly name: string;
  /** The scheduling page itself, for the "open in a new tab" fallback link. */
  readonly url: string;
  /** The same page with the provider's embed parameters applied. */
  readonly embedUrl: string;
};

const configured = (process.env.NEXT_PUBLIC_BOOKING_URL ?? BOOKING_LINK).trim();

/**
 * Works out which scheduler a link belongs to and how to embed it.
 *
 * Each provider wants a different parameter to render the bare calendar rather
 * than its own marketing chrome inside our page. An unrecognised link is still
 * embedded as-is under the "other" id — it is better to show a scheduler we
 * cannot fully theme than to silently ignore a link somebody configured.
 */
function readProvider(link: string): BookingProvider | undefined {
  if (!link) return undefined;

  let host: string;
  try {
    host = new URL(link).hostname.replace(/^www\./, "");
  } catch {
    // A malformed link is a configuration mistake, not a reason to break the
    // build or the page. Fall back to the direct channels.
    return undefined;
  }

  const withParams = (params: Record<string, string>) => {
    const url = new URL(link);
    for (const [key, value] of Object.entries(params)) {
      url.searchParams.set(key, value);
    }
    return url.toString();
  };

  if (host === "cal.com" || host.endsWith(".cal.com")) {
    return {
      id: "cal",
      name: "Cal.com",
      url: link,
      embedUrl: withParams({ embed: "true", theme: "light" }),
    };
  }

  if (host === "calendly.com" || host.endsWith(".calendly.com")) {
    return {
      id: "calendly",
      name: "Calendly",
      url: link,
      embedUrl: withParams({
        embed_domain: "avirowork.com",
        embed_type: "Inline",
        hide_gdpr_banner: "1",
        // The scheduler's own header repeats the name and price this page
        // already states above it.
        hide_landing_page_details: "1",
      }),
    };
  }

  if (host === "calendar.app.google" || host === "calendar.google.com") {
    return {
      id: "google",
      name: "Google Calendar appointment scheduling",
      url: link,
      // `gv=true` is what turns the share link into the embeddable grid.
      embedUrl: withParams({ gv: "true" }),
    };
  }

  return { id: "other", name: "our scheduling provider", url: link, embedUrl: link };
}

export const bookingProvider = readProvider(configured);

/** True when this build ships a real calendar. Drives the policy wording. */
export const bookingEnabled = bookingProvider !== undefined;

/** Where visitors are sent by every consultation button on the site. */
export const bookingPath = "/book";

/**
 * What the call actually is.
 *
 * Written as claims the business can keep. "A course recommendation" is
 * something a consultant can give in thirty minutes; an outcome is not, and
 * this page is the last thing somebody reads before they commit half an hour.
 */
export const consultation = {
  duration: "30 minutes",
  price: "Free",
  format: "Video call or phone — whichever you prefer",
  lead: "Half an hour with a consultant to work out which role is realistic from where you are standing, and which programme gets you there. If the answer is that we are not the right fit, you get told that on the call.",
  expect: [
    {
      title: "Where you are now",
      body: "Your background, what you have already studied or worked on, and which of it counts towards a technical role.",
    },
    {
      title: "Which role is realistic",
      body: "The market for it in the UK or Canada — what it pays, how many jobs are advertised, and how long the route takes from where you are.",
    },
    {
      title: "Which programme fits",
      body: "A straight recommendation from the 37, including the pathway — training, bootcamp, mentoring or marketing — that matches what you already have.",
    },
    {
      title: "What it costs and what happens next",
      body: "Fees, the schedule, and what placement support does and does not cover. No obligation to enrol at the end of it.",
    },
  ],
  /**
   * Opening hours, stated in UK time because that is where the office is.
   * The scheduler converts to the visitor's own timezone; this is here so
   * somebody who would rather phone knows when a person is there.
   */
  hours: [
    { days: "Monday – Friday", time: "9:00am – 6:00pm" },
    { days: "Saturday", time: "10:00am – 4:00pm" },
    { days: "Sunday", time: "Closed" },
  ],
  hoursNote: "UK time (GMT/BST).",
} as const;
