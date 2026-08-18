import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProcessPage } from "@/components/ProcessPage";
import { ScrollToTop } from "@/components/ScrollToTop";
import { findProcess, processes } from "@/content/processes";
import { site } from "@/content/site";

export function generateStaticParams() {
  return processes.map((process) => ({ slug: process.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = findProcess(slug);
  if (!content) return {};

  return {
    title: `${content.navLabel} — how it works — ${site.name}`,
    description: `${content.headline} ${content.headlineAccent} ${content.lead}`,
  };
}

export default async function ProcessRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = findProcess(slug);
  if (!content) notFound();

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <ProcessPage content={content} />
        <CtaBanner />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
