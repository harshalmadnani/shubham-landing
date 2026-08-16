import { struggles } from "@/content/sections";

export function Struggles() {
  return (
    <section id="why-job-seekers-struggle" className="pt-section">
      <div className="bg-surface-1 px-md py-section tablet:px-lg">
        <div className="mx-auto max-w-content">
          <h2 className="text-headline text-ink">Why Job Seekers Struggle</h2>
          <p className="mt-sm max-w-2xl text-body-lg text-ink-muted">
            Most candidates aren&apos;t short on effort — they&apos;re missing a
            few consistent factors.
          </p>

          <div className="mt-xl grid grid-cols-1 gap-x-xxl border-t border-hairline tablet:grid-cols-2">
            {struggles.map((struggle, index) => (
              <div
                key={struggle.title}
                className="flex gap-lg border-b border-hairline py-lg"
              >
                <span className="w-xxl shrink-0 border-r border-hairline pr-md text-body-emphasis text-ink-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="max-w-2xl">
                  <p className="text-body-emphasis text-ink">
                    {struggle.title}
                  </p>
                  <p className="mt-xxs text-body-sm text-ink-muted">
                    {struggle.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
