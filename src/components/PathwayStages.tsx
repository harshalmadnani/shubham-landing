import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";
import { commitments, pathwayStages } from "@/content/trainingStructure";

/**
 * The stages of a pathway, laid out as a sequence rather than a tier grid.
 * Each stage is quoted on its own, so these are steps you move through in
 * order — a price table would frame them as alternatives, which is the
 * opposite of how the programme runs.
 *
 * The first two cards are the exception: they are the two training options, so
 * they carry `option A` / `option B` labels instead of a step number of their
 * own. Arrow connectors were dropped when the second option arrived — an arrow
 * between two alternatives would read as a sequence, which is wrong.
 */
export function PathwayStages() {
  return (
    <section id="stages" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="The pathway"
          title="What each stage involves"
          lead="Most providers deliver the training and stop there. A pathway carries you from your first session through to an offer — starting with whichever training track fits, then the stages you need."
        />

        <div className="mt-xxl grid gap-lg tablet:grid-cols-2 desktop:grid-cols-4">
          {pathwayStages.map((stage, index) => (
            <Reveal key={stage.title} delay={index * 80} className="h-full">
              <TiltCard className="h-full">
                <div className="group flex h-full flex-col rounded-lg border border-hairline bg-canvas p-lg transition-colors duration-300 hover:border-ink/40">
                  <p className="text-eyebrow uppercase text-ink-subtle">
                    {stage.step}
                  </p>
                  {/* Titles run to one or two lines and bodies to two or three;
                      reserving the taller of each keeps the four lists aligned. */}
                  <h3 className="mt-sm min-h-[2.4em] font-serif text-headline-sm text-ink">
                    {stage.title}
                  </h3>
                  <p className="mt-xs min-h-[5.5em] text-body-sm text-ink-muted">
                    <RichTextContent value={stage.body} />
                  </p>

                  {/* The two training options publish no hour count, so this
                      row holds its height rather than leaving a hole. */}
                  <p className="mt-lg flex min-h-[1.6em] items-baseline gap-xs">
                    {stage.stat && (
                      <>
                        <span className="font-serif text-headline-sm text-primary">
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
