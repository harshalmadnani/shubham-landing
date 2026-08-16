import { CheckIcon } from "@/components/CheckIcon";
import { ButtonLink } from "@/components/Button";
import { CalendarIcon } from "@/components/icons";
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

export function PricingTiers() {
  return (
    <section className="px-md py-section tablet:px-lg">
      <div className="mx-auto max-w-content">
        <h2 className="text-headline text-ink">Training pathways</h2>
        <p className="mt-md max-w-2xl text-body-lg text-ink-muted">
          Select the tier that matches your experience level and goals. Pricing is in GBP and includes applicable VAT. Sign in to your account to view current pricing and payment options.
        </p>

        <div className="mt-xxl grid gap-lg tablet:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col border rounded-none p-lg transition-colors ${
                tier.highlighted
                  ? "border-primary bg-surface-1"
                  : "border-hairline bg-canvas"
              }`}
            >
              <div className="flex-1">
                <h3 className="text-card-title text-ink">{tier.name}</h3>
                <p className="mt-md text-body text-ink-muted">{tier.description}</p>

                <div className="mt-lg space-y-sm">
                  {tier.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-md"
                    >
                      <CheckIcon className="h-md w-md shrink-0 text-primary" />
                      <span className="text-body text-ink">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <ButtonLink
                href={whatsAppUrl(consultationMessage)}
                className="mt-lg justify-center"
                variant={tier.highlighted ? "primary" : "outline"}
              >
                <CalendarIcon className="h-md w-md" />
                Get started
              </ButtonLink>
            </div>
          ))}
        </div>

        <div className="mt-xxl rounded-none border border-hairline bg-surface-1 p-lg tablet:p-xl">
          <h3 className="text-card-title text-ink">What&apos;s included in every pathway</h3>
          <div className="mt-lg grid gap-lg tablet:grid-cols-2">
            <div>
              <h4 className="text-body-emphasis text-ink">Training</h4>
              <ul className="mt-md space-y-sm">
                <li className="flex items-start gap-md">
                  <CheckIcon className="h-md w-md shrink-0 text-primary" />
                  <span className="text-body text-ink-muted">
                    {`Choice of regular or AI-focused programs`}
                  </span>
                </li>
                <li className="flex items-start gap-md">
                  <CheckIcon className="h-md w-md shrink-0 text-primary" />
                  <span className="text-body text-ink-muted">
                    Evening-scheduled online sessions
                  </span>
                </li>
                <li className="flex items-start gap-md">
                  <CheckIcon className="h-md w-md shrink-0 text-primary" />
                  <span className="text-body text-ink-muted">
                    Hands-on bootcamp component
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-body-emphasis text-ink">Placement Support</h4>
              <ul className="mt-md space-y-sm">
                <li className="flex items-start gap-md">
                  <CheckIcon className="h-md w-md shrink-0 text-primary" />
                  <span className="text-body text-ink-muted">
                    Resume marketing and review
                  </span>
                </li>
                <li className="flex items-start gap-md">
                  <CheckIcon className="h-md w-md shrink-0 text-primary" />
                  <span className="text-body text-ink-muted">
                    Interview preparation
                  </span>
                </li>
                <li className="flex items-start gap-md">
                  <CheckIcon className="h-md w-md shrink-0 text-primary" />
                  <span className="text-body text-ink-muted">
                    Sponsorship-focused role guidance
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
