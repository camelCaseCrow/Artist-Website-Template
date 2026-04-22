import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
   resolve: {
    alias: {
 
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@assets": "/src/assets",
      "@api": "/src/api",
    }
  }
});
