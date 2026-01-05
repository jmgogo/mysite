import { defineCollection, z } from "astro:content";

const languages = z.enum([
  "c",
  "c#",
  "c++",
  "go",
  "javascript",
  "java",
  "php",
  "python",
  "rust",
  "sql",
  "typescript",
]);

const clientside = z.enum([
  "3d",
  "accessibility",
  "angular",
  "canvas",
  "css",
  "creative-coding",
  "data-visualization",
  "design",
  "figma",
  "gatsby",
  "html",
  "progressive-web-apps",
  "react",
  "redux",
  "remix",
  "responsive-layouts",
  "seo",
  "solidjs",
  "svelte",
  "svg",
  "tailwind-css",
  "typography",
  "ux",
  "vue",
  "zustand",
]);

const serverside = z.enum([
  "api",
  "deno",
  "express",
  "graphql",
  "jwt",
  "node",
  "prisma",
  "rest",
  "rpc",
  "websockets",
]);

const databases = z.enum(["postgresql", "redis", "mongodb"]);

const fullstack = z.enum(["astro", "next", "sveltkit", "tanstack"]);

const devops = z.enum([
  "aws",
  "ci/cd",
  "cypress",
  "docker",
  "git",
  "github",
  "gitlab",
  "kubernetes",
  "linux",
  "netlify",
  "playwright",
  "pulumi",
  "security",
  "storybook",
  "terraform",
  "testing",
  "vim",
  "vite",
  "vitest",
  "vercel",
  "vscode",
  "webpack",
]);

const general = z.enum([
  "algorithms",
  "architecture",
  "computer-science",
  "functional-programming",
  "frameworks",
  "full-stack",
  "object-oriented",
  "performance",
  "programming-language",
  "state-management",
  "website-generators",
]);

const difficulty = z.enum(["beginner", "intermediate", "advanced"]);

const ai = z.enum([
  "openai",
  "machine-learning",
  "tensorflow",
  "langchain",
  "generative-ai",
]);

const career = z.enum(["interviewing", "management"]);

const blogTags = z.enum([""]);

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
      tags: z.array(blogTags).optional(),
      updatedDate: z.coerce.date().optional(),
      coverImage: image().optional(),
      coverImageAlt: z.string().optional(),
    }),
});

// TODO get type safety for wordCount and reading time
// wordCount: z.coerce.number(), // number of words
// readingTime: z.string(), // e.g. 3 min read

export const collections = { blog };
