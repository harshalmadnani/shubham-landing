import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { services } from "@/content/sections";

/** What the programme covers, on the inverse surface. */
export function Services() {
  return (
    <Section id="our-services" label="Our services" tone="night">
      <SectionHead
        tone="night"
        title={
          <>
            Everything between choosing a program and{" "}
            <em className="text-accent-bright">getting hired</em>
          </>
        }
        lead="Training is the first half. The rest is positioning, applications and interview readiness — and none of it is left to you alone."
      />

      <div className="mt-16 grid gap-10 tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-x-12 desktop:gap-y-14">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={(index % 3) * 60}>
            <div className="h-full">
              <span className="text-micro text-accent-bright">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-heading text-chalk">{service.title}</h3>
              <p className="mt-3 text-small text-chalk-2">{service.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
