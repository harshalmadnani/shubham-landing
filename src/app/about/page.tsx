import type { Metadata } from "next";

import { ButtonLink } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRightIcon } from "@/components/icons";
import { AboutIllustration } from "@/components/Illustrations";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { aboutFacts, aboutHero, principles, reach, whatWeDo } from "@/content/about";
import {
  consultationMessage,
  footerContacts,
  site,
  whatsAppUrl,
} from "@/content/site";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description:
    "AVIROwork Consultancy is an IT training and placement business working across the UK and Canada: live instruction, reviewed project work, and resume marketing that runs until you are hired.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <section className="relative overflow-hidden bg-night text-bone">
          <div
            aria-hidden="true"
            className="rule-grid-night pointer-events-none absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
          />

          <div className="relative mx-auto w-full max-w-page px-6 py-16 tablet:px-10 tablet:py-20">
            <p className="flex items-center gap-4 font-mono text-label uppercase text-bone-2">
              <span className="tnum text-flame-bright">00</span>
              {aboutHero.eyebrow}
            </p>

            <div className="mt-10 grid gap-x-10 gap-y-12 desktop:grid-cols-12">
              <div className="desktop:col-span-7">
                <h1 className="font-display text-display text-bone [text-wrap:balance]">
                  {aboutHero.headline}{" "}
                  <em className="text-flame-bright">
                    {aboutHero.headlineAccent}
                  </em>
                </h1>

                <p className="mt-8 max-w-2xl text-lead text-bone-2">
                  {aboutHero.body}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <ButtonLink
                    href={whatsAppUrl(consultationMessage)}
                    variant="onNight"
                  >
                    Book free consultation
                  </ButtonLink>
                  <ButtonLink href="/how-it-works" variant="onNight">
                    See how the programme runs
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </ButtonLink>
                </div>
              </div>

              <div className="desktop:col-span-4 desktop:col-start-9">
                <AboutIllustration className="w-full text-bone" />
              </div>
            </div>

            <dl className="mt-16 grid border-t border-night-rule tablet:grid-cols-3">
              {aboutFacts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={`border-b border-night-rule py-6 tablet:border-b-0 ${
                    index > 0 ? "tablet:border-l tablet:pl-6" : "tablet:pr-6"
                  }`}
                >
                  <dt className="font-display text-display-sm tnum text-bone">
                    {fact.value}
                  </dt>
                  <dd className="mt-1 font-mono text-meta uppercase text-bone-2">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* What the business actually does. */}
        <Section index="01" label="What we do">
          <SectionHead
            title={
              <>
                Four things, <em>in this order</em>
              </>
            }
            lead="Take one of them or all four — but this is the sequence, and the last one is the reason the first three matter."
          />

          <div className="mt-16 grid overflow-hidden border-l border-t border-rule-2 tablet:grid-cols-2">
            {whatWeDo.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 2) * 60}
                className="-mb-px -mr-px border-b border-r border-rule-2"
              >
                <div className="flex h-full flex-col p-7 tablet:p-9">
                  <span className="font-mono text-index tnum text-flame-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-title text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-body text-ink-2">
                    <RichTextContent value={item.body} />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* How the business chooses to behave. */}
        <Section index="02" label="How we work" tone="paper-2">
          <SectionHead
            title={
              <>
                What we <em>hold ourselves to</em>
              </>
            }
            lead="Four commitments that shape what you see on this site — including the things we have deliberately left off it."
          />

          <ol className="mt-16 border-t border-ink">
            {principles.map((principle, index) => (
              <Reveal key={principle.title}>
                <li className="grid gap-x-10 gap-y-3 border-b border-rule py-8 desktop:grid-cols-12">
                  <div className="flex items-baseline gap-4 desktop:col-span-5">
                    <span className="font-mono text-index tnum text-flame-ink">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-subtitle text-ink">{principle.title}</p>
                  </div>
                  <p className="text-body text-ink-2 desktop:col-span-6 desktop:col-start-7">
                    <RichTextContent value={principle.body} />
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* Where we operate, and how to reach a person. */}
        <Section index="03" label="Reach" tone="night">
          <div className="grid gap-x-10 gap-y-10 desktop:grid-cols-12">
            <div className="desktop:col-span-7">
              <h2 className="font-display text-title text-bone">
                {reach.title}
              </h2>
              <p className="mt-5 text-lead text-bone-2">{reach.body}</p>
            </div>

            <div className="desktop:col-span-4 desktop:col-start-9">
              <p className="border-b border-night-rule pb-3 font-mono text-label uppercase text-bone-2">
                Get in touch
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {footerContacts.map((contact) => (
                  <li key={contact.label} className="text-small">
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="link-sweep text-bone hover:text-flame-bright"
                      >
                        {contact.label}
                      </a>
                    ) : (
                      <span className="text-bone-2">{contact.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
