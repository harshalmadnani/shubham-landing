import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { struggles } from "@/content/sections";

/** The six ways a search stalls, as a card each. */
export function Struggles() {
  return (
    <Section id="why-job-seekers-struggle" label="The gap">
      <SectionHead
        title={
          <>
            Why job seekers <em>struggle</em>
          </>
        }
        lead="Most candidates aren't short on effort — they're missing a few consistent factors."
      />

      <div className="mt-16 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-6">
        {struggles.map((struggle, index) => (
          <Reveal key={struggle.title} delay={(index % 3) * 60}>
            <article className="h-full rounded-lg bg-surface p-8">
              <h3 className="text-heading">{struggle.title}</h3>
              <p className="mt-3 text-small text-ink-2">{struggle.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
