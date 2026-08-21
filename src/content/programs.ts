import type { ProgramCategory } from "./types";

/**
 * The full program catalogue, grouped by specialization.
 *
 * Category counts and the section total are derived from this array rather than
 * stored alongside it, so adding a program cannot leave a stale number behind.
 */
export const programCategories: readonly ProgramCategory[] = [
  {
    name: "Web Development",
    programs: [
      {
        title: "Python Full Stack Developer",
        description: "Structured, project-based training in Python-based full-stack development — front-end frameworks through to backend APIs, databases, and cloud deployment.",
        meta: "50 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/python-full-stack-developer"
      },
      {
        title: "Java Full Stack Developer",
        description: "Structured, project-based training in Java-based full-stack development — front-end frameworks through to backend APIs, databases, and cloud deployment.",
        meta: "50 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/java-full-stack-developer"
      },
      {
        title: ".NET Full Stack Developer",
        description: "Structured, project-based training in the Microsoft stack — C# and ASP.NET Core on the server, a modern JavaScript framework on the client, and Azure for deployment.",
        meta: "50 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/dotnet-full-stack-developer"
      },
    ]
  },
  {
    name: "Data & Analytics",
    programs: [
      {
        title: "Data Science & AI",
        description: "Structured training in Python, SQL, applied statistics, and practical machine learning, with a portfolio of real projects by the end of the program.",
        meta: "50 hours · Some technical background helpful · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/data-science-and-machine-learning"
      },
      {
        title: "Data Analyst",
        description: "Structured training in querying, cleaning, and visualizing data to answer real business questions — a practical entry point into data work.",
        meta: "50 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/data-analyst"
      },
      {
        title: "Data Scientist",
        description: "Structured training in statistical modeling, machine learning, and data pipelines — for learners aiming at the modeling-heavy end of data work rather than analysis alone.",
        meta: "50 hours · Some technical background helpful · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/data-scientist"
      },
    ]
  },
  {
    name: "AI Careers",
    programs: [
      {
        title: "AI Product Manager",
        description: "Structured training in scoping and shipping AI-powered products — bridging technical teams and business goals without needing to build the models yourself.",
        meta: "50 hours · Some professional background helpful · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/ai-product-manager"
      },
      {
        title: "AI Consultant",
        description: "Structured training in advising organizations on where and how AI actually fits their operations — grounded in practical implementation, not hype.",
        meta: "70 hours · Some professional background helpful · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/ai-consultant"
      },
      {
        title: "AWS AI Cloud Engineer",
        brand: {
          label: "AWS",
          viewBox: "0 0 24 24",
          paths: [
            "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z",
          ]
        },
        description: "Structured training in building and deploying AI/ML solutions on AWS — from model foundations through MLOps and production monitoring.",
        meta: "50 hours · Some technical background helpful · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/aws-ai-cloud-engineer"
      },
      {
        title: "Azure AI Cloud Engineer",
        brand: {
          label: "Microsoft Azure",
          viewBox: "0 0 24 24",
          paths: [
            "M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76a1.722 1.722 0 0 0-.007-.02h6.034a.54.54 0 0 1 .512.366l6.562 19.445a.54.54 0 0 1-.338.684",
          ]
        },
        description: "Structured training in building and deploying AI/ML solutions on Microsoft Azure — from model foundations through MLOps and production monitoring.",
        meta: "50 hours · Some technical background helpful · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/azure-ai-cloud-engineer"
      },
      {
        title: "Google AI Cloud Engineer",
        brand: {
          label: "Google Cloud",
          viewBox: "0 0 24 24",
          paths: [
            "M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z",
          ]
        },
        description: "Structured training in building and deploying AI/ML solutions on Google Cloud — from model foundations through MLOps and production monitoring.",
        meta: "50 hours · Some technical background helpful · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/google-ai-cloud-engineer"
      },
      {
        title: "Gen AI Engineer",
        description: "Structured training in building applications on large language models — prompt design, fine-tuning, and deploying generative AI features into production.",
        meta: "50 hours · Some technical background helpful · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/gen-ai-engineer"
      },
      {
        title: "AI Engineer",
        description: "Structured, foundational training across the AI/ML lifecycle — model foundations, deep learning, ethics, and deployment — for learners building toward a general AI engineering role.",
        meta: "50 hours · Some technical background helpful · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/ai-engineer"
      },
      {
        title: "AI/ML Engineer",
        description: "Structured training in building, training, and evaluating machine learning models — from foundations through deep learning architectures to production deployment.",
        meta: "50 hours · Some technical background helpful · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/ai-ml-engineer"
      },
      {
        title: "Machine Learning Engineer",
        description: "Structured training focused on the engineering side of machine learning — building reliable training pipelines and deployment infrastructure around working models.",
        meta: "50 hours · Some technical background helpful · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/machine-learning-engineer"
      },
      {
        title: "Agentic AI Engineer",
        description: "Structured training in building autonomous, multi-step AI agents — orchestrating tools, memory, and decision-making on top of large language models.",
        meta: "50 hours · Some technical background helpful · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/agentic-ai-engineer"
      },
      {
        title: "AI Prompt Engineer",
        description: "Structured training in designing, testing, and refining prompts that reliably get large language models to do what you need — a practical, low-code entry point into AI work.",
        meta: "50 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/ai-prompt-engineer"
      },
      {
        title: "AI DevOps Engineer",
        description: "Structured training in the automation and infrastructure practices specific to shipping AI systems — containerizing models, CI/CD for ML, and continuous monitoring in production.",
        meta: "50 hours · Some technical background helpful · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/ai-devops-engineer"
      },
      {
        title: "AI Business Analyst",
        description: "Structured training in applying AI and data analysis to real business decisions — bridging traditional business analysis with the AI tools increasingly built into that work.",
        meta: "50 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/ai-business-analyst"
      },
      {
        title: "AI Data Analyst",
        description: "Structured training in using AI-assisted tools and machine learning fundamentals to extract insight from data — an AI-forward track for analyst-minded learners.",
        meta: "50 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/ai-data-analyst"
      },
      {
        title: "AI Quality Analyst",
        description: "Structured training in testing and validating AI systems — model auditing, bias checks, and quality processes specific to AI, not just traditional QA.",
        meta: "50 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/ai-quality-analyst"
      },
    ]
  },
  {
    name: "Cloud",
    programs: [
      {
        title: "Google Cloud Engineer",
        brand: {
          label: "Google Cloud",
          viewBox: "0 0 24 24",
          paths: [
            "M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z",
          ]
        },
        description: "Structured training across the core Google Cloud services — compute, storage, networking, and identity — through to automation and monitoring, aligned to Google Cloud certification paths.",
        meta: "50 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/google-cloud-engineer"
      },
      {
        title: "AWS Cloud Engineer",
        brand: {
          label: "AWS",
          viewBox: "0 0 24 24",
          paths: [
            "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z",
          ]
        },
        description: "Structured training across the core AWS services — compute, storage, networking, and identity — through to automation and monitoring, aligned to AWS certification paths.",
        meta: "70 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/aws-cloud-engineer"
      },
      {
        title: "Azure Cloud Engineer",
        brand: {
          label: "Microsoft Azure",
          viewBox: "0 0 24 24",
          paths: [
            "M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76a1.722 1.722 0 0 0-.007-.02h6.034a.54.54 0 0 1 .512.366l6.562 19.445a.54.54 0 0 1-.338.684",
          ]
        },
        description: "Structured training across the core Microsoft Azure services — compute, storage, networking, and identity — through to automation and monitoring, aligned to Azure certification paths.",
        meta: "70 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/azure-cloud-engineer"
      },
      {
        title: "Azure Data Engineering",
        brand: {
          label: "Microsoft Azure",
          viewBox: "0 0 24 24",
          paths: [
            "M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76a1.722 1.722 0 0 0-.007-.02h6.034a.54.54 0 0 1 .512.366l6.562 19.445a.54.54 0 0 1-.338.684",
          ]
        },
        description: "Specialized, hands-on training in building data pipelines on Microsoft Azure, for learners ready to go deeper than cloud fundamentals.",
        meta: "50 hours · Cloud fundamentals recommended first · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/azure-data-engineering"
      },
      {
        title: "AWS Data Engineering",
        brand: {
          label: "AWS",
          viewBox: "0 0 24 24",
          paths: [
            "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z",
          ]
        },
        description: "Specialized, hands-on training in building data pipelines on Amazon Web Services, for learners ready to go deeper than cloud fundamentals.",
        meta: "50 hours · Cloud fundamentals recommended first · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/aws-data-engineering"
      },
      {
        title: "Google Data Engineering",
        brand: {
          label: "Google Cloud",
          viewBox: "0 0 24 24",
          paths: [
            "M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z",
          ]
        },
        description: "Specialized, hands-on training in building data pipelines on Google Cloud, for learners ready to go deeper than cloud fundamentals.",
        meta: "50 hours · Cloud fundamentals recommended first · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/google-data-engineering"
      },
    ]
  },
  {
    name: "Cybersecurity",
    programs: [
      {
        title: "Cyber Security Analyst",
        description: "Structured training in identifying, monitoring, and responding to real security threats — the day-to-day work of a security analyst, not just theory.",
        meta: "50 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/cyber-security-analyst"
      },
      {
        title: "Cybersecurity Engineering",
        description: "Structured training in designing and securing systems end-to-end — network defense, offensive testing, and cloud security — for learners aiming at a hands-on engineering role rather than analyst work alone.",
        meta: "50 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/cybersecurity-engineering"
      },
    ]
  },
  {
    name: "DevOps",
    programs: [
      {
        title: "DevOps Engineer",
        description: "Structured training in the pipelines, automation, and infrastructure practices that connect development and operations.",
        meta: "50 hours · Some technical background helpful · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/devops-engineer"
      },
    ]
  },
  {
    name: "Analyst Roles",
    programs: [
      {
        title: "IT Analyst",
        description: "Structured training in translating business needs into technical requirements — the connective role between IT teams and the people who rely on them.",
        meta: "50 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/it-analyst"
      },
      {
        title: "Business Analyst",
        description: "Structured training in analyzing processes and data to support real business decisions, without requiring a technical background to start.",
        meta: "50 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/business-analyst"
      },
      {
        title: "Quality Analyst",
        description: "Structured training in software testing and QA automation — building the test suites and defect workflows that catch problems before your users do.",
        meta: "50 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/quality-analyst"
      },
    ]
  },
  {
    name: "IT Support",
    programs: [
      {
        title: "IT Support Analyst",
        description: "Structured training in diagnosing hardware, network, and systems issues, and delivering the day-to-day technical support that keeps a business running.",
        meta: "60 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/it-support-analyst"
      },
      {
        title: "Microsoft 365 IT Support",
        description: "Structured training in supporting and administering Microsoft 365 environments — identity, email, file sharing, and end-user troubleshooting.",
        meta: "50 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/microsoft-365-it-support"
      },
    ]
  },
  {
    name: "Enterprise Platforms",
    programs: [
      {
        title: "Salesforce Administrator & Developer",
        description: "Structured training across both Salesforce tracks — configuring and administering an org, then extending it with Apex, Lightning components and integrations.",
        meta: "50 hours · Beginner-friendly · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/salesforce-administrator-developer"
      },
      {
        title: "SAP Consultant",
        description: "Structured training across the functional, technical and Basis sides of SAP S/4HANA — the platform that runs finance, supply chain and operations at enterprise scale.",
        meta: "50 hours · Some professional background helpful · Certificate on completion",
        ctaLabel: "View full curriculum",
        href: "/programs/sap-consultant"
      },
    ]
  },
];

export const totalProgramCount = programCategories.reduce(
  (total, category) => total + category.programs.length,
  0,
);

