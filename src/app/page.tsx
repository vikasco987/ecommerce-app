// export default function HomePage() {
//   return (
//     <div className="text-center mt-20">
//       <h1 className="text-4xl font-bold">Welcome to MyShop 🛍️</h1>
//       <p className="mt-4 text-gray-600">Your one-stop shop for awesome products.</p>
//     </div>
//   );
// }




import Banner from "../../components/Banner";
import Categories from "../../components/CategorySection";
import ProductGrid from "../../components/ProductGrid";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Categories />
      <ProductGrid />
    </>
  );
}
