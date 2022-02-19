<template>
  <section class="container">
    <section class="border-b border-gray-100 dark:border-gray-900">
      <div class="bg-gray-100 dark:bg-stone-900 w-full h-28"></div>
      <div class="flex flex-col justify-center items-center w-full -mt-16">
        <div>
          <img v-if="person.profile_path" class="w-[115px] h-[115px] object-cover mb-3 rounded-full p-0.5 bg-gradient-to-r from-pink-500 to-yellow-500" :src="'http://image.tmdb.org/t/p/w342/' + person.profile_path" />
          <div v-if="!person.profile_path" class="w-[115px] h-[115px] flex justify-center items-center text-white font-bold mb-3 rounded-full p-0.5 bg-gradient-to-r from-pink-500 to-yellow-500 text-center text-xxs leading-3">GÖRSEL<br />YOK</div>
        </div>
        <h1 class="text-lg font-semibold -mb-3">{{ person.name }}</h1>
      </div>
      <section class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
        <div class="flex flex-col justify-center items-center w-full">
          <strong class="mb-2 font-semibold text-xs">{{ person.known_for_department.replace('Acting', 'Aktör').replace('Directing', 'Yönetmen') }}</strong>
          <strong class="mb-2 font-semibold text-xs">{{ age }}</strong>
          <strong class="mb-2 font-semibold text-xs">{{ person.birthday | formatDate('DD MMMM YYYY') }}</strong>
          <strong class="mb-2 font-semibold text-xs">{{ person.place_of_birth }}</strong>
          <strong v-if="person.deathday" class="mb-2 font-semibold text-xs">{{ person.deathday | formatDate('DD MMMM YYYY') }}</strong>
        </div>
      </section>
      <section class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
        <Titlebar title="SOSYAL MEDYA HESAPLARI" />
        <div class="relative w-full flex justify-center items-center">
          <div v-if="person.external_ids.facebook_id">
            <a class="p-3 block" :href="'https://www.facebook.com/' + person.external_ids.facebook_id" target="_blank"> <img class="w-8 h-8" :src="require('~/assets/images/facebook.png')" alt="" /> </a>
          </div>

          <div v-if="person.external_ids.instagram_id">
            <a class="p-3 block" :href="'https://www.instagram.com/' + person.external_ids.instagram_id" target="_blank"> <img class="w-8 h-8" :src="require('~/assets/images/instagram.png')" alt="" /> </a>
          </div>
          <div v-if="person.external_ids.twitter_id">
            <a class="p-3 block" :href="'https://twitter.com/' + person.external_ids.twitter_id" target="_blank"> <img class="w-8 h-8" :src="require('~/assets/images/twitter.png')" alt="" /> </a>
          </div>
          <div v-if="person.external_ids.imdb_id">
            <a class="p-3 block" :href="'https://www.imdb.com/title/' + person.external_ids.imdb_id" target="_blank"> <img class="w-12 h-12" :src="require('~/assets/images/imdb.png')" alt="" /> </a>
          </div>
        </div>
      </section>
      <section class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
        <Titlebar title="BİYOGRAFİ" />
        <p v-if="person.biography" class="text-xs font-normal leading-6">{{ person.biography }}</p>
        <p v-if="!person.biography" class="text-xs font-normal leading-6">Biyografi bilgisi eklenmemiş!</p>
      </section>
      <section class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
        <Titlebar title="GALERİ" />
        <div class="grid grid-cols-4 sm:grid-cols-8 gap-x-4">
          <div v-for="(item, key) in images" :key="key">
            <img class="object-cover mb-4 rounded-lg" :src="'http://image.tmdb.org/t/p/w342/' + item.file_path" @click="index = key" />
          </div>
          <CoolLightBox name="cool" :items="items" :index="index" :autoplay="true" :use-zoom-bar="true" :full-screen="true" :close-on-click-outside-mobile="true" @close="index = null"> </CoolLightBox>
        </div>
      </section>
      <section class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
        <Titlebar title="OYUNCUNUN FİLMLERİ" />
        <div class="grid grid-cols-3 sm:grid-cols-6 gap-x-4">
          <div v-for="item in cast" :key="item.id" class="mb-4">
            <Poster :movie="item" />
          </div>
          <div v-if="cast.length"></div>
        </div>
      </section>
    </section>
  </section>
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
      personId: this.$route.params.url.split('-').pop(),
      cast: {},
      images: {},
      person: {
        external_ids: {
          facebook_id: null,
          imdb_id: null,
          instagram_id: null,
          twitter_id: null,
        },
        known_for_department: '',
      },
      page: 1,
    }
  },

  async fetch() {
    try {
      const { data } = await this.$axios.get(`/api?action=person/${this.personId}&append_to_response=similar_movies,credits,external_ids,include_video,videos,include_video_language,year,with_keywords,with_people,sort_by&sort_by=popularity.asc&page=${this.page}&region=tr&language=tr-TR`)
      this.person = data
      const { data: castData } = await this.$axios.get(`/api?action=person/${this.personId}/combined_credits&append_to_response=similar_movies,credits,external_ids,include_video,videos,include_video_language,year,with_keywords,with_people,sort_by&sort_by=popularity.asc&page=${this.page}&region=tr&language=tr-TR`)
      this.cast = castData.cast
      const { data: images } = await this.$axios.get(`/api?action=person/${this.personId}/images`)
      this.images = images.profiles

      images.profiles.forEach((el) => {
        this.items.push('http://image.tmdb.org/t/p/w342/' + el.file_path)
      })
    } catch (error) {
      console.log(error.message)
    }
  },
  computed: {
    age() {
      if (!this.person || !this.person.birthday) return ''
      if (this.person.deathday) return ''
      return this.$moment().from(this.person.birthday, 'YYYY-MM-DD').replace('yıl', 'Yaşında')
    },
  },

  watch: {
    '$route.query': '$fetch',
  },
  methods: {
    infinityScroll(isVisible) {
      // eslint-disable-next-line no-useless-return
      if (!isVisible) {
        return
      }
      if (this.page <= this.person.credits.cast.length) {
        return
      }

      this.page++
      this.fetch()
    },
  },
}
</script>

<style lang="scss" scoped></style>
