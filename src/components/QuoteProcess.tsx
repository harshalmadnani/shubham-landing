import { ButtonLink } from "@/components/Button";
import { CalendarIcon } from "@/components/icons";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { consultationMessage, whatsAppUrl } from "@/content/site";
import { quotePanel, quoteSteps } from "@/content/trainingStructure";

/**
 * Stands in for a price table. Each stage is quoted separately and a pathway
 * is assembled per candidate, so what the page can publish is the route to a
 * firm number rather than the number itself.
 */
export function QuoteProcess() {
  return (
    <section id="what-it-costs" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <div className="grid gap-lg desktop:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] desktop:gap-xl">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-lg border border-hairline bg-surface-1 p-xl tablet:p-xxl">
              <div>
                <p className="text-eyebrow uppercase text-ink-muted">
                  What it costs
                </p>
                <h2 className="mt-sm font-serif text-headline-sm text-ink">
                  {quotePanel.heading}
                </h2>
                <p className="mt-md text-body text-ink-muted">
                  {quotePanel.body}
                </p>
              </div>

              <ButtonLink
                href={whatsAppUrl(consultationMessage)}
                className="mt-xl self-start"
              >
                <CalendarIcon className="h-md w-md" />
                Book free consultation
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ol className="flex h-full flex-col gap-sm">
              {quoteSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex flex-1 items-start gap-md rounded-lg border border-hairline bg-canvas p-lg transition-colors duration-300 hover:border-ink/40"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-xl w-xl shrink-0 items-center justify-center rounded-full bg-ink font-serif text-body text-inverse-ink"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-card-title text-ink">{step.title}</p>
                    <p className="mt-xxs text-body-sm text-ink-muted">
                      <RichTextContent value={step.body} />
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
