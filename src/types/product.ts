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




// // src/types/product.ts

// export type Product = {
//   id: string | number; // allow both
//   name: string;
 
//   price: number;
// //   slug: string;
//      slug?: string;
//     image?: string;
//      description?: string;
//   // optional fields for UI
//   rating?: number;
//   reviews?: number;
//   oldPrice?: number;
//   discount?: number;
// };

// export type CartItem = Product & {
//   quantity: number;
// };





// export interface Product {
//   id?: string | number;      // frontend id
//   _id?: string;      // MongoDB id
//   name: string;
//   price: number;
//   slug: string;
//   image?: string;
//   description?: string;
//   rating?: number;
//   reviews?: number;
//   oldPrice?: number;
//   discount?: number;
// }

// export interface CartItem extends Product {
//   id: string;        // required in cart
//   quantity: number;
// }





// src/types/product.ts

export interface Product {
 id: string;       // Always required in frontend
  _id?: string;      // Optional MongoDB ObjectId
  name: string;
  price: number;
  slug: string;
  image?: string;
  description?: string;
  rating?: number;
  reviews?: number;
  oldPrice?: number;
  discount?: number;
}

export interface CartItem extends Product {
  quantity: number;
}
