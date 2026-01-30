"use client";

import React, { useState } from "react";
import { CASE_STUDIES } from "@/app/constants";
import { CaseStudy } from "@/app/types";
import { Filter } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(CASE_STUDIES.map((c: CaseStudy) => c.category))),
  ];

  const filteredStudies =
    filter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c: CaseStudy) => c.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          From Possibility to Proof
        </h1>
        <p className="text-gray-400 text-lg">
          Real work. Real numbers. No fluff.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Section */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center mr-4 text-gray-500 font-bold uppercase text-sm tracking-wider">
            <Filter size={18} className="mr-2" /> Filter by:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-bold transition-all duration-300 border-2 ${
                filter === cat
                  ? "bg-[#800080] border-[#800080] text-white shadow-md"
                  : "bg-white border-gray-200 text-gray-600 hover:border-[#800080] hover:text-[#800080]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {filteredStudies.map((study: CaseStudy) => (
            <Link
              key={study.id}
              href={`/portfolio/${study.id}`}
              className="bg-white group hover:shadow-2xl transition-all duration-500 block overflow-hidden"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={study.imageUrl}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-black text-white text-[10px] font-black px-3 py-1 uppercase tracking-[0.2em]">
                  {study.category}
                </div>
              </div>

              <div className="p-8 border-b-4 border-transparent group-hover:border-[#800080] transition-all duration-300">
                <h2 className="text-2xl font-bold mb-2 text-black transition-colors group-hover:text-[#800080]">
                  {study.title}
                </h2>
                <p className="text-gray-500 mb-4 font-medium">
                  {study.client} • {study.industry}
                </p>
                <div className="bg-gray-100 border-l-4 border-[#800080] inline-block px-4 py-2">
                  <span className="font-bold text-[#800080] text-xl tracking-tight">
                    {study.result}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredStudies.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400 italic font-light">
              No case studies found for this category. We&apos;re probably too
              busy making them.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
