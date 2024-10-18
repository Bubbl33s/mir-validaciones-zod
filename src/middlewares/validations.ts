import { Request, Response, NextFunction } from "express";
import { Product } from "../validations/product.validations";
import { z } from "zod";

export const validateProduct = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    Product.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).send(error.message);
      return;
    }
    res.status(500).send("Internal Server Error");
  }
};
