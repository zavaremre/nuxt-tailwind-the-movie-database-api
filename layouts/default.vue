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
    htmlAttrs: {
      class: '',
      lang: 'tr',
    },
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
