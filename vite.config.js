import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'css',
      apply: 'build',
      transform(css) {
        return {
          code: css,
          map: null,
          encoding: 'UTF-8'
        };
      },
    },
  ],
});