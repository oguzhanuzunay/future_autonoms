'use client';

import { LeadForm } from '@/components/lead-form';
import { Card } from '@/components/ui/card';
import { CheckIcon } from '@/components/ui/icons';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 flex items-center justify-center bg-background/90">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2 mb-6">
                  <Image
                    src="/images/logo/logo.png"
                    alt="Future Autonoms"
                    width={300}
                    height={80}
                    className="w-auto h-16 md:h-20"
                    priority
                  />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transform Your Enterprise with
                  <span className="block text-primary animate-glow">AI-Powered Intelligence</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
                  Future Autonoms is your end-to-end AI transformation platform. We analyze, design,
                  and integrate custom AI agents that work with your existing systems and teams.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <LeadForm
                  className="max-w-lg"
                  buttonText="Start Your AI Transformation"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4 text-sm text-muted-foreground"
              >
                <div className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                  <span>18% Average Cost Reduction</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                  <span>24% Revenue Growth</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                  <span>5-Month ROI</span>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mx-auto flex items-center justify-center"
            >
              <Card className="relative group overflow-hidden rounded-lg border-2 border-primary/20 p-2">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold">Enterprise AI Dashboard</h3>
                      <p className="text-sm text-muted-foreground">
                        Real-time insights into your AI transformation
                      </p>
                    </div>
                    <div className="space-y-4">
                      {[
                        { title: 'Process Mining', status: 'Analyzing ERP Data' },
                        { title: 'Agent Development', status: 'Custom Design Phase' },
                        { title: 'Team Training', status: 'Micro-Learning Active' },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-lg bg-background/50 border border-primary/10 space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                              <span className="text-sm font-medium">{item.title}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{item.status}</span>
                          </div>
                          <div className="h-2 bg-primary/20 rounded-full" />
                          <div className="h-2 bg-primary/10 rounded-full w-3/4" />
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollArea>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
