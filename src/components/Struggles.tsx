import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { struggles } from "@/content/sections";

/**
 * The six ways a search stalls, set as an index.
 *
 * Numbered rows rather than cards: these are diagnoses a reader scans looking
 * for their own, and a scannable list beats six equal boxes for that.
 */
export function Struggles() {
  return (
    <Section id="why-job-seekers-struggle" index="01" label="The gap">
      <SectionHead
        title={
          <>
            Why job seekers <em>struggle</em>
          </>
        }
        lead="Most candidates aren't short on effort — they're missing a few consistent factors."
      />

      <ol className="mt-16 grid border-t border-ink desktop:grid-cols-2 desktop:gap-x-16">
        {struggles.map((struggle, index) => (
          <li key={struggle.title} className="border-b border-rule">
            <Reveal delay={(index % 2) * 60}>
              <div className="group flex gap-6 py-7">
                <span className="mt-1 font-mono text-index tnum text-flame-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-subtitle text-ink transition-colors duration-200 group-hover:text-flame-ink">
                    {struggle.title}
                  </h3>
                  <p className="mt-2 max-w-prose text-body text-ink-2">
                    {struggle.body}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
