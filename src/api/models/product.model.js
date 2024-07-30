import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    img: { type: String }
});

export const Product = mongoose.model("product", productSchema);



