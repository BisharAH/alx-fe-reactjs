import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 👇 Import from the new package and add autoprefixer
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(), // ✅ Add autoprefixer here
      ],
    },
  },
})