import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ContactDetails } from "@/components/sections/contact-details";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach TAG Corporation's Chennai headquarters for product enquiries, technical documentation, or partnership discussions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Let's power the next grid together"
        description="Reach our team for product enquiries, technical documentation, or partnership discussions."
      />
      <ContactDetails />
    </>
  );
}
