import ServicesGrid from "@/app/components/ServicesGrid";
import type { Metadata } from "next";
import FAQSection from "@/app/components/FAQSection";

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
{
  /* ================= FAQ's ================= */
}
const servicesFaqs = [
  {
    q: "What services does all4Ps offer?",
    a: "We offer brand identity, marketing strategy, growth marketing, content marketing, SEO & SEM, and website services.",
  },
  {
    q: "Can I choose individual services or do I need a full package?",
    a: "You can choose individual services or combine them based on your needs.",
  },
  {
    q: "Which service is right for my business?",
    a: "It depends on your goals and growth stage. We help you decide during the discovery process.",
  },
  {
    q: "Do you provide both strategy and execution?",
    a: "Yes, we offer end-to-end support from strategy and planning to execution and optimization.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients start seeing measurable improvements within 8–12 weeks.",
  },
  {
    q: "How do we get started?",
    a: "You can book a strategy call with us, and we’ll guide you through the next steps.",
  },
];
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
      {/* ================= FAQ SECTION ================= */}
      <FAQSection faqs={servicesFaqs} />
      {/* ================= CTA SECTION ================= */}
      <section className="py-20 bg-[#800080] text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Not sure which service is right for you?
        </h2>

        <p className="text-purple-200 mb-6">
          Let’s discuss your goals and find the right growth approach.
        </p>

        <a
          href="/contact"
          className="inline-block bg-black text-white px-8 py-4 font-bold hover:bg-white hover:text-black transition"
        >
          Book a Strategy Call
        </a>
      </section>

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
