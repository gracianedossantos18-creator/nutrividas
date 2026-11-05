import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: { "*": "vp check --fix" },
  server: {
    proxy: { "/api": "http://localhost:3000" },
  },
});
