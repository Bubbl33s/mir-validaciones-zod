import prisma from "./prisma";
import { Product } from "../validations/product.validations";

type Product = {
  title: string;
  price: number;
  description: string;
  category: string;
  image?: string;
};

export class ProductService {
  static async getAllProducts() {
    return prisma.product.findMany();
  }

  static async getProductById(id: string) {
    return prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  static async createProduct(data: Product) {
    return prisma.product.create({
      data,
    });
  }

  static async updateProduct(id: string, data: Product) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    return prisma.product.update({
      where: {
        id,
      },
      data,
    });
  }

  static async deleteProduct(id: string) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    return prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
