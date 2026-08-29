import { ButtonLink } from "@/components/Button";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { bookingPath } from "@/content/booking";
import { quotePanel, quoteSteps } from "@/content/trainingStructure";

/**
 * How someone goes from a published price to a place on a batch.
 *
 * The prices are on the page already, so this explains the arrangement behind
 * them — stage by stage rather than a bundle — and the three steps to
 * enrolling.
 */
export function QuoteProcess() {
  return (
    <Section id="what-it-costs" label="How pricing works" tone="surface">
      <SectionHead title={quotePanel.heading} lead={quotePanel.body} />

      <div className="mt-16 grid gap-4 tablet:grid-cols-3 desktop:gap-6">
        {quoteSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 60}>
            <div className="h-full rounded-lg bg-card p-8">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface text-micro text-ink-2">
                {index + 1}
              </span>
              <p className="mt-5 text-heading">{step.title}</p>
              <p className="mt-2 text-small text-ink-2">
                <RichTextContent value={step.body} />
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <ButtonLink href={bookingPath} className="mt-12">
        Book a free consultation
      </ButtonLink>
    </Section>
  );
}
