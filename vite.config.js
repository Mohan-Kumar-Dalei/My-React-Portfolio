import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 👈 Mobile access enabled
    port: 5173       // 👈 Default Vite port (can be changed)
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
