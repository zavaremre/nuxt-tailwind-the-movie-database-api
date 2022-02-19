<template>
  <div class="container">
    {{ $route.query.type }}
    <section class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
      <Titlebar v-if="$route.query.categorie" :title="$route.query.title" />
      <Titlebar v-else title="TÜMÜ" />

      <div class="grid grid-cols-3 sm:grid-cols-6 gap-x-4">
        <div v-for="item in list" :key="item.id" class="mb-4">
          <Person v-if="$route.query.type === 'trending/person/day'" :person="item" custom-style="" image-style="h-auto rounded-lg bg-none" no-image-style="rounded-lg h-32" />
          <Poster v-else :movie="item" />
        </div>
      </div>
      <!-- <div v-if="page !== 1 || total_pages !== page" class="flex justify-between items-center w-full py-3">
        <div><button v-if="total_pages !== 1 && page !== 1" class="px-5 py-1.5 border border-gray-100 rounded-2xl" @click="pageChangeNegative">Önceki Sayfa</button></div>
        {{ page }} / {{ total_pages }}
        <div><button v-if="total_pages >= page" class="px-5 py-1.5 border border-gray-100 rounded-2xl" @click="pageChange">Sonraki Sayfa</button></div>
      </div> -->
    </section>
    <div v-if="list.length" v-observe-visibility="handleScrolledToBottom"></div>
    <!-- <div v-if="page >= total_pages" class="flex justify-center items-center w-full py-3">Hepsi Bu Kadar :)</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      genre: this.$route.params.url.split('-').pop(),
      genreId: this.$route.query.id,
      list: [],
      page: 1,
      total_pages: null,
    }
  },
  async fetch() {
    if (this.genre !== null && this.$route.query.type !== 'trending/person/day') {
      this.list = []
      try {
        this.$axios.get(`/api?action=discover/movie?with_genres=${this.genreId}&language=tr-TR&page=${this.page}`).then((response) => {
          this.list.push(...response.data.results)

          this.total_pages = response.data.total_pages
        })
      } catch (error) {}
    } else {
      try {
        await this.$axios.get(`/api?action=${this.$route.query.type}&language=tr-TR&append_to_response=credits&sort_by=date&page=${this.page}&region=tr`).then((response) => {
          this.list.push(...response.data.results)
          this.page = response.data.page
          this.total_pages = response.data.total_pages
          // if (process.browser) window.scrollTo({ top: 0, behavior: 'smooth' })
        })
      } catch (error) {}
    }
  },
  fetchOnServer: true,
  watch: {
    $route: '$fetch',
  },
  methods: {
    handleScrolledToBottom(isVisible) {
      if (!isVisible) {
        return
      }
      if (this.page >= this.total_pages) {
        return
      }
      this.page++
      this.fetch()
      console.log('first')
    },
    fetch() {
      if (this.genre !== null && this.$route.query.type !== 'trending/person/day') {
        try {
          this.$axios.get(`/api?action=discover/movie?with_genres=${this.genreId}&language=tr-TR&page=${this.page}`).then((response) => {
            this.list.push(...response.data.results)

            this.total_pages = response.data.total_pages
          })
        } catch (error) {}
      } else {
        try {
          this.$axios.get(`/api?action=${this.$route.query.type}&language=tr-TR&append_to_response=credits&sort_by=date&page=${this.page}&region=tr`).then((response) => {
            this.list.push(...response.data.results)
            this.page = response.data.page
            this.total_pages = response.data.total_pages
            // if (process.browser) window.scrollTo({ top: 0, behavior: 'smooth' })
          })
        } catch (error) {}
      }
    },
  },
}
</script>
