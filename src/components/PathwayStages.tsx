import { Fragment } from "react";

import { ArrowRightIcon } from "@/components/icons";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { commitments, pathwayStages } from "@/content/trainingStructure";

/**
 * The three stages of a pathway, laid out as a sequence rather than a tier
 * grid. Each stage is quoted on its own, so these are steps you move through
 * in order — a price table would frame them as alternatives, which is the
 * opposite of how the programme runs.
 */
export function PathwayStages() {
  return (
    <section id="stages" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="The pathway"
          title="What each stage involves"
          lead="Most providers deliver the training and stop there. A pathway carries you from your first session through to an offer — and you take the stages you need."
        />

        <div className="mt-xxl grid gap-md desktop:grid-cols-[1fr_auto_1fr_auto_1fr] desktop:items-stretch">
          {pathwayStages.map((stage, index) => (
            <Fragment key={stage.label}>
              {index > 0 && (
                <div
                  aria-hidden="true"
                  className="flex items-center justify-center desktop:px-xxs"
                >
                  <span className="flex h-xl w-xl items-center justify-center rounded-full border border-hairline bg-canvas text-ink-subtle shadow-sm">
                    <ArrowRightIcon className="h-md w-md rotate-90 desktop:rotate-0" />
                  </span>
                </div>
              )}

              <Reveal delay={index * 90} className="h-full">
                <div className="group flex h-full flex-col rounded-xl border border-hairline bg-canvas p-lg shadow-card transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <p className="text-eyebrow uppercase text-ink-subtle">
                    {stage.step}
                  </p>
                  {/* Titles run to one or two lines and bodies to two or
                      three; reserving the taller of each keeps the stat rows
                      on one line across the three cards. */}
                  <h3 className="mt-sm min-h-[2em] text-card-title text-ink">
                    {stage.title}
                  </h3>
                  <p className="mt-xs min-h-[4.5em] text-body-sm text-ink-muted">
                    <RichTextContent value={stage.body} />
                  </p>

                  <p className="mt-lg flex items-baseline gap-xs">
                    <span className="text-headline-sm text-gradient">
                      {stage.stat}
                    </span>
                    <span className="text-body-sm text-ink-muted">
                      {stage.statLabel}
                    </span>
                  </p>

                  <ul className="mt-lg flex flex-col gap-sm border-t border-hairline pt-lg">
                    {stage.points.map((point, pointIndex) => (
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

        {/* What the training stage asks of you in return. */}
        <Reveal delay={140}>
          <div className="relative mt-md overflow-hidden rounded-xl bg-brand-gradient p-lg shadow-primary tablet:p-xl">
            <div aria-hidden="true" className="absolute inset-0 bg-grid" />
            <div className="relative">
              <p className="text-eyebrow uppercase text-on-primary/70">
                What we ask in return
              </p>
              <dl className="mt-lg grid gap-lg tablet:grid-cols-3">
                {commitments.map((commitment) => (
                  <div key={commitment.value}>
                    <dt className="text-headline-sm text-on-primary">
                      {commitment.value}
                    </dt>
                    <dd className="mt-xxs text-body-sm text-on-primary/80">
                      {commitment.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
