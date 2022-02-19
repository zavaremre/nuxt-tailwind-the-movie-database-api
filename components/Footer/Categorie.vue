<template>
  <div v-if="menuStatus" class="fixed flex flex-col justify-start items-center backdrop-blur-10 w-full h-full inset-0 z-40 bg-gray-900 bg-opacity-90 overflow-y-scroll py-16">
    <button class="absolute right-0 top-0 p-3" @click="menu = !menu">X</button>
    <div v-for="item in categories" :key="item.id">
      <router-link class="block text-lg font-semibold py-2.5 uppercase" :to="`/list/${url(item.title)}?id=${item.id}`" @click="menu = !menu">{{ item.title }}</router-link>
    </div>
  </div>
</template>

<script>
import slugify from 'slugify'
export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    menuStatus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menu: false,
    }
  },
  methods: {
    url(title) {
      if (!title) return ''
      return slugify(`${title}`, {
        replacement: '-',
        remove: undefined,
        lower: true,
        locale: 'tr',
        trim: true,
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
