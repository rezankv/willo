import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "/src/libs/components"),
      "@constants": path.resolve(__dirname, "/src/libs/constants"),
      "@enums": path.resolve(__dirname, "/src/libs/enums"),
      "@hooks": path.resolve(__dirname, "/src/libs/hooks"),
      "@models": path.resolve(__dirname, "/src/libs/models"),
      "@providers": path.resolve(__dirname, "/src/libs/providers"),
      "@utils": path.resolve(__dirname, "/src/libs/utils"),
      "@assets/icons": path.resolve(__dirname, "/src/libs/assets/icons"),
      "@validations": path.resolve(__dirname, "/src/libs/validations"),
      "@pages": path.resolve(__dirname, "/src/pages"),
    },
  },
});
