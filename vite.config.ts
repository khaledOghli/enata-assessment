import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts';
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    Layouts(),
    Pages(
      {
        extendRoute(route) {
          if (route.path.startsWith('/jobs')) {
            route.path += '/:id?'
          }
        }
      }
    ),
    Unocss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url))
    }
  },

})
