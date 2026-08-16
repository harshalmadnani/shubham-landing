import { Fragment } from "react";

import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { pathwayParts } from "@/content/pricing";

/**
 * The three parts of a pathway, laid out as an assembly rather than a price
 * table: joined by `+` and resolving to a single total. The point of the page
 * is that these are combined, not chosen between, and a tier grid would say
 * the opposite.
 */
export function PathwayComposition() {
  return (
    <section id="whats-in-a-pathway" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="What's in a pathway"
          title="Three parts, priced as one"
          lead="Most providers sell the training and stop there. A pathway carries all three of these from your first session through to an offer."
        />

        <div className="mt-xxl grid gap-md desktop:grid-cols-[1fr_auto_1fr_auto_1fr] desktop:items-stretch">
          {pathwayParts.map((part, index) => (
            <Fragment key={part.label}>
              {index > 0 && (
                <div
                  aria-hidden="true"
                  className="flex items-center justify-center desktop:px-xxs"
                >
                  <span className="flex h-xl w-xl items-center justify-center rounded-full border border-hairline bg-canvas text-body-emphasis text-ink-subtle shadow-sm">
                    +
                  </span>
                </div>
              )}

              <Reveal delay={index * 90} className="h-full">
                <div className="group flex h-full flex-col rounded-xl border border-hairline bg-canvas p-lg shadow-card transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <p className="text-eyebrow uppercase text-primary">
                    {part.label}
                  </p>
                  <h3 className="mt-sm text-card-title text-ink">
                    {part.title}
                  </h3>
                  <p className="mt-xs text-body-sm text-ink-muted">
                    <RichTextContent value={part.body} />
                  </p>

                  <ul className="mt-lg flex flex-col gap-sm border-t border-hairline pt-lg">
                    {part.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex gap-sm">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient"
                        />
                        <span className="text-body-sm text-ink">
                          <RichTextContent value={point} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </Fragment>
          ))}
        </div>

        {/* The total the three parts add up to. */}
        <Reveal delay={140}>
          <div className="relative mt-md overflow-hidden rounded-xl bg-brand-gradient p-lg text-center shadow-primary tablet:p-xl">
            <div aria-hidden="true" className="absolute inset-0 bg-grid" />
            <p className="relative text-card-title text-on-primary">
              <span aria-hidden="true" className="mr-sm opacity-70">
                =
              </span>
              One pathway, quoted as a single price
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
