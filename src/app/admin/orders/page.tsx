// "use client";

// import { useEffect, useState } from "react";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }

// interface Customer {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
// }

// interface Order {
//   _id: string;
//   products: Product[];
//   totalPrice: number;
//   customer: Customer;
//   paymentStatus: string;
//   createdAt: string;
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const res = await fetch("/api/orders/all");
//       const data = await res.json();
//       if (data.success) setOrders(data.orders);
//       setLoading(false);
//     };
//     fetchOrders();
//   }, []);

//   if (loading) return <p className="p-6">Loading orders...</p>;
//   if (orders.length === 0) return <p className="p-6">No orders found.</p>;

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">All Orders</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-200 rounded-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-4 py-2 border">Order ID</th>
//               <th className="px-4 py-2 border">Customer</th>
//               <th className="px-4 py-2 border">Products</th>
//               <th className="px-4 py-2 border">Total Price</th>
//               <th className="px-4 py-2 border">Payment Status</th>
//               <th className="px-4 py-2 border">Created At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id} className="hover:bg-gray-50">
//                 <td className="px-4 py-2 border text-sm">{order._id}</td>
//                 <td className="px-4 py-2 border text-sm">
//                   {order.customer.name}<br />
//                   {order.customer.phone}<br />
//                   {order.customer.email}<br />
//                   {order.customer.address}
//                 </td>
//                 <td className="px-4 py-2 border text-sm">
//                   {order.products.map((p) => (
//                     <div key={p._id}>
//                       {p.name} x {p.quantity} - ₹{p.price}
//                     </div>
//                   ))}
//                 </td>
//                 <td className="px-4 py-2 border text-sm">₹{order.totalPrice}</td>
//                 <td className={`px-4 py-2 border text-sm font-semibold ${order.paymentStatus === "paid" ? "text-green-600" : "text-red-600"}`}>
//                   {order.paymentStatus}
//                 </td>
//                 <td className="px-4 py-2 border text-sm">
//                   {new Date(order.createdAt).toLocaleString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }











// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { toast } from "react-hot-toast";

// interface Product {
//   _id: string;
//   name: string;
//   quantity: number;
//   price: number;
// }

// interface Customer {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
// }

// interface Order {
//   _id: string;
//   products: Product[];
//   totalPrice: number;
//   customer: Customer;
//   paymentStatus: string;
//   deliveryStatus?: string;
//   createdAt: string;
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [filter, setFilter] = useState<string>("all");
//   const [loading, setLoading] = useState<boolean>(true);

//   const fetchOrders = async () => {
//     setLoading(true);
//     const res = await fetch("/api/orders/all");
//     const data = await res.json();
//     if (data.success) setOrders(data.orders || []);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this order?")) return;
//     const res = await fetch(`/api/orders/${id}`, { method: "DELETE" });
//     const data = await res.json();
//     if (data.success) {
//       toast.success("Order deleted!");
//       fetchOrders();
//     } else {
//       toast.error("Failed to delete order");
//     }
//   };

// //   const handleMarkDelivered = async (id: string) => {
// //     const res = await fetch(`/api/orders/${id}`, {
// //       method: "PATCH",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ deliveryStatus: "delivered" }),
// //     });
// //     const data = await res.json();
// //     if (data.success) {
// //       toast.success("Order marked as delivered!");
// //       fetchOrders();
// //     } else {
// //       toast.error("Failed to update status");
// //     }
// //   };


// const handleMarkDelivered = async (id: string) => {
//   const res = await fetch(`/api/orders/${id}`, {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ status: "delivered" }), // ✅ must match backend
//   });

//   const data = await res.json();
//   if (data.success) {
//     toast.success("Order marked as delivered!");
//     fetchOrders(); // reload orders
//   } else {
//     toast.error("Failed to update status");
//   }
// };

//   const filteredOrders =
//     filter === "all"
//       ? orders
//       : orders.filter(
//           (o) =>
//             o.paymentStatus === filter || o.deliveryStatus === filter
//         );

//   if (loading) return <p className="p-6">Loading orders...</p>;
//   if (orders.length === 0) return <p className="p-6">No orders found.</p>;

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">All Orders</h1>

//       <div className="mb-4 flex gap-3">
//         <select
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//           className="p-2 border rounded"
//         >
//           <option value="all">All</option>
//           <option value="unpaid">Unpaid</option>
//           <option value="paid">Paid</option>
//           <option value="pending">Pending Delivery</option>
//           <option value="delivered">Delivered</option>
//         </select>
//         <Button onClick={fetchOrders}>Refresh</Button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border px-2 py-1">Order ID</th>
//               <th className="border px-2 py-1">Customer</th>
//               <th className="border px-2 py-1">Products</th>
//               <th className="border px-2 py-1">Total</th>
//               <th className="border px-2 py-1">Payment</th>
//               <th className="border px-2 py-1">Delivery</th>
//               <th className="border px-2 py-1">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredOrders.map((order) => (
//               <tr key={order._id} className="hover:bg-gray-50">
//                 <td className="border px-2 py-1">{order._id}</td>
//                 <td className="border px-2 py-1">
//                   {order.customer.name} <br />
//                   {order.customer.phone} <br />
//                   {order.customer.email} <br />
//                   {order.customer.address}
//                 </td>
//                 <td className="border px-2 py-1">
//                   {order.products.map((p) => (
//                     <div key={p._id}>
//                       {p.name} x {p.quantity} - ₹{p.price}
//                     </div>
//                   ))}
//                 </td>
//                 <td className="border px-2 py-1">₹{order.totalPrice}</td>
//                 <td className={`border px-2 py-1 font-semibold ${order.paymentStatus === "paid" ? "text-green-600" : "text-red-600"}`}>
//                   {order.paymentStatus}
//                 </td>
//                 <td className="border px-2 py-1">{order.deliveryStatus || "pending"}</td>
//                 <td className="border px-2 py-1 flex flex-col gap-1">
//                   <Button onClick={() => handleMarkDelivered(order._id)} size="sm">
//                     Mark Delivered
//                   </Button>
//                   <Button onClick={() => handleDelete(order._id)} size="sm" variant="destructive">
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }















// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { toast } from "react-hot-toast";

// interface Product {
//   _id: string;
//   name: string;
//   quantity: number;
//   price: number;
// }

// interface Customer {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
// }

// interface Order {
//   _id: string;
//   products: Product[];
//   totalPrice: number;
//   customer: Customer;
//   paymentStatus: string;
//   deliveryStatus?: string;
//   createdAt: string;
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [filter, setFilter] = useState<string>("all");
//   const [loading, setLoading] = useState<boolean>(true);

//   const fetchOrders = async () => {
//     setLoading(true);
//     const res = await fetch("/api/orders/all");
//     const data = await res.json();
//     if (data.success) setOrders(data.orders || []);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this order?")) return;
//     const res = await fetch(`/api/orders/${id}`, { method: "DELETE" });
//     const data = await res.json();
//     if (data.success) {
//       toast.success("Order deleted!");
//       fetchOrders();
//     } else {
//       toast.error("Failed to delete order");
//     }
//   };

//   const handleMarkDelivered = async (id: string) => {
//     const res = await fetch(`/api/orders/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ deliveryStatus: "delivered" }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       toast.success("Order marked as delivered!");
//       fetchOrders();
//     } else {
//       toast.error("Failed to update status");
//     }
//   };

//   const handleTogglePayment = async (id: string, currentStatus: string) => {
//     const newStatus = currentStatus === "paid" ? "unpaid" : "paid";
//     const res = await fetch(`/api/orders/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ paymentStatus: newStatus }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       toast.success(`Order marked as ${newStatus}!`);
//       fetchOrders();
//     } else {
//       toast.error("Failed to update payment status");
//     }
//   };

//   const filteredOrders =
//     filter === "all"
//       ? orders
//       : orders.filter(
//           (o) =>
//             o.paymentStatus === filter || o.deliveryStatus === filter
//         );

//   if (loading) return <p className="p-6">Loading orders...</p>;
//   if (orders.length === 0) return <p className="p-6">No orders found.</p>;

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">All Orders</h1>

//       <div className="mb-4 flex gap-3">
//         <select
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//           className="p-2 border rounded"
//         >
//           <option value="all">All</option>
//           <option value="unpaid">Unpaid</option>
//           <option value="paid">Paid</option>
//           <option value="pending">Pending Delivery</option>
//           <option value="delivered">Delivered</option>
//         </select>
//         <Button onClick={fetchOrders}>Refresh</Button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border px-2 py-1">Order ID</th>
//               <th className="border px-2 py-1">Customer</th>
//               <th className="border px-2 py-1">Products</th>
//               <th className="border px-2 py-1">Total</th>
//               <th className="border px-2 py-1">Payment</th>
//               <th className="border px-2 py-1">Delivery</th>
//               <th className="border px-2 py-1">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredOrders.map((order) => (
//               <tr key={order._id} className="hover:bg-gray-50">
//                 <td className="border px-2 py-1">{order._id}</td>
//                 <td className="border px-2 py-1">
//                   {order.customer.name} <br />
//                   {order.customer.phone} <br />
//                   {order.customer.email} <br />
//                   {order.customer.address}
//                 </td>
//                 <td className="border px-2 py-1">
//                   {order.products.map((p) => (
//                     <div key={p._id}>
//                       {p.name} x {p.quantity} - ₹{p.price}
//                     </div>
//                   ))}
//                 </td>
//                 <td className="border px-2 py-1">₹{order.totalPrice}</td>
//                 <td className={`border px-2 py-1 font-semibold ${order.paymentStatus === "paid" ? "text-green-600" : "text-red-600"}`}>
//                   {order.paymentStatus}
//                 </td>
//                 <td className="border px-2 py-1">{order.deliveryStatus || "pending"}</td>
//                 <td className="border px-2 py-1 flex flex-col gap-1">
//                   <Button onClick={() => handleMarkDelivered(order._id)} size="sm">
//                     Mark Delivered
//                   </Button>
//                   <Button onClick={() => handleTogglePayment(order._id, order.paymentStatus)} size="sm">
//                     {order.paymentStatus === "paid" ? "Mark Unpaid" : "Mark Paid"}
//                   </Button>
//                   <Button onClick={() => handleDelete(order._id)} size="sm" variant="destructive">
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }









// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { toast } from "react-hot-toast";

// interface Product {
//   _id: string;
//   name: string;
//   quantity: number;
//   price: number;
// }

// interface Customer {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
// }

// interface Order {
//   _id: string;
//   products: Product[];
//   totalPrice: number;
//   customer: Customer;
//   paymentStatus: string;
//   deliveryStatus?: string;
//   createdAt: string;
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [filter, setFilter] = useState<string>("all");
//   const [loading, setLoading] = useState<boolean>(true);

//   // Fetch all orders
//   const fetchOrders = async () => {
//     setLoading(true);
//     const res = await fetch("/api/orders/all");
//     const data = await res.json();
//     if (data.success) setOrders(data.orders || []);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   // Delete order
//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this order?")) return;
//     const res = await fetch(`/api/orders/${id}`, { method: "DELETE" });
//     const data = await res.json();
//     if (data.success) {
//       toast.success("Order deleted!");
//       fetchOrders();
//     } else {
//       toast.error("Failed to delete order");
//     }
//   };

//   // Toggle delivery status
//   const handleToggleDelivery = async (id: string, currentStatus?: string) => {
//     const newStatus = currentStatus === "delivered" ? "pending" : "delivered";
//     const res = await fetch(`/api/orders/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ deliveryStatus: newStatus }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       toast.success(`Order marked as ${newStatus}!`);
//       fetchOrders();
//     } else {
//       toast.error("Failed to update delivery status");
//     }
//   };

//   // Toggle payment status
//   const handleTogglePayment = async (id: string, currentStatus: string) => {
//     const newStatus = currentStatus === "paid" ? "unpaid" : "paid";
//     const res = await fetch(`/api/orders/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ paymentStatus: newStatus }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       toast.success(`Order marked as ${newStatus}!`);
//       fetchOrders();
//     } else {
//       toast.error("Failed to update payment status");
//     }
//   };

//   // Filter orders
//   const filteredOrders =
//     filter === "all"
//       ? orders
//       : orders.filter(
//           (o) =>
//             o.paymentStatus === filter || o.deliveryStatus === filter
//         );

//   if (loading) return <p className="p-6">Loading orders...</p>;
//   if (orders.length === 0) return <p className="p-6">No orders found.</p>;

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">All Orders</h1>

//       {/* Filter */}
//       <div className="mb-4 flex gap-3">
//         <select
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//           className="p-2 border rounded"
//         >
//           <option value="all">All</option>
//           <option value="unpaid">Unpaid</option>
//           <option value="paid">Paid</option>
//           <option value="pending">Pending Delivery</option>
//           <option value="delivered">Delivered</option>
//         </select>
//         <Button onClick={fetchOrders}>Refresh</Button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border px-2 py-1">Order ID</th>
//               <th className="border px-2 py-1">Customer</th>
//               <th className="border px-2 py-1">Products</th>
//               <th className="border px-2 py-1">Total</th>
//               <th className="border px-2 py-1">Payment</th>
//               <th className="border px-2 py-1">Delivery</th>
//               <th className="border px-2 py-1">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredOrders.map((order) => (
//               <tr key={order._id} className="hover:bg-gray-50">
//                 <td className="border px-2 py-1">{order._id}</td>
//                 <td className="border px-2 py-1">
//                   {order.customer.name} <br />
//                   {order.customer.phone} <br />
//                   {order.customer.email} <br />
//                   {order.customer.address}
//                 </td>
//                 <td className="border px-2 py-1">
//                   {order.products.map((p) => (
//                     <div key={p._id}>
//                       {p.name} x {p.quantity} - ₹{p.price}
//                     </div>
//                   ))}
//                 </td>
//                 <td className="border px-2 py-1">₹{order.totalPrice}</td>
                
//                 {/* Payment Status */}
//                 <td className={`border px-2 py-1 font-semibold ${order.paymentStatus === "paid" ? "text-green-600" : "text-red-600"}`}>
//                   {order.paymentStatus}
//                 </td>

//                 {/* Delivery Status */}
//                 <td className={`border px-2 py-1 font-semibold ${order.deliveryStatus === "delivered" ? "text-green-600" : "text-yellow-600"}`}>
//                   {order.deliveryStatus || "pending"}
//                 </td>

//                 {/* Actions */}
//                 <td className="border px-2 py-1 flex flex-col gap-1">
//                   <Button
//                     onClick={() => handleToggleDelivery(order._id, order.deliveryStatus)}
//                     size="sm"
//                   >
//                     {order.deliveryStatus === "delivered" ? "Mark Pending" : "Mark Delivered"}
//                   </Button>

//                   <Button
//                     onClick={() => handleTogglePayment(order._id, order.paymentStatus)}
//                     size="sm"
//                   >
//                     {order.paymentStatus === "paid" ? "Mark Unpaid" : "Mark Paid"}
//                   </Button>

//                   <Button
//                     onClick={() => handleDelete(order._id)}
//                     size="sm"
//                     variant="destructive"
//                   >
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }












// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { toast } from "react-hot-toast";

// interface Product {
//   _id: string;
//   name: string;
//   quantity: number;
//   price: number;
// }

// interface Customer {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
// }

// interface Order {
//   _id: string;
//   products: Product[];
//   totalPrice: number;
//   customer: Customer;
//   paymentStatus: string;
//   deliveryStatus?: string;
//   createdAt: string;
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [filter, setFilter] = useState<string>("all");
//   const [loading, setLoading] = useState<boolean>(true);

//   const fetchOrders = async () => {
//     setLoading(true);
//     const res = await fetch("/api/orders/all");
//     const data = await res.json();
//     if (data.success) setOrders(data.orders || []);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this order?")) return;
//     const res = await fetch(`/api/orders/${id}`, { method: "DELETE" });
//     const data = await res.json();
//     if (data.success) {
//       toast.success("Order deleted!");
//       fetchOrders();
//     } else {
//       toast.error("Failed to delete order");
//     }
//   };

//   const handleToggleDelivery = async (id: string, currentStatus?: string) => {
//     const newStatus = currentStatus === "delivered" ? "pending" : "delivered";
//     const res = await fetch(`/api/orders/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ deliveryStatus: newStatus }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       toast.success(`Order marked as ${newStatus}!`);
//       fetchOrders();
//     } else {
//       toast.error("Failed to update delivery status");
//     }
//   };

//   const handleTogglePayment = async (id: string, currentStatus: string) => {
//     const newStatus = currentStatus === "paid" ? "unpaid" : "paid";
//     const res = await fetch(`/api/orders/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ paymentStatus: newStatus }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       toast.success(`Order marked as ${newStatus}!`);
//       fetchOrders();
//     } else {
//       toast.error("Failed to update payment status");
//     }
//   };

//   const filteredOrders =
//     filter === "all"
//       ? orders
//       : orders.filter(
//           (o) =>
//             o.paymentStatus === filter || o.deliveryStatus === filter
//         );

//   if (loading) return <p className="p-6 text-center text-lg">Loading orders...</p>;
//   if (orders.length === 0) return <p className="p-6 text-center text-lg">No orders found.</p>;

//   return (
//     <div className="p-4 md:p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-indigo-700 text-center md:text-left">📦 Orders Dashboard</h1>

//       <div className="mb-6 flex flex-col md:flex-row gap-4 md:gap-3 items-center justify-between">
//         <select
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//           className="p-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500"
//         >
//           <option value="all">All Orders</option>
//           <option value="unpaid">Unpaid</option>
//           <option value="paid">Paid</option>
//           <option value="pending">Pending Delivery</option>
//           <option value="delivered">Delivered</option>
//         </select>
//         <Button className="bg-indigo-600 hover:bg-indigo-700" onClick={fetchOrders}>
//           Refresh
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {filteredOrders.map((order) => (
//           <div
//             key={order._id}
//             className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
//           >
//             <div>
//               <h2 className="font-semibold text-lg text-gray-800 mb-2">Order ID: {order._id}</h2>
//               <p className="text-gray-600 mb-2">
//                 <span className="font-medium">Customer:</span> {order.customer.name}
//                 <br />
//                 <span className="font-medium">Phone:</span> {order.customer.phone}
//                 <br />
//                 <span className="font-medium">Email:</span> {order.customer.email}
//                 <br />
//                 <span className="font-medium">Address:</span> {order.customer.address}
//               </p>

//               <div className="mb-2">
//                 <span className="font-medium text-gray-700">Products:</span>
//                 {order.products.map((p) => (
//                   <p key={p._id} className="text-gray-600 text-sm ml-2">
//                     {p.name} x {p.quantity} - ₹{p.price}
//                   </p>
//                 ))}
//               </div>

//               <p className="font-semibold text-gray-800 mb-2">Total: ₹{order.totalPrice}</p>

//               <div className="flex flex-wrap gap-2 mb-2">
//                 <span
//                   className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                     order.paymentStatus === "paid" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//                   }`}
//                 >
//                   {order.paymentStatus}
//                 </span>
//                 <span
//                   className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                     order.deliveryStatus === "delivered"
//                       ? "bg-green-100 text-green-800"
//                       : "bg-yellow-100 text-yellow-800"
//                   }`}
//                 >
//                   {order.deliveryStatus || "pending"}
//                 </span>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2 mt-3">
//               <Button
//                 size="sm"
//                 className="bg-indigo-500 hover:bg-indigo-600 text-white"
//                 onClick={() => handleToggleDelivery(order._id, order.deliveryStatus)}
//               >
//                 {order.deliveryStatus === "delivered" ? "Mark Pending" : "Mark Delivered"}
//               </Button>
//               <Button
//                 size="sm"
//                 className="bg-green-500 hover:bg-green-600 text-white"
//                 onClick={() => handleTogglePayment(order._id, order.paymentStatus)}
//               >
//                 {order.paymentStatus === "paid" ? "Mark Unpaid" : "Mark Paid"}
//               </Button>
//               <Button
//                 size="sm"
//                 variant="destructive"
//                 onClick={() => handleDelete(order._id)}
//               >
//                 Delete
//               </Button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }









// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { toast } from "react-hot-toast";

// interface Product {
//   _id: string;
//   name: string;
//   quantity: number;
//   price: number;
// }

// interface Customer {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
// }

// interface Order {
//   _id: string;
//   products: Product[];
//   totalPrice: number;
//   customer: Customer;
//   paymentStatus: string;
//   deliveryStatus?: string;
//   createdAt: string;
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [filter, setFilter] = useState<string>("all");
//   const [loading, setLoading] = useState<boolean>(true);

//   const fetchOrders = async () => {
//     setLoading(true);
//     const res = await fetch("/api/orders/all");
//     const data = await res.json();
//     if (data.success) setOrders(data.orders || []);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this order?")) return;
//     const res = await fetch(`/api/orders/${id}`, { method: "DELETE" });
//     const data = await res.json();
//     if (data.success) {
//       toast.success("Order deleted!");
//       fetchOrders();
//     } else {
//       toast.error("Failed to delete order");
//     }
//   };

//   const handleToggleDelivery = async (id: string, currentStatus?: string) => {
//     const newStatus = currentStatus === "delivered" ? "pending" : "delivered";
//     const res = await fetch(`/api/orders/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ deliveryStatus: newStatus }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       toast.success(`Order marked as ${newStatus}!`);
//       fetchOrders();
//     } else {
//       toast.error("Failed to update delivery status");
//     }
//   };

//   const handleTogglePayment = async (id: string, currentStatus: string) => {
//     const newStatus = currentStatus === "paid" ? "unpaid" : "paid";
//     const res = await fetch(`/api/orders/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ paymentStatus: newStatus }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       toast.success(`Order marked as ${newStatus}!`);
//       fetchOrders();
//     } else {
//       toast.error("Failed to update payment status");
//     }
//   };

//   const formatOrderTime = (isoDate: string) => {
//     const date = new Date(isoDate);
//     return new Intl.DateTimeFormat("en-GB", {
//       weekday: "short",
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "numeric",
//       minute: "2-digit",
//       hour12: true,
//     }).format(date);
//   };

//   const filteredOrders =
//     filter === "all"
//       ? orders
//       : orders.filter(
//           (o) =>
//             o.paymentStatus === filter || o.deliveryStatus === filter
//         );

//   if (loading) return <p className="p-6 text-center text-lg">Loading orders...</p>;
//   if (orders.length === 0) return <p className="p-6 text-center text-lg">No orders found.</p>;

//   return (
//     <div className="p-4 md:p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-indigo-700 text-center md:text-left">📦 Orders Dashboard</h1>

//       <div className="mb-6 flex flex-col md:flex-row gap-4 md:gap-3 items-center justify-between">
//         <select
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//           className="p-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500"
//         >
//           <option value="all">All Orders</option>
//           <option value="unpaid">Unpaid</option>
//           <option value="paid">Paid</option>
//           <option value="pending">Pending Delivery</option>
//           <option value="delivered">Delivered</option>
//         </select>
//         <Button className="bg-indigo-600 hover:bg-indigo-700" onClick={fetchOrders}>
//           Refresh
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {filteredOrders.map((order) => (
//           <div
//             key={order._id}
//             className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
//           >
//             <div>
//               <h2 className="font-semibold text-lg text-gray-800 mb-1">Order ID: {order._id}</h2>
//               <p className="text-gray-500 text-sm mb-2">{formatOrderTime(order.createdAt)}</p>

//               <p className="text-gray-600 mb-2">
//                 <span className="font-medium">Customer:</span> {order.customer.name}
//                 <br />
//                 <span className="font-medium">Phone:</span> {order.customer.phone}
//                 <br />
//                 <span className="font-medium">Email:</span> {order.customer.email}
//                 <br />
//                 <span className="font-medium">Address:</span> {order.customer.address}
//               </p>

//               <div className="mb-2">
//                 <span className="font-medium text-gray-700">Products:</span>
//                 {order.products.map((p) => (
//                   <p key={p._id} className="text-gray-600 text-sm ml-2">
//                     {p.name} x {p.quantity} - ₹{p.price}
//                   </p>
//                 ))}
//               </div>

//               <p className="font-semibold text-gray-800 mb-2">Total: ₹{order.totalPrice}</p>

//               <div className="flex flex-wrap gap-2 mb-2">
//                 <span
//                   className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                     order.paymentStatus === "paid" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//                   }`}
//                 >
//                   {order.paymentStatus}
//                 </span>
//                 <span
//                   className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                     order.deliveryStatus === "delivered"
//                       ? "bg-green-100 text-green-800"
//                       : "bg-yellow-100 text-yellow-800"
//                   }`}
//                 >
//                   {order.deliveryStatus || "pending"}
//                 </span>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2 mt-3">
//               <Button
//                 size="sm"
//                 className="bg-indigo-500 hover:bg-indigo-600 text-white"
//                 onClick={() => handleToggleDelivery(order._id, order.deliveryStatus)}
//               >
//                 {order.deliveryStatus === "delivered" ? "Mark Pending" : "Mark Delivered"}
//               </Button>
//               <Button
//                 size="sm"
//                 className="bg-green-500 hover:bg-green-600 text-white"
//                 onClick={() => handleTogglePayment(order._id, order.paymentStatus)}
//               >
//                 {order.paymentStatus === "paid" ? "Mark Unpaid" : "Mark Paid"}
//               </Button>
//               <Button
//                 size="sm"
//                 variant="destructive"
//                 onClick={() => handleDelete(order._id)}
//               >
//                 Delete
//               </Button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }








// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { toast } from "react-hot-toast";

// interface Product {
//   _id: string;
//   name: string;
//   quantity: number;
//   price: number;
// }

// interface Customer {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
// }

// interface Order {
//   _id: string;
//   products: Product[];
//   totalPrice: number;
//   customer: Customer;
//   paymentStatus: string;
//   deliveryStatus?: string;
//   createdAt: string;
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [filter, setFilter] = useState<string>("all");
//   const [loading, setLoading] = useState<boolean>(true);

//   // Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const ordersPerPage = 6;

//   const fetchOrders = async () => {
//     setLoading(true);
//     const res = await fetch("/api/orders/all");
//     const data = await res.json();
//     if (data.success) setOrders(data.orders || []);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this order?")) return;
//     const res = await fetch(`/api/orders/${id}`, { method: "DELETE" });
//     const data = await res.json();
//     if (data.success) {
//       toast.success("Order deleted!");
//       fetchOrders();
//     } else {
//       toast.error("Failed to delete order");
//     }
//   };

//   const handleToggleDelivery = async (id: string, currentStatus?: string) => {
//     const newStatus = currentStatus === "delivered" ? "pending" : "delivered";
//     const res = await fetch(`/api/orders/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ deliveryStatus: newStatus }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       toast.success(`Order marked as ${newStatus}!`);
//       fetchOrders();
//     } else {
//       toast.error("Failed to update delivery status");
//     }
//   };

//   const handleTogglePayment = async (id: string, currentStatus: string) => {
//     const newStatus = currentStatus === "paid" ? "unpaid" : "paid";
//     const res = await fetch(`/api/orders/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ paymentStatus: newStatus }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       toast.success(`Order marked as ${newStatus}!`);
//       fetchOrders();
//     } else {
//       toast.error("Failed to update payment status");
//     }
//   };

//   const formatOrderTime = (isoDate: string) => {
//     const date = new Date(isoDate);
//     return new Intl.DateTimeFormat("en-GB", {
//       weekday: "short",
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "numeric",
//       minute: "2-digit",
//       hour12: true,
//     }).format(date);
//   };

//   // Filter orders by payment, delivery, or date
//   const filteredOrders = orders.filter((o) => {
//     if (filter === "all") return true;
//     if (filter === "today") {
//       const today = new Date();
//       const orderDate = new Date(o.createdAt);
//       return (
//         today.getFullYear() === orderDate.getFullYear() &&
//         today.getMonth() === orderDate.getMonth() &&
//         today.getDate() === orderDate.getDate()
//       );
//     }
//     if (filter === "yesterday") {
//       const yesterday = new Date();
//       yesterday.setDate(yesterday.getDate() - 1);
//       const orderDate = new Date(o.createdAt);
//       return (
//         yesterday.getFullYear() === orderDate.getFullYear() &&
//         yesterday.getMonth() === orderDate.getMonth() &&
//         yesterday.getDate() === orderDate.getDate()
//       );
//     }
//     return o.paymentStatus === filter || o.deliveryStatus === filter;
//   });

//   // Pagination logic
//   const indexOfLastOrder = currentPage * ordersPerPage;
//   const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
//   const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
//   const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

//   if (loading) return <p className="p-6 text-center text-lg">Loading orders...</p>;
//   if (orders.length === 0) return <p className="p-6 text-center text-lg">No orders found.</p>;

//   return (
//     <div className="p-4 md:p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-indigo-700 text-center md:text-left">📦 Orders Dashboard</h1>

//       {/* Filter */}
//       <div className="mb-6 flex flex-wrap gap-3 justify-center md:justify-start">
//         {["all", "paid", "unpaid", "pending", "delivered", "today", "yesterday"].map((f) => (
//           <button
//             key={f}
//             onClick={() => { setFilter(f); setCurrentPage(1); }}
//             className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-colors duration-200
//               ${filter === f ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-indigo-400 hover:text-white"}`}
//           >
//             {f.replace("-", " ")}
//           </button>
//         ))}
//         <Button className="bg-indigo-600 hover:bg-indigo-700 ml-2" onClick={fetchOrders}>
//           Refresh
//         </Button>
//       </div>

//       {/* Orders Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {currentOrders.map((order) => (
//           <div
//             key={order._id}
//             className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
//           >
//             <div>
//               <h2 className="font-semibold text-lg text-gray-800 mb-1">Order ID: {order._id}</h2>
//               <p className="text-gray-500 text-sm mb-2">{formatOrderTime(order.createdAt)}</p>

//               <p className="text-gray-600 mb-2">
//                 <span className="font-medium">Customer:</span> {order.customer.name}
//                 <br />
//                 <span className="font-medium">Phone:</span> {order.customer.phone}
//                 <br />
//                 <span className="font-medium">Email:</span> {order.customer.email}
//                 <br />
//                 <span className="font-medium">Address:</span> {order.customer.address}
//               </p>

//               <div className="mb-2">
//                 <span className="font-medium text-gray-700">Products:</span>
//                 {order.products.map((p) => (
//                   <p key={p._id} className="text-gray-600 text-sm ml-2">
//                     {p.name} x {p.quantity} - ₹{p.price}
//                   </p>
//                 ))}
//               </div>

//               <p className="font-semibold text-gray-800 mb-2">Total: ₹{order.totalPrice}</p>

//               <div className="flex flex-wrap gap-2 mb-2">
//                 <span
//                   className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                     order.paymentStatus === "paid" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//                   }`}
//                 >
//                   {order.paymentStatus}
//                 </span>
//                 <span
//                   className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                     order.deliveryStatus === "delivered"
//                       ? "bg-green-100 text-green-800"
//                       : "bg-yellow-100 text-yellow-800"
//                   }`}
//                 >
//                   {order.deliveryStatus || "pending"}
//                 </span>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2 mt-3">
//               <Button
//                 size="sm"
//                 className="bg-indigo-500 hover:bg-indigo-600 text-white"
//                 onClick={() => handleToggleDelivery(order._id, order.deliveryStatus)}
//               >
//                 {order.deliveryStatus === "delivered" ? "Mark Pending" : "Mark Delivered"}
//               </Button>
//               <Button
//                 size="sm"
//                 className="bg-green-500 hover:bg-green-600 text-white"
//                 onClick={() => handleTogglePayment(order._id, order.paymentStatus)}
//               >
//                 {order.paymentStatus === "paid" ? "Mark Unpaid" : "Mark Paid"}
//               </Button>
//               <Button
//                 size="sm"
//                 variant="destructive"
//                 onClick={() => handleDelete(order._id)}
//               >
//                 Delete
//               </Button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-center mt-6 gap-2 flex-wrap">
//           <Button
//             size="sm"
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage((prev) => prev - 1)}
//             className="bg-gray-200 hover:bg-gray-300 text-gray-800"
//           >
//             Previous
//           </Button>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <Button
//               key={i}
//               size="sm"
//               className={`px-3 py-1 rounded-full ${currentPage === i + 1 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-indigo-400 hover:text-white"}`}
//               onClick={() => setCurrentPage(i + 1)}
//             >
//               {i + 1}
//             </Button>
//           ))}
//           <Button
//             size="sm"
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage((prev) => prev + 1)}
//             className="bg-gray-200 hover:bg-gray-300 text-gray-800"
//           >
//             Next
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }















// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { toast } from "react-hot-toast";
// import { format } from "date-fns";

// interface Product {
//   _id: string;
//   name: string;
//   quantity: number;
//   price: number;
// }

// interface Customer {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
// }

// interface Order {
//   _id: string;
//   products: Product[];
//   totalPrice: number;
//   customer: Customer;
//   paymentStatus: string;
//   deliveryStatus?: string;
//   createdAt: string;
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [filter, setFilter] = useState<string>("all");
//   const [loading, setLoading] = useState<boolean>(true);

//   // Pagination
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const itemsPerPage = 5;

//   const fetchOrders = async () => {
//     setLoading(true);
//     const res = await fetch("/api/orders/all");
//     const data = await res.json();
//     if (data.success) setOrders(data.orders || []);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this order?")) return;
//     const res = await fetch(`/api/orders/${id}`, { method: "DELETE" });
//     const data = await res.json();
//     if (data.success) {
//       toast.success("Order deleted!");
//       fetchOrders();
//     } else {
//       toast.error("Failed to delete order");
//     }
//   };

//   const handleToggleDelivery = async (id: string, currentStatus: string) => {
//     const newStatus = currentStatus === "delivered" ? "pending" : "delivered";
//     const res = await fetch(`/api/orders/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ deliveryStatus: newStatus }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       toast.success(`Delivery status updated to ${newStatus}`);
//       fetchOrders();
//     } else {
//       toast.error("Failed to update delivery status");
//     }
//   };

//   const handleTogglePayment = async (id: string, currentStatus: string) => {
//     const newStatus = currentStatus === "paid" ? "unpaid" : "paid";
//     const res = await fetch(`/api/orders/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ paymentStatus: newStatus }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       toast.success(`Payment status updated to ${newStatus}`);
//       fetchOrders();
//     } else {
//       toast.error("Failed to update payment status");
//     }
//   };

//   // Filter orders
//   const filteredOrders =
//     filter === "all"
//       ? orders
//       : orders.filter((o) => {
//           if (filter === "today") {
//             const today = new Date();
//             const orderDate = new Date(o.createdAt);
//             return (
//               today.toDateString() === orderDate.toDateString()
//             );
//           }
//           if (filter === "yesterday") {
//             const yesterday = new Date();
//             yesterday.setDate(yesterday.getDate() - 1);
//             const orderDate = new Date(o.createdAt);
//             return (
//               yesterday.toDateString() === orderDate.toDateString()
//             );
//           }
//           return o.paymentStatus === filter || o.deliveryStatus === filter;
//         });

//   // Pagination logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

//   if (loading) return <p className="p-6 text-center">Loading orders...</p>;
//   if (orders.length === 0) return <p className="p-6 text-center">No orders found.</p>;

//   return (
//     <div className="pt-24 p-4 md:p-6 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-indigo-600 text-center md:text-left">
//         📦 Orders Dashboard
//       </h1>

//       {/* Filter */}
//       <div className="mb-4 flex flex-wrap gap-3 items-center">
//         <select
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//           className="p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
//         >
//           <option value="all">All</option>
//           <option value="unpaid">Unpaid</option>
//           <option value="paid">Paid</option>
//           <option value="pending">Pending Delivery</option>
//           <option value="delivered">Delivered</option>
//           <option value="today">Today</option>
//           <option value="yesterday">Yesterday</option>
//         </select>
//         <Button onClick={fetchOrders} className="bg-indigo-600 hover:bg-indigo-700 text-white">
//           Refresh
//         </Button>
//       </div>

//       {/* Orders Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-300 rounded-lg">
//           <thead>
//             <tr className="bg-indigo-100 text-gray-700">
//               <th className="border px-3 py-2 text-left">Order ID</th>
//               <th className="border px-3 py-2 text-left">Customer</th>
//               <th className="border px-3 py-2 text-left">Products</th>
//               <th className="border px-3 py-2 text-left">Total</th>
//               <th className="border px-3 py-2 text-left">Payment</th>
//               <th className="border px-3 py-2 text-left">Delivery</th>
//               <th className="border px-3 py-2 text-left">Time</th>
//               <th className="border px-3 py-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentOrders.map((order) => (
//               <tr key={order._id} className="hover:bg-gray-50">
//                 <td className="border px-3 py-2 font-mono text-sm">{order._id}</td>
//                 <td className="border px-3 py-2 text-sm">
//                   {order.customer.name} <br />
//                   {order.customer.phone} <br />
//                   {order.customer.email} <br />
//                   {order.customer.address}
//                 </td>
//                 <td className="border px-3 py-2 text-sm">
//                   {order.products.map((p) => (
//                     <div key={p._id}>
//                       {p.name} x {p.quantity} - ₹{p.price}
//                     </div>
//                   ))}
//                 </td>
//                 <td className="border px-3 py-2 font-semibold text-indigo-600">₹{order.totalPrice}</td>
//                 <td
//                   className={`border px-3 py-2 font-semibold ${
//                     order.paymentStatus === "paid" ? "text-green-600" : "text-red-600"
//                   }`}
//                 >
//                   {order.paymentStatus}
//                 </td>
//                 <td className="border px-3 py-2 font-semibold">
//                   {order.deliveryStatus || "pending"}
//                 </td>
//                 <td className="border px-3 py-2 text-sm">
//                   {format(new Date(order.createdAt), "EEE, dd MMM yyyy 'at' h:mm a")}
//                 </td>
//                 <td className="border px-3 py-2 flex flex-col gap-1">
//                   <Button
//                     onClick={() => handleToggleDelivery(order._id, order.deliveryStatus || "pending")}
//                     size="sm"
//                     className="bg-yellow-500 hover:bg-yellow-600 text-white"
//                   >
//                     {order.deliveryStatus === "delivered" ? "Mark Pending" : "Mark Delivered"}
//                   </Button>
//                   <Button
//                     onClick={() => handleTogglePayment(order._id, order.paymentStatus)}
//                     size="sm"
//                     className={`${
//                       order.paymentStatus === "paid" ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
//                     } text-white`}
//                   >
//                     {order.paymentStatus === "paid" ? "Mark Unpaid" : "Mark Paid"}
//                   </Button>
//                   <Button
//                     onClick={() => handleDelete(order._id)}
//                     size="sm"
//                     variant="destructive"
//                   >
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="mt-4 flex justify-center gap-2 flex-wrap">
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//           <button
//             key={page}
//             onClick={() => setCurrentPage(page)}
//             className={`px-3 py-1 rounded ${
//               currentPage === page
//                 ? "bg-indigo-600 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-indigo-400 hover:text-white"
//             }`}
//           >
//             {page}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }














// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { toast } from "react-hot-toast";
// import { motion } from "framer-motion";

// interface Product {
//   _id: string;
//   name: string;
//   quantity: number;
//   price: number;
// }

// interface Customer {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
// }

// interface Order {
//   _id: string;
//   products: Product[];
//   totalPrice: number;
//   customer: Customer;
//   paymentStatus: string;
//   deliveryStatus?: string;
//   createdAt: string;
// }

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [filter, setFilter] = useState<string>("all");
//   const [loading, setLoading] = useState<boolean>(true);

//   const [currentPage, setCurrentPage] = useState(1);
//   const ordersPerPage = 6;

//   const fetchOrders = async () => {
//     setLoading(true);
//     const res = await fetch("/api/orders/all");
//     const data = await res.json();
//     if (data.success) setOrders(data.orders || []);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this order?")) return;
//     const res = await fetch(`/api/orders/${id}`, { method: "DELETE" });
//     const data = await res.json();
//     if (data.success) {
//       toast.success("Order deleted!");
//       fetchOrders();
//     } else toast.error("Failed to delete order");
//   };

//   const handleToggleDelivery = async (id: string, currentStatus?: string) => {
//     const newStatus = currentStatus === "delivered" ? "pending" : "delivered";
//     const res = await fetch(`/api/orders/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ deliveryStatus: newStatus }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       toast.success(`Order marked as ${newStatus}!`);
//       fetchOrders();
//     } else toast.error("Failed to update delivery status");
//   };

//   const handleTogglePayment = async (id: string, currentStatus: string) => {
//     const newStatus = currentStatus === "paid" ? "unpaid" : "paid";
//     const res = await fetch(`/api/orders/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ paymentStatus: newStatus }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       toast.success(`Order marked as ${newStatus}!`);
//       fetchOrders();
//     } else toast.error("Failed to update payment status");
//   };

//   const formatOrderTime = (isoDate: string) => {
//     const date = new Date(isoDate);
//     return new Intl.DateTimeFormat("en-GB", {
//       weekday: "short",
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "numeric",
//       minute: "2-digit",
//       hour12: true,
//     }).format(date);
//   };

//   const filteredOrders = orders.filter((o) => {
//     if (filter === "all") return true;
//     if (filter === "today") {
//       const today = new Date();
//       const orderDate = new Date(o.createdAt);
//       return (
//         today.getFullYear() === orderDate.getFullYear() &&
//         today.getMonth() === orderDate.getMonth() &&
//         today.getDate() === orderDate.getDate()
//       );
//     }
//     if (filter === "yesterday") {
//       const yesterday = new Date();
//       yesterday.setDate(yesterday.getDate() - 1);
//       const orderDate = new Date(o.createdAt);
//       return (
//         yesterday.getFullYear() === orderDate.getFullYear() &&
//         yesterday.getMonth() === orderDate.getMonth() &&
//         yesterday.getDate() === orderDate.getDate()
//       );
//     }
//     return o.paymentStatus === filter || o.deliveryStatus === filter;
//   });

//   const indexOfLastOrder = currentPage * ordersPerPage;
//   const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
//   const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
//   const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

//   if (loading) return <p className="p-6 text-center text-lg">Loading orders...</p>;
//   if (orders.length === 0) return <p className="p-6 text-center text-lg">No orders found.</p>;

//   return (
//     <div className="p-4 md:p-6 max-w-7xl mx-auto mt-24">
//       {/* Heading */}
//       <h1 className="text-3xl font-bold mb-6 text-indigo-700 text-center md:text-left">
//         📦 Orders Dashboard
//       </h1>

//       {/* Filters */}
//       <div className="mb-6 flex flex-wrap gap-3 justify-center md:justify-start">
//         {["all", "paid", "unpaid", "pending", "delivered", "today", "yesterday"].map((f) => (
//           <motion.button
//             key={f}
//             onClick={() => { setFilter(f); setCurrentPage(1); }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-colors duration-200
//               ${filter === f ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-indigo-400 hover:text-white"}`}
//           >
//             {f.replace("-", " ")}
//           </motion.button>
//         ))}
//         <Button className="bg-indigo-600 hover:bg-indigo-700 ml-2" onClick={fetchOrders}>
//           Refresh
//         </Button>
//       </div>

//       {/* Orders Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {currentOrders.map((order) => (
//           <motion.div
//             key={order._id}
//             className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0 }}
//           >
//             <div>
//               <h2 className="font-semibold text-lg text-gray-800 mb-1">Order ID: {order._id}</h2>
//               <p className="text-gray-500 text-sm mb-2">{formatOrderTime(order.createdAt)}</p>

//               <p className="text-gray-600 mb-2">
//                 <span className="font-medium">Customer:</span> {order.customer.name}
//                 <br />
//                 <span className="font-medium">Phone:</span> {order.customer.phone}
//                 <br />
//                 <span className="font-medium">Email:</span> {order.customer.email}
//                 <br />
//                 <span className="font-medium">Address:</span> {order.customer.address}
//               </p>

//               <div className="mb-2">
//                 <span className="font-medium text-gray-700">Products:</span>
//                 {order.products.map((p) => (
//                   <p key={p._id} className="text-gray-600 text-sm ml-2">
//                     {p.name} x {p.quantity} - ₹{p.price}
//                   </p>
//                 ))}
//               </div>

//               <p className="font-semibold text-gray-800 mb-2">Total: ₹{order.totalPrice}</p>

//               <div className="flex flex-wrap gap-2 mb-2">
//                 <span
//                   className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                     order.paymentStatus === "paid" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//                   }`}
//                 >
//                   {order.paymentStatus}
//                 </span>
//                 <span
//                   className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                     order.deliveryStatus === "delivered" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
//                   }`}
//                 >
//                   {order.deliveryStatus || "pending"}
//                 </span>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2 mt-3">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded"
//                 onClick={() => handleToggleDelivery(order._id, order.deliveryStatus)}
//               >
//                 {order.deliveryStatus === "delivered" ? "Mark Pending" : "Mark Delivered"}
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
//                 onClick={() => handleTogglePayment(order._id, order.paymentStatus)}
//               >
//                 {order.paymentStatus === "paid" ? "Mark Unpaid" : "Mark Paid"}
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
//                 onClick={() => handleDelete(order._id)}
//               >
//                 Delete
//               </motion.button>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-center mt-6 gap-2 flex-wrap">
//           <Button
//             size="sm"
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage((prev) => prev - 1)}
//             className="bg-gray-200 hover:bg-gray-300 text-gray-800"
//           >
//             Previous
//           </Button>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <Button
//               key={i}
//               size="sm"
//               className={`px-3 py-1 rounded-full ${currentPage === i + 1 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-indigo-400 hover:text-white"}`}
//               onClick={() => setCurrentPage(i + 1)}
//             >
//               {i + 1}
//             </Button>
//           ))}
//           <Button
//             size="sm"
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage((prev) => prev + 1)}
//             className="bg-gray-200 hover:bg-gray-300 text-gray-800"
//           >
//             Next
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }










"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

interface Product {
  _id: string;
  name: string;
  quantity: number;
  price: number;
}

interface Customer {
  name: string;
  phone: string;
  email: string;
  address: string;
  pincode: string;   // ✅ added
  landmark: string;  // ✅ added
}

interface Order {
  _id: string;
  products: Product[];
  totalPrice: number;
  customer: Customer;
  paymentStatus: string;
  deliveryStatus?: string;
  createdAt: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true);

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 6;

  const fetchOrders = async () => {
    setLoading(true);
    const res = await fetch("/api/orders/all");
    const data = await res.json();
    if (data.success) setOrders(data.orders || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this order?")) return;
    const res = await fetch(`/api/orders/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (data.success) {
      toast.success("Order deleted!");
      fetchOrders();
    } else toast.error("Failed to delete order");
  };

  const handleToggleDelivery = async (id: string, currentStatus?: string) => {
    const newStatus = currentStatus === "delivered" ? "pending" : "delivered";
    const res = await fetch(`/api/orders/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ deliveryStatus: newStatus }),
    });
    const data = await res.json();
    if (data.success) {
      toast.success(`Order marked as ${newStatus}!`);
      fetchOrders();
    } else toast.error("Failed to update delivery status");
  };

  const handleTogglePayment = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "paid" ? "unpaid" : "paid";
    const res = await fetch(`/api/orders/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paymentStatus: newStatus }),
    });
    const data = await res.json();
    if (data.success) {
      toast.success(`Order marked as ${newStatus}!`);
      fetchOrders();
    } else toast.error("Failed to update payment status");
  };

  const formatOrderTime = (isoDate: string) => {
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  };

  const filteredOrders = orders.filter((o) => {
    if (filter === "all") return true;
    if (filter === "today") {
      const today = new Date();
      const orderDate = new Date(o.createdAt);
      return (
        today.getFullYear() === orderDate.getFullYear() &&
        today.getMonth() === orderDate.getMonth() &&
        today.getDate() === orderDate.getDate()
      );
    }
    if (filter === "yesterday") {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const orderDate = new Date(o.createdAt);
      return (
        yesterday.getFullYear() === orderDate.getFullYear() &&
        yesterday.getMonth() === orderDate.getMonth() &&
        yesterday.getDate() === orderDate.getDate()
      );
    }
    return o.paymentStatus === filter || o.deliveryStatus === filter;
  });

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  if (loading) return <p className="p-6 text-center text-lg">Loading orders...</p>;
  if (orders.length === 0) return <p className="p-6 text-center text-lg">No orders found.</p>;

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto mt-24">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-indigo-700 text-center md:text-left">
        📦 Orders Dashboard
      </h1>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-3 justify-center md:justify-start">
        {["all", "paid", "unpaid", "pending", "delivered", "today", "yesterday"].map((f) => (
          <motion.button
            key={f}
            onClick={() => { setFilter(f); setCurrentPage(1); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-colors duration-200
              ${filter === f ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-indigo-400 hover:text-white"}`}
          >
            {f.replace("-", " ")}
          </motion.button>
        ))}
        <Button className="bg-indigo-600 hover:bg-indigo-700 ml-2" onClick={fetchOrders}>
          Refresh
        </Button>
      </div>

      {/* Orders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentOrders.map((order) => (
          <motion.div
            key={order._id}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div>
              <h2 className="font-semibold text-lg text-gray-800 mb-1">Order ID: {order._id}</h2>
              <p className="text-gray-500 text-sm mb-2">{formatOrderTime(order.createdAt)}</p>

              <p className="text-gray-600 mb-2">
                <span className="font-medium">Customer:</span> {order.customer.name}
                <br />
                <span className="font-medium">Phone:</span> {order.customer.phone}
                <br />
                <span className="font-medium">Email:</span> {order.customer.email}
                <br />
                <span className="font-medium">Address:</span> {order.customer.address}
                <br />
                <span className="font-medium">Pincode:</span> {order.customer.pincode}
                <br />
                <span className="font-medium">Landmark:</span> {order.customer.landmark}
              </p>

              <div className="mb-2">
                <span className="font-medium text-gray-700">Products:</span>
                {order.products.map((p) => (
                  <p key={p._id} className="text-gray-600 text-sm ml-2">
                    {p.name} x {p.quantity} - ₹{p.price}
                  </p>
                ))}
              </div>

              <p className="font-semibold text-gray-800 mb-2">Total: ₹{order.totalPrice}</p>

              <div className="flex flex-wrap gap-2 mb-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    order.paymentStatus === "paid" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {order.paymentStatus}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    order.deliveryStatus === "delivered" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {order.deliveryStatus || "pending"}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded"
                onClick={() => handleToggleDelivery(order._id, order.deliveryStatus)}
              >
                {order.deliveryStatus === "delivered" ? "Mark Pending" : "Mark Delivered"}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                onClick={() => handleTogglePayment(order._id, order.paymentStatus)}
              >
                {order.paymentStatus === "paid" ? "Mark Unpaid" : "Mark Paid"}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(order._id)}
              >
                Delete
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          <Button
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              size="sm"
              className={`px-3 py-1 rounded-full ${currentPage === i + 1 ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-indigo-400 hover:text-white"}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            size="sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
