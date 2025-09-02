// File: src/app/api/products/seed/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

import Product from "@/models/Product";

export async function GET() {
  try {
    await connectDB();

    // Clear existing products
    await Product.deleteMany();

    // Sample products
    const sampleProducts = [
      { name: "Pizza", description: "Cheesy pizza", price: 299, category: "Food", slug: "pizza", image: "/pizza.jpg" },
      { name: "Burger", description: "Juicy burger", price: 199, category: "Food", slug: "burger", image: "/burger.jpg" },
    ];

    await Product.insertMany(sampleProducts);

    return NextResponse.json({ message: "Database seeded!" }, { status: 201 });
  } catch (error: any) {
    // Log the full error for debugging
    console.error("❌ Seed Error:", error);
    return NextResponse.json({ error: "Failed to seed database", details: error.message }, { status: 500 });
  }
}
