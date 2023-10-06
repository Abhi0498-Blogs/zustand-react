import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      enabled: true,
      exclude: ["src/**/*.test.jsx"],
      reporters: ["html"],
    },
  },
});
