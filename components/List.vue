<template>
  <section class="relative w-full flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden">
    <div v-for="(item, i) in list" :key="i" class="flex-shrink-0 px-2.5 snap-center sm:w-1/6 sm:basis-1/6" :class="customStyle">
      <slot name="content" :item="item"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      default: '',
    },

    customStyle: {
      type: [String, Object],
      default: 'w-1/3 basis-1/3',
    },
  },
  data() {
    return {
      list: [],
    }
  },
  async fetch() {
    try {
      const {
        data: { results },
      } = await this.$axios.get(`/api?action=${this.action}&language=tr-TR&append_to_response=credits&sort_by=date&page=1&region=tr`)
      this.list = results
    } catch (error) {
      console.log(error.message)
    }
  },
  fetchOnServer: true,
}
</script>
