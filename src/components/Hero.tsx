import Image from "next/image";

import { ButtonLink } from "@/components/Button";
import { ArrowRightIcon, CalendarIcon } from "@/components/icons";
import { consultationMessage, hero, whatsAppUrl } from "@/content/site";

export function Hero() {
  return (
    <section id="hero" className="px-md pt-lg tablet:px-lg tablet:pt-xxl">
      <div className="mx-auto grid max-w-content gap-xl rounded-none bg-canvas py-lg tablet:grid-cols-2 tablet:items-center tablet:gap-xxl tablet:p-xxl">
        <div>
          <p className="text-eyebrow text-ink-muted">{hero.eyebrow}</p>
          <h1 className="mt-md text-display-xl-mobile tablet:text-display-xl-tablet desktop:text-display-xl text-ink">
            {hero.headline}
          </h1>
          <p className="mt-lg max-w-2xl text-body-lg text-ink-muted">
            {hero.body}
          </p>
          <div className="mt-xl flex flex-wrap gap-md">
            <ButtonLink href={whatsAppUrl(consultationMessage)}>
              <CalendarIcon className="h-md w-md" />
              Book free consultation
            </ButtonLink>
            <ButtonLink href="/#programs" variant="outline">
              Learn More
              <ArrowRightIcon className="h-md w-md" />
            </ButtonLink>
          </div>
        </div>

        {/* Image leads on mobile, follows the copy from tablet up. */}
        <div className="order-first tablet:order-0">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            width={1200}
            height={800}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
