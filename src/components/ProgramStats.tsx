import { weeksForHours } from "@/content/programDetails";
import { formatPrice } from "@/content/regions";
import type { ProgramDetail } from "@/content/types";

/**
 * The four facts a candidate weighs before opening a programme page.
 *
 * Duration and hours are derived from the curriculum rather than stored, so a
 * card cannot advertise a figure the programme has moved away from.
 *
 * Choosing these four took some care, because most of what could go here does
 * not actually vary: every programme in the catalogue has four modules and
 * twenty-four topics by design, and thirty-three of the thirty-seven run fifty
 * hours. A "Modules: 4" row repeated across thirty-seven cards tells a reader
 * nothing and makes the whole grid look generated. Level and fee genuinely
 * differ — the AI track is priced separately, and prerequisites range from
 * none to prior cloud experience — so those carry the weight here.
 *
 * Deliberately NOT the rows competitors use. "Average salary" and "jobs
 * available" are market statistics, publishable only with a cited source and a
 * date; "average time to get a job" is a placement outcome, and until real
 * placements exist there is no average, so printing one would be inventing the
 * result of a paid service. Add those when they are measured and attributable.
 */

/** The prerequisite line, shortened to fit a right-aligned value. */
function levelLabel(prerequisites: string): string {
  const p = prerequisites.toLowerCase();
  if (p.startsWith("beginner")) return "Beginner";
  if (p.includes("cloud fundamentals")) return "Cloud basics first";
  if (p.includes("technical background") || p.includes("professional background")) {
    return "Some background";
  }
  return prerequisites;
}

export function ProgramStats({ detail }: { detail: ProgramDetail }) {
  const stats = [
    { label: "Course duration", value: `${weeksForHours(detail.hours)} weeks` },
    { label: "Live training", value: `${detail.hours} hours` },
    { label: "Level", value: levelLabel(detail.prerequisites) },
    {
      // Both currencies, because the catalogue has no region switcher and a
      // bare "£500" is the wrong number for half the audience. The Canadian
      // figure is prefixed "CA" — a bare "$1,250" reads as US dollars, and
      // this is the one row where a reader could be out by a third.
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
