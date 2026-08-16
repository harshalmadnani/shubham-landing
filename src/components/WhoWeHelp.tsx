import Image from "next/image";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { audiences } from "@/content/sections";

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Who we help"
          title="Built around where you're actually starting from"
          lead="Four starting points, four different routes in — the program adapts to your background, not the other way round."
        />

        <div className="mt-xxl grid grid-cols-1 gap-lg desktop:grid-cols-2">
          {audiences.map((audience, index) => (
            <Reveal key={audience.title} delay={index * 80}>
              <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-hairline bg-canvas shadow-card transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift tablet:flex-row">
                <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden tablet:aspect-auto tablet:w-[38%]">
                  <Image
                    src={`/images/${audience.image}.webp`}
                    alt=""
                    width={640}
                    height={800}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-inverse-canvas/60 to-transparent"
                  />
                  <span className="absolute left-md top-md flex h-xl w-xl items-center justify-center rounded-full bg-brand-gradient text-body-emphasis text-on-primary shadow-primary">
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
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient"
                        />
                        <span className="text-body-sm text-ink">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
