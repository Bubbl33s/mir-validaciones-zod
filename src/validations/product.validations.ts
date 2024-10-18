import { z } from "zod";

export const Product = z.object({
  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "Title must be a string",
  }),

  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .gt(0, "Price must be greater than 0"),

  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .max(200, "Description must be less than or equal to 200 characters"),

  category: z.enum(["electronics", "clothing", "furniture"], {
    required_error: "Category is required",
    invalid_type_error: "Invalid category",
  }),

  image: z
    .string({ invalid_type_error: "Image must be a string" })
    .url({ message: "Invalid image URL" })
    .optional(),
});
