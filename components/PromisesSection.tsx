// // File: src/app/components/PromisesSection.tsx
// "use client";

// import { Truck, RotateCcw, CreditCard, Headphones } from "lucide-react";

// const promises = [
//   {
//     id: 1,
//     icon: <Truck size={40} className="text-green-600" />,
//     title: "Free & Fast Shipping",
//   },
//   {
//     id: 2,
//     icon: <RotateCcw size={40} className="text-green-600" />,
//     title: "Free & Easy Returns",
//   },
//   {
//     id: 3,
//     icon: <CreditCard size={40} className="text-green-600" />,
//     title: "100% Secured Payments",
//   },
//   {
//     id: 4,
//     icon: <Headphones size={40} className="text-green-600" />,
//     title: "Expert Help & Support",
//   },
// ];

// export default function PromisesSection() {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         {/* Heading */}
//         <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
//           AR Ayurveda Promises
//         </h2>
//         <p className="text-gray-600 mt-2">
//           The promises that we'll never break
//         </p>

//         {/* Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-10">
//           {promises.map((item) => (
//             <div
//               key={item.id}
//               className="flex flex-col items-center text-center"
//             >
//               <div className="mb-3">{item.icon}</div>
//               <p className="text-sm sm:text-base font-medium text-gray-800">
//                 {item.title}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }








"use client";

import { Truck, RotateCcw, CreditCard, Headphones } from "lucide-react";

const promises = [
  {
    id: 1,
    icon: <Truck size={40} className="text-green-600" />,
    title: "Free & Fast Shipping",
  },
  {
    id: 2,
    icon: <RotateCcw size={40} className="text-green-600" />,
    title: "Free & Easy Returns",
  },
  {
    id: 3,
    icon: <CreditCard size={40} className="text-green-600" />,
    title: "100% Secured Payments",
  },
  {
    id: 4,
    icon: <Headphones size={40} className="text-green-600" />,
    title: "Expert Help & Support",
  },
];

export default function PromisesSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 via-emerald-100 to-green-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.svg')] opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 drop-shadow-sm">
          AR Ayurveda Promises
        </h2>
        <p className="text-green-700 mt-2 text-lg">
          The promises that we'll never break
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
          {promises.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-6 hover:shadow-xl transition"
            >
              <div className="mb-3">{item.icon}</div>
              <p className="text-base font-semibold text-green-900">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
