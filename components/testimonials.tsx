'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechForward',
    content:
      'Future Autonoms transformed our operations. Their AI agents reduced our decision-making time from days to minutes while maintaining 100% accuracy.',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Operations Director at GlobalTech',
    content:
      'The ROI was immediate. Within 5 months, we saw an 18% reduction in operational costs and a 24% increase in team productivity.',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Emily Thompson',
    role: 'Head of Innovation at DataFlow',
    content:
      'Their ChangeOps approach ensured seamless adoption. The micro-learning modules and real-time analytics made the transition effortless.',
    image: 'https://i.pravatar.cc/150?img=3',
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-colors">
            <div className="flex items-start space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
            <blockquote className="mt-4 text-muted-foreground">"{testimonial.content}"</blockquote>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
