import { ButtonLink } from "@/components/Button";
import { CalendarIcon } from "@/components/icons";
import { consultationMessage, ctaBanner, whatsAppUrl } from "@/content/site";

export function CtaBanner() {
  return (
    <section id="cta-banner" className="px-md pt-section tablet:px-lg">
      <div className="relative mx-auto max-w-content overflow-hidden rounded-2xl bg-brand-gradient px-lg py-xxxl text-center shadow-primary tablet:px-xxl">
        <div aria-hidden="true" className="absolute inset-0 bg-grid" />
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl"
        />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-headline text-on-primary">{ctaBanner.heading}</h2>
          <p className="mt-md text-body-lg text-on-primary/85">
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
