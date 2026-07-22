"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Sparkles, Target, Users2 } from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    title: "Managerial Ethics",
    description: "A committed dedication to integrity and sound governance across every decision we make.",
  },
  {
    icon: Sparkles,
    title: "Leadership",
    description: "Fostering visionary leaders who guide teams and the business forward with clarity.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    description: "Delivering quality, cost-effective solutions that earn lasting customer trust.",
  },
  {
    icon: Users2,
    title: "Employee Engagement",
    description:
      "Fair recruitment, career development, training, job rotation, and succession planning at every level.",
  },
];

export function CareersPillars() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-xs font-medium uppercase tracking-widest text-primary"
        >
          Our Vision
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl"
        >
          &ldquo;To be a Leader in our chosen Markets by building a strong bond
          with our Customers and employees.&rdquo;
        </motion.h2>

        <div className="mt-12 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-panel shadow-soft rounded-2xl p-6"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
