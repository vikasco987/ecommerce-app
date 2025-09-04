// "use client";

// import Image from "next/image";
// import Link from "next/link";

// // Example Products (in real project, fetch from DB/Cloudinary)
// const products = [
//   {
//     id: 1,
//     name: "Horse Fire Tablets - For Natural Energy and Daily Stamina",
//     image: "/horse-fire.webp",
//     rating: 4.8,
//     reviews: 186,
//     price: 1999,
//     oldPrice: 4000,
//     discount: 50,
//     slug: "horse-fire-tablets",
//   },
//   {
//     id: 2,
//     name: "Bull Rider Capsule - Ayurvedic Medicine For Strength",
//     image: "/bull-rider.webp",
//     rating: 4.9,
//     reviews: 82,
//     price: 999,
//     oldPrice: 2000,
//     discount: 50,
//     slug: "bull-rider-capsule",
//   },
//   {
//     id: 3,
//     name: "Power Boost Herbal Tonic - Energy & Vitality",
//     image: "/image2.png",
//     rating: 4.7,
//     reviews: 120,
//     price: 1499,
//     oldPrice: 3000,
//     discount: 50,
//     slug: "power-boost-tonic",
//   },
//   {
//     id: 4,
//     name: "Vital Force Syrup - For Daily Strength",
//     image: "/image1.png",
//     rating: 4.6,
//     reviews: 95,
//     price: 799,
//     oldPrice: 1600,
//     discount: 50,
//     slug: "vital-force-syrup",
//   },
//   {
//     id: 5,
//     name: "Vital Force Syrup - For Daily Strength",
//     image: "/image3.png",
//     rating: 4.6,
//     reviews: 95,
//     price: 799,
//     oldPrice: 1600,
//     discount: 50,
//     slug: "vital-force-syrup",
//   },
// ];

// export default function ProductGrid() {
//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         {/* Product Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//             >
//               {/* Product Image */}
//               <Link href={`/products/${product.slug}`}>
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={300}
//                   height={200}
//                   className="rounded-lg mx-auto object-contain"
//                 />
//               </Link>

//               {/* Product Info */}
//               <div className="mt-4 flex-1 flex flex-col">
//                 <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
//                   {product.name}
//                 </h3>

//                 {/* Rating */}
//                 <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                   {"⭐".repeat(Math.floor(product.rating))}
//                   <span className="ml-1 text-gray-600">
//                     {product.rating} ({product.reviews} reviews)
//                   </span>
//                 </div>

//                 {/* Price */}
//                 <div className="mt-2">
//                   <span className="text-lg font-bold text-green-700">
//                     ₹{product.price.toLocaleString()}
//                   </span>
//                   <span className="ml-2 text-gray-400 line-through">
//                     ₹{product.oldPrice.toLocaleString()}
//                   </span>
//                 </div>

//                 {/* Discount Badge */}
//                 <div className="mt-1">
//                   <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                     {product.discount}% OFF
//                   </span>
//                 </div>

//                 {/* Buy Button */}
//                 <Link
//                   href={`/products/${product.slug}`}
//                   className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                 >
//                   BUY NOW
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }












// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext"; // 👈 Import Cart hook

// // Example Products (in real project, fetch from DB/Cloudinary)
// const products = [
//   {
//     id: 1,
//     name: "Horse Fire Tablets - For Natural Energy and Daily Stamina",
//     image: "/horse-fire.webp",
//     rating: 4.8,
//     reviews: 186,
//     price: 1999,
//     oldPrice: 4000,
//     discount: 50,
//     slug: "horse-fire-tablets",
//   },
//   {
//     id: 2,
//     name: "Bull Rider Capsule - Ayurvedic Medicine For Strength",
//     image: "/bull-rider.webp",
//     rating: 4.9,
//     reviews: 82,
//     price: 999,
//     oldPrice: 2000,
//     discount: 50,
//     slug: "bull-rider-capsule",
//   },
//   {
//     id: 3,
//     name: "Power Boost Herbal Tonic - Energy & Vitality",
//     image: "/image2.png",
//     rating: 4.7,
//     reviews: 120,
//     price: 1499,
//     oldPrice: 3000,
//     discount: 50,
//     slug: "power-boost-tonic",
//   },
//   {
//     id: 4,
//     name: "Vital Force Syrup - For Daily Strength",
//     image: "/image1.png",
//     rating: 4.6,
//     reviews: 95,
//     price: 799,
//     oldPrice: 1600,
//     discount: 50,
//     slug: "vital-force-syrup",
//   },
//   {
//     id: 5,
//     name: "Vital Force Syrup - For Daily Strength",
//     image: "/image3.png",
//     rating: 4.6,
//     reviews: 95,
//     price: 799,
//     oldPrice: 1600,
//     discount: 50,
//     slug: "vital-force-syrup",
//   },
// ];

// export default function ProductGrid() {
//   const { addToCart } = useCart(); // 👈 Access cart function

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         {/* Product Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//             >
//               {/* Product Image */}
//               <Link href={`/products/${product.slug}`}>
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={300}
//                   height={200}
//                   className="rounded-lg mx-auto object-contain"
//                 />
//               </Link>

//               {/* Product Info */}
//               <div className="mt-4 flex-1 flex flex-col">
//                 <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
//                   {product.name}
//                 </h3>

//                 {/* Rating */}
//                 <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                   {"⭐".repeat(Math.floor(product.rating))}
//                   <span className="ml-1 text-gray-600">
//                     {product.rating} ({product.reviews} reviews)
//                   </span>
//                 </div>

//                 {/* Price */}
//                 <div className="mt-2">
//                   <span className="text-lg font-bold text-green-700">
//                     ₹{product.price.toLocaleString()}
//                   </span>
//                   <span className="ml-2 text-gray-400 line-through">
//                     ₹{product.oldPrice.toLocaleString()}
//                   </span>
//                 </div>

//                 {/* Discount Badge */}
//                 <div className="mt-1">
//                   <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                     {product.discount}% OFF
//                   </span>
//                 </div>

//                 {/* Buy Button */}
//                 <button
//                   onClick={() => addToCart(product)} // 👈 Add to cart instead of link
//                   className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }










// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext"; // 👈 Import Cart hook

// // Define product type
// export type Product = {
//   id: number;
//   name: string;
//   image: string;
//   rating: number;
//   reviews: number;
//   price: number;
//   oldPrice: number;
//   discount: number;
//   slug: string;
// };

// // Example Products (in real project, fetch from DB/Cloudinary)
// const products: Product[] = [
//   {
//     id: 1,
//     name: "Horse Fire Tablets - For Natural Energy and Daily Stamina",
//     image: "/horse-fire.webp",
//     rating: 4.8,
//     reviews: 186,
//     price: 1999,
//     oldPrice: 4000,
//     discount: 50,
//     slug: "horse-fire-tablets",
//   },
//   {
//     id: 2,
//     name: "Bull Rider Capsule - Ayurvedic Medicine For Strength",
//     image: "/bull-rider.webp",
//     rating: 4.9,
//     reviews: 82,
//     price: 999,
//     oldPrice: 2000,
//     discount: 50,
//     slug: "bull-rider-capsule",
//   },
//   {
//     id: 3,
//     name: "Power Boost Herbal Tonic - Energy & Vitality",
//     image: "/image2.png",
//     rating: 4.7,
//     reviews: 120,
//     price: 1499,
//     oldPrice: 3000,
//     discount: 50,
//     slug: "power-boost-tonic",
//   },
//   {
//     id: 4,
//     name: "Vital Force Syrup - For Daily Strength",
//     image: "/image1.png",
//     rating: 4.6,
//     reviews: 95,
//     price: 799,
//     oldPrice: 1600,
//     discount: 50,
//     slug: "vital-force-syrup",
//   },
//   {
//     id: 5,
//     name: "Vital Force Syrup - For Daily Strength",
//     image: "/image3.png",
//     rating: 4.6,
//     reviews: 95,
//     price: 799,
//     oldPrice: 1600,
//     discount: 50,
//     slug: "vital-force-syrup",
//   },
// ];

// export default function ProductGrid() {
//   const { addToCart } = useCart(); // 👈 Access cart function

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         {/* Product Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product: Product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//             >
//               {/* Product Image */}
//               <Link href={`/products/${product.slug}`}>
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={300}
//                   height={200}
//                   className="rounded-lg mx-auto object-contain"
//                 />
//               </Link>

//               {/* Product Info */}
//               <div className="mt-4 flex-1 flex flex-col">
//                 <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
//                   {product.name}
//                 </h3>

//                 {/* Rating */}
//                 <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                   {"⭐".repeat(Math.floor(product.rating))}
//                   <span className="ml-1 text-gray-600">
//                     {product.rating} ({product.reviews} reviews)
//                   </span>
//                 </div>

//                 {/* Price */}
//                 <div className="mt-2">
//                   <span className="text-lg font-bold text-green-700">
//                     ₹{product.price.toLocaleString()}
//                   </span>
//                   <span className="ml-2 text-gray-400 line-through">
//                     ₹{product.oldPrice.toLocaleString()}
//                   </span>
//                 </div>

//                 {/* Discount Badge */}
//                 <div className="mt-1">
//                   <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                     {product.discount}% OFF
//                   </span>
//                 </div>

//                 {/* Buy Button */}
//                 <button
//                   onClick={() => addToCart(product)} // 👈 Add to cart
//                   className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }







// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext"; // 👈 Import Cart hook
// import {  CartItem } from "@/types/product";


// // Define product type
// export type Product = {
//   id: number;
//   name: string;
//   image: string;
//   rating: number;
//   reviews: number;
//   price: number;
//   oldPrice: number;
//   discount: number;
//   slug: string;
// };

// // Example Products (in real project, fetch from DB/Cloudinary)
// const products: Product[] = [
//   {
//     id: 1,
//     name: "Horse Fire Tablets - For Natural Energy and Daily Stamina",
//     image: "/horse-fire.webp",
//     rating: 4.8,
//     reviews: 186,
//     price: 1999,
//     oldPrice: 4000,
//     discount: 50,
//     slug: "horse-fire-tablets",
//   },
//   {
//     id: 2,
//     name: "Bull Rider Capsule - Ayurvedic Medicine For Strength",
//     image: "/bull-rider.webp",
//     rating: 4.9,
//     reviews: 82,
//     price: 999,
//     oldPrice: 2000,
//     discount: 50,
//     slug: "bull-rider-capsule",
//   },
//   {
//     id: 3,
//     name: "Power Boost Herbal Tonic - Energy & Vitality",
//     image: "/image2.png",
//     rating: 4.7,
//     reviews: 120,
//     price: 1499,
//     oldPrice: 3000,
//     discount: 50,
//     slug: "power-boost-tonic",
//   },
//   {
//     id: 4,
//     name: "Vital Force Syrup - For Daily Strength",
//     image: "/image1.png",
//     rating: 4.6,
//     reviews: 95,
//     price: 799,
//     oldPrice: 1600,
//     discount: 50,
//     slug: "vital-force-syrup",
//   },
//   {
//     id: 5,
//     name: "Vital Force Syrup - For Daily Strength",
//     image: "/image3.png",
//     rating: 4.6,
//     reviews: 95,
//     price: 799,
//     oldPrice: 1600,
//     discount: 50,
//     slug: "vital-force-syrup",
//   },
// ];

// export default function ProductGrid() {
//   const { addToCart } = useCart(); // 👈 Access cart function

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         {/* Product Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product: Product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//             >
//               {/* Product Image */}
//               <Link href={`/products/${product.slug}`}>
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={300}
//                   height={200}
//                   className="rounded-lg mx-auto object-contain"
//                 />
//               </Link>

//               {/* Product Info */}
//               <div className="mt-4 flex-1 flex flex-col">
//                 <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
//                   {product.name}
//                 </h3>

//                 {/* Rating */}
//                 <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                   {"⭐".repeat(Math.floor(product.rating))}
//                   <span className="ml-1 text-gray-600">
//                     {product.rating} ({product.reviews} reviews)
//                   </span>
//                 </div>

//                 {/* Price */}
//                 <div className="mt-2">
//                   <span className="text-lg font-bold text-green-700">
//                     ₹{product.price.toLocaleString()}
//                   </span>
//                   <span className="ml-2 text-gray-400 line-through">
//                     ₹{product.oldPrice.toLocaleString()}
//                   </span>
//                 </div>

//                 {/* Discount Badge */}
//                 <div className="mt-1">
//                   <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                     {product.discount}% OFF
//                   </span>
//                 </div>

//                 {/* Buy Button */}
//                 <button
//                   onClick={() => addToCart({ ...product, quantity: 1 })} // ✅ Correct fix
//                   className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }








// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { Product, CartItem } from "@/types/product"; // ✅ use shared types

// // Example Products (in real project, fetch from DB/Cloudinary)
// const products: Product[] = [
//   {
//     id: 1,
//     name: "Horse Fire Tablets - For Natural Energy and Daily Stamina",
//     image: "/horse-fire.webp",
//     rating: 4.8,
//     reviews: 186,
//     price: 1999,
//     oldPrice: 4000,
//     discount: 50,
//     slug: "horse-fire-tablets",
//   },
//   {
//     id: 2,
//     name: "Bull Rider Capsule - Ayurvedic Medicine For Strength",
//     image: "/bull-rider.webp",
//     rating: 4.9,
//     reviews: 82,
//     price: 999,
//     oldPrice: 2000,
//     discount: 50,
//     slug: "bull-rider-capsule",
//   },
//   {
//     id: 3,
//     name: "Power Boost Herbal Tonic - Energy & Vitality",
//     image: "/image2.png",
//     rating: 4.7,
//     reviews: 120,
//     price: 1499,
//     oldPrice: 3000,
//     discount: 50,
//     slug: "power-boost-tonic",
//   },
//   {
//     id: 4,
//     name: "Vital Force Syrup - For Daily Strength",
//     image: "/image1.png",
//     rating: 4.6,
//     reviews: 95,
//     price: 799,
//     oldPrice: 1600,
//     discount: 50,
//     slug: "vital-force-syrup",
//   },
//   {
//     id: 5,
//     name: "Vital Force Syrup - For Daily Strength",
//     image: "/image3.png",
//     rating: 4.6,
//     reviews: 95,
//     price: 799,
//     oldPrice: 1600,
//     discount: 50,
//     slug: "vital-force-syrup",
//   },
// ];

// export default function ProductGrid() {
//   const { addToCart } = useCart();

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         {/* Product Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product) => {
//             // Create a CartItem when adding
//             const cartItem: CartItem = { ...product, quantity: 1 };

//             return (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//               >
//                 {/* Product Image */}
//                 <Link href={`/products/${product.slug}`}>
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     width={300}
//                     height={200}
//                     className="rounded-lg mx-auto object-contain"
//                   />
//                 </Link>

//                 {/* Product Info */}
//                 <div className="mt-4 flex-1 flex flex-col">
//                   <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
//                     {product.name}
//                   </h3>

//                   {/* Rating */}
//                   <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                     {"⭐".repeat(Math.floor(product.rating))}
//                     <span className="ml-1 text-gray-600">
//                       {product.rating} ({product.reviews} reviews)
//                     </span>
//                   </div>

//                   {/* Price */}
//                   <div className="mt-2">
//                     <span className="text-lg font-bold text-green-700">
//                       ₹{product.price.toLocaleString()}
//                     </span>
//                     <span className="ml-2 text-gray-400 line-through">
//                       ₹{product.oldPrice.toLocaleString()}
//                     </span>
//                   </div>

//                   {/* Discount Badge */}
//                   <div className="mt-1">
//                     <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                       {product.discount}% OFF
//                     </span>
//                   </div>

//                   {/* Buy Button */}
//                   <button
//                     onClick={() => addToCart(cartItem)} // ✅ pass CartItem
//                     className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }







// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { Product, CartItem } from "@/types/product";

// // Example Products (in real project, fetch from DB/Cloudinary)
// const products: Product[] = [
//   {
//     id: 1,
//     name: "Horse Fire Tablets - For Natural Energy and Daily Stamina",
//     image: "/horse-fire.webp",
//     rating: 4.8,
//     reviews: 186,
//     price: 1999,
//     oldPrice: 4000,
//     discount: 50,
//     slug: "horse-fire-tablets",
//   },
//   {
//     id: 2,
//     name: "Bull Rider Capsule - Ayurvedic Medicine For Strength",
//     image: "/bull-rider.webp",
//     rating: 4.9,
//     reviews: 82,
//     price: 999,
//     oldPrice: 2000,
//     discount: 50,
//     slug: "bull-rider-capsule",
//   },
//   {
//     id: 3,
//     name: "Power Boost Herbal Tonic - Energy & Vitality",
//     image: "/image2.png",
//     rating: 4.7,
//     reviews: 120,
//     price: 1499,
//     oldPrice: 3000,
//     discount: 50,
//     slug: "power-boost-tonic",
//   },
//   {
//     id: 4,
//     name: "Vital Force Syrup - For Daily Strength",
//     image: "/image1.png",
//     rating: 4.6,
//     reviews: 95,
//     price: 799,
//     oldPrice: 1600,
//     discount: 50,
//     slug: "vital-force-syrup",
//   },
//   {
//     id: 5,
//     name: "Vital Force Syrup - For Daily Strength",
//     image: "/image3.png",
//     rating: 4.6,
//     reviews: 95,
//     price: 799,
//     oldPrice: 1600,
//     discount: 50,
//     slug: "vital-force-syrup",
//   },
// ];

// export default function ProductGrid() {
//   const { addToCart } = useCart();

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         {/* Product Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product) => {
//             const cartItem: CartItem = { ...product, quantity: 1 };

//             return (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//               >
//                 {/* Product Image */}
//                 <Link href={`/products/${product.slug}`}>
//                   <Image
//                     src={product.image || "/placeholder.png"} // ✅ always string
//                     alt={product.name}
//                     width={300}
//                     height={200}
//                     className="rounded-lg mx-auto object-contain"
//                   />
//                 </Link>

//                 {/* Product Info */}
//                 <div className="mt-4 flex-1 flex flex-col">
//                   <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
//                     {product.name}
//                   </h3>

//                   {/* Rating */}
//                   <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                     {"⭐".repeat(Math.floor(product.rating ?? 0))} {/* ✅ safe */}
//                     <span className="ml-1 text-gray-600">
//                       {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                     </span>
//                   </div>

//                   {/* Price */}
//                   <div className="mt-2">
//                     <span className="text-lg font-bold text-green-700">
//                       ₹{product.price.toLocaleString()}
//                     </span>
//                     {product.oldPrice && (
//                       <span className="ml-2 text-gray-400 line-through">
//                         ₹{product.oldPrice.toLocaleString()}
//                       </span>
//                     )}
//                   </div>

//                   {/* Discount Badge */}
//                   {product.discount && (
//                     <div className="mt-1">
//                       <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                         {product.discount}% OFF
//                       </span>
//                     </div>
//                   )}

//                   {/* Buy Button */}
//                   <button
//                     onClick={() => addToCart(cartItem)}
//                     className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }











// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { CartItem } from "@/types/product";
// import useSWR from "swr";

// const fetcher = (url: string) => fetch(url).then(res => res.json());

// export default function ProductGrid() {
//   const { addToCart } = useCart();
//   const { data: products, error } = useSWR("/api/products", fetcher);

//   if (error) return <p>Failed to load products</p>;
//   if (!products) return <p>Loading...</p>;

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product: any) => {
//             const cartItem: CartItem = { ...product, quantity: 1 };

//             return (
//               <div
//                 key={product._id}
//                 className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//               >
//                 <Link href={`/products/${product.slug}`}>
//                   <Image
//                     src={product.image || "/placeholder.png"}
//                     alt={product.name}
//                     width={300}
//                     height={200}
//                     className="rounded-lg mx-auto object-contain"
//                   />
//                 </Link>

//                 <div className="mt-4 flex-1 flex flex-col">
//                   <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
//                     {product.name}
//                   </h3>

//                   <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                     {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                     <span className="ml-1 text-gray-600">
//                       {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                     </span>
//                   </div>

//                   <div className="mt-2">
//                     <span className="text-lg font-bold text-green-700">
//                       ₹{product.price.toLocaleString()}
//                     </span>
//                     {product.oldPrice && (
//                       <span className="ml-2 text-gray-400 line-through">
//                         ₹{product.oldPrice.toLocaleString()}
//                       </span>
//                     )}
//                   </div>

//                   {product.discount && (
//                     <div className="mt-1">
//                       <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                         {product.discount}% OFF
//                       </span>
//                     </div>
//                   )}

//                   <button
//                     onClick={() => addToCart(cartItem)}
//                     className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }




// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { CartItem } from "@/types/product";
// import useSWR from "swr";

// const fetcher = async (url: string) => {
//   const res = await fetch(url);

//   if (!res.ok) {
//     const errorData = await res.json().catch(() => ({}));
//     throw new Error(errorData.error || "Failed to fetch");
//   }

//   return res.json();
// };

// export default function ProductGrid() {
//   const { addToCart } = useCart();
//   const { data: products, error, isLoading } = useSWR("/api/products", fetcher);

//   if (error) return <p className="text-red-600">❌ {error.message}</p>;
//   if (isLoading) return <p>Loading...</p>;
//   if (!Array.isArray(products) || products.length === 0) {
//     return <p className="text-gray-500">No products available</p>;
//   }

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product: any) => {
//             const cartItem: CartItem = { ...product, quantity: 1 };

//             return (
//               <div
//                 key={product._id}
//                 className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//               >
//                 <Link href={`/products/${product.slug}`}>
//                   <Image
//                     src={product.image || "/placeholder.png"}
//                     alt={product.name}
//                     width={300}
//                     height={200}
//                     className="rounded-lg mx-auto object-contain"
//                   />
//                 </Link>

//                 <div className="mt-4 flex-1 flex flex-col">
//                   <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
//                     {product.name}
//                   </h3>

//                   <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                     {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                     <span className="ml-1 text-gray-600">
//                       {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                     </span>
//                   </div>

//                   <div className="mt-2">
//                     <span className="text-lg font-bold text-green-700">
//                       ₹{product.price?.toLocaleString() ?? "N/A"}
//                     </span>
//                     {product.oldPrice && (
//                       <span className="ml-2 text-gray-400 line-through">
//                         ₹{product.oldPrice.toLocaleString()}
//                       </span>
//                     )}
//                   </div>

//                   {product.discount && (
//                     <div className="mt-1">
//                       <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                         {product.discount}% OFF
//                       </span>
//                     </div>
//                   )}

//                   <button
//                     onClick={() => addToCart(cartItem)}
//                     className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
















// // File: components/ProductGrid.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { CartItem } from "@/types/product";
// import { useEffect, useState } from "react";

// interface Product {
//   _id: string;
//   name: string;
//   image: string;
//   rating: number;
//   reviews: number;
//   price: number;
//   oldPrice?: number;
//   discount?: number;
//   slug: string;
// }

// export default function ProductGrid() {
//   const { addToCart } = useCart();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();
//         if (!res.ok) {
//           console.error("Error fetching products:", data);
//           setProducts([]);
//         } else {
//           setProducts(data);
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading products...</p>;
//   if (!products.length) return <p className="text-center mt-10">No products found</p>;

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product) => {
//             const cartItem: CartItem = { ...product, quantity: 1 };

//             return (
//               <div
//                 key={product._id}
//                 className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//               >
//                 {/* Product Image */}
//                 <Link href={`/products/${product.slug}`}>
//                   <Image
//                     src={product.image || "/placeholder.png"}
//                     alt={product.name}
//                     width={300}
//                     height={200}
//                     className="rounded-lg mx-auto object-contain"
//                   />
//                 </Link>

//                 {/* Product Info */}
//                 <div className="mt-4 flex-1 flex flex-col">
//                   <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
//                     {product.name}
//                   </h3>

//                   {/* Rating */}
//                   <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                     {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                     <span className="ml-1 text-gray-600">
//                       {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                     </span>
//                   </div>

//                   {/* Price */}
//                   <div className="mt-2">
//                     <span className="text-lg font-bold text-green-700">
//                       ₹{product.price.toLocaleString()}
//                     </span>
//                     {product.oldPrice && (
//                       <span className="ml-2 text-gray-400 line-through">
//                         ₹{product.oldPrice.toLocaleString()}
//                       </span>
//                     )}
//                   </div>

//                   {/* Discount Badge */}
//                   {product.discount && (
//                     <div className="mt-1">
//                       <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                         {product.discount}% OFF
//                       </span>
//                     </div>
//                   )}

//                   {/* Buy Button */}
//                   <button
//                     onClick={() => addToCart(cartItem)}
//                     className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }







// // File: components/ProductGrid.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { CartItem } from "@/types/product";
// import { useEffect, useState } from "react";

// interface Product {
//   _id: string;
//   name: string;
//   image: string;
//   rating: number;
//   reviews: number;
//   price: number;
//   oldPrice?: number;
//   discount?: number;
//   slug: string;
// }

// export default function ProductGrid() {
//   const { addToCart } = useCart();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();
//         if (!res.ok) {
//           console.error("Error fetching products:", data);
//           setProducts([]);
//         } else {
//           setProducts(data);
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading products...</p>;
//   if (!products.length) return <p className="text-center mt-10">No products found</p>;

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product) => {
//             // ✅ Fix: map _id → id so it matches CartItem
//             const cartItem: CartItem = {
//               id: product._id,
//               name: product.name,
//               image: product.image,
//               price: product.price,
//               rating: product.rating,
//               reviews: product.reviews,
//               oldPrice: product.oldPrice,
//               discount: product.discount,
//               slug: product.slug,
//               quantity: 1,
//             };

//             return (
//               <div
//                 key={product._id}
//                 className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//               >
//                 {/* Product Image */}
//                 <Link href={`/products/${product.slug}`}>
//                   <Image
//                     src={product.image || "/placeholder.png"}
//                     alt={product.name}
//                     width={300}
//                     height={200}
//                     className="rounded-lg mx-auto object-contain"
//                   />
//                 </Link>

//                 {/* Product Info */}
//                 <div className="mt-4 flex-1 flex flex-col">
//                   <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
//                     {product.name}
//                   </h3>

//                   {/* Rating */}
//                   <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                     {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                     <span className="ml-1 text-gray-600">
//                       {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                     </span>
//                   </div>

//                   {/* Price */}
//                   <div className="mt-2">
//                     <span className="text-lg font-bold text-green-700">
//                       ₹{product.price.toLocaleString()}
//                     </span>
//                     {product.oldPrice && (
//                       <span className="ml-2 text-gray-400 line-through">
//                         ₹{product.oldPrice.toLocaleString()}
//                       </span>
//                     )}
//                   </div>

//                   {/* Discount Badge */}
//                   {product.discount && (
//                     <div className="mt-1">
//                       <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                         {product.discount}% OFF
//                       </span>
//                     </div>
//                   )}

//                   {/* Buy Button */}
//                   <button
//                     onClick={() => addToCart(cartItem)}
//                     className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }















// // File: components/ProductGrid.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { CartItem } from "@/types/product";
// import { useEffect, useState } from "react";

// interface Product {
//   _id: string;
//   name: string;
//   image: string;
//   rating: number;
//   reviews: number;
//   price: number;
//   oldPrice?: number;
//   discount?: number;
//   slug: string;
// }

// export default function ProductGrid() {
//   const { addToCart } = useCart();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();
//         if (!res.ok) {
//           console.error("Error fetching products:", data);
//           setProducts([]);
//         } else {
//           setProducts(data);
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading products...</p>;
//   if (!products.length) return <p className="text-center mt-10">No products found</p>;

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product) => {
//             // ✅ Fix: map _id → id so it matches CartItem
//             const cartItem: CartItem = {
//               id: product._id,
//               name: product.name,
//               image: product.image,
//               price: product.price,
//               rating: product.rating,
//               reviews: product.reviews,
//               oldPrice: product.oldPrice,
//               discount: product.discount,
//               slug: product.slug,
//               quantity: 1,
//             };

//             return (
//               <div
//                 key={product._id}
//                 className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//               >
//                 {/* Product Image */}
//                 <Link href={`/products/${product.slug}`}>
//                   <Image
//                     src={product.image || "/placeholder.png"}
//                     alt={product.name}
//                     width={300}
//                     height={200}
//                     className="rounded-lg mx-auto object-contain"
//                   />
//                 </Link>

//                 {/* Product Info */}
//                 <div className="mt-4 flex-1 flex flex-col">
//                   <h3 className="text-sm font-medium text-gray-900 whitespace-normal break-words">
//                     {product.name}
//                   </h3>

//                   {/* Rating */}
//                   <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                     {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                     <span className="ml-1 text-gray-600">
//                       {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                     </span>
//                   </div>

//                   {/* Price */}
//                   <div className="mt-2">
//                     <span className="text-lg font-bold text-green-700">
//                       ₹{product.price.toLocaleString()}
//                     </span>
//                     {product.oldPrice && (
//                       <span className="ml-2 text-gray-400 line-through">
//                         ₹{product.oldPrice.toLocaleString()}
//                       </span>
//                     )}
//                   </div>

//                   {/* Discount Badge */}
//                   {product.discount && (
//                     <div className="mt-1">
//                       <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                         {product.discount}% OFF
//                       </span>
//                     </div>
//                   )}

//                   {/* Buy Button */}
//                   <button
//                     onClick={() => addToCart(cartItem)}
//                     className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }






// // src/components/ProductGrid.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { useEffect, useState } from "react";

// interface Product {
//   _id: string;
//   name: string;
//   image: string;
//   rating: number;
//   reviews: number;
//   price: number;
//   oldPrice?: number;
//   discount?: number;
//   slug: string;
// }

// export default function ProductGrid() {
//   const { addToCart } = useCart();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();
//         if (!res.ok) {
//           console.error("Error fetching products:", data);
//           setProducts([]);
//         } else {
//           setProducts(data);
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading products...</p>;
//   if (!products.length) return <p className="text-center mt-10">No products found</p>;

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//             >
//               {/* Product Image */}
//               <Link href={`/products/${product.slug}`}>
//                 <Image
//                   src={product.image || "/placeholder.png"}
//                   alt={product.name}
//                   width={300}
//                   height={200}
//                   className="rounded-lg mx-auto object-contain"
//                 />
//               </Link>

//               {/* Product Info */}
//               <div className="mt-4 flex-1 flex flex-col">
//                 <h3 className="text-sm font-medium text-gray-900 whitespace-normal break-words">
//                   {product.name}
//                 </h3>

//                 {/* Rating */}
//                 <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                   {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                   <span className="ml-1 text-gray-600">
//                     {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                   </span>
//                 </div>

//                 {/* Price */}
//                 <div className="mt-2">
//                   <span className="text-lg font-bold text-green-700">
//                     ₹{product.price.toLocaleString()}
//                   </span>
//                   {product.oldPrice && (
//                     <span className="ml-2 text-gray-400 line-through">
//                       ₹{product.oldPrice.toLocaleString()}
//                     </span>
//                   )}
//                 </div>

//                 {/* Discount Badge */}
//                 {product.discount && (
//                   <div className="mt-1">
//                     <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                       {product.discount}% OFF
//                     </span>
//                   </div>
//                 )}

//                 {/* Buy Button */}
//                 <button
//                   onClick={() => addToCart(product)} // ✅ pass product directly
//                   className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }












// // src/components/ProductGrid.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { useEffect, useState } from "react";
// import type { Product } from "@/types/product"; // ✅ use global Product type

// export default function ProductGrid() {
//   const { addToCart } = useCart();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();

//         if (!res.ok) {
//           console.error("Error fetching products:", data);
//           setProducts([]);
//         } else {
//           // ✅ Ensure products have `id` instead of `_id`
//           const formatted = data.map((p: any) => ({
//             ...p,
//             id: p._id ?? p.id,
//           }));
//           setProducts(formatted);
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading products...</p>;
//   if (!products.length) return <p className="text-center mt-10">No products found</p>;

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id} // ✅ use `id` (consistent with global type)
//               className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//             >
//               {/* Product Image */}
//               <Link href={`/products/${product.slug}`}>
//                 <Image
//                   src={product.image || "/placeholder.png"}
//                   alt={product.name}
//                   width={300}
//                   height={200}
//                   className="rounded-lg mx-auto object-contain"
//                 />
//               </Link>

//               {/* Product Info */}
//               <div className="mt-4 flex-1 flex flex-col">
//                 <h3 className="text-sm font-medium text-gray-900 whitespace-normal break-words">
//                   {product.name}
//                 </h3>

//                 {/* Rating */}
//                 <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                   {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                   <span className="ml-1 text-gray-600">
//                     {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                   </span>
//                 </div>

//                 {/* Price */}
//                 <div className="mt-2">
//                   <span className="text-lg font-bold text-green-700">
//                     ₹{product.price.toLocaleString()}
//                   </span>
//                   {product.oldPrice && (
//                     <span className="ml-2 text-gray-400 line-through">
//                       ₹{product.oldPrice.toLocaleString()}
//                     </span>
//                   )}
//                 </div>

//                 {/* Discount Badge */}
//                 {product.discount && (
//                   <div className="mt-1">
//                     <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                       {product.discount}% OFF
//                     </span>
//                   </div>
//                 )}

//                 {/* Buy Button */}
//                 <button
//                   onClick={() => addToCart(product)} // ✅ product matches global type
//                   className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }









// // src/components/ProductGrid.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { useEffect, useState } from "react";
// import type { Product } from "@/types/product"; // ✅ use global Product type

// // 🔧 Utility: normalize Google Drive links
// function getImageUrl(url: string) {
//   if (!url) return "/placeholder.png";

//   // If it's a Google Drive "view" link, convert to direct
//   const driveMatch = url.match(/\/d\/([^/]+)\//);
//   if (driveMatch) {
//     const fileId = driveMatch[1];
//     return `https://drive.google.com/uc?export=view&id=${fileId}`;
//   }

//   // Already a direct Drive link or normal URL
//   return url.trim();
// }

// export default function ProductGrid() {
//   const { addToCart } = useCart();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();

//         if (!res.ok) {
//           console.error("Error fetching products:", data);
//           setProducts([]);
//         } else {
//           // ✅ Ensure products have `id` instead of `_id`
//           const formatted = data.map((p: any) => ({
//             ...p,
//             id: p._id ?? p.id,
//           }));
//           setProducts(formatted);
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading products...</p>;
//   if (!products.length) return <p className="text-center mt-10">No products found</p>;

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id} // ✅ use `id` (consistent with global type)
//               className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//             >
//               {/* Product Image */}
//               <Link href={`/products/${product.slug}`}>
//                 <Image
//                   src={getImageUrl(product.image)}
//                   alt={product.name}
//                   width={300}
//                   height={200}
//                   className="rounded-lg mx-auto object-contain"
//                 />
//               </Link>

//               {/* Product Info */}
//               <div className="mt-4 flex-1 flex flex-col">
//                 <h3 className="text-sm font-medium text-gray-900 whitespace-normal break-words">
//                   {product.name}
//                 </h3>

//                 {/* Rating */}
//                 <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                   {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                   <span className="ml-1 text-gray-600">
//                     {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                   </span>
//                 </div>

//                 {/* Price */}
//                 <div className="mt-2">
//                   <span className="text-lg font-bold text-green-700">
//                     ₹{product.price.toLocaleString()}
//                   </span>
//                   {product.oldPrice && (
//                     <span className="ml-2 text-gray-400 line-through">
//                       ₹{product.oldPrice.toLocaleString()}
//                     </span>
//                   )}
//                 </div>

//                 {/* Discount Badge */}
//                 {product.discount && (
//                   <div className="mt-1">
//                     <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                       {product.discount}% OFF
//                     </span>
//                   </div>
//                 )}

//                 {/* Buy Button */}
//                 <button
//                   onClick={() => addToCart(product)} // ✅ product matches global type
//                   className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






// // src/components/ProductGrid.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { useEffect, useState } from "react";
// import type { Product } from "@/types/product";

// // 🔧 Utility: normalize Google Drive links
// function getImageUrl(url: string) {
//   if (!url) return "/placeholder.png";

//   const driveMatch = url.match(/\/d\/([^/]+)\//);
//   if (driveMatch) {
//     const fileId = driveMatch[1];
//     return `https://drive.google.com/uc?export=view&id=${fileId}`;
//   }
//   return url.trim();
// }

// export default function ProductGrid() {
//   const { addToCart } = useCart();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();

//         if (!res.ok) {
//           console.error("Error fetching products:", data);
//           setProducts([]);
//         } else {
//           const formatted = data.map((p: any) => ({
//             ...p,
//             id: p._id ?? p.id,
//           }));
//           setProducts(formatted);
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading products...</p>;
//   if (!products.length) return <p className="text-center mt-10">No products found</p>;

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product, index) => (
//             <div
//               key={`${product.id}-${index}`} // ✅ unique key fix
//               className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//             >
//               <Link href={`/products/${product.slug}`}>
//                 <Image
//                   src={getImageUrl(product.image)}
//                   alt={product.name}
//                   width={300}
//                   height={200}
//                   className="rounded-lg mx-auto object-contain"
//                 />
//               </Link>

//               <div className="mt-4 flex-1 flex flex-col">
//                 <h3 className="text-sm font-medium text-gray-900 whitespace-normal break-words">
//                   {product.name}
//                 </h3>

//                 <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                   {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                   <span className="ml-1 text-gray-600">
//                     {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                   </span>
//                 </div>

//                 <div className="mt-2">
//                   <span className="text-lg font-bold text-green-700">
//                     ₹{product.price.toLocaleString()}
//                   </span>
//                   {product.oldPrice && (
//                     <span className="ml-2 text-gray-400 line-through">
//                       ₹{product.oldPrice.toLocaleString()}
//                     </span>
//                   )}
//                 </div>

//                 {product.discount && (
//                   <div className="mt-1">
//                     <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                       {product.discount}% OFF
//                     </span>
//                   </div>
//                 )}

//                 <button
//                   onClick={() => addToCart(product)}
//                   className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// // src/components/ProductGrid.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { useEffect, useState } from "react";
// import type { Product } from "@/types/product";

// // 🔧 Utility: normalize & clean image URLs (Google Drive + trimming)
// function getImageUrl(url: string) {
//   if (!url) return "/placeholder.png";

//   const cleanUrl = url.trim(); // ✅ remove trailing/leading spaces

//   // If it's a Google Drive "view" link, convert to direct
//   const driveMatch = cleanUrl.match(/\/d\/([^/]+)\//);
//   if (driveMatch) {
//     const fileId = driveMatch[1];
//     return `https://drive.google.com/uc?export=view&id=${fileId}`;
//   }

//   return cleanUrl;
// }

// export default function ProductGrid() {
//   const { addToCart } = useCart();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();

//         if (!res.ok) {
//           console.error("Error fetching products:", data);
//           setProducts([]);
//         } else {
//           // ✅ Ensure `id` always exists
//           const formatted = data.map((p: any) => ({
//             ...p,
//             id: p._id ?? p.id,
//           }));
//           setProducts(formatted);
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading products...</p>;
//   if (!products.length) return <p className="text-center mt-10">No products found</p>;

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product, index) => (
//             <div
//               key={`${product.id}-${index}`} // ✅ unique key fix
//               className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//             >
//               {/* Product Image */}
//               <Link href={`/products/${product.slug}`}>
//                 <Image
//                   src={getImageUrl(product.image)}
//                   alt={product.name}
//                   width={300}
//                   height={200}
//                   className="rounded-lg mx-auto object-contain"
//                 />
//               </Link>

//               {/* Product Info */}
//               <div className="mt-4 flex-1 flex flex-col">
//                 <h3 className="text-sm font-medium text-gray-900 whitespace-normal break-words">
//                   {product.name}
//                 </h3>

//                 {/* Rating */}
//                 <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                   {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                   <span className="ml-1 text-gray-600">
//                     {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                   </span>
//                 </div>

//                 {/* Price */}
//                 <div className="mt-2">
//                   <span className="text-lg font-bold text-green-700">
//                     ₹{product.price.toLocaleString()}
//                   </span>
//                   {product.oldPrice && (
//                     <span className="ml-2 text-gray-400 line-through">
//                       ₹{product.oldPrice.toLocaleString()}
//                     </span>
//                   )}
//                 </div>

//                 {/* Discount Badge */}
//                 {product.discount && (
//                   <div className="mt-1">
//                     <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                       {product.discount}% OFF
//                     </span>
//                   </div>
//                 )}

//                 {/* Buy Button */}
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// // src/components/ProductGrid.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { useEffect, useState } from "react";
// import type { Product } from "@/types/product";

// // 🔧 Utility: normalize & clean image URLs (Google Drive + trimming)
// function getImageUrl(url?: string) {
//   if (!url) return "/placeholder.png"; // ✅ fallback if undefined or empty

//   const cleanUrl = url.trim(); // ✅ remove trailing/leading spaces

//   // If it's a Google Drive "view" link, convert to direct
//   const driveMatch = cleanUrl.match(/\/d\/([^/]+)\//);
//   if (driveMatch) {
//     const fileId = driveMatch[1];
//     return `https://drive.google.com/uc?export=view&id=${fileId}`;
//   }

//   return cleanUrl;
// }

// export default function ProductGrid() {
//   const { addToCart } = useCart();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();

//         if (!res.ok) {
//           console.error("Error fetching products:", data);
//           setProducts([]);
//         } else {
//           // ✅ Ensure `id` always exists
//           const formatted = data.map((p: any) => ({
//             ...p,
//             id: p._id ?? p.id,
//           }));
//           setProducts(formatted);
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading products...</p>;
//   if (!products.length) return <p className="text-center mt-10">No products found</p>;

//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {products.map((product, index) => (
//             <div
//               key={`${product.id}-${index}`} // ✅ unique key fix
//               className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//             >
//               {/* Product Image */}
//               <Link href={`/products/${product.slug}`}>
//                 <Image
//                   src={getImageUrl(product.image)} // ✅ now always string
//                   alt={product.name}
//                   width={300}
//                   height={200}
//                   className="rounded-lg mx-auto object-contain"
//                 />
//               </Link>

//               {/* Product Info */}
//               <div className="mt-4 flex-1 flex flex-col">
//                 <h3 className="text-sm font-medium text-gray-900 whitespace-normal break-words">
//                   {product.name}
//                 </h3>

//                 {/* Rating */}
//                 <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                   {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                   <span className="ml-1 text-gray-600">
//                     {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                   </span>
//                 </div>

//                 {/* Price */}
//                 <div className="mt-2">
//                   <span className="text-lg font-bold text-green-700">
//                     ₹{product.price.toLocaleString()}
//                   </span>
//                   {product.oldPrice && (
//                     <span className="ml-2 text-gray-400 line-through">
//                       ₹{product.oldPrice.toLocaleString()}
//                     </span>
//                   )}
//                 </div>

//                 {/* Discount Badge */}
//                 {product.discount && (
//                   <div className="mt-1">
//                     <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                       {product.discount}% OFF
//                     </span>
//                   </div>
//                 )}

//                 {/* Buy Button */}
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// // src/components/ProductGrid.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { useEffect, useState } from "react";
// import type { Product } from "@/types/product";

// // 🔧 Utility: normalize & clean image URLs
// function getImageUrl(url?: string) {
//   if (!url) return "/placeholder.png"; // ✅ fallback if missing

//   const cleanUrl = url.trim();
//   const driveMatch = cleanUrl.match(/\/d\/([^/]+)\//);
//   if (driveMatch) {
//     const fileId = driveMatch[1];
//     return `https://drive.google.com/uc?export=view&id=${fileId}`;
//   }

//   return cleanUrl;
// }

// export default function ProductGrid() {
//   const { addToCart } = useCart();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();

//         if (!res.ok) {
//           console.error("Error fetching products:", data);
//           setProducts([]);
//         } else {
//           const formatted = data.map((p: any) => ({
//             ...p,
//             id: p._id ?? p.id,
//           }));
//           setProducts(formatted);
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading products...</p>;
//   if (!products.length) return <p className="text-center mt-10">No products found</p>;

//   return (
//     <section className="w-full bg-white py-10">
//       {/* 🔧 full width wrapper, no left/right gaps */}
//       <div className="w-full px-2 sm:px-4">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 px-2 sm:px-4">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
//           {products.map((product, index) => (
//             <div
//               key={`${product.id}-${index}`}
//               className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//             >
//               {/* Product Image */}
//               <Link href={`/products/${product.slug}`}>
//                 <Image
//                   src={getImageUrl(product.image)}
//                   alt={product.name}
//                   width={300}
//                   height={200}
//                   className="rounded-lg mx-auto object-contain"
//                 />
//               </Link>

//               {/* Product Info */}
//               <div className="mt-4 flex-1 flex flex-col">
//                 <h3 className="text-sm font-medium text-gray-900 whitespace-normal break-words">
//                   {product.name}
//                 </h3>

//                 {/* Rating */}
//                 <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                   {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                   <span className="ml-1 text-gray-600">
//                     {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                   </span>
//                 </div>

//                 {/* Price */}
//                 <div className="mt-2">
//                   <span className="text-lg font-bold text-green-700">
//                     ₹{product.price.toLocaleString()}
//                   </span>
//                   {product.oldPrice && (
//                     <span className="ml-2 text-gray-400 line-through">
//                       ₹{product.oldPrice.toLocaleString()}
//                     </span>
//                   )}
//                 </div>

//                 {/* Discount Badge */}
//                 {product.discount && (
//                   <div className="mt-1">
//                     <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                       {product.discount}% OFF
//                     </span>
//                   </div>
//                 )}

//                 {/* Buy Button */}
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { useEffect, useState } from "react";
// import type { Product } from "@/types/product";

// // 🔧 Utility: normalize & clean image URLs
// function getImageUrl(url?: string) {
//   if (!url) return "/placeholder.png"; // ✅ fallback if missing

//   const cleanUrl = url.trim();
//   const driveMatch = cleanUrl.match(/\/d\/([^/]+)\//);
//   if (driveMatch) {
//     const fileId = driveMatch[1];
//     return `https://drive.google.com/uc?export=view&id=${fileId}`;
//   }

//   return cleanUrl;
// }

// export default function ProductGrid() {
//   const { addToCart } = useCart();
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();

//         if (!res.ok) {
//           console.error("Error fetching products:", data);
//           setProducts([]);
//         } else {
//           const formatted = data.map((p: any) => ({
//             ...p,
//             id: p._id ?? p.id,
//           }));
//           setProducts(formatted);
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading products...</p>;
//   if (!products.length) return <p className="text-center mt-10">No products found</p>;

//   return (
//     <section className="w-full bg-white py-10">
//       {/* 🚀 full width, NO left/right gaps */}
//       <div className="w-full">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 px-4">
//           Featured <span className="text-green-600">Products</span>
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 px-2 sm:px-4">
//           {products.map((product, index) => (
//             <div
//               key={`${product.id}-${index}`}
//               className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
//             >
//               {/* Product Image */}
//               <Link href={`/products/${product.slug}`}>
//                 <Image
//                   src={getImageUrl(product.image)}
//                   alt={product.name}
//                   width={300}
//                   height={200}
//                   className="rounded-lg mx-auto object-contain"
//                 />
//               </Link>

//               {/* Product Info */}
//               <div className="mt-4 flex-1 flex flex-col">
//                 <h3 className="text-sm font-medium text-gray-900 whitespace-normal break-words">
//                   {product.name}
//                 </h3>

//                 {/* Rating */}
//                 <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                   {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                   <span className="ml-1 text-gray-600">
//                     {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                   </span>
//                 </div>

//                 {/* Price */}
//                 <div className="mt-2">
//                   <span className="text-lg font-bold text-green-700">
//                     ₹{product.price.toLocaleString()}
//                   </span>
//                   {product.oldPrice && (
//                     <span className="ml-2 text-gray-400 line-through">
//                       ₹{product.oldPrice.toLocaleString()}
//                     </span>
//                   )}
//                 </div>

//                 {/* Discount Badge */}
//                 {product.discount && (
//                   <div className="mt-1">
//                     <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                       {product.discount}% OFF
//                     </span>
//                   </div>
//                 )}

//                 {/* Buy Button */}
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { useEffect, useState } from "react";
import type { Product } from "@/types/product";

// 🔧 Utility: normalize & clean image URLs
function getImageUrl(url?: string) {
  if (!url) return "/placeholder.png"; // ✅ fallback if missing

  const cleanUrl = url.trim();
  const driveMatch = cleanUrl.match(/\/d\/([^/]+)\//);
  if (driveMatch) {
    const fileId = driveMatch[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }

  return cleanUrl;
}

export default function ProductGrid() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        if (!res.ok) {
          console.error("Error fetching products:", data);
          setProducts([]);
        } else {
          const formatted = data.map((p: any) => ({
            ...p,
            id: p._id ?? p.id,
          }));
          setProducts(formatted);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading products...</p>;
  if (!products.length) return <p className="text-center mt-10">No products found</p>;

  return (
    <section className="w-full bg-white py-10">
      {/* 🚀 full width, NO left/right gaps */}
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 px-4">
          Featured <span className="text-green-600">Products</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 px-2 sm:px-4">
          {products.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
            >
              {/* Product Image (Not clickable) */}
              <Image
                src={getImageUrl(product.image)}
                alt={product.name}
                width={300}
                height={200}
                className="rounded-lg mx-auto object-contain"
              />

              {/* Product Info */}
              <div className="mt-4 flex-1 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900 whitespace-normal break-words">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mt-2 text-yellow-500 text-sm">
                  {"⭐".repeat(Math.floor(product.rating ?? 0))}
                  <span className="ml-1 text-gray-600">
                    {product.rating ?? 0} ({product.reviews ?? 0} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="mt-2">
                  <span className="text-lg font-bold text-green-700">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.oldPrice && (
                    <span className="ml-2 text-gray-400 line-through">
                      ₹{product.oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Discount Badge */}
                {product.discount && (
                  <div className="mt-1">
                    <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
                      {product.discount}% OFF
                    </span>
                  </div>
                )}

                {/* Buy Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
