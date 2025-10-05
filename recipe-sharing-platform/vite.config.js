import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 👇 Import from the new package and add autoprefixer
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(),tailwindcss()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(), // ✅ Add autoprefixer here
      ],
    },
  },
})