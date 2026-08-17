import Image from "next/image";

import { ButtonLink } from "@/components/Button";
import { ArrowRightIcon, CalendarIcon } from "@/components/icons";
import { consultationMessage, hero, whatsAppUrl } from "@/content/site";

export function Hero() {
  return (
    <section id="hero" className="px-md pt-md tablet:px-lg tablet:pt-lg">
      {/* The hero is an inset dark card rather than a full-bleed band, so the
          light header reads cleanly above it on every page. */}
      <div className="relative mx-auto max-w-content overflow-hidden rounded-2xl bg-inverse-canvas">
        <div aria-hidden="true" className="absolute inset-0 bg-mesh" />
        <div aria-hidden="true" className="absolute inset-0 bg-grid" />
        {/* Floor the mesh so text at the bottom keeps its contrast. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-inverse-canvas via-transparent to-transparent"
        />

        <div className="relative grid gap-xxl px-lg py-xxxl tablet:px-xxl desktop:grid-cols-[1.05fr_1fr] desktop:items-center desktop:gap-xxxl desktop:py-xxxl">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-xs rounded-full glass px-md py-xs text-eyebrow uppercase text-inverse-ink">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              {hero.eyebrow}
            </p>

            <h1 className="mt-lg text-display-xl-mobile tablet:text-display-xl-tablet desktop:text-display-xl text-inverse-ink">
              {hero.headline}{" "}
              <span className="text-gradient">{hero.headlineAccent}</span>
            </h1>

            <p className="mt-lg max-w-2xl text-body-lg text-inverse-ink-muted">
              {hero.body}
            </p>

            <div className="mt-xl flex flex-wrap gap-sm">
              <ButtonLink href={whatsAppUrl(consultationMessage)}>
                <CalendarIcon className="h-md w-md" />
                Book free consultation
              </ButtonLink>
              <ButtonLink href="/programs" variant="glass">
                Explore programs
                <ArrowRightIcon className="h-md w-md transition-transform duration-200 group-hover/btn:translate-x-1" />
              </ButtonLink>
            </div>
          </div>

          {/* Image leads on mobile, follows the copy from desktop up. */}
          <div className="relative order-first desktop:order-0">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-2xl bg-primary/25 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-lift">
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
        </div>
      </div>
    </section>
  );
}
