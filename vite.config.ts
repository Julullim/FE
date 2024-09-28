import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(),],
  server: {
    proxy: {
      '/user': {
        target: 'http://julallim-dev-env.eba-jsasje8p.ap-northeast-2.elasticbeanstalk.com/',
        changeOrigin: true,
      }
    }
  }
});
