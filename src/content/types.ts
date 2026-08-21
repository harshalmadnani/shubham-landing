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
  readonly title: string;
  readonly body: string;
  readonly bullets: readonly string[];
};

export type Service = {
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

/** A vendor mark: on a program card, or in the ticker under the hero. */
export type Brand = {
  readonly label: string;
  readonly viewBox: string;
  readonly paths: readonly string[];
  /** Official brand colour, `#rrggbb`. Set for the ticker, where the marks
   *  render in their own colours; program cards ignore it and stay neutral. */
  readonly color?: string;
};

export type Program = {
  readonly title: string;
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
  /**
   * What somebody needs before starting, in the programme's own words. Carried
   * here as well as in the catalogue `meta` line because a candidate reading
   * the curriculum is deciding whether they can do it, and sending them back
   * to the card to find out is the wrong way round.
   */
  readonly prerequisites: string;
  /**
   * Which of the priced services covers this programme's training. The AI
   * track is priced separately from the rest, so this cannot be inferred from
   * the hours. Kept as the price *key* rather than an amount: the amount
   * depends on the region the reader has selected.
   */
  readonly priceKey: "regular-training" | "ai-training";
  readonly modules: readonly CurriculumModule[];
};

/** One item in the "Why AVIROwork" strip — what every programme includes. */
export type Inclusion = {
  readonly label: string;
  /** One line saying what the label actually means, so it is not just a word. */
  readonly detail: string;
};

/** One stage of the candidate's journey, from first call to first offer. */
export type JourneyStage = {
  /** Single word, so the five read as a sequence rather than five headings. */
  readonly name: string;
  readonly body: string;
  /** Which of the four priced services does the work in this stage. */
  readonly service: string;
};
