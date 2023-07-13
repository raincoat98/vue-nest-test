import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve, join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8001,
    open: true, // 브라우저 자동 실행
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
  build: {
    outDir: join(__dirname, "..", "./backend/front"), // 빌드 파일 설치 경로
    rollupOptions: {},
  },
  plugins: [vue()],
});
