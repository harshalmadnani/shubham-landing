import Image from "next/image";

import { services } from "@/content/sections";

export function Services() {
  return (
    <section id="our-services" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <h2 className="text-headline text-ink">Our Services</h2>
        <p className="mt-sm max-w-2xl text-body-lg text-ink-muted">
          Everything between choosing a program and getting hired.
        </p>

        <div className="mt-xl grid grid-cols-1 gap-lg tablet:grid-cols-2 desktop:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-none border border-hairline bg-canvas text-ink transition-colors duration-200 hover:border-hairline-strong hover:bg-surface-1"
            >
              <Image
                src={`/images/${service.image}.webp`}
                alt=""
                width={1200}
                height={800}
                className="aspect-3/2 w-full object-cover"
              />
              <div className="p-service-card">
                <p className="text-card-title">{service.title}</p>
                <p className="mt-xs text-body-sm">{service.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
