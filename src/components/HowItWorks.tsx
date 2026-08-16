import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { howItWorks } from "@/content/sections";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps from first call to hired"
          lead="No mystery process — you always know which stage you're in and what comes next."
        />

        <ol className="relative mt-xxl grid grid-cols-1 gap-lg tablet:grid-cols-2 desktop:grid-cols-4">
          {/* Rail connecting the four steps, desktop only. */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-linear-to-r from-primary/40 via-accent-warm/40 to-transparent desktop:block"
          />

          {howItWorks.map((step, index) => (
            <li key={step.title} className="relative">
              <Reveal delay={index * 90} className="h-full">
                <div className="group h-full rounded-xl border border-hairline bg-canvas p-lg shadow-card transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span
                    aria-hidden="true"
                    className="flex h-xl w-xl items-center justify-center rounded-full bg-brand-gradient text-body-emphasis text-on-primary shadow-primary"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-lg text-card-title text-ink">{step.title}</p>
                  <p className="mt-xs text-body-sm text-ink-muted">
                    <RichTextContent value={step.body} />
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
