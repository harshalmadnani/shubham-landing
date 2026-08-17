import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/content/sections";

/**
 * Six services as an editorial index — top rule, serif numeral, title, body.
 * The stock-photo card grid this replaces added nothing the words don't say.
 */
export function Services() {
  return (
    <section id="our-services" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Our services"
          title="Everything between choosing a program and getting hired"
          lead="Training is the first half. The rest is positioning, applications and interview readiness — and none of it is left to you alone."
        />

        <div className="mt-xxl grid grid-cols-1 gap-x-xxl gap-y-xl tablet:grid-cols-2 desktop:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 60}>
              <div className="group h-full border-t-2 border-ink pt-lg transition-colors duration-300">
                <span
                  aria-hidden="true"
                  className="font-serif text-body text-ink-subtle"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-sm font-serif text-headline-sm text-ink">
                  {service.title}
                </p>
                <p className="mt-sm text-body-sm text-ink-muted">
                  {service.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
