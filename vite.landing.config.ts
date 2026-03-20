import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/cunctum-ui/",
  resolve: {
    alias: {
      "/fonts": resolve(__dirname, "public/fonts"),
    },
  },
  build: {
    outDir: "dist-landing",
    copyPublicDir: true,
  },
});
