import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { inclusions } from "@/content/sections";
import { site } from "@/content/site";

/**
 * What every programme includes, as one scannable strip.
 *
 * The seven labels are the ones every provider in this market lists, so the
 * labels alone would say nothing. Each carries a line of detail instead — the
 * section earns its place by being specific, not by being a checklist.
 *
 * Spaced cards rather than the hairline `gap-px` grid used elsewhere on the
 * site. That technique draws its rules by letting a background show through
 * the gaps, which means a row that is not full shows an empty panel of
 * background — and seven items never fill a three-column row.
 */
export function WhyUs() {
  return (
    <Section id="why-us" label={`Why ${site.name.split(" ")[0]}`} tone="surface">
      <SectionHead
        title={
          <>
            Seven things in every programme,{" "}
            <em className="text-accent-ink">not five of the seven</em>
          </>
        }
        lead="Training providers tend to list these and price them separately. Here they are one programme, and the list below says what each one actually means."
      />

      <ul className="mt-16 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
        {inclusions.map((item, index) => (
          <Reveal key={item.label} delay={(index % 3) * 50} className="h-full">
            <li className="flex h-full flex-col rounded-lg bg-canvas p-6 tablet:p-7">
              <span
                aria-hidden="true"
                className="text-micro tabular-nums text-accent-ink"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-heading text-ink">{item.label}</h3>
              <p className="mt-2 text-small text-ink-2">{item.detail}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
