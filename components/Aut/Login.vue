<template>
  <div>
    <div class="container">
      <div class="flex flex-col justify-center items-center w-100">
        <input v-model="email" type="email" name="email" class="border border-gray-100 text-gray-800 p-3 rounded-xl mb-3" />
        <input v-model="password" type="password" name="password" class="border border-gray-100 text-gray-800 p-3 rounded-xl mb-3" />
        <button class="bg-green-600 py-1.5 px-4 rounded-xl" @click="login">Giriş Yap</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    async login() {
      try {
        await this.$firebase.auth.createUserWithEmailAndPassword(this.email, this.password)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
