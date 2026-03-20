import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Cunctum UI",
      fileName: "cunctum-ui",
    },
  },
});
