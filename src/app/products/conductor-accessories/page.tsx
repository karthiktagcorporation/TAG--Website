import type { Metadata } from "next";
import { Link2 } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { RelatedCategories } from "@/components/sections/related-categories";
import { CONDUCTOR_ACCESSORIES } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Conductor Accessories",
  description:
    "Spacers, vibration dampers, and bundle configurations engineered by TAG Corporation for conductor performance and longevity.",
};

export default function ConductorAccessoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products / Conductor Accessories"
        title="Conductor Accessories"
        description="Spacers, vibration dampers, and bundle configurations engineered for conductor performance and longevity."
      />
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Conductor Accessories" },
            ]}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CONDUCTOR_ACCESSORIES.map((item) => (
              <div
                key={item}
                className="glass-panel shadow-soft rounded-2xl p-6"
              >
                <div
                  className="mb-4 flex size-11 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-volt)" }}
                >
                  <Link2 className="size-5 text-black/80" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <RelatedCategories current="conductor-accessories" />
    </>
  );
}
