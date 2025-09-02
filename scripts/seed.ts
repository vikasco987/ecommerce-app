// // File: scripts/seed.ts
// import mongoose from "mongoose";
// import { Product } from "../models/Product.ts";




// const MONGODB_URI = process.env.MONGODB_URI || "";

// async function run() {
//   if (!MONGODB_URI) {
//     throw new Error("❌ MONGODB_URI not found in .env.local");
//   }

//   await mongoose.connect(MONGODB_URI);
//   console.log("✅ Connected to MongoDB for seeding");

//   // Clear old data
//   await Product.deleteMany({});

//   // Insert sample products
//   await Product.insertMany([
//     {
//       name: "Delicious Pizza",
//       slug: "delicious-pizza",
//       price: 499,
//       oldPrice: 599,
//       discount: 20,
//       image: "/pizza.jpg",
//       rating: 4.5,
//       reviews: 120,
//     },
//     {
//       name: "Cheese Burger",
//       slug: "cheese-burger",
//       price: 249,
//       image: "/burger.jpg",
//       rating: 4.2,
//       reviews: 80,
//     },
//     {
//       name: "Chicken Biryani",
//       slug: "chicken-biryani",
//       price: 349,
//       image: "/biryani.jpg",
//       rating: 4.8,
//       reviews: 150,
//     },
//   ]);

//   console.log("✅ Sample products added");
//   mongoose.disconnect();
// }

// run().catch((err) => {
//   console.error("❌ Seeding error:", err);
//   mongoose.disconnect();
// });





// File: scripts/seed.ts
import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "../src/models/Product.js"; // 👈 explicitly .ts



// Load environment variables
dotenv.config({ path: "C:\\Users\\VIKASH\\ecommerce-app\\.env" });

const MONGODB_URI = process.env.MONGODB_URI || "";

async function run() {
  if (!MONGODB_URI) {
    throw new Error("❌ MONGODB_URI not found in .env");
  }

  await mongoose.connect(MONGODB_URI);
  console.log("✅ Connected to MongoDB for seeding");

  // Clear old data
  await Product.deleteMany({});

  // Insert sample products
  await Product.insertMany([
    {
      name: "Delicious Pizza",
      slug: "delicious-pizza",
      price: 499,
      oldPrice: 599,
      discount: 20,
      image: "/pizza.jpg",
      rating: 4.5,
      reviews: 120,
    },
    {
      name: "Cheese Burger",
      slug: "cheese-burger",
      price: 249,
      image: "/burger.jpg",
      rating: 4.2,
      reviews: 80,
    },
    {
      name: "Chicken Biryani",
      slug: "chicken-biryani",
      price: 349,
      image: "/biryani.jpg",
      rating: 4.8,
      reviews: 150,
    },
  ]);

  console.log("✅ Sample products added");
  mongoose.disconnect();
}

run().catch((err) => {
  console.error("❌ Seeding error:", err);
  mongoose.disconnect();
});












// [
//   {
//     "name": "Horse Fire Tablets - For Natural Energy and Daily Stamina",
//     "image": "/horse-fire.webp",
//     "rating": 4.8,
//     "reviews": 186,
//     "price": 1999,
//     "oldPrice": 4000,
//     "discount": 50,
//     "slug": "horse-fire-tablets"
//   },
//   {
//     "name": "Bull Rider Capsule - Ayurvedic Medicine For Strength",
//     "image": "/bull-rider.webp",
//     "rating": 4.9,
//     "reviews": 82,
//     "price": 999,
//     "oldPrice": 2000,
//     "discount": 50,
//     "slug": "bull-rider-capsule"
//   },
//   {
//     "name": "Power Boost Herbal Tonic - Energy & Vitality",
//     "image": "/image2.png",
//     "rating": 4.7,
//     "reviews": 120,
//     "price": 1499,
//     "oldPrice": 3000,
//     "discount": 50,
//     "slug": "power-boost-tonic"
//   },
//   {
//     "name": "Vital Force Syrup - For Daily Strength",
//     "image": "/image1.png",
//     "rating": 4.6,
//     "reviews": 95,
//     "price": 799,
//     "oldPrice": 1600,
//     "discount": 50,
//     "slug": "vital-force-syrup"
//   },
//   {
//     "name": "Vital Force Syrup - For Daily Strength",
//     "image": "/image3.png",
//     "rating": 4.6,
//     "reviews": 95,
//     "price": 799,
//     "oldPrice": 1600,
//     "discount": 50,
//     "slug": "vital-force-syrup-2"
//   }
// ]
