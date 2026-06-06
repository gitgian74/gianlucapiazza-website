import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split large, rarely-changing vendors into their own chunks so the main
        // entry shrinks and these stay cached across deploys. Order matters:
        // match react-router before react so the trailing-slash checks don't overlap.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (
            id.includes('/framer-motion/') ||
            id.includes('/motion-dom/') ||
            id.includes('/motion-utils/')
          ) {
            return 'framer-motion'
          }
          if (id.includes('/react-router/') || id.includes('/react-router-dom/')) {
            return 'react-router'
          }
          if (
            id.includes('/react-dom/') ||
            id.includes('/react/') ||
            id.includes('/scheduler/')
          ) {
            return 'react-vendor'
          }
        },
      },
    },
  },
})
