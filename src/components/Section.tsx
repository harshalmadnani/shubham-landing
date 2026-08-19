import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

export type Tone = "paper" | "paper-2" | "night";

const surfaces: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  "paper-2": "bg-paper-2 text-ink",
  night: "bg-night text-bone",
};

const ruleFor: Record<Tone, string> = {
  paper: "bg-rule",
  "paper-2": "bg-rule",
  night: "bg-night-rule",
};

const labelFor: Record<Tone, string> = {
  paper: "text-ink-3",
  "paper-2": "text-ink-3",
  night: "text-bone-2",
};

/**
 * Every section on the site opens the same way: an index number, a short
 * label, and a rule running out to the margin.
 *
 *     03 / STRUCTURE ─────────────────────────────────────────
 *
 * It is the one motif the whole site shares. Because the number is content
 * rather than decoration, a reader can scan the page the way they would scan a
 * contents page, and every section announces where it sits in the sequence.
 */
export function Section({
  id,
  index,
  label,
  tone = "paper",
  className,
  children,
}: {
  id?: string;
  /** Two-digit index shown in the margin, e.g. "04". */
  index?: string;
  label?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`${surfaces[tone]} border-t ${
        tone === "night" ? "border-night-rule" : "border-rule"
      }${className ? ` ${className}` : ""}`}
    >
      <div className="mx-auto w-full max-w-page px-6 py-20 tablet:px-10 tablet:py-28">
        {(index || label) && (
          <div className="flex items-center gap-4 pb-12 tablet:pb-16">
            {index && (
              <span
                className={`text-index tnum font-mono ${
                  tone === "night" ? "text-flame-bright" : "text-flame-ink"
                }`}
              >
                {index}
              </span>
            )}
            {label && (
              <span
                className={`text-label font-mono uppercase ${labelFor[tone]}`}
              >
                {label}
              </span>
            )}
            <span
              aria-hidden="true"
              className={`h-px flex-1 origin-left ${ruleFor[tone]}`}
            />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/**
 * The headline block that follows the index line: title left, lead offset to
 * the right on wide screens. The asymmetry is the point — a centred stack is
 * what every other training site does.
 */
export function SectionHead({
  title,
  lead,
  tone = "paper",
  className,
}: {
  title: ReactNode;
  lead?: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <Reveal>
      <div
        className={`grid gap-x-10 gap-y-6 desktop:grid-cols-12${
          className ? ` ${className}` : ""
        }`}
      >
        <h2
          className={`font-display text-display-sm text-balance desktop:col-span-6 ${
            tone === "night" ? "text-bone" : "text-ink"
          }`}
        >
          {title}
        </h2>

        {lead && (
          <div
            className={`text-lead desktop:col-span-5 desktop:col-start-8 ${
              tone === "night" ? "text-bone-2" : "text-ink-2"
            }`}
          >
            {lead}
          </div>
        )}
      </div>
    </Reveal>
  );
}
