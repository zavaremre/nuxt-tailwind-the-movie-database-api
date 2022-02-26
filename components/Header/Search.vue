<template>
  <form @submit.prevent="getfetch()">
    <div class="search-wrapper flex w-full">
      <select v-model="searchType" class="search-type bg-gray-100 dark:bg-stone-900 h-100 rounded-l-3xl text-center focus:outline-0 text-xxs font-medium w-32 border-r border-gray-200 px-5 dark:border-stone-800 focus:outline-none">
        <option selected value="movie">Film</option>
        <option value="tv">Dizi</option>
        <option value="person">Oyuncu</option>
      </select>

      <input v-model="query" name="q" autocomplete="true" type="search" class="search-bar rounded-none appearance-none bg-gray-100 dark:bg-stone-900 h-100 w-full px-3 text-xxs focus:outline-none" placeholder="Ne aramıştınız...?" aria-describedby="button-addon2" />
      <button type="submit" class="search-bar-button bg-red-700 dark:bg-stone-800 text-white font-medium py-2 px-5 h-100 text-xxs rounded-r-3xl">Ara</button>
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
<style lang="css">
select {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  text-indent: 4px;
}
@media (prefers-color-scheme: dark) {
  select {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  }
}
@supports (-webkit-overflow-scrolling: touch) {
  .search-bar {
    font-size: 16px;
  }
}
</style>
