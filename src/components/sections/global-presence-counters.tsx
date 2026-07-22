"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const REGIONS = [
  { name: "India", detail: "Home base" },
  { name: "Africa", detail: "Kenya, Zambia, Botswana, Mozambique" },
  { name: "Southeast Asia", detail: "Vietnam, Myanmar" },
  { name: "South America", detail: "Guyana, Chile" },
  { name: "Also served", detail: "Georgia, Sri Lanka" },
];

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
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return reducedMotion ? COUNTERS.map((c) => c.value) : COUNTERS.map(() => 0);
}

export function GlobalPresenceCounters() {
  const counterRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(getInitialCounts);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div ref={counterRef} className="grid grid-cols-3 gap-4">
              {COUNTERS.map((c, i) => (
                <div key={c.key} className="glass-panel shadow-soft rounded-2xl p-5 text-center">
                  <div className="text-3xl font-semibold text-gradient-copper sm:text-4xl">
                    {counts[i]}
                    {c.suffix}
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">{c.label}</div>
                </div>
              ))}
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {REGIONS.map((r) => (
                <li key={r.name} className="rounded-xl border border-border p-4">
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{r.detail}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel shadow-soft flex items-center justify-center rounded-2xl p-8">
            <svg viewBox="0 0 400 300" className="w-full max-w-md">
              <rect x="0" y="0" width="400" height="300" rx="16" fill="transparent" />
              {DOTS.map((d, i) => (
                <g key={i}>
                  <circle cx={d.cx} cy={d.cy} r="14" fill="var(--primary)" opacity="0.12" />
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
      </div>
    </section>
  );
}
