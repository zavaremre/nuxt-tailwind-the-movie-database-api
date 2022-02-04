<template>
  <div class="w-full">
    {{ $route.query.random }}
    <div class="relative flex justify-center items-center w-full h-64 bg-cover bg-blend-overlay bg-black dark:bg-stone-800 bg-opacity-75 after:backdrop-blur-xs after:w-full after:h-full after:absolute after:left-0 after:top-0 after:z-0" :style="`background-image:url(http://image.tmdb.org/t/p/w1280/${detailMovie.backdrop_path})`">
      <div class="container relative z-10 flex justify-center items-center w-full px-5">
        <img class="w-32 rounded-2xl mr-4" :src="`http://image.tmdb.org/t/p/w1280/${detailMovie.poster_path}`" alt="" />
        <div class="w-full">
          <h1 class="text-xl font-semibold text-white break-words w-full">{{ detailMovie.title }}</h1>
          <h1 class="text-xxs font-medium text-white truncate w-full">{{ detailMovie.tagline }}</h1>
          <div class="flex justify-start">
            <div v-for="item in detailMovie.genres" :key="item.id" class="text-xxs text-white mr-2">
              {{ item.name }}
            </div>
          </div>
          <h1><a class="text-xxs font-medium text-white" :href="detailMovie.homepage" target="_blank">Web Sitesi</a></h1>
          <h1 class="text-xxs font-medium text-white truncate w-full">{{ detailMovie.release_date | formatDate('DD MMMM YYYY') }}</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <section class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
        <Titlebar title="FİLM ÖZETİ" />
        <p class="text-xs font-normal leading-6">{{ detailMovie.overview }}</p>
      </section>
      <section class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
        <Titlebar title="OYUNCULAR" />
        <div class="relative w-full flex snap-x snap-mandatory overflow-x-scroll overflow-y-hidden gap-x-5">
          <div v-for="person in detailMovie.credits.cast" :key="person.id" class="flex flex-col min-w-[22.4%] basis-[22.4%]">
            <Person :person="person" />
          </div>
        </div>
      </section>
      <section class="py-5 px-2.5 border-b border-gray-100 dark:border-gray-900">
        <Titlebar title="BENZER FİLMLER" />
        <div class="relative w-full flex snap-x snap-mandatory overflow-y-hidden overflow-x-scroll">
          <div v-for="movie in detailMovie.similar_movies.results" :key="movie.id" class="flex-shrink-0 px-2.5 w-1/3 basis-1/3">
            <Poster :movie="movie" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieId: this.$route.params.url.split('-').pop(),
      detailMovie: {
        credits: {},
        similar_movies: {},
      },
    }
  },

  async fetch() {
    try {
      this.posts = await this.$axios.get(`/api?action=movie/${this.movieId ? this.movieId : this.$route.query.random}&append_to_response=similar_movies,credits,external_ids,include_video,videos,include_video_language,year,with_keywords,with_people,sort_by&sort_by=popularity.asc&page=1&region=tr&language=tr-TR`).then((response) => {
        this.detailMovie = response.data
        if (process.browser) window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    } catch (error) {}
  },
  watch: {
    '$route.query': '$fetch',
  },
}
</script>
