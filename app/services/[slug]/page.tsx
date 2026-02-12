import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle, BarChart, ArrowRight } from "lucide-react";
import Image from "next/image";

import { SERVICES, ICONS_MAP, CASE_STUDIES } from "@/app/constants";
import { Service } from "@/app/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ===== 1. SEO METADATA (Next.js Way) =====
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = SERVICES.find(
    (s: Service) => s.id.toLowerCase() === slug?.toLowerCase().trim(),
  );

  if (!service) return { title: "Service Not Found | all4Ps" };

  const pageTitle = `${service.title} Services | all4Ps`;
  const pageDescription =
    service.shortDescription ||
    `${service.title} by all4Ps – B2B growth marketing.`;
  const pageUrl = `https://www.all4ps.co/services/${slug}`;

  const ogImage = `https://www.all4ps.co${service.outComesHeadingImage}`
    .replace("/services/", "/og/")
    .replace(".webp", ".jpg");

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
  };
}

// ===== 2. MAIN PAGE COMPONENT =====
export default async function ServiceDetail({ params }: PageProps) {
  // Next.js 15+ requires awaiting params
  const { slug } = await params;

  const service = SERVICES.find(
    (s: Service) => s.id.toLowerCase() === slug?.toLowerCase().trim(),
  );

  // If service doesn't exist, show 404 page
  if (!service) {
    notFound();
  }

  const Icon =
    ICONS_MAP[service.iconName as keyof typeof ICONS_MAP] || BarChart;
  //  Fetch related case studies automatically
  const relatedCaseStudies =
    service.caseStudyIds
      ?.map((id) => CASE_STUDIES.find((cs) => cs.id === id))
      .filter(Boolean) || [];

  return (
    <main className="min-h-screen selection:bg-[#800080] selection:text-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 relative overflow-hidden">
        {/* Background Decorative Icon */}
        <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/3 -translate-y-1/4 pointer-events-none">
          <Icon size={400} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* <Link
                href="/"
                className="text-[#800080] hover:text-white mb-6 inline-flex items-center transition-colors font-medium"
              >
                <span className="mr-2">←</span> Back home
              </Link> */}

            {/*  ----------------UI Breadcumb----------- */}

            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-300">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white font-medium">{service.title}</li>
              </ol>
            </nav>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              {service.title}
            </h1>

            <p className="text-2xl text-gray-300 font-light mb-10 border-l-4 border-[#800080] pl-6 italic leading-relaxed">
              {service.intro}
            </p>

            <Link href={service.titleCTA.link}>
              <button className="bg-white text-black font-bold px-10 py-4 hover:bg-[#800080] hover:text-white transition-all duration-300 shadow-lg active:scale-95">
                {service.titleCTA.label}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Content & Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left: Description & Features */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#800080] leading-tight">
                {service.fullDescription}
              </h2>
              <div className="space-y-6">
                {service.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start group">
                    <div className="mt-1 mr-4 bg-[#f5f3ff] p-1 rounded-full group-hover:bg-[#800080] transition-colors duration-300">
                      <CheckCircle className="w-5 h-5 text-[#800080] group-hover:text-white" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Metrics Sidebar Card */}
            <div className="bg-gray-50 p-8 md:p-10 border border-gray-200 shadow-2xl rounded-sm sticky top-10">
              <h3 className="text-2xl font-bold mb-8 flex items-center text-black">
                <BarChart className="mr-3 text-[#800080]" />
                {service.outcomesHeading}
              </h3>

              <div className="grid grid-cols-1 gap-6">
                {service.outcomesHeadingMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 border-l-8 border-[#800080] shadow-md transform hover:-translate-y-1 transition-transform duration-300"
                  >
                    <p className="text-gray-500 uppercase text-xs font-bold tracking-[0.2em] mb-2">
                      {metric.label}
                    </p>
                    <p className="text-4xl font-black text-black">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Visual Image */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="overflow-hidden rounded-sm bg-gray-200">
                  <img
                    src={service.outComesHeadingImage}
                    alt={`${service.title} visualization`}
                    className="w-full h-48 object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================  Case Studies ================= */}
      {relatedCaseStudies.length > 0 && (
        <section className="bg-black text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}

            <div className="max-w-2xl mb-14">
              <p className="text-[#800080] font-semibold mb-4 text-base md:text-lg tracking-[0.08em] ">
                Proof of execution
              </p>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Where this strategy has already worked
              </h2>

              <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                These engagements demonstrate how our approach translates into
                measurable business outcomes.
              </p>
            </div>

            {relatedCaseStudies.map((cs: any, index: number) => (
              <div
                key={cs.id}
                className={`grid md:grid-cols-2 gap-16 items-center mb-28 last:mb-0 ${
                  index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="relative group">
                  <Link
                    href={`/portfolio/${cs.id}`}
                    className="block overflow-hidden rounded-2xl border border-white/10"
                  >
                    <img
                      src={cs.imageUrl}
                      alt={cs.client}
                      loading="lazy"
                      className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                </div>

                {/* CONTENT */}
                <div className="space-y-6 max-w-xl">
                  <span className="text-[#800080] font-semibold text-lg">
                    Case Study
                  </span>

                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    {cs.title}
                  </h2>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    {cs.description.substring(0, 180)}...
                  </p>

                  <Link
                    href={`/portfolio/${cs.id}`}
                    className="inline-flex items-center gap-3 bg-[#800080] text-white px-7 py-3 font-semibold shadow-lg hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Read Case Study
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA Section */}
      <section className="bg-gray-100 py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-black">
            {service.bottomCTA.heading}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {service.bottomCTA.subText}
          </p>
          <Link
            href={service.bottomCTA.link}
            className="inline-flex items-center justify-center bg-[#800080] text-white px-10 py-5 text-xl font-black hover:bg-black transition-all duration-300 shadow-xl group"
          >
            {service.bottomCTA.label}
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>
      {/* ================= Service Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service.title} Services`,
            serviceType: service.title,
            url: `https://www.all4ps.co/services/${slug}`,
            description:
              service.shortDescription ||
              `${service.title} services by all4Ps helping B2B companies drive pipeline and revenue.`,
            provider: {
              "@type": "Organization",
              name: "all4Ps",
              url: "https://www.all4ps.co",
              logo: "https://www.all4ps.co/images/logo-black.png",
            },
            areaServed: "Worldwide",
            audience: {
              "@type": "Audience",
              audienceType: "B2B companies, SaaS, Tech, Industrial brands",
            },
          }),
        }}
      />
      {/* ================= Breadcrumb Schema ================= */}
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
              {
                "@type": "ListItem",
                position: 3,
                name: service.title,
                item: `https://www.all4ps.co/services/${slug}`,
              },
            ],
          }),
        }}
      />
    </main>
  );
}
