export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Filmografi',
    htmlAttrs: {
      lang: 'tr',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'target-densitydpi=device-dpi, width=device-width, user-scalable=no, maximum-scale=1, minimum-scale=1',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },

      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/favicon.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon.png',
      },

      {
        rel: 'mask-icon',
        href: '/favicon.png',
        color: '#5bbad5',
      },
      {
        rel: 'shortcut icon',
        href: '/favicon.png',
      },
    ],
  },
  pwa: {
    meta: {
      title: 'Filmografi',
      author: 'EMRE ZAVAR',
      mobileAppIOS: true,
      appleStatusBarStyle: 'black-translucent',
      nativeUI: true,
    },
    manifest: {
      name: 'Filmografi',
      short_name: 'Filmografi',
      lang: 'tr',
    },
    icon: {
      fileName: '/favicon.png',
    },
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
    '@nuxtjs/pwa',
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
