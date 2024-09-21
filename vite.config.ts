import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(),],
  server: {
    proxy: {
      '/user': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // rewrite 옵션을 제거하여 /user 경로가 유지되도록 합니다.
      }
    }
  }
});
