import { ButtonLink } from "@/components/Button";
import { HeroScene } from "@/components/HeroScene";
import { RichTextContent } from "@/components/PendingData";
import { Ticker } from "@/components/Ticker";
import { ArrowRightIcon, CalendarIcon } from "@/components/icons";
import { proofPoints } from "@/content/sections";
import { consultationMessage, hero, whatsAppUrl } from "@/content/site";

/**
 * Splits a phrase into words that rise in one after another. Pure CSS — the
 * stagger is an animation-delay per word, so it needs no JS and honours
 * reduced motion through the global media rule.
 */
function StaggeredWords({
  text,
  startIndex = 0,
  className,
}: {
  text: string;
  startIndex?: number;
  className?: string;
}) {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className="inline-block overflow-visible whitespace-pre"
        >
          <span
            className={`inline-block animate-rise-word ${className ?? ""}`}
            style={{ animationDelay: `${(startIndex + index) * 90}ms` }}
          >
            {word}
            {" "}
          </span>
        </span>
      ))}
    </>
  );
}

export function Hero() {
  const headlineWordCount = hero.headline.split(" ").length;

  return (
    <section id="hero" className="px-md tablet:px-lg">
      <div className="mx-auto max-w-content">
        <div className="grid items-center gap-xxl pb-xxl pt-xxl tablet:pt-xxxl desktop:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="flex items-center gap-sm text-eyebrow uppercase text-ink-muted animate-fade-up">
              <span aria-hidden="true" className="h-px w-6 bg-ink/30" />
              {hero.eyebrow}
            </p>

            <h1 className="mt-lg font-serif text-display-xl-mobile tablet:text-display-xl-tablet desktop:text-display-xl text-ink">
              <StaggeredWords text={hero.headline} />
              <StaggeredWords
                text={hero.headlineAccent}
                startIndex={headlineWordCount}
                className="italic text-primary"
              />
            </h1>

            <p
              className="mt-xl max-w-2xl text-body-lg text-ink-muted animate-fade-up"
              style={{ animationDelay: "450ms" }}
            >
              {hero.body}
            </p>

            <div
              className="mt-xl flex flex-wrap gap-sm animate-fade-up"
              style={{ animationDelay: "560ms" }}
            >
              <ButtonLink href={whatsAppUrl(consultationMessage)}>
                <CalendarIcon className="h-md w-md" />
                Book free consultation
              </ButtonLink>
              <ButtonLink href="/programs" variant="outline">
                Explore programs
                <ArrowRightIcon className="h-md w-md transition-transform duration-200 group-hover/btn:translate-x-1" />
              </ButtonLink>
            </div>
          </div>

          <HeroScene />
        </div>

        {/* The proof, set as a quiet fact row rather than three shadowed cards. */}
        <dl className="grid grid-cols-1 gap-lg border-t border-hairline pt-lg tablet:grid-cols-3 tablet:gap-xl">
          {proofPoints.map((point, index) => (
            <div
              key={index}
              className="flex gap-sm text-body text-ink tablet:block animate-fade-up"
              style={{ animationDelay: `${640 + index * 90}ms` }}
            >
              <dt className="sr-only">Proof point {index + 1}</dt>
              <dd>
                <RichTextContent value={point} />
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <Ticker />
    </section>
  );
}
