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











"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";

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
    } else {
      toast.error("Failed to delete order");
    }
  };

  const handleMarkDelivered = async (id: string) => {
    const res = await fetch(`/api/orders/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ deliveryStatus: "delivered" }),
    });
    const data = await res.json();
    if (data.success) {
      toast.success("Order marked as delivered!");
      fetchOrders();
    } else {
      toast.error("Failed to update status");
    }
  };

  const filteredOrders =
    filter === "all"
      ? orders
      : orders.filter(
          (o) =>
            o.paymentStatus === filter || o.deliveryStatus === filter
        );

  if (loading) return <p className="p-6">Loading orders...</p>;
  if (orders.length === 0) return <p className="p-6">No orders found.</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Orders</h1>

      <div className="mb-4 flex gap-3">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="unpaid">Unpaid</option>
          <option value="paid">Paid</option>
          <option value="pending">Pending Delivery</option>
          <option value="delivered">Delivered</option>
        </select>
        <Button onClick={fetchOrders}>Refresh</Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Order ID</th>
              <th className="border px-2 py-1">Customer</th>
              <th className="border px-2 py-1">Products</th>
              <th className="border px-2 py-1">Total</th>
              <th className="border px-2 py-1">Payment</th>
              <th className="border px-2 py-1">Delivery</th>
              <th className="border px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order._id} className="hover:bg-gray-50">
                <td className="border px-2 py-1">{order._id}</td>
                <td className="border px-2 py-1">
                  {order.customer.name} <br />
                  {order.customer.phone} <br />
                  {order.customer.email} <br />
                  {order.customer.address}
                </td>
                <td className="border px-2 py-1">
                  {order.products.map((p) => (
                    <div key={p._id}>
                      {p.name} x {p.quantity} - ₹{p.price}
                    </div>
                  ))}
                </td>
                <td className="border px-2 py-1">₹{order.totalPrice}</td>
                <td className={`border px-2 py-1 font-semibold ${order.paymentStatus === "paid" ? "text-green-600" : "text-red-600"}`}>
                  {order.paymentStatus}
                </td>
                <td className="border px-2 py-1">{order.deliveryStatus || "pending"}</td>
                <td className="border px-2 py-1 flex flex-col gap-1">
                  <Button onClick={() => handleMarkDelivered(order._id)} size="sm">
                    Mark Delivered
                  </Button>
                  <Button onClick={() => handleDelete(order._id)} size="sm" variant="destructive">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
