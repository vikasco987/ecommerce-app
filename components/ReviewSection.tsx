// "use client";

// import { motion } from "framer-motion";
// import { Star } from "lucide-react";

// export default function Reviews() {
//   const reviews = [
//     {
//       name: "Aarav Sharma",
//       review:
//         "These Ayurvedic medicines have worked wonders for me. The results were natural and effective!",
//       rating: 5,
//     },
//     {
//       name: "Priya Verma",
//       review:
//         "I was skeptical at first, but the herbal supplements really improved my overall health.",
//       rating: 4,
//     },
//     {
//       name: "Rohan Mehta",
//       review:
//         "Excellent quality and fast delivery. Feels safe to use and I’ve noticed real benefits.",
//       rating: 5,
//     },
//     {
//       name: "Neha Singh",
//       review:
//         "Best Ayurvedic store online! Packaging was neat and I loved the customer support.",
//       rating: 5,
//     },
//   ];

//   return (
//     <section className="relative bg-gradient-to-r from-green-50 via-emerald-100 to-lime-50 py-20 overflow-hidden">
//       {/* Decorative glowing background */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

//       <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl font-bold text-green-900 mb-12"
//         >
//           What Our Customers Say 🌿
//         </motion.h2>

//         {/* Horizontal Scroll */}
//         <div className="overflow-x-auto no-scrollbar">
//           <div className="flex gap-6 px-4">
//             {reviews.map((r, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: i * 0.2 }}
//                 viewport={{ once: true }}
//                 className="flex-shrink-0 w-80 bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-green-100"
//               >
//                 <div className="flex justify-center mb-3">
//                   {Array.from({ length: r.rating }).map((_, idx) => (
//                     <Star
//                       key={idx}
//                       className="text-yellow-400 fill-yellow-400 w-6 h-6"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-gray-600 italic mb-4">“{r.review}”</p>
//                 <h4 className="text-lg font-semibold text-green-800">
//                   {r.name}
//                 </h4>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// const reviews = [
//   {
//     name: "Aarav Sharma",
//     review:
//       "These Ayurvedic medicines have worked wonders for me. The results were natural and effective!",
//     rating: 5,
//   },
//   {
//     name: "Priya Verma",
//     review:
//       "I was skeptical at first, but the herbal supplements really improved my overall health.",
//     rating: 4,
//   },
//   {
//     name: "Rohan Mehta",
//     review:
//       "Excellent quality and fast delivery. Feels safe to use and I’ve noticed real benefits.",
//     rating: 5,
//   },
//   {
//     name: "Neha Singh",
//     review:
//       "Best Ayurvedic store online! Packaging was neat and I loved the customer support.",
//     rating: 5,
//   },
// ];

// export default function Reviews() {
//   const [index, setIndex] = useState(0);

//   const prevReview = () => {
//     setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
//   };

//   const nextReview = () => {
//     setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="relative bg-gradient-to-r from-green-50 via-emerald-100 to-lime-50 py-20 overflow-hidden">
//       {/* Decorative glowing background */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

//       <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl font-bold text-green-900 mb-12"
//         >
//           What Our Customers Say 🌿
//         </motion.h2>

//         <div className="relative flex items-center justify-center">
//           {/* Left Button */}
//           <button
//             onClick={prevReview}
//             className="absolute left-0 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
//           >
//             <ChevronLeft className="w-6 h-6 text-green-700" />
//           </button>

//           {/* Review Card */}
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg border border-green-100"
//           >
//             <div className="flex justify-center mb-3">
//               {Array.from({ length: reviews[index].rating }).map((_, idx) => (
//                 <Star
//                   key={idx}
//                   className="text-yellow-400 fill-yellow-400 w-6 h-6"
//                 />
//               ))}
//             </div>
//             <p className="text-gray-600 italic mb-4">“{reviews[index].review}”</p>
//             <h4 className="text-lg font-semibold text-green-800">
//               {reviews[index].name}
//             </h4>
//           </motion.div>

//           {/* Right Button */}
//           <button
//             onClick={nextReview}
//             className="absolute right-0 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
//           >
//             <ChevronRight className="w-6 h-6 text-green-700" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }








// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// const reviews = [
//   {
//     name: "Aarav Sharma",
//     review:
//       "These Ayurvedic medicines have worked wonders for me. The results were natural and effective!",
//     rating: 5,
//   },
//   {
//     name: "Priya Verma",
//     review:
//       "I was skeptical at first, but the herbal supplements really improved my overall health.",
//     rating: 4,
//   },
//   {
//     name: "Rohan Mehta",
//     review:
//       "Excellent quality and fast delivery. Feels safe to use and I’ve noticed real benefits.",
//     rating: 5,
//   },
//   {
//     name: "Neha Singh",
//     review:
//       "Best Ayurvedic store online! Packaging was neat and I loved the customer support.",
//     rating: 5,
//   },
// ];

// export default function Reviews() {
//   const [index, setIndex] = useState(0);

//   const prevReview = () => {
//     setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
//   };

//   const nextReview = () => {
//     setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="relative bg-gradient-to-r from-blue-50 via-sky-100 to-cyan-50 py-20 overflow-hidden">
//       {/* Decorative glowing background */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

//       <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl font-bold text-blue-900 mb-12"
//         >
//           What Our Customers Say 🌿
//         </motion.h2>

//         <div className="relative flex items-center justify-center">
//           {/* Left Button */}
//           <button
//             onClick={prevReview}
//             className="absolute left-0 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
//           >
//             <ChevronLeft className="w-6 h-6 text-sky-700" />
//           </button>

//           {/* Review Card */}
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg border border-sky-100"
//           >
//             <div className="flex justify-center mb-3">
//               {Array.from({ length: reviews[index].rating }).map((_, idx) => (
//                 <Star
//                   key={idx}
//                   className="text-yellow-400 fill-yellow-400 w-6 h-6"
//                 />
//               ))}
//             </div>
//             <p className="text-gray-600 italic mb-4">“{reviews[index].review}”</p>
//             <h4 className="text-lg font-semibold text-sky-800">
//               {reviews[index].name}
//             </h4>
//           </motion.div>

//           {/* Right Button */}
//           <button
//             onClick={nextReview}
//             className="absolute right-0 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
//           >
//             <ChevronRight className="w-6 h-6 text-sky-700" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }








// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// const reviews = [
//   {
//     name: "Aarav Sharma",
//     review:
//       "These Ayurvedic medicines have worked wonders for me. The results were natural and effective!",
//     rating: 5,
//   },
//   {
//     name: "Priya Verma",
//     review:
//       "I was skeptical at first, but the herbal supplements really improved my overall health.",
//     rating: 4,
//   },
//   {
//     name: "Rohan Mehta",
//     review:
//       "Excellent quality and fast delivery. Feels safe to use and I’ve noticed real benefits.",
//     rating: 5,
//   },
//   {
//     name: "Neha Singh",
//     review:
//       "Best Ayurvedic store online! Packaging was neat and I loved the customer support.",
//     rating: 5,
//   },
// ];

// export default function Reviews() {
//   const [index, setIndex] = useState(0);

//   const prevReview = () => {
//     setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
//   };

//   const nextReview = () => {
//     setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="relative bg-gradient-to-r from-rose-50 via-orange-50 to-amber-100 py-20 overflow-hidden">
//       {/* Decorative glowing background */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

//       <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl font-bold text-rose-900 mb-12"
//         >
//           What Our Customers Say 🌿
//         </motion.h2>

//         <div className="relative flex items-center justify-center">
//           {/* Left Button */}
//           <button
//             onClick={prevReview}
//             className="absolute left-0 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
//           >
//             <ChevronLeft className="w-6 h-6 text-rose-700" />
//           </button>

//           {/* Review Card */}
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg border border-rose-100"
//           >
//             <div className="flex justify-center mb-3">
//               {Array.from({ length: reviews[index].rating }).map((_, idx) => (
//                 <Star
//                   key={idx}
//                   className="text-yellow-400 fill-yellow-400 w-6 h-6"
//                 />
//               ))}
//             </div>
//             <p className="text-gray-600 italic mb-4">“{reviews[index].review}”</p>
//             <h4 className="text-lg font-semibold text-rose-800">
//               {reviews[index].name}
//             </h4>
//           </motion.div>

//           {/* Right Button */}
//           <button
//             onClick={nextReview}
//             className="absolute right-0 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
//           >
//             <ChevronRight className="w-6 h-6 text-rose-700" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }







"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Aarav Sharma",
    review:
      "These Ayurvedic medicines have worked wonders for me. The results were natural and effective!",
    rating: 5,
  },
  {
    name: "Priya Verma",
    review:
      "I was skeptical at first, but the herbal supplements really improved my overall health.",
    rating: 4,
  },
  {
    name: "Rohan Mehta",
    review:
      "Excellent quality and fast delivery. Feels safe to use and I’ve noticed real benefits.",
    rating: 5,
  },
  {
    name: "Neha Singh",
    review:
      "Best Ayurvedic store online! Packaging was neat and I loved the customer support.",
    rating: 5,
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const prevReview = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-20 overflow-hidden">
      {/* Decorative glowing background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-gray-900 mb-12"
        >
          What Our Customers Say 🌿
        </motion.h2>

        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={prevReview}
            className="absolute left-0 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Review Card */}
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg border border-gray-200"
          >
            <div className="flex justify-center mb-3">
              {Array.from({ length: reviews[index].rating }).map((_, idx) => (
                <Star
                  key={idx}
                  className="text-yellow-400 fill-yellow-400 w-6 h-6"
                />
              ))}
            </div>
            <p className="text-gray-600 italic mb-4">“{reviews[index].review}”</p>
            <h4 className="text-lg font-semibold text-gray-800">
              {reviews[index].name}
            </h4>
          </motion.div>

          {/* Right Button */}
          <button
            onClick={nextReview}
            className="absolute right-0 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
