import { defineConfig } from "vite";

export default defineConfig({
  base: "/cunctum-ui/",
  build: {
    outDir: "dist-landing",
    copyPublicDir: true,
  },
});
