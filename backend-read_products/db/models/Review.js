
import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  title: { type: String, required: true },
  text: {type: String, required: true},
  rating: {type: Number, required: true},
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;