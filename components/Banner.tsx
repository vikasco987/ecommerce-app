// import Image from "next/image";
// import Link from "next/link";

// export default function Banner() {
//   return (
//     <section className="w-full bg-gray-50 pt-20">
//       <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-12">
        
//         {/* Left Text */}
//         <div className="flex-1 space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//             Best Deals on <span className="text-indigo-600">Top Products</span>
//           </h1>
//           <p className="text-lg text-gray-600">
//             Shop the latest collection of electronics, fashion, and more with
//             unbeatable discounts.
//           </p>
//           <div className="flex space-x-4">
//             <Link
//               href="/shop"
//               className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
//             >
//               Shop Now
//             </Link>
//             <Link
//               href="/deals"
//               className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition"
//             >
//               View Deals
//             </Link>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="flex-1 mt-10 md:mt-0">
//           <Image
//             src="/b5e64fc20d910048e8085350145f952e304a.webp" // ✅ Correct path
//             alt="Banner"
//             width={600}
//             height={400}
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

















// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// const banners = [
//   {
//     id: 1,
//     title: "Best Deals on Top Products",
//     description:
//       "Shop the latest collection of electronics, fashion, and more with unbeatable discounts.",
//     image: "/b5e64fc20d910048e8085350145f952e304a.webp",
//     button1: { text: "Shop Now", link: "/shop" },
//     button2: { text: "View Deals", link: "/deals" },
//   },
//   {
//     id: 2,
//     title: "Upgrade Your Lifestyle",
//     description:
//       "Discover premium collections and top-notch gadgets to improve your daily life.",
//     image: "/36270fa504bf504f6f0b7c407db87917e99b.webp",
//     button1: { text: "Explore", link: "/explore" },
//     button2: { text: "Offers", link: "/offers" },
//   },
//   {
//     id: 3,
//     title: "Exclusive Discounts Await!",
//     description:
//       "Grab seasonal offers before they’re gone. Save more, shop smarter!",
//     image: "/33a75ba90f546043080a3490208c61ae4822.webp",
//     button1: { text: "Get Started", link: "/start" },
//     button2: { text: "Learn More", link: "/learn" },
//   },
// ];

// export default function Banner() {
//   const [current, setCurrent] = useState(0);

//   // Auto change every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % banners.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const banner = banners[current];

//   return (
//     <section className="w-full bg-gray-50 pt-20">
//       <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-12 transition-all duration-700">
        
//         {/* Left Text */}
//         <div className="flex-1 space-y-6 text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//             {banner.title.split(" ").map((word, i) =>
//               i === 2 ? (
//                 <span key={i} className="text-indigo-600">
//                   {" "}{word}{" "}
//                 </span>
//               ) : (
//                 " " + word
//               )
//             )}
//           </h1>
//           <p className="text-lg text-gray-600">{banner.description}</p>
//           <div className="flex justify-center md:justify-start space-x-4">
//             <Link
//               href={banner.button1.link}
//               className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
//             >
//               {banner.button1.text}
//             </Link>
//             <Link
//               href={banner.button2.link}
//               className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition"
//             >
//               {banner.button2.text}
//             </Link>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="flex-1 mt-10 md:mt-0">
//           <Image
//             src={banner.image}
//             alt="Banner"
//             width={600}
//             height={400}
//             className="rounded-lg shadow-lg object-cover"
//           />
//         </div>
//       </div>

//       {/* Dots Navigation */}
//       <div className="flex justify-center mt-6 space-x-2">
//         {banners.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`h-3 w-3 rounded-full transition ${
//               index === current ? "bg-indigo-600" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }














"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const banners = [
  {
    id: 1,
    title: "Best Deals on Top Products",
    description:
      "Shop the latest collection of electronics, fashion, and more with unbeatable discounts.",
    image: "/b5e64fc20d910048e8085350145f952e304a.webp",
    button1: { text: "Shop Now", link: "/shop" },
    button2: { text: "View Deals", link: "/deals" },
  },
  {
    id: 2,
    title: "Upgrade Your Lifestyle",
    description:
      "Discover premium collections and top-notch gadgets to improve your daily life.",
    image: "/36270fa504bf504f6f0b7c407db87917e99b.webp",
    button1: { text: "Explore", link: "/explore" },
    button2: { text: "Offers", link: "/offers" },
  },
  {
    id: 3,
    title: "Exclusive Discounts Await!",
    description:
      "Grab seasonal offers before they’re gone. Save more, shop smarter!",
    image: "/33a75ba90f546043080a3490208c61ae4822.webp",
    button1: { text: "Get Started", link: "/start" },
    button2: { text: "Learn More", link: "/learn" },
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  // Auto change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const banner = banners[current];

  return (
    <section className="w-full bg-gray-50 pt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-12 transition-all duration-700">
        
        {/* ✅ Image Left */}
        <div className="flex-1 mb-10 md:mb-0 md:mr-8">
          <Image
            src={banner.image}
            alt="Banner"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* ✅ Text Right */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {banner.title.split(" ").map((word, i) =>
              i === 2 ? (
                <span key={i} className="text-indigo-600">
                  {" "}{word}{" "}
                </span>
              ) : (
                " " + word
              )
            )}
          </h1>
          <p className="text-lg text-gray-600">{banner.description}</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link
              href={banner.button1.link}
              className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
            >
              {banner.button1.text}
            </Link>
            <Link
              href={banner.button2.link}
              className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition"
            >
              {banner.button2.text}
            </Link>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === current ? "bg-indigo-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
