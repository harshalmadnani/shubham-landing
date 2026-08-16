import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { struggles } from "@/content/sections";

export function Struggles() {
  return (
    <section id="why-job-seekers-struggle" className="px-md pt-section tablet:px-lg">
      <div className="relative mx-auto max-w-content overflow-hidden rounded-2xl bg-inverse-canvas px-lg py-xxxl tablet:px-xxl">
        <div aria-hidden="true" className="absolute inset-0 bg-grid" />
        <div
          aria-hidden="true"
          className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
        />

        <div className="relative">
          <SectionHeading
            eyebrow="The gap"
            title="Why job seekers struggle"
            lead="Most candidates aren't short on effort — they're missing a few consistent factors."
            tone="dark"
          />

          <div className="mt-xxl grid grid-cols-1 gap-md tablet:grid-cols-2 desktop:grid-cols-3">
            {struggles.map((struggle, index) => (
              <Reveal key={struggle.title} delay={index * 70}>
                <div className="group h-full rounded-xl border border-inverse-hairline bg-inverse-surface-1/60 p-lg transition-colors duration-300 hover:border-primary/50 hover:bg-inverse-surface-1">
                  <span
                    aria-hidden="true"
                    className="text-display-md text-gradient"
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
      </div>
    </section>
  );
}
