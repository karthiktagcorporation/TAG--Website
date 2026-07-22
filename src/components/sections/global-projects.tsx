"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

const ONGOING = [
  { title: "Nigeria 132kV Transmission Lines", detail: "Managed by KEC" },
  { title: "Ethiopia–Kenya 500kV HVDC Interconnection", detail: "L&T / KETRACO" },
  { title: "Malawi 400kV Overhead Lines", detail: "KPTL" },
  { title: "Vietnam 220kV Transmission Work", detail: "O&C" },
];

const COMPLETED = [
  { title: "Ramagundam STPP II", detail: "400kV, India" },
  { title: "Kishtwar–Kishenpur Transmission Line", detail: "400kV, India" },
  { title: "Lusaka West–Mumbawa", detail: "330kV, Zambia" },
];

export function GlobalProjects() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-2">
              <Loader2 className="size-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Ongoing Projects</h2>
            </div>
            <div className="flex flex-col gap-4">
              {ONGOING.map((p) => (
                <div key={p.title} className="glass-panel shadow-soft rounded-2xl p-5">
                  <div className="text-sm font-semibold text-foreground">{p.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{p.detail}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-6 flex items-center gap-2">
              <CheckCircle2 className="size-5 text-accent" />
              <h2 className="text-xl font-semibold text-foreground">Completed Projects</h2>
            </div>
            <div className="flex flex-col gap-4">
              {COMPLETED.map((p) => (
                <div key={p.title} className="glass-panel shadow-soft rounded-2xl p-5">
                  <div className="text-sm font-semibold text-foreground">{p.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{p.detail}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
