import { RichTextContent } from "@/components/PendingData";
import { Reveal } from "@/components/Reveal";
import { proofPoints } from "@/content/sections";

export function ProofStrip() {
  return (
    <section id="proof-strip" className="px-md pt-xl tablet:px-lg">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-md tablet:grid-cols-3">
        {proofPoints.map((point, index) => (
          <Reveal key={index} delay={index * 90}>
            <div className="group relative h-full overflow-hidden rounded-xl border border-hairline bg-canvas p-xl shadow-card transition-shadow duration-300 hover:shadow-lift">
              {/* Gradient rule that fills in on hover. */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 w-0 bg-brand-gradient transition-[width] duration-500 group-hover:w-full"
              />
              <p className="text-card-title text-ink">
                <RichTextContent value={point} />
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
