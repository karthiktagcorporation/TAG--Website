"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Cog,
  Flame,
  Hammer,
  Layers,
  ShieldCheck,
  Sparkles,
  SquareStack,
  Wrench,
} from "lucide-react";

const UNITS = [
  {
    icon: Layers,
    title: "Aluminium Extrusion Plant",
    description: "In-house extrusion for precision aluminium profiles used across the product range.",
  },
  {
    icon: Cog,
    title: "Aluminium Fabrication Plant",
    description: "CNC bending and welding for grading rings, corona rings, and clamps.",
  },
  {
    icon: SquareStack,
    title: "Helical Rod Fabrication Unit",
    description: "Armor rods, retaining rods, and OPGW fittings fabricated in-house.",
  },
  {
    icon: Flame,
    title: "Forging Unit",
    description: "2,500 tons per year of forged components, established 1976, with heat treatment, blasting, and testing on site.",
  },
  {
    icon: Sparkles,
    title: "Rubber Processing Shop",
    description: "Damping elements, liners, grips, and spacers produced from neoprene compounds.",
  },
  {
    icon: Boxes,
    title: "Aluminium Die Casting Shop",
    description: "Gravity and pressure die casting for high-volume, consistent hardware quality.",
  },
  {
    icon: Hammer,
    title: "Steel Fabrication Unit",
    description: "CNC plasma cutting and drilling for yoke plates and links.",
  },
  {
    icon: ShieldCheck,
    title: "Galvanizing Plant",
    description: "7,000 tons per year of hot-dip galvanizing for corrosion resistance.",
  },
  {
    icon: Wrench,
    title: "Tool Room",
    description: "In-house design and manufacture of dies, jigs, and fixtures.",
  },
];

export function ManufacturingUnits() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="glass-panel shadow-soft mb-10 w-fit rounded-full px-5 py-2.5 text-sm font-medium text-foreground">
          9 units &middot; 10km radius &middot; Chennai
        </p>
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
                <h3 className="text-base font-semibold text-foreground">{unit.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{unit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
