import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1500, // Set limit to 1500 KB
    outDir: 'build', // Ensure the output directory is 'build'
  },
  plugins: [react()],
})
