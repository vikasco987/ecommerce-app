// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X, ShoppingCart } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
//       <div className="container mx-auto flex justify-between items-center px-4 py-3">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-indigo-600">
//           ShopCart
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/shop">Shop</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//         </ul>

//         {/* Icons */}
//         <div className="flex items-center space-x-4">
//           <button className="relative">
//             <ShoppingCart className="w-6 h-6 text-gray-700" />
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
//               2
//             </span>
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="md:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden bg-white shadow-md px-4 py-3 space-y-3">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/shop">Shop</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//         </ul>
//       )}
//     </nav>
//   );
// }










// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X, ShoppingCart } from "lucide-react";
// import { useCart } from "../src/app/context/CartContext";
//  // 👈 import cart hook

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { cart } = useCart(); // 👈 get cart state

//   return (
//     <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
//       <div className="container mx-auto flex justify-between items-center px-4 py-3">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-indigo-600">
//           ShopCart
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/shop">Shop</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//         </ul>

//         {/* Icons */}
//         <div className="flex items-center space-x-4">
//           {/* Cart Button */}
//           <button className="relative">
//             <ShoppingCart className="w-6 h-6 text-gray-700" />
//             {cart.length > 0 && ( // 👈 show only if cart has items
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
//                 {cart.length}
//               </span>
//             )}
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="md:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden bg-white shadow-md px-4 py-3 space-y-3">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/shop">Shop</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//         </ul>
//       )}
//     </nav>
//   );
// }









// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { Menu, X, ShoppingCart } from "lucide-react";
// import { useCart } from "../src/app/context/CartContext";
// import { useRouter } from "next/navigation"; // 👈 import router

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { cart } = useCart(); // 👈 get cart state
//   const router = useRouter(); // 👈 use router for navigation

//   // calculate total items
//   const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

//   return (
//     <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
//       <div className="container mx-auto flex justify-between items-center px-4 py-3">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-indigo-600">
//           ShopCart
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/shop">Shop</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//         </ul>

//         {/* Icons */}
//         <div className="flex items-center space-x-4">
//           {/* Cart Button */}
//           <button
//             onClick={() => router.push("/checkout")} // 👈 go to checkout page
//             className="relative flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
//           >
//             <ShoppingCart className="w-6 h-6 mr-2" />
//             <span>Cart ({totalItems})</span>
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="md:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden bg-white shadow-md px-4 py-3 space-y-3">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/shop">Shop</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//         </ul>
//       )}
//     </nav>
//   );
// }













"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../src/app/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  // calculate total items
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
         Do Health Gyan
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Cart Button */}
          <Link href="/checkout">
            <button className="relative flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
              <ShoppingCart className="w-6 h-6 mr-2" />
              <span>Cart ({totalItems})</span>
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md px-4 py-3 space-y-3">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
