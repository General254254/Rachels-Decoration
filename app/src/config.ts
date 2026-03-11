// ============================================================================
// SITE CONFIGURATION - Celebration Studio
// ============================================================================
// Edit this file to customize all content on your site.
// All text, images, and data are controlled from here.
// ============================================================================

// ----------------------------------------------------------------------------
// Navigation
// ----------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  logoAccent: string;
  navLinks: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "Celebration",
  logoAccent: ".",
  navLinks: [
    { label: "Work", href: "#gallery" },
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#packages" },
    { label: "Contact", href: "#contact" },
  ],
  ctaText: "Book a date",
};

// ----------------------------------------------------------------------------
// Hero Section
// ----------------------------------------------------------------------------

export interface HeroConfig {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
  gridRows: number;
  gridCols: number;
  pinkCells: { row: number; col: number }[];
}

export const heroConfig: HeroConfig = {
  titleLine1: "TURNING",
  titleLine2: "MOMENTS",
  subtitle: "Into memories that last forever.",
  ctaText: "Book Your Event",
  ctaHref: "#booking",
  backgroundImage: "/images/hero_collage_01.jpg",
  gridRows: 6,
  gridCols: 8,
  pinkCells: [
    { row: 0, col: 2 },
    { row: 1, col: 5 },
    { row: 2, col: 0 },
    { row: 3, col: 7 },
    { row: 4, col: 3 },
    { row: 5, col: 6 },
  ],
};

// ----------------------------------------------------------------------------
// Services Section (Product Showcase)
// ----------------------------------------------------------------------------

export interface ProductFeature {
  value: string;
  label: string;
}

export interface ProductShowcaseConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  productName: string;
  description: string;
  price: string;
  features: ProductFeature[];
  colorSwatches: string[];
  colorSwatchesLabel: string;
  ctaText: string;
  productImage: string;
  productImageAlt: string;
  decorativeText: string;
}

export const productShowcaseConfig: ProductShowcaseConfig = {
  sectionLabel: "WHAT WE DO",
  headingMain: "BOLD ",
  headingAccent: "DESIGN",
  productName: "For Every Celebration",
  description: "From intimate room surprises to full-scale events—balloons, backdrops, lighting, and detail-obsessed styling that transforms any space into something magical.",
  price: "",
  features: [
    { value: "6+", label: "Years Experience" },
    { value: "500+", label: "Events Styled" },
    { value: "100%", label: "Happy Clients" },
    { value: "24h", label: "Setup Time" },
  ],
  colorSwatches: ["#E91E8C", "#F2B6D2", "#FFD6E7", "#0A0A0A"],
  colorSwatchesLabel: "Our Palette",
  ctaText: "Explore Services",
  productImage: "/images/services_photo_01.jpg",
  productImageAlt: "Balloon installation showcase",
  decorativeText: "CELEBRATE",
};

// ----------------------------------------------------------------------------
// Gallery Section (Color Palette)
// ----------------------------------------------------------------------------

export interface ColorSwatch {
  name: string;
  nameSecondary: string;
  color: string;
  description: string;
}

export interface ColorPaletteConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  colors: ColorSwatch[];
  bottomText: string;
  decorativeText: string;
}

export const colorPaletteConfig: ColorPaletteConfig = {
  sectionLabel: "OUR WORK",
  headingMain: "RECENT ",
  headingAccent: "MOMENTS",
  colors: [
    {
      name: "Birthdays",
      nameSecondary: "01",
      color: "#E91E8C",
      description: "From first birthdays to milestone celebrations",
    },
    {
      name: "Proposals",
      nameSecondary: "02",
      color: "#F2B6D2",
      description: "Romantic setups for unforgettable moments",
    },
    {
      name: "School Events",
      nameSecondary: "03",
      color: "#FFD6E7",
      description: "Graduations, proms, and spirit days",
    },
    {
      name: "Surprises",
      nameSecondary: "04",
      color: "#C41E7F",
      description: "Room makeovers that wow",
    },
    {
      name: "Corporate",
      nameSecondary: "05",
      color: "#9C1E6A",
      description: "Professional events with style",
    },
    {
      name: "Anniversaries",
      nameSecondary: "06",
      color: "#FF73C3",
      description: "Celebrating love and commitment",
    },
    {
      name: "Baby Showers",
      nameSecondary: "07",
      color: "#FFB8E0",
      description: "Welcoming little ones in style",
    },
    {
      name: "Dinner Parties",
      nameSecondary: "08",
      color: "#7A1E54",
      description: "Elegant tablescapes and decor",
    },
  ],
  bottomText: "Click to explore our event categories",
  decorativeText: "GALLERY",
};

// ----------------------------------------------------------------------------
// Finale / Brand Philosophy Section (Testimonials/About)
// ----------------------------------------------------------------------------

export interface FinaleConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  tagline: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  decorativeText: string;
}

export const finaleConfig: FinaleConfig = {
  sectionLabel: "TESTIMONIALS",
  headingMain: "WHAT ",
  headingAccent: "CLIENTS SAY",
  tagline: "We don't just decorate spaces—we craft experiences. Every balloon, every ribbon, every light is placed with intention to create moments that take your breath away.",
  features: ["Creative Designs", "Affordable Pricing", "Photo-Ready Setups", "Fast Turnaround"],
  ctaText: "Start Your Event",
  ctaHref: "#booking",
  image: "/images/testimonial_portrait_01.jpg",
  imageAlt: "Happy client at celebration",
  decorativeText: "LOVE",
};

// ----------------------------------------------------------------------------
// Footer
// ----------------------------------------------------------------------------

export interface SocialLink {
  platform: "instagram" | "twitter" | "youtube" | "facebook" | "pinterest" | "tiktok";
  href: string;
  label: string;
}

export interface FooterLinkSection {
  title: string;
  links: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logo: string;
  logoAccent: string;
  brandDescription: string;
  socialLinks: SocialLink[];
  linkSections: FooterLinkSection[];
  contact: ContactInfo;
  legalLinks: LegalLink[];
  copyrightText: string;
  decorativeText: string;
}

export const footerConfig: FooterConfig = {
  logo: "Celebration",
  logoAccent: ".",
  brandDescription: "Turning moments into memories. Premium event decoration for every celebration.",
  socialLinks: [
    { platform: "instagram", href: "#", label: "Instagram" },
    { platform: "facebook", href: "#", label: "Facebook" },
    { platform: "pinterest", href: "#", label: "Pinterest" },
  ],
  linkSections: [
    {
      title: "Services",
      links: ["Room Decoration", "Event Styling", "Balloon Art", "Backdrops"],
    },
    {
      title: "Events",
      links: ["Birthdays", "Proposals", "School Events", "Corporate"],
    },
  ],
  contact: {
    address: "123 Celebration Ave, Los Angeles, CA 90001",
    phone: "+1 (555) 014-2200",
    email: "hello@celebration.studio",
  },
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
  copyrightText: "Celebration Studio. All rights reserved.",
  decorativeText: "STUDIO",
};

// ----------------------------------------------------------------------------
// Site Metadata
// ----------------------------------------------------------------------------

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Celebration Studio | Event Decoration & Styling",
  description: "Premium event decoration services for birthdays, proposals, school events, and celebrations. Turning moments into memories.",
  language: "en",
};

// ----------------------------------------------------------------------------
// Process Section
// ----------------------------------------------------------------------------

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProcessConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  steps: ProcessStep[];
}

export const processConfig: ProcessConfig = {
  sectionLabel: "HOW IT WORKS",
  headingMain: "PLAN · DESIGN · ",
  headingAccent: "CELEBRATE",
  steps: [
    {
      number: "01",
      title: "Book a Call",
      description: "Share your date, vibe, and must-haves. We'll listen to your vision and understand what makes your celebration unique.",
    },
    {
      number: "02",
      title: "We Design",
      description: "Moodboard, layout, and item list—approved by you. Every detail is planned to match your dream aesthetic.",
    },
    {
      number: "03",
      title: "We Install",
      description: "On-site setup, styling, and final touches. Our team handles everything while you relax and prepare to celebrate.",
    },
    {
      number: "04",
      title: "You Celebrate",
      description: "Enjoy the moment—we handle takedown. Make memories while we ensure everything looks perfect.",
    },
  ],
};

// ----------------------------------------------------------------------------
// Packages Section
// ----------------------------------------------------------------------------

export interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
}

export interface PackagesConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  packages: Package[];
}

export const packagesConfig: PackagesConfig = {
  sectionLabel: "PACKAGES",
  headingMain: "CHOOSE YOUR ",
  headingAccent: "VIBE",
  packages: [
    {
      name: "Essential",
      price: "From $299",
      description: "Perfect for room surprises or small gatherings",
      features: [
        "Balloon bouquet (20 pieces)",
        "Basic backdrop setup",
        "Table centerpiece",
        "2-hour setup time",
        "Basic lighting",
      ],
      highlighted: false,
      ctaText: "Get a Quote",
    },
    {
      name: "Signature",
      price: "From $599",
      description: "Full styling for medium-sized celebrations",
      features: [
        "Organic balloon garland",
        "Custom backdrop design",
        "Full table styling",
        "Fairy light installation",
        "4-hour setup time",
        "Photo corner setup",
      ],
      highlighted: true,
      ctaText: "Get a Quote",
    },
    {
      name: "Premium",
      price: "From $1,299",
      description: "Large events with custom builds and full production",
      features: [
        "Ceiling balloon installation",
        "Custom themed backdrop",
        "Full venue styling",
        "Professional lighting",
        "Full day setup",
        "On-site coordinator",
        "Takedown included",
      ],
      highlighted: false,
      ctaText: "Get a Quote",
    },
  ],
};

// ----------------------------------------------------------------------------
// Booking Section
// ----------------------------------------------------------------------------

export interface BookingConfig {
  sectionLabel: string;
  headingMain: string;
  headingAccent: string;
  description: string;
  ctaText: string;
}

export const bookingConfig: BookingConfig = {
  sectionLabel: "GET STARTED",
  headingMain: "LET'S PLAN ",
  headingAccent: "YOUR DAY",
  description: "Tell us your date, location, and vibe. We'll reply with a moodboard and a clear quote within 24 hours.",
  ctaText: "Send Request",
};

// ----------------------------------------------------------------------------
// Gallery Images
// ----------------------------------------------------------------------------

export const galleryImages = [
  { src: "/images/gallery_moment_01.jpg", alt: "Birthday celebration", category: "Birthdays" },
  { src: "/images/gallery_moment_02.jpg", alt: "Romantic proposal setup", category: "Proposals" },
  { src: "/images/gallery_moment_03.jpg", alt: "School graduation event", category: "School Events" },
  { src: "/images/gallery_moment_04.jpg", alt: "Surprise room decoration", category: "Surprises" },
  { src: "/images/gallery_moment_05.jpg", alt: "Elegant dinner party", category: "Dinner Parties" },
  { src: "/images/gallery_moment_06.jpg", alt: "Baby shower celebration", category: "Baby Showers" },
  { src: "/images/gallery_moment_07.jpg", alt: "Corporate event", category: "Corporate" },
  { src: "/images/gallery_moment_08.jpg", alt: "Anniversary celebration", category: "Anniversaries" },
];

// ----------------------------------------------------------------------------
// Testimonials
// ----------------------------------------------------------------------------

export interface Testimonial {
  quote: string;
  name: string;
  event: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote: "They turned our living room into a dream. Every balloon, every light—perfect. Our daughter's face when she saw it was priceless!",
    name: "Amara & Team",
    event: "Birthday Surprise, 2026",
    image: "/images/testimonial_portrait_01.jpg",
    rating: 5,
  },
  {
    quote: "Professional, creative, and so easy to work with. The proposal setup was beyond anything I could have imagined. She said yes!",
    name: "Michael Chen",
    event: "Proposal, 2026",
    image: "/images/testimonial_portrait_02.jpg",
    rating: 5,
  },
  {
    quote: "Our school graduation looked like something out of a magazine. Parents and students couldn't stop taking photos!",
    name: "Sarah Johnson",
    event: "School Graduation, 2025",
    image: "/images/testimonial_portrait_03.jpg",
    rating: 5,
  },
];
