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
    hours: 70,
    modules: [
      {
        title: "AI & Machine Learning Foundations",
        hours: 17,
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
        hours: 21,
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
        hours: 11,
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
        hours: 21,
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
    hours: 70,
    modules: [
      {
        title: "Cloud Fundamentals & Identity",
        hours: 17,
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
        hours: 21,
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
        hours: 11,
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
        hours: 21,
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
    hours: 70,
    modules: [
      {
        title: "Cloud Fundamentals & Identity",
        hours: 17,
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
        hours: 21,
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
        hours: 11,
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
        hours: 21,
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
    hours: 60,
    modules: [
      {
        title: "Hardware & OS Fundamentals",
        hours: 14,
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
        hours: 18,
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
        hours: 10,
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
        hours: 18,
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
          "HTML5 & CSS3 Layout",
          "JavaScript ES6+ & TypeScript",
          "Angular or React Components",
          "Blazor & Razor Pages",
          "State Management",
          "Responsive Design Patterns",
        ]
      },
      {
        title: "C# & ASP.NET Core",
        hours: 15,
        summary: "Write the server-side application and its APIs",
        topics: [
          "C# Language & OOP Fundamentals",
          "LINQ & Collections",
          "ASP.NET Core MVC & Minimal APIs",
          "Dependency Injection & Middleware",
          "Authentication with Identity & JWT",
          "Validation & Error Handling",
        ]
      },
      {
        title: "Data Access & Architecture",
        hours: 13,
        summary: "Persist, query and structure application data",
        topics: [
          "SQL Server Schema Design",
          "Entity Framework Core & Migrations",
          "Repository & Unit of Work Patterns",
          "Query Performance & Indexing",
          "Caching with Redis",
          "Unit & Integration Testing",
        ]
      },
      {
        title: "Azure Deployment & DevOps",
        hours: 10,
        summary: "Ship the application and keep it running",
        topics: [
          "Azure App Service & SQL Database",
          "Docker Containerization",
          "Azure DevOps Pipelines",
          "Configuration & Secrets Management",
          "Application Insights Monitoring",
          "Scaling & Security Hardening",
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
          "Software Development Life Cycle",
          "Test Levels & Test Types",
          "Agile & Scrum Testing Practices",
          "Test Planning & Estimation",
          "Requirement Analysis",
          "Entry & Exit Criteria",
        ]
      },
      {
        title: "Manual Testing & Defect Management",
        hours: 12,
        summary: "Design cases, run them, and track what they find",
        topics: [
          "Test Case Design Techniques",
          "Exploratory & Regression Testing",
          "JIRA Workflows & Issue Tracking",
          "Defect Life Cycle & Triage",
          "Test Data Preparation",
          "Traceability Matrices",
        ]
      },
      {
        title: "Test Automation with Selenium",
        hours: 16,
        summary: "Replace repetitive manual runs with maintainable code",
        topics: [
          "Selenium WebDriver Fundamentals",
          "Locators & Waits",
          "Page Object Model Design",
          "TestNG & JUnit Frameworks",
          "Data-Driven & Keyword-Driven Suites",
          "Reporting & Failure Analysis",
        ]
      },
      {
        title: "API, Performance & CI Integration",
        hours: 12,
        summary: "Test below the interface and run suites automatically",
        topics: [
          "REST API Testing with Postman",
          "Rest Assured Automation",
          "Performance Testing with JMeter",
          "Load & Stress Test Design",
          "CI Pipelines with Jenkins",
          "Test Environments & Version Control",
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
          "Salesforce Data Model & Objects",
          "Custom Fields & Relationships",
          "Page Layouts & Record Types",
          "Users, Profiles & Permission Sets",
          "Org-Wide Defaults & Sharing Rules",
          "Data Import & Export Tools",
        ]
      },
      {
        title: "Declarative Automation & Analytics",
        hours: 13,
        summary: "Build business logic without writing code",
        topics: [
          "Flow Builder & Record-Triggered Flows",
          "Validation & Formula Fields",
          "Approval Processes",
          "Reports & Report Types",
          "Dashboards & Dynamic Filters",
          "Sales & Service Cloud Basics",
        ]
      },
      {
        title: "Apex & Lightning Development",
        hours: 15,
        summary: "Extend the platform where configuration runs out",
        topics: [
          "Apex Language Fundamentals",
          "SOQL & SOSL Queries",
          "Triggers & Trigger Frameworks",
          "Governor Limits & Bulkification",
          "Lightning Web Components",
          "Apex Test Classes & Coverage",
        ]
      },
      {
        title: "Integration, Deployment & Certification",
        hours: 10,
        summary: "Connect the org to other systems and release safely",
        topics: [
          "REST & SOAP API Integration",
          "Platform Events & Outbound Messaging",
          "Sandboxes & Change Sets",
          "Salesforce DX & Version Control",
          "Security Review Best Practices",
          "Administrator & Platform Developer I Prep",
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
          "SAP Architecture & Landscape",
          "S/4HANA vs ECC Differences",
          "Navigation & SAP Fiori Launchpad",
          "Organisational Structures",
          "Master Data Concepts",
          "End-to-End Business Processes",
        ]
      },
      {
        title: "Functional Configuration",
        hours: 14,
        summary: "Configure the modules a functional consultant owns",
        topics: [
          "Financial Accounting (FI) Configuration",
          "Controlling (CO) Cost Objects",
          "Materials Management (MM) Procurement",
          "Sales & Distribution (SD) Order Cycle",
          "Integration Points Between Modules",
          "Customising with IMG",
        ]
      },
      {
        title: "Technical Track: ABAP & Fiori",
        hours: 14,
        summary: "Build and extend where standard configuration stops",
        topics: [
          "ABAP Programming Fundamentals",
          "Data Dictionary & Internal Tables",
          "Reports, ALV & Module Pool",
          "Enhancements, BAdIs & User Exits",
          "OData Services & CDS Views",
          "Fiori Elements & UI5 Basics",
        ]
      },
      {
        title: "Basis, Migration & Delivery",
        hours: 10,
        summary: "Administer the system and run a real implementation",
        topics: [
          "System Administration & Monitoring",
          "Transport Management System",
          "User Roles & Authorisations",
          "Data Migration with Migration Cockpit",
          "SAP Activate Implementation Methodology",
          "Cutover & Go-Live Support",
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
