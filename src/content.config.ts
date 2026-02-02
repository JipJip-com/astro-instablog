import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

/* Schema for all pages*/
const pageCollection = defineCollection({
  loader: glob({ pattern: [
    "**/*.{md,mdx}",
    "!**/blog/**"
    ],
    base: "src/content" }),
  schema: z.object({
    metaTitle: z.string(),
    description: z.string(),
    keywords: z.string().optional(),
  }).passthrough()
});

/* Schema for all pages*/
const blogCollection = defineCollection({
  loader: glob({ pattern:
    "**/*.{md,mdx}",
    base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    description: z.string(),
    excerpt: z.string().optional(),
    keywords: z.string().optional(),
    datePublished: z.date().optional().nullable(),
    tags: z.array(z.string()).optional(),
    image: z.object({
      url: z.string().optional(),
      alt: z.string().optional(),
    }).optional()
  })
});

export const collections = {
  blog: blogCollection,
  pages: pageCollection
};