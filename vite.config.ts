// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(async () => {
  // Production base for GitHub Pages project site (repo name)
  const repoBase = "/jayakumarm/";

  // Build list of plugins; conditionally add Replit dev-only plugins
  const plugins = [react(), runtimeErrorOverlay()];

  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    // dynamic import of replit dev plugins only in dev/replit environments
    const carto = await import("@replit/vite-plugin-cartographer").then((m) => m.cartographer());
    const devBanner = await import("@replit/vite-plugin-dev-banner").then((m) => m.devBanner());
    plugins.push(carto, devBanner);
  }

  return {
    base: process.env.NODE_ENV === "production" ? repoBase : "/",
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    root: path.resolve(__dirname, "client"),
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
      sourcemap: false, // avoid eval/source-map issues in prod
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
