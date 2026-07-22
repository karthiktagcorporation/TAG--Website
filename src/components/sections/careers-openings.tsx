"use client";

import { motion } from "framer-motion";
import { FlaskConical, HardHat, Wrench } from "lucide-react";

const ROLE_TYPES = [
  {
    icon: Wrench,
    title: "Manufacturing Engineer",
    description: "Illustrative role type — process, tooling, and shop-floor engineering roles across our units.",
  },
  {
    icon: FlaskConical,
    title: "Quality / Testing Engineer",
    description: "Illustrative role type — hardware and laboratory testing, quality assurance and compliance.",
  },
  {
    icon: HardHat,
    title: "Site / Project Engineer",
    description: "Illustrative role type — supporting execution of transmission line hardware projects.",
  },
];

export function CareersOpenings() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
            Current Openings
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Check back soon for open roles
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            We don&apos;t have specific job listings published right now. Below are
            the general types of roles we typically hire for across engineering,
            quality, and manufacturing. Submit your details below and our HR team
            will reach out when a matching role opens.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-3">
          {ROLE_TYPES.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border p-6"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{role.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{role.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
