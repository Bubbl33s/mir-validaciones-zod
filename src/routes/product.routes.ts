import { Router } from "express";
import { ProductController } from "../controller/product.controller";
import { validateProduct } from "../middlewares/validations";

const router = Router();
const PREFIX = "/products";

router.get(PREFIX, ProductController.getAllProducts);
router.get(`${PREFIX}/:id`, ProductController.getProductById);
router.post(PREFIX, validateProduct, ProductController.createProduct);
router.put(`${PREFIX}/:id`, validateProduct, ProductController.updateProduct);
router.delete(`${PREFIX}/:id`, ProductController.deleteProduct);

export default router;
