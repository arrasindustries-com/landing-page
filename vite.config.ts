import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 750,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (
            id.includes("/react/") ||
            id.includes("/react-dom/") ||
            id.includes("/scheduler/")
          ) {
            return "react-core";
          }

          if (id.includes("/framer-motion/")) {
            return "framer-motion";
          }

          if (id.includes("/@react-three/fiber/")) {
            return "r3f";
          }

          if (id.includes("/three/")) {
            return "three-core";
          }

          if (
            id.includes("/@react-three/postprocessing/") ||
            id.includes("/postprocessing/")
          ) {
            return "postprocessing";
          }

          if (id.includes("/lucide-react/")) {
            return "icons";
          }

          return "vendor";
        },
      },
    },
  },
})
