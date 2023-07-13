import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8001,
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  plugins: [vue()],
});
