/**
 * Regional pricing.
 *
 * We deliver into two markets and price them separately, so every published
 * figure is tied to a region rather than floating free. A price with no
 * currency attached is the classic way a pricing page misleads someone, so
 * `formatPrice` always renders the symbol and the switcher always states the
 * currency in words alongside it.
 *
 * Every figure here is tax inclusive: the number on the card is what the
 * candidate pays, with nothing added later. UK consumer rules require prices
 * shown to consumers to include VAT, so this is not a presentation choice —
 * if the underlying prices ever change to ex-tax, the notes below have to
 * change with them in the same commit.
 */

export type RegionId = "uk" | "ca";

export type Region = {
  readonly id: RegionId;
  readonly label: string;
  /** Shown on the switcher itself, where space is tight. */
  readonly shortLabel: string;
  readonly currencyCode: string;
  readonly currencyName: string;
  readonly symbol: string;
  /** How tax is handled in this market. Displayed under the prices. */
  readonly taxNote: string;
};

export const regions: readonly Region[] = [
  {
    id: "uk",
    label: "United Kingdom",
    shortLabel: "UK",
    currencyCode: "GBP",
    currencyName: "pounds sterling",
    symbol: "£",
    taxNote: "VAT included — the price shown is the price you pay.",
  },
  {
    id: "ca",
    label: "Canada",
    shortLabel: "Canada",
    currencyCode: "CAD",
    currencyName: "Canadian dollars",
    symbol: "$",
    taxNote: "Tax included — the price shown is the price you pay.",
  },
];

export const DEFAULT_REGION: RegionId = "uk";

/** Stable keys for the four priced services, independent of display titles. */
export type PriceKey =
  | "regular-training"
  | "ai-training"
  | "bootcamp"
  | "resume-marketing";

/**
 * Price per service, per region. Whole units of the region's currency.
 *
 * These are the two markets' own price lists, not a conversion of one into the
 * other — do not "correct" Canada against an exchange rate.
 */
export const prices: Record<RegionId, Record<PriceKey, number>> = {
  uk: {
    "regular-training": 500,
    "ai-training": 750,
    bootcamp: 300,
    "resume-marketing": 300,
  },
  ca: {
    "regular-training": 1250,
    "ai-training": 1750,
    bootcamp: 500,
    "resume-marketing": 500,
  },
};

export function findRegion(id: RegionId): Region {
  return regions.find((region) => region.id === id) ?? regions[0];
}

export function formatPrice(regionId: RegionId, key: PriceKey): string {
  const region = findRegion(regionId);
  const amount = prices[regionId][key];
  return `${region.symbol}${amount.toLocaleString("en-GB")}`;
}
