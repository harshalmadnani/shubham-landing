import { ButtonLink } from "@/components/Button";
import { consultationMessage, ctaBanner, whatsAppUrl } from "@/content/site";

/**
 * The closing ask.
 *
 * A full-bleed ink band with the ruled grid showing through it — the same
 * measure as the cover, closing the document the way it opened.
 */
export function CtaBanner() {
  return (
    <section
      id="cta-banner"
      className="relative overflow-hidden border-t border-rule bg-night text-bone"
    >
      <div
        aria-hidden="true"
        className="rule-grid-night pointer-events-none absolute inset-0 opacity-80"
      />

      <div className="relative mx-auto w-full max-w-page px-6 py-24 tablet:px-10 tablet:py-32">
        <div className="grid gap-10 desktop:grid-cols-12">
          <h2 className="font-display text-display text-bone desktop:col-span-7">
            {ctaBanner.heading}
          </h2>

          <div className="desktop:col-span-4 desktop:col-start-9">
            <p className="text-lead text-bone-2">{ctaBanner.body}</p>
            <ButtonLink
              href={whatsAppUrl(consultationMessage)}
              variant="onNight"
              className="mt-8"
            >
              Book free consultation
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
