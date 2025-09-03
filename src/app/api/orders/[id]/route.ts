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








// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";

// // GET /api/orders/[id]
// export async function GET(
//   req: NextRequest,
//   context: { params: { id: string } }
// ): Promise<NextResponse> {
//   try {
//     await connectDB();
//     const order = await Order.findById(context.params.id);

//     if (!order) {
//       return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, order });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to fetch order" }, { status: 500 });
//   }
// }

// // PATCH /api/orders/[id]
// export async function PATCH(
//   req: NextRequest,
//   context: { params: { id: string } }
// ): Promise<NextResponse> {
//   try {
//     await connectDB();
//     const body = await req.json();
//     const { paymentStatus, deliveryStatus, status } = body;

//     const updateData: any = {};
//     if (paymentStatus) updateData.paymentStatus = paymentStatus;
//     if (deliveryStatus || status) updateData.deliveryStatus = deliveryStatus || status;

//     const order = await Order.findByIdAndUpdate(context.params.id, updateData, { new: true });

//     if (!order) {
//       return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, order });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to update order" }, { status: 500 });
//   }
// }

// // DELETE /api/orders/[id]
// export async function DELETE(
//   req: NextRequest,
//   context: { params: { id: string } }
// ): Promise<NextResponse> {
//   try {
//     await connectDB();
//     const order = await Order.findByIdAndDelete(context.params.id);

//     if (!order) {
//       return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
//     }

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to delete order" }, { status: 500 });
//   }
// }
//new file added





// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";

// // GET /api/orders/[id] — fetch single order
// export async function GET(req: NextRequest, context: { params: { id: string } }): Promise<NextResponse> {
//   try {
//     await connectDB();
//     const order = await Order.findById(context.params.id);

//     if (!order) {
//       return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, order });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to fetch order" }, { status: 500 });
//   }
// }

// // PATCH /api/orders/[id] — update payment or delivery status
// export async function PATCH(req: NextRequest, context: { params: { id: string } }): Promise<NextResponse> {
//   try {
//     await connectDB();
//     const body = await req.json();
//     const { paymentStatus, deliveryStatus, status } = body;

//     const updateData: any = {};
//     if (paymentStatus) updateData.paymentStatus = paymentStatus;
//     if (deliveryStatus || status) updateData.deliveryStatus = deliveryStatus || status;

//     const order = await Order.findByIdAndUpdate(context.params.id, updateData, { new: true });

//     if (!order) {
//       return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, order });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to update order" }, { status: 500 });
//   }
// }

// // DELETE /api/orders/[id] — delete order
// export async function DELETE(req: NextRequest, context: { params: { id: string } }): Promise<NextResponse> {
//   try {
//     await connectDB();
//     const order = await Order.findByIdAndDelete(context.params.id);

//     if (!order) {
//       return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
//     }

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to delete order" }, { status: 500 });
//   }
// }





// import { NextRequest, NextResponse } from "next/server";
// import mongoose from "mongoose";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";

// // GET /api/orders/[id] — fetch single order
// export async function GET(
//   req: NextRequest,
//   context: { params: { id: string } }
// ): Promise<NextResponse> {
//   try {
//     await connectDB();
//     const { id } = context.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return NextResponse.json({ success: false, error: "Invalid order ID" }, { status: 400 });
//     }

//     const order = await Order.findById(id);

//     if (!order) {
//       return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, order });
//   } catch (err: any) {
//     console.error("GET /api/orders/[id] error:", err);
//     return NextResponse.json({ success: false, error: err.message || "Failed to fetch order" }, { status: 500 });
//   }
// }

// // PATCH /api/orders/[id] — update payment or delivery status
// export async function PATCH(
//   req: NextRequest,
//   context: { params: { id: string } }
// ): Promise<NextResponse> {
//   try {
//     await connectDB();
//     const { id } = context.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return NextResponse.json({ success: false, error: "Invalid order ID" }, { status: 400 });
//     }

//     const body = await req.json();
//     const { paymentStatus, deliveryStatus } = body;

//     const updateData: any = {};
//     if (paymentStatus) updateData.paymentStatus = paymentStatus;
//     if (deliveryStatus) updateData.deliveryStatus = deliveryStatus;

//     const order = await Order.findByIdAndUpdate(id, updateData, { new: true });

//     if (!order) {
//       return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, order });
//   } catch (err: any) {
//     console.error("PATCH /api/orders/[id] error:", err);
//     return NextResponse.json({ success: false, error: err.message || "Failed to update order" }, { status: 500 });
//   }
// }

// // DELETE /api/orders/[id] — delete order
// export async function DELETE(
//   req: NextRequest,
//   context: { params: { id: string } }
// ): Promise<NextResponse> {
//   try {
//     await connectDB();
//     const { id } = context.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return NextResponse.json({ success: false, error: "Invalid order ID" }, { status: 400 });
//     }

//     const order = await Order.findByIdAndDelete(id);

//     if (!order) {
//       return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
//     }

//     return NextResponse.json({ success: true });
//   } catch (err: any) {
//     console.error("DELETE /api/orders/[id] error:", err);
//     return NextResponse.json({ success: false, error: err.message || "Failed to delete order" }, { status: 500 });
//   }
// }








// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";
// import mongoose from "mongoose";

// // GET /api/orders/[id] — fetch single order
// export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();

//     // New Next.js 15+ pattern: await the params
//     const id = params.id;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return NextResponse.json(
//         { success: false, error: "Invalid order ID" },
//         { status: 400 }
//       );
//     }

//     const order = await Order.findById(id);

//     if (!order) {
//       return NextResponse.json(
//         { success: false, error: "Order not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, order });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { success: false, error: "Failed to fetch order" },
//       { status: 500 }
//     );
//   }
// }

// // PATCH /api/orders/[id] — update payment or delivery status
// export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();
//     const body = await req.json();
//     const { paymentStatus, deliveryStatus, status } = body;

//     const updateData: any = {};
//     if (paymentStatus) updateData.paymentStatus = paymentStatus;
//     if (deliveryStatus || status) updateData.deliveryStatus = deliveryStatus || status;

//     const id = params.id;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return NextResponse.json(
//         { success: false, error: "Invalid order ID" },
//         { status: 400 }
//       );
//     }

//     const order = await Order.findByIdAndUpdate(id, updateData, { new: true });

//     if (!order) {
//       return NextResponse.json(
//         { success: false, error: "Order not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, order });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { success: false, error: "Failed to update order" },
//       { status: 500 }
//     );
//   }
// }

// // DELETE /api/orders/[id] — delete order
// export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();

//     const id = params.id;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return NextResponse.json(
//         { success: false, error: "Invalid order ID" },
//         { status: 400 }
//       );
//     }

//     const order = await Order.findByIdAndDelete(id);

//     if (!order) {
//       return NextResponse.json(
//         { success: false, error: "Order not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { success: false, error: "Failed to delete order" },
//       { status: 500 }
//     );
//   }
// }



import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";
import mongoose from "mongoose";

// GET /api/orders/[id]
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();

    // ✅ New Next.js 15+ pattern: await params before using
    const { id } = await params; 

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: "Invalid order ID" }, { status: 400 });
    }

    const order = await Order.findById(id);
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
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const body = await req.json();
    const { paymentStatus, deliveryStatus, status } = body;

    const updateData: any = {};
    if (paymentStatus) updateData.paymentStatus = paymentStatus;
    if (deliveryStatus || status) updateData.deliveryStatus = deliveryStatus || status;

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: "Invalid order ID" }, { status: 400 });
    }

    const order = await Order.findByIdAndUpdate(id, updateData, { new: true });
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
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, error: "Invalid order ID" }, { status: 400 });
    }

    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      return NextResponse.json({ success: false, error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to delete order" }, { status: 500 });
  }
}
