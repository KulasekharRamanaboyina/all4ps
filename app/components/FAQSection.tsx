"use client";

import { useState } from "react";

export default function FAQSection({ faqs }: any) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-brand-purple">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item: any, i: number) => (
            <div key={i} className="border border-brand-purple/40 p-5 bg-white">
              <button
                className="w-full text-left flex justify-between items-center font-medium text-gray-900"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.q}
                <span className="text-brand-purple text-xl font-semibold">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              {open === i && (
                <p className="mt-3 text-gray-700 border-l-4 border-brand-purple pl-4">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
