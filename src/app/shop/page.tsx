// // src/app/shop/page.tsx
// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { ShoppingCart } from "lucide-react";
// import { useCart } from "@/app/context/CartContext";
// import type { Product } from "@/types/product";

// interface CartItem extends Product {
//   quantity: number;
// }

// // Helper to sanitize Google Drive URLs
// function sanitizeImageUrl(url?: string): string {
//   if (!url) return "/placeholder.png";
//   return url
//     .trim()
//     .replace(
//       /https:\/\/drive\.google\.com\/file\/d\/([^/]+)\/view.*/,
//       "https://drive.google.com/uc?export=view&id=$1"
//     );
// }

// export default function ShopPage() {
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
//         setProducts([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading)
//     return <p className="text-center mt-10 text-gray-700">Loading products...</p>;
//   if (!products.length)
//     return <p className="text-center mt-10 text-gray-700">No products found.</p>;

//   return (
//     <main className="bg-gray-50 py-16 px-4">
//       <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
//         Shop Our Products
//       </h1>

//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
//         {products.map((product, index) => (
//           <div
//             key={`${product.id}-${index}`}
//             className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
//           >
//             {/* Product Image */}
//             <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
//               <Image
//                 src={sanitizeImageUrl(product.image)}
//                 alt={product.name}
//                 fill
//                 className="object-contain transition-transform duration-500 hover:scale-105"
//               />
//             </div>

//             {/* Product Info */}
//             <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
//               {product.name}
//             </h3>

//             {/* Rating */}
//             <div className="flex items-center text-yellow-500 text-sm mb-2">
//               {"⭐".repeat(Math.floor(product.rating ?? 0))}
//               <span className="ml-1 text-gray-600 text-xs">
//                 {product.rating ?? 0} ({product.reviews ?? 0})
//               </span>
//             </div>

//             {/* Price */}
//             <div className="flex items-center gap-2 mb-2">
//               <span className="text-lg font-bold text-green-700">
//                 ₹{product.price.toLocaleString()}
//               </span>
//               {product.oldPrice && (
//                 <span className="text-gray-400 line-through text-sm">
//                   ₹{product.oldPrice.toLocaleString()}
//                 </span>
//               )}
//             </div>

//             {/* Discount Badge */}
//             {product.discount && (
//               <div className="mb-2">
//                 <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
//                   {product.discount}% OFF
//                 </span>
//               </div>
//             )}

//             {/* Buy Now Button */}
//             <button
//               onClick={() =>
//                 addToCart({
//                   ...product,
//                   quantity: 1,
//                 } as CartItem)
//               }
//               className="mt-auto w-full bg-green-600 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-green-700 transition"
//             >
//               <ShoppingCart size={18} /> Buy Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }




"use client";

import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/types/product";

function getImageUrl(url?: string) {
  if (!url) return "/placeholder.png";

  const cleanUrl = url.trim();
  const driveMatch = cleanUrl.match(/\/d\/([^/]+)\//);
  if (driveMatch) {
    const fileId = driveMatch[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  }

  return cleanUrl;
}

interface CartItem extends Product {
  quantity: number;
}

export default function ShopPage() {
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
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-700">Loading products...</p>;
  if (!products.length) return <p className="text-center mt-10 text-gray-700">No products found</p>;

  return (
    <main className="bg-gray-50 py-16 px-4">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
        Shop Our Products
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {products.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
          >
            {/* Product Image */}
            <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
              <Image
                src={getImageUrl(product.image)}
                alt={product.name}
                fill
                className="object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <h3 className="text-sm font-semibold text-gray-900 mb-1 break-words">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center text-yellow-500 text-sm mb-2">
              {"⭐".repeat(Math.floor(product.rating ?? 0))}
              <span className="ml-1 text-gray-600 text-xs">
                {product.rating ?? 0} ({product.reviews ?? 0})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 mb-2">
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
              <div className="mb-2">
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
              className="mt-auto w-full bg-green-600 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-green-700 transition"
            >
              <ShoppingCart size={18} /> Buy Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
