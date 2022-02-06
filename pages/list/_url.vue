<template>
  <div class="w-full">
    <section class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
      <Titlebar title="TÜMÜ" />
      <div class="grid grid-cols-3 gap-x-4">
        <div v-for="item in list" :key="item.id" class="mb-4">
          <Person v-if="$route.query.person" :person="item" custom-style="" image-style="h-auto rounded-lg bg-none" no-image-style="rounded-lg h-32" />
          <Poster v-if="!$route.query.person" :movie="item" />
        </div>
      </div>
      <div v-if="page !== 1 || total_pages !== page" class="flex justify-between items-center w-full py-3">
        <div><button v-if="total_pages !== 1 && page !== 1" class="px-5 py-1.5 border border-gray-100 rounded-2xl" @click="pageChangeNegative">Önceki Sayfa</button></div>
        {{ page }} / {{ total_pages }}
        <div><button v-if="total_pages >= page" class="px-5 py-1.5 border border-gray-100 rounded-2xl" @click="pageChange">Sonraki Sayfa</button></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      genre: null,
      page: 1,
      total_pages: null,
    }
  },
  async fetch() {
    try {
      await this.$axios.get(`/api?action=${this.$route.query.data}&language=tr-TR&append_to_response=credits&sort_by=date&page=${this.page}&region=tr`).then((response) => {
        this.list = response.data.results
        this.page = response.data.page
        this.total_pages = response.data.total_pages
        if (process.browser) window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    } catch (error) {}
  },
  fetchOnServer: true,
  watch: {
    '$route.query': '$fetch',
  },
  methods: {
    pageChange() {
      try {
        this.list = []
        this.page++
        this.$axios.get(`/api?action=${this.$route.query.data}&language=tr-TR&append_to_response=credits&sort_by=date&page=${this.page}&region=tr`).then((response) => {
          this.list = response.data.results

          this.total_pages = response.data.total_pages
          if (process.browser) window.scrollTo({ top: 0, behavior: 'smooth' })
        })
      } catch (error) {}
    },
    pageChangeNegative() {
      try {
        this.list = []
        this.page--
        this.$axios.get(`/api?action=${this.$route.query.data}&language=tr-TR&append_to_response=credits&sort_by=date&page=${this.page}&region=tr`).then((response) => {
          this.list = response.data.results

          this.total_pages = response.data.total_pages
          if (process.browser) window.scrollTo({ top: 0, behavior: 'smooth' })
        })
      } catch (error) {}
    },
  },
}
</script>
