import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

/**
 * The head of every section: a route label on a line, the sign, and the
 * reading copy under it.
 *
 * The label sits on a rule that runs out to the edge of the column, with a
 * node where the two meet. That device repeats down the page and is what ties
 * a section heading to the pathway diagrams — one grammar, used everywhere.
 */
export function SectionHeading({
  label,
  title,
  lead,
  tone = "paper",
}: {
  label?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "paper" | "pine";
}) {
  const onPine = tone === "pine";

  return (
    <Reveal>
      <div>
        {label && (
          <div className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className={`h-[7px] w-[7px] shrink-0 rounded-full ${
                onPine ? "bg-signal" : "bg-signal"
              }`}
            />
            <p
              className={`font-mono text-label uppercase ${
                onPine ? "text-pine-ink-2" : "text-ink-3"
              }`}
            >
              {label}
            </p>
            <span
              aria-hidden="true"
              className={`h-px flex-1 ${onPine ? "bg-pine-rule" : "bg-rule"}`}
            />
          </div>
        )}

        <h2
          className={`mt-lg max-w-[19ch] text-title ${
            onPine ? "text-pine-ink" : "text-ink"
          }`}
        >
          {title}
        </h2>

        {lead && (
          <p
            className={`mt-md max-w-[52ch] text-lead ${
              onPine ? "text-pine-ink-2" : "text-ink-2"
            }`}
          >
            {lead}
          </p>
        )}
      </div>
    </Reveal>
  );
}
