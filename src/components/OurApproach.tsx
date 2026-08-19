import { Reveal } from "@/components/Reveal";
import { RichTextContent } from "@/components/PendingData";
import { Section, SectionHead } from "@/components/Section";
import { pathways } from "@/content/sections";

/**
 * The four pathways, each as a specimen panel.
 *
 * Every pathway is a full sequence, so each panel lists its own stages down a
 * ruled rail — the shape of the route is visible at a glance, and two routes
 * side by side can be compared stage for stage.
 */
export function OurApproach() {
  return (
    <Section id="our-approach" index="05" label="Our approach" tone="paper-2">
      <SectionHead
        title={
          <>
            Four pathways, depending on <em>where you start</em>
          </>
        }
        lead="Pick the route that matches your background — each one is a full sequence, not a menu of modules."
      />

      <div className="mt-16 grid overflow-hidden border-t border-l border-rule-2 tablet:grid-cols-2">
        {pathways.map((pathway, index) => (
          <Reveal
            key={pathway.name}
            delay={(index % 2) * 60}
            className="-mb-px -mr-px border-b border-r border-rule-2"
          >
            <div className="flex h-full flex-col bg-paper p-7 tablet:p-9">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-title text-ink">
                  {pathway.name}
                </h3>
                <span className="font-mono text-index tnum text-flame-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-3 text-small text-ink-2">
                {pathway.description}
              </p>

              <ol className="mt-8 flex flex-col">
                {pathway.steps.map((step, stepIndex) => (
                  <li
                    key={step.title}
                    className="relative flex gap-5 pb-6 pl-1 last:pb-0"
                  >
                    {/* The rail: a hairline down the column of markers, cut
                        short on the final stage so the route ends rather than
                        trailing off. */}
                    {stepIndex < pathway.steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-[3px] top-2.5 w-px bg-rule-2"
                      />
                    )}
                    <span
                      aria-hidden="true"
                      className="relative mt-1.5 h-[7px] w-[7px] shrink-0 bg-flame"
                    />
                    <div>
                      <p className="font-mono text-label uppercase text-ink">
                        {step.title}
                      </p>
                      <p className="mt-1.5 text-small text-ink-2">
                        <RichTextContent value={step.body} />
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
