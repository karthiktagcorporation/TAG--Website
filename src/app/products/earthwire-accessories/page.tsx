import type { Metadata } from "next";
import { Cable } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { RelatedCategories } from "@/components/sections/related-categories";
import { EARTHWIRE_ACCESSORIES } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Earthwire Accessories",
  description:
    "Suspension and tension clamps with vibration dampers designed by TAG Corporation for reliable earthwire protection.",
};

export default function EarthwireAccessoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products / Earthwire Accessories"
        title="Earthwire Accessories"
        description="Suspension and tension clamps with vibration dampers designed for reliable earthwire protection."
      />
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Earthwire Accessories" },
            ]}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EARTHWIRE_ACCESSORIES.map((item) => (
              <div key={item} className="glass-panel shadow-soft rounded-2xl p-6">
                <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Cable className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <RelatedCategories current="earthwire-accessories" />
    </>
  );
}
