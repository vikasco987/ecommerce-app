// src/app/about/page.tsx
"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-16 px-4">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
        About Us
      </h1>

      <p className="max-w-3xl text-center text-gray-700 text-lg mb-8">
        Welcome to our website! We are committed to providing high-quality Ayurvedic and herbal products to improve your wellness. Our mission is to bring natural health solutions to every home.
      </p>

      <div className="relative w-full max-w-2xl h-64 md:h-96 mb-8">
        <Image
          src="/ayurved1.jpg" // replace with your own image
          alt="About Us"
          fill
          className="object-cover rounded-xl shadow-lg"
        />
      </div>

      <p className="max-w-3xl text-center text-gray-600 text-md">
        Our team of experts carefully selects each product to ensure maximum quality and effectiveness. We are passionate about natural wellness and dedicated to your health journey.
      </p>
    </main>
  );
}
