import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ManufacturingUnits } from "@/components/sections/manufacturing-units";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Manufacturing",
  description:
    "Nine vertically-integrated manufacturing units within a 10km radius in Chennai, from aluminium extrusion and forging to galvanizing and tool making.",
};

export default function ManufacturingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Manufacturing"
        title="Vertically integrated, from raw material to finished part"
        description="Nine manufacturing units within a 10km radius in Chennai give TAG Corporation full control over quality, lead time, and cost — from raw aluminium and steel to finished, tested hardware."
      />
      <ManufacturingUnits />
      <ContactCta />
    </>
  );
}
