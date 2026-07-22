import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/lib/products-data";

export function RelatedCategories({ current }: { current: string }) {
  const others = PRODUCT_CATEGORIES.filter((c) => c.id !== current);
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-xs font-medium uppercase tracking-widest text-primary">
          Related Categories
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {others.map((c) => (
            <Link
              key={c.id}
              href={c.href}
              className="group glass-panel shadow-soft flex items-center justify-between rounded-2xl p-6 transition-colors hover:border-primary/40"
            >
              <div>
                <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.range}</p>
              </div>
              <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
