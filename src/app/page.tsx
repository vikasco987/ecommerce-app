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



// import Banner from "../../components/Banner";
// import Categories from "../../components/CategorySection";
// import ProductGrid from "../../components/ProductGrid";
// import TopDiscountedProducts from "../../components/TopDiscountedProducts";
// import MidBanner from "../../components/MidBanner"; 
// import PromisesSection from "../../components/PromisesSection";
// import ReviewSection from "../../components/ReviewSection";
// import Footer from "../../components/Footer";

// export default function HomePage() {
//   return (
//     <>
//       {/* ✅ Full-width banner (no left/right white space) */}
//       <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
//         <Banner />
//       </div>

//       {/* Other sections inside normal layout */}
//       <div className="container mx-auto px-4">
//         <Categories />
//         <ProductGrid />
//         <MidBanner />  
//         <TopDiscountedProducts />
//         <PromisesSection /> 
//         <ReviewSection />
//       </div>

//       <Footer /> {/* 👈 Footer at the bottom */}
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

// export default function HomePage() {
//   return (
//     <>
//       {/* ✅ Full-width banner (works on laptop + mobile) */}
//       <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
//         <Banner />
//       </div>

//       {/* ✅ Keep other sections centered */}
//       <div className="container mx-auto px-4">
//         <Categories />
//         <ProductGrid />
//         <MidBanner />  
//         <TopDiscountedProducts />
//         <PromisesSection /> 
//         <ReviewSection />
//       </div>

//       <Footer /> {/* 👈 Footer at the bottom */}
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

// export default function HomePage() {
//   return (
//     <>
//       {/* ✅ Banner full width */}
//       <div className="w-full max-w-none">
//         <Banner />
//       </div>

//       {/* ✅ All sections full width like banner */}
//       <div className="w-full max-w-none">
//         <Categories />
//         <ProductGrid />
//         <MidBanner />  
//         <TopDiscountedProducts />
//         <PromisesSection /> 
//         <ReviewSection />
//       </div>

//       {/* ✅ Footer full width */}
//       <div className="w-full max-w-none">
//         <Footer />
//       </div>
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

// export default function HomePage() {
//   return (
//     <div className="w-full overflow-x-hidden"> 
//       {/* ✅ Banner full width */}
//       <section className="w-full">
//         <Banner />
//       </section>

//       {/* ✅ Other sections full width */}
//       <section className="w-full">
//         <Categories />
//         <ProductGrid />
//         <MidBanner />  
//         <TopDiscountedProducts />
//         <PromisesSection /> 
//         <ReviewSection />
//       </section>

//       {/* ✅ Footer full width */}
//       <section className="w-full">
//         <Footer />
//       </section>
//     </div>
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

// export default function HomePage() {
//   return (
//     <main className="w-screen overflow-x-hidden">
//       {/* ✅ Full-width banner */}
//       <section className="w-screen">
//         <Banner />
//       </section>

//       {/* ✅ All sections forced full width */}
//       <section className="w-screen">
//         <Categories />
//       </section>

//       <section className="w-screen">
//         <ProductGrid />
//       </section>

//       <section className="w-screen">
//         <MidBanner />
//       </section>

//       <section className="w-screen">
//         <TopDiscountedProducts />
//       </section>

//       <section className="w-screen">
//         <PromisesSection />
//       </section>

//       <section className="w-screen">
//         <ReviewSection />
//       </section>

//       {/* ✅ Footer full width */}
//       <footer className="w-screen">
//         <Footer />
//       </footer>
//     </main>
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

// export default function HomePage() {
//   return (
//     // ✅ Root never wider than the viewport, no horizontal scroll
//     <main className="site-root">
//       {/* ✅ Full-bleed sections (no gap on left/right on any device) */}
//       <section className="full-bleed">
//         <Banner />
//       </section>

//       <section className="full-bleed">
//         <Categories />
//       </section>

//       <section className="full-bleed">
//         <ProductGrid />
//       </section>

//       <section className="full-bleed">
//         <MidBanner />
//       </section>

//       <section className="full-bleed">
//         <TopDiscountedProducts />
//       </section>

//       <section className="full-bleed">
//         <PromisesSection />
//       </section>

//       <section className="full-bleed">
//         <ReviewSection />
//       </section>

//       <footer className="full-bleed">
//         <Footer />
//       </footer>
//     </main>
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
      {/* ✅ Full-width banner (works on laptop + mobile) */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <Banner />
        <Categories />
        <ProductGrid />
        <MidBanner />  
        <TopDiscountedProducts />
        <PromisesSection /> 
        <ReviewSection />
         <Footer />
      </div>

      {/* ✅ Keep other sections centered */}
      {/* <div className="container mx-auto px-4">
        <Categories />
        <ProductGrid />
        <MidBanner />  
        <TopDiscountedProducts />
        <PromisesSection /> 
        <ReviewSection />
      </div> */}

      {/* <Footer /> 👈 Footer at the bottom */}
    </>
  );
}