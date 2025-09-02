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






import { NextRequest, NextResponse } from "next/server";
import Order from "@/models/Order"; // use the updated Order model with paymentStatus
import { connectDB } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    // Connect to MongoDB
    await connectDB();

    // Parse request body
    const data = await req.json();

    // Ensure paymentStatus is set to "unpaid" by default
    const orderData = {
      ...data,
      paymentStatus: "unpaid",
      createdAt: new Date(),
    };

    const order = new Order(orderData);
    await order.save();

    return NextResponse.json({ success: true, order });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Failed to place order" },
      { status: 500 }
    );
  }
}
