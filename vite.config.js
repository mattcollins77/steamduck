import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'three/examples/jsm': path.resolve(__dirname, './node_modules/three/examples/jsm'),
    },
  },
  optimizeDeps: {
    include: [
      'three',
      'three/examples/jsm/controls/OrbitControls'
    ],
    exclude: ['electron']
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['electron'],
    }
  }
});
