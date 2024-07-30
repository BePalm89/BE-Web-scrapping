import { Product } from "../models/product.model.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (error) {
    return next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

export const createNewProduct = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    const createProduct = await newProduct.save();
    return res.status(201).json(createProduct);
  } catch (error) {
    return next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const modifiedProduct = new Product(req.body);
    modifiedProduct._id = id;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      modifiedProduct,
      { new: true }
    );
    return res.status(200).json(updatedProduct);
  } catch (error) {
    return next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    return res.status(200).json("Product successfull deleted");
  } catch (error) {
    return next(error);
  }
};
