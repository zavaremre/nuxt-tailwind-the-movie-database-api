<template>
  <div class="container">
    <section class="flex justify-around items-center fixed bottom-0 right-0 left-0 w-full bg-white dark:bg-stone-900 border-t border-gray-200 dark:border-gray-900">
      <router-link to="/" class="flex flex-col justify-center items-center text-xxs text-center w-full py-2 font-medium">
        <img :src="require('~/assets/images/house.svg')" class="w-4 h-4 mb-2 dark:invert" alt="" />
        Anasayfa
      </router-link>
      <router-link to="/" class="flex flex-col justify-center items-center text-xxs text-center w-full py-2 font-medium">
        <img :src="require('~/assets/images/search.svg')" class="w-4 h-4 mb-2 dark:invert" alt="" />
        Ara
      </router-link>
      <router-link to="/" class="flex flex-col justify-center items-center text-xxs text-center w-full py-2 font-medium">
        <img :src="require('~/assets/images/share.svg')" class="w-4 h-4 mb-2 dark:invert" alt="" />
        Paylaş
      </router-link>
      <router-link to="/" class="flex flex-col justify-center items-center text-xxs text-center w-full py-2 font-medium">
        <img :src="require('~/assets/images/heart.svg')" class="w-4 h-4 mb-2 dark:invert" alt="" />
        Favorilerim
      </router-link>
    </section>
  </div>
</template>
