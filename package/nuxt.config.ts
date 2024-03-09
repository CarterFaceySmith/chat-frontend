import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '@/assets/css/unit.css'
  ],
  ssr: false,
  typescript: {
    shim: false,
  },
  app: {
    head: {
      title:
        "MaterialPro Free Nuxt 3 Dashboard",
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  nitro: {
    serveStatic: true,
  },
  sourcemap: { server: false, client: false },
  devServerHandlers: [],
});
