// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // [EXEMPLO] /config]
  runtimeConfig: {
    // As chaves privadas que estão disponíveis apenas no lado do servidor
    apiSecret: '123-privado',    
    public: {
      // Chaves públicas também são expostas no lado do cliente
      apiBase: '/api-public'
    }
  },






  
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: ["~/plugins/preline.client.ts"],
  modules: [
    "@nuxtjs/tailwindcss" ,
  ]
})