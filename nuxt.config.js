export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tailwind',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/moment.js', '~/plugins/vue-observe-visibility'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components'],
  },
  server: {
    port: '3000',
    host: '0.0.0.0',
  },

  serverMiddleware: [
    // Will register file from project server-middleware directory to handle /server-middleware/* requires
    {
      path: '/api/',
      handler: '~/server-middleware/tmdb-proxy.controller.js',
    },
  ],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],
  axios: {
    baseUrl: process.env.BASEURL || '',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        prettify: false,
      },
    },
  },
}
