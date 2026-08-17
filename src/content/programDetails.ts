import type { ProgramDetail } from "./types";

/**
 * Curriculum pages, keyed by the slug in the URL.
 *
 * Module and topic counts shown on the page are counted from `modules` rather
 * than stored, so the summary line can never drift from the curriculum below it.
 *
 * Each programme has its own curriculum. That is worth stating because it was
 * not always true: these were previously generated from a handful of templates,
 * so twelve different AI programmes shipped identical module lists, as did the
 * data, cloud and support tracks. Topics name the actual frameworks and
 * services a module covers — a candidate comparing us with another provider is
 * reading for exactly that.
 *
 * Two invariants, neither enforced at build time: a programme's module hours
 * must sum to its `hours`, and its `hours` must match the `meta` line on its
 * catalogue card in `programs.ts`.
 */
export const programDetails: readonly ProgramDetail[] = [
  {
    slug: "python-full-stack-developer",
    category: "Web Development",
    title: "Python Full Stack Developer",
    description: "Structured, project-based training in Python-based full-stack development — front-end frameworks through to backend APIs, databases, and cloud deployment.",
    hours: 50,
    modules: [
      {
        title: "Frontend with React",
        hours: 12,
        summary: "Build the interface a Django or Flask backend serves",
        topics: [
          "HTML5 semantics & CSS3 layout",
          "JavaScript ES6+ and TypeScript",
          "React components, props & hooks",
          "State with Context and Redux Toolkit",
          "Responsive design & Tailwind",
          "Vite build tooling & npm workflows",
        ]
      },
      {
        title: "Core Python & Django REST",
        hours: 15,
        summary: "Write the server-side application and its APIs",
        topics: [
          "Python data model & OOP",
          "Django ORM models & migrations",
          "Django REST Framework serializers",
          "Flask & FastAPI for lighter services",
          "JWT authentication & permissions",
          "Celery for background tasks",
        ]
      },
      {
        title: "Databases & Data Access",
        hours: 8,
        summary: "Persist and query application data",
        topics: [
          "PostgreSQL schema design",
          "Advanced SQL & indexing",
          "Redis caching",
          "MongoDB with PyMongo",
          "Query profiling with Django Debug Toolbar",
          "pytest for unit & integration tests",
        ]
      },
      {
        title: "Deployment & DevOps",
        hours: 15,
        summary: "Ship the application and keep it running",
        topics: [
          "Docker & docker-compose",
          "Gunicorn behind Nginx",
          "GitHub Actions CI/CD",
          "Deploying to AWS Elastic Beanstalk",
          "Sentry error tracking & logging",
          "Load testing & horizontal scaling",
        ]
      },
    ]
  },
  {
    slug: "java-full-stack-developer",
    category: "Web Development",
    title: "Java Full Stack Developer",
    description: "Structured, project-based training in Java-based full-stack development — front-end frameworks through to backend APIs, databases, and cloud deployment.",
    hours: 50,
    modules: [
      {
        title: "Frontend with Angular",
        hours: 12,
        summary: "Build the interface a Spring Boot backend serves",
        topics: [
          "HTML5 semantics & CSS3 layout",
          "TypeScript fundamentals",
          "Angular components & services",
          "RxJS observables & HTTP client",
          "Reactive forms & validation",
          "Angular CLI build & bundling",
        ]
      },
      {
        title: "Core Java & Spring Boot",
        hours: 15,
        summary: "Master the Java ecosystem employers actually hire for",
        topics: [
          "Java OOP, generics & collections",
          "Streams API & functional Java",
          "Spring Core & dependency injection",
          "Spring Boot auto-configuration",
          "Spring MVC & REST controllers",
          "Spring Security with JWT",
        ]
      },
      {
        title: "Persistence & Microservices",
        hours: 8,
        summary: "Store data and split a monolith apart",
        topics: [
          "MySQL & PostgreSQL design",
          "Spring Data JPA & Hibernate",
          "Transactions & entity relationships",
          "Microservice boundaries",
          "Spring Cloud service discovery",
          "API gateway & inter-service calls",
        ]
      },
      {
        title: "Build, Test & Deploy",
        hours: 15,
        summary: "Take the application from local to production",
        topics: [
          "Maven & Gradle builds",
          "JUnit 5 & Mockito",
          "Docker containerization",
          "Jenkins CI/CD pipelines",
          "Kubernetes deployments",
          "AWS EC2, S3 & RDS",
        ]
      },
    ]
  },
  {
    slug: "data-science-and-machine-learning",
    category: "Data & Analytics",
    title: "Data Science & AI",
    description: "Structured training in Python, SQL, applied statistics, and practical machine learning, with a portfolio of real projects by the end of the program.",
    hours: 50,
    modules: [
      {
        title: "Python & Statistical Foundations",
        hours: 12,
        summary: "Build the numerical and statistical base the rest depends on",
        topics: [
          "Python for analysis: NumPy & pandas",
          "Descriptive statistics & distributions",
          "Probability & Bayes",
          "Hypothesis testing & p-values",
          "Confidence intervals & effect size",
          "Exploratory data analysis workflow",
        ]
      },
      {
        title: "Supervised & Unsupervised Learning",
        hours: 15,
        summary: "Train, tune and evaluate classical models",
        topics: [
          "Linear & logistic regression",
          "Decision trees & random forests",
          "Gradient boosting: XGBoost & LightGBM",
          "K-means & hierarchical clustering",
          "PCA & dimensionality reduction",
          "Cross-validation & hyperparameter search",
        ]
      },
      {
        title: "Deep Learning Essentials",
        hours: 8,
        summary: "Move beyond tabular data",
        topics: [
          "Neural network architecture & backpropagation",
          "TensorFlow & PyTorch basics",
          "CNNs for image data",
          "RNNs & transformers for sequences",
          "Transfer learning",
          "Regularisation & overfitting control",
        ]
      },
      {
        title: "Production & MLOps",
        hours: 15,
        summary: "Get a model out of the notebook",
        topics: [
          "Feature engineering pipelines with scikit-learn",
          "MLflow experiment tracking",
          "Model serving with FastAPI",
          "Docker packaging",
          "Drift detection & retraining triggers",
          "A capstone model deployed end to end",
        ]
      },
    ]
  },
  {
    slug: "data-analyst",
    category: "Data & Analytics",
    title: "Data Analyst",
    description: "Structured training in querying, cleaning, and visualizing data to answer real business questions — a practical entry point into data work.",
    hours: 50,
    modules: [
      {
        title: "SQL for Analysis",
        hours: 13,
        summary: "Get the data out, correctly, without help",
        topics: [
          "SELECT, JOIN & set operations",
          "Aggregation & GROUP BY",
          "Window functions & running totals",
          "CTEs and subquery refactoring",
          "Query plans & indexing basics",
          "Writing reproducible analysis queries",
        ]
      },
      {
        title: "Excel & Data Preparation",
        hours: 10,
        summary: "The cleaning work that fills most of the job",
        topics: [
          "Advanced formulas & LOOKUP functions",
          "PivotTables & PivotCharts",
          "Power Query transformations",
          "Handling missing & duplicate records",
          "Data validation & audit trails",
          "Documenting a cleaning process",
        ]
      },
      {
        title: "Power BI & Tableau",
        hours: 15,
        summary: "Turn findings into something a stakeholder reads",
        topics: [
          "Data modelling & relationships",
          "DAX measures & calculated columns",
          "Tableau worksheets & dashboards",
          "Chart selection & visual hierarchy",
          "Interactive filters & drill-through",
          "Scheduled refresh & publishing",
        ]
      },
      {
        title: "Analysis in Practice",
        hours: 12,
        summary: "Answer business questions, not technical ones",
        topics: [
          "Translating a request into a metric",
          "Cohort & funnel analysis",
          "Descriptive statistics for reporting",
          "Python with pandas for larger sets",
          "Presenting findings to non-technical audiences",
          "A capstone analysis with recommendations",
        ]
      },
    ]
  },
  {
    slug: "data-scientist",
    category: "Data & Analytics",
    title: "Data Scientist",
    description: "Structured training in statistical modeling, machine learning, and data pipelines — for learners aiming at the modeling-heavy end of data work rather than analysis alone.",
    hours: 50,
    modules: [
      {
        title: "Statistics & Experimental Design",
        hours: 12,
        summary: "The inference half of the role",
        topics: [
          "Probability distributions & sampling",
          "Statistical inference & estimation",
          "A/B test design & power analysis",
          "Causal inference fundamentals",
          "Bayesian reasoning",
          "Common statistical pitfalls",
        ]
      },
      {
        title: "Machine Learning at Depth",
        hours: 16,
        summary: "Model selection and the reasoning behind it",
        topics: [
          "Regression & regularisation: Ridge, Lasso",
          "Ensemble methods & boosting",
          "Model evaluation beyond accuracy",
          "Imbalanced data strategies",
          "Feature selection & engineering",
          "Interpretability with SHAP",
        ]
      },
      {
        title: "Big Data & Pipelines",
        hours: 10,
        summary: "Work at sizes that break a laptop",
        topics: [
          "Apache Spark & PySpark DataFrames",
          "Distributed processing concepts",
          "Airflow DAGs & orchestration",
          "Data warehouse modelling",
          "Delta Lake & columnar formats",
          "Pipeline testing & data quality",
        ]
      },
      {
        title: "Deployment & MLOps",
        hours: 12,
        summary: "Own the model after it ships",
        topics: [
          "MLflow tracking & model registry",
          "Containerised model serving",
          "CI/CD for machine learning",
          "Monitoring drift & performance decay",
          "Cost & latency trade-offs",
          "A capstone project in production shape",
        ]
      },
    ]
  },
  {
    slug: "ai-product-manager",
    category: "AI Careers",
    title: "AI Product Manager",
    description: "Structured training in scoping and shipping AI-powered products — bridging technical teams and business goals without needing to build the models yourself.",
    hours: 50,
    modules: [
      {
        title: "What AI Can and Cannot Do",
        hours: 12,
        summary: "Enough technical grounding to make good calls",
        topics: [
          "Model families & their trade-offs",
          "Where ML fits a product and where it does not",
          "Reading model evaluation metrics",
          "Data requirements & labelling cost",
          "Latency, cost & quality triangle",
          "Talking credibly with ML engineers",
        ]
      },
      {
        title: "Discovery & Scoping",
        hours: 13,
        summary: "Choose the right problem before building",
        topics: [
          "Opportunity sizing for AI features",
          "Writing an AI product requirements doc",
          "Success metrics & offline/online evaluation",
          "Human-in-the-loop design",
          "Failure modes & graceful degradation",
          "Build, buy or fine-tune decisions",
        ]
      },
      {
        title: "Delivery & Iteration",
        hours: 13,
        summary: "Ship it and improve it",
        topics: [
          "Roadmapping under model uncertainty",
          "Prompt & model versioning as product surface",
          "A/B testing AI features",
          "Feedback loops & data flywheels",
          "Managing stakeholder expectations",
          "Pricing & packaging AI capability",
        ]
      },
      {
        title: "Risk, Ethics & Governance",
        hours: 12,
        summary: "The part that stops a launch being reversed",
        topics: [
          "Bias & fairness assessment",
          "Privacy & data residency",
          "EU AI Act & emerging regulation",
          "Model cards & documentation",
          "Incident response for AI failures",
          "A capstone product case & pitch",
        ]
      },
    ]
  },
  {
    slug: "ai-consultant",
    category: "AI Careers",
    title: "AI Consultant",
    description: "Structured training in advising organizations on where and how AI actually fits their operations — grounded in practical implementation, not hype.",
    hours: 70,
    modules: [
      {
        title: "AI Fluency for Advisory Work",
        hours: 17,
        summary: "Know the technology well enough to be trusted on it",
        topics: [
          "Machine learning & deep learning landscape",
          "LLMs, RAG & fine-tuning compared",
          "Evaluating vendor claims",
          "Data readiness assessment",
          "Cost modelling for AI workloads",
          "Reference architectures by use case",
        ]
      },
      {
        title: "Opportunity Assessment",
        hours: 18,
        summary: "Find where AI actually pays for itself",
        topics: [
          "Process mapping & automation candidates",
          "ROI and business case construction",
          "Prioritisation frameworks",
          "Build vs buy vs partner analysis",
          "Proof-of-concept scoping",
          "Stakeholder interviews & discovery workshops",
        ]
      },
      {
        title: "Implementation & Change",
        hours: 18,
        summary: "Advice that survives contact with an organisation",
        topics: [
          "Target operating model design",
          "Data governance foundations",
          "Integration with existing systems",
          "Pilot to production roadmaps",
          "Upskilling & adoption planning",
          "Measuring realised benefit",
        ]
      },
      {
        title: "Governance, Risk & Delivery",
        hours: 17,
        summary: "Keep a programme defensible",
        topics: [
          "AI policy & responsible use frameworks",
          "Regulatory landscape: EU AI Act, GDPR",
          "Model risk & third-party assurance",
          "Client reporting & steering committees",
          "Consulting communication & deck craft",
          "A capstone client engagement",
        ]
      },
    ]
  },
  {
    slug: "aws-ai-cloud-engineer",
    category: "AI Careers",
    title: "AWS AI Cloud Engineer",
    description: "Structured training in building and deploying AI/ML solutions on AWS — from model foundations through MLOps and production monitoring.",
    hours: 50,
    modules: [
      {
        title: "AWS Foundations for AI Workloads",
        hours: 12,
        summary: "The platform underneath the models",
        topics: [
          "IAM roles & least privilege for ML",
          "S3 data lakes & lifecycle policies",
          "VPC design for private inference",
          "EC2 GPU instances & Spot strategy",
          "Cost monitoring & budgets",
          "CloudWatch logging",
        ]
      },
      {
        title: "Amazon Bedrock & Generative AI",
        hours: 15,
        summary: "Build on managed foundation models",
        topics: [
          "Bedrock model selection & invocation",
          "Knowledge Bases for RAG",
          "Vector search with OpenSearch Serverless",
          "Guardrails for content filtering",
          "Bedrock Agents & tool use",
          "Prompt management & versioning",
        ]
      },
      {
        title: "SageMaker & Custom Models",
        hours: 8,
        summary: "When a managed model is not enough",
        topics: [
          "SageMaker Studio & notebooks",
          "Training jobs & hyperparameter tuning",
          "Model registry & endpoints",
          "Real-time vs batch inference",
          "SageMaker Pipelines",
          "Feature Store",
        ]
      },
      {
        title: "AI Services & Production",
        hours: 15,
        summary: "The rest of the AWS AI surface, in production shape",
        topics: [
          "Comprehend for NLP",
          "Textract for document extraction",
          "Rekognition for vision",
          "Transcribe & Polly for speech",
          "CI/CD for ML with CodePipeline",
          "Monitoring, drift & a capstone deployment",
        ]
      },
    ]
  },
  {
    slug: "azure-ai-cloud-engineer",
    category: "AI Careers",
    title: "Azure AI Cloud Engineer",
    description: "Structured training in building and deploying AI/ML solutions on Microsoft Azure — from model foundations through MLOps and production monitoring.",
    hours: 50,
    modules: [
      {
        title: "Azure Foundations for AI Workloads",
        hours: 12,
        summary: "The platform underneath the models",
        topics: [
          "Entra ID & managed identities",
          "Blob Storage & Data Lake Gen2",
          "Virtual networks & private endpoints",
          "GPU compute & quota management",
          "Cost Management & budgets",
          "Azure Monitor & Log Analytics",
        ]
      },
      {
        title: "Azure OpenAI & Generative AI",
        hours: 15,
        summary: "Build on managed foundation models",
        topics: [
          "Azure OpenAI deployments & quotas",
          "Retrieval-augmented generation patterns",
          "Azure AI Search vector indexes",
          "Content filtering & responsible AI",
          "Prompt flow & orchestration",
          "Token cost & throughput planning",
        ]
      },
      {
        title: "Azure Machine Learning",
        hours: 8,
        summary: "When a managed model is not enough",
        topics: [
          "AML workspaces & compute targets",
          "Training jobs & AutoML",
          "Model registry & versioning",
          "Managed online endpoints",
          "AML pipelines",
          "Responsible AI dashboard",
        ]
      },
      {
        title: "AI Services & Production",
        hours: 15,
        summary: "The rest of the Azure AI surface, in production shape",
        topics: [
          "Language service for NLP",
          "Document Intelligence for extraction",
          "Computer Vision & Custom Vision",
          "Speech to text & text to speech",
          "CI/CD with Azure DevOps",
          "Monitoring, drift & a capstone deployment",
        ]
      },
    ]
  },
  {
    slug: "google-ai-cloud-engineer",
    category: "AI Careers",
    title: "Google AI Cloud Engineer",
    description: "Structured training in building and deploying AI/ML solutions on Google Cloud — from model foundations through MLOps and production monitoring.",
    hours: 50,
    modules: [
      {
        title: "Google Cloud Foundations for AI",
        hours: 12,
        summary: "The platform underneath the models",
        topics: [
          "IAM & service accounts",
          "Cloud Storage & BigQuery as sources",
          "VPC Service Controls",
          "GPU & TPU compute options",
          "Billing, quotas & cost controls",
          "Cloud Logging & Monitoring",
        ]
      },
      {
        title: "Vertex AI & Gemini",
        hours: 15,
        summary: "Build on managed foundation models",
        topics: [
          "Vertex AI Studio & Gemini models",
          "Grounding & RAG on Vertex",
          "Vector Search indexes",
          "Safety filters & responsible AI",
          "Vertex AI Agent Builder",
          "Prompt design & evaluation",
        ]
      },
      {
        title: "Custom Training on Vertex",
        hours: 8,
        summary: "When a managed model is not enough",
        topics: [
          "Vertex AI Workbench",
          "Custom training jobs & AutoML",
          "Model Registry & versioning",
          "Online & batch prediction",
          "Vertex AI Pipelines",
          "Feature Store",
        ]
      },
      {
        title: "AI APIs & Production",
        hours: 15,
        summary: "The rest of the Google AI surface, in production shape",
        topics: [
          "Natural Language API",
          "Document AI for extraction",
          "Vision AI & Video Intelligence",
          "Speech-to-Text & Text-to-Speech",
          "CI/CD with Cloud Build",
          "Monitoring, drift & a capstone deployment",
        ]
      },
    ]
  },
  {
    slug: "gen-ai-engineer",
    category: "AI Careers",
    title: "Gen AI Engineer",
    description: "Structured training in building applications on large language models — prompt design, fine-tuning, and deploying generative AI features into production.",
    hours: 50,
    modules: [
      {
        title: "Transformers & LLM Internals",
        hours: 12,
        summary: "Understand the machine you are building on",
        topics: [
          "Attention & transformer architecture",
          "Tokenisation & context windows",
          "Sampling: temperature, top-p, top-k",
          "Embeddings & vector similarity",
          "Open vs hosted model trade-offs",
          "Benchmarking & evaluation harnesses",
        ]
      },
      {
        title: "Retrieval-Augmented Generation",
        hours: 15,
        summary: "The dominant production pattern",
        topics: [
          "Chunking & document preprocessing",
          "Embedding models & vector stores",
          "Pinecone, Weaviate & pgvector",
          "Hybrid & re-ranked retrieval",
          "LangChain & LlamaIndex pipelines",
          "Measuring groundedness & citation quality",
        ]
      },
      {
        title: "Fine-tuning & Adaptation",
        hours: 8,
        summary: "Change the model, not just the prompt",
        topics: [
          "When to fine-tune rather than retrieve",
          "Instruction tuning datasets",
          "LoRA & QLoRA parameter-efficient tuning",
          "Quantisation & inference cost",
          "Evaluation before and after tuning",
          "Guarding against catastrophic forgetting",
        ]
      },
      {
        title: "Production LLM Systems",
        hours: 15,
        summary: "Ship it safely and affordably",
        topics: [
          "Serving with vLLM & TGI",
          "Streaming responses & caching",
          "Prompt injection & output validation",
          "Cost, latency & rate-limit engineering",
          "Observability & tracing with LangSmith",
          "A capstone RAG application in production",
        ]
      },
    ]
  },
  {
    slug: "ai-engineer",
    category: "AI Careers",
    title: "AI Engineer",
    description: "Structured, foundational training across the AI/ML lifecycle — model foundations, deep learning, ethics, and deployment — for learners building toward a general AI engineering role.",
    hours: 50,
    modules: [
      {
        title: "Python & ML Foundations",
        hours: 12,
        summary: "The engineering base for AI work",
        topics: [
          "Python packaging & typing",
          "NumPy, pandas & data structures",
          "scikit-learn estimators & pipelines",
          "Supervised & unsupervised methods",
          "Evaluation metrics & validation",
          "Reproducible experiment setup",
        ]
      },
      {
        title: "Deep Learning with PyTorch",
        hours: 15,
        summary: "Build and train real networks",
        topics: [
          "Tensors, autograd & training loops",
          "CNNs for vision tasks",
          "Transformers for text",
          "Transfer learning & fine-tuning",
          "GPU training & mixed precision",
          "Debugging convergence problems",
        ]
      },
      {
        title: "LLM Application Engineering",
        hours: 8,
        summary: "Wire models into software",
        topics: [
          "Prompt design & structured outputs",
          "Function calling & tool use",
          "RAG with a vector database",
          "Streaming & async API patterns",
          "Evaluation of generated output",
          "Guardrails & input validation",
        ]
      },
      {
        title: "Deployment & MLOps",
        hours: 15,
        summary: "Run it in production",
        topics: [
          "FastAPI model services",
          "Docker & Kubernetes deployment",
          "MLflow tracking & registries",
          "CI/CD for model releases",
          "Monitoring, drift & rollback",
          "A capstone AI service end to end",
        ]
      },
    ]
  },
  {
    slug: "ai-ml-engineer",
    category: "AI Careers",
    title: "AI/ML Engineer",
    description: "Structured training in building, training, and evaluating machine learning models — from foundations through deep learning architectures to production deployment.",
    hours: 50,
    modules: [
      {
        title: "Software Engineering for ML",
        hours: 12,
        summary: "The half data scientists usually lack",
        topics: [
          "Clean code & testing for ML projects",
          "Git workflows & code review",
          "Typing, linting & pre-commit hooks",
          "Packaging & dependency management",
          "Configuration & secrets handling",
          "Reproducibility & seeding",
        ]
      },
      {
        title: "Modelling & Training at Scale",
        hours: 15,
        summary: "Train models bigger than one machine",
        topics: [
          "scikit-learn to PyTorch progression",
          "Distributed & multi-GPU training",
          "Mixed precision & gradient accumulation",
          "Hyperparameter search with Optuna",
          "Experiment tracking with Weights & Biases",
          "Model compression & distillation",
        ]
      },
      {
        title: "Data & Feature Platforms",
        hours: 8,
        summary: "The pipelines models actually depend on",
        topics: [
          "Batch & streaming feature pipelines",
          "Feature stores & point-in-time correctness",
          "Data versioning with DVC",
          "Schema validation & contracts",
          "Airflow orchestration",
          "Backfills & reprocessing",
        ]
      },
      {
        title: "Serving & Reliability",
        hours: 15,
        summary: "Own it once it is live",
        topics: [
          "Model servers: TorchServe, Triton",
          "Autoscaling & GPU utilisation",
          "Canary & shadow deployments",
          "Latency budgets & batching",
          "Drift detection & automated retraining",
          "A capstone platform deployment",
        ]
      },
    ]
  },
  {
    slug: "machine-learning-engineer",
    category: "AI Careers",
    title: "Machine Learning Engineer",
    description: "Structured training focused on the engineering side of machine learning — building reliable training pipelines and deployment infrastructure around working models.",
    hours: 50,
    modules: [
      {
        title: "ML Fundamentals in Practice",
        hours: 12,
        summary: "Classical methods, applied properly",
        topics: [
          "Regression & classification workflows",
          "Tree ensembles & boosting",
          "Clustering & anomaly detection",
          "Cross-validation strategy",
          "Metric choice for the business problem",
          "Leakage & bias detection",
        ]
      },
      {
        title: "Feature Engineering & Pipelines",
        hours: 12,
        summary: "Where most model quality actually comes from",
        topics: [
          "Categorical & temporal encodings",
          "Scaling, binning & interactions",
          "Text & embedding features",
          "scikit-learn Pipeline & ColumnTransformer",
          "Handling imbalance & missingness",
          "Feature importance & selection",
        ]
      },
      {
        title: "Deep Learning & Transfer",
        hours: 12,
        summary: "Reach for networks when they earn their cost",
        topics: [
          "Neural network fundamentals",
          "PyTorch training loops",
          "CNNs & pretrained vision backbones",
          "Sequence models & transformers",
          "Fine-tuning strategies",
          "Regularisation & early stopping",
        ]
      },
      {
        title: "MLOps & Production",
        hours: 14,
        summary: "The engineering that makes models durable",
        topics: [
          "MLflow tracking & model registry",
          "Containerised inference services",
          "CI/CD for retraining pipelines",
          "Monitoring drift & data quality",
          "Rollback & shadow testing",
          "A capstone model in production",
        ]
      },
    ]
  },
  {
    slug: "agentic-ai-engineer",
    category: "AI Careers",
    title: "Agentic AI Engineer",
    description: "Structured training in building autonomous, multi-step AI agents — orchestrating tools, memory, and decision-making on top of large language models.",
    hours: 50,
    modules: [
      {
        title: "Agent Foundations",
        hours: 12,
        summary: "What separates an agent from a chatbot",
        topics: [
          "Reasoning & planning patterns",
          "ReAct, reflection & chain-of-thought",
          "Tool use & function calling",
          "Memory: short-term & persistent",
          "Agent vs workflow decision",
          "Failure modes of autonomy",
        ]
      },
      {
        title: "Building Agents",
        hours: 15,
        summary: "Frameworks and the patterns underneath them",
        topics: [
          "LangGraph state machines",
          "CrewAI & multi-agent roles",
          "Model Context Protocol & tool servers",
          "Structured output & schema enforcement",
          "Retrieval as an agent tool",
          "Human approval checkpoints",
        ]
      },
      {
        title: "Multi-Agent & Orchestration",
        hours: 8,
        summary: "Coordinate more than one",
        topics: [
          "Supervisor & delegation topologies",
          "Message passing & shared state",
          "Parallel execution & fan-out",
          "Cost control across agent calls",
          "Deadlock, loop & runaway prevention",
          "Tracing multi-step executions",
        ]
      },
      {
        title: "Evaluation, Safety & Production",
        hours: 15,
        summary: "Make autonomy trustworthy",
        topics: [
          "Evaluating agent trajectories, not just outputs",
          "Prompt injection & tool sandboxing",
          "Permissions & least-privilege tool design",
          "Observability with LangSmith & OpenTelemetry",
          "Latency & cost budgeting",
          "A capstone autonomous agent",
        ]
      },
    ]
  },
  {
    slug: "ai-prompt-engineer",
    category: "AI Careers",
    title: "AI Prompt Engineer",
    description: "Structured training in designing, testing, and refining prompts that reliably get large language models to do what you need — a practical, low-code entry point into AI work.",
    hours: 50,
    modules: [
      {
        title: "Prompting Fundamentals",
        hours: 12,
        summary: "Reliable output from a stochastic system",
        topics: [
          "How tokenisation shapes behaviour",
          "Zero-shot, few-shot & chain-of-thought",
          "Role, context & instruction structure",
          "Sampling parameters & determinism",
          "Structured output & JSON schemas",
          "Common prompt failure patterns",
        ]
      },
      {
        title: "Advanced Techniques",
        hours: 13,
        summary: "Beyond single-shot prompts",
        topics: [
          "Decomposition & prompt chaining",
          "Self-consistency & reflection",
          "Tool use & function calling",
          "System prompt design for products",
          "Prompt templating & variable injection",
          "Model-specific behaviour differences",
        ]
      },
      {
        title: "Retrieval & Context Engineering",
        hours: 12,
        summary: "Give the model the right information",
        topics: [
          "Chunking & embedding strategy",
          "Vector stores & similarity search",
          "LangChain & LlamaIndex pipelines",
          "Context window budgeting",
          "Grounding & citation enforcement",
          "Reducing hallucination measurably",
        ]
      },
      {
        title: "Evaluation & Operations",
        hours: 13,
        summary: "Treat prompts as production assets",
        topics: [
          "Building evaluation datasets",
          "LLM-as-judge & rubric scoring",
          "Regression testing prompt changes",
          "Version control & prompt registries",
          "Prompt injection & jailbreak defence",
          "A capstone prompt system with evals",
        ]
      },
    ]
  },
  {
    slug: "ai-devops-engineer",
    category: "AI Careers",
    title: "AI DevOps Engineer",
    description: "Structured training in the automation and infrastructure practices specific to shipping AI systems — containerizing models, CI/CD for ML, and continuous monitoring in production.",
    hours: 50,
    modules: [
      {
        title: "DevOps Foundations",
        hours: 12,
        summary: "The delivery engineering underneath MLOps",
        topics: [
          "Git branching & trunk-based development",
          "CI/CD with GitHub Actions & GitLab",
          "Docker images & registries",
          "Kubernetes workloads & Helm",
          "Terraform infrastructure as code",
          "Secrets management & least privilege",
        ]
      },
      {
        title: "ML Pipelines & Automation",
        hours: 15,
        summary: "Automate the model lifecycle",
        topics: [
          "Training pipeline orchestration",
          "Kubeflow Pipelines & Airflow",
          "Data & model versioning with DVC",
          "MLflow registry & stage promotion",
          "Automated retraining triggers",
          "Reproducible environments",
        ]
      },
      {
        title: "Serving & Scaling",
        hours: 8,
        summary: "Run inference reliably",
        topics: [
          "Model servers: Triton, KServe, vLLM",
          "GPU scheduling & node pools",
          "Autoscaling & request batching",
          "Canary & blue-green model releases",
          "Cost optimisation for GPU workloads",
          "Load testing inference endpoints",
        ]
      },
      {
        title: "Observability & Governance",
        hours: 15,
        summary: "Know when a model breaks",
        topics: [
          "Prometheus & Grafana for ML metrics",
          "Drift & data quality monitoring",
          "Distributed tracing for AI services",
          "Alerting & incident runbooks",
          "Audit trails & model lineage",
          "A capstone MLOps platform",
        ]
      },
    ]
  },
  {
    slug: "ai-business-analyst",
    category: "AI Careers",
    title: "AI Business Analyst",
    description: "Structured training in applying AI and data analysis to real business decisions — bridging traditional business analysis with the AI tools increasingly built into that work.",
    hours: 50,
    modules: [
      {
        title: "Business Analysis Core",
        hours: 12,
        summary: "The analyst craft, unchanged by AI",
        topics: [
          "Stakeholder analysis & elicitation",
          "Process modelling with BPMN",
          "User stories & acceptance criteria",
          "Gap analysis & solution assessment",
          "Agile ceremonies & backlog management",
          "Documentation & traceability",
        ]
      },
      {
        title: "Data Literacy for Analysts",
        hours: 13,
        summary: "Work with data without a data team",
        topics: [
          "SQL for requirements validation",
          "Excel & Power Query preparation",
          "Power BI dashboards & DAX basics",
          "Descriptive statistics for reporting",
          "Data quality assessment",
          "Defining metrics unambiguously",
        ]
      },
      {
        title: "AI-Aware Requirements",
        hours: 12,
        summary: "Specify systems that learn",
        topics: [
          "Identifying AI-suitable problems",
          "Writing requirements under uncertainty",
          "Data readiness & labelling needs",
          "Acceptance criteria for probabilistic output",
          "Human-in-the-loop process design",
          "Prompt & LLM feature specification",
        ]
      },
      {
        title: "Delivery, Risk & Governance",
        hours: 13,
        summary: "Get it built and keep it defensible",
        topics: [
          "Feasibility & ROI cases",
          "UAT for AI features",
          "Bias, fairness & explainability checks",
          "GDPR & EU AI Act obligations",
          "Change management & adoption",
          "A capstone requirements package",
        ]
      },
    ]
  },
  {
    slug: "ai-data-analyst",
    category: "AI Careers",
    title: "AI Data Analyst",
    description: "Structured training in using AI-assisted tools and machine learning fundamentals to extract insight from data — an AI-forward track for analyst-minded learners.",
    hours: 50,
    modules: [
      {
        title: "Analysis Foundations",
        hours: 12,
        summary: "The classical analyst toolkit",
        topics: [
          "SQL joins, aggregation & window functions",
          "pandas for cleaning & reshaping",
          "Descriptive statistics & distributions",
          "Power BI & Tableau dashboards",
          "Metric definition & documentation",
          "Reproducible analysis workflow",
        ]
      },
      {
        title: "Predictive Analytics",
        hours: 13,
        summary: "Move from what happened to what will",
        topics: [
          "Regression & classification with scikit-learn",
          "Time series forecasting",
          "Segmentation & clustering",
          "Feature engineering for tabular data",
          "Model evaluation for business use",
          "Communicating uncertainty honestly",
        ]
      },
      {
        title: "LLMs in the Analyst Workflow",
        hours: 12,
        summary: "Use generative tools without losing rigour",
        topics: [
          "Natural-language querying over warehouses",
          "Text classification & sentiment at scale",
          "Summarising qualitative feedback",
          "Embeddings for thematic clustering",
          "Prompting for analysis, with verification",
          "Where LLM output must not be trusted",
        ]
      },
      {
        title: "Automation & Delivery",
        hours: 13,
        summary: "Stop doing the same report twice",
        topics: [
          "Scheduled pipelines & refreshes",
          "Python scripting for repeat analyses",
          "dbt transformations & testing",
          "Alerting on metric anomalies",
          "Storytelling & executive presentation",
          "A capstone analysis with an automated pipeline",
        ]
      },
    ]
  },
  {
    slug: "ai-quality-analyst",
    category: "AI Careers",
    title: "AI Quality Analyst",
    description: "Structured training in testing and validating AI systems — model auditing, bias checks, and quality processes specific to AI, not just traditional QA.",
    hours: 50,
    modules: [
      {
        title: "QA Foundations",
        hours: 12,
        summary: "Conventional testing, done well",
        topics: [
          "Test strategy, levels & types",
          "Test case design techniques",
          "JIRA workflows & defect lifecycle",
          "Agile testing & shift-left practice",
          "Risk-based test prioritisation",
          "Traceability & coverage reporting",
        ]
      },
      {
        title: "Test Automation",
        hours: 13,
        summary: "Automate the deterministic layer",
        topics: [
          "Selenium WebDriver & Page Object Model",
          "TestNG & pytest frameworks",
          "API testing with Postman & Rest Assured",
          "CI integration with Jenkins",
          "Test data management",
          "Flake diagnosis & suite maintenance",
        ]
      },
      {
        title: "Testing AI Systems",
        hours: 12,
        summary: "Where pass/fail stops being binary",
        topics: [
          "Why non-determinism breaks classic assertions",
          "Metamorphic & property-based testing",
          "Golden datasets & regression baselines",
          "LLM-as-judge & rubric evaluation",
          "Red-teaming & prompt injection tests",
          "Bias, fairness & robustness checks",
        ]
      },
      {
        title: "Model Quality & Governance",
        hours: 13,
        summary: "Assure a system that keeps changing",
        topics: [
          "Model evaluation metrics in QA terms",
          "Drift monitoring as a test signal",
          "Data quality validation with Great Expectations",
          "Explainability evidence for sign-off",
          "Audit trails & release gates",
          "A capstone AI test strategy & suite",
        ]
      },
    ]
  },
  {
    slug: "google-cloud-engineer",
    category: "Cloud",
    title: "Google Cloud Engineer",
    description: "Structured training across the core Google Cloud services — compute, storage, networking, and identity — through to automation and monitoring, aligned to Google Cloud certification paths.",
    hours: 50,
    modules: [
      {
        title: "GCP Foundations & IAM",
        hours: 12,
        summary: "Projects, identity and the billing model",
        topics: [
          "Resource hierarchy: org, folder, project",
          "IAM roles, service accounts & workload identity",
          "VPC networks, subnets & firewall rules",
          "Cloud Storage classes & lifecycle",
          "Billing, budgets & committed use discounts",
          "Cloud Logging & Cloud Monitoring",
        ]
      },
      {
        title: "Compute & Kubernetes",
        hours: 15,
        summary: "Run workloads on GCP",
        topics: [
          "Compute Engine instances & machine types",
          "Managed instance groups & autoscaling",
          "Cloud Load Balancing",
          "Google Kubernetes Engine & Autopilot",
          "Cloud Run & Cloud Functions",
          "Artifact Registry & container builds",
        ]
      },
      {
        title: "Data & Storage Services",
        hours: 8,
        summary: "Pick the right store",
        topics: [
          "Cloud SQL & AlloyDB",
          "Firestore & Bigtable",
          "BigQuery for analytics",
          "Memorystore caching",
          "Backup, PITR & DR strategy",
          "Migration with Database Migration Service",
        ]
      },
      {
        title: "Automation & Reliability",
        hours: 15,
        summary: "Operate it without clicking",
        topics: [
          "Terraform on GCP",
          "Cloud Build CI/CD pipelines",
          "Deployment strategies & rollbacks",
          "SRE practice: SLIs, SLOs & error budgets",
          "Incident response & alerting policies",
          "Associate Cloud Engineer exam preparation",
        ]
      },
    ]
  },
  {
    slug: "aws-cloud-engineer",
    category: "Cloud",
    title: "AWS Cloud Engineer",
    description: "Structured training across the core AWS services — compute, storage, networking, and identity — through to automation and monitoring, aligned to AWS certification paths.",
    hours: 70,
    modules: [
      {
        title: "AWS Foundations & IAM",
        hours: 17,
        summary: "Accounts, identity and the billing model",
        topics: [
          "AWS Organizations & account strategy",
          "IAM users, roles & policy evaluation",
          "VPC, subnets, route tables & NAT",
          "S3 storage classes & lifecycle rules",
          "Cost Explorer, budgets & Savings Plans",
          "CloudTrail & CloudWatch fundamentals",
        ]
      },
      {
        title: "Compute & Containers",
        hours: 21,
        summary: "Run workloads on AWS",
        topics: [
          "EC2 instance families & placement",
          "Auto Scaling groups & load balancers",
          "ECS with Fargate",
          "EKS & Kubernetes on AWS",
          "Lambda & event-driven patterns",
          "ECR & image build pipelines",
        ]
      },
      {
        title: "Databases & Storage",
        hours: 11,
        summary: "Pick the right store",
        topics: [
          "RDS engines, Multi-AZ & read replicas",
          "Aurora architecture",
          "DynamoDB design & capacity modes",
          "ElastiCache for Redis",
          "Backup, snapshots & DR tiers",
          "Migration with AWS DMS",
        ]
      },
      {
        title: "Automation & Reliability",
        hours: 21,
        summary: "Operate it without clicking",
        topics: [
          "CloudFormation & Terraform",
          "CodePipeline, CodeBuild & CodeDeploy",
          "Blue-green & canary deployments",
          "Well-Architected Framework pillars",
          "Incident response & runbooks",
          "Solutions Architect Associate preparation",
        ]
      },
    ]
  },
  {
    slug: "azure-cloud-engineer",
    category: "Cloud",
    title: "Azure Cloud Engineer",
    description: "Structured training across the core Microsoft Azure services — compute, storage, networking, and identity — through to automation and monitoring, aligned to Azure certification paths.",
    hours: 70,
    modules: [
      {
        title: "Azure Foundations & Entra ID",
        hours: 17,
        summary: "Subscriptions, identity and the billing model",
        topics: [
          "Management groups & subscription design",
          "Entra ID, RBAC & managed identities",
          "Virtual networks, NSGs & peering",
          "Storage accounts, tiers & lifecycle",
          "Cost Management, budgets & reservations",
          "Azure Monitor & Log Analytics",
        ]
      },
      {
        title: "Compute & Containers",
        hours: 21,
        summary: "Run workloads on Azure",
        topics: [
          "Virtual Machines & scale sets",
          "Load Balancer & Application Gateway",
          "App Service & deployment slots",
          "Azure Kubernetes Service",
          "Azure Functions & Logic Apps",
          "Azure Container Registry",
        ]
      },
      {
        title: "Databases & Storage",
        hours: 11,
        summary: "Pick the right store",
        topics: [
          "Azure SQL Database & Managed Instance",
          "Cosmos DB APIs & partitioning",
          "PostgreSQL & MySQL flexible servers",
          "Azure Cache for Redis",
          "Backup, geo-replication & DR",
          "Azure Database Migration Service",
        ]
      },
      {
        title: "Automation & Reliability",
        hours: 21,
        summary: "Operate it without clicking",
        topics: [
          "ARM templates, Bicep & Terraform",
          "Azure DevOps & GitHub Actions pipelines",
          "Release strategies & approvals",
          "Well-Architected Framework pillars",
          "Alerting, workbooks & incident response",
          "AZ-104 Administrator preparation",
        ]
      },
    ]
  },
  {
    slug: "azure-data-engineering",
    category: "Cloud",
    title: "Azure Data Engineering",
    description: "Specialized, hands-on training in building data pipelines on Microsoft Azure, for learners ready to go deeper than cloud fundamentals.",
    hours: 50,
    modules: [
      {
        title: "Data Modelling & SQL",
        hours: 12,
        summary: "The warehouse fundamentals the tools sit on",
        topics: [
          "Advanced T-SQL & window functions",
          "Dimensional modelling: star & snowflake",
          "Slowly changing dimensions",
          "Normalisation vs denormalisation",
          "Partitioning & distribution strategy",
          "Data quality & constraint design",
        ]
      },
      {
        title: "Azure Data Factory & Ingestion",
        hours: 13,
        summary: "Get data in, reliably and repeatedly",
        topics: [
          "ADF pipelines, activities & triggers",
          "Linked services & integration runtimes",
          "Copy Data & mapping data flows",
          "Incremental loads & watermarking",
          "Event-driven ingestion with Event Hubs",
          "Error handling, retries & alerting",
        ]
      },
      {
        title: "Databricks & Spark",
        hours: 13,
        summary: "Transform at scale",
        topics: [
          "PySpark DataFrames & Spark SQL",
          "Delta Lake, ACID & time travel",
          "Medallion architecture: bronze, silver, gold",
          "Cluster sizing & job optimisation",
          "Unity Catalog governance",
          "Structured Streaming basics",
        ]
      },
      {
        title: "Synapse, Serving & Operations",
        hours: 12,
        summary: "Deliver it and keep it running",
        topics: [
          "Synapse dedicated & serverless pools",
          "Microsoft Fabric & Lakehouse overview",
          "Power BI semantic models",
          "Monitoring & cost optimisation",
          "CI/CD for data pipelines",
          "DP-203 preparation & a capstone pipeline",
        ]
      },
    ]
  },
  {
    slug: "aws-data-engineering",
    category: "Cloud",
    title: "AWS Data Engineering",
    description: "Specialized, hands-on training in building data pipelines on Amazon Web Services, for learners ready to go deeper than cloud fundamentals.",
    hours: 50,
    modules: [
      {
        title: "Data Modelling & SQL",
        hours: 12,
        summary: "The warehouse fundamentals the tools sit on",
        topics: [
          "Advanced SQL & window functions",
          "Dimensional modelling: star & snowflake",
          "Slowly changing dimensions",
          "Columnar formats: Parquet & ORC",
          "Partitioning & compression strategy",
          "Data quality & schema evolution",
        ]
      },
      {
        title: "Ingestion & the Data Lake",
        hours: 13,
        summary: "Get data in, reliably and repeatedly",
        topics: [
          "S3 data lake layout & lifecycle",
          "AWS Glue crawlers & Data Catalog",
          "Glue ETL jobs & bookmarks",
          "Kinesis Data Streams & Firehose",
          "Lake Formation permissions",
          "DMS for database replication",
        ]
      },
      {
        title: "Processing at Scale",
        hours: 13,
        summary: "Transform at scale",
        topics: [
          "PySpark on AWS Glue & EMR",
          "EMR cluster sizing & Spot capacity",
          "Apache Iceberg table format",
          "Athena federated queries",
          "Step Functions orchestration",
          "Managed Airflow (MWAA)",
        ]
      },
      {
        title: "Redshift, Serving & Operations",
        hours: 12,
        summary: "Deliver it and keep it running",
        topics: [
          "Redshift architecture & distribution keys",
          "Redshift Spectrum & materialised views",
          "QuickSight dashboards",
          "Cost & performance tuning",
          "CI/CD for data pipelines",
          "A capstone lakehouse pipeline",
        ]
      },
    ]
  },
  {
    slug: "google-data-engineering",
    category: "Cloud",
    title: "Google Data Engineering",
    description: "Specialized, hands-on training in building data pipelines on Google Cloud, for learners ready to go deeper than cloud fundamentals.",
    hours: 50,
    modules: [
      {
        title: "Data Modelling & SQL",
        hours: 12,
        summary: "The warehouse fundamentals the tools sit on",
        topics: [
          "BigQuery standard SQL & window functions",
          "Dimensional modelling: star & snowflake",
          "Nested & repeated fields",
          "Partitioning & clustering strategy",
          "Slot reservations & cost control",
          "Data quality & schema evolution",
        ]
      },
      {
        title: "Ingestion & Streaming",
        hours: 13,
        summary: "Get data in, reliably and repeatedly",
        topics: [
          "Cloud Storage staging & lifecycle",
          "Pub/Sub topics & subscriptions",
          "Datastream change data capture",
          "BigQuery load & streaming inserts",
          "Dataflow templates",
          "Dead-letter handling & replay",
        ]
      },
      {
        title: "Processing at Scale",
        hours: 13,
        summary: "Transform at scale",
        topics: [
          "Apache Beam programming model",
          "Dataflow batch & streaming jobs",
          "Windowing, watermarks & late data",
          "Dataproc & Spark on GCP",
          "dbt on BigQuery",
          "Cloud Composer (Airflow) orchestration",
        ]
      },
      {
        title: "Serving, Governance & Operations",
        hours: 12,
        summary: "Deliver it and keep it running",
        topics: [
          "BigQuery BI Engine & Looker Studio",
          "Dataplex & Data Catalog governance",
          "IAM & column-level security",
          "Cost monitoring & query optimisation",
          "CI/CD for data pipelines",
          "A capstone streaming pipeline",
        ]
      },
    ]
  },
  {
    slug: "cyber-security-analyst",
    category: "Cybersecurity",
    title: "Cyber Security Analyst",
    description: "Structured training in identifying, monitoring, and responding to real security threats — the day-to-day work of a security analyst, not just theory.",
    hours: 50,
    modules: [
      {
        title: "Security Operations Foundations",
        hours: 12,
        summary: "How a SOC actually works",
        topics: [
          "CIA triad, risk & threat modelling",
          "Network protocols an analyst must read",
          "Windows & Linux security logging",
          "MITRE ATT&CK framework",
          "Cyber kill chain & attacker tradecraft",
          "Analyst tiers, shifts & escalation",
        ]
      },
      {
        title: "Monitoring & Detection",
        hours: 15,
        summary: "Find the signal",
        topics: [
          "SIEM fundamentals: Splunk & Microsoft Sentinel",
          "Writing detection rules & queries",
          "EDR alert triage",
          "Network traffic analysis with Wireshark & Zeek",
          "Log correlation & alert tuning",
          "Reducing false positives measurably",
        ]
      },
      {
        title: "Incident Response & Forensics",
        hours: 12,
        summary: "Act when detection fires",
        topics: [
          "Incident response lifecycle",
          "Containment & eradication decisions",
          "Host & memory triage basics",
          "Phishing & malware analysis workflow",
          "Evidence handling & chain of custody",
          "Post-incident review & reporting",
        ]
      },
      {
        title: "Threat Intelligence & Compliance",
        hours: 11,
        summary: "Context and accountability",
        topics: [
          "Threat intelligence sources & IOCs",
          "Vulnerability management & CVSS",
          "Cloud log sources & attack paths",
          "GDPR, ISO 27001 & NIS2 obligations",
          "Security awareness & reporting to management",
          "CompTIA Security+ / SC-200 preparation",
        ]
      },
    ]
  },
  {
    slug: "cybersecurity-engineering",
    category: "Cybersecurity",
    title: "Cybersecurity Engineering",
    description: "Structured training in designing and securing systems end-to-end — network defense, offensive testing, and cloud security — for learners aiming at a hands-on engineering role rather than analyst work alone.",
    hours: 50,
    modules: [
      {
        title: "Secure Architecture & Networks",
        hours: 12,
        summary: "Build defensible systems",
        topics: [
          "Network segmentation & zero trust design",
          "Firewalls, IDS/IPS & proxies",
          "TLS, PKI & certificate management",
          "VPN & secure remote access",
          "Identity architecture & MFA",
          "Threat modelling with STRIDE",
        ]
      },
      {
        title: "Systems & Application Hardening",
        hours: 13,
        summary: "Close the gaps before they are found",
        topics: [
          "Windows & Linux hardening baselines",
          "CIS Benchmarks & configuration management",
          "Secrets management & key rotation",
          "OWASP Top 10 & secure coding",
          "SAST, DAST & dependency scanning",
          "Container & Kubernetes security",
        ]
      },
      {
        title: "Offensive Testing",
        hours: 12,
        summary: "Attack your own build",
        topics: [
          "Reconnaissance & enumeration",
          "Vulnerability scanning with Nessus & OpenVAS",
          "Exploitation with Metasploit",
          "Web application testing with Burp Suite",
          "Privilege escalation & lateral movement",
          "Reporting findings with remediation advice",
        ]
      },
      {
        title: "Cloud Security & Automation",
        hours: 13,
        summary: "Defend at scale",
        topics: [
          "IAM misconfiguration & least privilege",
          "CSPM & cloud posture monitoring",
          "Infrastructure as code security scanning",
          "DevSecOps pipeline gates",
          "SOAR & automated response",
          "A capstone hardening & test engagement",
        ]
      },
    ]
  },
  {
    slug: "devops-engineer",
    category: "DevOps",
    title: "DevOps Engineer",
    description: "Structured training in the pipelines, automation, and infrastructure practices that connect development and operations.",
    hours: 50,
    modules: [
      {
        title: "Linux, Git & Foundations",
        hours: 12,
        summary: "The ground everything else stands on",
        topics: [
          "Linux administration & shell scripting",
          "Networking & DNS for engineers",
          "Git branching & trunk-based development",
          "Artifact & dependency management",
          "Agile delivery & DevOps culture",
          "Toil, SLIs & the case for automation",
        ]
      },
      {
        title: "CI/CD Pipelines",
        hours: 13,
        summary: "Automate the path to production",
        topics: [
          "Jenkins pipelines & shared libraries",
          "GitHub Actions & GitLab CI",
          "Build, test & quality gates",
          "Artifact registries & versioning",
          "Blue-green & canary deployments",
          "Secrets in pipelines & supply chain safety",
        ]
      },
      {
        title: "Containers & Kubernetes",
        hours: 13,
        summary: "Package and orchestrate",
        topics: [
          "Docker images, layers & multi-stage builds",
          "Kubernetes pods, services & ingress",
          "Deployments, StatefulSets & jobs",
          "ConfigMaps, secrets & RBAC",
          "Helm charts & Kustomize",
          "Autoscaling & resource requests",
        ]
      },
      {
        title: "IaC, Observability & Reliability",
        hours: 12,
        summary: "Operate it predictably",
        topics: [
          "Terraform modules & state management",
          "Ansible configuration management",
          "Prometheus, Grafana & alerting",
          "Centralised logging with the ELK stack",
          "Distributed tracing basics",
          "Incident response, runbooks & postmortems",
        ]
      },
    ]
  },
  {
    slug: "it-analyst",
    category: "Analyst Roles",
    title: "IT Analyst",
    description: "Structured training in translating business needs into technical requirements — the connective role between IT teams and the people who rely on them.",
    hours: 50,
    modules: [
      {
        title: "Business & IT Systems",
        hours: 12,
        summary: "Understand the systems you translate between",
        topics: [
          "Enterprise application landscape",
          "Client-server & web architecture",
          "Databases & basic SQL querying",
          "Integration patterns & APIs",
          "Infrastructure & cloud fundamentals",
          "Reading technical documentation",
        ]
      },
      {
        title: "Requirements & Analysis",
        hours: 13,
        summary: "Turn a need into a specification",
        topics: [
          "Stakeholder elicitation techniques",
          "Process mapping & BPMN",
          "Functional & non-functional requirements",
          "User stories & acceptance criteria",
          "Gap & impact analysis",
          "Traceability matrices",
        ]
      },
      {
        title: "Data, Reporting & Tooling",
        hours: 12,
        summary: "Support decisions with evidence",
        topics: [
          "SQL for reporting & validation",
          "Excel & Power Query analysis",
          "Power BI dashboards",
          "Defining KPIs unambiguously",
          "Data quality assessment",
          "Documenting reporting logic",
        ]
      },
      {
        title: "Service Delivery & Projects",
        hours: 13,
        summary: "Get change into production",
        topics: [
          "ITIL service management concepts",
          "Change, incident & problem processes",
          "JIRA & Confluence workflows",
          "Agile ceremonies & backlog grooming",
          "UAT planning & defect triage",
          "A capstone analysis & specification",
        ]
      },
    ]
  },
  {
    slug: "business-analyst",
    category: "Analyst Roles",
    title: "Business Analyst",
    description: "Structured training in analyzing processes and data to support real business decisions, without requiring a technical background to start.",
    hours: 50,
    modules: [
      {
        title: "Business Analysis Foundations",
        hours: 12,
        summary: "The role, and how value is defined",
        topics: [
          "BABOK knowledge areas & the BA role",
          "Stakeholder identification & RACI",
          "Business case & benefits realisation",
          "SWOT, PESTLE & root cause analysis",
          "Enterprise & operating model basics",
          "Communication & facilitation skills",
        ]
      },
      {
        title: "Requirements Engineering",
        hours: 15,
        summary: "Elicit, model and manage requirements",
        topics: [
          "Interview, workshop & observation techniques",
          "BPMN process modelling",
          "Use cases & user stories with INVEST",
          "Functional & non-functional requirements",
          "Prototyping & wireframing",
          "Backlog management & prioritisation with MoSCoW",
        ]
      },
      {
        title: "Data Analysis for Business",
        hours: 10,
        summary: "Support decisions with evidence",
        topics: [
          "SQL for analysis & validation",
          "Excel modelling & Power Query",
          "Power BI dashboards & DAX basics",
          "Descriptive statistics for reporting",
          "Metric definition & data quality",
          "Presenting findings to executives",
        ]
      },
      {
        title: "Delivery & Change",
        hours: 13,
        summary: "See it through to adoption",
        topics: [
          "Agile & Scrum in practice",
          "JIRA & Confluence workflows",
          "UAT planning & defect management",
          "Change management & training",
          "Post-implementation review",
          "A capstone requirements package",
        ]
      },
    ]
  },
  {
    slug: "it-support-analyst",
    category: "IT Support",
    title: "IT Support Analyst",
    description: "Structured training in diagnosing hardware, network, and systems issues, and delivering the day-to-day technical support that keeps a business running.",
    hours: 60,
    modules: [
      {
        title: "Hardware, OS & Endpoints",
        hours: 14,
        summary: "Fix the things in front of users",
        topics: [
          "PC & laptop hardware diagnostics",
          "Windows 11 installation & troubleshooting",
          "macOS & Linux desktop basics",
          "Device imaging & deployment",
          "Endpoint management with Intune",
          "Printers, peripherals & driver issues",
        ]
      },
      {
        title: "Networking & Connectivity",
        hours: 18,
        summary: "Diagnose what you cannot see",
        topics: [
          "TCP/IP, subnetting & DHCP",
          "DNS resolution & troubleshooting",
          "Wi-Fi, VLANs & switching basics",
          "VPN & remote access support",
          "Command-line diagnostics: ping, tracert, nslookup",
          "Firewall & proxy related faults",
        ]
      },
      {
        title: "Identity & Systems Administration",
        hours: 10,
        summary: "Administer the accounts and shares",
        topics: [
          "Active Directory users & groups",
          "Group Policy basics",
          "Entra ID & conditional access",
          "File shares & NTFS permissions",
          "Exchange Online & mail flow issues",
          "Backup & restore procedures",
        ]
      },
      {
        title: "Service Desk Practice",
        hours: 18,
        summary: "The job as it is actually measured",
        topics: [
          "ITIL incident, request & problem management",
          "Ticketing with ServiceNow & Jira Service Management",
          "SLA, priority & escalation handling",
          "Remote support tooling",
          "Knowledge base & documentation writing",
          "Customer communication under pressure",
        ]
      },
    ]
  },
  {
    slug: "microsoft-365-it-support",
    category: "IT Support",
    title: "Microsoft 365 IT Support",
    description: "Structured training in supporting and administering Microsoft 365 environments — identity, email, file sharing, and end-user troubleshooting.",
    hours: 50,
    modules: [
      {
        title: "Microsoft 365 Foundations",
        hours: 12,
        summary: "Tenants, licensing and the admin surface",
        topics: [
          "Tenant setup & the Microsoft 365 admin center",
          "Licensing plans & assignment",
          "Service health & message center",
          "PowerShell for Microsoft 365",
          "Domains & DNS records",
          "Support boundaries & escalation to Microsoft",
        ]
      },
      {
        title: "Identity with Entra ID",
        hours: 13,
        summary: "Who gets in, and how",
        topics: [
          "Users, groups & administrative units",
          "Entra Connect & hybrid identity",
          "Multi-factor authentication & SSPR",
          "Conditional access policies",
          "Role-based access & PIM basics",
          "Sign-in log troubleshooting",
        ]
      },
      {
        title: "Exchange, Teams & SharePoint",
        hours: 15,
        summary: "The workloads users actually live in",
        topics: [
          "Exchange Online mailboxes & permissions",
          "Mail flow rules & message trace",
          "Teams policies, channels & meetings",
          "SharePoint Online sites & permissions",
          "OneDrive sync & known folder move",
          "Sharing, guest access & external collaboration",
        ]
      },
      {
        title: "Security, Compliance & Support",
        hours: 10,
        summary: "Protect the tenant and close the ticket",
        topics: [
          "Defender for Office 365 & anti-phishing",
          "Data loss prevention & sensitivity labels",
          "Retention policies & eDiscovery basics",
          "Intune device compliance",
          "Common incident playbooks",
          "MS-102 preparation",
        ]
      },
    ]
  },
  {
    slug: "dotnet-full-stack-developer",
    category: "Web Development",
    title: ".NET Full Stack Developer",
    description: "Structured, project-based training in the Microsoft stack — C# and ASP.NET Core on the server, a modern JavaScript framework on the client, and Azure for deployment.",
    hours: 50,
    modules: [
      {
        title: "Frontend Development Stack",
        hours: 12,
        summary: "Build the interfaces that sit in front of a .NET service",
        topics: [
          "HTML5 & CSS3 layout",
          "JavaScript ES6+ & TypeScript",
          "Angular or React components",
          "Blazor & Razor Pages",
          "State management patterns",
          "Responsive design patterns",
        ]
      },
      {
        title: "C# & ASP.NET Core",
        hours: 15,
        summary: "Write the server-side application and its APIs",
        topics: [
          "C# language & OOP fundamentals",
          "LINQ & collections",
          "ASP.NET Core MVC & Minimal APIs",
          "Dependency injection & middleware",
          "Authentication with Identity & JWT",
          "Validation & error handling",
        ]
      },
      {
        title: "Data Access & Architecture",
        hours: 13,
        summary: "Persist, query and structure application data",
        topics: [
          "SQL Server schema design",
          "Entity Framework Core & migrations",
          "Repository & unit of work patterns",
          "Query performance & indexing",
          "Caching with Redis",
          "xUnit unit & integration testing",
        ]
      },
      {
        title: "Azure Deployment & DevOps",
        hours: 10,
        summary: "Ship the application and keep it running",
        topics: [
          "Azure App Service & SQL Database",
          "Docker containerization",
          "Azure DevOps Pipelines",
          "Configuration & secrets management",
          "Application Insights monitoring",
          "Scaling & security hardening",
        ]
      },
    ]
  },
  {
    slug: "quality-analyst",
    category: "Analyst Roles",
    title: "Quality Analyst",
    description: "Structured training in software testing and QA automation — building the test suites and defect workflows that catch problems before your users do.",
    hours: 50,
    modules: [
      {
        title: "Testing Foundations",
        hours: 10,
        summary: "Understand how quality work fits a delivery team",
        topics: [
          "Software development life cycle",
          "Test levels & test types",
          "Agile & Scrum testing practices",
          "Test planning & estimation",
          "Requirement analysis",
          "Entry & exit criteria",
        ]
      },
      {
        title: "Manual Testing & Defect Management",
        hours: 12,
        summary: "Design cases, run them, and track what they find",
        topics: [
          "Test case design techniques",
          "Exploratory & regression testing",
          "JIRA workflows & issue tracking",
          "Defect life cycle & triage",
          "Test data preparation",
          "Traceability matrices",
        ]
      },
      {
        title: "Test Automation with Selenium",
        hours: 16,
        summary: "Replace repetitive manual runs with maintainable code",
        topics: [
          "Selenium WebDriver fundamentals",
          "Locators & waits",
          "Page Object Model design",
          "TestNG & JUnit frameworks",
          "Data-driven & keyword-driven suites",
          "Reporting & failure analysis",
        ]
      },
      {
        title: "API, Performance & CI Integration",
        hours: 12,
        summary: "Test below the interface and run suites automatically",
        topics: [
          "REST API testing with Postman",
          "Rest Assured automation",
          "Performance testing with JMeter",
          "Load & stress test design",
          "CI pipelines with Jenkins",
          "Test environments & version control",
        ]
      },
    ]
  },
  {
    slug: "salesforce-administrator-developer",
    category: "Enterprise Platforms",
    title: "Salesforce Administrator & Developer",
    description: "Structured training across both Salesforce tracks — configuring and administering an org, then extending it with Apex, Lightning components and integrations.",
    hours: 50,
    modules: [
      {
        title: "Platform Fundamentals & Org Setup",
        hours: 12,
        summary: "Configure the org an admin is responsible for",
        topics: [
          "Salesforce data model & objects",
          "Custom fields & relationships",
          "Page layouts & record types",
          "Users, profiles & permission sets",
          "Org-wide defaults & sharing rules",
          "Data import & export tools",
        ]
      },
      {
        title: "Declarative Automation & Analytics",
        hours: 13,
        summary: "Build business logic without writing code",
        topics: [
          "Flow Builder & record-triggered flows",
          "Validation & formula fields",
          "Approval processes",
          "Reports & report types",
          "Dashboards & dynamic filters",
          "Sales & Service Cloud basics",
        ]
      },
      {
        title: "Apex & Lightning Development",
        hours: 15,
        summary: "Extend the platform where configuration runs out",
        topics: [
          "Apex language fundamentals",
          "SOQL & SOSL queries",
          "Triggers & trigger frameworks",
          "Governor limits & bulkification",
          "Lightning Web Components",
          "Apex test classes & coverage",
        ]
      },
      {
        title: "Integration, Deployment & Certification",
        hours: 10,
        summary: "Connect the org to other systems and release safely",
        topics: [
          "REST & SOAP API integration",
          "Platform events & outbound messaging",
          "Sandboxes & change sets",
          "Salesforce DX & version control",
          "Security review best practices",
          "Administrator & Platform Developer I prep",
        ]
      },
    ]
  },
  {
    slug: "sap-consultant",
    category: "Enterprise Platforms",
    title: "SAP Consultant",
    description: "Structured training across the functional, technical and Basis sides of SAP S/4HANA — the platform that runs finance, supply chain and operations at enterprise scale.",
    hours: 50,
    modules: [
      {
        title: "S/4HANA Foundations",
        hours: 12,
        summary: "Learn the platform and how enterprises run on it",
        topics: [
          "SAP architecture & landscape",
          "S/4HANA vs ECC differences",
          "Navigation & SAP Fiori launchpad",
          "Organisational structures",
          "Master data concepts",
          "End-to-end business processes",
        ]
      },
      {
        title: "Functional Configuration",
        hours: 14,
        summary: "Configure the modules a functional consultant owns",
        topics: [
          "Financial Accounting (FI) configuration",
          "Controlling (CO) cost objects",
          "Materials Management (MM) procurement",
          "Sales & Distribution (SD) order cycle",
          "Integration points between modules",
          "Customising with IMG",
        ]
      },
      {
        title: "Technical Track: ABAP & Fiori",
        hours: 14,
        summary: "Build and extend where standard configuration stops",
        topics: [
          "ABAP programming fundamentals",
          "Data dictionary & internal tables",
          "Reports, ALV & module pool",
          "Enhancements, BAdIs & user exits",
          "OData services & CDS views",
          "Fiori Elements & UI5 basics",
        ]
      },
      {
        title: "Basis, Migration & Delivery",
        hours: 10,
        summary: "Administer the system and run a real implementation",
        topics: [
          "System administration & monitoring",
          "Transport Management System",
          "User roles & authorisations",
          "Data migration with Migration Cockpit",
          "SAP Activate implementation methodology",
          "Cutover & go-live support",
        ]
      },
    ]
  },
];

export function findProgramDetail(slug: string): ProgramDetail | undefined {
  return programDetails.find((program) => program.slug === slug);
}

/** Total topics across a program's modules, for the page's summary line. */
export function countTopics(program: ProgramDetail): number {
  return program.modules.reduce(
    (total, module) => total + module.topics.length,
    0,
  );
}
