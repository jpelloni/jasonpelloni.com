'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Code2, 
  Users, 
  Zap, 
  CheckCircle2, 
  Calendar, 
  Mail, 
  Phone, 
  Linkedin, 
  ArrowRight,
  Cloud,
  Workflow,
  Database,
  Layers,
  ServerCog,
  FileDown
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Badge } from '@/components/ui/badge.jsx';

const WorkWithMePage = () => {
  const engagementModels = [
    {
      title: 'Full-Time Roles',
      icon: Briefcase,
      description: 'Permanent backend engineering and architectural positions. I bring 15+ years of experience to lead teams, design scalable systems, and drive long-term technical vision.'
    },
    {
      title: 'Contract & Consulting',
      icon: Code2,
      description: 'Project-based engagements focusing on architecture reviews, AWS modernization initiatives, and resolving complex backend bottlenecks.'
    },
    {
      title: 'Advisory & Mentoring',
      icon: Users,
      description: 'Technical guidance for engineering teams. I provide code reviews, architectural feedback, and mentorship to help elevate your internal engineering standards.'
    },
    {
      title: 'Short-Term Projects',
      icon: Zap,
      description: 'Targeted implementations such as specific API design, data pipeline construction, or legacy system decomposition over a defined timeline.'
    }
  ];

  const projectTypes = [
    { label: 'AWS Cloud Migrations', icon: Cloud },
    { label: 'Event-Driven Architecture', icon: Zap },
    { label: 'Data Pipeline Design', icon: Database },
    { label: 'Microservices Decomposition', icon: Layers },
    { label: 'API & Backend Architecture', icon: ServerCog },
    { label: 'High-Throughput Systems', icon: Workflow },
    { label: 'Team Leadership & Mentoring', icon: Users }
  ];

  const idealCollaboration = [
    'Teams that value clarity, observability, and long-term maintainability over quick, fragile fixes.',
    'Projects where operational excellence and system reliability are treated as first-class features.',
    'Environments that prioritize predictable behavior and robust API contracts.',
    'Opportunities to mentor, share knowledge, and grow the capabilities of the engineering team.',
    'Work that involves real architectural challenges, high-volume data, or complex domain logic.'
  ];

  return (
    <>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 md:py-28 bg-gradient-to-br from-background via-muted/20 to-background border-b border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h1 className="font-extrabold mb-6 tracking-tight text-balance">
                  Work With Me
                </h1>
                <p className="text-xl md:text-2xl font-medium text-primary mb-6 text-balance">
                  Let's build systems that scale, endure, and empower your team.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Whether you need a full-time architectural leader, a consultant to untangle a legacy monolith, or an advisor to guide your cloud migration, I bring a pragmatic, reliability-first approach to every engagement.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Engagement Models */}
          <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold mb-4">Engagement Models</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Flexible ways we can collaborate to solve your engineering challenges.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {engagementModels.map((model, index) => {
                  const Icon = model.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{model.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {model.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Project Types & Ideal Collaboration */}
          <section className="py-24 bg-muted/30 border-y border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                
                {/* Project Types */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-8">What Excites Me</h2>
                  <div className="flex flex-wrap gap-3">
                    {projectTypes.map((type, index) => {
                      const Icon = type.icon;
                      return (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="px-4 py-2 text-sm font-medium bg-background border border-border/50 hover:bg-accent flex items-center gap-2"
                        >
                          <Icon className="h-4 w-4 text-primary" />
                          {type.label}
                        </Badge>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Ideal Collaboration */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-8">Ideal Collaboration</h2>
                  <div className="space-y-6">
                    {idealCollaboration.map((point, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* What You Can Expect From Me */}
<section className="py-24">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto text-center mb-16"
    >
      <h2 className="text-3xl font-bold mb-4">What You Can Expect From Me</h2>
      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        Clear communication, predictable delivery, and senior-level ownership. I focus on building systems 
        that reduce long-term maintenance costs, improve team velocity, and behave reliably in production.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      {[
        'Architectural clarity and well-defined service boundaries that make systems easier to reason about and extend.',
        'A reliability-first mindset that prioritizes observability, predictable behavior, and operational excellence.',
        'Strong communication and collaboration with product, data, and engineering teams.',
        'A pragmatic approach to modernization—balancing serverless, microservices, and traditional compute where appropriate.',
        'Mentorship and knowledge sharing that elevate the entire engineering team.',
        'Ownership of complex backend challenges, from data pipelines to event-driven workflows.'
      ].map((point, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="flex items-start gap-4"
        >
          <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <CheckCircle2 className="h-4 w-4 text-primary" />
          </div>
          <p className="text-muted-foreground leading-relaxed">{point}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


          {/* Availability & CTA */}
          <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="bg-primary/5 border-primary/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                  <CardContent className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center relative z-10">
                    
                    <div className="flex-1 space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                        <Calendar className="h-4 w-4" />
                        Currently Available
                      </div>
                      <h2 className="text-3xl font-bold">Let's Talk</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
  If you're hiring for a senior backend engineer who can design reliable systems, lead modernization 
  efforts, and improve operational efficiency from day one, I’d welcome a conversation. I focus on 
  delivering architectures that scale cleanly, reduce long-term maintenance costs, and enable teams 
  to move faster with confidence.
</p>

                      <p className="text-sm text-muted-foreground">
                        When reaching out, please include a brief overview of your project, the technical stack, and the type of engagement you are looking for.
                      </p>
                    </div>

                    <div className="w-full md:w-auto flex flex-col gap-4 shrink-0">
                      <Button asChild size="lg" className="w-full sm:w-auto text-base shadow-lg shadow-primary/20">
                        <a href="mailto:jason@pelloniconsulting.com">
                          <Mail className="h-5 w-5 mr-2" />
                          Send Email
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base bg-background">
                        <a href="tel:+18133689415">
                          <Phone className="h-5 w-5 mr-2" />
                          (813) 368-9415
                        </a>
                      </Button>
                      <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto text-base hover:bg-primary/10 hover:text-primary">
                        <a href="https://www.linkedin.com/in/jason-pelloni-63609b9/" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5 mr-2" />
                          LinkedIn Profile
                        </a>
                      </Button>
                      <Button asChild size="lg" className="w-full sm:w-auto text-base shadow-lg shadow-primary/20">
  <a href="/Jason-Pelloni-Resume.pdf" download>
    <FileDown className="h-5 w-5 mr-2" />
    Download Résumé (PDF)
  </a>
</Button>
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WorkWithMePage;