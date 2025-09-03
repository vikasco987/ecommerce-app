// "use client";

// import { QRCodeCanvas } from "qrcode.react";
// import { useState } from "react";

// interface UpiQRCodeProps {
//   amount: number;
//   orderId: string;
// }

// export default function UpiQRCode({ amount, orderId }: UpiQRCodeProps) {
//   const upiId = "mukeshcomputers7551@ybl"; // your UPI ID
//   const name = "Mukesh Computers"; // optional payee name
//   const message = `Payment for order ${orderId}`;

//   const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
//     name
//   )}&am=${amount}&cu=INR&tn=${encodeURIComponent(message)}`;

//   const [copied, setCopied] = useState<{ id: boolean; amount: boolean }>({
//     id: false,
//     amount: false,
//   });

//   const handleCopy = async (text: string, type: "id" | "amount") => {
//     try {
//       await navigator.clipboard.writeText(text);
//       setCopied((prev) => ({ ...prev, [type]: true }));
//       setTimeout(() => setCopied((prev) => ({ ...prev, [type]: false })), 2000);
//     } catch (err) {
//       console.error("Copy failed", err);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 py-4">
//       <p className="text-center text-gray-700">
//         Scan this QR code to pay ₹{amount}
//       </p>
//       <QRCodeCanvas value={upiUrl} size={200} />
//       <div className="flex flex-col items-center gap-1">
//         <div className="flex items-center gap-2">
//           <span className="text-sm text-gray-500">{upiId}</span>
//           <button
//             className="text-xs text-blue-600 hover:underline"
//             onClick={() => handleCopy(upiId, "id")}
//           >
//             {copied.id ? "Copied!" : "Copy"}
//           </button>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="text-sm text-gray-500">₹{amount}</span>
//           <button
//             className="text-xs text-blue-600 hover:underline"
//             onClick={() => handleCopy(amount.toString(), "amount")}
//           >
//             {copied.amount ? "Copied!" : "Copy"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }






"use client";

import { QRCodeCanvas } from "qrcode.react";

interface UpiQRCodeProps {
  amount: number; // pass totalPrice here
  orderId: string;
}

export default function UpiQRCode({ amount, orderId }: UpiQRCodeProps) {
  const upiId = "mukeshcomputers7551@ybl"; // your UPI ID
  const name = "Mukesh Computers"; // optional
  const message = `Payment for order ${orderId}`;

  // ensure amount is a number with 2 decimals
  const formattedAmount = Number(amount).toFixed(2);

  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
    name
  )}&am=${formattedAmount}&cu=INR&tn=${encodeURIComponent(message)}`;

  return (
    <div className="flex flex-col items-center gap-4 py-4">
      <p className="text-center text-gray-700">
        Scan this QR code to pay ₹{formattedAmount}
      </p>
      <QRCodeCanvas value={upiUrl} size={200} />
      <p className="text-sm text-gray-500">{upiId}</p>
    </div>
  );
}
