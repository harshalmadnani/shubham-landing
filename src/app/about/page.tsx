import type { Metadata } from "next";

import { ButtonLink } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ArrowRightIcon } from "@/components/icons";
import { AboutIllustration } from "@/components/Illustrations";
import { PageHero } from "@/components/PageHero";
import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHead } from "@/components/Section";
import { aboutFacts, aboutHero, principles, reach, whatWeDo } from "@/content/about";
import { bookingPath } from "@/content/booking";
import { footerContacts, site } from "@/content/site";

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
        <PageHero
          tone="night"
          label={aboutHero.eyebrow}
          title={
            <>
              {aboutHero.headline}{" "}
              <em className="text-accent-bright">{aboutHero.headlineAccent}</em>
            </>
          }
          lead={aboutHero.body}
          actions={
            <>
              <ButtonLink
                href={bookingPath}
                variant="light"
              >
                Book a free consultation
              </ButtonLink>
              <ButtonLink href="/how-it-works" variant="onNight">
                See how the programme runs
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </ButtonLink>
            </>
          }
        />

        <Section tone="surface">
          <div className="grid items-center gap-12 desktop:grid-cols-12">
            <dl className="grid gap-10 tablet:grid-cols-3 desktop:col-span-7">
              {aboutFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-display text-ink">{fact.value}</dt>
                  <dd className="mt-3 text-small text-ink-2">{fact.label}</dd>
                </div>
              ))}
            </dl>

            <div className="desktop:col-span-4 desktop:col-start-9">
              <AboutIllustration className="w-full text-ink-3" />
            </div>
          </div>
        </Section>

        {/* What the business actually does. */}
        <Section label="What we do">
          <SectionHead
            title={
              <>
                Four things, <em>in this order</em>
              </>
            }
            lead="Take one of them or all four — but this is the sequence, and the last one is the reason the first three matter."
          />

          <div className="mt-16 grid gap-4 tablet:grid-cols-2 desktop:gap-6">
            {whatWeDo.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 60}>
                <div className="flex h-full flex-col rounded-lg bg-surface p-8 tablet:p-10">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas text-micro text-ink-2">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-title">{item.title}</h3>
                  <p className="mt-3 text-body text-ink-2">
                    <RichTextContent value={item.body} />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* How the business chooses to behave. */}
        <Section label="How we work" tone="surface">
          <SectionHead
            title={
              <>
                What we <em>hold ourselves to</em>
              </>
            }
            lead="Four commitments that shape what you see on this site — including the things we have deliberately left off it."
          />

          <ol className="mt-16 grid gap-12 tablet:grid-cols-2 desktop:gap-x-16">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={(index % 2) * 60}>
                <li>
                  <h3 className="text-heading">{principle.title}</h3>
                  <p className="mt-3 text-body text-ink-2">
                    <RichTextContent value={principle.body} />
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* Where we operate, and how to reach a person. */}
        <Section label="Reach" tone="night">
          <div className="grid gap-12 desktop:grid-cols-12">
            <div className="desktop:col-span-7">
              <h2 className="text-title text-chalk">{reach.title}</h2>
              <p className="mt-6 text-lead text-chalk-2">{reach.body}</p>
            </div>

            <div className="desktop:col-span-4 desktop:col-start-9">
              <p className="text-micro text-chalk-2">Get in touch</p>
              <ul className="mt-5 flex flex-col gap-3">
                {footerContacts.map((contact) => (
                  <li key={contact.label} className="text-small">
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="link-sweep -my-1.5 inline-block py-1.5 text-chalk hover:text-accent-bright"
                      >
                        {contact.label}
                      </a>
                    ) : (
                      <span className="text-chalk-2">{contact.label}</span>
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
