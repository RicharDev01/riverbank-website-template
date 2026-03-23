// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  build: {
    cssCodeSplit: false,
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
        // legales
        intellectualProperty: resolve(__dirname, "intellectual-property.html"),
        shippingDeliveryPolicy: resolve(__dirname, "shipping-delivery-policy.html"),
        termsConditions: resolve(__dirname, "terms-conditions.html"),
        privacyNotice: resolve(__dirname, "privacy-notice.html"),
        accessibilityStatement: resolve(__dirname, "accessibility-statement.html"),
      },
      output: {
        entryFileNames: "main-theme.js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "assets/main-theme.css";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});