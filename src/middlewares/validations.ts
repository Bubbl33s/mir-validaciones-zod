import { Request, Response, NextFunction } from "express";
import { Product } from "../validations/product.validations";
import { z } from "zod";

// El middleware intercepta la solicitud, valida el cuerpo de la solicitud
export const validateProduct = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Valida el cuerpo de la solicitud en base al esquema de validación de producto
    Product.parse(req.body);
    // Si la validación es exitosa, pasa al siguiente middleware
    next();
  } catch (error) {
    // Si la validación falla se maneja el error
    if (error instanceof z.ZodError) {
      // Si hay errores de validación, formatea los errores y los envía en la respuesta
      const formattedErrors = error.errors.map((err) => ({
        path: err.path.join("."),
        message: err.message,
      }));

      res.status(400).json({ errors: formattedErrors });
      return;
    }

    // Si hay un error interno del servidor, envía un mensaje de error genérico
    res.status(500).send("Internal Server Error");
  }
};
