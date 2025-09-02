// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";

// export async function GET(req: Request, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();
//     const order = await Order.findById(params.id);

//     if (!order) {
//       return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, order });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to fetch order" }, { status: 500 });
//   }
// }











// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";

// export async function GET(req: Request, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();
//     const order = await Order.findById(params.id);
//     if (!order) {
//       return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
//     }
//     return NextResponse.json({ success: true, order });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to fetch order" }, { status: 500 });
//   }
// }

// export async function PATCH(req: Request, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();
//     const body = await req.json();
//     const { paymentStatus, deliveryStatus, status } = body; // allow updating multiple statuses

//     const updateData: any = {};
//     if (paymentStatus) updateData.paymentStatus = paymentStatus;
//     if (deliveryStatus || status) updateData.deliveryStatus = deliveryStatus || status;

//     const order = await Order.findByIdAndUpdate(params.id, updateData, { new: true });

//     if (!order) {
//       return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, order });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to update order" }, { status: 500 });
//   }
// }

// export async function DELETE(req: Request, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();
//     const order = await Order.findByIdAndDelete(params.id);
//     if (!order) return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to delete order" }, { status: 500 });
//   }
// }








import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

// GET /api/orders/[id]
export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
): Promise<NextResponse> {
  try {
    await connectDB();
    const order = await Order.findById(context.params.id);

    if (!order) {
      return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, order });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to fetch order" }, { status: 500 });
  }
}

// PATCH /api/orders/[id]
export async function PATCH(
  req: NextRequest,
  context: { params: { id: string } }
): Promise<NextResponse> {
  try {
    await connectDB();
    const body = await req.json();
    const { paymentStatus, deliveryStatus, status } = body;

    const updateData: any = {};
    if (paymentStatus) updateData.paymentStatus = paymentStatus;
    if (deliveryStatus || status) updateData.deliveryStatus = deliveryStatus || status;

    const order = await Order.findByIdAndUpdate(context.params.id, updateData, { new: true });

    if (!order) {
      return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, order });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to update order" }, { status: 500 });
  }
}

// DELETE /api/orders/[id]
export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
): Promise<NextResponse> {
  try {
    await connectDB();
    const order = await Order.findByIdAndDelete(context.params.id);

    if (!order) {
      return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to delete order" }, { status: 500 });
  }
}
