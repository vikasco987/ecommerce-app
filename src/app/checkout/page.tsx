








// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";

// // shadcn/ui imports
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
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   if (cart.length === 0) {
//     return (
//       <div className="p-6 text-center">
//         <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//           Your cart is empty
//         </h2>
//         <button
//           className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//           onClick={() => router.push("/")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   const handleConfirmOrder = async () => {
//     // Validate form fields
//     if (!form.name || !form.phone || !form.email || !form.address) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     // Prepare order data
//     const orderData = {
//       products: cart.map(({ _id, name, price, quantity }) => ({
//         _id,
//         name,
//         price,
//         quantity,
//       })),
//       totalPrice,
//       customer: { ...form }, // store customer details
//       createdAt: new Date(),
//     };

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         alert("✅ Order placed successfully!");
//         clearCart(); // clear cart after successful order
//         router.push("/"); // redirect to home or order confirmation page
//       } else {
//         alert("❌ Order failed. Please try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Something went wrong. Please try again.");
//     }

//     setOpen(false);
//   };

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
//         Checkout
//       </h1>

//       <div className="space-y-4">
//         {cart.map((item, index) => (
//           <div
//             key={`${item._id}-${index}`} // unique key
//             className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
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
//                 <h2 className="font-semibold text-base sm:text-lg text-gray-800">
//                   {item.name}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   ₹{item.price} x {item.quantity}
//                 </p>
//               </div>
//             </div>

//             {/* Quantity + Remove */}
//             <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() =>
//                     updateQuantity(item._id, Math.max(1, item.quantity - 1))
//                   }
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span className="px-2">{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="font-semibold text-green-700">
//                 ₹{item.price * item.quantity}
//               </p>
//               <button
//                 onClick={() => removeFromCart(item._id)}
//                 className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Total & Place Order */}
//       <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//           Total: <span className="text-green-700">₹{totalPrice}</span>
//         </h2>

//         <Button
//           className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//           onClick={() => setOpen(true)}
//         >
//           Place Order
//         </Button>
//       </div>

//       {/* Popup Modal */}
//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl">
//               Enter Your Information
//             </DialogTitle>
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
//                 onChange={(e) =>
//                   setForm({ ...form, address: e.target.value })
//                 }
//                 placeholder="Enter delivery address"
//               />
//             </div>
//           </div>

//           <DialogFooter className="flex flex-col sm:flex-row gap-2">
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto"
//               onClick={() => setOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//               onClick={handleConfirmOrder} // ✅ Save order to MongoDB
//             >
//               Confirm Order
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }















// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";

// // shadcn/ui imports
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
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   if (cart.length === 0) {
//     return (
//       <div className="p-6 text-center">
//         <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//           Your cart is empty
//         </h2>
//         <button
//           className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//           onClick={() => router.push("/")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   const handleConfirmOrder = async () => {
//     // Validate form fields
//     if (!form.name || !form.phone || !form.email || !form.address) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     // Prepare order data
//     const orderData = {
//       products: cart.map(({ _id, name, price, quantity }) => ({
//         _id,
//         name,
//         price,
//         quantity,
//       })),
//       totalPrice,
//       customer: { ...form },
//       paymentStatus: "unpaid", // ✅ default unpaid
//       createdAt: new Date(),
//     };

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         alert("✅ Order placed successfully!");
//         clearCart(); // clear cart after successful order
//         router.push("/"); // redirect to home or order confirmation page
//       } else {
//         alert("❌ Order failed. Please try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Something went wrong. Please try again.");
//     }

//     setOpen(false);
//   };

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
//         Checkout
//       </h1>

//       <div className="space-y-4">
//         {cart.map((item, index) => (
//           <div
//             key={`${item._id}-${index}`}
//             className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//           >
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
//                 <h2 className="font-semibold text-base sm:text-lg text-gray-800">
//                   {item.name}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   ₹{item.price} x {item.quantity}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() =>
//                     updateQuantity(item._id, Math.max(1, item.quantity - 1))
//                   }
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span className="px-2">{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="font-semibold text-green-700">
//                 ₹{item.price * item.quantity}
//               </p>
//               <button
//                 onClick={() => removeFromCart(item._id)}
//                 className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//           Total: <span className="text-green-700">₹{totalPrice}</span>
//         </h2>

//         <Button
//           className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//           onClick={() => setOpen(true)}
//         >
//           Place Order
//         </Button>
//       </div>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl">
//               Enter Your Information
//             </DialogTitle>
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
//                 onChange={(e) =>
//                   setForm({ ...form, address: e.target.value })
//                 }
//                 placeholder="Enter delivery address"
//               />
//             </div>
//           </div>

//           <DialogFooter className="flex flex-col sm:flex-row gap-2">
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto"
//               onClick={() => setOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//               onClick={handleConfirmOrder}
//             >
//               Confirm Order
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }






































// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";

// // shadcn/ui imports
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
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   if (cart.length === 0) {
//     return (
//       <div className="p-6 text-center">
//         <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//           Your cart is empty
//         </h2>
//         <button
//           className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//           onClick={() => router.push("/")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   const handleConfirmOrder = async () => {
//     // Validate form fields
//     if (!form.name || !form.phone || !form.email || !form.address) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     // Prepare order data
//     const orderData = {
//       products: cart.map(({ _id, name, price, quantity }) => ({
//         _id,
//         name,
//         price,
//         quantity,
//       })),
//       totalPrice,
//       customer: { ...form },           // ✅ store customer info
//       paymentStatus: "unpaid",          // ✅ default unpaid
//       createdAt: new Date(),
//     };

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         alert("✅ Order placed successfully!");
//         clearCart();                       // clear cart
//         router.push("/");                  // redirect
//       } else {
//         alert("❌ Order failed. Please try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Something went wrong. Please try again.");
//     }

//     setOpen(false);
//   };

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
//         Checkout
//       </h1>

//       <div className="space-y-4">
//         {cart.map((item, index) => (
//           <div
//             key={`${item._id}-${index}`}
//             className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//           >
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
//                 <h2 className="font-semibold text-base sm:text-lg text-gray-800">
//                   {item.name}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   ₹{item.price} x {item.quantity}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() =>
//                     updateQuantity(item._id, Math.max(1, item.quantity - 1))
//                   }
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span className="px-2">{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="font-semibold text-green-700">
//                 ₹{item.price * item.quantity}
//               </p>
//               <button
//                 onClick={() => removeFromCart(item._id)}
//                 className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//           Total: <span className="text-green-700">₹{totalPrice}</span>
//         </h2>

//         <Button
//           className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//           onClick={() => setOpen(true)}
//         >
//           Place Order
//         </Button>
//       </div>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl">
//               Enter Your Information
//             </DialogTitle>
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
//                 onChange={(e) =>
//                   setForm({ ...form, address: e.target.value })
//                 }
//                 placeholder="Enter delivery address"
//               />
//             </div>
//           </div>

//           <DialogFooter className="flex flex-col sm:flex-row gap-2">
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto"
//               onClick={() => setOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//               onClick={handleConfirmOrder}
//             >
//               Confirm Order
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }












// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";

// // shadcn/ui imports
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
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   if (cart.length === 0) {
//     return (
//       <div className="p-6 text-center">
//         <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//           Your cart is empty
//         </h2>
//         <button
//           className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//           onClick={() => router.push("/")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   const handleConfirmOrder = async () => {
//     // Validate form fields
//     if (!form.name || !form.phone || !form.email || !form.address) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     // Prepare order data
//     const orderData = {
//       products: cart.map(({ _id, name, price, quantity }) => ({
//         _id,
//         name,
//         price,
//         quantity,
//       })),
//       totalPrice,
//       customer: { ...form },
//       paymentStatus: "unpaid", // default unpaid
//       createdAt: new Date(),
//     };

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         const orderId = result.order._id; // ✅ capture order ID

//         // Redirect to payment page with orderId
//         router.push(`/payment/${orderId}`);
//       } else {
//         alert("❌ Order failed. Please try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Something went wrong. Please try again.");
//     }

//     setOpen(false);
//   };

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
//         Checkout
//       </h1>

//       <div className="space-y-4">
//         {cart.map((item, index) => (
//           <div
//             key={`${item._id}-${index}`}
//             className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//           >
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
//                 <h2 className="font-semibold text-base sm:text-lg text-gray-800">
//                   {item.name}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   ₹{item.price} x {item.quantity}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() =>
//                     updateQuantity(item._id, Math.max(1, item.quantity - 1))
//                   }
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span className="px-2">{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="font-semibold text-green-700">
//                 ₹{item.price * item.quantity}
//               </p>
//               <button
//                 onClick={() => removeFromCart(item._id)}
//                 className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//           Total: <span className="text-green-700">₹{totalPrice}</span>
//         </h2>

//         <Button
//           className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//           onClick={() => setOpen(true)}
//         >
//           Place Order
//         </Button>
//       </div>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl">
//               Enter Your Information
//             </DialogTitle>
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
//                 onChange={(e) =>
//                   setForm({ ...form, address: e.target.value })
//                 }
//                 placeholder="Enter delivery address"
//               />
//             </div>
//           </div>

//           <DialogFooter className="flex flex-col sm:flex-row gap-2">
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto"
//               onClick={() => setOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//               onClick={handleConfirmOrder}
//             >
//               Confirm Order
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }












// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";

// // shadcn/ui imports
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
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   if (cart.length === 0) {
//     return (
//       <div className="p-6 text-center">
//         <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//           Your cart is empty
//         </h2>
//         <button
//           className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//           onClick={() => router.push("/")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   const handleConfirmOrder = async () => {
//     // Validate form fields
//     if (!form.name || !form.phone || !form.email || !form.address) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     // Prepare order data
//     const orderData = {
//       products: cart.map(({ _id, name, price, quantity }) => ({
//         _id,
//         name,
//         price,
//         quantity,
//       })),
//       totalPrice,
//       customer: { ...form },
//       paymentStatus: "unpaid", // default unpaid
//       createdAt: new Date(),
//     };

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         clearCart(); // clear cart

//         // ✅ Redirect to payment page with orderId
//         const orderId = result.order._id;
//         router.push(`/payment/${orderId}`);
//       } else {
//         alert("❌ Order failed. Please try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Something went wrong. Please try again.");
//     }

//     setOpen(false);
//   };

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
//         Checkout
//       </h1>

//       <div className="space-y-4">
//         {cart.map((item, index) => (
//           <div
//             key={`${item._id}-${index}`}
//             className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//           >
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
//                 <h2 className="font-semibold text-base sm:text-lg text-gray-800">
//                   {item.name}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   ₹{item.price} x {item.quantity}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() =>
//                     updateQuantity(item._id, Math.max(1, item.quantity - 1))
//                   }
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span className="px-2">{item.quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(item._id, item.quantity + 1)}
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="font-semibold text-green-700">
//                 ₹{item.price * item.quantity}
//               </p>
//               <button
//                 onClick={() => removeFromCart(item._id)}
//                 className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//           Total: <span className="text-green-700">₹{totalPrice}</span>
//         </h2>

//         <Button
//           className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//           onClick={() => setOpen(true)}
//         >
//           Place Order
//         </Button>
//       </div>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl">
//               Enter Your Information
//             </DialogTitle>
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
//                 onChange={(e) =>
//                   setForm({ ...form, address: e.target.value })
//                 }
//                 placeholder="Enter delivery address"
//               />
//             </div>
//           </div>

//           <DialogFooter className="flex flex-col sm:flex-row gap-2">
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto"
//               onClick={() => setOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//               onClick={handleConfirmOrder}
//             >
//               Confirm Order
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }












// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";

// // shadcn/ui imports
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
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   if (cart.length === 0) {
//     return (
//       <div className="p-6 text-center">
//         <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//           Your cart is empty
//         </h2>
//         <button
//           className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//           onClick={() => router.push("/")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   const handleConfirmOrder = async () => {
//     // Validate form fields
//     if (!form.name || !form.phone || !form.email || !form.address) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     // Prepare order data
//     const orderData = {
//       products: cart.map(({ id, name, price, quantity }) => ({
//         id,
//         name,
//         price,
//         quantity,
//       })),
//       totalPrice,
//       customer: { ...form },
//       paymentStatus: "unpaid", // default unpaid
//       createdAt: new Date(),
//     };

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         clearCart(); // clear cart

//         // ✅ Redirect to payment page with orderId
//         const orderId = result.order._id;
//         router.push(`/payment/${orderId}`);
//       } else {
//         alert("❌ Order failed. Please try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Something went wrong. Please try again.");
//     }

//     setOpen(false);
//   };

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
//         Checkout
//       </h1>

//       <div className="space-y-4">
//         {cart.map((item, index) => (
//           <div
//             key={`${item.id}-${index}`}
//             className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//           >
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
//                 <h2 className="font-semibold text-base sm:text-lg text-gray-800">
//                   {item.name}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   ₹{item.price} x {item.quantity}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() =>
//                     updateQuantity(item.id, Math.max(1, item.quantity - 1))
//                   }
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
//               <p className="font-semibold text-green-700">
//                 ₹{item.price * item.quantity}
//               </p>
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

//       <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//           Total: <span className="text-green-700">₹{totalPrice}</span>
//         </h2>

//         <Button
//           className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//           onClick={() => setOpen(true)}
//         >
//           Place Order
//         </Button>
//       </div>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl">
//               Enter Your Information
//             </DialogTitle>
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

//           <DialogFooter className="flex flex-col sm:flex-row gap-2">
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto"
//               onClick={() => setOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//               onClick={handleConfirmOrder}
//             >
//               Confirm Order
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }











// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";

// // shadcn/ui imports
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
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   if (cart.length === 0) {
//     return (
//       <div className="p-6 text-center">
//         <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//           Your cart is empty
//         </h2>
//         <button
//           className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//           onClick={() => router.push("/")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   const handleConfirmOrder = async () => {
//     // Validate form fields
//     if (!form.name || !form.phone || !form.email || !form.address) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     // Prepare order data - use _id instead of id
//     const orderData = {
//       products: cart.map(({ _id, name, price, quantity }) => ({
//         _id, // ✅ ensure backend receives _id
//         name,
//         price,
//         quantity,
//       })),
//       totalPrice,
//       customer: { ...form },
//       paymentStatus: "unpaid",
//       createdAt: new Date(),
//     };

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         clearCart(); // clear cart

//         // Redirect to payment page with orderId
//         const orderId = result.order._id;
//         router.push(`/payment/${orderId}`);
//       } else {
//         alert("❌ Order failed. Please try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Something went wrong. Please try again.");
//     }

//     setOpen(false);
//   };

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
//         Checkout
//       </h1>

//       <div className="space-y-4">
//         {cart.map((item, index) => (
//           <div
//             key={`${item._id}-${index}`} // use _id
//             className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//           >
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
//                 <h2 className="font-semibold text-base sm:text-lg text-gray-800">
//                   {item.name}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   ₹{item.price} x {item.quantity}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() =>
//                     updateQuantity(item._id, Math.max(1, item.quantity - 1))
//                   }
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span className="px-2">{item.quantity}</span>
//                 <button
//                   onClick={() =>
//                     updateQuantity(item._id, item.quantity + 1)
//                   }
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="font-semibold text-green-700">
//                 ₹{item.price * item.quantity}
//               </p>
//               <button
//                 onClick={() => removeFromCart(item._id)}
//                 className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//           Total: <span className="text-green-700">₹{totalPrice}</span>
//         </h2>

//         <Button
//           className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//           onClick={() => setOpen(true)}
//         >
//           Place Order
//         </Button>
//       </div>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl">
//               Enter Your Information
//             </DialogTitle>
//           </DialogHeader>

//           <div className="grid gap-4 py-2">
//             <div>
//               <Label>Name</Label>
//               <Input
//                 value={form.name}
//                 onChange={(e) =>
//                   setForm({ ...form, name: e.target.value })
//                 }
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <Label>Phone</Label>
//               <Input
//                 type="tel"
//                 value={form.phone}
//                 onChange={(e) =>
//                   setForm({ ...form, phone: e.target.value })
//                 }
//                 placeholder="Enter your phone"
//               />
//             </div>
//             <div>
//               <Label>Email</Label>
//               <Input
//                 type="email"
//                 value={form.email}
//                 onChange={(e) =>
//                   setForm({ ...form, email: e.target.value })
//                 }
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div>
//               <Label>Address</Label>
//               <Input
//                 value={form.address}
//                 onChange={(e) =>
//                   setForm({ ...form, address: e.target.value })
//                 }
//                 placeholder="Enter delivery address"
//               />
//             </div>
//           </div>

//           <DialogFooter className="flex flex-col sm:flex-row gap-2">
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto"
//               onClick={() => setOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//               onClick={handleConfirmOrder}
//             >
//               Confirm Order
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }













// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";

// // shadcn/ui imports
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
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   if (cart.length === 0) {
//     return (
//       <div className="p-6 text-center">
//         <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//           Your cart is empty
//         </h2>
//         <button
//           className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//           onClick={() => router.push("/")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   const handleConfirmOrder = async () => {
//     if (!form.name || !form.phone || !form.email || !form.address) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     const orderData = {
//       products: cart.map(({ _id, name, price, quantity }) => ({
//         _id,
//         name,
//         price,
//         quantity,
//       })),
//       totalPrice,
//       customer: { ...form },
//       paymentStatus: "unpaid",
//       createdAt: new Date(),
//     };

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         clearCart();
//         const orderId = result.order._id;
//         router.push(`/payment/${orderId}`);
//       } else {
//         alert("❌ Order failed. Please try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Something went wrong. Please try again.");
//     }

//     setOpen(false);
//   };

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
//         Checkout
//       </h1>

//       <div className="space-y-4">
//         {cart.map((item, index) => (
//           <div
//             key={`${item._id}-${index}`}
//             className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//           >
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
//                 <h2 className="font-semibold text-base sm:text-lg text-gray-800">
//                   {item.name}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   ₹{item.price} x {item.quantity}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() =>
//                     updateQuantity(item._id!, Math.max(1, item.quantity - 1))
//                   }
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span className="px-2">{item.quantity}</span>
//                 <button
//                   onClick={() =>
//                     updateQuantity(item._id!, item.quantity + 1)
//                   }
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="font-semibold text-green-700">
//                 ₹{item.price * item.quantity}
//               </p>
//               <button
//                 onClick={() => removeFromCart(item._id!)}
//                 className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//           Total: <span className="text-green-700">₹{totalPrice}</span>
//         </h2>

//         <Button
//           className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//           onClick={() => setOpen(true)}
//         >
//           Place Order
//         </Button>
//       </div>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl">
//               Enter Your Information
//             </DialogTitle>
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
//                 onChange={(e) =>
//                   setForm({ ...form, address: e.target.value })
//                 }
//                 placeholder="Enter delivery address"
//               />
//             </div>
//           </div>

//           <DialogFooter className="flex flex-col sm:flex-row gap-2">
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto"
//               onClick={() => setOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//               onClick={handleConfirmOrder}
//             >
//               Confirm Order
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }





// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";

// // shadcn/ui imports
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
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   if (cart.length === 0) {
//     return (
//       <div className="p-6 text-center">
//         <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//           Your cart is empty
//         </h2>
//         <button
//           className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//           onClick={() => router.push("/")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   const handleConfirmOrder = async () => {
//     if (!form.name || !form.phone || !form.email || !form.address) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     // ✅ FIX: filter out products with missing _id
//     const orderData = {
//       products: cart
//         .filter(item => item._id) // only keep items with valid _id
//         .map(item => ({
//           _id: item._id!, // non-null assertion
//           name: item.name,
//           price: item.price,
//           quantity: item.quantity,
//         })),
//       totalPrice,
//       customer: { ...form },
//       paymentStatus: "unpaid",
//       createdAt: new Date(),
//     };

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         clearCart();
//         const orderId = result.order._id;
//         router.push(`/payment/${orderId}`);
//       } else {
//         alert("❌ Order failed. Please try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Something went wrong. Please try again.");
//     }

//     setOpen(false);
//   };

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
//         Checkout
//       </h1>

//       <div className="space-y-4">
//         {cart.map((item, index) => (
//           <div
//             key={`${item._id}-${index}`}
//             className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//           >
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
//                 <h2 className="font-semibold text-base sm:text-lg text-gray-800">
//                   {item.name}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   ₹{item.price} x {item.quantity}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() =>
//                     updateQuantity(item._id!, Math.max(1, item.quantity - 1))
//                   }
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span className="px-2">{item.quantity}</span>
//                 <button
//                   onClick={() =>
//                     updateQuantity(item._id!, item.quantity + 1)
//                   }
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="font-semibold text-green-700">
//                 ₹{item.price * item.quantity}
//               </p>
//               <button
//                 onClick={() => removeFromCart(item._id!)}
//                 className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//           Total: <span className="text-green-700">₹{totalPrice}</span>
//         </h2>

//         <Button
//           className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//           onClick={() => setOpen(true)}
//         >
//           Place Order
//         </Button>
//       </div>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl">
//               Enter Your Information
//             </DialogTitle>
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
//                 onChange={(e) =>
//                   setForm({ ...form, address: e.target.value })
//                 }
//                 placeholder="Enter delivery address"
//               />
//             </div>
//           </div>

//           <DialogFooter className="flex flex-col sm:flex-row gap-2">
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto"
//               onClick={() => setOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//               onClick={handleConfirmOrder}
//             >
//               Confirm Order
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }










// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";

// // shadcn/ui imports
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
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + Number(item.price) * Number(item.quantity),
//     0
//   );

//   if (cart.length === 0) {
//     return (
//       <div className="p-6 text-center">
//         <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//           Your cart is empty
//         </h2>
//         <button
//           className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//           onClick={() => router.push("/")}
//         >
//           Continue Shopping
//         </button>
//       </div>
//     );
//   }

//   const handleConfirmOrder = async () => {
//     if (!form.name || !form.phone || !form.email || !form.address) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     const orderData = {
//       products: cart
//         .map((item) => ({
//           _id: item._id || item.id, // fallback to `id` if `_id` missing
//           name: item.name,
//           price: Number(item.price),
//           quantity: Number(item.quantity),
//         }))
//         .filter(
//           (item) => item._id && !isNaN(item.price) && !isNaN(item.quantity)
//         ),
//       totalPrice,
//       customer: { ...form },
//       paymentStatus: "unpaid",
//       createdAt: new Date(),
//     };

//     if (!orderData.products.length) {
//       alert("❌ No valid products to place order.");
//       return;
//     }

//     setLoading(true);

//     try {
//       console.log("Order Data:", orderData); // debug
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         clearCart();
//         const orderId = result.order._id;
//         router.push(`/payment/${orderId}`);
//       } else {
//         console.error("Order failed:", result.error);
//         alert(`❌ Order failed: ${result.error || "Please try again."}`);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//       setOpen(false);
//     }
//   };

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
//         Checkout
//       </h1>

//       <div className="space-y-4">
//         {cart.map((item, index) => (
//           <div
//             key={`${item._id || item.id}-${index}`}
//             className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//           >
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
//                 <h2 className="font-semibold text-base sm:text-lg text-gray-800">
//                   {item.name}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   ₹{item.price} x {item.quantity}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() =>
//                     updateQuantity(
//                       item._id || item.id,
//                       Math.max(1, item.quantity - 1)
//                     )
//                   }
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span className="px-2">{item.quantity}</span>
//                 <button
//                   onClick={() =>
//                     updateQuantity(item._id || item.id, item.quantity + 1)
//                   }
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="font-semibold text-green-700">
//                 ₹{item.price * item.quantity}
//               </p>
//               <button
//                 onClick={() => removeFromCart(item._id || item.id)}
//                 className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//           Total: <span className="text-green-700">₹{totalPrice}</span>
//         </h2>

//         <Button
//           className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//           onClick={() => setOpen(true)}
//           disabled={loading}
//         >
//           {loading ? "Placing Order..." : "Place Order"}
//         </Button>
//       </div>

//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl">
//               Enter Your Information
//             </DialogTitle>
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
//                 onChange={(e) =>
//                   setForm({ ...form, address: e.target.value })
//                 }
//                 placeholder="Enter delivery address"
//               />
//             </div>
//           </div>

//           <DialogFooter className="flex flex-col sm:flex-row gap-2">
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto"
//               onClick={() => setOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button
//               className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//               onClick={handleConfirmOrder}
//               disabled={loading}
//             >
//               {loading ? "Placing Order..." : "Confirm Order"}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }







// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";
// import UpiQRCode from "@/components/UpiQRCode";

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
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [orderId, setOrderId] = useState<string | null>(null);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + Number(item.price) * Number(item.quantity),
//     0
//   );

//   const handleConfirmOrder = async () => {
//     if (!form.name || !form.phone || !form.email || !form.address) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     const orderData = {
//       products: cart.map((item) => ({
//         _id: item._id || item.id,
//         name: item.name,
//         price: Number(item.price),
//         quantity: Number(item.quantity),
//       })),
//       totalPrice,
//       customer: { ...form },
//       paymentStatus: "unpaid",
//       createdAt: new Date(),
//     };

//     setLoading(true);

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         clearCart();
//         // Update orderId AFTER dialogOpen is true, force re-render of QR
//         setOrderId(result.order._id);
//       } else {
//         alert(`❌ Order failed: ${result.error || "Please try again."}`);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
//         Checkout
//       </h1>

//       <div className="space-y-4">
//         {cart.map((item, index) => (
//           <div
//             key={`${item._id || item.id}-${index}`}
//             className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//           >
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
//                 <h2 className="font-semibold text-base sm:text-lg text-gray-800">
//                   {item.name}
//                 </h2>
//                 <p className="text-sm text-gray-500">
//                   ₹{item.price} x {item.quantity}
//                 </p>
//               </div>
//             </div>

//             <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() =>
//                     updateQuantity(
//                       item._id || item.id,
//                       Math.max(1, item.quantity - 1)
//                     )
//                   }
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span className="px-2">{item.quantity}</span>
//                 <button
//                   onClick={() =>
//                     updateQuantity(item._id || item.id, item.quantity + 1)
//                   }
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//               <p className="font-semibold text-green-700">
//                 ₹{item.price * item.quantity}
//               </p>
//               <button
//                 onClick={() => removeFromCart(item._id || item.id)}
//                 className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//           Total: <span className="text-green-700">₹{totalPrice}</span>
//         </h2>

//         <Button
//           className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//           onClick={() => setDialogOpen(true)} // open dialog
//           disabled={loading}
//         >
//           {loading ? "Placing Order..." : "Place Order"}
//         </Button>
//       </div>

//       <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl">
//               {!orderId ? "Enter Your Information" : "Scan QR to Pay"}
//             </DialogTitle>
//           </DialogHeader>

//           {!orderId ? (
//             <div className="grid gap-4 py-2">
//               <div>
//                 <Label>Name</Label>
//                 <Input
//                   value={form.name}
//                   onChange={(e) =>
//                     setForm({ ...form, name: e.target.value })
//                   }
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div>
//                 <Label>Phone</Label>
//                 <Input
//                   type="tel"
//                   value={form.phone}
//                   onChange={(e) =>
//                     setForm({ ...form, phone: e.target.value })
//                   }
//                   placeholder="Enter your phone"
//                 />
//               </div>
//               <div>
//                 <Label>Email</Label>
//                 <Input
//                   type="email"
//                   value={form.email}
//                   onChange={(e) =>
//                     setForm({ ...form, email: e.target.value })
//                   }
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div>
//                 <Label>Address</Label>
//                 <Input
//                   value={form.address}
//                   onChange={(e) =>
//                     setForm({ ...form, address: e.target.value })
//                   }
//                   placeholder="Enter delivery address"
//                 />
//               </div>
//             </div>
//           ) : (
//             // Force QR re-render by key={orderId}
//             <div key={orderId}>
//               <UpiQRCode amount={totalPrice} orderId={orderId} />
//             </div>
//           )}

//           <DialogFooter className="flex flex-col sm:flex-row gap-2">
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto"
//               onClick={() => {
//                 setDialogOpen(false);
//                 setOrderId(null); // reset for next checkout
//               }}
//             >
//               {orderId ? "Close" : "Cancel"}
//             </Button>
//             {!orderId && (
//               <Button
//                 className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//                 onClick={handleConfirmOrder}
//                 disabled={loading}
//               >
//                 {loading ? "Placing Order..." : "Confirm Order"}
//               </Button>
//             )}
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }










// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";
// import UpiQRCode from "@/components/UpiQRCode";

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
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();

//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [orderId, setOrderId] = useState<string | null>(null);
//   const [qrAmount, setQrAmount] = useState<number>(0);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + Number(item.price) * Number(item.quantity),
//     0
//   );

//   const handleConfirmOrder = async () => {
//     if (!form.name || !form.phone || !form.email || !form.address) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     const orderData = {
//       products: cart.map((item) => ({
//         _id: item._id || item.id,
//         name: item.name,
//         price: Number(item.price),
//         quantity: Number(item.quantity),
//       })),
//       totalPrice,
//       customer: { ...form },
//       paymentStatus: "unpaid",
//       createdAt: new Date(),
//     };

//     setLoading(true);

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         setQrAmount(totalPrice); // store total price for QR
//         setOrderId(result.order._id); // show QR
//         // DO NOT clear cart here
//       } else {
//         alert(`❌ Order failed: ${result.error || "Please try again."}`);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
//         Checkout
//       </h1>

//       {cart.length === 0 && !orderId ? (
//         <div className="p-6 text-center">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//             Your cart is empty
//           </h2>
//           <button
//             className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//             onClick={() => router.push("/")}
//           >
//             Continue Shopping
//           </button>
//         </div>
//       ) : (
//         <>
//           <div className="space-y-4">
//             {cart.map((item, index) => (
//               <div
//                 key={`${item._id || item.id}-${index}`}
//                 className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//               >
//                 <div className="flex items-center gap-4">
//                   {item.image && (
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       width={80}
//                       height={80}
//                       className="rounded-lg border"
//                     />
//                   )}
//                   <div>
//                     <h2 className="font-semibold text-base sm:text-lg text-gray-800">
//                       {item.name}
//                     </h2>
//                     <p className="text-sm text-gray-500">
//                       ₹{item.price} x {item.quantity}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() =>
//                         updateQuantity(
//                           item._id || item.id,
//                           Math.max(1, item.quantity - 1)
//                         )
//                       }
//                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                     >
//                       -
//                     </button>
//                     <span className="px-2">{item.quantity}</span>
//                     <button
//                       onClick={() =>
//                         updateQuantity(item._id || item.id, item.quantity + 1)
//                       }
//                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                     >
//                       +
//                     </button>
//                   </div>
//                   <p className="font-semibold text-green-700">
//                     ₹{item.price * item.quantity}
//                   </p>
//                   <button
//                     onClick={() => removeFromCart(item._id || item.id)}
//                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
//             <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//               Total: <span className="text-green-700">₹{totalPrice}</span>
//             </h2>

//             <Button
//               className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//               onClick={() => setDialogOpen(true)}
//               disabled={loading}
//             >
//               {loading ? "Placing Order..." : "Place Order"}
//             </Button>
//           </div>
//         </>
//       )}

//       <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl">
//               {!orderId ? "Enter Your Information" : "Scan QR to Pay"}
//             </DialogTitle>
//           </DialogHeader>

//           {!orderId ? (
//             <div className="grid gap-4 py-2">
//               <div>
//                 <Label>Name</Label>
//                 <Input
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div>
//                 <Label>Phone</Label>
//                 <Input
//                   type="tel"
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                   placeholder="Enter your phone"
//                 />
//               </div>
//               <div>
//                 <Label>Email</Label>
//                 <Input
//                   type="email"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div>
//                 <Label>Address</Label>
//                 <Input
//                   value={form.address}
//                   onChange={(e) =>
//                     setForm({ ...form, address: e.target.value })
//                   }
//                   placeholder="Enter delivery address"
//                 />
//               </div>
//             </div>
//           ) : (
//             <div key={orderId} className="flex flex-col items-center gap-4 py-4">
//               <UpiQRCode amount={qrAmount} orderId={orderId} />
//             </div>
//           )}

//           <DialogFooter className="flex flex-col sm:flex-row gap-2">
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto"
//               onClick={() => {
//                 setDialogOpen(false);
//                 setOrderId(null);
//                 clearCart(); // clear cart AFTER QR is shown
//               }}
//             >
//               {orderId ? "Close" : "Cancel"}
//             </Button>
//             {!orderId && (
//               <Button
//                 className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//                 onClick={handleConfirmOrder}
//                 disabled={loading}
//               >
//                 {loading ? "Placing Order..." : "Confirm Order"}
//               </Button>
//             )}
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }














// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";
// import UpiQRCode from "@/components/UpiQRCode";

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
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();

//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [orderId, setOrderId] = useState<string | null>(null);
//   const [qrAmount, setQrAmount] = useState<number>(0);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + Number(item.price) * Number(item.quantity),
//     0
//   );

//   const handleConfirmOrder = async () => {
//     if (!form.name || !form.phone || !form.email || !form.address) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     const orderData = {
//       products: cart.map((item) => ({
//         _id: item._id || item.id,
//         name: item.name,
//         price: Number(item.price),
//         quantity: Number(item.quantity),
//       })),
//       totalPrice,
//       customer: { ...form },
//       paymentStatus: "unpaid",
//       createdAt: new Date(),
//     };

//     setLoading(true);

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         setQrAmount(totalPrice);
//         setOrderId(result.order._id);
//       } else {
//         alert(`❌ Order failed: ${result.error || "Please try again."}`);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
//         Checkout
//       </h1>

//       {cart.length === 0 && !orderId ? (
//         <div className="p-6 text-center">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//             Your cart is empty
//           </h2>
//           <button
//             className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//             onClick={() => router.push("/")}
//           >
//             Continue Shopping
//           </button>
//         </div>
//       ) : (
//         <>
//           <div className="space-y-4">
//             {cart.map((item, index) => (
//               <div
//                 key={`${item._id || item.id}-${index}`}
//                 className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//               >
//                 <div className="flex items-center gap-4">
//                   {item.image && (
//                     <Image
//                       src={item.image}
//                       alt={item.name}
//                       width={80}
//                       height={80}
//                       className="rounded-lg border"
//                     />
//                   )}
//                   <div>
//                     <h2 className="font-semibold text-base sm:text-lg text-gray-800">
//                       {item.name}
//                     </h2>
//                     <p className="text-sm text-gray-500">
//                       ₹{item.price} x {item.quantity}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() =>
//                         updateQuantity(
//                           item._id || item.id,
//                           Math.max(1, item.quantity - 1)
//                         )
//                       }
//                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                     >
//                       -
//                     </button>
//                     <span className="px-2">{item.quantity}</span>
//                     <button
//                       onClick={() =>
//                         updateQuantity(item._id || item.id, item.quantity + 1)
//                       }
//                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                     >
//                       +
//                     </button>
//                   </div>
//                   <p className="font-semibold text-green-700">
//                     ₹{item.price * item.quantity}
//                   </p>
//                   <button
//                     onClick={() => removeFromCart(item._id || item.id)}
//                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
//             <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//               Total: <span className="text-green-700">₹{totalPrice}</span>
//             </h2>

//             <Button
//               className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//               onClick={() => setDialogOpen(true)}
//               disabled={loading}
//             >
//               {loading ? "Placing Order..." : "Place Order"}
//             </Button>
//           </div>
//         </>
//       )}

//       <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl">
//               {!orderId ? "Enter Your Information" : "Scan QR to Pay"}
//             </DialogTitle>
//           </DialogHeader>

//           {!orderId ? (
//             <div className="grid gap-4 py-2">
//               <div>
//                 <Label>Name</Label>
//                 <Input
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div>
//                 <Label>Phone</Label>
//                 <Input
//                   type="tel"
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                   placeholder="Enter your phone"
//                 />
//               </div>
//               <div>
//                 <Label>Email</Label>
//                 <Input
//                   type="email"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div>
//                 <Label>Address</Label>
//                 <Input
//                   value={form.address}
//                   onChange={(e) =>
//                     setForm({ ...form, address: e.target.value })
//                   }
//                   placeholder="Enter delivery address"
//                 />
//               </div>
//             </div>
//           ) : (
//             <div key={orderId} className="flex flex-col items-center gap-4 py-4">
//               <UpiQRCode amount={qrAmount} orderId={orderId} />
//             </div>
//           )}

//           <DialogFooter className="flex flex-col sm:flex-row gap-2">
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto"
//               onClick={() => {
//                 setDialogOpen(false);
//                 setOrderId(null);
//                 clearCart(); // clear cart AFTER QR is shown
//               }}
//             >
//               {orderId ? "Close" : "Cancel"}
//             </Button>
//             {!orderId && (
//               <Button
//                 className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//                 onClick={handleConfirmOrder}
//                 disabled={loading}
//               >
//                 {loading ? "Placing Order..." : "Confirm Order"}
//               </Button>
//             )}
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }




// // src/app/checkout/page.tsx
// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";
// import UpiQRCode from "@/components/UpiQRCode";

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

// // ✅ helper to clean Drive links & remove trailing spaces
// function sanitizeImageUrl(url?: string): string {
//   if (!url) return "/placeholder.png";
//   return url
//     .trim()
//     .replace(
//       /https:\/\/drive\.google\.com\/file\/d\/([^/]+)\/view.*/,
//       "https://drive.google.com/uc?export=view&id=$1"
//     );
// }

// export default function CheckoutPage() {
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();

//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [orderId, setOrderId] = useState<string | null>(null);
//   const [qrAmount, setQrAmount] = useState<number>(0);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + Number(item.price) * Number(item.quantity),
//     0
//   );

//   const handleConfirmOrder = async () => {
//     if (!form.name || !form.phone || !form.email || !form.address) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     const orderData = {
//       products: cart.map((item) => ({
//         _id: item._id || item.id,
//         name: item.name,
//         price: Number(item.price),
//         quantity: Number(item.quantity),
//       })),
//       totalPrice,
//       customer: { ...form },
//       paymentStatus: "unpaid",
//       createdAt: new Date(),
//     };

//     setLoading(true);

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         setQrAmount(totalPrice);
//         setOrderId(result.order._id);
//       } else {
//         alert(`❌ Order failed: ${result.error || "Please try again."}`);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
//         Checkout
//       </h1>

//       {cart.length === 0 && !orderId ? (
//         <div className="p-6 text-center">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//             Your cart is empty
//           </h2>
//           <button
//             className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//             onClick={() => router.push("/")}
//           >
//             Continue Shopping
//           </button>
//         </div>
//       ) : (
//         <>
//           <div className="space-y-4">
//             {cart.map((item, index) => (
//               <div
//                 key={`${item._id || item.id}-${index}`}
//                 className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//               >
//                 <div className="flex items-center gap-4">
//                   {item.image && (
//                     <Image
//                       src={sanitizeImageUrl(item.image)} // ✅ sanitize
//                       alt={item.name}
//                       width={80}
//                       height={80}
//                       className="rounded-lg border object-contain"
//                     />
//                   )}
//                   <div>
//                     <h2 className="font-semibold text-base sm:text-lg text-gray-800">
//                       {item.name}
//                     </h2>
//                     <p className="text-sm text-gray-500">
//                       ₹{item.price} x {item.quantity}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() =>
//                         updateQuantity(
//                           item._id || item.id,
//                           Math.max(1, item.quantity - 1)
//                         )
//                       }
//                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                     >
//                       -
//                     </button>
//                     <span className="px-2">{item.quantity}</span>
//                     <button
//                       onClick={() =>
//                         updateQuantity(item._id || item.id, item.quantity + 1)
//                       }
//                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                     >
//                       +
//                     </button>
//                   </div>
//                   <p className="font-semibold text-green-700">
//                     ₹{item.price * item.quantity}
//                   </p>
//                   <button
//                     onClick={() => removeFromCart(item._id || item.id)}
//                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
//             <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//               Total: <span className="text-green-700">₹{totalPrice}</span>
//             </h2>

//             <Button
//               className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//               onClick={() => setDialogOpen(true)}
//               disabled={loading}
//             >
//               {loading ? "Placing Order..." : "Place Order"}
//             </Button>
//           </div>
//         </>
//       )}

//       <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl">
//               {!orderId ? "Enter Your Information" : "Scan QR to Pay"}
//             </DialogTitle>
//           </DialogHeader>

//           {!orderId ? (
//             <div className="grid gap-4 py-2">
//               <div>
//                 <Label>Name</Label>
//                 <Input
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div>
//                 <Label>Phone</Label>
//                 <Input
//                   type="tel"
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                   placeholder="Enter your phone"
//                 />
//               </div>
//               <div>
//                 <Label>Email</Label>
//                 <Input
//                   type="email"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div>
//                 <Label>Address</Label>
//                 <Input
//                   value={form.address}
//                   onChange={(e) =>
//                     setForm({ ...form, address: e.target.value })
//                   }
//                   placeholder="Enter delivery address"
//                 />
//               </div>
//             </div>
//           ) : (
//             <div key={orderId} className="flex flex-col items-center gap-4 py-4">
//               <UpiQRCode amount={qrAmount} orderId={orderId} />
//             </div>
//           )}

//           <DialogFooter className="flex flex-col sm:flex-row gap-2">
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto"
//               onClick={() => {
//                 setDialogOpen(false);
//                 setOrderId(null);
//                 clearCart(); // clear cart AFTER QR is shown
//               }}
//             >
//               {orderId ? "Close" : "Cancel"}
//             </Button>
//             {!orderId && (
//               <Button
//                 className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
//                 onClick={handleConfirmOrder}
//                 disabled={loading}
//               >
//                 {loading ? "Placing Order..." : "Confirm Order"}
//               </Button>
//             )}
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }













// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";
// import UpiQRCode from "@/components/UpiQRCode";
// import { ShoppingCart, CreditCard, Wallet, CheckCircle } from "lucide-react";

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

// // ✅ helper to clean Drive links & remove trailing spaces
// function sanitizeImageUrl(url?: string): string {
//   if (!url) return "/placeholder.png";
//   return url
//     .trim()
//     .replace(
//       /https:\/\/drive\.google\.com\/file\/d\/([^/]+)\/view.*/,
//       "https://drive.google.com/uc?export=view&id=$1"
//     );
// }

// export default function CheckoutPage() {
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();

//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [paymentOptionOpen, setPaymentOptionOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [orderId, setOrderId] = useState<string | null>(null);
//   const [qrAmount, setQrAmount] = useState<number>(0);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + Number(item.price) * Number(item.quantity),
//     0
//   );

//   const handleConfirmOrder = async () => {
//     if (!form.name || !form.phone || !form.email || !form.address) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     const orderData = {
//       products: cart.map((item) => ({
//         _id: item._id || item.id,
//         name: item.name,
//         price: Number(item.price),
//         quantity: Number(item.quantity),
//       })),
//       totalPrice,
//       customer: { ...form },
//       paymentStatus: "unpaid",
//       createdAt: new Date(),
//     };

//     setLoading(true);

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         setOrderId(result.order._id);
//         setPaymentOptionOpen(true); // open payment choice modal
//       } else {
//         alert(`❌ Order failed: ${result.error || "Please try again."}`);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
//         Checkout
//       </h1>

//       {cart.length === 0 && !orderId ? (
//         <div className="p-6 text-center">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//             Your cart is empty
//           </h2>
//           <button
//             className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
//             onClick={() => router.push("/")}
//           >
//             <ShoppingCart size={18} /> Continue Shopping
//           </button>
//         </div>
//       ) : (
//         <>
//           <div className="space-y-4">
//             {cart.map((item, index) => (
//               <div
//                 key={`${item._id || item.id}-${index}`}
//                 className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//               >
//                 <div className="flex items-center gap-4">
//                   {item.image && (
//                     <Image
//                       src={sanitizeImageUrl(item.image)}
//                       alt={item.name}
//                       width={80}
//                       height={80}
//                       className="rounded-lg border object-contain"
//                     />
//                   )}
//                   <div>
//                     <h2 className="font-semibold text-base sm:text-lg text-gray-800 break-words">
//                       {item.name}
//                     </h2>
//                     <p className="text-sm text-gray-500">
//                       ₹{item.price} x {item.quantity}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() =>
//                         updateQuantity(
//                           item._id || item.id,
//                           Math.max(1, item.quantity - 1)
//                         )
//                       }
//                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                     >
//                       -
//                     </button>
//                     <span className="px-2">{item.quantity}</span>
//                     <button
//                       onClick={() =>
//                         updateQuantity(item._id || item.id, item.quantity + 1)
//                       }
//                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                     >
//                       +
//                     </button>
//                   </div>
//                   <p className="font-semibold text-green-700">
//                     ₹{item.price * item.quantity}
//                   </p>
//                   <button
//                     onClick={() => removeFromCart(item._id || item.id)}
//                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
//             <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//               Total: <span className="text-green-700">₹{totalPrice}</span>
//             </h2>

//             <Button
//               className="w-full sm:w-auto bg-green-600 hover:bg-green-700 flex items-center gap-2"
//               onClick={() => setDialogOpen(true)}
//               disabled={loading}
//             >
//               {loading ? "Placing Order..." : "Place Order"}
//               <CreditCard size={18} />
//             </Button>
//           </div>
//         </>
//       )}

//       {/* Main Checkout Dialog */}
//       <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl">
//               {!orderId ? "Enter Your Information" : "Scan QR to Pay"}
//             </DialogTitle>
//           </DialogHeader>

//           {!orderId ? (
//             <div className="grid gap-4 py-2">
//               <div>
//                 <Label>Name</Label>
//                 <Input
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div>
//                 <Label>Phone</Label>
//                 <Input
//                   type="tel"
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                   placeholder="Enter your phone"
//                 />
//               </div>
//               <div>
//                 <Label>Email</Label>
//                 <Input
//                   type="email"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div>
//                 <Label>Address</Label>
//                 <Input
//                   value={form.address}
//                   onChange={(e) =>
//                     setForm({ ...form, address: e.target.value })
//                   }
//                   placeholder="Enter delivery address"
//                 />
//               </div>
//             </div>
//           ) : qrAmount > 0 ? (
//             <div key={orderId} className="flex flex-col items-center gap-4 py-4">
//               <UpiQRCode amount={qrAmount} orderId={orderId} />
//             </div>
//           ) : (
//             <div className="flex flex-col items-center gap-3 py-6">
//               <CheckCircle size={48} className="text-green-600" />
//               <h3 className="text-lg font-semibold text-gray-800">
//                 Order Placed Successfully!
//               </h3>
//               <p className="text-gray-600">
//                 Cash on Delivery selected. Pay when the product is delivered.
//               </p>
//             </div>
//           )}

//           <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto"
//               onClick={() => {
//                 setDialogOpen(false);
//                 setOrderId(null);
//                 clearCart();
//               }}
//             >
//               {orderId ? "Close" : "Cancel"}
//             </Button>
//             {!orderId && (
//               <Button
//                 className="w-full sm:w-auto bg-green-600 hover:bg-green-700 flex items-center gap-2"
//                 onClick={handleConfirmOrder}
//                 disabled={loading}
//               >
//                 {loading ? "Placing Order..." : "Confirm Order"}
//                 <Wallet size={18} />
//               </Button>
//             )}
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>

//       {/* Payment Option Dialog */}
//       <Dialog open={paymentOptionOpen} onOpenChange={setPaymentOptionOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl text-center">
//               Choose Payment Option
//             </DialogTitle>
//           </DialogHeader>
//           <div className="flex flex-col gap-4 py-4">
//             <Button
//               className="w-full bg-green-600 hover:bg-green-700 flex items-center gap-2 justify-center"
//               onClick={() => {
//                 // Prepaid with ₹100 discount
//                 setQrAmount(totalPrice - 100);
//                 setPaymentOptionOpen(false);
//               }}
//             >
//               <CreditCard size={18} /> Pay Prepaid (₹100 Discount)
//             </Button>

//             <Button
//               className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 flex items-center gap-2 justify-center"
//               onClick={() => {
//                 // Cash on delivery
//                 setQrAmount(0);
//                 setPaymentOptionOpen(false);
//               }}
//             >
//               <Wallet size={18} /> Cash on Delivery (No Payment Now)
//             </Button>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }


// //swhkjwkw










// "use client";

// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";
// import UpiQRCode from "@/components/UpiQRCode";
// import { ShoppingCart, CreditCard, Wallet, CheckCircle } from "lucide-react";

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

// // ✅ helper to clean Drive links & remove trailing spaces
// function sanitizeImageUrl(url?: string): string {
//   if (!url) return "/placeholder.png";
//   return url
//     .trim()
//     .replace(
//       /https:\/\/drive\.google\.com\/file\/d\/([^/]+)\/view.*/,
//       "https://drive.google.com/uc?export=view&id=$1"
//     );
// }

// export default function CheckoutPage() {
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const router = useRouter();

//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [paymentOptionOpen, setPaymentOptionOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [orderId, setOrderId] = useState<string | null>(null);
//   const [qrAmount, setQrAmount] = useState<number>(0);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//   });

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + Number(item.price) * Number(item.quantity),
//     0
//   );

//   const handleConfirmOrder = async () => {
//     if (!form.name || !form.phone || !form.address) {
//       alert("Please fill all the fields!");
//       return;
//     }

//     const orderData = {
//       products: cart.map((item) => ({
//         _id: item._id || item.id,
//         name: item.name,
//         price: Number(item.price),
//         quantity: Number(item.quantity),
//       })),
//       totalPrice,
//       customer: {
//         name: form.name,
//         phone: form.phone,
//         address: form.address,
//         email: "not-provided@example.com", // ✅ dummy email
//       },
//       paymentStatus: "unpaid",
//       createdAt: new Date(),
//     };

//     setLoading(true);

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         setOrderId(result.order._id);
//         setPaymentOptionOpen(true); // open payment choice modal
//       } else {
//         alert(`❌ Order failed: ${result.error || "Please try again."}`);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
//         Checkout
//       </h1>

//       {cart.length === 0 && !orderId ? (
//         <div className="p-6 text-center">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//             Your cart is empty
//           </h2>
//           <button
//             className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
//             onClick={() => router.push("/")}
//           >
//             <ShoppingCart size={18} /> Continue Shopping
//           </button>
//         </div>
//       ) : (
//         <>
//           <div className="space-y-4">
//             {cart.map((item, index) => (
//               <div
//                 key={`${item._id || item.id}-${index}`}
//                 className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
//               >
//                 <div className="flex items-center gap-4">
//                   {item.image && (
//                     <Image
//                       src={sanitizeImageUrl(item.image)}
//                       alt={item.name}
//                       width={80}
//                       height={80}
//                       className="rounded-lg border object-contain"
//                     />
//                   )}
//                   <div>
//                     <h2 className="font-semibold text-base sm:text-lg text-gray-800 break-words">
//                       {item.name}
//                     </h2>
//                     <p className="text-sm text-gray-500">
//                       ₹{item.price} x {item.quantity}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() =>
//                         updateQuantity(
//                           item._id || item.id,
//                           Math.max(1, item.quantity - 1)
//                         )
//                       }
//                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                     >
//                       -
//                     </button>
//                     <span className="px-2">{item.quantity}</span>
//                     <button
//                       onClick={() =>
//                         updateQuantity(item._id || item.id, item.quantity + 1)
//                       }
//                       className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                     >
//                       +
//                     </button>
//                   </div>
//                   <p className="font-semibold text-green-700">
//                     ₹{item.price * item.quantity}
//                   </p>
//                   <button
//                     onClick={() => removeFromCart(item._id || item.id)}
//                     className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
//             <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//               Total: <span className="text-green-700">₹{totalPrice}</span>
//             </h2>

//             <Button
//               className="w-full sm:w-auto bg-green-600 hover:bg-green-700 flex items-center gap-2"
//               onClick={() => setDialogOpen(true)}
//               disabled={loading}
//             >
//               {loading ? "Placing Order..." : "Place Order"}
//               <CreditCard size={18} />
//             </Button>
//           </div>
//         </>
//       )}

//       {/* Main Checkout Dialog */}
//       <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl">
//               {!orderId ? "Enter Your Information" : "Scan QR to Pay"}
//             </DialogTitle>
//           </DialogHeader>

//           {!orderId ? (
//             <div className="grid gap-4 py-2">
//               <div>
//                 <Label>Name</Label>
//                 <Input
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div>
//                 <Label>Phone</Label>
//                 <Input
//                   type="tel"
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                   placeholder="Enter your phone"
//                 />
//               </div>
//               <div>
//                 <Label>Address</Label>
//                 <Input
//                   value={form.address}
//                   onChange={(e) =>
//                     setForm({ ...form, address: e.target.value })
//                   }
//                   placeholder="Enter delivery address"
//                 />
//               </div>
//             </div>
//           ) : qrAmount > 0 ? (
//             <div key={orderId} className="flex flex-col items-center gap-4 py-4">
//               <UpiQRCode amount={qrAmount} orderId={orderId} />
//             </div>
//           ) : (
//             <div className="flex flex-col items-center gap-3 py-6">
//               <CheckCircle size={48} className="text-green-600" />
//               <h3 className="text-lg font-semibold text-gray-800">
//                 Order Placed Successfully!
//               </h3>
//               <p className="text-gray-600">
//                 Cash on Delivery selected. Pay when the product is delivered.
//               </p>
//             </div>
//           )}

//           <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
//             <Button
//               variant="outline"
//               className="w-full sm:w-auto"
//               onClick={() => {
//                 setDialogOpen(false);
//                 setOrderId(null);
//                 clearCart();
//               }}
//             >
//               {orderId ? "Close" : "Cancel"}
//             </Button>
//             {!orderId && (
//               <Button
//                 className="w-full sm:w-auto bg-green-600 hover:bg-green-700 flex items-center gap-2"
//                 onClick={handleConfirmOrder}
//                 disabled={loading}
//               >
//                 {loading ? "Placing Order..." : "Confirm Order"}
//                 <Wallet size={18} />
//               </Button>
//             )}
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>

//       {/* Payment Option Dialog */}
//       <Dialog open={paymentOptionOpen} onOpenChange={setPaymentOptionOpen}>
//         <DialogContent className="sm:max-w-md w-[95%]">
//           <DialogHeader>
//             <DialogTitle className="text-lg sm:text-xl text-center">
//               Choose Payment Option
//             </DialogTitle>
//           </DialogHeader>
//           <div className="flex flex-col gap-4 py-4">
//             <Button
//               className="w-full bg-green-600 hover:bg-green-700 flex items-center gap-2 justify-center"
//               onClick={() => {
//                 // Prepaid with ₹100 discount
//                 setQrAmount(totalPrice - 100);
//                 setPaymentOptionOpen(false);
//               }}
//             >
//               <CreditCard size={18} /> Pay Prepaid (₹100 Discount)
//             </Button>

//             <Button
//               className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 flex items-center gap-2 justify-center"
//               onClick={() => {
//                 // Cash on delivery
//                 setQrAmount(0);
//                 setPaymentOptionOpen(false);
//               }}
//             >
//               <Wallet size={18} /> Cash on Delivery (No Payment Now)
//             </Button>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
// //koijdwid














"use client";

import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import UpiQRCode from "@/components/UpiQRCode";
import { ShoppingCart, CreditCard, Wallet, CheckCircle } from "lucide-react";

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

// ✅ helper to clean Drive links
function sanitizeImageUrl(url?: string): string {
  if (!url) return "/placeholder.png";
  return url
    .trim()
    .replace(
      /https:\/\/drive\.google\.com\/file\/d\/([^/]+)\/view.*/,
      "https://drive.google.com/uc?export=view&id=$1"
    );
}

export default function CheckoutPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const router = useRouter();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [paymentOptionOpen, setPaymentOptionOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [qrAmount, setQrAmount] = useState<number>(0);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    landmark: "",
  });

  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0
  );

  const handleConfirmOrder = async () => {
    if (!form.name || !form.phone || !form.address || !form.pincode) {
      alert("⚠️ Please fill Name, Phone, Address, and Pincode!");
      return;
    }

    const orderData = {
      products: cart.map((item) => ({
        _id: item._id || item.id,
        name: item.name,
        price: Number(item.price),
        quantity: Number(item.quantity),
      })),
      totalPrice,
      customer: {
        name: form.name,
        phone: form.phone,
        address: form.address,
        pincode: form.pincode, // ✅ added pincode
        landmark: form.landmark, // ✅ added landmark
        email: "not-provided@example.com", // ✅ dummy email
      },
      paymentStatus: "unpaid",
      createdAt: new Date(),
    };

    setLoading(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const result = await res.json();

      if (result.success) {
        setOrderId(result.order._id);
        setPaymentOptionOpen(true); // open payment choice modal
      } else {
        alert(`❌ Order failed: ${result.error || "Please try again."}`);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
        Checkout
      </h1>

      {cart.length === 0 && !orderId ? (
        <div className="p-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Your cart is empty
          </h2>
          <button
            className="mt-5 w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
            onClick={() => router.push("/")}
          >
            <ShoppingCart size={18} /> Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={`${item._id || item.id}-${index}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  {item.image && (
                    <Image
                      src={sanitizeImageUrl(item.image)}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-lg border object-contain"
                    />
                  )}
                  <div>
                    <h2 className="font-semibold text-base sm:text-lg text-gray-800 break-words">
                      {item.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      ₹{item.price} x {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="mt-3 sm:mt-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item._id || item.id,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item._id || item.id, item.quantity + 1)
                      }
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold text-green-700">
                    ₹{item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeFromCart(item._id || item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              Total: <span className="text-green-700">₹{totalPrice}</span>
            </h2>

            <Button
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 flex items-center gap-2"
              onClick={() => setDialogOpen(true)}
              disabled={loading}
            >
              {loading ? "Placing Order..." : "Place Order"}
              <CreditCard size={18} />
            </Button>
          </div>
        </>
      )}

      {/* Main Checkout Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md w-[95%]">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">
              {!orderId ? "Enter Your Information" : "Scan QR to Pay"}
            </DialogTitle>
          </DialogHeader>

          {!orderId ? (
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
                <Label>Address</Label>
                <Input
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  placeholder="Enter delivery address"
                />
              </div>
              <div>
                <Label>Pincode</Label>
                <Input
                  value={form.pincode}
                  onChange={(e) =>
                    setForm({ ...form, pincode: e.target.value })
                  }
                  placeholder="Enter Pincode"
                />
              </div>
              <div>
                <Label>Landmark (Optional)</Label>
                <Input
                  value={form.landmark}
                  onChange={(e) =>
                    setForm({ ...form, landmark: e.target.value })
                  }
                  placeholder="Enter nearby landmark"
                />
              </div>
            </div>
          ) : qrAmount > 0 ? (
            <div key={orderId} className="flex flex-col items-center gap-4 py-4">
              <UpiQRCode amount={qrAmount} orderId={orderId} />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 py-6">
              <CheckCircle size={48} className="text-green-600" />
              <h3 className="text-lg font-semibold text-gray-800">
                Order Placed Successfully!
              </h3>
              <p className="text-gray-600">
                Cash on Delivery selected. Pay when the product is delivered.
              </p>
            </div>
          )}

          <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => {
                setDialogOpen(false);
                setOrderId(null);
                clearCart();
              }}
            >
              {orderId ? "Close" : "Cancel"}
            </Button>
            {!orderId && (
              <Button
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 flex items-center gap-2"
                onClick={handleConfirmOrder}
                disabled={loading}
              >
                {loading ? "Placing Order..." : "Confirm Order"}
                <Wallet size={18} />
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Payment Option Dialog */}
      <Dialog open={paymentOptionOpen} onOpenChange={setPaymentOptionOpen}>
        <DialogContent className="sm:max-w-md w-[95%]">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl text-center">
              Choose Payment Option
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <Button
              className="w-full bg-green-600 hover:bg-green-700 flex items-center gap-2 justify-center"
              onClick={() => {
                setQrAmount(totalPrice - 100); // Prepaid with discount
                setPaymentOptionOpen(false);
              }}
            >
              <CreditCard size={18} /> Pay Prepaid (₹100 Discount)
            </Button>

            <Button
              className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 flex items-center gap-2 justify-center"
              onClick={() => {
                setQrAmount(0); // COD
                setPaymentOptionOpen(false);
              }}
            >
              <Wallet size={18} /> Cash on Delivery (No Payment Now)
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
