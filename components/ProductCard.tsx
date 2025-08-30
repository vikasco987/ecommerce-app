"use client";

import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <Link href={`/products/${product.id}`} className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded">
        View
      </Link>
    </div>
  );
}
