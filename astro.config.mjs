// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        fallbacks: ["serif", "ui-serif"],
        provider: "local",
        name: "Compagnon",
        cssVariable: "--font-compagnon",
        variants: [
          {
            src: [
              "./src/assets/fonts/Compagnon/Compagnon-Roman.woff2",
              "./src/assets/fonts/Compagnon/Compagnon-Roman.woff",
            ],
            weight: 400,
            style: "normal",
            display: "swap",
          },

          {
            src: [
              "./src/assets/fonts/Compagnon/Compagnon-Italic.woff2",
              "./src/assets/fonts/Compagnon/Compagnon-Italic.woff",
            ],
            weight: 300,
            style: "italic",
            display: "swap",
          },

          {
            src: [
              "./src/assets/fonts/Compagnon/Compagnon-Light.woff2",
              "./src/assets/fonts/Compagnon/Compagnon-Light.woff",
            ],
            weight: 300,
            style: "normal",
            display: "swap",
          },

          {
            src: [
              "./src/assets/fonts/Compagnon/Compagnon-Bold.woff2",
              "./src/assets/fonts/Compagnon/Compagnon-Bold.woff",
            ],
            weight: 700,
            style: "italic",
            display: "swap",
          },

          {
            src: [
              "./src/assets/fonts/Compagnon/Compagnon-Medium.woff2",
              "./src/assets/fonts/Compagnon/Compagnon-Medium.woff",
            ],
            weight: 700,
            style: "normal",
            display: "swap",
          },
        ],
      },
    ],
  },
});
