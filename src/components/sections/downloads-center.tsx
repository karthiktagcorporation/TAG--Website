"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Search, ShieldCheck } from "lucide-react";

const DOCUMENTS = [
  {
    title: "TAG Unit I ISO Certificate",
    detail: "ISO certificate for Unit I (ref. 91105)",
    category: "Certifications",
    fileType: "PDF",
    href: "#",
  },
  {
    title: "TAG Brochure",
    detail: "2018 company brochure",
    category: "Brochures",
    fileType: "PDF",
    href: "#",
  },
  {
    title: "TAG II ISO 9001:2015",
    detail: "Quality management certification",
    category: "Certifications",
    fileType: "PDF",
    href: "#",
  },
  {
    title: "TAG II ISO 14001:2015",
    detail: "Environmental management certification",
    category: "Certifications",
    fileType: "PDF",
    href: "#",
  },
  {
    title: "TAG II ISO 45001:2018",
    detail: "Occupational health & safety certification",
    category: "Certifications",
    fileType: "PDF",
    href: "#",
  },
];

const CATEGORIES = ["All", "Certifications", "Brochures"];

export function DownloadsCenter() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return DOCUMENTS.filter((doc) => {
      const matchesCategory = category === "All" || doc.category === category;
      const matchesQuery = doc.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search documents..."
              className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-primary"
            />
          </div>
          <div className="flex gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                  category === c
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((doc, i) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="glass-panel shadow-soft flex items-start gap-4 rounded-2xl p-6"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                {doc.category === "Certifications" ? (
                  <ShieldCheck className="size-5" />
                ) : (
                  <FileText className="size-5" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-foreground">{doc.title}</h3>
                  <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                    {doc.fileType}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{doc.detail}</p>
                <a
                  href={doc.href}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                >
                  <Download className="size-3.5" />
                  Download
                </a>
              </div>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full py-10 text-center text-sm text-muted-foreground">
              No documents match your search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
