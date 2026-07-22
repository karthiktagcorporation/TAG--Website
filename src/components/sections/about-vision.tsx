"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Sparkles, Target, Users2 } from "lucide-react";

const PILLARS = [
  {
    icon: Target,
    title: "Managerial Ethics",
    description: "A committed dedication to integrity and sound governance across every decision.",
  },
  {
    icon: Sparkles,
    title: "Leadership",
    description: "Fostering visionary leaders who guide teams and the business forward.",
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
      "Fair recruitment, career development, training, job rotation, and succession planning for every employee.",
  },
];

const CERTIFICATIONS = [
  "ISO/IEC 17025:2005 (NABL)",
  "ISO 9001:2015",
  "ISO 14001:2015",
  "ISO 45001:2018",
];

const PARTNERS = [
  "KEC International",
  "Kalpataru Power Transmission (KPTL)",
  "Larsen & Toubro (L&T)",
  "TATA Projects",
  "Hyundai Engineering",
];

export function AboutVision() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl text-center mx-auto"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
            Our Vision
          </p>
          <h2 className="text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">
            &ldquo;To be a Leader in our chosen Markets by building a strong bond
            with our Customers and employees.&rdquo;
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border p-6"
          >
            <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground">Certifications</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {CERTIFICATIONS.map((c) => (
                <li key={c} className="text-sm text-muted-foreground">
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border p-6"
          >
            <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <Users2 className="size-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground">Key Partners</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {PARTNERS.map((p) => (
                <li key={p} className="text-sm text-muted-foreground">
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
