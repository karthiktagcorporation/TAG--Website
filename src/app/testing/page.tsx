import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { TestingLabs } from "@/components/sections/testing-labs";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Testing & Quality",
  description:
    "The One Stop Lab — NABL certified and accredited to ISO/IEC 17025:2005, TAG Corporation's seven in-house laboratories validate every product before it reaches the field.",
};

export default function TestingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testing & Quality"
        title="The One Stop Lab"
        description="NABL certified and accredited to ISO/IEC 17025:2005, our seven in-house laboratories validate every product before it reaches the field."
      />
      <TestingLabs />
      <ContactCta />
    </>
  );
}
