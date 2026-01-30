import Image from "next/image";
import { TEAM } from "../constants";
import type { Metadata } from "next";

/* ================= SEO (NEXT.JS WAY) ================= */

export const metadata: Metadata = {
  title: "About all4Ps | B2B Growth Marketing Agency",
  description:
    "Learn about all4Ps – a B2B growth marketing agency helping SaaS, tech, and industrial companies drive real pipeline and revenue growth.",
  alternates: {
    canonical: "https://www.all4ps.co/about",
  },
  openGraph: {
    title: "About all4Ps | B2B Growth Marketing Agency",
    description:
      "Learn how all4Ps helps B2B SaaS, tech, and industrial brands grow revenue with clarity, strategy, and sales-aligned marketing.",
    url: "https://www.all4ps.co/about",
    siteName: "all4Ps",
    images: [
      {
        url: "https://www.all4ps.co/images/og/home-page.jpg",
        width: 1200,
        height: 630,
        alt: "all4Ps B2B Growth Marketing Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About all4Ps | B2B Growth Marketing Agency",
    description:
      "Discover how all4Ps helps B2B SaaS, tech, and industrial companies build demand and drive real pipeline growth.",
    images: ["https://www.all4ps.co/images/og/home-page.jpg"],
  },
};

/* ================= PAGE ================= */

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            The Story Behind all4Ps
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built by engineers who got tired of bad tech marketing.
          </p>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto text-gray-700">
          <p className="mb-6">
            We started all4Ps after seeing too many brilliant B2B tech companies
            struggle — not because their products were weak, but because their
            story wasn’t clear.
          </p>

          <p className="mb-6">
            In robotics, automation, and SaaS, complexity is real. But confusing
            buyers shouldn’t be the cost of innovation. So, we decided to fix
            that.
          </p>

          <p className="mb-6">
            We believe marketing should make selling easier, not louder.
          </p>

          <blockquote className="border-l-4 border-brand-purple pl-4 italic text-xl font-bold text-black my-8 bg-gray-50 p-6">
            "We don’t chase buzzwords. We build clarity that converts."
          </blockquote>

          <p>
            Today, we work as brand and sales-enablement partners to deep-tech
            companies that want fewer distractions and better conversations with
            buyers.
          </p>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">
            Our “Core Values” Actually Lived
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Outcome Oriented",
                text: "Not vanity metrics. Not activity for activity’s sake.",
              },
              {
                title: "We Tell the Truth",
                text: "To clients, buyers, and ourselves — even when it’s uncomfortable.",
              },
              {
                title: "Clarity Over Cleverness",
                text: "If it doesn’t simplify the story, it doesn’t belong.",
              },
              {
                title: "Long-Term Thinking",
                text: "We build brands and systems meant to last, not spike.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-black p-6 border border-gray-800 hover:border-brand-purple transition-colors"
              >
                <h4 className="text-xl font-bold text-brand-purple mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">
            Meet the People Actually Building Your Success
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {TEAM.map((member) => (
              <div key={member.id} className="group text-center">
                {/* IMAGE FIXED (CIRCLE SAFE) */}
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-transparent group-hover:border-brand-purple transition-all duration-300 mb-4">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    sizes="192px"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-brand-purple font-medium text-sm mb-2">
                  {member.role}
                </p>

                <p className="text-gray-600 text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  "{member.sarcasticFact}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
