<template>
  <div class="w-full">
    <div class="relative flex justify-center items-center w-full h-64 bg-cover bg-blend-overlay bg-black dark:bg-stone-800 bg-opacity-75 after:backdrop-blur-xs after:w-full after:h-full after:absolute after:left-0 after:top-0 after:z-0" :style="`background-image:url(http://image.tmdb.org/t/p/w1280/${detailMovie.backdrop_path})`">
      <div class="container relative z-10 flex justify-center items-center w-full px-5">
        <img class="w-32 rounded-2xl mr-4" :src="`http://image.tmdb.org/t/p/w1280/${detailMovie.poster_path}`" alt="" />
        <div class="w-full">
          <h1 class="text-xl font-semibold text-white break-words w-full">{{ detailMovie.title }}</h1>
          <h1 class="text-xxs font-medium text-white truncate whitespace-normal w-full">{{ detailMovie.tagline }}</h1>
          <div class="flex justify-start">
            <div v-for="item in detailMovie.genres" :key="item.id" class="text-xxs text-white mr-2">
              {{ item.name }}
            </div>
          </div>
          <h1><a class="text-xxs font-medium text-white" :href="detailMovie.homepage" target="_blank">Web Sitesi</a></h1>
          <h1 class="text-xxs font-medium text-white truncate w-full">{{ detailMovie.release_date | formatDate('DD MMMM YYYY') }}</h1>
          <h1 class="text-lg font-bold text-orange-600 truncate text-left py-0.5">{{ detailMovie.vote_average }}</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <section v-if="detailMovie.videos.results.length" class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
        <Titlebar title="FRAGMAN" />
        <div class="relative w-full flex snap-x snap-mandatory overflow-y-hidden overflow-x-scroll">
          <div v-for="(video, key) in detailMovie.videos.results" :key="key" class="snap-center flex-shrink-0 px-2.5 basis-1/2 w-1/2">
            <div @click="index = key">
              <img :src="`https://img.youtube.com/vi/${video.key}/hqdefault.jpg`" class="border border-gray-100 dark:border-gray-900 w-full object-cover rounded-xl mb-3" :alt="video.name" />
              <h1 class="text-xxs font-medium text-gray-900 dark:text-white leading-5">{{ video.name }}</h1>
              <h2 class="text-xxs font-medium text-gray-900 dark:text-white">{{ video.published_at | formatDate('DD MMMM YYYY') }}</h2>
            </div>
          </div>
          <CoolLightBox name="cool" :items="items" :index="index" :autoplay="true" :use-zoom-bar="true" :full-screen="true" :close-on-click-outside-mobile="true" @close="index = null"> </CoolLightBox>
        </div>
      </section>
      <section class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
        <Titlebar title="FİLM ÖZETİ" />
        <p class="text-xs font-normal leading-6">{{ detailMovie.overview }}</p>
      </section>
      <section class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
        <Titlebar title="OYUNCULAR" />
        <div class="relative w-full flex snap-x snap-mandatory overflow-x-scroll overflow-y-hidden gap-x-5">
          <div v-for="(person, index) in detailMovie.credits.cast" :key="index" class="flex flex-col min-w-[22.4%] basis-[22.4%]">
            <Person :person="person" :index="index" />
          </div>
        </div>
      </section>
      <section class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
        <Titlebar title="YAPIM ŞİRKETLERİ" />
        <div class="relative w-full flex justify-start snap-x snap-mandatory overflow-y-hidden overflow-x-scrol gap-x-4">
          <div v-for="item in detailMovie.production_companies" :key="item.id" class="relative flex justify-center items-center max-w-[25%] min-w-[25%] bg-white rounded-lg p-4">
            <img v-if="item.logo_path" :src="'http://image.tmdb.org/t/p/w1280/' + item.logo_path" alt="" class="" />
            <strong v-if="!item.logo_path" class="flex justify-center items-center text-sm font-bold w-full text-center text-gray-800">
              {{ item.name }}
            </strong>
          </div>
          <div></div>
        </div>
      </section>
      <section class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
        <Titlebar title="SOSYAL MEDYA HESAPLARI" />
        <div class="relative w-full flex justify-center items-center">
          <div v-if="detailMovie.external_ids.facebook_id">
            <a class="p-3 block" :href="'https://www.facebook.com/' + detailMovie.external_ids.facebook_id" target="_blank"> <img class="w-8 h-8" :src="require('~/assets/images/facebook.png')" alt="" /> </a>
          </div>

          <div v-if="detailMovie.external_ids.instagram_id">
            <a class="p-3 block" :href="'https://www.instagram.com/' + detailMovie.external_ids.instagram_id" target="_blank"> <img class="w-8 h-8" :src="require('~/assets/images/instagram.png')" alt="" /> </a>
          </div>
          <div v-if="detailMovie.external_ids.twitter_id">
            <a class="p-3 block" :href="'https://twitter.com/' + detailMovie.external_ids.twitter_id" target="_blank"> <img class="w-8 h-8" :src="require('~/assets/images/twitter.png')" alt="" /> </a>
          </div>
          <div v-if="detailMovie.external_ids.imdb_id">
            <a class="p-3 block" :href="'https://www.imdb.com/title/' + detailMovie.external_ids.imdb_id" target="_blank"> <img class="w-12 h-12" :src="require('~/assets/images/imdb.png')" alt="" /> </a>
          </div>
        </div>
      </section>
      <section v-if="detailMovie.belongs_to_collection" class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
        <Titlebar title="DEVAM FİLMLERİ" />
        <div class="grid grid-cols-3 gap-x-4">
          <div v-for="collection in collectionsList" :key="collection.id" class="mb-4">
            <Poster :movie="collection" />
          </div>
        </div>
      </section>
      <section class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
        <Titlebar title="BENZER FİLMLER" />
        <div class="grid grid-cols-3 gap-x-4">
          <div v-for="movie in detailMovie.similar_movies.results" :key="movie.id" class="mb-4">
            <Poster :movie="movie" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  components: {
    CoolLightBox,
  },

  data() {
    return {
      index: null,
      items: [],
      movieId: this.$route.params.url.split('-').pop(),
      collections: [],
      collectionsList: [],
      collectionsId: null,
      detailMovie: {
        belongs_to_collection: {},
        external_ids: {
          facebook_id: null,
          imdb_id: null,
          instagram_id: null,
          twitter_id: null,
        },
        credits: {},
        similar_movies: {},
        videos: {
          results: [],
        },
      },
    }
  },

  async fetch() {
    try {
      this.posts = await this.$axios.get(`/api?action=movie/${this.movieId ? this.movieId : this.$route.query.random}&append_to_response=similar_movies,credits,external_ids,include_video,videos,include_video_language,year,with_keywords,with_people,sort_by&sort_by=popularity.asc&page=1&region=tr&language=tr-TR`).then((response) => {
        this.detailMovie = response.data
        response.data.videos.results.forEach((el) => {
          this.items.push('https://www.youtube.com/watch?v=' + el.key)
        })
        this.collections = response.data.belongs_to_collection
        this.collectionsId = response.data.belongs_to_collection.id

        if (process.browser) window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    } catch (error) {}
    try {
      this.posts = await this.$axios.get(`/api?action=collection/${this.collectionsId}&region=tr&language=tr-TR`).then((response) => {
        this.collectionsList = response.data.parts
      })
    } catch (error) {}
  },
  watch: {
    '$route.query': '$fetch',
  },
}
</script>
