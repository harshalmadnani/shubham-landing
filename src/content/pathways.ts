import { prices } from "./regions";
import type { PriceKey, RegionId } from "./regions";

/**
 * The four routes through the programme.
 *
 * A stage is a component; a pathway is a combination of them. Every pathway is
 * assembled from the same four priced stages rather than being a separate
 * product with its own price — so a pathway's cost is always the sum of what
 * it contains, and changing a stage price cannot leave a pathway quoting a
 * stale figure.
 *
 * The routes differ by where somebody is starting from, which is the only
 * distinction that actually helps a reader choose. Routes 01 and 02 are the
 * same shape with a different training track; 03 and 04 drop the stages
 * someone has already covered elsewhere.
 */
export type Pathway = {
  readonly id: string;
  readonly step: string;
  readonly name: string;
  /** The one-line reason to pick this route over the others. */
  readonly tagline: string;
  /** Who it fits, in the reader's own terms rather than ours. */
  readonly bestFor: string;
  readonly includes: readonly PriceKey[];
  readonly outcome: string;
};

export const pathways: readonly Pathway[] = [
  {
    id: "regular",
    step: "Route 01",
    name: "Regular Pathway",
    tagline: "The full route, on the standard training track.",
    bestFor:
      "Starting from little or no experience in your target discipline, and wanting the whole journey in one line.",
    includes: ["regular-training", "bootcamp", "resume-marketing"],
    outcome:
      "Taught, then built, then marketed — you finish with skills, a portfolio and someone putting your profile in front of employers.",
  },
  {
    id: "ai",
    step: "Route 02",
    name: "AI Pathway",
    tagline: "The same full route, taught through an AI lens.",
    bestFor:
      "Targeting a role with AI in the title, where employers screen for model and agent work rather than general engineering.",
    includes: ["ai-training", "bootcamp", "resume-marketing"],
    outcome:
      "Everything the regular route covers, with the training stage rebuilt around the AI skills those adverts actually ask for.",
  },
  {
    id: "bootcamp",
    step: "Route 03",
    name: "Bootcamp Pathway",
    tagline: "Skip the teaching, keep the building.",
    bestFor:
      "Already holding the theory — from a degree, a previous course or the job itself — but with nothing shipped to show for it.",
    includes: ["bootcamp", "resume-marketing"],
    outcome:
      "Five projects under deadline, then the placement stage, so the gap you close is evidence rather than knowledge.",
  },
  {
    id: "marketing",
    step: "Route 04",
    name: "Marketing Pathway",
    tagline: "Positioning and placement, on their own.",
    bestFor:
      "Able to do the work already, but not getting past the screening stage — applications going nowhere despite the skills being there.",
    includes: ["resume-marketing"],
    outcome:
      "Your profile rebuilt and marketed directly to employers, with interview preparation, until you are hired.",
  },
];

/**
 * A pathway's price is the sum of the stages it contains — never a separate
 * figure, so the two can never drift apart. There is no bundle discount, so
 * this addition is the real number rather than a headline.
 */
export function pathwayTotal(regionId: RegionId, pathway: Pathway): number {
  return pathway.includes.reduce(
    (total, key) => total + prices[regionId][key],
    0,
  );
}
