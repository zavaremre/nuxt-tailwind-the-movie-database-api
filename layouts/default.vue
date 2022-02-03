<template>
  <main class="font-sans">
    <Header />
    <section class="pb-10 mb-10"><Nuxt /></section>
    <FooterDock />
  </main>
</template>
<script>
export default {
  head: {
    // title: 'my website title',
    htmlAttrs: {
      class: '',
      lang: 'tr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description',
      },
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700;900&display=swap',
      },
    ],
  },
}
</script>
