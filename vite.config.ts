import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api/offerings.xlsx": {
        target: "https://edfirstadmin-my.sharepoint.com",
        changeOrigin: true,
        secure: true,
        rewrite: () =>
          "/:x:/g/personal/admin_edfirst_in/IQCu2RUdpZBPQpgPaUCSoQNWAUpOWYPNfVEARX-dshwey9I?download=1",
      },
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
  build: {
    outDir: "dist",
  },
}));
