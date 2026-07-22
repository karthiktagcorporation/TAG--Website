"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Printer,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTACT_LINES = [
  { icon: MapPin, label: "Address", value: "91, Thiruneermalai Road, Chromepet, Chennai - 600044, Tamil Nadu, India" },
  { icon: Phone, label: "Main Office", value: "+91 44 4318 3939", href: "tel:+914443183939" },
  { icon: Printer, label: "Fax", value: "+91 44 2221 3299" },
  { icon: Phone, label: "Hardware Division", value: "+91 98848 00235", href: "tel:+919884800235" },
  { icon: Phone, label: "Testing Division", value: "+91 98848 00393", href: "tel:+919884800393" },
  { icon: Mail, label: "Sales", value: "salesall@tagcorporation.net", href: "mailto:salesall@tagcorporation.net" },
  { icon: Mail, label: "HR", value: "hr@tagcorporation.net", href: "mailto:hr@tagcorporation.net" },
  { icon: Mail, label: "Testing", value: "testing@tagcorporation.net", href: "mailto:testing@tagcorporation.net" },
];

const QUICK_ACTIONS = [
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919884800235" },
  { icon: Phone, label: "Call Us", href: "tel:+914443183939" },
  { icon: Mail, label: "Email Us", href: "mailto:salesall@tagcorporation.net" },
];

function ChennaiMapGraphic() {
  return (
    <svg viewBox="0 0 400 280" className="w-full max-w-md">
      <rect x="0" y="0" width="400" height="280" rx="20" fill="var(--muted)" opacity="0.4" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={`h${i}`} x1="0" y1={i * 56} x2="400" y2={i * 56} stroke="var(--border)" strokeWidth="1" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={`v${i}`} x1={i * 57} y1="0" x2={i * 57} y2="280" stroke="var(--border)" strokeWidth="1" />
      ))}
      <path
        d="M40,240 C90,180 130,220 170,160 C210,100 260,140 300,80 C330,40 360,60 380,20"
        stroke="var(--accent)"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      <circle cx="200" cy="140" r="10" fill="var(--primary)" opacity="0.2" />
      <circle cx="200" cy="140" r="5" fill="var(--primary)" />
      <text x="215" y="135" fontSize="12" fill="var(--foreground)" fontWeight="600">
        Chromepet, Chennai
      </text>
      <text x="215" y="150" fontSize="10" fill="var(--muted-foreground)">
        TAG Corporation HQ
      </text>
    </svg>
  );
}

export function ContactDetails() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap gap-3">
          {QUICK_ACTIONS.map((action) => {
            const Icon = action.icon;
            return (
              <a
                key={action.label}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-panel shadow-soft flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
              >
                <Icon className="size-4 text-primary" />
                {action.label}
              </a>
            );
          })}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel shadow-soft rounded-2xl p-6 sm:p-8"
            >
              <ul className="flex flex-col gap-5">
                {CONTACT_LINES.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-3">
                      <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                      <div>
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">
                          {item.label}
                        </div>
                        <div className="mt-0.5 text-sm text-foreground">{item.value}</div>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel shadow-soft flex items-center justify-center rounded-2xl p-6"
            >
              <ChennaiMapGraphic />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-panel shadow-glow-primary rounded-2xl p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold text-foreground">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              This form is a UI preview and isn&apos;t connected to a live
              submission system yet — please use the contact details alongside
              it to reach us directly.
            </p>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-border py-10 text-center">
                <CheckCircle2 className="size-8 text-primary" />
                <p className="text-sm text-foreground">
                  Thanks — this is a UI-only preview, so nothing was actually sent.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium text-muted-foreground">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium text-muted-foreground">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium text-muted-foreground">Phone</label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="+91"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium text-muted-foreground">Subject</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium text-muted-foreground">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="Tell us more..."
                  />
                </div>
                <Button type="submit" size="lg" className="h-12 px-6 text-sm shadow-glow-primary">
                  <Mail className="size-4" />
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
