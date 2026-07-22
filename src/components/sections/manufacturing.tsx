"use client";

import { motion } from "framer-motion";
import { Boxes, Flame, Layers, Puzzle, ShieldCheck, Wrench } from "lucide-react";

const UNITS = [
  {
    icon: Layers,
    title: "Aluminium Extrusion",
    description: "In-house extrusion for precision aluminium profiles used across the product range.",
  },
  {
    icon: Flame,
    title: "Forging",
    description: "2,500 tons per year of forged components for high-strength hardware.",
  },
  {
    icon: ShieldCheck,
    title: "Galvanizing",
    description: "7,000 tons per year of hot-dip galvanizing for corrosion resistance.",
  },
  {
    icon: Wrench,
    title: "Machining",
    description: "Precision CNC machining for tight-tolerance transmission line components.",
  },
  {
    icon: Boxes,
    title: "Die Casting",
    description: "High-volume die casting supporting consistent hardware quality.",
  },
  {
    icon: Puzzle,
    title: "Composite Insulator Manufacturing",
    description: "Dedicated production for composite insulators added to the range in 2019.",
  },
];

export function Manufacturing() {
  return (
    <section id="manufacturing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
              Manufacturing
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Vertically integrated, from raw material to finished part
            </h2>
          </div>
          <p className="glass-panel shadow-soft w-fit shrink-0 rounded-full px-5 py-2.5 text-sm font-medium text-foreground">
            9 units &middot; 10km radius &middot; Chennai
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {UNITS.map((unit, i) => {
            const Icon = unit.icon;
            return (
              <motion.div
                key={unit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -4, borderColor: "var(--primary)" }}
                className="glass-panel shadow-soft rounded-2xl p-6 transition-colors"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {unit.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {unit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
