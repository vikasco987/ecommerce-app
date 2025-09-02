// // src/app/api/orders/route.ts
// import { NextResponse } from "next/server";
// import {clientPromise} from "@/lib/mongodb";// or mongoose if using MongoDB directly
// import { Order } from "@/types/order";

// export async function POST(req: Request) {
//   try {
//     const data: Order = await req.json();

//     // save order to DB
//     const savedOrder = await prisma.order.create({
//       data: {
//         items: data.items,
//         totalPrice: data.totalPrice,
//         customerName: data.customerName,
//         email: data.email,
//         phone: data.phone,
//         address: data.address,
//       },
//     });

//     return NextResponse.json({ success: true, order: savedOrder });
//   } catch (err) {
//     return NextResponse.json({ success: false, error: err.message }, { status: 500 });
//   }
// }




// // src/app/api/orders/route.ts
// import { NextResponse } from "next/server";
// import { clientPromise } from "@/lib/mongodb";
// import { Order } from "@/types/order";

// export async function POST(req: Request) {
//   try {
//     const data: Order = await req.json();

//     const client = await clientPromise;
//     const db = client.db("ecommerce"); // change to your DB name

//     const savedOrder = await db.collection("orders").insertOne(data);

//     return NextResponse.json({ success: true, order: savedOrder });
//   } catch (err: any) {
//     return NextResponse.json(
//       { success: false, error: err.message },
//       { status: 500 }
//     );
//   }
// }








// src/app/api/orders/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";
import mongoose, { Schema, model, models } from "mongoose";

// --- Define Order schema ---
const OrderSchema = new Schema(
  {
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    items: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: "pending" }, // e.g. pending, shipped, delivered
  },
  { timestamps: true }
);

// Prevent model overwrite issue in Next.js
const Order = models.Order || model("Order", OrderSchema);

export async function POST(req: Request) {
  try {
    await connectDB();

    const data = await req.json();

    const newOrder = new Order(data);
    const savedOrder = await newOrder.save();

    return NextResponse.json({ success: true, order: savedOrder });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const orders = await Order.find().sort({ createdAt: -1 });

    return NextResponse.json({ success: true, orders });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
