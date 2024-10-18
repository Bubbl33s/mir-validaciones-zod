import { Application } from "express";
import productRoutes from "./product.routes";

export default function setupRoutes(app: Application) {
  const PREFIX = "/api";

  app.use(PREFIX, productRoutes);
}
