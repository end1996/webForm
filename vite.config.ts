import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssCodeSplit: false, // Evita que Vite divida el CSS en múltiples archivos
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]", // Mantiene el nombre original
      },
    },
  },
});

