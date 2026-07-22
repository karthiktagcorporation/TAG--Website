import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";

const QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Testing & Quality", href: "/testing" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const PRODUCT_CATEGORIES = [
  { label: "Hardware Fittings", href: "/products/hardware-fittings" },
  { label: "Conductor Accessories", href: "/products/conductor-accessories" },
  { label: "Earthwire Accessories", href: "/products/earthwire-accessories" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: Globe },
  { label: "Twitter", href: "#", icon: MessageCircle },
  { label: "LinkedIn", href: "#", icon: Share2 },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Link href="/" className="mb-4 inline-flex items-center">
            <Image
              src="/tag-logo.png"
              alt="TAG Corporation logo"
              width={1600}
              height={847}
              className="h-auto w-40 sm:w-48"
            />
          </Link>
          <p className="text-sm text-muted-foreground">
            Engineering EHV transmission line hardware and accessories for
            33kV&ndash;1200kV power grids since 1973.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground">
            Products
          </h3>
          <ul className="space-y-2.5">
            {PRODUCT_CATEGORIES.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                91, Thiruneermalai Road, Chromepet, Chennai&nbsp;-&nbsp;600044,
                Tamil Nadu, India
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href="tel:+914443183939" className="hover:text-primary">
                +91 44 4318 3939
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a
                href="mailto:salesall@tagcorporation.net"
                className="hover:text-primary"
              >
                salesall@tagcorporation.net
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-6 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-7xl text-center text-xs text-muted-foreground">
          &copy; {year} TAG Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
