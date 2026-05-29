import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum([
      "fashion",
      "beauty",
      "travel",
      "home-garden",
      "technology",
    ]),
    excerpt: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { articles };
