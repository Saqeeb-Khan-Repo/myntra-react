// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Get the base path from the homepage property in package.json
const base = "/myntra-react/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 🔑 Crucial step for GitHub Pages subdirectories
  base: base,
});
