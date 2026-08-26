/**
 * UK market benchmarks shown on programme cards.
 *
 * WHAT THESE ARE. Median advertised salary and the number of permanent
 * vacancies for the closest matching job title in the UK, taken from IT Jobs
 * Watch, which derives both from job adverts posted over a rolling six-month
 * window. They describe the market a graduate is entering. They are NOT our
 * outcomes: nobody who finishes a programme here is promised, or has been
 * measured at, any of these figures.
 *
 * That distinction is the reason this file exists rather than the numbers
 * being typed into a component. Market data is publishable — with a source and
 * a date, which `marketDataSource` carries and the page prints. Outcome data
 * is not, until it has been measured. Competitors in this market routinely
 * print an "average time to get a job" beside these; that is a claim about the
 * result of a paid service, and with no placements behind it there is no
 * average to state. There is deliberately no field for it here.
 *
 * KEEPING IT HONEST. These are a snapshot, and a snapshot goes stale. The
 * source line on the page states the window end date, so a visitor can always
 * see how old the figures are. Refresh them from the URLs below and move
 * `retrieved` forward; do not leave a 2026 figure sitting unlabelled in 2028.
 *
 * A programme maps to the closest *title* the source publishes, not to a
 * flattering one. Where a title is genuinely niche the low vacancy count is
 * shown as it stands — Test/QA roles and SAP are small markets in the UK, and
 * a candidate is better served knowing that before they enrol than after.
 */

export type MarketBenchmark = {
  /** The job title the figures were taken from, shown to the reader. */
  readonly role: string;
  /** Median advertised annual salary, GBP. */
  readonly medianSalary: number;
  /** Permanent vacancies advertised in the source's six-month window. */
  readonly vacancies: number;
  /** The exact page the figures came from, so they can be re-checked. */
  readonly url: string;
};

export const marketDataSource = {
  name: "IT Jobs Watch",
  url: "https://www.itjobswatch.co.uk/",
  /** End of the six-month window the figures cover. */
  windowEnding: "25 August 2026",
  region: "United Kingdom",
} as const;

const BENCHMARKS = {
  fullStack: {
    role: "Full Stack Developer",
    medianSalary: 60000,
    vacancies: 1054,
    url: "https://www.itjobswatch.co.uk/jobs/uk/full%20stack%20developer.do",
  },
  dataAnalyst: {
    role: "Data Analyst",
    medianSalary: 47937,
    vacancies: 1512,
    url: "https://www.itjobswatch.co.uk/jobs/uk/data%20analyst.do",
  },
  dataScientist: {
    role: "Data Scientist",
    medianSalary: 75000,
    vacancies: 585,
    url: "https://www.itjobswatch.co.uk/jobs/uk/data%20scientist.do",
  },
  dataEngineer: {
    role: "Data Engineer",
    medianSalary: 70000,
    vacancies: 1971,
    url: "https://www.itjobswatch.co.uk/jobs/uk/data%20engineer.do",
  },
  cloudEngineer: {
    role: "Cloud Engineer",
    medianSalary: 70000,
    vacancies: 1276,
    url: "https://www.itjobswatch.co.uk/jobs/uk/cloud%20engineer.do",
  },
  devops: {
    role: "DevOps Engineer",
    medianSalary: 70000,
    vacancies: 1270,
    url: "https://www.itjobswatch.co.uk/jobs/uk/devops%20engineer.do",
  },
  // The aggregate "AI" title rather than "Machine Learning Engineer", which is
  // a much narrower listing (75 vacancies) and would understate a market these
  // fifteen programmes all sit inside.
  ai: {
    role: "AI roles",
    medianSalary: 72500,
    vacancies: 9384,
    url: "https://www.itjobswatch.co.uk/jobs/uk/artificial%20intelligence.do",
  },
  qa: {
    role: "QA Engineer",
    medianSalary: 45000,
    vacancies: 332,
    url: "https://www.itjobswatch.co.uk/jobs/uk/qa%20engineer.do",
  },
  businessAnalyst: {
    role: "Business Analyst",
    medianSalary: 55000,
    vacancies: 1590,
    url: "https://www.itjobswatch.co.uk/jobs/uk/business%20analyst.do",
  },
  itAnalyst: {
    role: "IT Analyst",
    medianSalary: 35000,
    vacancies: 888,
    url: "https://www.itjobswatch.co.uk/jobs/uk/it%20analyst.do",
  },
  salesforce: {
    role: "Salesforce",
    medianSalary: 62500,
    vacancies: 1432,
    url: "https://www.itjobswatch.co.uk/jobs/uk/salesforce.do",
  },
  sap: {
    role: "SAP Consultant",
    medianSalary: 80000,
    vacancies: 226,
    url: "https://www.itjobswatch.co.uk/jobs/uk/sap%20consultant.do",
  },
  security: {
    role: "Security Analyst",
    medianSalary: 55000,
    vacancies: 1083,
    url: "https://www.itjobswatch.co.uk/jobs/uk/security%20analyst.do",
  },
  itSupport: {
    role: "IT Support",
    medianSalary: 31750,
    vacancies: 2773,
    url: "https://www.itjobswatch.co.uk/jobs/uk/it%20support.do",
  },
} as const satisfies Record<string, MarketBenchmark>;

/** Every programme slug, mapped to the job title its figures come from. */
const BY_SLUG: Record<string, MarketBenchmark> = {
  // Development
  "python-full-stack-developer": BENCHMARKS.fullStack,
  "java-full-stack-developer": BENCHMARKS.fullStack,
  "dotnet-full-stack-developer": BENCHMARKS.fullStack,

  // Data
  "data-science-and-machine-learning": BENCHMARKS.dataScientist,
  "data-analyst": BENCHMARKS.dataAnalyst,
  "data-scientist": BENCHMARKS.dataScientist,
  "azure-data-engineering": BENCHMARKS.dataEngineer,
  "aws-data-engineering": BENCHMARKS.dataEngineer,
  "google-data-engineering": BENCHMARKS.dataEngineer,

  // Cloud & DevOps
  "google-cloud-engineer": BENCHMARKS.cloudEngineer,
  "aws-cloud-engineer": BENCHMARKS.cloudEngineer,
  "azure-cloud-engineer": BENCHMARKS.cloudEngineer,
  "devops-engineer": BENCHMARKS.devops,

  // AI — all fifteen against the aggregate AI listing.
  "ai-product-manager": BENCHMARKS.ai,
  "ai-consultant": BENCHMARKS.ai,
  "aws-ai-cloud-engineer": BENCHMARKS.ai,
  "azure-ai-cloud-engineer": BENCHMARKS.ai,
  "google-ai-cloud-engineer": BENCHMARKS.ai,
  "gen-ai-engineer": BENCHMARKS.ai,
  "ai-engineer": BENCHMARKS.ai,
  "ai-ml-engineer": BENCHMARKS.ai,
  "machine-learning-engineer": BENCHMARKS.ai,
  "agentic-ai-engineer": BENCHMARKS.ai,
  "ai-prompt-engineer": BENCHMARKS.ai,
  "ai-devops-engineer": BENCHMARKS.ai,
  "ai-business-analyst": BENCHMARKS.ai,
  "ai-data-analyst": BENCHMARKS.ai,
  "ai-quality-analyst": BENCHMARKS.ai,

  // Cybersecurity
  "cyber-security-analyst": BENCHMARKS.security,
  "cybersecurity-engineering": BENCHMARKS.security,

  // Business
  "it-analyst": BENCHMARKS.itAnalyst,
  "business-analyst": BENCHMARKS.businessAnalyst,
  "salesforce-administrator-developer": BENCHMARKS.salesforce,
  "sap-consultant": BENCHMARKS.sap,

  // QA
  "quality-analyst": BENCHMARKS.qa,

  // IT Support
  "it-support-analyst": BENCHMARKS.itSupport,
  "microsoft-365-it-support": BENCHMARKS.itSupport,
};

/** Every benchmark once, highest paid first — for the salary table in the blog. */
export const allBenchmarks: readonly MarketBenchmark[] = Object.values(BENCHMARKS)
  .slice()
  .sort((a, b) => b.medianSalary - a.medianSalary);

export function benchmarkForSlug(slug: string): MarketBenchmark | undefined {
  return BY_SLUG[slug];
}

/** "£47,937" — whole pounds, since a median to the penny implies false precision. */
export function formatSalary(amount: number): string {
  return `£${Math.round(amount).toLocaleString("en-GB")}`;
}

export function formatVacancies(count: number): string {
  return count.toLocaleString("en-GB");
}
