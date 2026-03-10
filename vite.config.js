// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about-us.html"),
        contact: resolve(__dirname, "contact.html"),
        // agrega todas las demás páginas
        serviceBlueprint: resolve(__dirname, "service-blueprint.html"),
        serviceEducation: resolve(__dirname, "service-education.html"),
        servicePartnership: resolve(__dirname, "service-partnership.html"),
        // errores
        notFound: resolve(__dirname, "404.html"),
        serverError: resolve(__dirname, "500.html"),
        commingSoon: resolve(__dirname, "comming-soon.html"),
      },
    },
  },
});