/**
 * Proof: testimonials, student projects, instructors and placements.
 *
 * EVERY ARRAY HERE IS EMPTY ON PURPOSE, AND THE SITE IS BUILT TO COPE WITH
 * THAT. The `Proof` section renders only the groups that have entries, and
 * renders nothing at all while all four are empty — so the page is complete
 * either way and nothing ships as a gap or a placeholder.
 *
 * They are empty because this is the one kind of content that cannot be
 * written for you. A testimonial from a student who did not say it, a
 * placement at a company that did not hire anyone, or an instructor
 * biography for a person who does not exist are not first drafts to be
 * corrected later — they are false statements to prospective customers about
 * the results of a paid service. In the UK that is a live consumer-protection
 * problem (CPRs 2008, and the ASA's rules on testimonials require holding
 * evidence), quite apart from what it would do to the business the first time
 * a candidate checked.
 *
 * So: fill these in with real, permissioned content and the sections appear.
 * Each type below documents what is needed and what to leave out.
 *
 * On consent — get it in writing before publishing a named testimonial, a
 * person's photograph, or an employer's name. "They said it in a WhatsApp
 * message" is not permission to put someone's name and face on a public site.
 */

/**
 * A student's own words.
 *
 * Quote them verbatim. Trimming for length is fine; tightening their grammar
 * or sharpening their praise is not — a testimonial has to be what the person
 * actually said. `role` and `employer` are optional precisely so a student who
 * will vouch for the training but does not want their new employer named can
 * still appear.
 */
export type Testimonial = {
  readonly quote: string;
  readonly name: string;
  /** The programme they took, which is what makes the quote checkable. */
  readonly programme: string;
  readonly role?: string;
  readonly employer?: string;
  /** Path under /public. Only with written permission to publish their photo. */
  readonly photo?: string;
};

/**
 * Something a student built, shown as their work rather than ours.
 *
 * Link to the real repository or deployment where there is one. A project with
 * no link is still worth showing, but say what it did rather than implying a
 * live product exists.
 */
export type StudentProject = {
  readonly title: string;
  readonly student: string;
  readonly programme: string;
  /** What it does and what it was built with, in a sentence or two. */
  readonly summary: string;
  readonly stack: readonly string[];
  readonly href?: string;
  readonly image?: string;
};

/**
 * Somebody who actually teaches.
 *
 * `experience` should be checkable — the roles they have held and where. Round
 * numbers of years are the weakest possible claim here and the easiest to
 * challenge, so prefer naming the work.
 */
export type Instructor = {
  readonly name: string;
  /** What they teach on this site, not their whole career. */
  readonly teaches: readonly string[];
  readonly experience: string;
  readonly photo?: string;
  readonly linkedIn?: string;
};

/**
 * A real placement.
 *
 * Only add an entry once the person has started and has agreed to it being
 * published. `employer` may be withheld — "a Big Four consultancy" is honest
 * where the client will not be named; inventing a recognisable logo is not.
 * Aggregate placement statistics belong here too, once they exist and can be
 * defined: state the cohort and the window, never a bare percentage.
 */
export type Placement = {
  readonly name: string;
  readonly programme: string;
  readonly role: string;
  readonly employer?: string;
  /** e.g. "March 2026". Month and year is enough. */
  readonly started: string;
  /** Optional line of context — a career change, a return after a break. */
  readonly note?: string;
};

export const testimonials: readonly Testimonial[] = [];

export const studentProjects: readonly StudentProject[] = [];

export const instructors: readonly Instructor[] = [];

export const placements: readonly Placement[] = [];

/** True while there is nothing real to show, so the section can stay hidden. */
export const hasProof =
  testimonials.length > 0 ||
  studentProjects.length > 0 ||
  instructors.length > 0 ||
  placements.length > 0;
