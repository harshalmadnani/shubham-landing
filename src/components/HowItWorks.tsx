import { Reveal } from "@/components/Reveal";
import { RichTextContent } from "@/components/PendingData";
import { Section, SectionHead } from "@/components/Section";
import { howItWorks } from "@/content/sections";

/**
 * The four stages, set as a sequence.
 *
 * The numeral is the illustration: set in the display serif at the size of a
 * headline, in the margin, so the order of the stages is legible before a
 * single word is read.
 */
export function HowItWorks() {
  return (
    <Section id="how-it-works" index="04" label="How it works">
      <SectionHead
        title={
          <>
            Four steps from first call to <em>hired</em>
          </>
        }
        lead="No mystery process — you always know which stage you're in and what comes next."
      />

      <ol className="mt-16 border-t border-ink">
        {howItWorks.map((step, index) => (
          <li key={step.title} className="border-b border-rule">
            <Reveal>
              <div className="group grid gap-4 py-9 desktop:grid-cols-12 desktop:gap-10">
                <div className="flex items-baseline gap-5 desktop:col-span-5">
                  <span className="font-display text-title tnum text-rule-2 transition-colors duration-300 group-hover:text-flame">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-title text-ink">
                    {step.title}
                  </h3>
                </div>
                <p className="text-body text-ink-2 desktop:col-span-6 desktop:col-start-7">
                  <RichTextContent value={step.body} />
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
