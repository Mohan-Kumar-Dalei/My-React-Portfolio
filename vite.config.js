import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  optimizeDeps: {
    include: ['react-type-animation'],
    esbuildOptions: {
      loader: {
        '.glsl': 'text',
      },
    },
  },
  build: {
    target: 'es2015',
    chunkSizeWarningLimit: 1000,
    commonjsOptions: {
      include: [/node_modules/],
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      '.glsl': '.glsl?raw',
    },
  },
  assetsInclude: ['**/*.glsl'],
});
