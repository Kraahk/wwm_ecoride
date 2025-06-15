import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { fileURLToPath } from "url"

// Remplacer __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // ← listen 0.0.0.0 docker
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // ← pour live reload docker
    },
    hmr: {
      clientPort: 5173, // ← port exposé
    },
  },
})