import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "./",
  build: {
    emptyOutDir: true,
    copyPublicDir: false,
    outDir: "/Users/mora/Workspace/mora/durka-vscode/res/webview/fancy-border-radius",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        fullcontrol: resolve(__dirname, "full-control.html"),
      },
    },
  },
});
