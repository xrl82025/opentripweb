import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        soluciones: resolve(__dirname, 'lo-que-resolvemos.html'),
        tecnologia: resolve(__dirname, 'tecnologia.html'),
      },
    },
  },
})
