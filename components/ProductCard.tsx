// "use client";
// import { useCart } from "@/app/context/CartContext";

// export default function ProductCard({ product }) {
//   const { addToCart } = useCart();

//   const handleBuyNow = () => {
//     console.log("Buy Now clicked for:", product); // ✅ Debug log
//     addToCart(product);
//     console.log("Cart updated"); // ✅ Debug log
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow bg-white">
//       <h3 className="text-lg font-semibold">{product.name}</h3>
//       <p className="text-gray-600">${product.price}</p>
//       <button
//         onClick={handleBuyNow}
//         className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//       >
//         Buy Now
//       </button>
//     </div>
//   );
// }










// "use client";
// import { useCart } from "@/app/context/CartContext";
// import { useRouter } from "next/navigation";

// export default function ProductCard({ product }) {
//   const { addToCart } = useCart();
//   const router = useRouter();

//   const handleBuyNow = () => {
//     addToCart(product); // ✅ Add item to cart
//     router.push("/checkout"); // ✅ Go to checkout page
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow bg-white">
//       <h3 className="text-lg font-semibold">{product.name}</h3>
//       <p className="text-gray-600">₹{product.price}</p>
//       <button
//         onClick={handleBuyNow}
//         className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//       >
//         Buy Now
//       </button>
//     </div>
//   );
// }




// "use client";

// import { useRouter } from "next/navigation";
// import { useCart } from "@/app/context/CartContext"; // ✅ use this instead of hooks/useCart

// type Product = {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   description?: string;
// };

// export default function ProductCard({ product }: { product: Product }) {
//   const { addToCart } = useCart();
//   const router = useRouter();

//   return (
//     <div className="border rounded-lg p-4 shadow-md">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-48 object-cover rounded"
//       />
//       <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//       <p className="text-gray-600">₹{product.price}</p>

//       <div className="flex gap-2 mt-4">
//         <button
//           onClick={() => addToCart(product)}
//           className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//         >
//           Add to Cart
//         </button>
//         <button
//           onClick={() => router.push(`/product/${product.id}`)}
//           className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// }





// "use client";

// import { useRouter } from "next/navigation";
// import { useCart } from "@/app/context/CartContext";
// import type { Product } from "@/types/product"; // ✅ shared type

// export default function ProductCard({ product }: { product: Product }) {
//   const { addToCart } = useCart();
//   const router = useRouter();

//   return (
//     <div className="border rounded-lg p-4 shadow-md">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-48 object-cover rounded"
//       />
//       <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//       <p className="text-gray-600">₹{product.price}</p>

//       <div className="flex gap-2 mt-4">
//         <button
//           onClick={() => addToCart(product)}
//           className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//         >
//           Add to Cart
//         </button>
//         <button
//           onClick={() => router.push(`/product/${product.id}`)}
//           className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// }





// "use client";

// import { useRouter } from "next/navigation";
// import { useCart } from "@/app/context/CartContext";
// import type { Product } from "@/types/product";

// interface ProductCardProps {
//   product: Product;
// }

// export default function ProductCard({ product }: ProductCardProps) {
//   const { addToCart } = useCart();
//   const router = useRouter();

//   return (
//     <div className="border rounded-lg p-4 shadow-md">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-48 object-cover rounded"
//       />
//       <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//       <p className="text-gray-600">₹{product.price}</p>

//       <div className="flex gap-2 mt-4">
//         <button
//           onClick={() => addToCart(product)}
//           className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//         >
//           Add to Cart
//         </button>
//         <button
//           onClick={() => router.push(`/product/${product.id}`)}
//           className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// }






// "use client";

// import { useRouter } from "next/navigation";
// import { useCart } from "@/app/context/CartContext";
// import type { Product } from "@/types/product";

// interface ProductCardProps {
//   product: Product;
// }

// export default function ProductCard({ product }: ProductCardProps) {
//   const { addToCart } = useCart();
//   const router = useRouter();

//   return (
//     <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-48 object-cover rounded-md"
//       />

//       <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
//       <p className="text-gray-700 font-medium">₹{product.price}</p>

//       <div className="flex gap-3 mt-4">
//         <button
//           onClick={() => addToCart(product)}
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//         >
//           Add to Cart
//         </button>

//         <button
//           onClick={() => router.push(`/product/${product.id}`)}
//           className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// // }

// "use client";

// import { useRouter } from "next/navigation";
// import { useCart } from "@/app/context/CartContext";
// import { Product } from "@/types/product";

// interface ProductCardProps {
//   product: Product;
// }

// export default function ProductCard({ product }: ProductCardProps) {
//   const { addToCart } = useCart();
//   const router = useRouter();

//   const handleAddToCart = () => {
//     // Ensure product has default quantity
//     addToCart({
//       ...product,
//       quantity: 1,
//     });
//   };

//   return (
//     <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
//       {/* fallback image if not available */}
//       <img
//         src={product.image || "/placeholder.png"}
//         alt={product.name}
//         className="w-full h-48 object-cover rounded-md"
//       />

//       <h2 className="text-lg font-semibold mt-3">{product.name}</h2>

//       <p className="text-gray-700 font-medium">
//         ₹{typeof product.price === "number" ? product.price.toFixed(2) : product.price}
//       </p>

//       <div className="flex gap-3 mt-4">
//         <button
//           onClick={handleAddToCart}
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//         >
//           Add to Cart
//         </button>

//         <button
//           onClick={() => router.push(`/product/${product.id}`)}
//           className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useRouter } from "next/navigation";
// import { useCart } from "@/app/context/CartContext";
// import { Product, CartItem } from "@/types/product";

// interface ProductCardProps {
//   product: Product;
// }

// export default function ProductCard({ product }: ProductCardProps) {
//   const { addToCart } = useCart();
//   const router = useRouter();

//   const handleAddToCart = () => {
//     addToCart({
//       ...product,
//       quantity: 1, // always default to 1 when adding
//     });
//   };

//   return (
//     <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col">
//       {/* Product Image */}
//       <img
//         src={product.image || "/placeholder.png"}
//         alt={product.name}
//         className="w-full h-48 object-cover rounded-md"
//       />

//       {/* Product Info */}
//       <div className="flex-1 mt-3">
//         <h2 className="text-lg font-semibold">{product.name}</h2>
//         <p className="text-gray-700 font-medium mt-1">
//           ₹
//           {typeof product.price === "number"
//             ? product.price.toFixed(2)
//             : Number(product.price).toFixed(2)}
//         </p>
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-3 mt-4">
//         <button
//           onClick={handleAddToCart}
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//         >
//           Add to Cart
//         </button>

//         <button
//           onClick={() => router.push(`/product/${product.id}`)}
//           className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// }







// "use client";

// import { useRouter } from "next/navigation";
// import { useCart } from "@/app/context/CartContext";
// import { Product, CartItem } from "@/types/product";

// interface ProductCardProps {
//   product: Product;
// }

// export default function ProductCard({ product }: ProductCardProps) {
//   const { addToCart } = useCart();
//   const router = useRouter();

//   const handleAddToCart = () => {
//     const cartItem: CartItem = {
//       ...product,
//       quantity: 1, // ✅ explicitly typed as CartItem
//     };

//     addToCart(cartItem); // ✅ no TS error now
//   };

//   return (
//     <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col">
//       {/* Product Image */}
//       <img
//         src={product.image || "/placeholder.png"}
//         alt={product.name}
//         className="w-full h-48 object-cover rounded-md"
//       />

//       {/* Product Info */}
//       <div className="flex-1 mt-3">
//         <h2 className="text-lg font-semibold">{product.name}</h2>
//         <p className="text-gray-700 font-medium mt-1">
//           ₹
//           {typeof product.price === "number"
//             ? product.price.toFixed(2)
//             : Number(product.price).toFixed(2)}
//         </p>
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-3 mt-4">
//         <button
//           onClick={handleAddToCart}
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//         >
//           Add to Cart
//         </button>

//         <button
//           onClick={() => router.push(`/product/${product.id}`)}
//           className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// }












// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useCart } from "@/app/context/CartContext";
// import { Product, CartItem } from "@/types/product";

// interface ProductCardProps {
//   product: Product;
// }

// export default function ProductCard({ product }: ProductCardProps) {
//   const { addToCart } = useCart();
//   const router = useRouter();

//   const handleAddToCart = () => {
//     const cartItem: CartItem = {
//       ...product,
//       quantity: 1,
//     };

//     addToCart(cartItem);
//   };

//   return (
//     <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col">
//       {/* Product Image */}
//       <div className="relative w-full h-48">
//         <Image
//           src={product.image || "/placeholder.png"}
//           alt={product.name || "Product Image"}
//           fill
//           className="object-cover rounded-md"
//           priority // improves LCP
//         />
//       </div>

//       {/* Product Info */}
//       <div className="flex-1 mt-3">
//         <h2 className="text-lg font-semibold line-clamp-2">{product.name}</h2>
//         <p className="text-gray-700 font-medium mt-1">
//           ₹
//           {typeof product.price === "number"
//             ? product.price.toFixed(2)
//             : Number(product.price).toFixed(2)}
//         </p>
//         {product.oldPrice && (
//           <p className="text-gray-400 text-sm line-through">
//             ₹{product.oldPrice.toLocaleString()}
//           </p>
//         )}
//         {product.discount && (
//           <p className="text-orange-600 text-sm font-semibold">
//             {product.discount}% OFF
//           </p>
//         )}
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-3 mt-4">
//         <button
//           onClick={handleAddToCart}
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1"
//         >
//           Add to Cart
//         </button>

//         <button
//           onClick={() => router.push(`/product/${product._id}`)} // use _id for MongoDB
//           className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors flex-1"
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// }





// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useCart } from "@/app/context/CartContext";

// interface Product {
//   _id: string;
//   name: string;
//   image?: string;
//   price: number;
//   oldPrice?: number;
//   discount?: number;
//   slug: string;
//   rating?: number;
//   reviews?: number;
// }

// interface CartItem extends Product {
//   quantity: number;
// }

// interface ProductCardProps {
//   product: Product;
// }

// export default function ProductCard({ product }: ProductCardProps) {
//   const { addToCart } = useCart();
//   const router = useRouter();

//   const handleAddToCart = () => {
//     const cartItem: CartItem = {
//       ...product,
//       quantity: 1,
//     };

//     addToCart(cartItem);
//   };

//   return (
//     <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col">
//       {/* Product Image */}
//       <div className="relative w-full h-48">
//         <Image
//           src={product.image || "/placeholder.png"}
//           alt={product.name || "Product Image"}
//           fill
//           className="object-cover rounded-md"
//           priority
//         />
//       </div>

//       {/* Product Info */}
//       <div className="flex-1 mt-3">
//         <h2 className="text-lg font-semibold line-clamp-2">{product.name}</h2>

//         <div className="flex items-center gap-2 mt-1">
//           <span className="text-green-700 font-bold text-lg">
//             ₹{Number(product.price).toLocaleString()}
//           </span>
//           {product.oldPrice && (
//             <span className="text-gray-400 text-sm line-through">
//               ₹{Number(product.oldPrice).toLocaleString()}
//             </span>
//           )}
//         </div>

//         {product.discount && (
//           <p className="text-orange-600 text-sm font-semibold mt-1">
//             {product.discount}% OFF
//           </p>
//         )}

//         {/* Optional: Rating */}
//         {product.rating && (
//           <p className="text-yellow-500 text-sm mt-1">
//             {"⭐".repeat(Math.floor(product.rating))} ({product.reviews ?? 0})
//           </p>
//         )}
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-3 mt-4">
//         <button
//           onClick={handleAddToCart}
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1"
//         >
//           Add to Cart
//         </button>

//         <button
//           onClick={() => router.push(`/product/${product.slug}`)} // use slug instead of _id if you have slug routes
//           className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors flex-1"
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// }













// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useCart } from "@/app/context/CartContext";

// interface Product {
//   _id: string;
//   name: string;
//   image?: string;
//   price: number;
//   oldPrice?: number;
//   discount?: number;
//   slug: string;
//   rating?: number;
//   reviews?: number;
// }

// interface CartItem extends Product {
//   quantity: number;
// }

// interface ProductCardProps {
//   product: Product;
// }

// export default function ProductCard({ product }: ProductCardProps) {
//   const { addToCart } = useCart();
//   const router = useRouter();

//   // ✅ Fix: include _id
//   const handleAddToCart = () => {
//     const cartItem: CartItem = {
//       ...product,
//       _id: product._id, // must use _id from MongoDB
//       quantity: 1,
//     };

//     addToCart(cartItem);
//   };

//   return (
//     <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col">
//       {/* Product Image */}
//       <div className="relative w-full h-48">
//         <Image
//           src={product.image || "/placeholder.png"}
//           alt={product.name || "Product Image"}
//           fill
//           className="object-cover rounded-md"
//           priority
//         />
//       </div>

//       {/* Product Info */}
//       <div className="flex-1 mt-3">
//         <h2 className="text-lg font-semibold line-clamp-2">{product.name}</h2>

//         <div className="flex items-center gap-2 mt-1">
//           <span className="text-green-700 font-bold text-lg">
//             ₹{Number(product.price).toLocaleString()}
//           </span>
//           {product.oldPrice && (
//             <span className="text-gray-400 text-sm line-through">
//               ₹{Number(product.oldPrice).toLocaleString()}
//             </span>
//           )}
//         </div>

//         {product.discount && (
//           <p className="text-orange-600 text-sm font-semibold mt-1">
//             {product.discount}% OFF
//           </p>
//         )}

//         {product.rating && (
//           <p className="text-yellow-500 text-sm mt-1">
//             {"⭐".repeat(Math.floor(product.rating))} ({product.reviews ?? 0})
//           </p>
//         )}
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-3 mt-4">
//         <button
//           onClick={handleAddToCart}
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1"
//         >
//           Add to Cart
//         </button>

//         <button
//           onClick={() => router.push(`/product/${product.slug}`)}
//           className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors flex-1"
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// }









"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { Product, CartItem } from "@/types/product"; // ✅ use shared types

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      ...product,
      id: product.id || product._id || "", // ✅ always provide `id`
      quantity: 1,
    };

    addToCart(cartItem);
  };

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col">
      {/* Product Image */}
      <div className="relative w-full h-48">
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.name || "Product Image"}
          fill
          className="object-cover rounded-md"
          priority
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 mt-3">
        <h2 className="text-lg font-semibold line-clamp-2">{product.name}</h2>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-green-700 font-bold text-lg">
            ₹{Number(product.price).toLocaleString()}
          </span>
          {product.oldPrice && (
            <span className="text-gray-400 text-sm line-through">
              ₹{Number(product.oldPrice).toLocaleString()}
            </span>
          )}
        </div>

        {product.discount && (
          <p className="text-orange-600 text-sm font-semibold mt-1">
            {product.discount}% OFF
          </p>
        )}

        {product.rating && (
          <p className="text-yellow-500 text-sm mt-1">
            {"⭐".repeat(Math.floor(product.rating))} ({product.reviews ?? 0})
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1"
        >
          Add to Cart
        </button>

        <button
          onClick={() => router.push(`/product/${product.slug}`)}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors flex-1"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
