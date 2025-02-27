import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        about: resolve(__dirname, 'about.html'),
        help: resolve(__dirname, 'help.html'),
        coop: resolve(__dirname, 'coop.html'),
      },
    },
  },
})