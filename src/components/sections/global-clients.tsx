"use client";

import { motion } from "framer-motion";

const MAJOR_CLIENTS = ["PGCIL", "NTPC", "NLC", "MMTC", "APSEB", "UPSEB", "TNEB", "KPLC", "BPC"];

const SEGMENTS = [
  {
    title: "International EPC",
    clients: ["TATA", "KEC"],
  },
  {
    title: "International Utility",
    clients: ["KETRACO", "TCN", "ZESCO", "EVN"],
  },
  {
    title: "Domestic EPC",
    clients: [
      "TATA",
      "KEC",
      "KPTL",
      "GAMMON",
      "L&T",
      "EMC",
      "JSL",
      "JYOTI ENGINEERS",
      "ADITYA",
      "ASTER",
      "SHYAMA",
      "LANCO",
      "HYUNDAI",
      "ICOMM",
      "MEIL",
      "KCL",
      "STERLITE",
      "ESSEL",
      "ISOLUX",
    ],
  },
  {
    title: "Domestic Utility",
    clients: [
      "PGCIL",
      "TNEB",
      "APTRANSCO",
      "OPTCL",
      "MAHATRANSCO",
      "MPPTCL",
      "UPPTCL",
      "WBSETCL",
      "NTPC",
      "TSTRANSCO",
      "GETCO",
      "RRVPNL",
    ],
  },
];

export function GlobalClients() {
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
            Trusted By
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Major clients &amp; partners
          </h2>
        </motion.div>

        <div className="mb-12 flex flex-wrap gap-3">
          {MAJOR_CLIENTS.map((c) => (
            <span
              key={c}
              className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {SEGMENTS.map((segment, i) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-panel shadow-soft rounded-2xl p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
                {segment.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {segment.clients.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
