import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        // Static object avoids circular dependency / "Cannot access before initialization" errors
        manualChunks: {
          // React + Router MUST stay together
          "react-vendor": ["react", "react-dom", "react-router-dom"],

          // Icons — large but not needed for first paint
          "icons": ["lucide-react"],

          // Forms — only needed on contact/form interaction
          "forms": ["react-hook-form", "zod"],

          // Animations — heavy, load separately
          "motion": ["framer-motion"],

          // Toast notifications
          "sonner": ["sonner"],
        },
      },
    },
  },
}));