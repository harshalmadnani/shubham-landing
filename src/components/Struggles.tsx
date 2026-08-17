import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { struggles } from "@/content/sections";

/**
 * The one dark band on the landing page — flat ink, no texture layers. Items
 * sit under hairlines rather than inside boxes; the serif numeral does the
 * anchoring a border used to.
 */
export function Struggles() {
  return (
    <section
      id="why-job-seekers-struggle"
      className="mt-section bg-inverse-canvas px-md py-section tablet:px-lg"
    >
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="The gap"
          title="Why job seekers struggle"
          lead="Most candidates aren't short on effort — they're missing a few consistent factors."
          tone="dark"
        />

        <div className="mt-xxl grid grid-cols-1 gap-x-xxl gap-y-xl tablet:grid-cols-2 desktop:grid-cols-3">
          {struggles.map((struggle, index) => (
            <Reveal key={struggle.title} delay={index * 60}>
              <div className="border-t border-inverse-hairline pt-lg">
                <span
                  aria-hidden="true"
                  className="font-serif text-headline-sm text-inverse-ink-muted"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-sm text-card-title text-inverse-ink">
                  {struggle.title}
                </p>
                <p className="mt-xs text-body-sm text-inverse-ink-muted">
                  {struggle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
