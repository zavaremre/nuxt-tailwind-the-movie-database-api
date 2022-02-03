<template>
  <div class="title-bar flex flex-col justify-center items-center font-sm text-center font-semibold w-full mb-5">
    {{ title }}
    <div class="divider w-5 h-1 rounded-full bg-gray-700 dark:bg-gray-50 mt-3"></div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
