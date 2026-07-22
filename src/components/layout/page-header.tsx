"use client";

import { motion } from "framer-motion";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.85 0.05 60 / 45%), transparent), var(--background)",
          }}
        />
        <div className="bg-grid-pattern absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-xs font-medium uppercase tracking-widest text-primary"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
