import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      input: './src/styles/tailwind.css',
      output: {
        assetFileNames: 'tailwind.css',
      },
    },
  },
})
