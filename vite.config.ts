import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  // resolve: {
  //   alias: {
  //     "@awesome-todo/components": "./src/components/*",
  //     "@awesome-todo/constants": "./src/constants/*",
  //     "@awesome-todo/enums": "./src/enums/*",
  //     "@awesome-todo/hooks": "./src/hooks/*",
  //     "@awesome-todo/models": "./src/models/*",
  //     "@awesome-todo/pages": "./src/pages/*",
  //     "@awesome-todo/providers": "./src/providers/*",
  //     "@awesome-todo/utils": "./src/utils/*",
  //   },
  // },
});
