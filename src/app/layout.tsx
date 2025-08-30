import "./globals.css";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Categories from "../../components/CategorySection";
import ProductGrid from "../../components/ProductGrid"; // 👈 Import here

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
        <Categories />
        <ProductGrid /> {/* 👈 Add here */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
