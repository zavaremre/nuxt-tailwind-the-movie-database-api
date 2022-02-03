<template>
  <form @submit.prevent="getfetch()">
    <div class="search-wrapper flex w-full">
      <select v-model="searchType" class="bg-gray-100 dark:bg-stone-900 h-100 rounded-l-3xl text-center focus:outline-0 text-xxs font-medium w-32 border-r border-gray-200 dark:border-stone-800 appearance-none">
        <option selected value="movie">Film</option>
        <option value="tv">Dizi</option>
        <option value="person">Oyuncu</option>
      </select>

      <input v-model="query" name="q" autocomplete="true" type="search" class="search-bar bg-gray-100 dark:bg-stone-900 h-100 w-full px-3 text-xxs focus:outline-0" placeholder="Ne aramıştınız...?" aria-describedby="button-addon2" />
      <button type="submit" class="search-bar-button bg-red-700 dark:bg-stone-800 font-medium py-2 px-5 h-100 text-xxs rounded-r-3xl">Ara</button>
    </div>
  </form>
</template>
<script>
// import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      isPage: 1,
      query: '',
      searchType: 'movie',
      focus: false,
    }
  },

  watch: {
    searchType(value) {
      return this.$store.commit('global/genre', value)
    },
  },
  methods: {
    getfetch(e) {
      this.$store.dispatch('global/fetchSearchData', {
        e,
        isPage: this.isPage,
        search: true,
        query: this.query,
        searchType: this.searchType,
        loading: this.loading,
      })
      this.$router.push('/search')
    },
  },
}
</script>
