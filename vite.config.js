import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    // visualizer plugin ko temporarily hata diya hai testing ke liye
  ],
  optimizeDeps: {
    include: ['react-type-animation'],
    esbuildOptions: {
      loader: {
        '.glsl': 'text',
      },
    },
  },
  build: {
    target: 'es2015',          // Compatibility ke liye
    chunkSizeWarningLimit: 1000,
    commonjsOptions: {
      include: [/node_modules/],
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';  // Simple single vendor chunk for better load order
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      '.glsl': '.glsl?raw',    // GLSL raw import support
    },
  },
  assetsInclude: ['**/*.glsl'],
});
