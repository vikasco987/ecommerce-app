// import mongoose, { Schema, model, models } from "mongoose";

// const OrderSchema = new Schema({
//   products: [
//     {
//       _id: { type: String, required: true },
//       name: String,
//       price: Number,
//       quantity: Number,
//     },
//   ],
//   totalPrice: { type: Number, required: true },
//   customer: {
//     name: String,
//     phone: String,
//     email: String,
//     address: String,
//   },
//   createdAt: { type: Date, default: Date.now },
// });

// const Order = models.Order || model("Order", OrderSchema);
// export default Order;






import mongoose, { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
  products: [
    {
      _id: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  customer: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
  },
  paymentStatus: {
    type: String,
    enum: ["paid", "unpaid"],
    default: "unpaid", // ✅ default unpaid
  },
  createdAt: { type: Date, default: Date.now },
});

const Order = models.Order || model("Order", OrderSchema);
export default Order;
