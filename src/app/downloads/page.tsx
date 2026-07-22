import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { DownloadsCenter } from "@/components/sections/downloads-center";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Download TAG Corporation's certifications and company brochure, including ISO 9001, ISO 14001, ISO 45001, and NABL certificates.",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resource Center"
        title="Downloads"
        description="Certifications and company literature for TAG Corporation."
      />
      <DownloadsCenter />
    </>
  );
}
