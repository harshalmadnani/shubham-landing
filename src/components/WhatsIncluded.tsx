import Image from "next/image";

import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { includedGroups } from "@/content/sections";

export function WhatsIncluded() {
  return (
    <section id="whats-included" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="What's included"
          title="Every pathway draws from the same complete set of support"
          lead="Whichever route you take, none of these are add-ons or upsells."
        />

        {/* Masonry columns — groups have very different lengths, and a grid
            would leave the short ones trailing whitespace. */}
        <div className="mt-xxl columns-1 gap-lg tablet:columns-2 desktop:columns-3">
          {includedGroups.map((group, index) => (
            <div key={group.name} className="mb-lg break-inside-avoid">
              <Reveal delay={(index % 3) * 70}>
                <div className="rounded-xl border border-hairline bg-canvas p-lg shadow-card">
                  <div className="flex items-baseline justify-between gap-md">
                    <h3 className="text-card-title text-ink">{group.name}</h3>
                    <span className="shrink-0 whitespace-nowrap rounded-full bg-primary-soft px-sm py-xxs text-caption text-primary">
                      {group.items.length}
                    </span>
                  </div>

                  <ul className="mt-md flex flex-col">
                    {group.items.map((item, itemIndex) => (
                      <li
                        key={item.title}
                        className={`flex items-start gap-md py-md ${
                          itemIndex === 0 ? "" : "border-t border-hairline"
                        }`}
                      >
                        <span className="flex h-xxl w-xxl shrink-0 items-center justify-center rounded-md bg-surface-1">
                          <Image
                            src={`/images/icons/${item.icon}.webp`}
                            alt=""
                            width={48}
                            height={48}
                            className="h-xl w-xl"
                          />
                        </span>
                        <div>
                          <p className="text-body-emphasis text-ink">
                            {item.title}
                          </p>
                          <p className="mt-xxs text-body-sm text-ink-muted">
                            <RichTextContent value={item.body} />
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
