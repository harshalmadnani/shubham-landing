import { ButtonLink } from "@/components/Button";
import { consultationMessage, ctaBanner, whatsAppUrl } from "@/content/site";

/** The closing ask, given a full section of its own. */
export function CtaBanner() {
  return (
    <section id="cta-banner" className="bg-canvas">
      <div className="mx-auto w-full max-w-page px-6 pb-24 tablet:px-8 tablet:pb-32">
        <div className="relative overflow-hidden rounded-lg bg-night px-8 py-20 text-center tablet:px-16 tablet:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-accent/25 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-display text-chalk text-balance">
              {ctaBanner.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lead text-chalk-2">
              {ctaBanner.body}
            </p>
            <ButtonLink
              href={whatsAppUrl(consultationMessage)}
              variant="light"
              className="mt-10"
            >
              Book a free consultation
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
