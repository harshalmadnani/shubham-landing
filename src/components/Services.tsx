import Image from "next/image";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/content/sections";

export function Services() {
  return (
    <section id="our-services" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Our services"
          title="Everything between choosing a program and getting hired"
          lead="Training is the first half. The rest is positioning, applications and interview readiness — and none of it is left to you alone."
        />

        <div className="mt-xxl grid grid-cols-1 gap-lg tablet:grid-cols-2 desktop:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 80}>
              <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-hairline bg-canvas shadow-card transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-3/2 w-full overflow-hidden">
                  <Image
                    src={`/images/${service.image}.webp`}
                    alt=""
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-service-card">
                  <p className="text-card-title text-ink">{service.title}</p>
                  <p className="mt-xs text-body-sm text-ink-muted">
                    {service.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
