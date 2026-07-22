"use client";

import { motion } from "framer-motion";
import {
  Beaker,
  FlaskConical,
  Gauge,
  Microscope,
  Radio,
  ShieldCheck,
  Zap,
} from "lucide-react";

const LABS = [
  {
    icon: Zap,
    title: "High Voltage Lab",
    description: "Testing capability up to 600kV.",
  },
  {
    icon: Gauge,
    title: "Mechanical Testing Lab",
    description: "Mechanical load and strength verification.",
  },
  {
    icon: Radio,
    title: "Vibration Lab",
    description: "Vibration testing up to 80 metres.",
  },
  {
    icon: FlaskConical,
    title: "Chemical Analysis Lab",
    description: "Material composition and chemical analysis.",
  },
  {
    icon: Beaker,
    title: "Electrical Testing Lab",
    description: "Electrical performance and safety validation.",
  },
  {
    icon: ShieldCheck,
    title: "Rubber Testing Lab",
    description: "Elastomer testing in collaboration with DuPont.",
  },
  {
    icon: Microscope,
    title: "R&D Lab",
    description: "Research collaboration with DuPont UK and Hydro-Quebec Canada.",
  },
];

export function TestingQuality() {
  return (
    <section id="testing-quality" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
            Testing &amp; Quality
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            The One Stop Lab
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            NABL certified and accredited to ISO/IEC 17025:2005, our seven
            in-house laboratories validate every product before it reaches the
            field.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LABS.map((lab, i) => {
            const Icon = lab.icon;
            return (
              <motion.div
                key={lab.title}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-panel shadow-soft rounded-2xl p-6"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg" style={{ background: "var(--gradient-volt)" }}>
                  <Icon className="size-5 text-black/80" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {lab.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  {lab.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
