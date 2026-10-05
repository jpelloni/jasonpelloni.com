'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Cloud,
  Database,
  Layers,
  Workflow,
  ServerCog,
  DatabaseBackup,
  Users,
  Wrench
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SkillCategory from '@/components/SkillCategory.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';

const SkillsPage = () => {
  const technicalExpertise = [
    {
      title: 'Backend Architecture & API Design',
      icon: Code2,
      skills: [
        'RESTful API design & lifecycle',
        'GraphQL schema design',
        'Workflow‑friendly API contracts',
        'Secure device‑to‑cloud communication',
        'API Gateway patterns',
        'NestJS & Express architecture'
      ],
      variant: 'primary'
    },
    {
      title: 'AWS Cloud Engineering',
      icon: Cloud,
      skills: [
        'Event‑driven architecture (EventBridge, SQS)',
        'Serverless workflows (Lambda, Step Functions)',
        'API Gateway integration patterns',
        'RDS schema design & optimization',
        'EC2‑based service hosting',
        'Cloud‑native data pipeline design'
      ],
      variant: 'primary'
    },
    {
      title: 'Microservices Architecture',
      icon: Layers,
      skills: [
        'Service boundary definition',
        'Decoupled workflow design',
        'Node.js & TypeScript services',
        'C#/.NET microservices',
        'Containerization (Docker)',
        'Operational readiness & observability'
      ],
      variant: 'default'
    },
    {
      title: 'Data Pipelines & Workflow Automation',
      icon: Workflow,
      skills: [
        'Ingestion → transformation → delivery pipelines',
        'Event‑driven ETL',
        'High‑volume operational workflows',
        'Schema evolution & versioning',
        'Pipeline observability & alerting'
      ],
      variant: 'default'
    },
    {
      title: 'Legacy System Modernization',
      icon: ServerCog,
      skills: [
        'Monolith decomposition strategy',
        'Cloud migration planning',
        'Refactoring brittle ETL processes',
        'Stabilizing high‑risk legacy systems'
      ],
      variant: 'default'
    },
    {
      title: 'Operational Automation & Reliability',
      icon: Wrench,
      skills: [
        'Reducing operational overhead',
        'Automated workflow orchestration',
        'Resilience & fault‑tolerance patterns',
        'Performance tuning & latency reduction'
      ],
      variant: 'default'
    },
    {
      title: 'Database Engineering',
      icon: DatabaseBackup,
      skills: [
        'AWS RDS (Postgres/MySQL)',
        'EC2‑hosted databases',
        'Query optimization',
        'Migration & replication strategies'
      ],
      variant: 'default'
    },
    {
      title: 'Leadership & Collaboration',
      icon: Users,
      skills: [
        'Leading backend teams',
        'Architecture planning & reviews',
        'Mentoring engineers',
        'Cross‑team technical alignment'
      ],
      variant: 'default'
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
                <h1 className="font-extrabold mb-6">Technical Expertise</h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  A senior‑level capability map spanning backend architecture, AWS cloud systems,
                  data pipelines, and engineering leadership.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Skill Categories */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {technicalExpertise.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <SkillCategory {...category} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Programming Languages & Technologies */}
          <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-10 text-center">
                  Programming Languages & Technologies
                </h2>

                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Languages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {['C#', 'Node.js', 'TypeScript', 'Python'].map(t => (
                          <Badge key={t} variant="secondary" className="px-3 py-1 text-sm">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Frameworks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {['NestJS', 'Express', 'ASP.NET'].map(t => (
                          <Badge key={t} variant="secondary" className="px-3 py-1 text-sm">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Cloud (AWS)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {['AWS RDS', 'EventBridge', 'API Gateway', 'Lambda', 'EC2'].map(t => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Tools & Environments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {['Visual Studio Code', 'PyCharm Professional'].map(t => (
                          <Badge key={t} variant="outline" className="px-3 py-1 text-sm">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        Certifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          Certified in NestJS
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          Full‑Stack Web Development Certification
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SkillsPage;