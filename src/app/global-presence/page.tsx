import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { GlobalPresenceCounters } from "@/components/sections/global-presence-counters";
import { GlobalProjects } from "@/components/sections/global-projects";
import { GlobalClients } from "@/components/sections/global-clients";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Global Presence",
  description:
    "TAG Corporation powers grids across 25+ countries and four continents, with 186+ completed projects and 8 ongoing projects worldwide.",
};

export default function GlobalPresencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Global Presence"
        title="Powering grids across four continents"
        description="From our Chennai base, TAG Corporation hardware is deployed across India, Africa, Southeast Asia, and South America."
      />
      <GlobalPresenceCounters />
      <GlobalProjects />
      <GlobalClients />
      <ContactCta />
    </>
  );
}
