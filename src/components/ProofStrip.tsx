import { RichTextContent } from "@/components/PendingData";
import { proofPoints } from "@/content/sections";

export function ProofStrip() {
  return (
    <section id="proof-strip" className="px-md pt-section tablet:px-lg">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-lg tablet:grid-cols-3">
        {proofPoints.map((point, index) => (
          <div
            key={index}
            className="rounded-none bg-surface-1 p-xl text-card-title text-ink"
          >
            <RichTextContent value={point} />
          </div>
        ))}
      </div>
    </section>
  );
}
