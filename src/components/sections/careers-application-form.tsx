"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, UploadCloud, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CareersApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel shadow-soft rounded-3xl p-8 sm:p-10"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
            Apply Now
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Submit your details
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            This form is a UI preview and isn&apos;t connected to a live submission
            system yet. For now, please email your resume directly to{" "}
            <a href="mailto:hr@tagcorporation.net" className="text-primary hover:underline">
              hr@tagcorporation.net
            </a>
            .
          </p>

          {submitted ? (
            <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-border py-10 text-center">
              <CheckCircle2 className="size-8 text-primary" />
              <p className="text-sm text-foreground">
                Thanks — this is a UI-only preview, so nothing was actually sent.
              </p>
              <p className="text-sm text-muted-foreground">
                Please email{" "}
                <a href="mailto:hr@tagcorporation.net" className="text-primary hover:underline">
                  hr@tagcorporation.net
                </a>{" "}
                to reach our HR team.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium text-muted-foreground">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium text-muted-foreground">
                    Email
                  </label>
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
                  <label className="mb-2 block text-xs font-medium text-muted-foreground">
                    Mobile Number
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="+91"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium text-muted-foreground">
                    Designation Applied For
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="e.g. Manufacturing Engineer"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-muted-foreground">
                  Years of Experience
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="e.g. 3 years"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-muted-foreground">
                  Resume
                </label>
                <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-input bg-background px-3.5 py-6 text-sm text-muted-foreground transition-colors hover:border-primary">
                  <UploadCloud className="size-4" />
                  {fileName ?? "Click to select a file (PDF or DOC)"}
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                  />
                </label>
              </div>

              <Button type="submit" size="lg" className="h-12 px-6 text-sm shadow-glow-primary">
                <Mail className="size-4" />
                Submit Application
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
