import { Hero } from "@/components/sections/hero";
import { Milestones } from "@/components/sections/milestones";
import { Products } from "@/components/sections/products";
import { Manufacturing } from "@/components/sections/manufacturing";
import { TestingQuality } from "@/components/sections/testing-quality";
import { GlobalPresence } from "@/components/sections/global-presence";
import { CSR } from "@/components/sections/csr";
import { CareersCta } from "@/components/sections/careers-cta";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Milestones />
      <Products />
      <Manufacturing />
      <TestingQuality />
      <GlobalPresence />
      <CSR />
      <CareersCta />
      <ContactCta />
    </>
  );
}
