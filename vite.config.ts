import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// base "./" gör att sidan fungerar oavsett vad repot heter på GitHub.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
