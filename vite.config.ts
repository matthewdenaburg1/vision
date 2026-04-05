import type { UserConfig } from "vite";

export default {
  root: "./src",
  base: "/vision",

  build: {
    outDir: "../public/src",
    target: "es6",
    cssMinify: false,
    sourcemap: false,
    emptyOutDir: true,
  },

  css: {
    devSourcemap: false,
  },

  server: {
    open: true,
  },
} satisfies UserConfig;
