import { ButtonLink } from "@/components/Button";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { consultationMessage, whatsAppUrl } from "@/content/site";
import { quotePanel, quoteSteps } from "@/content/trainingStructure";

/**
 * How someone goes from a published price to a place on a batch.
 *
 * This section used to stand in for a price table; the prices are on the page
 * now, so it explains the arrangement behind them — stage-by-stage rather than
 * a bundle — and the three steps to enrolling.
 */
export function QuoteProcess() {
  return (
    <Section id="what-it-costs" index="02" label="How pricing works" tone="paper-2">
      <div className="grid gap-x-10 gap-y-12 desktop:grid-cols-12">
        <Reveal className="desktop:col-span-5">
          <h2 className="font-display text-title text-ink">
            {quotePanel.heading}
          </h2>
          <p className="mt-5 text-lead text-ink-2">{quotePanel.body}</p>
          <ButtonLink
            href={whatsAppUrl(consultationMessage)}
            className="mt-8"
          >
            Book free consultation
          </ButtonLink>
        </Reveal>

        <Reveal delay={80} className="desktop:col-span-6 desktop:col-start-7">
          <ol className="border-t border-ink">
            {quoteSteps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-6 border-b border-rule py-7"
              >
                <span className="mt-1 font-mono text-index tnum text-flame-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-subtitle text-ink">{step.title}</p>
                  <p className="mt-2 text-small text-ink-2">
                    <RichTextContent value={step.body} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
