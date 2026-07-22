"use client";

import { motion } from "framer-motion";
import { HardHat, Leaf, Users, Handshake } from "lucide-react";

const VALUES = [
  {
    icon: HardHat,
    title: "Safety First",
    description:
      "A safety-first culture across every manufacturing unit, protecting our people at every step.",
  },
  {
    icon: Leaf,
    title: "Sustainable Manufacturing",
    description:
      "Responsible use of resources and continuous improvement in our manufacturing processes.",
  },
  {
    icon: Users,
    title: "Workforce Development",
    description:
      "Investing in the skills and growth of our engineers, technicians, and shop-floor teams.",
  },
  {
    icon: Handshake,
    title: "Community",
    description:
      "Building lasting relationships with the communities around our Chennai operations.",
  },
];

export function CSR() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
            Responsibility
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Values that guide how we operate
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border p-6"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
