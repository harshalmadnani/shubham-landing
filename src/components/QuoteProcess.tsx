import { ButtonLink } from "@/components/Button";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { consultationMessage, whatsAppUrl } from "@/content/site";
import { quotePanel, quoteSteps } from "@/content/trainingStructure";

/**
 * How somebody goes from a published price to a place on a batch.
 *
 * The panel states the pricing principle; the three steps are the booking
 * itself, numbered because they genuinely happen in that order.
 */
export function QuoteProcess() {
  return (
    <section id="what-it-costs" className="mt-band">
      <div className="mx-auto max-w-page px-gutter tablet:px-rail">
        <div className="grid gap-xxl desktop:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] desktop:gap-xxxl">
          <Reveal>
            <div>
              <div className="flex items-center gap-sm">
                <span
                  aria-hidden="true"
                  className="h-[7px] w-[7px] shrink-0 rounded-full bg-signal"
                />
                <p className="font-mono text-label uppercase text-ink-3">
                  How pricing works
                </p>
              </div>
              <h2 className="mt-lg max-w-[20ch] text-title text-ink">
                {quotePanel.heading}
              </h2>
              <p className="mt-md max-w-[52ch] text-body text-ink-2">
                {quotePanel.body}
              </p>
              <ButtonLink
                href={whatsAppUrl(consultationMessage)}
                className="mt-xl"
              >
                Book a free consultation
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ol className="border-t border-ink">
              {quoteSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-md border-b border-rule py-lg"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[2px] font-mono text-label text-signal-text"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-card text-ink">{step.title}</p>
                    <p className="mt-xxs max-w-[52ch] text-small text-ink-2">
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
