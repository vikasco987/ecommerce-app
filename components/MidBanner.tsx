"use client";
import Image from "next/image";

export default function MidBanner() {
  return (
    <div className="w-full my-8">
      <picture className="block w-full">
        {/* Desktop / Laptop */}
        <source srcSet="/m2.jpg" media="(min-width: 768px)" />
        {/* Mobile */}
        <Image
          src="/m1.jpg"
          alt="Special Offer Banner"
          width={1200}
          height={300}
          className="rounded-2xl shadow-lg w-full h-auto mx-auto"
          priority
        />
      </picture>
    </div>
  );
}

