import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite'

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  vite: () => {
    return {
      plugins: [tailwindcss() as any],
      resolve: {
        alias: {
          "@": "*"
        }
      }
    }
  }
});
