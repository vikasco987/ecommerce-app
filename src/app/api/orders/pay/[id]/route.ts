// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";

// export async function PATCH(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();
//     const { id } = params;

//     const order = await Order.findById(id);
//     if (!order) {
//       return NextResponse.json(
//         { success: false, error: "Order not found" },
//         { status: 404 }
//       );
//     }

//     order.paymentStatus = "paid";
//     await order.save();

//     return NextResponse.json({ success: true, order });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { success: false, error: "Failed to update payment status" },
//       { status: 500 }
//     );
//   }
// }








import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> } // ✅ inline type
) {
  try {
    await connectDB();

    const { id } = await context.params; // ✅ must await in Next.js 15

    const order = await Order.findById(id);
    if (!order) {
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 }
      );
    }

    // Example: update paymentStatus
    order.paymentStatus = "paid";
    await order.save();

    return NextResponse.json({ success: true, order });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Failed to update payment status" },
      { status: 500 }
    );
  }
}
