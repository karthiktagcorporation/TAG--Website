"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const REGIONS = [
  { name: "India", detail: "Home base" },
  { name: "Africa", detail: "Kenya, Zambia, Botswana, Mozambique" },
  { name: "Southeast Asia", detail: "Vietnam, Myanmar" },
  { name: "South America", detail: "Guyana, Chile" },
];

const CLIENTS = ["POWERGRID", "APTRANSCO", "NTPC", "KEC", "L&T", "TATA", "KPTL"];

const COUNTERS = [
  { key: "countries", label: "Countries Served", value: 25, suffix: "+" },
  { key: "completed", label: "Completed Projects", value: 186, suffix: "+" },
  { key: "ongoing", label: "Ongoing Projects", value: 8, suffix: "" },
];

const DOTS = [
  { cx: 90, cy: 130 },
  { cx: 260, cy: 90 },
  { cx: 320, cy: 150 },
  { cx: 210, cy: 210 },
  { cx: 140, cy: 220 },
  { cx: 350, cy: 240 },
  { cx: 60, cy: 190 },
];

function getInitialCounts() {
  if (typeof window === "undefined") return COUNTERS.map(() => 0);
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return reducedMotion ? COUNTERS.map((c) => c.value) : COUNTERS.map(() => 0);
}

export function GlobalPresence() {
  const counterRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(getInitialCounts);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const el = counterRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets = COUNTERS.map((c) => ({ value: 0, config: c }));
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        once: true,
        onEnter: () => {
          targets.forEach((t, i) => {
            gsap.to(t, {
              value: t.config.value,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                setCounts((prev) => {
                  const next = [...prev];
                  next[i] = Math.round(t.value);
                  return next;
                });
              },
            });
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="global-presence" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
            Global Presence
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Powering grids across four continents
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div ref={counterRef} className="grid grid-cols-3 gap-4">
              {COUNTERS.map((c, i) => (
                <div
                  key={c.key}
                  className="glass-panel shadow-soft rounded-2xl p-5 text-center"
                >
                  <div className="text-3xl font-semibold text-gradient-copper sm:text-4xl">
                    {counts[i]}
                    {c.suffix}
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    {c.label}
                  </div>
                </div>
              ))}
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {REGIONS.map((r) => (
                <li
                  key={r.name}
                  className="rounded-xl border border-border p-4"
                >
                  <div className="text-sm font-semibold text-foreground">
                    {r.name}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {r.detail}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel shadow-soft flex items-center justify-center rounded-2xl p-8">
            <svg viewBox="0 0 400 300" className="w-full max-w-md">
              <rect
                x="0"
                y="0"
                width="400"
                height="300"
                rx="16"
                fill="transparent"
              />
              {DOTS.map((d, i) => (
                <g key={i}>
                  <circle
                    cx={d.cx}
                    cy={d.cy}
                    r="14"
                    fill="var(--primary)"
                    opacity="0.12"
                  />
                  <circle cx={d.cx} cy={d.cy} r="5" fill="var(--primary)" />
                </g>
              ))}
              {DOTS.slice(1).map((d, i) => (
                <line
                  key={i}
                  x1={DOTS[0].cx}
                  y1={DOTS[0].cy}
                  x2={d.cx}
                  y2={d.cy}
                  stroke="var(--accent)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.4"
                />
              ))}
            </svg>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-border py-6">
          <p className="mb-4 text-center text-xs uppercase tracking-widest text-muted-foreground">
            Trusted by leading power sector organizations
          </p>
          <div className="relative flex overflow-hidden">
            <motion.div
              className="flex shrink-0 items-center gap-16 pr-16"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 22, ease: "linear", repeat: Infinity }}
            >
              {[...CLIENTS, ...CLIENTS].map((client, i) => (
                <span
                  key={`${client}-${i}`}
                  className="text-lg font-semibold tracking-wide text-muted-foreground"
                >
                  {client}
                </span>
              ))}
            </motion.div>
            <motion.div
              className="flex shrink-0 items-center gap-16 pr-16"
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 22, ease: "linear", repeat: Infinity }}
              aria-hidden
            >
              {[...CLIENTS, ...CLIENTS].map((client, i) => (
                <span
                  key={`dup-${client}-${i}`}
                  className="text-lg font-semibold tracking-wide text-muted-foreground"
                >
                  {client}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
