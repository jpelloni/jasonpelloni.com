import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Layers, 
  Zap, 
  Database, 
  Cloud, 
  Users,
  CheckCircle2
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';

const EngineeringPhilosophyPage = () => {
  const philosophies = [
    {
      title: 'Operational Excellence',
      icon: Settings,
      description:
        'Building systems that are predictable, observable, and easy to maintain in production. Focus on reducing operational overhead and enabling teams to operate confidently.',
      principles: ['Observability', 'Predictability', 'Low operational overhead', 'Confidence in production']
    },
    {
      title: 'Clear Service Boundaries',
      icon: Layers,
      description:
        'Designing modular, decoupled services with well-defined contracts. Emphasis on clarity, interoperability, and long-term maintainability.',
      principles: ['Modularity', 'Well-defined contracts', 'Loose coupling', 'Long-term maintainability']
    },
    {
      title: 'Event-Driven Architecture',
      icon: Zap,
      description:
        'Leveraging asynchronous, event-driven patterns to build scalable, resilient workflows. Focus on loose coupling and high throughput.',
      principles: ['Asynchronous patterns', 'Loose coupling', 'High throughput', 'Resilience']
    },
    {
      title: 'Data Pipeline Reliability',
      icon: Database,
      description:
        'Building ingestion, transformation, and delivery pipelines that are observable, fault-tolerant, and support high-volume operational workloads.',
      principles: ['Fault tolerance', 'Observability', 'High-volume support', 'Data integrity']
    },
    {
      title: 'Pragmatic Cloud-Native Design',
      icon: Cloud,
      description:
        'Using AWS services (Lambda, EventBridge, RDS, API Gateway) to build systems that scale without drama. Balance between serverless and traditional compute.',
      principles: ['AWS-native', 'Serverless + traditional balance', 'Scalability', 'Cost efficiency']
    },
    {
      title: 'Team Enablement',
      icon: Users,
      description:
        'Writing code and building systems that enable other engineers to understand, modify, and operate them confidently. Mentoring and knowledge sharing.',
      principles: ['Code clarity', 'Documentation', 'Mentoring', 'Knowledge sharing']
    }
  ];

  const examples = [
    {
      title: 'Event-driven order processing',
      description:
        'Architected an event-driven system handling 10k+ events/sec with zero data loss, utilizing AWS EventBridge and SQS to decouple ingestion from downstream processing.'
    },
    {
      title: 'Microservice deployment optimization',
      description:
        'Redesigned monolithic boundaries into clear microservices, establishing strict API contracts that reduced deployment time by 60% and eliminated cross-team deployment blockers.'
    },
    {
      title: 'Observable data pipelines',
      description:
        'Built fault-tolerant data pipelines processing 100GB+ daily, incorporating comprehensive telemetry and automated alerting to catch data anomalies before they impacted downstream consumers.'
    },
    {
      title: 'Team enablement through clarity and standardization',
      description:
        'Introduced consistent API patterns, shared validation layers, and clear service contracts across multiple teams. This reduced onboarding time for new engineers, eliminated recurring integration issues, and improved cross-team development velocity by providing a predictable, well-structured foundation for building and extending services.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Engineering Philosophy - Jason Pelloni</title>
        <meta 
          name="description" 
          content="Jason Pelloni's core engineering principles: building systems that scale, endure, and empower teams through operational excellence and pragmatic cloud-native design." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative min-h-[60dvh] flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1665919094872-2fc89eed9e13)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="font-extrabold mb-6 tracking-tight text-balance">
                  Engineering Philosophy
                </h1>
                <p className="text-xl md:text-3xl font-medium text-primary mb-6 text-balance">
                  Building systems that scale, endure, and empower teams.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Great architecture isn't just about handling traffic—it's about creating predictable, observable environments where engineers can ship with confidence and businesses can operate without friction.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Intro Paragraph */}
          <section className="py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Engineering principles only matter when they consistently guide real decisions. These are the ideas that shape how I design systems, define boundaries, and evaluate trade-offs. They come from years of building and operating production workloads where clarity, reliability, and long-term maintainability matter more than cleverness.
              </p>
            </div>
          </section>

          {/* Philosophy Cards */}
          <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {philosophies.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex h-full"
                    >
                      <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl leading-tight">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col flex-1">
                          <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                            {item.description}
                          </p>
                          <div className="space-y-3 mt-auto pt-6 border-t border-border/50">
                            <p className="text-sm font-semibold text-foreground uppercase tracking-wider">Key Principles</p>
                            <div className="flex flex-wrap gap-2">
                              {item.principles.map((principle, pIndex) => (
                                <Badge key={pIndex} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-xs font-medium">
                                  {principle}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Examples Timeline */}
          <section className="py-24 bg-muted/30 border-t border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto mb-16 text-center"
              >
                <h2 className="text-3xl font-bold mb-4">How This Translates to Real Work</h2>
                <p className="text-lg text-muted-foreground">
                  Philosophy is only valuable when applied. Here is how these principles manifest in production environments.
                </p>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                <div className="relative border-l-2 border-primary/20 pl-8 ml-4 md:ml-0 space-y-12">
                  {examples.map((example, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      className="relative"
                    >
                      <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      
                      <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary hidden sm:block" />
                          {example.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {example.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Closing CTA */}
          <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="text-3xl font-bold mb-6">Let’s Build Something Reliable</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  If your team is looking for a senior backend engineer who can design reliable systems,
                  lead modernization efforts, and improve operational efficiency from day one, I’d welcome
                  a conversation. My focus is delivering architectures that scale cleanly, reduce long-term
                  maintenance costs, and enable teams to move faster with confidence.
                </p>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default EngineeringPhilosophyPage;