// import "./globals.css";
// import Navbar from "../../components/Navbar";
// import Banner from "../../components/Banner";
// import Categories from "../../components/CategorySection";

// import ProductGrid from "../../components/ProductGrid"; // 👈 Import here

// export const metadata = {
//   title: "MyShop",
//   description: "Simple Ecommerce in Next.js",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50">
//         <Navbar />
//         <Banner />
//         <Categories />
//         <ProductGrid /> {/* 👈 Add here */}
//         <main className="p-6">{children}</main>
//       </body>
//     </html>
//   );
// }










// import "./globals.css";
// import Navbar from "../../components/Navbar";
// import Banner from "../../components/Banner";
// import Categories from "../../components/CategorySection";
// import ProductGrid from "../../components/ProductGrid"; 

// // 👇 Import CartProvider
// import { CartProvider } from "./context/CartContext";

// export const metadata = {
//   title: "MyShop",
//   description: "Simple Ecommerce in Next.js",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50">
//         {/* 👇 Wrap everything inside CartProvider */}
//         <CartProvider>
//           <Navbar />
//           <Banner />
//           <Categories />
//           <ProductGrid />
//           <main className="p-6">{children}</main>
//         </CartProvider>
//       </body>
//     </html>
//   );
// }








// // src/app/layout.tsx
// import "./globals.css";
// import Navbar from "../../components/Navbar";
// import Banner from "../../components/Banner";
// import Categories from "../../components/CategorySection";
// import ProductGrid from "../../components/ProductGrid";
// import { CartProvider } from "./context/CartContext";

// export const metadata = {
//   title: "MyShop",
//   description: "Simple Ecommerce in Next.js",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50">
//         <CartProvider>
//           <Navbar />
//           <Banner />
//           <Categories />
//           <ProductGrid />
//           <main className="p-6">{children}</main>
//         </CartProvider>
//       </body>
//     </html>
//   );
// }








// import "./globals.css";
// import Navbar from "../../components/Navbar";
// import Banner from "../../components/Banner";
// import Categories from "../../components/CategorySection";
// import ProductGrid from "../../components/ProductGrid";
// import { CartProvider } from "./context/CartContext";

// export const metadata = {
//   title: "MyShop",
//   description: "Simple Ecommerce in Next.js",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50">
//         <CartProvider>
//           <Navbar />
//           <Banner />
//           <Categories />
//           <ProductGrid />
//           <main className="p-6">{children}</main>
//         </CartProvider>
//       </body>
//     </html>
//   );
// }








// import "./globals.css";
// import Navbar from "../../components/Navbar";
// import Banner from "../../components/Banner";
// import Categories from "../../components/CategorySection";
// import ProductGrid from "../../components/ProductGrid";
// import FloatingCartBar from "../../components/FloatingCartBar"; // ✅ add this
// import { CartProvider } from "./context/CartContext";

// export const metadata = {
//   title: "MyShop",
//   description: "Simple Ecommerce in Next.js",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50">
//         <CartProvider>
//           <Navbar />
//           <Banner />
//           <Categories />
//           <ProductGrid />
//           <main className="p-6">{children}</main>

//           {/* ✅ Floating cart bar */}
//           <FloatingCartBar />
//         </CartProvider>
//       </body>
//     </html>
//   );
// }









// import "./globals.css";
// import Navbar from "../../components/Navbar";
// import FloatingCartBar from "../../components/FloatingCartBar";
// import { CartProvider } from "./context/CartContext";

// export const metadata = {
//   title: "MyShop",
//   description: "Simple Ecommerce in Next.js",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50">
//         <CartProvider>
//           <Navbar />
//           <main className="p-6">{children}</main>
//           <FloatingCartBar />
//         </CartProvider>
//       </body>
//     </html>
//   );
// // }


// import "./globals.css";
// import Navbar from "../../components/Navbar";
// import FloatingCartBar from "../../components/FloatingCartBar";
// import { CartProvider } from "./context/CartContext";

// export const metadata = {
//   title: "MyShop",
//   description: "Simple Ecommerce in Next.js",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className="h-full bg-gray-50">   {/* ensure html fills full height */}
//       <body className="h-full bg-gray-50">          {/* ensure body fills full height */}
//         <CartProvider>
//           <div className="flex min-h-screen flex-col"> 
//             <Navbar />
//             <main className="flex-1 p-6">{children}</main>
//             <FloatingCartBar />
//           </div>
//         </CartProvider>
//       </body>
//     </html>
//   );
// }




import "./globals.css";
import { CartProvider } from "./context/CartContext";
import ClientLayoutWrapper from "./ClientLayoutWrapper";

export const metadata = {
  title: "MyShop",
  description: "Simple Ecommerce in Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full bg-gray-50">
        <CartProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
