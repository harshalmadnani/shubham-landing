import { Reveal } from "@/components/Reveal";
import { RichTextContent } from "@/components/PendingData";
import { Section, SectionHead } from "@/components/Section";
import { includedGroups } from "@/content/sections";

/**
 * Everything the programme includes, grouped.
 *
 * The group name sits on its own line above its items rather than in a margin
 * column, so each group reads as its own short list instead of as one long
 * table of fifteen rows.
 */
export function WhatsIncluded() {
  return (
    <Section id="whats-included" label="What's included">
      <SectionHead
        title={
          <>
            Every pathway draws from the <em>same complete set</em> of support
          </>
        }
        lead="Whichever route you take, none of these are add-ons or upsells."
      />

      <div className="mt-16 flex flex-col gap-16">
        {includedGroups.map((group) => (
          <div key={group.name}>
            <h3 className="text-label text-ink-3">{group.name}</h3>

            <div className="mt-6 grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-6">
              {group.items.map((item, index) => (
                <Reveal key={item.title} delay={(index % 3) * 50}>
                  <div className="h-full rounded-lg bg-surface p-7">
                    <p className="text-heading">{item.title}</p>
                    <p className="mt-2 text-small text-ink-2">
                      <RichTextContent value={item.body} />
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
