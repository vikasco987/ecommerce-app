"use client";

import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center border p-4 rounded-lg">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>₹{item.price} × {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between">
            <button
              onClick={clearCart}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Clear Cart
            </button>
            <p className="text-lg font-bold">
              Total: ₹{cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
