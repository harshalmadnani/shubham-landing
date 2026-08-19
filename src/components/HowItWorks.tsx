import { Reveal } from "@/components/Reveal";
import { RichTextContent } from "@/components/PendingData";
import { Section, SectionHead } from "@/components/Section";
import { howItWorks } from "@/content/sections";

/** The four stages, as a numbered sequence with room to breathe. */
export function HowItWorks() {
  return (
    <Section id="how-it-works" label="How it works">
      <SectionHead
        title={
          <>
            Four steps from first call to <em>hired</em>
          </>
        }
        lead="No mystery process — you always know which stage you're in and what comes next."
      />

      <ol className="mt-16 grid gap-12 tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-8">
        {howItWorks.map((step, index) => (
          <Reveal key={step.title} delay={index * 60}>
            <li className="relative">
              <span className="text-display text-line-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-heading">{step.title}</h3>
              <p className="mt-3 text-small text-ink-2">
                <RichTextContent value={step.body} />
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
