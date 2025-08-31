// // src/app/checkout/layout.tsx
// export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <section className="min-h-screen bg-white text-gray-900">
//       {children}
//     </section>
//   );
// }




// src/app/checkout/layout.tsx
export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen w-full bg-gray-50 text-gray-900">
      {children}
    </section>
  );
}
