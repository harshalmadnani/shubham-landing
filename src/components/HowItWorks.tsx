import { RichTextContent } from "@/components/PendingData";
import { howItWorks } from "@/content/sections";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <h2 className="text-headline text-ink">How it works</h2>

        <ol className="mt-xl grid grid-cols-1 gap-xl tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-lg">
          {howItWorks.map((step, index) => (
            <li key={step.title} className="border-t-2 border-primary pt-lg">
              <span
                aria-hidden="true"
                className="block text-display-lg text-ink-subtle"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-sm text-card-title text-ink">{step.title}</p>
              <p className="mt-xs text-body-sm text-ink-muted">
                <RichTextContent value={step.body} />
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
