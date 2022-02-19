<template>
  <main class="font-sans">
    <Header />
    <section class="pb-10 mb-10">
      <router-link class="text-white rounded-20 block border-b border-gray-900 p-2" to="/aut/profile">Profilim</router-link>
      <router-link class="text-white rounded-20 block border-b border-gray-900 p-2" to="/aut/register">Kayıt Ol</router-link>
      <router-link class="text-white rounded-20 block border-b border-gray-900 p-2" to="/aut/login">Giriş</router-link>
      <router-link class="text-white rounded-20 block border-b border-gray-900 p-2" to="/aut/reset-password">Şifremi Sıfırla</router-link>
      <router-link class="text-white rounded-20 block border-b border-gray-900 p-2" to="/aut/customer">customer</router-link>
      <router-link class="text-white rounded-20 block border-b border-gray-900 p-2" to="/aut/register-admin">Admin Girişi</router-link>
      <router-link class="text-white rounded-20 block border-b border-gray-900 p-2" to="/aut/admin">Admin</router-link>
      <Nuxt />
    </section>
    <FooterDock />
  </main>
</template>
