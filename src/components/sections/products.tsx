"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Cable, Link2, Zap } from "lucide-react";

const PRODUCTS = [
  {
    id: "hardware-fittings",
    icon: Zap,
    title: "Hardware Fittings",
    range: "132kV – 1200kV",
    description:
      "Precision-engineered fittings for extra-high-voltage transmission lines, built for demanding grid conditions.",
  },
  {
    id: "conductor-accessories",
    icon: Link2,
    title: "Conductor Accessories",
    range: "Spacers & dampers",
    description:
      "Spacers, vibration dampers, and bundle configurations engineered for conductor performance and longevity.",
  },
  {
    id: "earthwire-accessories",
    icon: Cable,
    title: "Earthwire Accessories",
    range: "Suspension & tension",
    description:
      "Suspension and tension clamps with vibration dampers designed for reliable earthwire protection.",
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
            Product Range
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Built for every point on the grid
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group glass-panel shadow-soft relative overflow-hidden rounded-2xl p-8 transition-shadow hover:shadow-glow-primary"
              >
                <div
                  className="absolute -right-10 -top-10 size-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: "var(--gradient-copper)" }}
                />
                <div
                  className="relative mb-6 flex size-12 items-center justify-center rounded-xl"
                  style={{ background: "var(--gradient-copper)" }}
                >
                  <Icon className="size-6 text-black/80" />
                </div>
                <h3 className="relative text-xl font-semibold text-foreground">
                  {product.title}
                </h3>
                <p className="relative mt-1 text-xs font-medium uppercase tracking-wide text-primary">
                  {product.range}
                </p>
                <p className="relative mt-4 text-sm text-muted-foreground">
                  {product.description}
                </p>
                <Link
                  href={`/products/${product.id}`}
                  className="relative mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  View Details
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
