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










// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// export default function CheckoutPage() {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const router = useRouter();

//   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   if (cart.length === 0) {
//     return (
//       <div className="p-10 text-center">
//         <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
//         <button
//           className="mt-5 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//           onClick={() => router.push("/")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   const orderSummary = cart
//     .map((item) => `${item.name} x${item.quantity} = ₹${item.price * item.quantity}`)
//     .join("\n");
//   const whatsappMessage = `Hi, I want to place an order:\n\n${orderSummary}\n\nTotal: ₹${totalPrice}`;

//   return (
//     <div className="p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-3xl font-bold mb-6 text-green-700">Checkout</h1>

//       <div className="space-y-4">
//         {cart.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//           >
//             {/* Product Info */}
//             <div className="flex items-center gap-4">
//               {item.image && (
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={80}
//                   height={80}
//                   className="rounded-lg border"
//                 />
//               )}
//               <div>
//                 <h2 className="font-semibold text-lg text-gray-800">{item.name}</h2>
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
//                 <span className="px-2">{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="font-semibold text-green-700">₹{item.price * item.quantity}</p>
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
//         <h2 className="text-xl font-bold text-gray-800">Total: <span className="text-green-700">₹{totalPrice}</span></h2>

//         <a
//           href={`https://wa.me/919675545748?text=${encodeURIComponent(whatsappMessage)}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
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
// import { useState } from "react";

// // shadcn/ui imports (make sure you installed shadcn/ui)
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// export default function CheckoutPage() {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   if (cart.length === 0) {
//     return (
//       <div className="p-10 text-center">
//         <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
//         <button
//           className="mt-5 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//           onClick={() => router.push("/")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   const orderSummary = cart
//     .map((item) => `${item.name} x${item.quantity} = ₹${item.price * item.quantity}`)
//     .join("\n");

//   const handleConfirmOrder = () => {
//     const whatsappMessage = `Hi, I want to place an order:\n\n${orderSummary}\n\nTotal: ₹${totalPrice}\n\nCustomer Info:\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nAddress: ${form.address}`;
//     const url = `https://wa.me/919675545748?text=${encodeURIComponent(whatsappMessage)}`;
//     window.open(url, "_blank");
//     setOpen(false);
//   };

//   return (
//     <div className="p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-3xl font-bold mb-6 text-green-700">Checkout</h1>

//       <div className="space-y-4">
//         {cart.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//           >
//             {/* Product Info */}
//             <div className="flex items-center gap-4">
//               {item.image && (
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={80}
//                   height={80}
//                   className="rounded-lg border"
//                 />
//               )}
//               <div>
//                 <h2 className="font-semibold text-lg text-gray-800">{item.name}</h2>
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
//                 <span className="px-2">{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="font-semibold text-green-700">₹{item.price * item.quantity}</p>
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

//       {/* Total & Place Order */}
//       <div className="mt-8 flex justify-between items-center border-t pt-4">
//         <h2 className="text-xl font-bold text-gray-800">
//           Total: <span className="text-green-700">₹{totalPrice}</span>
//         </h2>

//         <Button className="bg-green-600 hover:bg-green-700" onClick={() => setOpen(true)}>
//           Place Order
//         </Button>
//       </div>

//       {/* Popup Modal */}
//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>Enter Your Information</DialogTitle>
//           </DialogHeader>

//           <div className="grid gap-4 py-2">
//             <div>
//               <Label>Name</Label>
//               <Input
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <Label>Phone</Label>
//               <Input
//                 type="tel"
//                 value={form.phone}
//                 onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                 placeholder="Enter your phone"
//               />
//             </div>
//             <div>
//               <Label>Email</Label>
//               <Input
//                 type="email"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div>
//               <Label>Address</Label>
//               <Input
//                 value={form.address}
//                 onChange={(e) => setForm({ ...form, address: e.target.value })}
//                 placeholder="Enter delivery address"
//               />
//             </div>
//           </div>

//           <DialogFooter>
//             <Button variant="outline" onClick={() => setOpen(false)}>
//               Cancel
//             </Button>
//             <Button className="bg-green-600 hover:bg-green-700" onClick={handleConfirmOrder}>
//               Confirm Order
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }













"use client";

import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

// shadcn/ui imports
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CheckoutPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Your cart is empty
        </h2>
        <button
          className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
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

  const handleConfirmOrder = () => {
    const whatsappMessage = `Hi, I want to place an order:\n\n${orderSummary}\n\nTotal: ₹${totalPrice}\n\nCustomer Info:\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nAddress: ${form.address}`;
    const url = `https://wa.me/919675545748?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
    setOpen(false);
  };

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
        Checkout
      </h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
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
                <h2 className="font-semibold text-base sm:text-lg text-gray-800">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500">
                  ₹{item.price} x {item.quantity}
                </p>
              </div>
            </div>

            {/* Quantity + Remove */}
            <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
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
              <p className="font-semibold text-green-700">
                ₹{item.price * item.quantity}
              </p>
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

      {/* Total & Place Order */}
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          Total: <span className="text-green-700">₹{totalPrice}</span>
        </h2>

        <Button
          className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
          onClick={() => setOpen(true)}
        >
          Place Order
        </Button>
      </div>

      {/* Popup Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md w-[95%]">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">
              Enter Your Information
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-2">
            <div>
              <Label>Name</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <Label>Phone</Label>
              <Input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Enter your phone"
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <Label>Address</Label>
              <Input
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="Enter delivery address"
              />
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
              onClick={handleConfirmOrder}
            >
              Confirm Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
