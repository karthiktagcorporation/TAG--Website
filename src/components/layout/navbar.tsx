"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Testing & Quality", href: "/testing" },
  { label: "Global Presence", href: "/global-presence" },
  { label: "Careers", href: "/careers" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "glass-panel shadow-soft"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <motion.div
        className="absolute inset-x-0 top-0 h-[2px] origin-left"
        style={{ scaleX: scrollYProgress, background: "var(--gradient-copper)" }}
      />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Image
            src="/tag-logo-mark.png"
            alt="TAG Corporation logo"
            width={1600}
            height={645}
            priority
            className="h-7 w-auto sm:h-9"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button render={<Link href="/contact">Get in Touch</Link>} />
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex size-9 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="glass-panel border-t border-border lg:hidden"
        >
          <div className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="mt-2"
              render={
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Get in Touch
                </Link>
              }
            />
          </div>
        </motion.div>
      )}
    </nav>
  );
}
