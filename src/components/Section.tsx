import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

export type Tone = "canvas" | "surface" | "night";

const surfaces: Record<Tone, string> = {
  canvas: "bg-canvas text-ink",
  surface: "bg-surface text-ink",
  night: "bg-night text-chalk",
};

/**
 * One section, one idea, and a lot of room around it.
 *
 * Vertical padding is deliberately larger than a section of this much copy
 * would normally get: the page carries a lot of words, and the only way to
 * stop it reading as a wall is to give each block its own screen.
 */
export function Section({
  id,
  label,
  tone = "canvas",
  className,
  children,
}: {
  id?: string;
  /** The one-line tag above the heading. Sentence case, never an eyebrow. */
  label?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`${surfaces[tone]}${className ? ` ${className}` : ""}`}
    >
      <div className="mx-auto w-full max-w-page px-6 py-24 tablet:px-8 tablet:py-32 desktop:py-40">
        {label && (
          <p
            className={`mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-micro ${
              tone === "night"
                ? "bg-night-2 text-chalk-2"
                : "bg-surface-2 text-ink-2"
            }`}
          >
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent"
            />
            {label}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

/**
 * The heading block: a large title and, at most, one line under it.
 *
 * The lead is capped at a comfortable measure rather than run to the full
 * width — long lines are the other half of why a page feels text-heavy.
 */
export function SectionHead({
  title,
  lead,
  tone = "canvas",
  className,
}: {
  title: ReactNode;
  lead?: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <Reveal>
      <div className={`max-w-3xl${className ? ` ${className}` : ""}`}>
        <h2
          className={`text-display text-balance ${
            tone === "night" ? "text-chalk" : "text-ink"
          }`}
        >
          {title}
        </h2>

        {lead && (
          <p
            className={`mt-6 max-w-2xl text-lead ${
              tone === "night" ? "text-chalk-2" : "text-ink-2"
            }`}
          >
            {lead}
          </p>
        )}
      </div>
    </Reveal>
  );
}
