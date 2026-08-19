import { ButtonLink } from "@/components/Button";
import { consultationMessage, ctaBanner, whatsAppUrl } from "@/content/site";

/**
 * The closing ask: a pine terminus with the destination set large.
 *
 * The oversized outline word behind it is the same terminus label the route
 * board ends on, so the page closes on the word it opened by promising.
 */
export function CtaBanner() {
  return (
    <section id="cta" className="mt-band">
      <div className="mx-auto max-w-page px-gutter tablet:px-rail">
        <div className="relative overflow-hidden border border-pine bg-pine px-lg py-xxxl tablet:px-xxl">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 bottom-[-3.5rem] select-none font-display text-[13rem] font-extrabold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1.5px_var(--color-pine-raised)] tablet:text-[20rem]"
          >
            Hired
          </span>

          <div className="relative max-w-[34ch]">
            <p className="flex items-center gap-sm font-mono text-label uppercase text-pine-ink-2">
              <span
                aria-hidden="true"
                className="h-[7px] w-[7px] rounded-full bg-signal"
              />
              Next departure
            </p>
            <h2 className="mt-lg text-display text-pine-ink">
              {ctaBanner.heading}
            </h2>
            <p className="mt-md text-lead text-pine-ink-2">{ctaBanner.body}</p>
            <ButtonLink
              href={whatsAppUrl(consultationMessage)}
              className="mt-xl"
            >
              Book a free consultation
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
