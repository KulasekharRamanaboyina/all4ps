"use client";

import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const faqData = [
    {
      category: "About all4Ps & Our Approach",
      faqs: [
        {
          question: "What is all4Ps?",
          answer:
            "all4Ps is a B2B growth and marketing agency focused on helping complex, technical businesses generate pipeline and revenue through structured strategies.",
        },
        {
          question: "Who do you typically work with?",
          answer:
            "We work with B2B companies, including SaaS, robotics, automation, and industrial businesses targeting decision-makers.",
        },
        {
          question: "What makes all4Ps different from other agencies?",
          answer:
            "We focus on strategy-led execution, combining positioning, content, SEO, and growth systems to drive measurable business outcomes.",
        },
      ],
    },
    {
      category: "Services & Expertise",
      faqs: [
        {
          question: "What services does all4Ps offer?",
          answer:
            "We offer Brand Identity, Marketing Strategy, Growth Marketing, Content Marketing, SEO & SEM, and Website Services.",
        },
        {
          question: "Do you specialize in specific industries?",
          answer:
            "Yes, we specialize in B2B sectors such as SaaS, robotics, automation, and manufacturing.",
        },
      ],
    },
    {
      category: "Lead Generation & Growth Strategy",
      faqs: [
        {
          question: "How do you generate B2B leads?",
          answer:
            "We use a mix of SEO, content marketing, and performance campaigns designed to attract and convert decision-makers.",
        },
        {
          question: "Do you use AI in your process?",
          answer:
            "Yes, we use AI for research, content optimization, and campaign performance improvements.",
        },
      ],
    },
    {
      category: "Pricing, Engagement & Fit",
      faqs: [
        {
          question: "Is all4Ps the right fit for our business?",
          answer:
            "We work best with B2B companies that have clear offerings, defined audiences, and a long-term growth mindset.",
        },
        {
          question: "How is pricing structured?",
          answer:
            "Pricing depends on your goals, scope, and services required. We provide customized plans rather than fixed packages.",
        },
        {
          question: "What factors influence marketing costs?",
          answer:
            "Industry, competition, target audience, geography, and required channels all impact the cost.",
        },
      ],
    },
    {
      category: "Results, Timelines & Performance",
      faqs: [
        {
          question: "How long does it take to see results?",
          answer:
            "Paid campaigns can show early traction in 4–8 weeks, while SEO and content strategies typically take 3–6 months.",
        },
        {
          question: "How do you measure success?",
          answer:
            "We measure success through qualified leads, pipeline growth, conversion rates, and revenue impact.",
        },
        {
          question: "Do you guarantee results?",
          answer:
            "We do not make unrealistic guarantees. We focus on a consistent, data-driven approach to drive results.",
        },
      ],
    },
    {
      category: "Getting Started",
      faqs: [
        {
          question: "How do we get started with all4Ps?",
          answer:
            "You can start with a discovery call where we understand your business and recommend a tailored growth strategy.",
        },
      ],
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <>
      {/* HERO (unchanged) */}
      <section className="bg-black text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a001a,black)] opacity-80"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            B2B <span className="text-[#800080]">Marketing FAQs</span>
          </h1>

          <p className="text-lg text-gray-400 mb-8">
            Answers to the most common questions about B2B marketing, lead
            generation, pricing, and results.
          </p>

          <a
            href="#faq"
            className="bg-[#800080] hover:bg-purple-900 px-6 py-3 rounded-lg font-medium"
          >
            Explore FAQs
          </a>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <div id="faq" className="max-w-4xl mx-auto px-6 py-20">
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#800080]">
              {section.category}
            </h2>

            <div className="space-y-5">
              {section.faqs.map((faq, index) => {
                const id = `${sectionIndex}-${index}`;

                return (
                  <div
                    key={id}
                    className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(id)}
                      className="w-full flex justify-between items-center text-left"
                    >
                      <h3 className="font-semibold text-lg text-gray-900">
                        {faq.question}
                      </h3>

                      <span className="text-[#800080] text-2xl font-bold ml-4">
                        {openIndex === id ? "−" : "+"}
                      </span>
                    </button>

                    {openIndex === id && (
                      <p className="text-gray-600 mt-4 leading-relaxed border-l-4 border-[#800080] pl-4">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA (unchanged) */}
        <div className="mt-16 p-10 bg-black text-white rounded-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
          <p className="mb-6 text-gray-300">
            Let’s talk about your business and growth goals.
          </p>

          <a
            href="/contact"
            className="bg-[#800080] hover:bg-purple-900 transition text-white px-6 py-3 rounded-lg font-medium"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </>
  );
}
