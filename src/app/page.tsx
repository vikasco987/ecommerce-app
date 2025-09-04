// export default function HomePage() {
//   return (
//     <div className="text-center mt-20">
//       <h1 className="text-4xl font-bold">Welcome to MyShop 🛍️</h1>
//       <p className="mt-4 text-gray-600">Your one-stop shop for awesome products.</p>
//     </div>
//   );
// }




// import Banner from "../../components/Banner";
// import Categories from "../../components/CategorySection";
// import ProductGrid from "../../components/ProductGrid";

// export default function HomePage() {
//   return (
//     <>
//       <Banner />
//       <Categories />
//       <ProductGrid />
//     </>
//   );
// }







// import Banner from "../../components/Banner";
// import Categories from "../../components/CategorySection";
// import ProductGrid from "../../components/ProductGrid";
// import TopDiscountedProducts from "../../components/TopDiscountedProducts"; // 👈 import it

// export default function HomePage() {
//   return (
//     <>
//       <Banner />
//       <Categories />
//       {/* 👈 show discounted products section */}
//       <ProductGrid />
//       <TopDiscountedProducts /> 
//     </>
//   );
// }





// import Banner from "../../components/Banner";
// import Categories from "../../components/CategorySection";
// import ProductGrid from "../../components/ProductGrid";
// import TopDiscountedProducts from "../../components/TopDiscountedProducts";
// import MidBanner from "../../components/MidBanner"; // 👈 new banner import
// import PromisesSection from "../../components/PromisesSection"
// import ReviewSection from "../../components/ReviewSection"

// export default function HomePage() {
//   return (
//     <>
//       <Banner />
//       <Categories />
//       <ProductGrid />
     
//       {/* 👇 Banner in between */}
//       <MidBanner />  

//       <TopDiscountedProducts />
//        <PromisesSection /> 
//             <ReviewSection />
//     </>
//   );
// }





// import Banner from "../../components/Banner";
// import Categories from "../../components/CategorySection";
// import ProductGrid from "../../components/ProductGrid";
// import TopDiscountedProducts from "../../components/TopDiscountedProducts";
// import MidBanner from "../../components/MidBanner"; 
// import PromisesSection from "../../components/PromisesSection";
// import ReviewSection from "../../components/ReviewSection";
// import Footer from "../../components/Footer";

//  // 👈 Import Footer

// export default function HomePage() {
//   return (
//     <>
//       <Banner />
//       <Categories />
//       <ProductGrid />
//       <MidBanner />  
//       <TopDiscountedProducts />
//       <PromisesSection /> 
//       <ReviewSection />
//      <Footer />  {/* 👈 Footer at the bottom */}
//     </>
//   );
// }



import Banner from "../../components/Banner";
import Categories from "../../components/CategorySection";
import ProductGrid from "../../components/ProductGrid";
import TopDiscountedProducts from "../../components/TopDiscountedProducts";
import MidBanner from "../../components/MidBanner"; 
import PromisesSection from "../../components/PromisesSection";
import ReviewSection from "../../components/ReviewSection";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <>
      {/* ✅ Full-width banner (no left/right white space) */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <Banner />
      </div>

      {/* Other sections inside normal layout */}
      <div className="container mx-auto px-4">
        <Categories />
        <ProductGrid />
        <MidBanner />  
        <TopDiscountedProducts />
        <PromisesSection /> 
        <ReviewSection />
      </div>

      <Footer /> {/* 👈 Footer at the bottom */}
    </>
  );
}
