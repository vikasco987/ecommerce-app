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



// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";
// import mongoose from "mongoose";

// // GET /api/orders/[id]
// export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();

//     // ✅ New Next.js 15+ pattern: await params before using
//     const { id } = await params; 

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return NextResponse.json({ success: false, error: "Invalid order ID" }, { status: 400 });
//     }

//     const order = await Order.findById(id);
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
// export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();
//     const body = await req.json();
//     const { paymentStatus, deliveryStatus, status } = body;

//     const updateData: any = {};
//     if (paymentStatus) updateData.paymentStatus = paymentStatus;
//     if (deliveryStatus || status) updateData.deliveryStatus = deliveryStatus || status;

//     const { id } = await params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return NextResponse.json({ success: false, error: "Invalid order ID" }, { status: 400 });
//     }

//     const order = await Order.findByIdAndUpdate(id, updateData, { new: true });
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
// export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();
//     const { id } = await params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return NextResponse.json({ success: false, error: "Invalid order ID" }, { status: 400 });
//     }

//     const order = await Order.findByIdAndDelete(id);
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
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";
// import mongoose from "mongoose";

// // GET /api/orders/[id]
// export async function GET(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();

//     const { id } = params; // ✅ no await here

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

// // PATCH /api/orders/[id]
// export async function PATCH(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();
//     const body = await req.json();
//     const { paymentStatus, deliveryStatus, status } = body;

//     const updateData: any = {};
//     if (paymentStatus) updateData.paymentStatus = paymentStatus;
//     if (deliveryStatus || status)
//       updateData.deliveryStatus = deliveryStatus || status;

//     const { id } = params; // ✅ no await here

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

// // DELETE /api/orders/[id]
// export async function DELETE(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();
//     const { id } = params; // ✅ no await here

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






// // g/docs/messages/sync-dynamic-apis
// //     at GET (src\app\api\orders\[id]\route.ts:540:13)
// //   538 |     await connectDB();
// //   539 |
// // > 540 |     const { id } = params; // ✅ no await here
// //       |             ^
// //   541 |
// //   542 |     if (!mongoose.Types.ObjectId.isValid(id)) {
// //   543 |       return NextResponse.json(
// //  GET /api/orders/68b7d70fed69d25cfacfcebb 200 in 983ms
// // Error: Route "/api/orders/[id]" used `params.id`. `params` should be awaited before using its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis
// //     at GET (src\app\api\orders\[id]\route.ts:540:13)
// //   538 |     await connectDB();
// //   539 |
// // > 540 |     const { id } = params; // ✅ no await here
// //       |             ^
// //   541 |
// //   542 |     if (!mongoose.Types.ObjectId.isValid(id)) {
// //   543 |       return NextResponse.json(
// //  GET /api/orders/68b7d70fed69d25cfacfcebb 200 in 839ms








// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";
// import mongoose from "mongoose";

// // ✅ Properly type dynamic route params
// interface Params {
//   params: { id: string };
// }

// // GET /api/orders/[id]
// export async function GET(req: NextRequest, context: Params) {
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
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to fetch order" }, { status: 500 });
//   }
// }

// // PATCH /api/orders/[id]
// export async function PATCH(req: NextRequest, context: Params) {
//   try {
//     await connectDB();
//     const body: {
//       paymentStatus?: string;
//       deliveryStatus?: string;
//       status?: string;
//     } = await req.json();

//     const { paymentStatus, deliveryStatus, status } = body;
//     const { id } = context.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return NextResponse.json({ success: false, error: "Invalid order ID" }, { status: 400 });
//     }

//     const updateData: Partial<{
//       paymentStatus: string;
//       deliveryStatus: string;
//     }> = {};
//     if (paymentStatus) updateData.paymentStatus = paymentStatus;
//     if (deliveryStatus || status) updateData.deliveryStatus = deliveryStatus || status;

//     const order = await Order.findByIdAndUpdate(id, updateData, { new: true });
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
// export async function DELETE(req: NextRequest, context: Params) {
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
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ success: false, error: "Failed to delete order" }, { status: 500 });
//   }
// }









// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";
// import mongoose from "mongoose";

// // GET /api/orders/[id]
// export async function GET(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();

//     const { id } = params; // ✅ no await here

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

// // PATCH /api/orders/[id]
// export async function PATCH(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();
//     const body = await req.json();
//     const { paymentStatus, deliveryStatus, status } = body;

//     const updateData: any = {};
//     if (paymentStatus) updateData.paymentStatus = paymentStatus;
//     if (deliveryStatus || status)
//       updateData.deliveryStatus = deliveryStatus || status;

//     const { id } = params; // ✅ no await here

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

// // DELETE /api/orders/[id]
// export async function DELETE(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();
//     const { id } = params; // ✅ no await here

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
// // }
// ///new below
// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";
// import mongoose from "mongoose";
// import type { RouteContext } from "next"; // ✅ import this

// // GET /api/orders/[id]
// export async function GET(
//   req: NextRequest,
//   context: RouteContext<{ id: string }>
// ) {
//   try {
//     await connectDB();

//     const { id } = await context.params; // ✅ requires await in Next.js 15

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

// // PATCH /api/orders/[id]
// export async function PATCH(
//   req: NextRequest,
//   context: RouteContext<{ id: string }>
// ) {
//   try {
//     await connectDB();
//     const body = await req.json();
//     const { paymentStatus, deliveryStatus, status } = body;

//     const updateData: any = {};
//     if (paymentStatus) updateData.paymentStatus = paymentStatus;
//     if (deliveryStatus || status)
//       updateData.deliveryStatus = deliveryStatus || status;

//     const { id } = await context.params; // ✅

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

// // DELETE /api/orders/[id]
// export async function DELETE(
//   req: NextRequest,
//   context: RouteContext<{ id: string }>
// ) {
//   try {
//     await connectDB();
//     const { id } = await context.params; // ✅

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












// import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Order from "@/models/Order";
// import mongoose from "mongoose";

// // ✅ GET /api/orders/[id]
// export async function GET(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();

//     const { id } = params;

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

// // ✅ PATCH /api/orders/[id]
// export async function PATCH(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();
//     const body = await req.json();
//     const { paymentStatus, deliveryStatus, status } = body;

//     const updateData: any = {};
//     if (paymentStatus) updateData.paymentStatus = paymentStatus;
//     if (deliveryStatus || status)
//       updateData.deliveryStatus = deliveryStatus || status;

//     const { id } = params;

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

// // ✅ DELETE /api/orders/[id]
// export async function DELETE(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await connectDB();
//     const { id } = params;

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

// ✅ GET /api/orders/[id]
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> } // 👈 params is async
) {
  try {
    await connectDB();

    const { id } = await params; // 👈 must await

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid order ID" },
        { status: 400 }
      );
    }

    const order = await Order.findById(id);
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
      { success: false, error: "Failed to fetch order" },
      { status: 500 }
    );
  }
}

// ✅ PATCH /api/orders/[id]
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const body = await req.json();
    const { paymentStatus, deliveryStatus, status } = body;

    const updateData: any = {};
    if (paymentStatus) updateData.paymentStatus = paymentStatus;
    if (deliveryStatus || status)
      updateData.deliveryStatus = deliveryStatus || status;

    const { id } = await params; // 👈 await

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid order ID" },
        { status: 400 }
      );
    }

    const order = await Order.findByIdAndUpdate(id, updateData, { new: true });
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
      { success: false, error: "Failed to update order" },
      { status: 500 }
    );
  }
}

// ✅ DELETE /api/orders/[id]
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params; // 👈 await

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid order ID" },
        { status: 400 }
      );
    }

    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Failed to delete order" },
      { status: 500 }
    );
  }
}
