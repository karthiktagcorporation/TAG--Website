import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { CareersPillars } from "@/components/sections/careers-pillars";
import { CareersOpenings } from "@/components/sections/careers-openings";
import { CareersApplicationForm } from "@/components/sections/careers-application-form";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Why choose TAG Corporation? Explore our vision, values, current openings, and apply to join our engineering team in Chennai.",
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Why choose TAG Corporation?"
        description="We build careers the same way we build hardware — for the long term, with integrity, and to the highest standard."
      />
      <CareersPillars />
      <CareersOpenings />
      <CareersApplicationForm />
    </>
  );
}
