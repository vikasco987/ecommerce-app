




// File: app/api/products/route.ts
import mongoose from "mongoose";
import { NextResponse } from "next/server";
// import { Product } from "../../../models/Product";
import Product from "@/models/Product";




const MONGODB_URI = process.env.MONGODB_URI;

const cached = (global as any).mongoose || { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is not defined in .env");
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log("✅ Connected to MongoDB");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  (global as any).mongoose = cached;
  return cached.conn;
}

export async function GET() {
  try {
    await dbConnect();

    const products = await Product.find({}).lean();

    if (!products || products.length === 0) {
      return NextResponse.json({ error: "No products found in database" }, { status: 404 });
    }

    return NextResponse.json(products, { status: 200 });
  } catch (error: any) {
    console.error("❌ API Error:", error.message);
    return NextResponse.json(
      { error: error.message || "Failed to fetch products" },
      { status: 500 }
    );
  }
}



//old


// File: pages/api/products.ts
// import type { NextApiRequest, NextApiResponse } from "next";
// import mongoose from "mongoose";
// import { Product } from "../../models/Product"; // adjust path if needed

// const MONGODB_URI = process.env.MONGODB_URI;

// let cached = (global as any).mongoose || { conn: null, promise: null };

// async function dbConnect() {
//   if (cached.conn) return cached.conn;

//   if (!MONGODB_URI) {
//     throw new Error("❌ MONGODB_URI is not defined in .env");
//   }

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
//       console.log("✅ Connected to MongoDB");
//       return mongoose;
//     });
//   }

//   cached.conn = await cached.promise;
//   (global as any).mongoose = cached;
//   return cached.conn;
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     await dbConnect();

//     const products = await Product.find({}).lean();

//     if (!products || products.length === 0) {
//       return res.status(404).json({ error: "No products found in database" });
//     }

//     res.status(200).json(products);
//   } catch (error: any) {
//     console.error("❌ API Error:", error.message);
//     res.status(500).json({ error: error.message || "Failed to fetch products" });
//   }
// }
