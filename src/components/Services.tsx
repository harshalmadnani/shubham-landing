import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/content/sections";

/**
 * What we actually sell, as a timetable grid.
 *
 * Cells divided by hairlines rather than six floating cards: the grid itself
 * carries the structure, which is one fewer decorative device on the page and
 * reads as a schedule rather than a feature list.
 */
export function Services() {
  return (
    <section id="services" className="mt-band">
      <div className="mx-auto max-w-page px-gutter tablet:px-rail">
        <SectionHeading
          label="What we do"
          title="Everything between choosing a subject and being hired"
          lead="Six services. Most people need three of them, in order."
        />

        <div className="mt-xxl grid gap-px border border-rule bg-rule tablet:grid-cols-2 desktop:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 50} className="h-full">
              <div className="group flex h-full flex-col bg-paper p-lg transition-colors duration-200 hover:bg-raised">
                <div className="flex items-baseline justify-between gap-sm">
                  <h3 className="text-card text-ink">{service.title}</h3>
                  <span
                    aria-hidden="true"
                    className="font-mono text-label text-ink-3 transition-colors group-hover:text-signal-text"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-sm text-small text-ink-2">{service.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
