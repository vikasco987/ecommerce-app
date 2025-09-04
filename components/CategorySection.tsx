// "use client";

// import Link from "next/link";
// import { useState } from "react";

// const categories = [
//   "Heart Care",
//   "Oils",
//   "Wellness",
//   "Herbal",
//   "Lab Tested",
//   "Medicines",
//   "Personal Care",
// ];

// export default function CategorySection() {
//   const [active, setActive] = useState("Heart Care");

//   return (
//     <section className="w-full py-6 bg-white">
//       <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-4">
        
//         {/* ✅ Categories in one line */}
//         <div className="flex gap-4 overflow-x-auto whitespace-nowrap no-scrollbar">
//           {categories.map((category, index) => (
//             <button
//               key={index}
//               onClick={() => setActive(category)}
//               className={`px-6 py-2 rounded-full font-semibold transition 
//                 ${
//                   active === category
//                     ? "bg-green-600 text-white shadow-md"
//                     : "border border-green-200 text-gray-800 bg-green-50 hover:bg-green-100"
//                 }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* See All Button */}
//         <Link
//           href="/categories"
//           className="px-5 py-2 border border-gray-400 rounded-full font-medium text-gray-800 hover:bg-gray-100 transition"
//         >
//           See all
//         </Link>
//       </div>
//     </section>
//   );
// }













// "use client";

// import Image from "next/image";
// import Link from "next/link";

// const categories = [
//   { id: 1, name: "Skin Care", image: "/c1.jpg", link: "/category/skincare" },
//   { id: 2, name: "Hair Care", image: "/c2.jpg", link: "/category/haircare" },
//   { id: 3, name: "Supplements", image: "/c3.jpg", link: "/category/supplements" },
//   { id: 4, name: "Ayurvedic Oils", image: "/c4.jpg", link: "/category/oils" },
//   // { id: 5, name: "Herbal Tea", image: "/c5.jpg", link: "/category/tea" },
//   // { id: 6, name: "Wellness", image: "/c6.jpg", link: "/category/wellness" },
// ];

// export default function CategorySection() {
//   return (
//     <section className="w-full py-12 bg-gray-50">
//       <div className="container mx-auto px-6">
//         {/* ✅ Section Heading */}
//         <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
//           Shop by Category
//         </h2>

//         {/* ✅ Categories Grid */}
//         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
//           {categories.map((cat) => (
//             <Link
//               key={cat.id}
//               href={cat.link}
//               className="flex flex-col items-center group"
//             >
//               <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm group-hover:shadow-md transition">
//                 <Image
//                   src={cat.image}
//                   alt={cat.name}
//                   fill
//                   className="object-cover group-hover:scale-105 transition duration-300"
//                 />
//               </div>
//               <p className="mt-3 text-sm md:text-base font-medium text-gray-700 group-hover:text-indigo-600">
//                 {cat.name}
//               </p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }











// "use client";

// import Image from "next/image";
// import Link from "next/link";

// const categories = [
//   { id: 1, name: "Skin Care", image: "/c1.jpg", link: "/category/skincare" },
//   { id: 2, name: "Hair Care", image: "/c2.jpg", link: "/category/haircare" },
//   { id: 3, name: "Supplements", image: "/c3.jpg", link: "/category/supplements" },
//   { id: 4, name: "Ayurvedic Oils", image: "/c4.jpg", link: "/category/oils" },
//   // { id: 5, name: "Herbal Tea", image: "/c5.jpg", link: "/category/tea" },
//   // { id: 6, name: "Wellness", image: "/c6.jpg", link: "/category/wellness" },
// ];

// export default function CategorySection() {
//   return (
//     <section className="w-full py-12 bg-gray-50">
//       <div className="container mx-auto px-6">
//         {/* ✅ Section Heading */}
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
//           Top Categories
//         </h2>

//         {/* ✅ Mobile: horizontal scroll | Desktop: grid */}
//         <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-8 scrollbar-hide">
//           {categories.map((cat) => (
//             <Link
//               key={cat.id}
//               href={cat.link}
//               className="min-w-[200px] md:min-w-0 bg-white rounded-xl shadow-md hover:shadow-lg transition group overflow-hidden"
//             >
//               <div className="relative w-full h-40 md:h-48">
//                 <Image
//                   src={cat.image}
//                   alt={cat.name}
//                   fill
//                   className="object-cover group-hover:scale-105 transition duration-300"
//                 />
//               </div>
//               <div className="p-4 text-center">
//                 <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-indigo-600">
//                   {cat.name}
//                 </h3>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";

// const categories = [
//   { id: 1, name: "Men Wellness", image: "/c1.jpg", link: "/category/skincare" },
//   { id: 2, name: "Women-Wellness", image: "/c2.jpg", link: "/category/haircare" },
//   { id: 3, name: "Supplements", image: "/c3.jpg", link: "/category/supplements" },
//   { id: 4, name: "Ayurvedic Oils", image: "/c4.jpg", link: "/category/oils" },
//     { id: 5, name: "Stomach-Problem", image: "/c5.avif", link: "/category/skincare" },
//   { id: 6, name: "Immunity-Booster", image: "/c6.avif", link: "/category/haircare" },
//   { id: 7, name: "Memory-Booster", image: "/c7.avif", link: "/category/supplements" },
//   { id: 8, name: "Weight-Gain", image: "/c8.avif", link: "/category/oils" },
// ];

// export default function TopCategories() {
//   return (
//     <section className="py-10 bg-gray-50">
//       <h2 className="text-2xl font-bold text-center mb-6">Top Categories</h2>

//       {/* ✅ Scrollable Row - scrollbar hidden */}
//       <div className="overflow-x-auto no-scrollbar px-4">
//         <div className="flex gap-6">
//           {categories.map((cat) => (
//             <div
//               key={cat.id}
//               className="flex-shrink-0 w-48 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-transform hover:-translate-y-1"
//             >
//               {/* Image */}
//               <div className="relative w-full h-44">
//                 <Image
//                   src={cat.image}
//                   alt={cat.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* Name */}
//               <div className="p-3 text-center bg-gray-100">
//                 <p className="text-base font-semibold text-gray-800">
//                   {cat.name}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




// "use client";

// import Image from "next/image";

// const categories = [
//   { id: 1, name: "Men Wellness", image: "/c1.jpg", link: "/category/skincare" },
//   { id: 2, name: "Women-Wellness", image: "/c2.jpg", link: "/category/haircare" },
//   { id: 3, name: "Supplements", image: "/c3.jpg", link: "/category/supplements" },
//   { id: 4, name: "Ayurvedic Oils", image: "/c4.jpg", link: "/category/oils" },
//     { id: 5, name: "Stomach-Problem", image: "/c5.avif", link: "/category/skincare" },
//   { id: 6, name: "Immunity-Booster", image: "/c6.avif", link: "/category/haircare" },
//   { id: 7, name: "Memory-Booster", image: "/c7.avif", link: "/category/supplements" },
//   { id: 8, name: "Weight-Gain", image: "/c8.avif", link: "/category/oils" },
// ];
// export default function TopCategories() {
//   return (
//     <section className="py-10 bg-gray-50">
//       <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-900">
//         Top Categories
//       </h2>

//       {/* Mobile: horizontal scroll, Desktop: 2-row grid */}
//       <div className="px-4">
//         <div className="grid grid-flow-col auto-cols-[12rem] gap-6 overflow-x-auto md:grid-cols-5 md:grid-rows-2 md:auto-cols-auto md:grid-flow-row">
//           {categories.map((cat) => (
//             <a
//               key={cat.id}
//               href={cat.link}
//               className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
//             >
//               {/* Image on top */}
//               <div className="relative w-full h-48">
//                 <Image
//                   src={cat.image}
//                   alt={cat.name}
//                   fill
//                   className="object-cover transition-transform duration-500 hover:scale-105"
//                 />
//               </div>

//               {/* Name below image */}
//               <div className="p-4 text-center bg-white">
//                 <p className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors">
//                   {cat.name}
//                 </p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import Image from "next/image";

const categories = [
  { id: 1, name: "Men Wellness", image: "/c1.jpg" },
  { id: 2, name: "Women-Wellness", image: "/c2.jpg" },
  { id: 3, name: "Supplements", image: "/c3.jpg" },
  { id: 4, name: "Ayurvedic Oils", image: "/c4.jpg" },
  { id: 5, name: "Stomach-Problem", image: "/c5.avif" },
  { id: 6, name: "Immunity-Booster", image: "/c6.avif" },
  { id: 7, name: "Memory-Booster", image: "/c7.avif" },
  { id: 8, name: "Weight-Gain", image: "/c8.avif" },
];

export default function TopCategories() {
  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-900">
        Top Categories
      </h2>

      <div className="px-4">
        <div className="grid grid-flow-col auto-cols-[12rem] gap-6 overflow-x-auto md:grid-cols-5 md:grid-rows-2 md:auto-cols-auto md:grid-flow-row">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
            >
              {/* Image on top */}
              <div className="relative w-full h-48">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Name below image */}
              <div className="p-4 text-center bg-white">
                <p className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors">
                  {cat.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
