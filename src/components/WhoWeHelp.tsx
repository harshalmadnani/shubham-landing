import Image from "next/image";

import { audiences } from "@/content/sections";

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <h2 className="text-headline text-ink">Who We Help</h2>
        <p className="mt-sm max-w-2xl text-body-lg text-ink-muted">
          Programs built around where you&apos;re actually starting from.
        </p>

        <div className="mt-xl grid grid-cols-1 gap-lg desktop:grid-cols-2">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="flex flex-col border border-hairline tablet:flex-row"
            >
              <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden tablet:aspect-auto tablet:w-[38%]">
                <Image
                  src={`/images/${audience.image}.webp`}
                  alt=""
                  width={640}
                  height={800}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute left-0 top-0 flex h-xl w-xl items-center justify-center bg-primary text-body-emphasis text-on-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex-1 p-xl">
                <p className="text-card-title text-ink">{audience.title}</p>
                <p className="mt-xs text-body-sm text-ink-muted">
                  {audience.body}
                </p>
                <ul className="mt-lg flex flex-col gap-sm">
                  {audience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-sm">
                      <span
                        aria-hidden="true"
                        className="mt-xs h-xxs w-xxs shrink-0 bg-ink"
                      />
                      <span className="text-body-sm text-ink">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
