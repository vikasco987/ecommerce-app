// "use client";

// import { useCart } from "../src/app/context/CartContext";

// export default function FloatingCartBar() {
//   const { totalItems, totalPrice } = useCart();

//   if (totalItems === 0) return null; // don't show if empty

//   return (
//     <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-lg bg-white shadow-xl rounded-xl flex items-center justify-between px-6 py-3 border border-gray-200">
//       <div className="text-gray-800 font-medium">
//         🛒 {totalItems} items | ₹{totalPrice}
//       </div>
//       <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//         Checkout
//       </button>
//     </div>
//   );
// }








// "use client";

//  import { useCart } from "../src/app/context/CartContext";

// export default function FloatingCartBar() {
//   const { totalItems, totalPrice } = useCart();

//   if (totalItems === 0) return null; // Don't show the bar if the cart is empty

//   return (
//     <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-50">
//       <div className="flex items-center justify-between px-6 py-4 rounded-full border border-gray-700 shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.01]
//         bg-gradient-to-r from-gray-800 to-gray-900 text-white">

//         {/* Cart Info Section */}
//         <div className="flex items-center space-x-3">
//           {/* Cart Icon using inline SVG for a cleaner look */}
//           <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5.4M7 13l-2.293 2.293c-.63.63-.182 1.629.704 1.629H19.5a1 1 0 00.993-.883L21 11m-1.761 7.152a2 2 0 11-3.528 1.48L16.239 19H7.761c-.528 0-1.04-.153-1.48-.448a2 2 0 11-1.639-2.071L3.999 15.5" />
//           </svg>

//           {/* Item count and total price */}
//           <div className="text-sm font-medium">
//             {totalItems} items | <span className="text-lg font-bold">₹{totalPrice}</span>
//           </div>
//         </div>

//         {/* Checkout Button */}
//         <button className="bg-emerald-500 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg hover:bg-emerald-600 transition-colors duration-200">
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// }











// "use client";

// import { useCart } from "../src/app/context/CartContext";
// import { useRouter } from "next/navigation"; // 👈 import router

// export default function FloatingCartBar() {
//   const { totalItems, totalPrice } = useCart();
//   const router = useRouter(); // 👈 init router

//   if (totalItems === 0) return null; // Don't show the bar if the cart is empty

//   return (
//     <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-50">
//       <div className="flex items-center justify-between px-6 py-4 rounded-full border border-gray-700 shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.01]
//         bg-gradient-to-r from-gray-800 to-gray-900 text-white">

//         {/* Cart Info Section */}
//         <div className="flex items-center space-x-3">
//           {/* Cart Icon */}
//           <svg
//             className="w-6 h-6 text-gray-400"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5.4M7 13l-2.293 2.293c-.63.63-.182 1.629.704 1.629H19.5a1 1 0 00.993-.883L21 11m-1.761 7.152a2 2 0 11-3.528 1.48L16.239 19H7.761c-.528 0-1.04-.153-1.48-.448a2 2 0 11-1.639-2.071L3.999 15.5"
//             />
//           </svg>

//           {/* Item count and total price */}
//           <div className="text-sm font-medium">
//             {totalItems} items | <span className="text-lg font-bold">₹{totalPrice}</span>
//           </div>
//         </div>

//         {/* Checkout Button */}
//         <button
//           onClick={() => router.push("/checkout")} // 👈 redirect to checkout
//           className="bg-emerald-500 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg hover:bg-emerald-600 transition-colors duration-200"
//         >
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// }









"use client";

import { useCart } from "@/app/context/CartContext"; // ✅ fixed path
import { useRouter } from "next/navigation";

export default function FloatingCartBar() {
  const { totalItems, totalPrice } = useCart();
  const router = useRouter();

  if (totalItems === 0) return null; // Don't show if cart is empty

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-50">
      <div className="flex items-center justify-between px-6 py-4 rounded-full border border-gray-700 shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.01] bg-gradient-to-r from-gray-800 to-gray-900 text-white">

        {/* Cart Info Section */}
        <div className="flex items-center space-x-3">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5.4M7 13l-2.293 2.293c-.63.63-.182 1.629.704 1.629H19.5a1 1 0 00.993-.883L21 11m-1.761 7.152a2 2 0 11-3.528 1.48L16.239 19H7.761c-.528 0-1.04-.153-1.48-.448a2 2 0 11-1.639-2.071L3.999 15.5"
            />
          </svg>

          <div className="text-sm font-medium">
            {totalItems} items |{" "}
            <span className="text-lg font-bold">₹{totalPrice}</span>
          </div>
        </div>

        {/* ✅ Checkout navigates to full page */}
        <button
          onClick={() => router.push("/checkout")}
          className="bg-emerald-500 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg hover:bg-emerald-600 transition-colors duration-200"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
