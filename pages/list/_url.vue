<template>
  <span>
    {{ $route.params.id }}
    <section v-if="genre !== null && genreId" class="bg-gray-100 dark:bg-stone-800 py-4">
      <div class="container">
        <div class="filter flex flex-col sm:flex-row justify-center items-center w-full px-4 sm:px-0">
          <select v-model="shortBy" class="bg-white dark:bg-stone-900 rounded-3xl focus:outline-0 w-full py-2.5 px-4 mr-3 text-md mb-3 sm:mb-0">
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
          <select v-model="year" class="bg-white dark:bg-stone-900 rounded-3xl focus:outline-0 w-full py-2.5 px-4 mr-3 text-md mb-3 sm:mb-0" name="">
            <option value="" selected disabled>Film Yılı</option>
            <option value="">Herhangi Bir Tarih</option>
            <option value="1923">1923</option>
            <option value="1924">1924</option>
            <option value="1925">1925</option>
            <option value="1926">1926</option>
            <option value="1927">1927</option>
            <option value="1928">1928</option>
            <option value="1929">1929</option>
            <option value="1930">1930</option>
            <option value="1931">1931</option>
            <option value="1932">1932</option>
            <option value="1933">1933</option>
            <option value="1934">1934</option>
            <option value="1935">1935</option>
            <option value="1936">1936</option>
            <option value="1937">1937</option>
            <option value="1938">1938</option>
            <option value="1939">1939</option>
            <option value="1940">1940</option>
            <option value="1941">1941</option>
            <option value="1942">1942</option>
            <option value="1943">1943</option>
            <option value="1944">1944</option>
            <option value="1945">1945</option>
            <option value="1946">1946</option>
            <option value="1947">1947</option>
            <option value="1948">1948</option>
            <option value="1949">1949</option>
            <option value="1950">1950</option>
            <option value="1951">1951</option>
            <option value="1952">1952</option>
            <option value="1953">1953</option>
            <option value="1954">1954</option>
            <option value="1955">1955</option>
            <option value="1956">1956</option>
            <option value="1957">1957</option>
            <option value="1958">1958</option>
            <option value="1959">1959</option>
            <option value="1960">1960</option>
            <option value="1961">1961</option>
            <option value="1962">1962</option>
            <option value="1963">1963</option>
            <option value="1964">1964</option>
            <option value="1965">1965</option>
            <option value="1966">1966</option>
            <option value="1967">1967</option>
            <option value="1968">1968</option>
            <option value="1969">1969</option>
            <option value="1970">1970</option>
            <option value="1971">1971</option>
            <option value="1972">1972</option>
            <option value="1973">1973</option>
            <option value="1974">1974</option>
            <option value="1975">1975</option>
            <option value="1976">1976</option>
            <option value="1977">1977</option>
            <option value="1978">1978</option>
            <option value="1979">1979</option>
            <option value="1980">1980</option>
            <option value="1981">1981</option>
            <option value="1982">1982</option>
            <option value="1983">1983</option>
            <option value="1984">1984</option>
            <option value="1985">1985</option>
            <option value="1986">1986</option>
            <option value="1987">1987</option>
            <option value="1988">1988</option>
            <option value="1989">1989</option>
            <option value="1990">1990</option>
            <option value="1991">1991</option>
            <option value="1992">1992</option>
            <option value="1993">1993</option>
            <option value="1994">1994</option>
            <option value="1995">1995</option>
            <option value="1996">1996</option>
            <option value="1997">1997</option>
            <option value="1998">1998</option>
            <option value="1999">1999</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
          <select v-model="lang" class="bg-white dark:bg-stone-900 rounded-3xl focus:outline-0 w-full py-2.5 px-4 mr-3 text-md mb-3 sm:mb-0" name="">
            <option value="" selected disabled>Yerlimi - Yabancımı ?</option>
            <option value="tr">Yerli Filmler</option>
            <option value="">Tüm Filmler</option>
          </select>
          <select v-model="adult" class="bg-white dark:bg-stone-900 rounded-3xl focus:outline-0 w-full py-2.5 px-4 mr-3 text-md mb-3 sm:mb-0" name="">
            <option value="" selected disabled>+18</option>
            <option value="true">Yetişkin İçerik Açık</option>
            <option value="false">Yetişkin İçerik Kapalı</option>
          </select>
          <button class="bg-white dark:bg-stone-900 rounded-3xl focus:outline-0 py-2.5 px-4 text-sm font-semibold" @click="filter">Filtrele</button>
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
      adult: true,
      year: '',
      with_keywords: '',
      lang: '',
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
    await this.$axios.get(`/api?action=${this.$route.query.type ? this.$route.query.type : `discover/movie?sort_by=${this.shortBy}&primary_release_year=${this.year}&certification_country=${this.lang}&with_original_language=${this.lang}&with_genres=${this.genreId}`}?&page=${this.page}&language=tr-TR&region=tr`).then((response) => {
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
        this.$axios.get(`/api?action=${this.$route.query.type ? this.$route.query.type : `discover/movie?sort_by=${this.shortBy}&primary_release_year=${this.year}&certification_country=${this.lang}&with_original_language=${this.lang}&with_genres=${this.genreId}`}?&page=${this.page}&language=tr-TR&region=tr`).then((response) => {
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
      try {
        this.$axios.get(`/api?action=${this.$route.query.type ? this.$route.query.type : `discover/movie?sort_by=${this.shortBy}&primary_release_year=${this.year}&certification_country=${this.lang}&with_original_language=${this.lang}&with_genres=${this.genreId}`}?&page=${this.page}&language=tr-TR&region=tr`).then((response) => {
          this.list.push(...response.data.results)

          this.total_pages = response.data.total_pages
        })
      } catch (error) {}
    },
  },
}
</script>
