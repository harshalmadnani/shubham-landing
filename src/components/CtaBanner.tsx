import { ButtonLink } from "@/components/Button";
import { CalendarIcon } from "@/components/icons";
import { consultationMessage, ctaBanner, whatsAppUrl } from "@/content/site";

export function CtaBanner() {
  return (
    <section id="cta-banner" className="pt-xxl">
      <div className="bg-primary px-md py-xxl tablet:px-lg">
        <div className="mx-auto max-w-content text-center">
          <h2 className="text-headline text-on-primary">{ctaBanner.heading}</h2>
          <p className="mt-md text-body-lg text-on-primary">{ctaBanner.body}</p>
          <ButtonLink
            href={whatsAppUrl(consultationMessage)}
            variant="ghost"
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
