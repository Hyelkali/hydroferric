import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  // Disable optimizeDeps to avoid Rollup issues
  optimizeDeps: {
    disabled: process.env.NODE_ENV === "production",
  },
  build: {
    // Use esbuild for production builds instead of Rollup
    minify: "esbuild",
    target: "es2015",
    outDir: "dist",
    assetsDir: "assets",
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
})
