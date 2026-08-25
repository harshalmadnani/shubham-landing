import {
  benchmarkForSlug,
  formatSalary,
  formatVacancies,
} from "@/content/marketData";
import { weeksForHours } from "@/content/programDetails";
import { formatPrice } from "@/content/regions";
import type { ProgramDetail } from "@/content/types";

/**
 * Four facts per programme: two about the market, two about the programme.
 *
 * The market pair — median advertised salary and open UK vacancies — comes
 * from `marketData.ts`, is attributed on the page, and carries the date of the
 * window it was measured over. It describes the market a graduate enters, not
 * anything this business has achieved, and the section footnote says so.
 *
 * There is no "average time to get a job" row, which competitors put here.
 * That is an outcome claim about a paid service, and with no placements behind
 * it there would be no average to state — only a number copied from somebody
 * else's page. Course duration is likewise this programme's real length,
 * derived from its hours, not the range a competitor advertises.
 */

export function ProgramStats({ detail }: { detail: ProgramDetail }) {
  const market = benchmarkForSlug(detail.slug);

  const stats = [
    ...(market
      ? [
          { label: "Avg. salary (UK)", value: formatSalary(market.medianSalary) },
          { label: "UK jobs advertised", value: formatVacancies(market.vacancies) },
        ]
      : []),
    { label: "Course duration", value: `${weeksForHours(detail.hours)} weeks` },
    {
      // Both currencies: the catalogue has no region switcher, and the
      // Canadian figure is prefixed "CA" because a bare "$1,250" reads as US
      // dollars — the one row where a misread costs the reader a third.
      label: "Training fee",
      value: `${formatPrice("uk", detail.priceKey)} · CA${formatPrice("ca", detail.priceKey)}`,
    },
  ];

  return (
    <span className="mt-6 block border-t border-line">
      {stats.map((stat, index) => (
        <span
          key={stat.label}
          className={`flex items-baseline justify-between gap-4 py-2.5 ${
            index < stats.length - 1 ? "border-b border-line" : ""
          }`}
        >
          <span className="shrink-0 text-micro text-ink-2">{stat.label}</span>
          <span className="text-right text-micro font-medium tabular-nums text-ink">
            {stat.value}
          </span>
        </span>
      ))}
    </span>
  );
}

/**
 * The attribution for the market figures above.
 *
 * Rendered once under a grid of cards rather than on each card. Printing a
 * salary without saying where it came from, over what period, and that it is
 * the market rather than our own result is the difference between market data
 * and a claim — so this is not optional decoration, and a grid of cards should
 * not ship without it.
 */
export function MarketDataNote({ className }: { className?: string }) {
  return (
    <p className={`text-micro text-ink-3 ${className ?? ""}`}>
      Salary and vacancy figures are the UK market for the closest matching job
      title, from{" "}
      <a
        href="https://www.itjobswatch.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-accent-ink"
      >
        IT Jobs Watch
      </a>
      , covering the six months to 25 August 2026. They describe the market you
      would be entering — they are not our graduates&rsquo; results, and we do
      not publish outcome figures we have not measured.
    </p>
  );
}
