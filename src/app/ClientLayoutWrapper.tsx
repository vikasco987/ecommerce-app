// "use client";

// import Navbar from "../../components/Navbar";
// import FloatingCartBar from "../../components/FloatingCartBar";
// import { usePathname } from "next/navigation";

// export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const isCheckoutPage = pathname === "/checkout";

//   return (
//     <>
//       <Navbar />
//       <main className="min-h-screen p-6">{children}</main>
//       {!isCheckoutPage && <FloatingCartBar />}
//     </>
//   );
// }



"use client";

import Navbar from "../../components/Navbar";
import FloatingCartBar from "../../components/FloatingCartBar";
import { usePathname } from "next/navigation";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCheckoutPage = pathname === "/checkout";

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 p-6">{children}</main>
      {!isCheckoutPage && <FloatingCartBar />}
    </div>
  );
}
