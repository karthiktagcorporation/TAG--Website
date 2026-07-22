"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeartHandshake, Sparkles, Target, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PILLARS = [
  { icon: Target, title: "Managerial Ethics" },
  { icon: Sparkles, title: "Leadership" },
  { icon: HeartHandshake, title: "Customer Satisfaction" },
  { icon: Users2, title: "Employee Engagement" },
];

export function CareersCta() {
  return (
    <section id="careers" className="relative py-24 sm:py-32">
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                <div className="mx-auto mb-4 flex size-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {p.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Button
            size="lg"
            className="h-12 px-6 text-sm shadow-glow-primary"
            render={<Link href="/careers">Explore Careers</Link>}
          />
        </motion.div>
      </div>
    </section>
  );
}
