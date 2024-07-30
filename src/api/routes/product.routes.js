import express from "express";
import {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/create", createNewProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
