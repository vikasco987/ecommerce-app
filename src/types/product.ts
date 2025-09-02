// export interface Product {
//     id: number | string; 
//   name: string;
//   description: string;
//   price: number;
//   image: string;
//   category?: string;
//   // other fields you already have
// }

// // New type for cart items
// export interface CartItem extends Product {
//   quantity: number;
// }




// src/types/product.ts

export type Product = {
  id: string | number; // allow both
  name: string;
 
  price: number;
//   slug: string;
     slug?: string;
    image?: string;
     description?: string;
  // optional fields for UI
  rating?: number;
  reviews?: number;
  oldPrice?: number;
  discount?: number;
};

export type CartItem = Product & {
  quantity: number;
};
