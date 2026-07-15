import { z } from "zod";

export const HeroSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title is too long"),

  slug: z
    .string()
    .trim()
    .min(3, "Slug is required"),

  subtitle: z
    .string()
    .trim()
    .max(150, "Subtitle is too long")
    .optional(),

  description: z
    .string()
    .trim()
    .max(500, "Description is too long")
    .optional(),

  buttonText: z
    .string()
    .trim()
    .min(1, "Button text is required")
    .max(30),

  buttonLink: z
    .string()
    .trim()
    .min(1, "Button link is required"),

  image: z
    .string()
    .url("Please provide a valid image URL"),

  order: z
    .number()
    .min(1),

  isActive: z.boolean(),
});

export type HeroInput = z.infer<typeof HeroSchema>;