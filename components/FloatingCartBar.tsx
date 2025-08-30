"use client";

import { useCart } from "../src/app/context/CartContext";

export default function FloatingCartBar() {
  const { totalItems, totalPrice } = useCart();

  if (totalItems === 0) return null; // don't show if empty

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-lg bg-white shadow-xl rounded-xl flex items-center justify-between px-6 py-3 border border-gray-200">
      <div className="text-gray-800 font-medium">
        🛒 {totalItems} items | ₹{totalPrice}
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Checkout
      </button>
    </div>
  );
}
