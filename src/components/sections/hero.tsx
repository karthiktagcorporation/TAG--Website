"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const STATS = [
  { label: "50+ Years", sub: "Since 1973" },
  { label: "25%+ Market Share", sub: "Indian subcontinent" },
  { label: "25+ Countries", sub: "Global footprint" },
  { label: "186+ Projects", sub: "Completed" },
];

function MagneticButton({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.3 0.06 60 / 40%), transparent), radial-gradient(ellipse 60% 50% at 100% 100%, oklch(0.25 0.06 220 / 35%), transparent), var(--background)",
          }}
        />
        <div className="bg-grid-pattern absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <svg
          className="absolute right-[-10%] top-1/4 h-[600px] w-[600px] opacity-20 sm:opacity-30"
          viewBox="0 0 400 400"
          fill="none"
        >
          {[80, 130, 180].map((r) => (
            <circle
              key={r}
              cx="200"
              cy="200"
              r={r}
              stroke="url(#heroRing)"
              strokeWidth="1"
            />
          ))}
          <defs>
            <linearGradient id="heroRing" x1="0" y1="0" x2="400" y2="400">
              <stop offset="0%" stopColor="oklch(0.78 0.16 70)" />
              <stop offset="100%" stopColor="oklch(0.72 0.14 220)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            EHV Hardware Manufacturer &middot; Chennai, India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Engineering the Backbone of the{" "}
            <span className="text-gradient-copper">World&apos;s Power Grids</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            For over 50 years, TAG Corporation has manufactured extra-high-voltage
            (EHV) transmission line hardware and accessories spanning 33kV to
            1200kV &mdash; commanding 25%+ market share across the Indian
            subcontinent since 1973.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton>
              <Button
                size="lg"
                className="h-12 px-6 text-sm shadow-glow-primary"
                render={
                  <Link href="/products">
                    Explore Products
                    <ArrowRight className="size-4" />
                  </Link>
                }
              />
            </MagneticButton>
            <MagneticButton>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-6 text-sm"
                render={<Link href="/contact">Contact Us</Link>}
              />
            </MagneticButton>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 self-center">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-panel shadow-soft rounded-2xl p-5"
            >
              <div className="text-2xl font-semibold text-foreground sm:text-3xl">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
