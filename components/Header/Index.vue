<template>
  <header class="relative py-5 px-4 border-b border-gray-100 dark:border-gray-900 w-full">
    <button v-if="$route.fullPath !== '/'" class="absolute left-0 top-0 p-4 h-16 w-16 z-10" @click="$router.go(-1)">
      <img :src="require('~/assets/images/chevron-left.svg')" class="w-6 h-6 dark:invert" alt="" />
    </button>

    <section class="container">
      <div class="logo flex justify-center items-center w-full pb-5">
        <router-link to="/" class="font-bold text-xl">Filmografi</router-link>
      </div>
    </section>
    <button class="absolute right-0 top-0 p-4 h-16 w-16 z-10" @click="reload">
      <img :src="require('~/assets/images/reload.svg')" class="w-6 h-6 dark:invert" alt="" />
    </button>
    <section class="container">
      <div class="search">
        <HeaderSearch />
      </div>
    </section>
  </header>
</template>
<script>
export default {
  get currentRoute() {
    return this.history && this.history.current
  },
  methods: {
    reload() {
      this.$router.go(this.$router.currentRoute)
    },
  },
}
</script>
