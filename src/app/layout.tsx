import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { PageLoader } from "@/components/layout/page-loader";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tagcorporation.net"),
  title: {
    default: "TAG Corporation | EHV Transmission Line Hardware Manufacturer",
    template: "%s | TAG Corporation",
  },
  description:
    "TAG Corporation is a Chennai-based manufacturer of extra-high-voltage (EHV) transmission line hardware and accessories for 33kV to 1200kV grids, serving 25+ countries with 50+ years of engineering excellence since 1973.",
  openGraph: {
    title: "TAG Corporation | EHV Transmission Line Hardware Manufacturer",
    description:
      "Engineering the backbone of the world's power grids since 1973. EHV transmission line hardware and accessories for 33kV to 1200kV.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScrollProvider>
          <PageLoader />
          <header>
            <Navbar />
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
