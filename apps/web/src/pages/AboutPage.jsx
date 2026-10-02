import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TimelineItem from '@/components/TimelineItem.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';

const AboutPage = () => {
  const milestones = [
    {
      year: '2025',
      title: 'Senior Backend Developer — FunToDo.com',
      description:
        'Feb 2025 — Present (Remote). Architecting microservices and designing end‑to‑end data pipelines for a high‑volume e‑commerce platform. Leading backend engineering efforts, implementing workflow‑friendly APIs, and building scalable operational systems using AWS serverless services.'
    },
    {
      year: '2017',
      title: 'Senior Backend Developer — M2Gen / Aster Insights / Zephyr AI',
      description:
        'Sep 2017 — Dec 2024 (Remote). Built backend systems powering cancer research and clinical data platforms. Led modernization initiatives migrating legacy pipelines to AWS, improving reliability, throughput, and observability. Conducted extensive code reviews and mentored engineers across multiple teams.'
    },
    {
      year: '2016',
      title: 'Senior Backend Developer — NovuSolutions',
      description:
        'Apr 2016 — Aug 2017 (Tampa, FL). Developed backend services and integrations supporting enterprise operational workflows. Implemented secure API Gateway patterns enabling device‑to‑cloud communication and real‑time data exchange.'
    },
    {
      year: '2012',
      title: 'Integrations Developer — Bisk Education',
      description:
        'Feb 2012 — Apr 2016 (Tampa/St. Petersburg, FL). Focused on backend integrations, automation, and cross‑platform data synchronization. Improved data reliability and reduced operational overhead through workflow automation and service‑to‑service communication patterns.'
    },
    {
      year: '2008',
      title: 'Web Developer — VisualGov Solutions',
      description:
        'Feb 2008 — Feb 2012 (Valrico, FL). Built backend systems for municipal government applications, optimizing data retrieval and improving system resilience for public‑sector workflows.'
    },
    {
      year: 'Prior',
      title: 'Senior Consultant — Sogeti USA, Inc.',
      description:
        'Valrico, FL. Contributed to large‑scale enterprise .NET applications and advised on early AWS cloud migration strategies for Fortune 500 clients.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Jason Pelloni — Professional Experience</title>
        <meta
          name="description"
          content="Explore the 15+ year professional history of Jason Pelloni, Senior Backend & Cloud Engineer specializing in AWS architecture, microservices, and data pipeline modernization."
        />
      </Helmet>

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
                <h1 className="font-extrabold mb-6 text-balance">Professional Experience</h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  A timeline of my 15+ years designing backend systems, leading modernization efforts,
                  and architecting cloud‑native solutions across multiple industries.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Career Timeline */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TimelineItem
                      year={milestone.year}
                      title={milestone.title}
                      description={milestone.description}
                      isLeft={index % 2 === 0}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Education</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">University of South Florida</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Bachelor of Science in Computer Information Systems
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">Pasco‑Hernando Community College</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Associate of Arts</p>
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

export default AboutPage;