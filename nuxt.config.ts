export default defineNuxtConfig({
  modules: ["@nuxt/ui-pro"],

  // เปิดใช้งาน future compatibility
  future: {
    compatibilityVersion: 4,
  },

  // CSS Imports
  css: ["~/assets/css/main.css"],

  // DevTools และ Debug
  devtools: { enabled: true },

  // Environment variables
  runtimeConfig: {
    // Private keys (only available on server-side)
    nuxtUiProLicense: process.env.NUXT_UI_PRO_LICENSE,

    // Public keys (exposed to client-side)
    public: {
      appName: process.env.PUBLIC_APP_NAME || "New Watchman",
      apiBaseUrl: process.env.PUBLIC_API_BASE_URL || "http://localhost:3000",
    },
  },

  // Nuxt UI Pro Configuration
  uiPro: {
    license: process.env.NUXT_UI_PRO_LICENSE,
  },

  // UI Configuration
  ui: {
    theme: {
      colors: ["primary", "secondary", "success", "warning", "error"],
      transitions: true,
    },
    fonts: true,
    colorMode: true,
  },
});
