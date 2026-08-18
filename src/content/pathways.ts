import { prices } from "./regions";
import type { PriceKey, RegionId } from "./regions";

/**
 * The four pathways.
 *
 * A pathway is a route, not a product: it is an ordered list of stages, and
 * its cost is whatever those stages come to. Nothing here stores a price, so
 * a route can never quote a figure the stage prices have moved away from, and
 * there is no bundle rate to keep in sync.
 *
 * The four are separated by where somebody is starting from, because that is
 * the only question that actually narrows the choice. Pathway 04 is a single
 * stage by design — resume marketing on its own, for people who can already
 * do the job.
 */

export type Pathway = {
  readonly id: string;
  readonly number: number;
  /** The route in shorthand, shown under the pathway number. */
  readonly label: string;
  /** Who the route is for, in one sentence. */
  readonly description: string;
  /** The stages, in the order they run. */
  readonly stages: readonly PriceKey[];
};

export const pathways: readonly Pathway[] = [
  {
    id: "training",
    number: 1,
    label: "Training → Bootcamp → Placement",
    description:
      "The whole route, for anyone starting from little or no experience. Learn the discipline, prove it on shipped projects, then have your profile put in front of employers.",
    stages: ["regular-training", "bootcamp", "resume-marketing"],
  },
  {
    id: "ai",
    number: 2,
    label: "AI Training → Bootcamp → Placement",
    description:
      "The same route with the teaching rebuilt around AI — for anyone targeting a role with AI in the title, where employers screen for model and agent work rather than general engineering.",
    stages: ["ai-training", "bootcamp", "resume-marketing"],
  },
  {
    id: "bootcamp",
    number: 3,
    label: "Bootcamp → Placement",
    description:
      "Already hold the theory, from a degree, a previous course or the job itself? Start where the building starts, then go to market with something to show for it.",
    stages: ["bootcamp", "resume-marketing"],
  },
  {
    id: "marketing",
    number: 4,
    label: "Marketing",
    description:
      "Able to do the work already, but applications go nowhere? Skip the teaching entirely. Your profile is rebuilt and marketed to employers until you are hired.",
    stages: ["resume-marketing"],
  },
];

/** What a pathway costs: its stages, added at render time. */
export function pathwayTotal(regionId: RegionId, pathway: Pathway): number {
  return pathway.stages.reduce(
    (total, key) => total + prices[regionId][key],
    0,
  );
}

/** Spelled out, because a numeral beside a price reads as part of it. */
export const stageCountLabel = ["", "one stage", "two stages", "three stages"];
