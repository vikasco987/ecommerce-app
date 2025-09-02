"use client";
import Image from "next/image";

export default function MidBanner() {
  return (
    <div className="w-full my-8">
      <Image
        src="/m1.jpg" // 👈 put your banner image in public folder
        alt="Special Offer Banner"
        width={1200}
        height={300}
        className="rounded-2xl shadow-lg mx-auto"
      />
    </div>
  );
}
