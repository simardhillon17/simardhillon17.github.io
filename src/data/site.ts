// Single source of truth for all page content.
// Edit this file to update the portfolio — components read from here.

export const site = {
  name: "Simarpreet Dhillon",
  // Rotating hero titles.
  roles: [
    "DevOps Engineer",
    "Site Reliability Engineer",
    "Platform Engineer",
    "Infrastructure Engineer",
    "MLOps-Platform Engineer",
  ],
  location: "Houston, TX",
  email: "simardhillonsd17@gmail.com",
  socials: {
    github: "https://github.com/simardhillon17",
    // TODO: replace with your real LinkedIn URL, or remove.
    linkedin: "https://www.linkedin.com/in/simarpreet-dhillon",
    resume: "/resume.pdf", // drop your PDF at public/resume.pdf
  },

  tagline:
    "I build the AWS infrastructure, CI/CD, and data pipelines behind production ML and GenAI systems.",

  summary:
    "Platform & MLOps engineer with 5.5+ years automating AWS environments, Kubernetes platforms, and CI/CD for production ML and GenAI systems. I've shipped a GraphRAG knowledge platform on AWS Bedrock, EKS-based ML runtimes, Airflow orchestration, and high-performance storage for petabyte-scale training data. I like turning fragile, manual infrastructure into self-service platforms with strong guardrails, observability, and reliability.",
} as const;

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "GenAI & MLOps",
    items: [
      "RAG / GraphRAG",
      "AWS Bedrock",
      "Anthropic Claude",
      "Titan Embeddings",
      "Cohere Rerank",
      "LangGraph",
      "Neo4j",
      "Qdrant",
      "Knowledge Graphs",
      "RAGAS",
      "Langfuse",
    ],
  },
  {
    title: "Cloud",
    items: [
      "AWS",
      "Amazon EKS",
      "EC2",
      "VPC",
      "Route 53",
      "ALB",
      "EFS",
      "FSx for Lustre",
      "S3 / Glacier",
      "CloudWatch",
    ],
  },
  {
    title: "Containers & Platforms",
    items: [
      "Kubernetes",
      "Docker",
      "ECS",
      "Fargate",
      "Helm",
      "Karpenter",
      "Rancher",
      "Fleet",
      "Argo CD",
      "Argo Rollouts",
    ],
  },
  {
    title: "IaC & Automation",
    items: [
      "Terraform",
      "Terraform Cloud",
      "AWS CDK",
      "CloudFormation",
      "Ansible",
      "Packer",
      "Python",
      "Bash",
      "PowerShell",
    ],
  },
  {
    title: "CI/CD & GitOps",
    items: [
      "GitHub Actions",
      "Buildkite",
      "Jenkins",
      "GitLab CI",
      "Bitbucket",
      "GitOps",
    ],
  },
  {
    title: "Data & ML Infra",
    items: [
      "Apache Airflow",
      "AWS Step Functions",
      "RDS PostgreSQL",
      "SQS",
      "ML pipeline runtimes",
      "Genomic workloads",
    ],
  },
  {
    title: "Observability & Security",
    items: [
      "Prometheus",
      "Grafana",
      "Splunk",
      "Datadog",
      "ELK",
      "HashiCorp Vault",
      "IAM",
      "Security Hub",
      "GuardDuty",
      "Inspector",
      "CIS",
    ],
  },
];

export type Job = {
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Job[] = [
  {
    company: "DISH Networks",
    role: "Platform Engineer",
    location: "Dallas, TX",
    period: "2024 — Present",
    points: [
      "Architected a telco-grade AWS landing zone with Terraform and AWS CDK, automating secure VPC and EKS provisioning in under 45 minutes and eliminating 90% of manual configuration drift.",
      "Led a production GenAI/GraphRAG knowledge platform on AWS Bedrock — Step Functions/Fargate ingestion and LLMGateway integration powering citation-backed retrieval across a 1TB enterprise corpus.",
      "Ran high-density 5G microservices across multi-region EKS clusters with Karpenter, Argo CD, Helm, Fleet, and Rancher — 170+ services at 100% environment parity.",
      "Built a self-service infrastructure portal (Helm + GitOps) for guardrailed Aurora, ElastiCache, and S3 provisioning — 300+ zero-downtime updates, DevOps ticket volume down 60%.",
      "Implemented Argo Rollouts for canary and blue-green deploys — 99.99% availability, change-failure rate below 3%. Cut .NET/Node.js CI build times 50% with GitHub Actions and Buildkite.",
    ],
  },
  {
    company: "Gilead Sciences",
    role: "Infrastructure Engineer — MLOps",
    location: "Dallas, TX",
    period: "2023 — 2024",
    points: [
      "Implemented a GxP-compliant AWS landing zone (VPC, Route 53, ALB, multi-AZ, CloudWatch governance) supporting 99.9% uptime for clinical-data platforms.",
      "Managed production Amazon EKS clusters hosting containerized bioinformatics apps with managed node pools for high-throughput genomic-data processing.",
      "Engineered hardened Packer AMIs for ML pipelines, standardizing data-science runtimes and cutting compute-provisioning time 30%.",
      "Deployed Amazon EFS and FSx for Lustre for persistent microservices and petabyte-scale laboratory datasets during ML training.",
      "Centralized EKS and VPC Flow Logs into Splunk via Kinesis Data Firehose and built Prometheus/Grafana dashboards, reducing system bottlenecks 30%.",
    ],
  },
  {
    company: "Dell Technologies",
    role: "Cloud Engineer",
    location: "Hyderabad, India",
    period: "2019 — 2022",
    points: [
      "Built and maintained Jenkins CI/CD pipelines with blue-green deployments to AWS across ~100 services, achieving 99.8% availability.",
      "Automated provisioning with Python/Bash wrappers around Terraform and CloudFormation across 50+ environments — deployments 90% faster, config errors down 20%.",
      "Containerized 20+ critical applications with Docker for Amazon EKS, cutting environment setup time 30%.",
      "Rolled out AWS Security Hub, GuardDuty, and Inspector org-wide with automated Jira tickets — CIS score above 85%, MTTD down 30%.",
      "Wrote Ansible playbooks centralizing patch automation for 50+ EC2 instances across regions, improving deployment efficiency 60%.",
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  href?: string; // live/repo link, optional
  repo?: string; // GitHub repo link, optional
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "GraphRAG Engineering Knowledge Agent",
    blurb:
      "GenAI knowledge platform answering engineering questions over a ~1TB corpus with source-cited responses. GraphRAG agent on AWS Bedrock (Claude, Titan, Cohere Rerank) pairing a Neo4j knowledge graph with Qdrant vector search behind a unified LLMGateway. Nightly delta ingestion on Step Functions + Fargate; LangGraph route → retrieve → rerank → synthesize → verify flow with a fail-closed citation verifier (≥0.85 faithfulness, ≥0.90 citation coverage on RAGAS).",
    stack: ["AWS Bedrock", "LangGraph", "Neo4j", "Qdrant", "Step Functions", "Python"],
    featured: true,
  },
  {
    name: "AWS EKS Base (Terraform)",
    blurb:
      "Reusable Terraform base module for provisioning production Amazon EKS clusters — IRSA IAM roles, VPC CNI / Cilium, autoscaler, load-balancer controller, EBS CSI, and Argo integration.",
    stack: ["Terraform", "EKS", "IAM / IRSA", "AWS"],
    repo: "https://github.com/simardhillon17/aws-eks-base-tf",
    featured: true,
  },
  {
    name: "AWS Grafana Monitoring",
    blurb:
      "Reusable observability stack for AWS EKS built around Grafana — deployed via Argo CD and a Jenkins pipeline, with a large library of dashboards for Kubernetes, Istio, Prometheus/Thanos, Kafka/MSK, and AWS services.",
    stack: ["Grafana", "Terraform", "Argo CD", "Prometheus", "Thanos"],
    repo: "https://github.com/simardhillon17/aws-grafana-monitoring",
    featured: true,
  },
  {
    name: "Kubernetes Ingress Lab",
    blurb:
      "Hands-on evaluations of ingress controllers and edge tooling for EKS — HAProxy, Contour, Voyager, Ambassador, Gloo, and NGINX — plus Calico CNI, a legacy-route-to-Ingress converter, and log-forwarding sidecars.",
    stack: ["Kubernetes", "NGINX", "HAProxy", "Contour", "Calico"],
  },
  {
    name: "Certificate Automation",
    blurb:
      "TLS/PKI certificate lifecycle automation — CSR generation, Vault-backed MQ cert renewal, an ICD connection demo, and email-to-Sheets tracking for expiry alerts.",
    stack: ["Python", "HashiCorp Vault", "Bash", "PKI"],
  },
];

export const certifications = [
  "AWS Certified Developer — Associate",
  "Certified Kubernetes Administrator (CKA)",
];

export const education = [
  {
    degree: "M.S. Computer Science",
    school: "Indiana Institute of Technology, USA",
  },
  {
    degree: "B.S. Computer Science",
    school: "Jawaharlal Nehru Technological University, India",
  },
];
