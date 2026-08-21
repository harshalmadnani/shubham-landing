import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { journey } from "@/content/sections";

/**
 * The five stages, in order, as one line you can read at a glance.
 *
 * The same programme is described elsewhere as four priced services. This is
 * what it looks like from the candidate's side, and each stage names the
 * service that does the work so the two descriptions cannot drift apart —
 * somebody deciding whether to enrol thinks in stages, not in line items.
 *
 * The connecting rule is drawn only from the tablet breakpoint up, where the
 * stages sit in a row. Stacked on a phone, the numbers carry the sequence and
 * a vertical rule would just be a decoration in the way of the reading.
 */
export function Journey() {
  return (
    <Section id="journey" label="The process">
      <SectionHead
        title={
          <>
            Assess, learn, build, prepare,{" "}
            <em className="text-accent-ink">apply</em>
          </>
        }
        lead="Five stages from the first phone call to the first offer. Each one depends on the one before it, which is why none of them is optional."
      />

      <ol className="mt-16 grid gap-10 tablet:grid-cols-5 tablet:gap-6">
        {journey.map((stage, index) => (
          <Reveal key={stage.name} delay={index * 60} className="h-full">
            <li className="flex h-full flex-col">
              <div className="flex items-center gap-3 tablet:block">
                <span className="text-micro tabular-nums text-accent-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* The route line, drawn once the stages sit in a row. */}
                <span
                  aria-hidden="true"
                  className="hidden items-center gap-2 pt-3 tablet:flex"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {index < journey.length - 1 && (
                    <span className="h-px flex-1 bg-line-2" />
                  )}
                </span>
              </div>

              <h3 className="mt-3 text-heading text-ink tablet:mt-4">
                {stage.name}
              </h3>
              <p className="mt-2 text-small text-ink-2">{stage.body}</p>
              <p className="mt-4 text-micro text-ink-3">{stage.service}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
