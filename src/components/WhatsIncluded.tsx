import { Reveal } from "@/components/Reveal";
import { RichTextContent } from "@/components/PendingData";
import { Section, SectionHead } from "@/components/Section";
import { includedGroups } from "@/content/sections";

/**
 * The contents page: every group of support, listed in full.
 *
 * The group name stays in the left margin while its items run down the right,
 * which is how a printed contents page is set and why fifteen entries here
 * still scan in a couple of seconds.
 */
export function WhatsIncluded() {
  return (
    <Section id="whats-included" index="06" label="What's included">
      <SectionHead
        title={
          <>
            Every pathway draws from the <em>same complete set</em> of support
          </>
        }
        lead="Whichever route you take, none of these are add-ons or upsells."
      />

      <div className="mt-16 border-t border-ink">
        {includedGroups.map((group, groupIndex) => (
          <div
            key={group.name}
            className="grid gap-x-10 gap-y-6 border-b border-rule py-10 desktop:grid-cols-12"
          >
            <div className="desktop:col-span-3">
              <p className="flex items-baseline gap-3 font-mono text-label uppercase text-ink-3">
                <span className="tnum text-flame-ink">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>
                {group.name}
              </p>
            </div>

            <ul className="grid gap-x-10 gap-y-7 desktop:col-span-9 tablet:grid-cols-2">
              {group.items.map((item, index) => (
                <li key={item.title}>
                  <Reveal delay={(index % 2) * 50}>
                    <h3 className="text-subtitle text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-small text-ink-2">
                      <RichTextContent value={item.body} />
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
