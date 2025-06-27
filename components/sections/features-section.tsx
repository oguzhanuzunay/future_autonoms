'use client';

import { Card } from '@/components/ui/card';
import { ChartIcon, DataIcon, ProcessIcon } from '@/components/ui/icons';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Process Mining & Analysis',
    description:
      'Analyze your ERP, CRM, and document workflows in 2 weeks. Identify bottlenecks and optimization opportunities.',
    icon: ProcessIcon,
    color: 'primary',
  },
  {
    title: 'Custom AI Agent Studio',
    description:
      'Design GPT-4 powered micro-agents for sales, finance, and operations without coding.',
    icon: DataIcon,
    color: 'secondary',
  },
  {
    title: 'ROI-Focused Implementation',
    description:
      'Track cost savings, revenue growth, and efficiency gains in real-time dashboards.',
    icon: ChartIcon,
    color: 'destructive',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Enterprise AI Transformation Platform
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From process analysis to AI implementation, we handle your entire transformation
            journey.
          </p>
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-colors h-full">
                <div className="space-y-4">
                  <div className={`inline-block rounded-lg bg-${feature.color}/10 p-3`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
