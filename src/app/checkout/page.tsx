// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// export default function CheckoutPage() {
//   const { cart, removeFromCart } = useCart();
//   const router = useRouter();

//   // calculate total price
//   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   if (cart.length === 0) {
//     return (
//       <div className="p-10 text-center">
//         <h2 className="text-2xl font-bold">Your cart is empty</h2>
//         <button
//           className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//           onClick={() => router.push("/")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-10 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Checkout</h1>

//       <div className="space-y-4">
//         {cart.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
//           >
//             {/* Product Image */}
//             <div className="flex items-center gap-4">
//               {item.image && (
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={80}
//                   height={80}
//                   className="rounded-lg"
//                 />
//               )}
//               <div>
//                 <h2 className="font-semibold text-lg">{item.name}</h2>
//                 <p className="text-sm text-gray-500">₹{item.price} x {item.quantity}</p>
//               </div>
//             </div>

//             {/* Price & Remove */}
//             <div className="flex items-center gap-4">
//               <p className="font-semibold">₹{item.price * item.quantity}</p>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Total & WhatsApp Checkout */}
//       <div className="mt-8 flex justify-between items-center border-t pt-4">
//         <h2 className="text-xl font-bold">Total: ₹{totalPrice}</h2>

//         <a
//           href={`https://wa.me/918826073117?text=I want to buy items worth ₹${totalPrice}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
//         >
//           Checkout via WhatsApp
//         </a>
//       </div>
//     </div>
//   );
// }













// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// export default function CheckoutPage() {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const router = useRouter();

//   // calculate total price
//   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   if (cart.length === 0) {
//     return (
//       <div className="p-10 text-center">
//         <h2 className="text-2xl font-bold">Your cart is empty</h2>
//         <button
//           className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//           onClick={() => router.push("/")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   // prepare WhatsApp message with all items
//   const orderSummary = cart
//     .map((item) => `${item.name} x${item.quantity} = ₹${item.price * item.quantity}`)
//     .join("\n");
//   const whatsappMessage = `Hi, I want to place an order:\n\n${orderSummary}\n\nTotal: ₹${totalPrice}`;

//   return (
//     <div className="p-10 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Checkout</h1>

//       <div className="space-y-4">
//         {cart.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
//           >
//             {/* Product Image + Info */}
//             <div className="flex items-center gap-4">
//               {item.image && (
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={80}
//                   height={80}
//                   className="rounded-lg"
//                 />
//               )}
//               <div>
//                 <h2 className="font-semibold text-lg">{item.name}</h2>
//                 <p className="text-sm text-gray-500">
//                   ₹{item.price} x {item.quantity}
//                 </p>
//               </div>
//             </div>

//             {/* Quantity + Remove */}
//             <div className="flex items-center gap-4">
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="font-semibold">₹{item.price * item.quantity}</p>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Total & WhatsApp Checkout */}
//       <div className="mt-8 flex justify-between items-center border-t pt-4">
//         <h2 className="text-xl font-bold">Total: ₹{totalPrice}</h2>

//         <a
//           href={`https://wa.me/918826073117?text=${encodeURIComponent(whatsappMessage)}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
//         >
//           Checkout via WhatsApp
//         </a>
//       </div>
//     </div>
//   );
// }










"use client";

import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CheckoutPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
        <button
          className="mt-5 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          onClick={() => router.push("/")}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const orderSummary = cart
    .map((item) => `${item.name} x${item.quantity} = ₹${item.price * item.quantity}`)
    .join("\n");
  const whatsappMessage = `Hi, I want to place an order:\n\n${orderSummary}\n\nTotal: ₹${totalPrice}`;

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Checkout</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg border"
                />
              )}
              <div>
                <h2 className="font-semibold text-lg text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-500">
                  ₹{item.price} x {item.quantity}
                </p>
              </div>
            </div>

            {/* Quantity + Remove */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <p className="font-semibold text-green-700">₹{item.price * item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total & WhatsApp Checkout */}
      <div className="mt-8 flex justify-between items-center border-t pt-4">
        <h2 className="text-xl font-bold text-gray-800">Total: <span className="text-green-700">₹{totalPrice}</span></h2>

        <a
          href={`https://wa.me/918826073117?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Checkout via WhatsApp
        </a>
      </div>
    </div>
  );
}
