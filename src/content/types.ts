/**
 * A value the business has not supplied yet.
 *
 * Rendered as a dashed placeholder chip rather than an invented number, so an
 * unfilled figure is visibly unfilled instead of quietly shipping as fact.
 */
export type PendingToken = { readonly token: string };

/** Copy that may interleave plain text with pending-data placeholders. */
export type RichText = string | ReadonlyArray<string | PendingToken>;

export type Struggle = {
  readonly title: string;
  readonly body: string;
};

export type Audience = {
  readonly image: string;
  readonly title: string;
  readonly body: string;
  readonly bullets: readonly string[];
};

export type Service = {
  readonly image: string;
  readonly title: string;
  readonly body: string;
};

export type Step = {
  readonly title: string;
  readonly body: RichText;
};

export type Pathway = {
  readonly name: string;
  readonly description: string;
  readonly steps: readonly Step[];
};

export type IncludedItem = {
  readonly icon: string;
  readonly title: string;
  readonly body: RichText;
};

export type IncludedGroup = {
  readonly name: string;
  readonly items: readonly IncludedItem[];
};

export type Expectation = {
  readonly title: string;
  readonly body: string;
  /** Controls which of the three surface treatments the card gets. */
  readonly tone: "inverse" | "primary" | "outline";
};

export type FaqItem = {
  readonly question: string;
  readonly answer: RichText;
};

/** A vendor mark overlaid on a program card (AWS, Azure, Google Cloud). */
export type Brand = {
  readonly label: string;
  readonly viewBox: string;
  readonly paths: readonly string[];
};

export type Program = {
  readonly title: string;
  readonly image: string;
  readonly brand?: Brand;
  readonly description: RichText;
  readonly meta: RichText;
  readonly ctaLabel: string;
  /** Set when the program has its own curriculum page; otherwise the card
   *  falls back to a WhatsApp enquiry built from the program title. */
  readonly href?: string;
};

export type ProgramCategory = {
  readonly name: string;
  readonly programs: readonly Program[];
};

export type CurriculumModule = {
  readonly title: string;
  readonly hours: number;
  readonly summary: string;
  readonly topics: readonly string[];
};

/** A program's own curriculum page, reached from its catalogue card. */
export type ProgramDetail = {
  readonly slug: string;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly hours: number;
  readonly modules: readonly CurriculumModule[];
};
