// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
runtimeConfig: {
    public: {
      apiEndpoint: process.env.API_ENDPOINT,
    },
  },

  css: [
    // CSS file in the project
    '@/assets/css/main.css',
    
     // SCSS file in the project
   
  ]
})
