import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Cable, Link2, Zap } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { PRODUCT_CATEGORIES } from "@/lib/products-data";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Products",
  description:
    "TAG Corporation manufactures tension and suspension hardware for conductors and insulators, from 66kV to 1200kV and UTS tensile strength between 70 and 1280 kN.",
};

const ICONS = { "hardware-fittings": Zap, "conductor-accessories": Link2, "earthwire-accessories": Cable };

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product Range"
        title="Built for every point on the grid"
        description="TAG Corporation manufactures tension and suspension hardware for conductors and insulators, from 66kV to 1200kV and UTS tensile strength between 70 and 1280 kN."
      />
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {PRODUCT_CATEGORIES.map((product) => {
              const Icon = ICONS[product.id as keyof typeof ICONS];
              return (
                <Link
                  key={product.id}
                  href={product.href}
                  className="group glass-panel shadow-soft relative overflow-hidden rounded-2xl p-8 transition-shadow hover:shadow-glow-primary"
                >
                  <div
                    className="absolute -right-10 -top-10 size-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                    style={{ background: "var(--gradient-copper)" }}
                  />
                  <div
                    className="relative mb-6 flex size-12 items-center justify-center rounded-xl"
                    style={{ background: "var(--gradient-copper)" }}
                  >
                    <Icon className="size-6 text-black/80" />
                  </div>
                  <h3 className="relative text-xl font-semibold text-foreground">
                    {product.title}
                  </h3>
                  <p className="relative mt-1 text-xs font-medium uppercase tracking-wide text-primary">
                    {product.range}
                  </p>
                  <p className="relative mt-4 text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <span className="relative mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    View Details
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
