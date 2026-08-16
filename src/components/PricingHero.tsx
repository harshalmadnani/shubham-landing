import { ButtonLink } from "@/components/Button";
import { CalendarIcon } from "@/components/icons";
import { consultationMessage, whatsAppUrl } from "@/content/site";

export function PricingHero() {
  return (
    <section id="pricing" className="px-md pt-lg tablet:px-lg tablet:pt-xxl">
      <div className="mx-auto max-w-content">
        <div className="rounded-none bg-canvas py-lg tablet:p-xxl">
          <p className="text-eyebrow text-ink-muted">Simple, transparent pricing</p>
          <h1 className="mt-md text-display-xl-mobile tablet:text-display-xl-tablet desktop:text-display-xl text-ink">
            Invest in your IT career
          </h1>
          <p className="mt-lg max-w-2xl text-body-lg text-ink-muted">
            Every Shubham pathway is a complete route from training to placement. Choose from flexible learning options, get hands-on bootcamp experience, and receive ongoing placement support with resume marketing and interview preparation.
          </p>
          <div className="mt-xl">
            <ButtonLink href={whatsAppUrl(consultationMessage)}>
              <CalendarIcon className="h-md w-md" />
              Book free consultation
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
