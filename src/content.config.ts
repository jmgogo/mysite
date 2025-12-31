import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(), // synopsis of the post
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      coverImage: image().optional(),
      coverImageAlt: z.string().optional(),
    }),
});

// TODO get type safety for wordCount and reading time
// wordCount: z.coerce.number(), // number of words
// readingTime: z.string(), // e.g. 3 min read

export const collections = { blog };
