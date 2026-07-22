import type { Metadata } from "next";
import { Zap } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { RelatedCategories } from "@/components/sections/related-categories";
import { HARDWARE_FITTINGS_TIERS } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Hardware Fittings",
  description:
    "Tension and suspension hardware fittings from 132kV through 1200kV, engineered by TAG Corporation for extra-high-voltage transmission lines.",
};

export default function HardwareFittingsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products / Hardware Fittings"
        title="Hardware Fittings"
        description="Precision-engineered tension and suspension fittings for extra-high-voltage transmission lines, from 132kV through 1200kV."
      />
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Products", href: "/products" },
              { label: "Hardware Fittings" },
            ]}
          />
          <div className="flex flex-col gap-10">
            {HARDWARE_FITTINGS_TIERS.map((tier) => (
              <div key={tier.voltage} className="glass-panel shadow-soft rounded-2xl p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="flex size-10 items-center justify-center rounded-lg"
                    style={{ background: "var(--gradient-copper)" }}
                  >
                    <Zap className="size-5 text-black/80" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">{tier.voltage}</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {tier.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <RelatedCategories current="hardware-fittings" />
    </>
  );
}
