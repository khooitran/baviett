import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/',
  publicDir: '../static/',
  base: './',
  server: {
    host: true, // Open to local network and display URL
    open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env), // Open if it's not a CodeSandbox
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        director: resolve(__dirname, 'director/index.html'),
        editor: resolve(__dirname, 'editor/index.html'),
        vfx: resolve(__dirname, 'vfx/index.html'),
      },
    },
    outDir: '../dist', // Output in the dist/ folder
    emptyOutDir: true, // Empty the folder first
    sourcemap: true, // Add sourcemap
  },
});
