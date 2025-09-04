// // File: src/app/components/TopDiscountedProducts.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { CartItem } from "@/types/product";
// import { useEffect, useState } from "react";
// import { ShoppingCart } from "lucide-react";

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

// export default function TopDiscountedProducts() {
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
//           // ✅ Filter discounted products
//           const discounted = data.filter((p: Product) => p.discount && p.discount > 0);
//           setProducts(discounted);
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading discounted products...</p>;
//   if (!products.length) return <p className="text-center mt-10">No discounted products found</p>;

//   return (
//     <section className="py-10 bg-gray-50">
//       {/* Heading */}
//       <h2 className="text-2xl font-bold text-center">Top Discounted Products</h2>
//       <p className="text-gray-600 text-center mb-8">
//         Discover unbeatable savings on our top discounted Ayurvedic and herbal products
//       </p>

//       {/* Horizontal scroll row */}
//       <div className="overflow-x-auto no-scrollbar px-4">
//         <div className="flex gap-6">
//           {products.map((product) => {
//             const cartItem: CartItem = { ...product, quantity: 1 };

//             return (
//               <div
//                 key={product._id}
//                 className="flex-shrink-0 w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
//               >
//                 {/* Product Image */}
//                 <Link href={`/products/${product.slug}`}>
//                   <div className="relative w-full h-40">
//                     <Image
//                       src={product.image || "/placeholder.png"}
//                       alt={product.name}
//                       fill
//                       className="object-contain"
//                     />
//                   </div>
//                 </Link>

//                 {/* Product Info */}
//                 <h3 className="mt-4 text-sm font-semibold text-gray-900 line-clamp-2">
//                   {product.name}
//                 </h3>

//                 {/* Rating */}
//                 <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                   {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                   <span className="ml-1 text-gray-600">
//                     {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                   </span>
//                 </div>

//                 {/* Price Section */}
//                 <div className="mt-2 flex items-center gap-2">
//                   <span className="text-lg font-bold text-green-700">
//                     ₹{product.price.toLocaleString()}
//                   </span>
//                   {product.oldPrice && (
//                     <span className="text-gray-400 line-through text-sm">
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

//                 {/* Buy Now Button */}
//                 <button
//                   onClick={() => addToCart(cartItem)}
//                   className="mt-4 flex items-center justify-center gap-2 w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition"
//                 >
//                   <ShoppingCart size={18} /> BUY NOW
//                 </button>
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
// import { useEffect, useState } from "react";
// import { ShoppingCart } from "lucide-react";

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

// export default function TopDiscountedProducts() {
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
//           // ✅ Filter discounted products
//           const discounted = data.filter((p: Product) => p.discount && p.discount > 0);
//           setProducts(discounted);
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading discounted products...</p>;
//   if (!products.length) return <p className="text-center mt-10">No discounted products found</p>;

//   return (
//     <section className="py-10 bg-gray-50">
//       {/* Heading */}
//       <h2 className="text-2xl font-bold text-center">Top Discounted Products</h2>
//       <p className="text-gray-600 text-center mb-8">
//         Discover unbeatable savings on our top discounted Ayurvedic and herbal products
//       </p>

//       {/* Horizontal scroll row */}
//       <div className="overflow-x-auto no-scrollbar px-4">
//         <div className="flex gap-4 sm:gap-6">
//           {products.map((product) => {
//             const cartItem: CartItem = { ...product, quantity: 1 };

//             return (
//               <div
//                 key={product._id}
//                 className="flex-shrink-0 w-[48%] sm:w-56 md:w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
//               >
//                 {/* Product Image */}
//                 <Link href={`/products/${product.slug}`}>
//                   <div className="relative w-full h-40">
//                     <Image
//                       src={product.image || "/placeholder.png"}
//                       alt={product.name}
//                       fill
//                       className="object-contain"
//                     />
//                   </div>
//                 </Link>

//                 {/* Product Info */}
//                 <h3 className="mt-4 text-sm font-semibold text-gray-900 line-clamp-2">
//                   {product.name}
//                 </h3>

//                 {/* Rating */}
//                 <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                   {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                   <span className="ml-1 text-gray-600">
//                     {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                   </span>
//                 </div>

//                 {/* Price Section */}
//                 <div className="mt-2 flex items-center gap-2">
//                   <span className="text-lg font-bold text-green-700">
//                     ₹{product.price.toLocaleString()}
//                   </span>
//                   {product.oldPrice && (
//                     <span className="text-gray-400 line-through text-sm">
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

//                 {/* Buy Now Button */}
//                 <button
//                   onClick={() => addToCart(cartItem)}
//                   className="mt-4 flex items-center justify-center gap-2 w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition"
//                 >
//                   <ShoppingCart size={18} /> BUY NOW
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// // }






// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { useEffect, useState } from "react";
// import { ShoppingCart } from "lucide-react";

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

// export default function TopDiscountedProducts() {
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
//           // Only discounted products
//           const discounted = data.filter((p: Product) => p.discount && p.discount > 0);
//           setProducts(discounted);
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err);
//         setProducts([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading discounted products...</p>;
//   if (!products.length) return <p className="text-center mt-10">No discounted products found</p>;

//   return (
//     <section className="py-10 bg-gray-50">
//       <h2 className="text-2xl font-bold text-center">Top Discounted Products</h2>
//       <p className="text-gray-600 text-center mb-8">
//         Discover unbeatable savings on our top discounted Ayurvedic and herbal products
//       </p>

//       <div className="overflow-x-auto no-scrollbar px-4">
//         <div className="flex gap-4 sm:gap-6">
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="flex-shrink-0 w-[48%] sm:w-56 md:w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
//             >
//               {/* Product Image */}
//               <Link href={`/products/${product.slug}`}>
//                 <div className="relative w-full h-40">
//                   <Image
//                     src={product.image || "/placeholder.png"}
//                     alt={product.name}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               </Link>

//               {/* Product Info */}
//               <h3 className="mt-4 text-sm font-semibold text-gray-900 line-clamp-2">
//                 {product.name}
//               </h3>

//               {/* Rating */}
//               <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                 {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                 <span className="ml-1 text-gray-600">
//                   {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                 </span>
//               </div>

//               {/* Price */}
//               <div className="mt-2 flex items-center gap-2">
//                 <span className="text-lg font-bold text-green-700">
//                   ₹{product.price.toLocaleString()}
//                 </span>
//                 {product.oldPrice && (
//                   <span className="text-gray-400 line-through text-sm">
//                     ₹{product.oldPrice.toLocaleString()}
//                   </span>
//                 )}
//               </div>

//               {/* Discount Badge */}
//               {product.discount && (
//                 <div className="mt-1">
//                   <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                     {product.discount}% OFF
//                   </span>
//                 </div>
//               )}

//               {/* Buy Now Button */}
//               <button
//                 onClick={() => addToCart({ ...product, id: product._id, quantity: 1 })}
//                 className="mt-4 flex items-center justify-center gap-2 w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition"
//               >
//                 <ShoppingCart size={18} /> BUY NOW
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }












// // src/components/TopDiscountedProducts.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { useEffect, useState } from "react";
// import { ShoppingCart } from "lucide-react";
// import type { Product } from "@/types/product"; // ✅ use global type

// // Extend Product to include quantity for cart usage
// interface CartItem extends Product {
//   quantity: number;
// }

// export default function TopDiscountedProducts() {
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
//           // Only discounted products
//           const discounted = data.filter(
//             (p: Product) => p.discount && p.discount > 0
//           );
//           setProducts(discounted);
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err);
//         setProducts([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading)
//     return <p className="text-center mt-10">Loading discounted products...</p>;
//   if (!products.length)
//     return <p className="text-center mt-10">No discounted products found</p>;

//   return (
//     <section className="py-10 bg-gray-50">
//       <h2 className="text-2xl font-bold text-center">Top Discounted Products</h2>
//       <p className="text-gray-600 text-center mb-8">
//         Discover unbeatable savings on our top discounted Ayurvedic and herbal
//         products
//       </p>

//       <div className="overflow-x-auto no-scrollbar px-4">
//         <div className="flex gap-4 sm:gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="flex-shrink-0 w-[48%] sm:w-56 md:w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
//             >
//               {/* Product Image */}
//               <Link href={`/products/${product.slug}`}>
//                 <div className="relative w-full h-40">
//                   <Image
//                     src={product.image || "/placeholder.png"}
//                     alt={product.name}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               </Link>

//               {/* Product Info */}
//               <h3 className="mt-4 text-sm font-semibold text-gray-900 line-clamp-2">
//                 {product.name}
//               </h3>

//               {/* Rating */}
//               <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                 {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                 <span className="ml-1 text-gray-600">
//                   {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                 </span>
//               </div>

//               {/* Price */}
//               <div className="mt-2 flex items-center gap-2">
//                 <span className="text-lg font-bold text-green-700">
//                   ₹{product.price.toLocaleString()}
//                 </span>
//                 {product.oldPrice && (
//                   <span className="text-gray-400 line-through text-sm">
//                     ₹{product.oldPrice.toLocaleString()}
//                   </span>
//                 )}
//               </div>

//               {/* Discount Badge */}
//               {product.discount && (
//                 <div className="mt-1">
//                   <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                     {product.discount}% OFF
//                   </span>
//                 </div>
//               )}

//               {/* Buy Now Button */}
//               <button
//                 onClick={() =>
//                   addToCart({
//                     ...product,
//                     quantity: 1, // ✅ now valid
//                   } as CartItem)
//                 }
//                 className="mt-4 flex items-center justify-center gap-2 w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition"
//               >
//                 <ShoppingCart size={18} /> BUY NOW
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





// // src/components/TopDiscountedProducts.tsx
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/context/CartContext";
// import { useEffect, useState } from "react";
// import { ShoppingCart } from "lucide-react";
// import type { Product } from "@/types/product"; // ✅ global type

// // Extend Product to include quantity for cart usage
// interface CartItem extends Product {
//   quantity: number;
// }

// // ✅ Helper: sanitize and fix Google Drive links
// function sanitizeImageUrl(url?: string): string {
//   if (!url) return "/placeholder.png";
//   return url
//     .trim()
//     .replace(
//       /https:\/\/drive\.google\.com\/file\/d\/([^/]+)\/view.*/,
//       "https://drive.google.com/uc?export=view&id=$1"
//     );
// }

// export default function TopDiscountedProducts() {
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
//           // Only discounted products
//           const discounted = data.filter(
//             (p: Product) => p.discount && p.discount > 0
//           );
//           setProducts(discounted);
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err);
//         setProducts([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading)
//     return <p className="text-center mt-10">Loading discounted products...</p>;
//   if (!products.length)
//     return <p className="text-center mt-10">No discounted products found</p>;

//   return (
//     <section className="py-10 bg-gray-50">
//       <h2 className="text-2xl font-bold text-center">Top Discounted Products</h2>
//       <p className="text-gray-600 text-center mb-8">
//         Discover unbeatable savings on our top discounted Ayurvedic and herbal
//         products
//       </p>

//       <div className="overflow-x-auto no-scrollbar px-4">
//         <div className="flex gap-4 sm:gap-6">
//           {products.map((product, index) => (
//             <div
//               key={`${product.id}-${index}`} // ✅ ensures unique even if ids repeat
//               className="flex-shrink-0 w-[48%] sm:w-56 md:w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
//             >
//               {/* Product Image */}
//               <Link href={`/products/${product.slug}`}>
//                 <div className="relative w-full h-40">
//                   <Image
//                     src={sanitizeImageUrl(product.image)}
//                     alt={product.name}
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               </Link>

//               {/* Product Info */}
//               <h3 className="mt-4 text-sm font-semibold text-gray-900 line-clamp-2">
//                 {product.name}
//               </h3>

//               {/* Rating */}
//               <div className="flex items-center mt-2 text-yellow-500 text-sm">
//                 {"⭐".repeat(Math.floor(product.rating ?? 0))}
//                 <span className="ml-1 text-gray-600">
//                   {product.rating ?? 0} ({product.reviews ?? 0} reviews)
//                 </span>
//               </div>

//               {/* Price */}
//               <div className="mt-2 flex items-center gap-2">
//                 <span className="text-lg font-bold text-green-700">
//                   ₹{product.price.toLocaleString()}
//                 </span>
//                 {product.oldPrice && (
//                   <span className="text-gray-400 line-through text-sm">
//                     ₹{product.oldPrice.toLocaleString()}
//                   </span>
//                 )}
//               </div>

//               {/* Discount Badge */}
//               {product.discount && (
//                 <div className="mt-1">
//                   <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                     {product.discount}% OFF
//                   </span>
//                 </div>
//               )}

//               {/* Buy Now Button */}
//               <button
//                 onClick={() =>
//                   addToCart({
//                     ...product,
//                     quantity: 1, // ✅ now valid
//                   } as CartItem)
//                 }
//                 className="mt-4 flex items-center justify-center gap-2 w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition"
//               >
//                 <ShoppingCart size={18} /> BUY NOW
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }







// src/components/TopDiscountedProducts.tsx
"use client";

import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/types/product";

// Extend Product to include quantity for cart usage
interface CartItem extends Product {
  quantity: number;
}

// ✅ Helper: sanitize and fix Google Drive links
function sanitizeImageUrl(url?: string): string {
  if (!url) return "/placeholder.png";
  return url
    .trim()
    .replace(
      /https:\/\/drive\.google\.com\/file\/d\/([^/]+)\/view.*/,
      "https://drive.google.com/uc?export=view&id=$1"
    );
}

export default function TopDiscountedProducts() {
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
          // Only discounted products
          const discounted = data.filter(
            (p: Product) => p.discount && p.discount > 0
          );
          setProducts(discounted);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return <p className="text-center mt-10">Loading discounted products...</p>;
  if (!products.length)
    return <p className="text-center mt-10">No discounted products found</p>;

  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-center">Top Discounted Products</h2>
      <p className="text-gray-600 text-center mb-8">
        Discover unbeatable savings on our top discounted Ayurvedic and herbal
        products
      </p>

      <div className="overflow-x-auto no-scrollbar px-4">
        <div className="flex gap-4 sm:gap-6">
          {products.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="flex-shrink-0 w-[48%] sm:w-56 md:w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              {/* Product Image (Not clickable) */}
              <div className="relative w-full h-40">
                <Image
                  src={sanitizeImageUrl(product.image)}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Product Info */}
              <h3 className="mt-4 text-sm font-semibold text-gray-900 line-clamp-2">
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
              <div className="mt-2 flex items-center gap-2">
                <span className="text-lg font-bold text-green-700">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
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

              {/* Buy Now Button */}
              <button
                onClick={() =>
                  addToCart({
                    ...product,
                    quantity: 1,
                  } as CartItem)
                }
                className="mt-4 flex items-center justify-center gap-2 w-full bg-green-600 text-white py-2 rounded-md font-medium hover:bg-green-700 transition"
              >
                <ShoppingCart size={18} /> BUY NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

