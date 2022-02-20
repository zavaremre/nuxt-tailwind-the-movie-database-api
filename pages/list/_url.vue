<template>
  <span>
    {{ $route.query.dicover }}
    <section v-if="genre !== null && genreId" class="bg-gray-100 dark:bg-stone-800 py-4">
      <div class="container">
        <div class="filter flex sm:flex-row justify-center items-center w-full px-4 sm:px-0">
          <select v-model="shortBy" class="bg-white dark:bg-stone-900 rounded-3xl focus:outline-0 w-full py-2.5 px-4 mr-3 text-md" @change="filter">
            <option value="popularity.asc">Popülerlik -(Düşükten Yükseğe)</option>
            <option value="popularity.desc">Popülerlik - (Yüksekten Düşüğe)</option>
            <option value="release_date.asc">Yayın Tarihi - (Düşükten Yükseğe)</option>
            <option value="release_date.desc">Yayın Tarihi - (Yüksekten Düşüğe)</option>
            <option value="revenue.asc">Düşük Bütçeli</option>
            <option value="revenue.desc">Yüksek Bütçeli</option>
            <option value="primary_release_date.asc">Çıkış Tarihi - (Düşükten Yükseğe)</option>
            <option value="primary_release_date.desc">Çıkış Tarihi - (Yüksekten Düşüğe)</option>
            <option value="original_title.asc">Orjinal İsme Göre -(Düşükten Yükseğe)</option>
            <option value="original_title.desc">Orjinal İsme Göre - (Yüksekten Düşüğe)</option>
            <option value="vote_average.asc">Oy Ortalaması (Düşükten Yükseğe)</option>
            <option value="vote_average.desc">Oy Ortalaması (Yüksekten Düşüğe)</option>
            <option value="vote_count.asc">Oy Sayısı - (Düşükten Yükseğe)</option>
            <option value="vote_count.desc">Oy Sayısı - (Yüksekten Düşüğe)</option>
          </select>
          <input v-model="year" class="bg-white dark:bg-stone-900 rounded-3xl focus:outline-0 w-full py-2.5 px-4 ml-3 text-md" type="number" name="" placeholder="Film Yılı" @change="filter" />
        </div>
      </div>
    </section>
    <div class="container">
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
  </span>
</template>

<script>
export default {
  data() {
    return {
      year: null,
      with_keywords: '',
      shortBy: 'popularity.desc',
      genre: this.$route.params.url.split('-').pop(),
      genreId: this.$route.query.id,
      list: [],
      page: 1,
      total_pages: null,
    }
  },
  async fetch() {
    this.list = []
    await this.$axios.get(`/api?action=${this.$route.query.type ? this.$route.query.type : 'discover/movie'}?with_genres=${this.genreId}&language=tr-TR&sort_by=${this.shortBy}&page=${this.page}`).then((response) => {
      this.list.push(...response.data.results)
      this.total_pages = response.data.total_pages
    })
  },
  fetchOnServer: true,
  watch: {
    $route: '$fetch',
  },
  methods: {
    filter() {
      this.list = []
      try {
        this.$axios.get(`/api?action=discover/movie?with_genres=${this.genreId}&language=tr-TR&primary_release_year=${this.year}&sort_by=${this.shortBy}&with_keywords=${this.with_keywords}&page=${this.page}`).then((response) => {
          this.list.push(...response.data.results)

          this.total_pages = response.data.total_pages
        })
      } catch (error) {}
    },
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
          this.$axios.get(`/api?action=discover/movie?with_genres=${this.genreId}&language=tr-TR&sort_by=${this.shortBy}&page=${this.page}`).then((response) => {
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
