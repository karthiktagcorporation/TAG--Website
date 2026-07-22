"use client";

import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const COUNTRIES = [
  "Guyana",
  "Georgia",
  "Myanmar",
  "Vietnam",
  "Chile",
  "Sri Lanka",
  "Botswana",
  "Mozambique",
  "Kenya",
  "Zambia",
];

export function AboutGlobal() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel shadow-soft rounded-3xl p-10 sm:p-14"
        >
          <div className="mb-4 flex size-12 items-center justify-center rounded-xl" style={{ background: "var(--gradient-copper)" }}>
            <Globe2 className="size-6 text-black/80" />
          </div>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
            Global Reach
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Serving 25+ countries across four continents
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {COUNTRIES.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
