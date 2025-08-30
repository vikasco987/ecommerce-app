"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  "Heart Care",
  "Oils",
  "Wellness",
  "Herbal",
  "Lab Tested",
  "Medicines",
  "Personal Care",
];

export default function CategorySection() {
  const [active, setActive] = useState("Heart Care");

  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-4">
        
        {/* ✅ Categories in one line */}
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap no-scrollbar">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActive(category)}
              className={`px-6 py-2 rounded-full font-semibold transition 
                ${
                  active === category
                    ? "bg-green-600 text-white shadow-md"
                    : "border border-green-200 text-gray-800 bg-green-50 hover:bg-green-100"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* See All Button */}
        <Link
          href="/categories"
          className="px-5 py-2 border border-gray-400 rounded-full font-medium text-gray-800 hover:bg-gray-100 transition"
        >
          See all
        </Link>
      </div>
    </section>
  );
}
