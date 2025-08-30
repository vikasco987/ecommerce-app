// import "./globals.css";
// import Navbar from "../../components/Navbar";
// import Banner from "../../components/Banner";

// export const metadata = {
//   title: "MyShop",
//   description: "Simple Ecommerce in Next.js",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-50">
//         <Navbar />
//         <Banner /> {/* 👈 Banner Added */}
//         <main className="p-6">{children}</main>
//       </body>
//     </html>
//   );
// }









import "./globals.css";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Categories from "../../components/CategorySection"; // 👈 Add this

export const metadata = {
  title: "MyShop",
  description: "Simple Ecommerce in Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <Banner />
        <Categories /> {/* 👈 Categories Section */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
