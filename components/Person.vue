<template>
  <div class="person flex flex-col w-full justify-center items-center">
    <router-link :to="`/person/${url}`" class="image flex flex-col justify-start items-center w-full">
      <img v-if="person.profile_path" :class="imageStyle" class="object-cover mb-3 rounded-xl p-0.5 w-full" :src="'http://image.tmdb.org/t/p/w342/' + person.profile_path" />
      <img v-if="!person.profile_path" :class="noImageStyle" class="w-full object-cover rounded-xl mb-3" :src="require('~/assets/images/no.svg')" />
    </router-link>
    <strong class="text-xs font-semibold leading-4 text-center w-100">{{ person.name }}</strong>
    <strong v-if="person.character" class="text-xxs font-normal leading-4 text-center w-100">{{ person.character }}</strong>
  </div>
</template>

<script>
import slugify from 'slugify'
export default {
  props: {
    person: {
      type: Object,
      default: () => {
        return {}
      },
    },
    index: {
      type: Number,
      default: null,
    },
    customStyle: {
      type: String,
      default: '',
    },
    imageStyle: {
      type: String,
      default: '',
    },
    noImageStyle: {
      type: String,
      default: '',
    },
  },
  computed: {
    url() {
      if (!this.person || !this.person.id) return ''
      return slugify(`${this.person.name} ${this.person.id}`, {
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
