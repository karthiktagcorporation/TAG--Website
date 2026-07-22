"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const MILESTONES = [
  {
    year: "1973",
    title: "Company Founded",
    description: "TAG Corporation established in Chennai, Tamil Nadu, India.",
  },
  {
    year: "1974",
    title: "First 400kV Hardware",
    description:
      "Manufactured India's first 400kV transmission line hardware.",
  },
  {
    year: "1994",
    title: "Hydro-Quebec Partnership",
    description: "Formed a technical partnership with Hydro-Quebec, Canada.",
  },
  {
    year: "2014",
    title: "NABL Certification",
    description: "Certified to NABL ISO/IEC 17025:2005 for testing labs.",
  },
  {
    year: "2019",
    title: "Composite Insulators",
    description: "Added composite insulators to the product range.",
  },
];

export function Milestones() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.3"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  return (
    <section id="about" className="relative py-24 sm:py-32">
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
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative flex items-start gap-6 pl-12 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0
                    ? "sm:pr-12 sm:text-right"
                    : "sm:ml-auto sm:pl-12"
                }`}
              >
                <span
                  className={`absolute left-2.5 top-1 z-10 size-3.5 rounded-full border-2 border-background sm:left-auto ${
                    i % 2 === 0 ? "sm:-right-[7px]" : "sm:-left-[7px]"
                  }`}
                  style={{ background: "var(--gradient-copper)" }}
                />
                <div className="glass-panel shadow-soft w-full rounded-2xl p-6">
                  <div className="text-sm font-semibold text-primary">
                    {m.year}
                  </div>
                  <div className="mt-1 text-lg font-semibold text-foreground">
                    {m.title}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {m.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
