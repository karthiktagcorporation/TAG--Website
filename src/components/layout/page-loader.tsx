"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

function getReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [reducedMotion] = useState(getReducedMotion);

  useEffect(() => {
    const timeout = setTimeout(
      () => setVisible(false),
      reducedMotion ? 0 : 1300
    );
    return () => clearTimeout(timeout);
  }, [reducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7 bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.5, ease: "easeInOut" }}
        >
          <div className="relative flex items-center justify-center">
            {!reducedMotion &&
              [0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                  style={{ borderColor: "oklch(0.78 0.16 70 / 45%)" }}
                  initial={{ width: 40, height: 40, opacity: 0.6 }}
                  animate={{ width: 220, height: 220, opacity: 0 }}
                  transition={{
                    duration: 1.6,
                    ease: "easeOut",
                    delay: i * 0.35,
                    repeat: Infinity,
                    repeatDelay: 0.1,
                  }}
                />
              ))}

            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reducedMotion ? 0 : 0.4, ease: "easeOut" }}
            >
              <Image
                src="/tag-logo.png"
                alt="TAG Corporation logo"
                width={1600}
                height={847}
                priority
                className="h-16 w-auto sm:h-20"
              />
              {!reducedMotion && (
                <motion.div
                  className="absolute inset-0 bg-background"
                  initial={{ clipPath: "inset(0 0% 0 0)" }}
                  animate={{ clipPath: "inset(0 100% 0 0)" }}
                  transition={{ duration: 1.0, ease: "easeInOut" }}
                />
              )}
              {!reducedMotion && (
                <motion.div
                  className="pointer-events-none absolute inset-y-0 w-8"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, oklch(0.78 0.16 70 / 55%), transparent)",
                  }}
                  initial={{ left: "-10%" }}
                  animate={{ left: "110%" }}
                  transition={{ duration: 1.0, ease: "easeInOut" }}
                />
              )}
            </motion.div>
          </div>

          <div className="h-0.5 w-40 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full w-full"
              style={{ background: "var(--gradient-copper)" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: reducedMotion ? 0 : 1.1,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
