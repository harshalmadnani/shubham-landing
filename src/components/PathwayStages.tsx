"use client";

import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { useRegion } from "@/components/RegionProvider";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";
import { formatPrice } from "@/content/regions";
import { commitments, pathwayStages } from "@/content/trainingStructure";

/**
 * The parts a pathway is built from, each with its own price for the chosen
 * market.
 *
 * The first two cards are the two training options, so they carry
 * `option A` / `option B` labels rather than step numbers of their own. There
 * are no arrow connectors: an arrow between two alternatives would read as a
 * sequence, which is wrong.
 *
 * The region comes from context rather than local state, because the routes
 * section above prices the same stages — two independent switches on one page
 * is how a reader ends up comparing a total in one currency against stage
 * prices in another. The switch itself renders once, up there.
 */
export function PathwayStages() {
  const { region } = useRegion();

  return (
    <section id="stages" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Inside a pathway"
          title="What each stage involves, and what it costs"
          lead="Four stages, priced individually and combined into the routes above. This is what you are actually buying at each one — how it runs, what you do, and what you walk away holding."
        />

        <div className="mt-xl grid gap-lg tablet:grid-cols-2 desktop:grid-cols-4">
          {pathwayStages.map((stage, index) => (
            <Reveal key={stage.title} delay={index * 80} className="h-full">
              <TiltCard className="h-full">
                <div className="group flex h-full flex-col rounded-lg border border-hairline bg-canvas p-lg transition-colors duration-300 hover:border-ink/40">
                  <p className="text-eyebrow uppercase text-ink-subtle">
                    {stage.step}
                  </p>
                  {/* Titles run to one or two lines and bodies to two or three;
                      reserving the taller of each keeps the four lists aligned. */}
                  <h3 className="mt-sm min-h-[2.4em] text-card-title font-semibold text-ink">
                    {stage.title}
                  </h3>
                  <p className="mt-xs min-h-[5.5em] text-body-sm text-ink-muted">
                    <RichTextContent value={stage.body} />
                  </p>

                  <p className="mt-lg font-serif text-display-md text-ink">
                    {formatPrice(region, stage.priceKey)}
                  </p>

                  {/* The two training options publish no hour count, so this
                      row holds its height rather than leaving a hole. */}
                  <p className="mt-xs flex min-h-[1.6em] items-baseline gap-xs">
                    {stage.stat && (
                      <>
                        <span className="text-body-emphasis text-primary">
                          {stage.stat}
                        </span>
                        <span className="text-body-sm text-ink-muted">
                          {stage.statLabel}
                        </span>
                      </>
                    )}
                  </p>

                  <ul className="mt-md flex flex-col gap-sm border-t border-hairline pt-lg">
                    {stage.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex gap-sm">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                        <span className="text-body-sm text-ink">
                          <RichTextContent value={point} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* What the training stage asks of you in return. */}
        <Reveal delay={140}>
          <div className="mt-lg rounded-lg bg-inverse-canvas p-lg tablet:p-xl">
            <div>
              <p className="text-eyebrow uppercase text-inverse-ink-muted">
                What we ask in return
              </p>
              <dl className="mt-lg grid gap-lg tablet:grid-cols-3">
                {commitments.map((commitment) => (
                  <div key={commitment.value}>
                    <dt className="font-serif text-headline-sm text-inverse-ink">
                      {commitment.value}
                    </dt>
                    <dd className="mt-xxs text-body-sm text-inverse-ink-muted">
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
