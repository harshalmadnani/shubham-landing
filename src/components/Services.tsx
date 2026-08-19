import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { services } from "@/content/sections";

/**
 * The service list, on the inverse surface.
 *
 * The band is where the page changes chapter. Cells are divided by rules
 * drawn on the grid itself rather than by six floating boxes, so the section
 * reads as one plate.
 */
export function Services() {
  return (
    <Section id="our-services" index="03" label="Our services" tone="night">
      <SectionHead
        tone="night"
        title={
          <>
            Everything between choosing a program and <em>getting hired</em>
          </>
        }
        lead="Training is the first half. The rest is positioning, applications and interview readiness — and none of it is left to you alone."
      />

      {/* One plate, ruled into cells: every cell draws its own right and
          bottom rule and hangs a pixel past the container, which clips the
          outer edges. It is the only way to get an even grid of hairlines
          without special-casing the last column and the last row. */}
      <div className="mt-16 grid overflow-hidden border-t border-night-rule tablet:grid-cols-2 desktop:grid-cols-3">
        {services.map((service, index) => (
          <Reveal
            key={service.title}
            delay={(index % 3) * 60}
            className="-mb-px -mr-px border-b border-r border-night-rule"
          >
            <div className="flex h-full flex-col gap-4 p-7 tablet:p-8">
              <span className="font-mono text-index tnum text-flame-bright">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-title text-bone">
                {service.title}
              </h3>
              <p className="text-small text-bone-2">{service.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
