"use client";

import Image from "next/image";
import Link from "next/link";

// Example Products (in real project, fetch from DB/Cloudinary)
const products = [
  {
    id: 1,
    name: "Horse Fire Tablets - For Natural Energy and Daily Stamina",
    image: "/horse-fire.webp",
    rating: 4.8,
    reviews: 186,
    price: 1999,
    oldPrice: 4000,
    discount: 50,
    slug: "horse-fire-tablets",
  },
  {
    id: 2,
    name: "Bull Rider Capsule - Ayurvedic Medicine For Strength",
    image: "/bull-rider.webp",
    rating: 4.9,
    reviews: 82,
    price: 999,
    oldPrice: 2000,
    discount: 50,
    slug: "bull-rider-capsule",
  },
  {
    id: 3,
    name: "Power Boost Herbal Tonic - Energy & Vitality",
    image: "/image2.png",
    rating: 4.7,
    reviews: 120,
    price: 1499,
    oldPrice: 3000,
    discount: 50,
    slug: "power-boost-tonic",
  },
  {
    id: 4,
    name: "Vital Force Syrup - For Daily Strength",
    image: "/image1.png",
    rating: 4.6,
    reviews: 95,
    price: 799,
    oldPrice: 1600,
    discount: 50,
    slug: "vital-force-syrup",
  },
  {
    id: 5,
    name: "Vital Force Syrup - For Daily Strength",
    image: "/image3.png",
    rating: 4.6,
    reviews: 95,
    price: 799,
    oldPrice: 1600,
    discount: 50,
    slug: "vital-force-syrup",
  },
];

export default function ProductGrid() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Featured <span className="text-green-600">Products</span>
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-4 flex flex-col"
            >
              {/* Product Image */}
              <Link href={`/products/${product.slug}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="rounded-lg mx-auto object-contain"
                />
              </Link>

              {/* Product Info */}
              <div className="mt-4 flex-1 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mt-2 text-yellow-500 text-sm">
                  {"⭐".repeat(Math.floor(product.rating))}
                  <span className="ml-1 text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="mt-2">
                  <span className="text-lg font-bold text-green-700">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="ml-2 text-gray-400 line-through">
                    ₹{product.oldPrice.toLocaleString()}
                  </span>
                </div>

                {/* Discount Badge */}
                <div className="mt-1">
                  <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded">
                    {product.discount}% OFF
                  </span>
                </div>

                {/* Buy Button */}
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-4 w-full bg-green-600 text-white text-center py-2 rounded-md font-medium hover:bg-green-700 transition"
                >
                  BUY NOW
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
