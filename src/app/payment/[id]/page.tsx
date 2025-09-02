// "use client";

// import { useEffect, useState } from "react";
// import { useRouter, useParams } from "next/navigation";
// import { Button } from "@/components/ui/button";

// export default function PaymentPage() {
//   const router = useRouter();
//   const { id } = useParams(); // orderId
//   const [order, setOrder] = useState<any>(null);

//   useEffect(() => {
//     const fetchOrder = async () => {
//       const res = await fetch(`/api/orders/${id}`);
//       const data = await res.json();
//       setOrder(data.order);
//     };
//     fetchOrder();
//   }, [id]);

//   const handlePayment = async () => {
//     const res = await fetch("/api/create-razorpay-order", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ orderId: id }),
//     });

//     const data = await res.json();
//     if (!data.success) return alert("Failed to create Razorpay order");

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//       amount: data.razorpayOrder.amount,
//       currency: data.razorpayOrder.currency,
//       name: "Your Shop Name",
//       description: "Order Payment",
//       order_id: data.razorpayOrder.id,
//       handler: async function (response: any) {
//         // Payment successful ✅ update backend
//         const updateRes = await fetch(`/api/orders/${id}/payment`, {
//           method: "PATCH",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ paymentStatus: "paid" }),
//         });

//         const updateData = await updateRes.json();
//         if (updateData.success) {
//           alert("Payment successful!");
//           router.push("/"); // redirect after payment
//         } else {
//           alert("Payment succeeded but failed to update status");
//         }
//       },
//       prefill: {
//         name: order?.customer?.name,
//         email: order?.customer?.email,
//         contact: order?.customer?.phone,
//       },
//       theme: {
//         color: "#22c55e",
//       },
//     };

//     const rzp = new (window as any).Razorpay(options);
//     rzp.open();
//   };

//   if (!order) return <p>Loading order...</p>;

//   return (
//     <div className="p-6 max-w-lg mx-auto bg-white rounded shadow">
//       <h2 className="text-xl font-bold mb-4">Pay for your order</h2>
//       <p>
//         <strong>Order ID:</strong> {order._id}
//       </p>
//       <p>
//         <strong>Total:</strong> ₹{order.totalPrice}
//       </p>
//       <Button className="mt-4 bg-green-600 hover:bg-green-700" onClick={handlePayment}>
//         Pay Now
//       </Button>
//     </div>
//   );
// }













// "use client";

// import { useEffect, useState } from "react";
// import { useRouter, useParams } from "next/navigation";
// import { Button } from "@/components/ui/button";

// export default function PaymentPage() {
//   const router = useRouter();
//   const { id } = useParams(); // orderId
//   const [order, setOrder] = useState<any>(null);
//   const [razorpayLoaded, setRazorpayLoaded] = useState(false);

//   // Dynamically load Razorpay script
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.onload = () => setRazorpayLoaded(true);
//     script.onerror = () => alert("Failed to load Razorpay script");
//     document.body.appendChild(script);
//   }, []);

//   // Fetch order details
//   useEffect(() => {
//     const fetchOrder = async () => {
//       const res = await fetch(`/api/orders/${id}`);
//       const data = await res.json();
//       if (data.success) setOrder(data.order);
//       else alert("Order not found");
//     };
//     fetchOrder();
//   }, [id]);

//   const handlePayment = async () => {
//     if (!razorpayLoaded) return alert("Razorpay not loaded yet");

//     // Create Razorpay order
//     const res = await fetch("/api/create-razorpay-order", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ orderId: id }),
//     });

//     const data = await res.json();
//     if (!data.success) return alert("Failed to create Razorpay order");

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//       amount: data.razorpayOrder.amount,
//       currency: data.razorpayOrder.currency,
//       name: "Your Shop Name",
//       description: "Order Payment",
//       order_id: data.razorpayOrder.id,
//       handler: async function (response: any) {
//         // ✅ Update backend payment status
//         const updateRes = await fetch(`/api/orders/pay/${id}/payment`, {
//           method: "PATCH",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ paymentStatus: "paid" }),
//         });

//         const updateData = await updateRes.json();
//         if (updateData.success) {
//           alert("Payment successful!");
//           router.push("/"); // redirect after payment
//         } else {
//           alert("Payment succeeded but failed to update status");
//         }
//       },
//       prefill: {
//         name: order?.customer?.name,
//         email: order?.customer?.email,
//         contact: order?.customer?.phone,
//       },
//       theme: {
//         color: "#22c55e",
//       },
//     };

//     const rzp = new (window as any).Razorpay(options);
//     rzp.open();
//   };

//   if (!order) return <p>Loading order...</p>;

//   return (
//     <div className="p-6 max-w-lg mx-auto bg-white rounded shadow">
//       <h2 className="text-xl font-bold mb-4">Pay for your order</h2>
//       <p>
//         <strong>Order ID:</strong> {order._id}
//       </p>
//       <p>
//         <strong>Total:</strong> ₹{order.totalPrice}
//       </p>
//       <Button
//         className="mt-4 bg-green-600 hover:bg-green-700"
//         onClick={handlePayment}
//       >
//         Pay Now
//       </Button>
//     </div>
//   );
// }












"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function PaymentPage() {
  const router = useRouter();
  const params = useParams();          // ✅ get params object
  const id = params?.id as string;     // ✅ safely cast to string
  const [order, setOrder] = useState<any>(null);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // Dynamically load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setRazorpayLoaded(true);
    script.onerror = () => alert("Failed to load Razorpay script");
    document.body.appendChild(script);
  }, []);

  // Fetch order details
  useEffect(() => {
    if (!id) return;
    const fetchOrder = async () => {
      const res = await fetch(`/api/orders/${id}`);
      const data = await res.json();
      if (data.success) setOrder(data.order);
      else alert("Order not found");
    };
    fetchOrder();
  }, [id]);

  const handlePayment = async () => {
    if (!razorpayLoaded) return alert("Razorpay not loaded yet");
    if (!id) return alert("Invalid order ID");

    // Create Razorpay order
    const res = await fetch("/api/create-razorpay-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId: id }),
    });

    const data = await res.json();
    if (!data.success) return alert("Failed to create Razorpay order");

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.razorpayOrder.amount,
      currency: data.razorpayOrder.currency,
      name: "Your Shop Name",
      description: "Order Payment",
      order_id: data.razorpayOrder.id,
      handler: async function (response: any) {
        // Update backend payment status
        const updateRes = await fetch(`/api/orders/pay/${id}/payment`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentStatus: "paid" }),
        });

        const updateData = await updateRes.json();
        if (updateData.success) {
          alert("Payment successful!");
          router.push("/"); // redirect after payment
        } else {
          alert("Payment succeeded but failed to update status");
        }
      },
      prefill: {
        name: order?.customer?.name,
        email: order?.customer?.email,
        contact: order?.customer?.phone,
      },
      theme: {
        color: "#22c55e",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  if (!order) return <p>Loading order...</p>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Pay for your order</h2>
      <p>
        <strong>Order ID:</strong> {order._id}
      </p>
      <p>
        <strong>Total:</strong> ₹{order.totalPrice}
      </p>
      <Button
        className="mt-4 bg-green-600 hover:bg-green-700"
        onClick={handlePayment}
      >
        Pay Now
      </Button>
    </div>
  );
}
