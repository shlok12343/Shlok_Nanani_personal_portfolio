import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Use the GitHub Pages base path so assets resolve correctly in production
  // If you rename the repository, update this to match: "/<repo-name>/"
  base: "/Shlok_Nanani_personal_portfolio/",
});
