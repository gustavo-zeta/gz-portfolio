import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// React for JSX, Tailwind v4 as a first-class Vite plugin.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
