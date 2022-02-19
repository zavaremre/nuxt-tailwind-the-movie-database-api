<template>
  <div class="w-full">
    <div class="container">
      <section class="py-5 px-5 border-b border-gray-100 dark:border-gray-900">
        <Titlebar title="ARAMA SONUÇLARI" />
        <div class="grid grid-cols-3 sm:grid-cols-6 gap-x-4">
          <div v-for="item in searchingMovies" :key="item.id" class="mb-4">
            <Person v-if="genre === 'person'" :person="item" custom-style="" image-style="h-auto rounded-lg bg-none" no-image-style="rounded-lg h-32" />
            <Poster v-if="genre !== 'person'" :movie="item" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('global', ['searchingMovies', 'genre']),
  },
}
</script>
