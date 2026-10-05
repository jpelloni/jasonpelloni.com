'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Cloud, Database, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';

const HomePage = () => {
  const highlights = [
    {
      icon: Cloud,
      title: 'AWS Serverless & Event‑Driven Architecture',
      description:
        'Architecting AWS‑native systems using Lambda, EventBridge, SQS, and Step Functions to build scalable, low‑ops workflows.'
    },
    {
      icon: Code2,
      title: 'Microservices & API Design',
      description:
        'Designing modular service boundaries and predictable API contracts that improve reliability, clarity, and long‑term maintainability.'
    },
    {
      icon: Database,
      title: 'Data Pipelines & Workflow Automation',
      description:
        'Building ingestion, transformation, and delivery pipelines that support high‑volume operational workloads with strong observability.'
    }
  ];

  return (
    <>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1587637721784-024d2b51e1dd)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="font-extrabold mb-6 tracking-tight">
                  Jason Pelloni
                </h1>

                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6 text-balance">
                  Senior Backend & Cloud Engineer
                </h2>

                <p className="text-xl md:text-2xl font-medium text-foreground/90 mb-6">
                  Specializing in AWS serverless architecture, event‑driven systems, and workflow‑friendly APIs.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-10 text-muted-foreground">
                  <a
                    href="mailto:jason@pelloniconsulting.com"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" /> jason@pelloniconsulting.com
                  </a>
                  <a
                    href="tel:+18133689415"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Phone className="h-5 w-5" /> (813) 368‑9415
                  </a>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto text-balance">
                  I design and build backend systems that stay fast, predictable, and maintainable as they scale. My work focuses on AWS‑native architectures, modular service boundaries, and data pipelines that support real business workflows with high reliability and low operational overhead.
                  <br /><br />
                  With 15+ years of experience across backend engineering, cloud migration, and system modernization, I bring a strong balance of hands‑on implementation and architectural decision‑making. I care deeply about clarity, observability, and building systems that teams can operate confidently in production.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="text-base transition-all duration-200 active:scale-95 shadow-lg shadow-primary/20"
                  >
                    <Link href="/about">
                      View My Experience
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-base transition-all duration-200 active:scale-95"
                  >
                    <Link href="/projects">See Past Projects</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Highlights Section */}
          <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="font-bold mb-4">How I Work</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  I prioritize clear service boundaries, predictable behavior, and operational visibility. My approach emphasizes strong API contracts, event‑driven workflows, and infrastructure that scales without drama.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <CardHeader>
                          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                            <Icon className="h-7 w-7 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{highlight.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base leading-relaxed">
                            {highlight.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;