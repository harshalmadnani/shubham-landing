import { Reveal } from "@/components/Reveal";
import { RichTextContent } from "@/components/PendingData";
import { Section, SectionHead } from "@/components/Section";
import { pathways } from "@/content/sections";

/** The four pathways, one card each, each listing its own stages. */
export function OurApproach() {
  return (
    <Section id="our-approach" label="Our approach" tone="surface">
      <SectionHead
        title={
          <>
            Four pathways, depending on <em>where you start</em>
          </>
        }
        lead="Pick the route that matches your background — each one is a full sequence, not a menu of modules."
      />

      <div className="mt-16 grid gap-4 tablet:grid-cols-2 desktop:gap-6">
        {pathways.map((pathway, index) => (
          <Reveal key={pathway.name} delay={(index % 2) * 60}>
            <article className="flex h-full flex-col rounded-lg bg-card p-8 tablet:p-10">
              <h3 className="text-title">{pathway.name}</h3>
              <p className="mt-3 text-small text-ink-2">
                {pathway.description}
              </p>

              <ol className="mt-8 flex flex-col gap-5 border-t border-line pt-8">
                {pathway.steps.map((step, stepIndex) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-micro text-ink-2">
                      {stepIndex + 1}
                    </span>
                    <div>
                      <p className="text-label">{step.title}</p>
                      <p className="mt-1 text-small text-ink-2">
                        <RichTextContent value={step.body} />
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
