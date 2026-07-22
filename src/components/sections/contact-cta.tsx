"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Address",
    value: "91, Thiruneermalai Road, Chromepet, Chennai - 600044, Tamil Nadu, India",
    href: undefined,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 44 4318 3939",
    href: "tel:+914443183939",
  },
  {
    icon: Mail,
    label: "Email",
    value: "salesall@tagcorporation.net",
    href: "mailto:salesall@tagcorporation.net",
  },
];

export function ContactCta() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel shadow-glow-primary relative overflow-hidden rounded-3xl p-10 sm:p-14"
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--gradient-copper)" }}
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
                Get in Touch
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Let&apos;s power the next grid together
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground sm:text-base">
                Reach our team for product enquiries, technical documentation,
                or partnership discussions.
              </p>
              <Button
                size="lg"
                className="mt-8 h-12 px-6 text-sm shadow-glow-primary"
                render={<Link href="/contact">Get in Touch</Link>}
              />
            </div>

            <ul className="flex flex-col gap-5">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-3">
                    <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div>
                      <div className="text-xs uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="mt-0.5 text-sm text-foreground">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} className="hover:text-primary">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
