"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const MILESTONES = [
  {
    year: "1973",
    title: "In-House Tool Room & Casting Unit",
    description:
      "TAG Corporation established in Chennai with an in-house tool room and aluminium casting unit.",
  },
  {
    year: "1974",
    title: "First 400kV Hardware in India",
    description:
      "Became India's first manufacturer of 400kV transmission line hardware, supplying UPSEB.",
  },
  {
    year: "1975",
    title: "TAG Laboratories Opened",
    description: "Dedicated in-house testing laboratories established.",
  },
  {
    year: "1976",
    title: "Forging Shop Established",
    description: "In-house forging capability added to support hardware manufacturing.",
  },
  {
    year: "1977",
    title: "High-Voltage Testing Facilities",
    description: "High-voltage testing facilities established for EHV product validation.",
  },
  {
    year: "1986",
    title: "HVDC Testing in Germany",
    description: "Successfully completed HVDC testing in Germany.",
  },
  {
    year: "1994",
    title: "Hydro-Québec Partnership",
    description: "Spacer damper technical partnership with Hydro-Québec, Canada, begins.",
  },
  {
    year: "2002",
    title: "800kV Project Execution",
    description: "Executed major 800kV transmission line projects.",
  },
  {
    year: "2011",
    title: "765kV Hexagonal Bundle Fittings",
    description: "Developed hexagonal bundle hardware fittings for 765kV lines.",
  },
  {
    year: "2014",
    title: "NABL Certified Laboratory",
    description: "Achieved ISO/IEC 17025:2005 NABL certified laboratory status.",
  },
  {
    year: "2017",
    title: "First ACCC Conductor Project",
    description: "Completed India's first ACCC Conductor Project in Jharkhand.",
  },
  {
    year: "2018",
    title: "New R&D Facility",
    description: "Commissioned a new state-of-the-art R&amp;D facility.",
  },
  {
    year: "2019",
    title: "Composite Insulators",
    description: "Added composite insulator development to the product range.",
  },
];

export function AboutMilestones() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.3"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

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
            Our Journey
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Five decades of engineering milestones
          </h2>
        </motion.div>

        <div ref={ref} className="relative">
          <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: lineProgress }}
            className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px origin-top sm:left-1/2 sm:-translate-x-1/2"
          >
            <div className="h-full w-full" style={{ background: "var(--gradient-copper)" }} />
          </motion.div>

          <div className="flex flex-col gap-10 sm:gap-16">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.05 }}
                className={`relative flex items-start gap-6 pl-12 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"
                }`}
              >
                <span
                  className={`absolute left-2.5 top-1 z-10 size-3.5 rounded-full border-2 border-background sm:left-auto ${
                    i % 2 === 0 ? "sm:-right-[7px]" : "sm:-left-[7px]"
                  }`}
                  style={{ background: "var(--gradient-copper)" }}
                />
                <div className="glass-panel shadow-soft w-full rounded-2xl p-6">
                  <div className="text-sm font-semibold text-primary">{m.year}</div>
                  <div className="mt-1 text-lg font-semibold text-foreground">{m.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
