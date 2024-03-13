import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7474
  },
  plugins: [
    react(),
    viteMockServe({
      mockPath: "mock",
    }),
  ],
})
