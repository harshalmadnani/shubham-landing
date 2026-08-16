import Image from "next/image";

import { RichTextContent } from "@/components/PendingData";
import { includedGroups } from "@/content/sections";

export function WhatsIncluded() {
  return (
    <section id="whats-included" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <h2 className="text-headline text-ink">What&apos;s Included</h2>
        <p className="mt-sm max-w-2xl text-body-lg text-ink-muted">
          Every pathway draws from the same complete set of support.
        </p>

        {/* Masonry columns — groups have very different lengths, and a grid
            would leave the short ones trailing whitespace. */}
        <div className="mt-xl columns-1 tablet:columns-2 desktop:columns-3 desktop:gap-xxl">
          {includedGroups.map((group) => (
            <div key={group.name} className="mb-xxl break-inside-avoid">
              <div className="flex items-baseline justify-between gap-md">
                <h3 className="text-card-title text-ink">{group.name}</h3>
                <span className="shrink-0 whitespace-nowrap text-caption text-ink-subtle">
                  {group.items.length} included
                </span>
              </div>

              <ul className="mt-md border border-hairline">
                {group.items.map((item, index) => (
                  <li
                    key={item.title}
                    className={`flex items-center gap-md px-lg py-md ${
                      index === 0 ? "" : "border-t border-hairline"
                    }`}
                  >
                    <Image
                      src={`/images/icons/${item.icon}.webp`}
                      alt=""
                      width={48}
                      height={48}
                      className="h-xxl w-xxl shrink-0"
                    />
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
          ))}
        </div>
      </div>
    </section>
  );
}
