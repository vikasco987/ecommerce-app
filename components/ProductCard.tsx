"use client";
import { useCart } from "@/app/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleBuyNow = () => {
    console.log("Buy Now clicked for:", product); // ✅ Debug log
    addToCart(product);
    console.log("Cart updated"); // ✅ Debug log
  };

  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={handleBuyNow}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Buy Now
      </button>
    </div>
  );
}
