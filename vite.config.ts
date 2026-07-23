import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const currentDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: resolve(currentDir, 'apps/web'),
  publicDir: resolve(currentDir, 'apps/web/public'),
  resolve: {
    alias: {
      '@': resolve(currentDir, 'apps/web/src'),
      '@components': resolve(currentDir, 'apps/web/src/components'),
      '@assets': resolve(currentDir, 'apps/web/src/assets'),
    },
  },
  css: { devSourcemap: true },
  build: {
    outDir: resolve(currentDir, '../../dist'),
    emptyOutDir: true,
    sourcemap: 'inline',
    minify: false,
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
  },
});
