import { ButtonLink } from "@/components/Button";
import { CheckIcon } from "@/components/CheckIcon";
import { CalendarIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { consultationMessage, whatsAppUrl } from "@/content/site";

interface PricingTier {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Foundations",
    description:
      "Perfect for beginners starting their IT career with core skills and structured mentoring.",
    features: [
      "Instructor-led training sessions",
      "Evening and weekend availability",
      "Online delivery across UK and Europe",
      "Hands-on bootcamp experience",
      "Resume review and optimization",
      "Interview preparation support",
      "3 months placement support",
    ],
  },
  {
    name: "Professional",
    description:
      "Designed for career changers and professionals building new technical expertise with comprehensive support.",
    features: [
      "All Foundations features",
      "Advanced technical modules",
      "One-on-one mentoring sessions",
      "In-person meetups in London",
      "AI tools and emerging tech training",
      "Extended job search coaching",
      "6 months placement support",
      "Employer introductions",
    ],
    highlighted: true,
  },
  {
    name: "Accelerated",
    description:
      "For experienced IT professionals looking to specialize or transition to senior roles with dedicated support.",
    features: [
      "All Professional features",
      "Custom curriculum design",
      "Intensive bootcamp option",
      "Flexible scheduling",
      "Senior role preparation",
      "Visa sponsorship guidance",
      "9 months placement support",
      "Priority employer matching",
    ],
  },
];

const everyPathway = [
  {
    heading: "Training",
    items: [
      "Choice of regular or AI-focused programs",
      "Evening-scheduled online sessions",
      "Hands-on bootcamp component",
    ],
  },
  {
    heading: "Placement support",
    items: [
      "Resume marketing and review",
      "Interview preparation",
      "Sponsorship-focused role guidance",
    ],
  },
];

export function PricingTiers() {
  return (
    <section className="px-md pt-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <SectionHeading
          eyebrow="Training pathways"
          title="Pick the tier that matches where you are"
          lead="Pricing is in GBP and includes applicable VAT. Book a consultation to see current pricing and payment options."
          align="center"
        />

        {/* No `items-start`: the columns stretch so the three CTAs line up
            even though the feature lists differ in length. */}
        <div className="mt-xxl grid gap-lg tablet:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 90}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-xl transition-[box-shadow,transform] duration-300 hover:-translate-y-1 ${
                  tier.highlighted
                    ? "bg-inverse-canvas text-inverse-ink shadow-lift"
                    : "border border-hairline bg-canvas shadow-card hover:shadow-lift"
                }`}
              >
                {tier.highlighted && (
                  <>
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-2xl bg-mesh opacity-70"
                    />
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-md py-xxs text-caption uppercase text-on-primary shadow-primary">
                      Most popular
                    </span>
                  </>
                )}

                <div className="relative flex flex-1 flex-col">
                  <h3
                    className={`text-card-title ${
                      tier.highlighted ? "text-inverse-ink" : "text-ink"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`mt-sm text-body-sm ${
                      tier.highlighted
                        ? "text-inverse-ink-muted"
                        : "text-ink-muted"
                    }`}
                  >
                    {tier.description}
                  </p>

                  <ul className="mt-lg flex flex-1 flex-col gap-sm">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-sm">
                        <CheckIcon
                          className={`mt-1 h-md w-md shrink-0 ${
                            tier.highlighted ? "text-accent" : "text-primary"
                          }`}
                        />
                        <span
                          className={`text-body-sm ${
                            tier.highlighted ? "text-inverse-ink" : "text-ink"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <ButtonLink
                    href={whatsAppUrl(consultationMessage)}
                    variant={tier.highlighted ? "primary" : "outline"}
                    className="mt-xl w-full"
                  >
                    <CalendarIcon className="h-md w-md" />
                    Get started
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-xxl rounded-2xl border border-hairline bg-surface-1 p-xl shadow-card tablet:p-xxl">
            <h3 className="text-headline-sm text-ink">
              Included in every pathway
            </h3>
            <div className="mt-xl grid gap-xl tablet:grid-cols-2">
              {everyPathway.map((group) => (
                <div key={group.heading}>
                  <p className="text-eyebrow uppercase text-primary">
                    {group.heading}
                  </p>
                  <ul className="mt-md flex flex-col gap-sm">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-sm">
                        <CheckIcon className="mt-1 h-md w-md shrink-0 text-primary" />
                        <span className="text-body text-ink-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
