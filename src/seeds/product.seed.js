import mongoose from "mongoose";
import { Product } from "../api/models/product.model.js";



export const seed = (products) => {

  const productDocuments = products.map((product) => new Product(product));
  mongoose
    .connect(
      "mongodb+srv://BePalmScrapping:CX3kK30QPnXdYWWl@cluster0.ivlm9ts.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(async () => {

      const allProducts = await Product.find();

      if (allProducts.length) {

        await Product.collection.drop();
      }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
      await Product.insertMany(productDocuments);
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());
};
