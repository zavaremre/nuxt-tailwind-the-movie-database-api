<template>
  <div class="movie relative flex flex-col w-full justify-start h-full">
    <router-link :to="`/detail/${url}`" class="relative h-full">
      <img v-if="movie.poster_path" class="w-full object-cover rounded-xl mb-3" :src="'http://image.tmdb.org/t/p/w185/' + movie.poster_path" />
      <img v-if="!movie.poster_path" class="w-full object-cover rounded-xl mb-3" :src="require('~/assets/images/no.svg')" />

      <strong v-if="movie.media_type === 'tv'" class="absolute right-3 top-3 bg-red-800 rounded-md font-medium text-xs text-white px-5">DİZİ</strong>
    </router-link>
    <h6 v-if="movie.title" class="text-xxs text-center font-medium leading-3">
      {{ movie.title }}
    </h6>
    <h6 v-if="movie.name" class="text-xxs text-center font-medium leading-3">
      {{ movie.name }}
    </h6>
    <small class="text-xxs text-center">{{ movie.release_date | formatDate('DD MMMM YYYY') }}</small>
  </div>
</template>

<script>
import slugify from 'slugify'
export default {
  props: {
    movie: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      testCollection: [],
    }
  },
  computed: {
    url() {
      if (!this.movie || !this.movie.id) return ''
      return slugify(`${this.movie.title} ${this.movie.id}`, {
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
