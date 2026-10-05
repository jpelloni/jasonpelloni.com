'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'AWS Event‑Driven Data Pipeline Architecture',
      description:
        'Designed and implemented a fully event‑driven data pipeline supporting high‑volume e‑commerce workflows. Built ingestion, transformation, and delivery stages using AWS RDS, EventBridge, Lambda, and API Gateway. Improved throughput, reduced operational load, and established clear service boundaries for long‑term maintainability.',
      technologies: [
        'AWS Lambda',
        'EventBridge',
        'API Gateway',
        'RDS',
        'Node.js',
        'TypeScript'
      ],
      demoUrl: null,
      githubUrl: null
    },
    {
      title: 'Oncology Research Data Platform',
      description:
        'Engineered backend systems powering secure, compliant data exchange for cancer research organizations. Designed REST APIs and workflow automation supporting multi‑institution data sharing. Improved reliability and observability across pipelines handling sensitive clinical and genomic datasets.',
      technologies: [
        'Node.js',
        'TypeScript',
        'AWS Cloud',
        'REST APIs',
        'Data Compliance'
      ],
      demoUrl: null,
      githubUrl: null
    },
    {
      title: 'Legacy System Modernization & AWS Migration',
      description:
        'Led the migration of legacy, tightly coupled data systems into modern AWS‑based pipelines. Re‑architected brittle ETL processes into modular, event‑driven workflows. Improved uptime, reduced latency, and significantly lowered operational overhead while enabling future scalability.',
      technologies: ['AWS EC2', 'Lambda', 'C#', '.NET', 'Migration Strategy'],
      demoUrl: null,
      githubUrl: null
    },
    {
      title: 'API Gateway Integration & Secure Device Communication',
      description:
        'Implemented secure API Gateway patterns enabling device‑to‑cloud communication across distributed environments. Built integration layers connecting multiple data systems, ensuring reliable message delivery, authentication, and workflow orchestration.',
      technologies: ['API Gateway', 'IoT Integrations', 'Security', 'Express', 'NestJS'],
      demoUrl: null,
      githubUrl: null
    },
    {
      title: 'Enterprise Microservices Architecture',
      description:
        'Designed and maintained microservice architectures across multiple organizations. Established service boundaries, standardized API contracts, and built operational tooling to improve reliability and developer velocity. Delivered services in both Node.js and .NET ecosystems to balance performance and delivery speed.',
      technologies: ['Microservices', 'Node.js', 'TypeScript', 'C#', '.NET', 'Docker'],
      demoUrl: null,
      githubUrl: null
    },
    {
  title: 'Claude Dev Skills — Plugin Marketplace',
  description:
    'Built a private Claude Code plugin marketplace that packages senior-level development workflows as installable skills. Split language-specific and shared tooling into focused plugins (TypeScript, Python, AWS, shared), including Jest/Vitest test generation, cross-language documentation, PR quality gates, pytest coverage workflows, and an IAM least-privilege reviewer for JSON/YAML, CloudFormation/SAM, and Terraform. Designed for real repo conventions, iterative verification, and portfolio-ready cloud/backend practice.',
  technologies: [
    'Claude Code',
    'Node.js',
    'TypeScript',
    'Python',
    'AWS IAM',
    'Terraform',
    'GitHub Actions'
  ],
  demoUrl: null,
  githubUrl: 'https://github.com/jpelloni/claude-dev-skills'
    },
{
  "title": "Developer Onboarding Automation CLI",
  "description": "Built a modular TypeScript CLI (dev-setup) to standardize developer onboarding by automating environment setup and dependency validation. Designed a layered commands → services → adapters architecture that keeps external systems isolated, plus a build-time code generator that registers commands through static imports so they bundle cleanly into standalone Windows, macOS, and Linux binaries with Deno. Enforced quality through a GitHub Actions PR policy requiring passing tests, at least 80% coverage on changed files, JSDoc on every changed export, and up-to-date documentation. In progress: environment variable sync against .env.example and project scaffolding commands.",
  "technologies": [
    "TypeScript",
    "Node.js",
    "Commander.js",
    "Deno",
    "Jest",
    "GitHub Actions",
    "Docker"
  ],
  "demoUrl": null,
  "githubUrl": "https://github.com/jpelloni/Developer-Onboarding-Automation-Tool"
}
  ];

  return (
    <>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="font-extrabold mb-6">Featured Work</h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Selected projects demonstrating backend architecture, cloud modernization, and
                  high‑reliability data workflows.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={
                      index === projects.length - 1 && projects.length % 2 !== 0
                        ? 'md:col-span-2 md:max-w-2xl md:mx-auto'
                        : ''
                    }
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProjectsPage;