// vite.config.js (CommonJS workaround for ESM plugin)
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react').default;

module.exports = defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    open: true,
  },
});
