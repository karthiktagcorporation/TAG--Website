import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { AboutMilestones } from "@/components/sections/about-milestones";
import { AboutVision } from "@/components/sections/about-vision";
import { AboutGlobal } from "@/components/sections/about-global";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Since 1972/1973, TAG Corporation has been a leading manufacturer of transmission line fittings and accessories in India, spanning 33kV to 1200kV with 25%+ market share across the Indian subcontinent.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About TAG Corporation"
        title="Engineering India's power grid since 1972"
        description="Since 1972/1973, TAG Corporation has been a leading manufacturer of transmission line fittings and accessories in India, spanning the 33kV&ndash;1200kV range and commanding 25%+ market share across the Indian subcontinent."
      />
      <AboutMilestones />
      <AboutVision />
      <AboutGlobal />
      <ContactCta />
    </>
  );
}
