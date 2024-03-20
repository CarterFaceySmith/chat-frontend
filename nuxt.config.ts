import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
  // modules: ['@nuxtjs/tailwindcss', '@nuxtjs/axios'],
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
    static: true,
    // serveStatic: true,
    // routeRules: {
    //   '/api': { proxy: 'http://localhost:8001/' },

    // },
    devProxy: {
      "/api": {
        target: "http://localhost:8001/api", // 这里是接口地址
        changeOrigin: true,
      },
    },

    // devProxy: {
    //   '/api': {
    //     target: 'http://localhost:8001/',
    //     changeOrigin: true
    //   }
    // }
  },
  sourcemap: { server: false, client: false }
});