"use client";

import { motion } from "framer-motion";
import { Beaker, FlaskConical, Gauge, Microscope, Radio, ShieldCheck, Zap } from "lucide-react";

const LABS = [
  {
    icon: Zap,
    title: "High Voltage Lab",
    description: "Corona and voltage distribution testing on EHV equipment up to 600kV.",
  },
  {
    icon: Gauge,
    title: "Mechanical Lab",
    description: "Tensile strength, compression, torsion, bending, and slipping tests on hardware fittings.",
  },
  {
    icon: Radio,
    title: "Vibration Lab",
    description: "Tests insulator strings and conductors for vibration performance up to 80 metres.",
  },
  {
    icon: FlaskConical,
    title: "Chemical Analysis Lab",
    description: "Alloy composition analysis using microscopes and ozone testing apparatus.",
  },
  {
    icon: Beaker,
    title: "Electrical Lab",
    description: "Magnetic power loss testing along with AC and DC resistance measurement.",
  },
  {
    icon: ShieldCheck,
    title: "Rubber Testing Lab",
    description: "Elastomer testing capability developed in collaboration with DuPont.",
  },
  {
    icon: Microscope,
    title: "R&D Lab",
    description: "Research and development drawing on expertise from DuPont UK and Hydro-Québec Canada.",
  },
];

export function TestingLabs() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LABS.map((lab, i) => {
            const Icon = lab.icon;
            return (
              <motion.div
                key={lab.title}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-panel shadow-soft rounded-2xl p-7"
              >
                <div
                  className="mb-4 flex size-11 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-volt)" }}
                >
                  <Icon className="size-5 text-black/80" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{lab.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{lab.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
