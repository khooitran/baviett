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
        main: resolve(__dirname, 'src/index.html'),
        contact: resolve(__dirname, 'src/contact/index.html'),
        director: resolve(__dirname, 'src/director/index.html'),
        editor: resolve(__dirname, 'src/editor/index.html'),
        vfx: resolve(__dirname, 'src/vfx/index.html'),
      },
    },
    outDir: '../dist', // Output in the dist/ folder
    emptyOutDir: true, // Empty the folder first
    sourcemap: true, // Add sourcemap
  },
});
