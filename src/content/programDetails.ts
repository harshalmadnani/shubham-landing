import type { ProgramDetail } from "./types";

/**
 * Curriculum pages, keyed by the slug in the URL.
 *
 * Module and topic counts shown on the page are counted from `modules` rather
 * than stored, so the summary line can never drift from the curriculum below it.
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
        title: "Frontend Development Stack",
        hours: 12,
        summary: "Master modern web technologies and responsive UI",
        topics: [
          "HTML5 & CSS3 Advanced",
          "JavaScript Fundamentals",
          "TypeScript & Type Safety",
          "Frontend Frameworks (React/Angular)",
          "Responsive Design",
          "State Management",
        ]
      },
      {
        title: "Backend Framework Mastery",
        hours: 15,
        summary: "Build robust server-side applications",
        topics: [
          "Core Language Concepts",
          "Backend Framework Architecture",
          "RESTful API Development",
          "Authentication & JWT",
          "Middleware Implementation",
          "Error Handling & Logging",
        ]
      },
      {
        title: "Database Integration",
        hours: 8,
        summary: "Design and manage application databases",
        topics: [
          "Relational Database Design",
          "ORM Integration",
          "NoSQL Databases",
          "Query Optimization",
          "Data Migrations",
          "Transactions & Concurrency",
        ]
      },
      {
        title: "Deployment & DevOps",
        hours: 15,
        summary: "Deploy full stack applications to the cloud",
        topics: [
          "Docker Containerization",
          "Python Hosting & App Services",
          "CI/CD Pipelines",
          "Web Server Configuration",
          "Performance Monitoring",
          "Scalability Best Practices",
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
        title: "Frontend Development Stack",
        hours: 12,
        summary: "Master modern web technologies and responsive UI",
        topics: [
          "HTML5 & CSS3 Advanced",
          "JavaScript Fundamentals",
          "TypeScript & Type Safety",
          "Frontend Frameworks (React/Angular)",
          "Responsive Design",
          "State Management",
        ]
      },
      {
        title: "Backend Framework Mastery",
        hours: 15,
        summary: "Build robust server-side applications",
        topics: [
          "Core Language Concepts",
          "Backend Framework Architecture",
          "RESTful API Development",
          "Authentication & JWT",
          "Middleware Implementation",
          "Error Handling & Logging",
        ]
      },
      {
        title: "Database Integration",
        hours: 8,
        summary: "Design and manage application databases",
        topics: [
          "Relational Database Design",
          "ORM Integration",
          "NoSQL Databases",
          "Query Optimization",
          "Data Migrations",
          "Transactions & Concurrency",
        ]
      },
      {
        title: "Deployment & DevOps",
        hours: 15,
        summary: "Deploy full stack applications to the cloud",
        topics: [
          "Docker Containerization",
          "Java Hosting & App Services",
          "CI/CD Pipelines",
          "Web Server Configuration",
          "Performance Monitoring",
          "Scalability Best Practices",
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
        title: "Data Foundations & SQL",
        hours: 12,
        summary: "Master data extraction and relational databases",
        topics: [
          "Advanced SQL Queries",
          "Database Design Principles",
          "Data Cleaning Techniques",
          "ETL Process Overview",
          "Data Warehousing Basics",
          "Version Control for Data",
        ]
      },
      {
        title: "Data Processing & Python/R",
        hours: 15,
        summary: "Transform and analyze large datasets",
        topics: [
          "Python/R for Data Analysis",
          "Pandas & NumPy Mastery",
          "Big Data Frameworks (Spark)",
          "Data Transformation pipelines",
          "Handling Missing Data",
          "Data Quality Checks",
        ]
      },
      {
        title: "Data Visualization",
        hours: 8,
        summary: "Create impactful dashboards and reports",
        topics: [
          "Visualization Best Practices",
          "BI Tools (Tableau/PowerBI)",
          "Dashboard Design",
          "Storytelling with Data",
          "Interactive Reporting",
          "Automated Report Generation",
        ]
      },
      {
        title: "Advanced Analytics & Deployment",
        hours: 15,
        summary: "Implement predictive models and data pipelines",
        topics: [
          "Predictive Analytics Basics",
          "Machine Learning Intro",
          "Cloud Data Platforms",
          "Data Pipeline Orchestration",
          "Model Deployment",
          "Monitoring Data Pipelines",
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
        title: "Data Foundations & SQL",
        hours: 12,
        summary: "Master data extraction and relational databases",
        topics: [
          "Advanced SQL Queries",
          "Database Design Principles",
          "Data Cleaning Techniques",
          "ETL Process Overview",
          "Data Warehousing Basics",
          "Version Control for Data",
        ]
      },
      {
        title: "Data Processing & Python/R",
        hours: 15,
        summary: "Transform and analyze large datasets",
        topics: [
          "Python/R for Data Analysis",
          "Pandas & NumPy Mastery",
          "Big Data Frameworks (Spark)",
          "Data Transformation pipelines",
          "Handling Missing Data",
          "Data Quality Checks",
        ]
      },
      {
        title: "Data Visualization",
        hours: 8,
        summary: "Create impactful dashboards and reports",
        topics: [
          "Visualization Best Practices",
          "BI Tools (Tableau/PowerBI)",
          "Dashboard Design",
          "Storytelling with Data",
          "Interactive Reporting",
          "Automated Report Generation",
        ]
      },
      {
        title: "Advanced Analytics & Deployment",
        hours: 15,
        summary: "Implement predictive models and data pipelines",
        topics: [
          "Predictive Analytics Basics",
          "Machine Learning Intro",
          "Cloud Data Platforms",
          "Data Pipeline Orchestration",
          "Model Deployment",
          "Monitoring Data Pipelines",
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
        title: "Data Foundations & SQL",
        hours: 12,
        summary: "Master data extraction and relational databases",
        topics: [
          "Advanced SQL Queries",
          "Database Design Principles",
          "Data Cleaning Techniques",
          "ETL Process Overview",
          "Data Warehousing Basics",
          "Version Control for Data",
        ]
      },
      {
        title: "Data Processing & Python/R",
        hours: 15,
        summary: "Transform and analyze large datasets",
        topics: [
          "Python/R for Data Analysis",
          "Pandas & NumPy Mastery",
          "Big Data Frameworks (Spark)",
          "Data Transformation pipelines",
          "Handling Missing Data",
          "Data Quality Checks",
        ]
      },
      {
        title: "Data Visualization",
        hours: 8,
        summary: "Create impactful dashboards and reports",
        topics: [
          "Visualization Best Practices",
          "BI Tools (Tableau/PowerBI)",
          "Dashboard Design",
          "Storytelling with Data",
          "Interactive Reporting",
          "Automated Report Generation",
        ]
      },
      {
        title: "Advanced Analytics & Deployment",
        hours: 15,
        summary: "Implement predictive models and data pipelines",
        topics: [
          "Predictive Analytics Basics",
          "Machine Learning Intro",
          "Cloud Data Platforms",
          "Data Pipeline Orchestration",
          "Model Deployment",
          "Monitoring Data Pipelines",
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
        title: "AI & Machine Learning Foundations",
        hours: 12,
        summary: "Understand core concepts of artificial intelligence",
        topics: [
          "Intro to AI & ML",
          "Supervised vs Unsupervised Learning",
          "Neural Networks Basics",
          "Python for AI",
          "Data Preprocessing for AI",
          "Evaluating AI Models",
        ]
      },
      {
        title: "Deep Learning & Generative AI",
        hours: 15,
        summary: "Build and tune advanced AI models",
        topics: [
          "Deep Learning Frameworks (PyTorch/TensorFlow)",
          "Natural Language Processing (NLP)",
          "Large Language Models (LLMs)",
          "Prompt Engineering",
          "Fine-tuning Models",
          "Computer Vision Basics",
        ]
      },
      {
        title: "AI Ethics & Governance",
        hours: 8,
        summary: "Ensure responsible and secure AI deployment",
        topics: [
          "Bias and Fairness in AI",
          "AI Security & Privacy",
          "Explainable AI (XAI)",
          "Regulatory Compliance",
          "Model Auditing",
          "Risk Management in AI",
        ]
      },
      {
        title: "AI Deployment & MLOps",
        hours: 15,
        summary: "Scale and manage AI solutions in production",
        topics: [
          "Model Deployment Strategies",
          "MLOps Fundamentals",
          "Containerizing AI Models",
          "Cloud AI Services",
          "Continuous Monitoring of Models",
          "Scaling AI Applications",
        ]
      },
    ]
  },
  {
    slug: "ai-consultant",
    category: "AI Careers",
    title: "AI Consultant",
    description: "Structured training in advising organizations on where and how AI actually fits their operations — grounded in practical implementation, not hype.",
    hours: 50,
    modules: [
      {
        title: "AI & Machine Learning Foundations",
        hours: 12,
        summary: "Understand core concepts of artificial intelligence",
        topics: [
          "Intro to AI & ML",
          "Supervised vs Unsupervised Learning",
          "Neural Networks Basics",
          "Python for AI",
          "Data Preprocessing for AI",
          "Evaluating AI Models",
        ]
      },
      {
        title: "Deep Learning & Generative AI",
        hours: 15,
        summary: "Build and tune advanced AI models",
        topics: [
          "Deep Learning Frameworks (PyTorch/TensorFlow)",
          "Natural Language Processing (NLP)",
          "Large Language Models (LLMs)",
          "Prompt Engineering",
          "Fine-tuning Models",
          "Computer Vision Basics",
        ]
      },
      {
        title: "AI Ethics & Governance",
        hours: 8,
        summary: "Ensure responsible and secure AI deployment",
        topics: [
          "Bias and Fairness in AI",
          "AI Security & Privacy",
          "Explainable AI (XAI)",
          "Regulatory Compliance",
          "Model Auditing",
          "Risk Management in AI",
        ]
      },
      {
        title: "AI Deployment & MLOps",
        hours: 15,
        summary: "Scale and manage AI solutions in production",
        topics: [
          "Model Deployment Strategies",
          "MLOps Fundamentals",
          "Containerizing AI Models",
          "Cloud AI Services",
          "Continuous Monitoring of Models",
          "Scaling AI Applications",
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
        title: "AI & Machine Learning Foundations",
        hours: 12,
        summary: "Understand core concepts of artificial intelligence",
        topics: [
          "Intro to AI & ML",
          "Supervised vs Unsupervised Learning",
          "Neural Networks Basics",
          "Python for AI",
          "Data Preprocessing for AI",
          "Evaluating AI Models",
        ]
      },
      {
        title: "Deep Learning & Generative AI",
        hours: 15,
        summary: "Build and tune advanced AI models",
        topics: [
          "Deep Learning Frameworks (PyTorch/TensorFlow)",
          "Natural Language Processing (NLP)",
          "Large Language Models (LLMs)",
          "Prompt Engineering",
          "Fine-tuning Models",
          "Computer Vision Basics",
        ]
      },
      {
        title: "AI Ethics & Governance",
        hours: 8,
        summary: "Ensure responsible and secure AI deployment",
        topics: [
          "Bias and Fairness in AI",
          "AI Security & Privacy",
          "Explainable AI (XAI)",
          "Regulatory Compliance",
          "Model Auditing",
          "Risk Management in AI",
        ]
      },
      {
        title: "AI Deployment & MLOps",
        hours: 15,
        summary: "Scale and manage AI solutions in production",
        topics: [
          "Model Deployment Strategies",
          "MLOps Fundamentals",
          "Containerizing AI Models",
          "AWS AI Services",
          "Continuous Monitoring of Models",
          "Scaling AI Applications",
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
        title: "AI & Machine Learning Foundations",
        hours: 12,
        summary: "Understand core concepts of artificial intelligence",
        topics: [
          "Intro to AI & ML",
          "Supervised vs Unsupervised Learning",
          "Neural Networks Basics",
          "Python for AI",
          "Data Preprocessing for AI",
          "Evaluating AI Models",
        ]
      },
      {
        title: "Deep Learning & Generative AI",
        hours: 15,
        summary: "Build and tune advanced AI models",
        topics: [
          "Deep Learning Frameworks (PyTorch/TensorFlow)",
          "Natural Language Processing (NLP)",
          "Large Language Models (LLMs)",
          "Prompt Engineering",
          "Fine-tuning Models",
          "Computer Vision Basics",
        ]
      },
      {
        title: "AI Ethics & Governance",
        hours: 8,
        summary: "Ensure responsible and secure AI deployment",
        topics: [
          "Bias and Fairness in AI",
          "AI Security & Privacy",
          "Explainable AI (XAI)",
          "Regulatory Compliance",
          "Model Auditing",
          "Risk Management in AI",
        ]
      },
      {
        title: "AI Deployment & MLOps",
        hours: 15,
        summary: "Scale and manage AI solutions in production",
        topics: [
          "Model Deployment Strategies",
          "MLOps Fundamentals",
          "Containerizing AI Models",
          "Microsoft Azure AI Services",
          "Continuous Monitoring of Models",
          "Scaling AI Applications",
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
        title: "AI & Machine Learning Foundations",
        hours: 12,
        summary: "Understand core concepts of artificial intelligence",
        topics: [
          "Intro to AI & ML",
          "Supervised vs Unsupervised Learning",
          "Neural Networks Basics",
          "Python for AI",
          "Data Preprocessing for AI",
          "Evaluating AI Models",
        ]
      },
      {
        title: "Deep Learning & Generative AI",
        hours: 15,
        summary: "Build and tune advanced AI models",
        topics: [
          "Deep Learning Frameworks (PyTorch/TensorFlow)",
          "Natural Language Processing (NLP)",
          "Large Language Models (LLMs)",
          "Prompt Engineering",
          "Fine-tuning Models",
          "Computer Vision Basics",
        ]
      },
      {
        title: "AI Ethics & Governance",
        hours: 8,
        summary: "Ensure responsible and secure AI deployment",
        topics: [
          "Bias and Fairness in AI",
          "AI Security & Privacy",
          "Explainable AI (XAI)",
          "Regulatory Compliance",
          "Model Auditing",
          "Risk Management in AI",
        ]
      },
      {
        title: "AI Deployment & MLOps",
        hours: 15,
        summary: "Scale and manage AI solutions in production",
        topics: [
          "Model Deployment Strategies",
          "MLOps Fundamentals",
          "Containerizing AI Models",
          "Google Cloud / GCP AI Services",
          "Continuous Monitoring of Models",
          "Scaling AI Applications",
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
        title: "AI & Machine Learning Foundations",
        hours: 12,
        summary: "Understand core concepts of artificial intelligence",
        topics: [
          "Intro to AI & ML",
          "Supervised vs Unsupervised Learning",
          "Neural Networks Basics",
          "Python for AI",
          "Data Preprocessing for AI",
          "Evaluating AI Models",
        ]
      },
      {
        title: "Deep Learning & Generative AI",
        hours: 15,
        summary: "Build and tune advanced AI models",
        topics: [
          "Deep Learning Frameworks (PyTorch/TensorFlow)",
          "Natural Language Processing (NLP)",
          "Large Language Models (LLMs)",
          "Prompt Engineering",
          "Fine-tuning Models",
          "Computer Vision Basics",
        ]
      },
      {
        title: "AI Ethics & Governance",
        hours: 8,
        summary: "Ensure responsible and secure AI deployment",
        topics: [
          "Bias and Fairness in AI",
          "AI Security & Privacy",
          "Explainable AI (XAI)",
          "Regulatory Compliance",
          "Model Auditing",
          "Risk Management in AI",
        ]
      },
      {
        title: "AI Deployment & MLOps",
        hours: 15,
        summary: "Scale and manage AI solutions in production",
        topics: [
          "Model Deployment Strategies",
          "MLOps Fundamentals",
          "Containerizing AI Models",
          "Cloud AI Services",
          "Continuous Monitoring of Models",
          "Scaling AI Applications",
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
        title: "AI & Machine Learning Foundations",
        hours: 12,
        summary: "Understand core concepts of artificial intelligence",
        topics: [
          "Intro to AI & ML",
          "Supervised vs Unsupervised Learning",
          "Neural Networks Basics",
          "Python for AI",
          "Data Preprocessing for AI",
          "Evaluating AI Models",
        ]
      },
      {
        title: "Deep Learning & Generative AI",
        hours: 15,
        summary: "Build and tune advanced AI models",
        topics: [
          "Deep Learning Frameworks (PyTorch/TensorFlow)",
          "Natural Language Processing (NLP)",
          "Large Language Models (LLMs)",
          "Prompt Engineering",
          "Fine-tuning Models",
          "Computer Vision Basics",
        ]
      },
      {
        title: "AI Ethics & Governance",
        hours: 8,
        summary: "Ensure responsible and secure AI deployment",
        topics: [
          "Bias and Fairness in AI",
          "AI Security & Privacy",
          "Explainable AI (XAI)",
          "Regulatory Compliance",
          "Model Auditing",
          "Risk Management in AI",
        ]
      },
      {
        title: "AI Deployment & MLOps",
        hours: 15,
        summary: "Scale and manage AI solutions in production",
        topics: [
          "Model Deployment Strategies",
          "MLOps Fundamentals",
          "Containerizing AI Models",
          "Cloud AI Services",
          "Continuous Monitoring of Models",
          "Scaling AI Applications",
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
        title: "AI & Machine Learning Foundations",
        hours: 12,
        summary: "Understand core concepts of artificial intelligence",
        topics: [
          "Intro to AI & ML",
          "Supervised vs Unsupervised Learning",
          "Neural Networks Basics",
          "Python for AI",
          "Data Preprocessing for AI",
          "Evaluating AI Models",
        ]
      },
      {
        title: "Deep Learning & Generative AI",
        hours: 15,
        summary: "Build and tune advanced AI models",
        topics: [
          "Deep Learning Frameworks (PyTorch/TensorFlow)",
          "Natural Language Processing (NLP)",
          "Large Language Models (LLMs)",
          "Prompt Engineering",
          "Fine-tuning Models",
          "Computer Vision Basics",
        ]
      },
      {
        title: "AI Ethics & Governance",
        hours: 8,
        summary: "Ensure responsible and secure AI deployment",
        topics: [
          "Bias and Fairness in AI",
          "AI Security & Privacy",
          "Explainable AI (XAI)",
          "Regulatory Compliance",
          "Model Auditing",
          "Risk Management in AI",
        ]
      },
      {
        title: "AI Deployment & MLOps",
        hours: 15,
        summary: "Scale and manage AI solutions in production",
        topics: [
          "Model Deployment Strategies",
          "MLOps Fundamentals",
          "Containerizing AI Models",
          "Cloud AI Services",
          "Continuous Monitoring of Models",
          "Scaling AI Applications",
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
        title: "AI & Machine Learning Foundations",
        hours: 12,
        summary: "Understand core concepts of artificial intelligence",
        topics: [
          "Intro to AI & ML",
          "Supervised vs Unsupervised Learning",
          "Neural Networks Basics",
          "Python for AI",
          "Data Preprocessing for AI",
          "Evaluating AI Models",
        ]
      },
      {
        title: "Deep Learning & Generative AI",
        hours: 15,
        summary: "Build and tune advanced AI models",
        topics: [
          "Deep Learning Frameworks (PyTorch/TensorFlow)",
          "Natural Language Processing (NLP)",
          "Large Language Models (LLMs)",
          "Prompt Engineering",
          "Fine-tuning Models",
          "Computer Vision Basics",
        ]
      },
      {
        title: "AI Ethics & Governance",
        hours: 8,
        summary: "Ensure responsible and secure AI deployment",
        topics: [
          "Bias and Fairness in AI",
          "AI Security & Privacy",
          "Explainable AI (XAI)",
          "Regulatory Compliance",
          "Model Auditing",
          "Risk Management in AI",
        ]
      },
      {
        title: "AI Deployment & MLOps",
        hours: 15,
        summary: "Scale and manage AI solutions in production",
        topics: [
          "Model Deployment Strategies",
          "MLOps Fundamentals",
          "Containerizing AI Models",
          "Cloud AI Services",
          "Continuous Monitoring of Models",
          "Scaling AI Applications",
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
        title: "AI & Machine Learning Foundations",
        hours: 12,
        summary: "Understand core concepts of artificial intelligence",
        topics: [
          "Intro to AI & ML",
          "Supervised vs Unsupervised Learning",
          "Neural Networks Basics",
          "Python for AI",
          "Data Preprocessing for AI",
          "Evaluating AI Models",
        ]
      },
      {
        title: "Deep Learning & Generative AI",
        hours: 15,
        summary: "Build and tune advanced AI models",
        topics: [
          "Deep Learning Frameworks (PyTorch/TensorFlow)",
          "Natural Language Processing (NLP)",
          "Large Language Models (LLMs)",
          "Prompt Engineering",
          "Fine-tuning Models",
          "Computer Vision Basics",
        ]
      },
      {
        title: "AI Ethics & Governance",
        hours: 8,
        summary: "Ensure responsible and secure AI deployment",
        topics: [
          "Bias and Fairness in AI",
          "AI Security & Privacy",
          "Explainable AI (XAI)",
          "Regulatory Compliance",
          "Model Auditing",
          "Risk Management in AI",
        ]
      },
      {
        title: "AI Deployment & MLOps",
        hours: 15,
        summary: "Scale and manage AI solutions in production",
        topics: [
          "Model Deployment Strategies",
          "MLOps Fundamentals",
          "Containerizing AI Models",
          "Cloud AI Services",
          "Continuous Monitoring of Models",
          "Scaling AI Applications",
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
        title: "AI & Machine Learning Foundations",
        hours: 12,
        summary: "Understand core concepts of artificial intelligence",
        topics: [
          "Intro to AI & ML",
          "Supervised vs Unsupervised Learning",
          "Neural Networks Basics",
          "Python for AI",
          "Data Preprocessing for AI",
          "Evaluating AI Models",
        ]
      },
      {
        title: "Deep Learning & Generative AI",
        hours: 15,
        summary: "Build and tune advanced AI models",
        topics: [
          "Deep Learning Frameworks (PyTorch/TensorFlow)",
          "Natural Language Processing (NLP)",
          "Large Language Models (LLMs)",
          "Prompt Engineering",
          "Fine-tuning Models",
          "Computer Vision Basics",
        ]
      },
      {
        title: "AI Ethics & Governance",
        hours: 8,
        summary: "Ensure responsible and secure AI deployment",
        topics: [
          "Bias and Fairness in AI",
          "AI Security & Privacy",
          "Explainable AI (XAI)",
          "Regulatory Compliance",
          "Model Auditing",
          "Risk Management in AI",
        ]
      },
      {
        title: "AI Deployment & MLOps",
        hours: 15,
        summary: "Scale and manage AI solutions in production",
        topics: [
          "Model Deployment Strategies",
          "MLOps Fundamentals",
          "Containerizing AI Models",
          "Cloud AI Services",
          "Continuous Monitoring of Models",
          "Scaling AI Applications",
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
        title: "AI & Machine Learning Foundations",
        hours: 12,
        summary: "Understand core concepts of artificial intelligence",
        topics: [
          "Intro to AI & ML",
          "Supervised vs Unsupervised Learning",
          "Neural Networks Basics",
          "Python for AI",
          "Data Preprocessing for AI",
          "Evaluating AI Models",
        ]
      },
      {
        title: "Deep Learning & Generative AI",
        hours: 15,
        summary: "Build and tune advanced AI models",
        topics: [
          "Deep Learning Frameworks (PyTorch/TensorFlow)",
          "Natural Language Processing (NLP)",
          "Large Language Models (LLMs)",
          "Prompt Engineering",
          "Fine-tuning Models",
          "Computer Vision Basics",
        ]
      },
      {
        title: "AI Ethics & Governance",
        hours: 8,
        summary: "Ensure responsible and secure AI deployment",
        topics: [
          "Bias and Fairness in AI",
          "AI Security & Privacy",
          "Explainable AI (XAI)",
          "Regulatory Compliance",
          "Model Auditing",
          "Risk Management in AI",
        ]
      },
      {
        title: "AI Deployment & MLOps",
        hours: 15,
        summary: "Scale and manage AI solutions in production",
        topics: [
          "Model Deployment Strategies",
          "MLOps Fundamentals",
          "Containerizing AI Models",
          "Cloud AI Services",
          "Continuous Monitoring of Models",
          "Scaling AI Applications",
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
        title: "AI & Machine Learning Foundations",
        hours: 12,
        summary: "Understand core concepts of artificial intelligence",
        topics: [
          "Intro to AI & ML",
          "Supervised vs Unsupervised Learning",
          "Neural Networks Basics",
          "Python for AI",
          "Data Preprocessing for AI",
          "Evaluating AI Models",
        ]
      },
      {
        title: "Deep Learning & Generative AI",
        hours: 15,
        summary: "Build and tune advanced AI models",
        topics: [
          "Deep Learning Frameworks (PyTorch/TensorFlow)",
          "Natural Language Processing (NLP)",
          "Large Language Models (LLMs)",
          "Prompt Engineering",
          "Fine-tuning Models",
          "Computer Vision Basics",
        ]
      },
      {
        title: "AI Ethics & Governance",
        hours: 8,
        summary: "Ensure responsible and secure AI deployment",
        topics: [
          "Bias and Fairness in AI",
          "AI Security & Privacy",
          "Explainable AI (XAI)",
          "Regulatory Compliance",
          "Model Auditing",
          "Risk Management in AI",
        ]
      },
      {
        title: "AI Deployment & MLOps",
        hours: 15,
        summary: "Scale and manage AI solutions in production",
        topics: [
          "Model Deployment Strategies",
          "MLOps Fundamentals",
          "Containerizing AI Models",
          "Cloud AI Services",
          "Continuous Monitoring of Models",
          "Scaling AI Applications",
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
        title: "AI & Machine Learning Foundations",
        hours: 12,
        summary: "Understand core concepts of artificial intelligence",
        topics: [
          "Intro to AI & ML",
          "Supervised vs Unsupervised Learning",
          "Neural Networks Basics",
          "Python for AI",
          "Data Preprocessing for AI",
          "Evaluating AI Models",
        ]
      },
      {
        title: "Deep Learning & Generative AI",
        hours: 15,
        summary: "Build and tune advanced AI models",
        topics: [
          "Deep Learning Frameworks (PyTorch/TensorFlow)",
          "Natural Language Processing (NLP)",
          "Large Language Models (LLMs)",
          "Prompt Engineering",
          "Fine-tuning Models",
          "Computer Vision Basics",
        ]
      },
      {
        title: "AI Ethics & Governance",
        hours: 8,
        summary: "Ensure responsible and secure AI deployment",
        topics: [
          "Bias and Fairness in AI",
          "AI Security & Privacy",
          "Explainable AI (XAI)",
          "Regulatory Compliance",
          "Model Auditing",
          "Risk Management in AI",
        ]
      },
      {
        title: "AI Deployment & MLOps",
        hours: 15,
        summary: "Scale and manage AI solutions in production",
        topics: [
          "Model Deployment Strategies",
          "MLOps Fundamentals",
          "Containerizing AI Models",
          "Cloud AI Services",
          "Continuous Monitoring of Models",
          "Scaling AI Applications",
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
        title: "AI & Machine Learning Foundations",
        hours: 12,
        summary: "Understand core concepts of artificial intelligence",
        topics: [
          "Intro to AI & ML",
          "Supervised vs Unsupervised Learning",
          "Neural Networks Basics",
          "Python for AI",
          "Data Preprocessing for AI",
          "Evaluating AI Models",
        ]
      },
      {
        title: "Deep Learning & Generative AI",
        hours: 15,
        summary: "Build and tune advanced AI models",
        topics: [
          "Deep Learning Frameworks (PyTorch/TensorFlow)",
          "Natural Language Processing (NLP)",
          "Large Language Models (LLMs)",
          "Prompt Engineering",
          "Fine-tuning Models",
          "Computer Vision Basics",
        ]
      },
      {
        title: "AI Ethics & Governance",
        hours: 8,
        summary: "Ensure responsible and secure AI deployment",
        topics: [
          "Bias and Fairness in AI",
          "AI Security & Privacy",
          "Explainable AI (XAI)",
          "Regulatory Compliance",
          "Model Auditing",
          "Risk Management in AI",
        ]
      },
      {
        title: "AI Deployment & MLOps",
        hours: 15,
        summary: "Scale and manage AI solutions in production",
        topics: [
          "Model Deployment Strategies",
          "MLOps Fundamentals",
          "Containerizing AI Models",
          "Cloud AI Services",
          "Continuous Monitoring of Models",
          "Scaling AI Applications",
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
        title: "Cloud Fundamentals & Identity",
        hours: 12,
        summary: "Master core cloud services and access management",
        topics: [
          "Google Cloud / GCP Architecture Basics",
          "Identity and Access Management (IAM)",
          "Virtual Networks & VPCs",
          "Storage Solutions",
          "Billing & Cost Optimization",
          "Security Best Practices",
        ]
      },
      {
        title: "Compute & Containerization",
        hours: 15,
        summary: "Deploy applications using VMs and managed containers",
        topics: [
          "Virtual Machines Setup",
          "Load Balancing & Autoscaling",
          "Container Basics (Docker)",
          "Managed Kubernetes Service",
          "Serverless Computing",
          "High Availability Design",
        ]
      },
      {
        title: "Databases & Migration",
        hours: 8,
        summary: "Manage relational and NoSQL databases in the cloud",
        topics: [
          "Managed Relational Databases",
          "NoSQL Database Deployments",
          "Data Migration Strategies",
          "Caching Solutions",
          "Database Backup & Recovery",
          "Performance Tuning",
        ]
      },
      {
        title: "Automation & Monitoring",
        hours: 15,
        summary: "Implement CI/CD and monitor cloud resources",
        topics: [
          "Infrastructure as Code (IaC)",
          "CI/CD Pipeline Setup",
          "Google Cloud / GCP Monitoring & Alerting",
          "Log Management",
          "Resource Provisioning Automation",
          "Disaster Recovery Planning",
        ]
      },
    ]
  },
  {
    slug: "aws-cloud-engineer",
    category: "Cloud",
    title: "AWS Cloud Engineer",
    description: "Structured training across the core AWS services — compute, storage, networking, and identity — through to automation and monitoring, aligned to AWS certification paths.",
    hours: 50,
    modules: [
      {
        title: "Cloud Fundamentals & Identity",
        hours: 12,
        summary: "Master core cloud services and access management",
        topics: [
          "AWS Architecture Basics",
          "Identity and Access Management (IAM)",
          "Virtual Networks & VPCs",
          "Storage Solutions",
          "Billing & Cost Optimization",
          "Security Best Practices",
        ]
      },
      {
        title: "Compute & Containerization",
        hours: 15,
        summary: "Deploy applications using VMs and managed containers",
        topics: [
          "Virtual Machines Setup",
          "Load Balancing & Autoscaling",
          "Container Basics (Docker)",
          "Managed Kubernetes Service",
          "Serverless Computing",
          "High Availability Design",
        ]
      },
      {
        title: "Databases & Migration",
        hours: 8,
        summary: "Manage relational and NoSQL databases in the cloud",
        topics: [
          "Managed Relational Databases",
          "NoSQL Database Deployments",
          "Data Migration Strategies",
          "Caching Solutions",
          "Database Backup & Recovery",
          "Performance Tuning",
        ]
      },
      {
        title: "Automation & Monitoring",
        hours: 15,
        summary: "Implement CI/CD and monitor cloud resources",
        topics: [
          "Infrastructure as Code (IaC)",
          "CI/CD Pipeline Setup",
          "AWS Monitoring & Alerting",
          "Log Management",
          "Resource Provisioning Automation",
          "Disaster Recovery Planning",
        ]
      },
    ]
  },
  {
    slug: "azure-cloud-engineer",
    category: "Cloud",
    title: "Azure Cloud Engineer",
    description: "Structured training across the core Microsoft Azure services — compute, storage, networking, and identity — through to automation and monitoring, aligned to Azure certification paths.",
    hours: 50,
    modules: [
      {
        title: "Cloud Fundamentals & Identity",
        hours: 12,
        summary: "Master core cloud services and access management",
        topics: [
          "Microsoft Azure Architecture Basics",
          "Identity and Access Management (IAM)",
          "Virtual Networks & VPCs",
          "Storage Solutions",
          "Billing & Cost Optimization",
          "Security Best Practices",
        ]
      },
      {
        title: "Compute & Containerization",
        hours: 15,
        summary: "Deploy applications using VMs and managed containers",
        topics: [
          "Virtual Machines Setup",
          "Load Balancing & Autoscaling",
          "Container Basics (Docker)",
          "Managed Kubernetes Service",
          "Serverless Computing",
          "High Availability Design",
        ]
      },
      {
        title: "Databases & Migration",
        hours: 8,
        summary: "Manage relational and NoSQL databases in the cloud",
        topics: [
          "Managed Relational Databases",
          "NoSQL Database Deployments",
          "Data Migration Strategies",
          "Caching Solutions",
          "Database Backup & Recovery",
          "Performance Tuning",
        ]
      },
      {
        title: "Automation & Monitoring",
        hours: 15,
        summary: "Implement CI/CD and monitor cloud resources",
        topics: [
          "Infrastructure as Code (IaC)",
          "CI/CD Pipeline Setup",
          "Microsoft Azure Monitoring & Alerting",
          "Log Management",
          "Resource Provisioning Automation",
          "Disaster Recovery Planning",
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
        title: "Data Foundations & SQL",
        hours: 12,
        summary: "Master data extraction and relational databases",
        topics: [
          "Advanced SQL Queries",
          "Database Design Principles",
          "Data Cleaning Techniques",
          "ETL Process Overview",
          "Data Warehousing Basics",
          "Version Control for Data",
        ]
      },
      {
        title: "Data Processing & Python/R",
        hours: 15,
        summary: "Transform and analyze large datasets",
        topics: [
          "Python/R for Data Analysis",
          "Pandas & NumPy Mastery",
          "Big Data Frameworks (Spark)",
          "Data Transformation pipelines",
          "Handling Missing Data",
          "Data Quality Checks",
        ]
      },
      {
        title: "Data Visualization",
        hours: 8,
        summary: "Create impactful dashboards and reports",
        topics: [
          "Visualization Best Practices",
          "BI Tools (Tableau/PowerBI)",
          "Dashboard Design",
          "Storytelling with Data",
          "Interactive Reporting",
          "Automated Report Generation",
        ]
      },
      {
        title: "Advanced Analytics & Deployment",
        hours: 15,
        summary: "Implement predictive models and data pipelines",
        topics: [
          "Predictive Analytics Basics",
          "Machine Learning Intro",
          "Microsoft Azure Data Platforms",
          "Data Pipeline Orchestration",
          "Model Deployment",
          "Monitoring Data Pipelines",
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
        title: "Data Foundations & SQL",
        hours: 12,
        summary: "Master data extraction and relational databases",
        topics: [
          "Advanced SQL Queries",
          "Database Design Principles",
          "Data Cleaning Techniques",
          "ETL Process Overview",
          "Data Warehousing Basics",
          "Version Control for Data",
        ]
      },
      {
        title: "Data Processing & Python/R",
        hours: 15,
        summary: "Transform and analyze large datasets",
        topics: [
          "Python/R for Data Analysis",
          "Pandas & NumPy Mastery",
          "Big Data Frameworks (Spark)",
          "Data Transformation pipelines",
          "Handling Missing Data",
          "Data Quality Checks",
        ]
      },
      {
        title: "Data Visualization",
        hours: 8,
        summary: "Create impactful dashboards and reports",
        topics: [
          "Visualization Best Practices",
          "BI Tools (Tableau/PowerBI)",
          "Dashboard Design",
          "Storytelling with Data",
          "Interactive Reporting",
          "Automated Report Generation",
        ]
      },
      {
        title: "Advanced Analytics & Deployment",
        hours: 15,
        summary: "Implement predictive models and data pipelines",
        topics: [
          "Predictive Analytics Basics",
          "Machine Learning Intro",
          "AWS Data Platforms",
          "Data Pipeline Orchestration",
          "Model Deployment",
          "Monitoring Data Pipelines",
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
        title: "Data Foundations & SQL",
        hours: 12,
        summary: "Master data extraction and relational databases",
        topics: [
          "Advanced SQL Queries",
          "Database Design Principles",
          "Data Cleaning Techniques",
          "ETL Process Overview",
          "Data Warehousing Basics",
          "Version Control for Data",
        ]
      },
      {
        title: "Data Processing & Python/R",
        hours: 15,
        summary: "Transform and analyze large datasets",
        topics: [
          "Python/R for Data Analysis",
          "Pandas & NumPy Mastery",
          "Big Data Frameworks (Spark)",
          "Data Transformation pipelines",
          "Handling Missing Data",
          "Data Quality Checks",
        ]
      },
      {
        title: "Data Visualization",
        hours: 8,
        summary: "Create impactful dashboards and reports",
        topics: [
          "Visualization Best Practices",
          "BI Tools (Tableau/PowerBI)",
          "Dashboard Design",
          "Storytelling with Data",
          "Interactive Reporting",
          "Automated Report Generation",
        ]
      },
      {
        title: "Advanced Analytics & Deployment",
        hours: 15,
        summary: "Implement predictive models and data pipelines",
        topics: [
          "Predictive Analytics Basics",
          "Machine Learning Intro",
          "Google Cloud / GCP Data Platforms",
          "Data Pipeline Orchestration",
          "Model Deployment",
          "Monitoring Data Pipelines",
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
        title: "Security Fundamentals",
        hours: 12,
        summary: "Master core concepts of network and system security",
        topics: [
          "Network Security Basics",
          "Cryptography Fundamentals",
          "Threat Landscape Overview",
          "Identity & Access Control",
          "Security Policies & Frameworks",
          "Vulnerability Assessment",
        ]
      },
      {
        title: "Defensive Security & Operations",
        hours: 15,
        summary: "Implement security controls and monitor threats",
        topics: [
          "Intrusion Detection Systems (IDS/IPS)",
          "Endpoint Protection",
          "SIEM Tools & Log Analysis",
          "Incident Response Planning",
          "Firewall Configuration",
          "Threat Hunting",
        ]
      },
      {
        title: "Offensive Security & Pen Testing",
        hours: 8,
        summary: "Identify vulnerabilities through ethical hacking",
        topics: [
          "Ethical Hacking Methodology",
          "Web Application Security",
          "Network Penetration Testing",
          "Social Engineering Vectors",
          "Exploitation Techniques",
          "Reporting Vulnerabilities",
        ]
      },
      {
        title: "Cloud Security & Compliance",
        hours: 15,
        summary: "Secure cloud environments and ensure regulatory compliance",
        topics: [
          "Cloud Security Posture Management",
          "Zero Trust Architecture",
          "Securing CI/CD Pipelines",
          "Compliance (GDPR, HIPAA, SOC2)",
          "Data Loss Prevention (DLP)",
          "Automated Security Scanning",
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
        title: "Security Fundamentals",
        hours: 12,
        summary: "Master core concepts of network and system security",
        topics: [
          "Network Security Basics",
          "Cryptography Fundamentals",
          "Threat Landscape Overview",
          "Identity & Access Control",
          "Security Policies & Frameworks",
          "Vulnerability Assessment",
        ]
      },
      {
        title: "Defensive Security & Operations",
        hours: 15,
        summary: "Implement security controls and monitor threats",
        topics: [
          "Intrusion Detection Systems (IDS/IPS)",
          "Endpoint Protection",
          "SIEM Tools & Log Analysis",
          "Incident Response Planning",
          "Firewall Configuration",
          "Threat Hunting",
        ]
      },
      {
        title: "Offensive Security & Pen Testing",
        hours: 8,
        summary: "Identify vulnerabilities through ethical hacking",
        topics: [
          "Ethical Hacking Methodology",
          "Web Application Security",
          "Network Penetration Testing",
          "Social Engineering Vectors",
          "Exploitation Techniques",
          "Reporting Vulnerabilities",
        ]
      },
      {
        title: "Cloud Security & Compliance",
        hours: 15,
        summary: "Secure cloud environments and ensure regulatory compliance",
        topics: [
          "Cloud Security Posture Management",
          "Zero Trust Architecture",
          "Securing CI/CD Pipelines",
          "Compliance (GDPR, HIPAA, SOC2)",
          "Data Loss Prevention (DLP)",
          "Automated Security Scanning",
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
        title: "Cloud Fundamentals & Identity",
        hours: 12,
        summary: "Master core cloud services and access management",
        topics: [
          "Cloud Architecture Basics",
          "Identity and Access Management (IAM)",
          "Virtual Networks & VPCs",
          "Storage Solutions",
          "Billing & Cost Optimization",
          "Security Best Practices",
        ]
      },
      {
        title: "Compute & Containerization",
        hours: 15,
        summary: "Deploy applications using VMs and managed containers",
        topics: [
          "Virtual Machines Setup",
          "Load Balancing & Autoscaling",
          "Container Basics (Docker)",
          "Managed Kubernetes Service",
          "Serverless Computing",
          "High Availability Design",
        ]
      },
      {
        title: "Databases & Migration",
        hours: 8,
        summary: "Manage relational and NoSQL databases in the cloud",
        topics: [
          "Managed Relational Databases",
          "NoSQL Database Deployments",
          "Data Migration Strategies",
          "Caching Solutions",
          "Database Backup & Recovery",
          "Performance Tuning",
        ]
      },
      {
        title: "Automation & Monitoring",
        hours: 15,
        summary: "Implement CI/CD and monitor cloud resources",
        topics: [
          "Infrastructure as Code (IaC)",
          "CI/CD Pipeline Setup",
          "Cloud Monitoring & Alerting",
          "Log Management",
          "Resource Provisioning Automation",
          "Disaster Recovery Planning",
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
        title: "Hardware & OS Fundamentals",
        hours: 12,
        summary: "Troubleshoot and manage end-user devices",
        topics: [
          "Computer Hardware Components",
          "Windows & macOS Troubleshooting",
          "Linux Basics",
          "Mobile Device Management",
          "Peripheral Troubleshooting",
          "OS Installation & Imaging",
        ]
      },
      {
        title: "Networking & Infrastructure",
        hours: 15,
        summary: "Manage local networks and connectivity",
        topics: [
          "TCP/IP Protocols",
          "Router & Switch Configuration",
          "Wireless Networking",
          "DNS & DHCP Management",
          "VPN Setup & Support",
          "Network Troubleshooting Tools",
        ]
      },
      {
        title: "Systems Administration",
        hours: 8,
        summary: "Administer user accounts and directory services",
        topics: [
          "Active Directory Management",
          "Group Policy Configuration",
          "Cloud Identity (Azure AD/Entra)",
          "File Shares & Permissions",
          "Email System Administration",
          "Backup & Recovery",
        ]
      },
      {
        title: "IT Service Management",
        hours: 15,
        summary: "Deliver excellent technical support and manage tickets",
        topics: [
          "Help Desk Ticketing Systems",
          "ITIL Framework Basics",
          "Customer Service Skills",
          "Remote Support Tools",
          "IT Documentation",
          "Incident Escalation Procedures",
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
        title: "Business Analysis Fundamentals",
        hours: 12,
        summary: "Master the core principles of business analysis",
        topics: [
          "Role of a Business Analyst",
          "Stakeholder Identification & Analysis",
          "Requirements Elicitation",
          "Business Process Modeling",
          "SWOT & PESTLE Analysis",
          "Agile & Waterfall Methodologies",
        ]
      },
      {
        title: "Requirements Engineering",
        hours: 15,
        summary: "Document and manage business requirements effectively",
        topics: [
          "Writing User Stories & Epics",
          "Use Case Diagrams",
          "Requirements Traceability",
          "Acceptance Criteria",
          "Wireframing & Prototyping",
          "BRD & FRD Creation",
        ]
      },
      {
        title: "Data Analysis for Business",
        hours: 8,
        summary: "Leverage data to drive business decisions",
        topics: [
          "Excel for Business Analysts",
          "SQL Basics for Data Extraction",
          "Data Visualization Principles",
          "Interpreting Dashboards",
          "Key Performance Indicators (KPIs)",
          "Data-Driven Decision Making",
        ]
      },
      {
        title: "Project Management & Delivery",
        hours: 15,
        summary: "Ensure successful project execution and delivery",
        topics: [
          "Scrum Framework Implementation",
          "Sprint Planning & Backlog Grooming",
          "Change Management",
          "User Acceptance Testing (UAT)",
          "Risk Management",
          "Post-Implementation Review",
        ]
      },
    ]
  },
  {
    slug: "it-support-analyst",
    category: "IT Support",
    title: "IT Support Analyst",
    description: "Structured training in diagnosing hardware, network, and systems issues, and delivering the day-to-day technical support that keeps a business running.",
    hours: 50,
    modules: [
      {
        title: "Hardware & OS Fundamentals",
        hours: 12,
        summary: "Troubleshoot and manage end-user devices",
        topics: [
          "Computer Hardware Components",
          "Windows & macOS Troubleshooting",
          "Linux Basics",
          "Mobile Device Management",
          "Peripheral Troubleshooting",
          "OS Installation & Imaging",
        ]
      },
      {
        title: "Networking & Infrastructure",
        hours: 15,
        summary: "Manage local networks and connectivity",
        topics: [
          "TCP/IP Protocols",
          "Router & Switch Configuration",
          "Wireless Networking",
          "DNS & DHCP Management",
          "VPN Setup & Support",
          "Network Troubleshooting Tools",
        ]
      },
      {
        title: "Systems Administration",
        hours: 8,
        summary: "Administer user accounts and directory services",
        topics: [
          "Active Directory Management",
          "Group Policy Configuration",
          "Cloud Identity (Azure AD/Entra)",
          "File Shares & Permissions",
          "Email System Administration",
          "Backup & Recovery",
        ]
      },
      {
        title: "IT Service Management",
        hours: 15,
        summary: "Deliver excellent technical support and manage tickets",
        topics: [
          "Help Desk Ticketing Systems",
          "ITIL Framework Basics",
          "Customer Service Skills",
          "Remote Support Tools",
          "IT Documentation",
          "Incident Escalation Procedures",
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
        title: "Hardware & OS Fundamentals",
        hours: 12,
        summary: "Troubleshoot and manage end-user devices",
        topics: [
          "Computer Hardware Components",
          "Windows & macOS Troubleshooting",
          "Linux Basics",
          "Mobile Device Management",
          "Peripheral Troubleshooting",
          "OS Installation & Imaging",
        ]
      },
      {
        title: "Networking & Infrastructure",
        hours: 15,
        summary: "Manage local networks and connectivity",
        topics: [
          "TCP/IP Protocols",
          "Router & Switch Configuration",
          "Wireless Networking",
          "DNS & DHCP Management",
          "VPN Setup & Support",
          "Network Troubleshooting Tools",
        ]
      },
      {
        title: "Systems Administration",
        hours: 8,
        summary: "Administer user accounts and directory services",
        topics: [
          "Active Directory Management",
          "Group Policy Configuration",
          "Cloud Identity (Azure AD/Entra)",
          "File Shares & Permissions",
          "Email System Administration",
          "Backup & Recovery",
        ]
      },
      {
        title: "IT Service Management",
        hours: 15,
        summary: "Deliver excellent technical support and manage tickets",
        topics: [
          "Help Desk Ticketing Systems",
          "ITIL Framework Basics",
          "Customer Service Skills",
          "Remote Support Tools",
          "IT Documentation",
          "Incident Escalation Procedures",
        ]
      },
    ]
  },
];

export function findProgramDetail(slug: string): ProgramDetail | undefined {
  return programDetails.find((program) => program.slug === slug);
}

export function countTopics(program: ProgramDetail): number {
  return program.modules.reduce(
    (total, module) => total + module.topics.length,
    0,
  );
}
