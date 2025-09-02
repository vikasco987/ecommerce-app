// src/app/api/orders/route.ts
import { NextResponse } from "next/server";
import {clientPromise} from "@/lib/mongodb";// or mongoose if using MongoDB directly
import { Order } from "@/types/order";

export async function POST(req: Request) {
  try {
    const data: Order = await req.json();

    // save order to DB
    const savedOrder = await prisma.order.create({
      data: {
        items: data.items,
        totalPrice: data.totalPrice,
        customerName: data.customerName,
        email: data.email,
        phone: data.phone,
        address: data.address,
      },
    });

    return NextResponse.json({ success: true, order: savedOrder });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
