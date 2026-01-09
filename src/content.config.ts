import { defineCollection, z } from "astro:content";

const programmingLanguage = z.enum([
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

const clientSide = z.enum([
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
  "solid",
  "svelte",
  "svg",
  "tailwind-css",
  "typography",
  "ux",
  "vue",
  "zustand",
]);

const serverSide = z.enum([
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

const database = z.enum(["postgresql", "redis", "mongodb"]);

const fullStack = z.enum(["astro", "next", "sveltkit", "tanstack"]);

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

const software = z.enum([
  "algorithms",
  "architecture",
  "computer-science",
  "functional-programming",
  "frameworks",
  "object-oriented-programming",
  "performance",
  "state-management",
  "website-generators",
]);

const ai = z.enum([
  "openai",
  "machine-learning",
  "tensorflow",
  "langchain",
  "generative-ai",
]);

const career = z.enum(["interviewing", "management"]);

import { glob } from "astro/loaders";

const categorySchema = z.array(
  z.discriminatedUnion("category", [
    z.object({
      category: z.literal("full-stack"),
      tags: z.array(fullStack),
    }),
    z.object({
      category: z.literal("server-side"),
      tags: z.array(serverSide),
    }),
    z.object({
      category: z.literal("programming-language"),
      tags: z.array(programmingLanguage),
    }),
    z.object({
      category: z.literal("devops"),
      tags: z.array(devops),
    }),
    z.object({
      category: z.literal("database"),
      tags: z.array(database),
    }),
    z.object({
      category: z.literal("client-side"),
      tags: z.array(clientSide),
    }),
    z.object({
      category: z.literal("software"),
      tags: z.array(software),
    }),
    z.object({
      category: z.literal("career"),
      tags: z.array(career),
    }),
    z.object({
      category: z.literal("ai"),
      tags: z.array(ai),
    }),
  ]),
);

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(), // synopsis of the post
      pubDate: z.coerce.date(),
      labels: categorySchema,
      updatedDate: z.coerce.date().optional(),
      coverImage: image().optional(),
      coverImageAlt: z.string().optional(),
    }),
});

const resume = defineCollection({
  loader: glob({ base: "./src/content/resume", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
      title: z.string(),
    })
})


export const collections = { blog, resume };
