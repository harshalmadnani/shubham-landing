/**
 * A slow editorial ticker of the technologies taught, running between two
 * hairlines. Real curriculum content doing decorative duty — the list is what
 * the programs actually cover, not set dressing.
 *
 * The track renders the list twice and slides -50%, so the loop is seamless.
 * `prefers-reduced-motion` freezes it via the global media rule, leaving a
 * static, still-legible strip.
 */
const SUBJECTS = [
  "Java & Spring Boot",
  "Python",
  "AWS",
  "React",
  "Azure",
  "Kubernetes",
  "SQL",
  "Google Cloud",
  "Terraform",
  "Power BI",
  "Selenium",
  "LangChain",
  "Salesforce",
  "SAP S/4HANA",
  "Docker",
  "PyTorch",
] as const;

export function Ticker() {
  return (
    <div
      aria-hidden="true"
      className="mt-xl overflow-hidden border-y border-hairline py-md"
    >
      <div className="flex w-max animate-marquee gap-xl hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-xl">
            {SUBJECTS.map((subject, index) => (
              <li
                key={subject}
                className={`flex items-center gap-xl whitespace-nowrap ${
                  index % 2 === 0
                    ? "font-serif italic text-headline-sm text-ink"
                    : "text-body-lg text-ink-muted"
                }`}
              >
                {subject}
                <span aria-hidden="true" className="text-primary">
                  ✳
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
