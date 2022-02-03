export default {
  async fetchSearchData({ commit }, data) {
    try {
      commit('loading', true)
      await this.$axios.get(`/api?action=search/${data.searchType}/&language=tr-TR&append_to_response=credits&sort_by="date"&query='${data.query}'&page=${data.isPage}&region=tr`).then((response) => {
        commit('searchingMovies', response.data.results)
        commit('loading', false)
      })
    } catch (error) {
      alert(error.message)
    }
  },
}
