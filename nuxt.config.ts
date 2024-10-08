export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui'],
  quasar: {
    config: {
      brand: {
        primary: '#027BE3',
        secondary: '#26A69A',
        accent: '#9C27B0',
        dark: '#1d1d1d',
        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037',
      },
    },
  },
  css: [
    '/assets/css/main.css', // Importar el archivo CSS global
  ],
  devServer: {
    host: '0.0.0.0', // Escuchar en todas las interfaces
    port: 3000, // Puerto en el que se ejecuta tu aplicación
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'es', // Establece el idioma del documento a español
      },
    },
  },
});
