export const PRODUCT_CATEGORIES = [
  {
    id: "hardware-fittings",
    title: "Hardware Fittings",
    range: "132kV – 1200kV",
    description:
      "Precision-engineered tension and suspension fittings for extra-high-voltage transmission lines, built for demanding grid conditions.",
    href: "/products/hardware-fittings",
  },
  {
    id: "conductor-accessories",
    title: "Conductor Accessories",
    range: "Spacers & dampers",
    description:
      "Spacers, vibration dampers, and bundle configurations engineered for conductor performance and longevity.",
    href: "/products/conductor-accessories",
  },
  {
    id: "earthwire-accessories",
    title: "Earthwire Accessories",
    range: "Suspension & tension",
    description:
      "Suspension and tension clamps with vibration dampers designed for reliable earthwire protection.",
    href: "/products/earthwire-accessories",
  },
];

export const HARDWARE_FITTINGS_TIERS = [
  {
    voltage: "132kV",
    items: [
      "Single Tension String",
      "Single Suspension 'I' Pilot String",
      "Single Suspension 'I' String",
    ],
  },
  {
    voltage: "230kV",
    items: [
      "Single Suspension 'I' Pilot String Long Rod",
      "Single Tension String Long Rod",
      "Double Tension String",
      "Single Suspension 'I' String Long Rod",
    ],
  },
  {
    voltage: "400kV & 500kV",
    items: [
      "Single Suspension 'I' String",
      "Double Tension String",
      "Single Suspension 'V' String",
    ],
  },
  {
    voltage: "765kV & 800kV",
    items: [
      "Triple Tension Hardware Fitting for Hexagonal Bundle",
      "Single 'Y' Suspension Hardware Fitting for Hexagonal Bundle",
    ],
  },
  {
    voltage: "1200kV",
    items: [
      "Quadruple Tension Hardware Fitting for Octagonal Bundle",
      "Single 'V' Suspension Hardware Fitting for Octagonal Bundle",
    ],
  },
];

export const CONDUCTOR_ACCESSORIES = [
  "Triple Rigid Spacer",
  "Vibration Damper",
  "Bundle Spacer",
  "Quadruple Rigid Spacer",
  "T-Connector",
  "Twin Bundle",
  "Triple Bundle",
  "Quadruple Bundle",
  "Octagonal Bundle",
  "Hexagonal Bundle",
];

export const EARTHWIRE_ACCESSORIES = [
  "Suspension Clamp",
  "Tension Clamp",
  "Vibration Damper",
];
