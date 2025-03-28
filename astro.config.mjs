import { defineConfig } from "astro/config";
// @ts-check
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://TayCheng091.github.io",
  base: "/TakashimaFurniture",
});
