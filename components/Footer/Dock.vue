<template>
  <div class="container">
    <section class="flex justify-around items-center fixed bottom-0 right-0 left-0 z-[99] w-full bg-white dark:bg-stone-900 border-t border-gray-200 dark:border-gray-900">
      <router-link to="/" class="flex flex-col justify-center items-center text-xxs text-center w-full py-2 font-medium">
        <img :src="require('~/assets/images/house.svg')" class="w-4 h-4 mb-2 dark:invert" alt="" />
        Anasayfa
      </router-link>
      <button class="flex flex-col justify-center items-center text-xxs text-center w-full py-2 font-medium" @click="menu = !menu">
        <img :src="require('~/assets/images/list.svg')" class="w-4 h-4 mb-2 dark:invert" alt="" />
        Kategoriler
      </button>
      <router-link to="/" class="flex flex-col justify-center items-center text-xxs text-center w-full py-2 font-medium">
        <img :src="require('~/assets/images/share.svg')" class="w-4 h-4 mb-2 dark:invert" alt="" />
        Paylaş
      </router-link>
      <router-link to="/" class="flex flex-col justify-center items-center text-xxs text-center w-full py-2 font-medium">
        <img :src="require('~/assets/images/heart.svg')" class="w-4 h-4 mb-2 dark:invert" alt="" />
        Favorilerim
      </router-link>
    </section>

    <div v-if="menu" class="fixed flex flex-col justify-end items-center backdrop-blur-10 w-full h-full left-0 bottom-0 z-50 px-4">
      <div class="relative flex flex-col justify-start items-center w-full h-[60%] bottom-16 rounded-t-3xl z-40 bg-white dark:bg-stone-900 overflow-y-scroll px-4 py-16">
        <button class="absolute flex justify-center items-center right-0 top-0 p-3 w-5 h-5 rounded-full bg-white bg-opacity-95 m-4 text-gray-900" @click="menu = !menu">X</button>
        <div v-for="item in categories" :key="item.id">
          <router-link class="block text-lg font-semibold py-2.5 uppercase" :to="`/list/${url(item.title)}?id=${item.id}`">{{ item.title }}</router-link>
        </div>
      </div>
      <div class="overlay fixed inset-0 z-10 w-full h-full bg-gray-600 bg-opacity-80 bottom-16" @click="menu = !menu"></div>
    </div>
  </div>
</template>
<script>
import slugify from 'slugify'
export default {
  data() {
    return {
      menu: false,
      categories: [
        {
          title: 'Aksiyon',
          id: '28',
        },
        {
          title: 'Macera',
          id: '12',
        },
        {
          title: 'Animasyon',
          id: '16',
        },
        {
          title: 'Komedi',
          id: '35',
        },
        {
          title: 'Suç',
          id: '80',
        },
        {
          title: 'Belgesel',
          id: '99',
        },
        {
          title: 'Dram',
          id: '18',
        },
        {
          title: 'Aile',
          id: '10751',
        },
        {
          title: 'fantezi',
          id: '14',
        },
        {
          title: 'Tarih',
          id: '36',
        },
        {
          title: 'Korku',
          id: '27',
        },
        {
          title: 'Müzik',
          id: '10402',
        },
        {
          title: 'Gizem',
          id: '9648',
        },
        {
          title: 'Romantik',
          id: '10749',
        },
        {
          title: 'Bilimkurgu',
          id: '878',
        },
        {
          title: 'TV Filmi',
          id: '10770',
        },
        {
          title: 'Gerilim',
          id: '53',
        },
        {
          title: 'Savaş',
          id: '10752',
        },
        {
          title: 'Batılı',
          id: '37',
        },
      ],
    }
  },
  watch: {
    $route(to, from) {
      this.menu = false
    },
  },
  methods: {
    url(title) {
      if (!title) return ''
      return slugify(`${title}`, {
        replacement: '-',
        remove: undefined,
        lower: true,
        locale: 'tr',
        trim: true,
      })
    },
  },
}
</script>
