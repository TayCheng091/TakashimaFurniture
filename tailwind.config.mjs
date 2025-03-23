/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        nature: {
          primary: "#4CAF50", // 主色調：清新的草綠色
          light: "#81C784", // 淺綠色
          dark: "#2E7D32", // 深綠色
          beige: "#F5F5DC", // 米色背景
          brown: "#D7CCC8", // 淺棕色
          ivory: "#FFFFF0", // 象牙白
        },
      },
    },
  },
  plugins: [],
};
