<template>
  <section class="container">
    <!-- <section class="py-5 px-2.5 border-b border-gray-100 dark:border-gray-900">
      <Titlebar title="YAKINDA VİZYONDA" />
      <List action="movie/upcoming" custom-style="w-full basis-full">
        <template #content="{ item }">
          <router-link v-if="item.backdrop_path !== null" :to="`/detail/${url}`" class="relative h-full">
            <div class="relative">
              <img :src="'http://image.tmdb.org/t/p/w1280/' + item.backdrop_path" class="w-full h-auto rounded-lg" alt="" />
              <h6 class="absolute bottom-0 text-white px-6 py-4 w-full bg-black bg-opacity-60 rounded-b-lg font-semibold text-lg">{{ item.title }}</h6>
            </div>
          </router-link>
        </template>
      </List>
    </section> -->
    <section class="py-5 px-2.5 border-b border-gray-100 dark:border-gray-900">
      <Titlebar title="HAFTANIN TREND OYUNCULARI" />
      <List action="trending/person/day" custom-style="w-1/4 basis-1/4">
        <template #content="{ item }">
          <Person :person="item" />
        </template>
      </List>
    </section>
    <section class="py-5 px-2.5 border-b border-gray-100 dark:border-gray-900">
      <Titlebar title="VİZYONDAKİLER" />
      <List action="movie/now_playing">
        <template #content="{ item }">
          <Poster :movie="item" />
        </template>
      </List>
    </section>

    <section class="py-5 px-2.5 border-b border-gray-100 dark:border-gray-900">
      <Titlebar title="TREND FİLMLER" />
      <List action="movie/popular">
        <template #content="{ item }">
          <Poster :movie="item" />
        </template>
      </List>
    </section>
    <section class="py-5 px-2.5 border-b border-gray-100 dark:border-gray-900">
      <Titlebar title="EFSANE OLMUŞ FİLMLER" />
      <List action="movie/top_rated">
        <template #content="{ item }">
          <Poster :movie="item" />
        </template>
      </List>
    </section>
    <section class="py-5 px-2.5 border-b border-gray-100 dark:border-gray-900">
      <Titlebar title="YAKINDA VİZYONDA" />
      <List action="movie/upcoming">
        <template #content="{ item }">
          <Poster :movie="item" />
        </template>
      </List>
    </section>
  </section>
</template>
