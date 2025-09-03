// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";

// export async function PATCH(req: Request, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();
//     const { paymentStatus } = await req.json();

//     const order = await Order.findByIdAndUpdate(
//       params.id,
//       { paymentStatus },
//       { new: true }
//     );

//     if (!order) return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });

//     return NextResponse.json({ success: true, order });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to update payment status" }, { status: 500 });
//   }
// }







import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

// ✅ PATCH /api/orders/pay/[id]/payment
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> } // 👈 no RouteContext, use Promise
) {
  try {
    await connectDB();

    const { id } = await params; // 👈 must await in Next.js 15
    const { paymentStatus } = await req.json();

    const order = await Order.findByIdAndUpdate(
      id,
      { paymentStatus },
      { new: true }
    );

    if (!order) {
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, order });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Failed to update payment status" },
      { status: 500 }
    );
  }
}
