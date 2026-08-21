import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { placementSupport } from "@/content/sections";

/**
 * What placement support includes, and what it does not.
 *
 * "Placement support" is the most over-promised phrase in this market, so the
 * section ends by saying what is not on offer. That closing card is the point
 * of the whole section: a candidate who has been burned by a provider
 * promising a job is reading for exactly this, and burying it in the FAQ is
 * how you lose the ones worth having.
 */
export function Placement() {
  return (
    <Section id="placement" label="Placement support" tone="surface">
      <SectionHead
        title={
          <>
            Placement support,{" "}
            <em className="text-accent-ink">spelled out</em>
          </>
        }
        lead={placementSupport.lead}
      />

      <ul className="mt-16 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
        {placementSupport.includes.map((item, index) => (
          <Reveal key={item.title} delay={(index % 3) * 50} className="h-full">
            <li className="flex h-full flex-col rounded-lg bg-canvas p-6 tablet:p-7">
              <h3 className="text-heading text-ink">{item.title}</h3>
              <p className="mt-2 text-small text-ink-2">{item.body}</p>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <div className="mt-6 rounded-lg bg-night p-7 tablet:p-8">
          <h3 className="text-heading text-chalk">
            {placementSupport.limit.title}
          </h3>
          <p className="mt-2 max-w-2xl text-small text-chalk-2">
            {placementSupport.limit.body}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
