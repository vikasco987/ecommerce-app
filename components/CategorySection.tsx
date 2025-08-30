"use client";

import Link from "next/link";

const categories = [
  { name: "Heart Care", color: "from-pink-100 to-pink-200 text-pink-700 hover:from-pink-200 hover:to-pink-300" },
  { name: "Oils", color: "from-yellow-100 to-yellow-200 text-yellow-700 hover:from-yellow-200 hover:to-yellow-300" },
  { name: "Wellness", color: "from-blue-100 to-blue-200 text-blue-700 hover:from-blue-200 hover:to-blue-300" },
  { name: "Herbal", color: "from-green-100 to-green-200 text-green-700 hover:from-green-200 hover:to-green-300" },
  { name: "Lab Tested", color: "from-purple-100 to-purple-200 text-purple-700 hover:from-purple-200 hover:to-purple-300" },
  { name: "Medicines", color: "from-red-100 to-red-200 text-red-700 hover:from-red-200 hover:to-red-300" },
  { name: "Personal Care", color: "from-indigo-100 to-indigo-200 text-indigo-700 hover:from-indigo-200 hover:to-indigo-300" },
];

export default function CategorySection() {
  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Shop by <span className="text-green-600">Category</span>
        </h2>

        {/* Scrollable on mobile, grid on large */}
        <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-4 lg:grid-cols-7 md:gap-6 no-scrollbar">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={`flex items-center justify-center min-w-[120px] md:min-w-0 
                rounded-2xl p-4 text-center font-semibold shadow-sm
                bg-gradient-to-br ${category.color} 
                transform transition duration-300 hover:scale-105 hover:shadow-lg`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
