import ServicesGrid from "@/app/components/ServicesGrid";
import type { Metadata } from "next";

/* ================= SEO METADATA ================= */
export const metadata: Metadata = {
  title: "Services | all4Ps",
  description:
    "Explore all B2B growth, marketing, and GTM services by all4Ps. Strategy-led execution designed to drive real pipeline and revenue outcomes.",
  alternates: {
    canonical: "https://www.all4ps.co/services",
  },
  openGraph: {
    title: "Services | all4Ps",
    description:
      "Explore all B2B growth, marketing, and GTM services by all4Ps. Strategy-led execution designed to drive real pipeline and revenue outcomes.",
    url: "https://www.all4ps.co/services",
    siteName: "all4Ps",
    type: "website",
    images: [
      {
        url: "https://www.all4ps.co/images/og/marketing-strategy.jpg",
        width: 1200,
        height: 630,
        alt: "all4Ps Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | all4Ps",
    description:
      "B2B growth, marketing, and GTM services by all4Ps — built for clarity, scale, and revenue.",
    images: ["https://www.all4ps.co/images/og/marketing-strategy.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ================= SERVICES HERO ================= */}
      <section className="relative bg-black text-white pt-28 pb-20 overflow-hidden">
        {/* subtle purple glow */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#800080]/30 blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Breadcrumbs – LEFT ALIGNED */}
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-gray-400">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/" className="hover:text-[#800080]">
                  Home
                </a>
              </li>
              <li>/</li>
              <li className="text-white font-medium">Services</li>
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Services
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Strategy-led B2B growth services designed to turn clarity into
            pipeline, revenue, and long-term scale.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <ServicesGrid
        title="Our Services"
        description="Explore our full suite of B2B growth, strategy, and marketing services designed to drive real business outcomes."
      />

      {/* ================= BREADCRUMB SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.all4ps.co/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://www.all4ps.co/services",
              },
            ],
          }),
        }}
      />
    </main>
  );
}
