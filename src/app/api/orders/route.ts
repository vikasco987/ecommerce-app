// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";

// export async function POST(req: Request) {
//   try {
//     await connectDB();

//     const data = await req.json();

//     const newOrder = await Order.create({
//       products: data.products,
//       totalPrice: data.totalPrice,
//       customer: data.customer,
//     });

//     return NextResponse.json({ success: true, order: newOrder });
//   } catch (error) {
//     console.error("Order creation failed:", error);
//     return NextResponse.json({ success: false, error: "Order creation failed" }, { status: 500 });
//   }
// }





// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema({
//   products: [
//     {
//       _id: String,
//       name: String,
//       price: Number,
//       quantity: Number,
//     },
//   ],
//   totalPrice: Number,
//   customer: {
//     name: String,
//     phone: String,
//     email: String,
//     address: String,
//   },
//   createdAt: { type: Date, default: Date.now },
// });

// const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

// export async function POST(req: NextRequest) {
//   try {
//     await connectDB();
//     const data = await req.json();

//     const order = new Order(data);
//     await order.save();

//     return NextResponse.json({ success: true, order });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to place order" }, { status: 500 });
//   }
// }






// import { NextRequest, NextResponse } from "next/server";
// import Order from "@/models/Order"; // use the updated Order model with paymentStatus
// import { connectDB } from "@/lib/mongodb";

// export async function POST(req: NextRequest) {
//   try {
//     // Connect to MongoDB
//     await connectDB();

//     // Parse request body
//     const data = await req.json();

//     // Ensure paymentStatus is set to "unpaid" by default
//     const orderData = {
//       ...data,
//       paymentStatus: "unpaid",
//       createdAt: new Date(),
//     };

//     const order = new Order(orderData);
//     await order.save();

//     return NextResponse.json({ success: true, order });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { success: false, error: "Failed to place order" },
//       { status: 500 }
//     );
//   }
// }





// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";

// // POST /api/orders — create a new order
// export async function POST(req: NextRequest): Promise<NextResponse> {
//   try {
//     await connectDB();
//     const body = await req.json();
//     const { products, totalPrice, customer, paymentStatus, createdAt } = body;

//     // Filter out invalid products
//     const validProducts = products.filter((p: any) => p._id);

//     if (!validProducts.length) {
//       return NextResponse.json({ success: false, error: "No valid products in order" }, { status: 400 });
//     }

//     const order = await Order.create({
//       products: validProducts,
//       totalPrice,
//       customer,
//       paymentStatus: paymentStatus || "unpaid",
//       createdAt: createdAt || new Date(),
//     });

//     return NextResponse.json({ success: true, order });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to place order" }, { status: 500 });
//   }
// }

// // GET /api/orders — fetch all orders
// export async function GET(): Promise<NextResponse> {
//   try {
//     await connectDB();
//     const orders = await Order.find().sort({ createdAt: -1 });
//     return NextResponse.json({ success: true, orders });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to fetch orders" }, { status: 500 });
//   }
// }






// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";

// // POST /api/orders — create a new order
// export async function POST(req: NextRequest): Promise<NextResponse> {
//   try {
//     await connectDB();

//     const body = await req.json();
//     const { products, totalPrice, customer, paymentStatus, createdAt } = body;

//     if (!products || !products.length) {
//       return NextResponse.json(
//         { success: false, error: "No products in order" },
//         { status: 400 }
//       );
//     }

//     // Filter valid products (must have _id, price, quantity)
//     const validProducts = products.filter(
//       (p: any) =>
//         p._id &&
//         typeof p.price === "number" &&
//         typeof p.quantity === "number"
//     );

//     if (!validProducts.length) {
//       return NextResponse.json(
//         { success: false, error: "No valid products in order" },
//         { status: 400 }
//       );
//     }

//     const order = await Order.create({
//       products: validProducts,
//       totalPrice,
//       customer,
//       paymentStatus: paymentStatus || "unpaid",
//       createdAt: createdAt || new Date(),
//     });

//     return NextResponse.json({ success: true, order });
//   } catch (err: any) {
//     console.error("POST /api/orders error:", err);
//     return NextResponse.json(
//       { success: false, error: err.message || "Failed to place order" },
//       { status: 500 }
//     );
//   }
// }

// // GET /api/orders — fetch all orders
// export async function GET(): Promise<NextResponse> {
//   try {
//     await connectDB();
//     const orders = await Order.find().sort({ createdAt: -1 });
//     return NextResponse.json({ success: true, orders });
//   } catch (err: any) {
//     console.error("GET /api/orders error:", err);
//     return NextResponse.json(
//       { success: false, error: err.message || "Failed to fetch orders" },
//       { status: 500 }
//     );
//   }
// }












import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

// ✅ POST /api/orders — create a new order
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await connectDB();

    const body = await req.json();
    const { products, totalPrice, customer, paymentStatus, createdAt } = body;

    // Basic validations
    if (!products || !products.length) {
      return NextResponse.json(
        { success: false, error: "No products in order" },
        { status: 400 }
      );
    }

    // Filter valid products (must have _id, price, quantity)
    const validProducts = products.filter(
      (p: any) =>
        p._id &&
        typeof p.price === "number" &&
        typeof p.quantity === "number"
    );

    if (!validProducts.length) {
      return NextResponse.json(
        { success: false, error: "No valid products in order" },
        { status: 400 }
      );
    }

    // ✅ Validate required customer fields
    if (
      !customer ||
      !customer.name ||
      !customer.phone ||
      !customer.email ||
      !customer.address ||
      !customer.pincode
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required customer details" },
        { status: 400 }
      );
    }

    // ✅ Create order
    const order = await Order.create({
      products: validProducts,
      totalPrice,
      customer: {
        name: customer.name,
        phone: customer.phone,
        email: customer.email,
        address: customer.address,
        pincode: customer.pincode, // ✅ Added Pin Code
        landmark: customer.landmark || "", // ✅ Added Landmark (optional)
      },
      paymentStatus: paymentStatus || "unpaid",
      createdAt: createdAt || new Date(),
    });

    return NextResponse.json({ success: true, order });
  } catch (err: any) {
    console.error("POST /api/orders error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to place order" },
      { status: 500 }
    );
  }
}

// ✅ GET /api/orders — fetch all orders
export async function GET(): Promise<NextResponse> {
  try {
    await connectDB();
    const orders = await Order.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, orders });
  } catch (err: any) {
    console.error("GET /api/orders error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
