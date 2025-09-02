
// // File: models/Product.ts'

// import mongoose, { Schema, model, models } from "mongoose";

// const productSchema = new Schema(
//   {
//     name: { type: String, required: true },
//     description: { type: String },
//     price: { type: Number, required: true },
//     img: { type: String },
//     category: { type: String },
//     sub_category: { type: String },
//     food_type: { type: String }
//   },
//   { collection: "items" } // 👈 Force Mongoose to use the "items" collection
// );

// export const Product = models.Product || model("Product", productSchema);





// File: src/models/Product.ts
import mongoose, { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    img: { type: String },
    category: { type: String },
    sub_category: { type: String },
    food_type: { type: String }
  },
  { collection: "items" }
);

const Product = models.Product || model("Product", productSchema);
export default Product; // 👈 default export
