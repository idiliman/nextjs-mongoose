import { Schema, models, model } from "mongoose";

const productSchema = new Schema({
  name: String,
  price: Number,
  category: {
    type:String,
    enum: ["fruit", "vegetable", "dairy"],
  },
});

const Product = models.product || model("product", productSchema);

export default Product;
