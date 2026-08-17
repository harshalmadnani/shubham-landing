import { ButtonLink } from "@/components/Button";
import { CalendarIcon } from "@/components/icons";
import { consultationMessage, ctaBanner, whatsAppUrl } from "@/content/site";

/** The closing ask: a flat ink band, a serif line, one paper button. */
export function CtaBanner() {
  return (
    <section id="cta-banner" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content rounded-lg bg-inverse-canvas px-lg py-xxxl text-center tablet:px-xxl">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-headline text-inverse-ink">
            {ctaBanner.heading}
          </h2>
          <p className="mt-md text-body-lg text-inverse-ink-muted">
            {ctaBanner.body}
          </p>
          <ButtonLink
            href={whatsAppUrl(consultationMessage)}
            variant="inverse"
            className="mt-xl"
          >
            <CalendarIcon className="h-md w-md" />
            Book free consultation
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
