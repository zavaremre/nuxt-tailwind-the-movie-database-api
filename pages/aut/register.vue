<template>
  <div class="container">
    <div class="">
      <div class="flex flex-col">
        <input v-model="name" type="name" name="name" class="border border-light-200 p-3 rounded-20 text-gray-900 mb-4" placeholder="Ad" />
        <input v-model="lastname" type="lastname" name="lastname" class="border border-light-200 p-3 rounded-20 text-gray-900 mb-4" placeholder="Soyad" />
        <input v-model="email" type="email" name="email" class="border border-light-200 p-3 rounded-20 text-gray-900 mb-4" placeholder="E-Posta" />
        <input v-model="password" type="password" name="password" class="border border-light-200 p-3 rounded-20 text-gray-900 mb-4" placeholder="Şifre Belirle" />
        <button type="submit" class="btn btn-primary" @click="userRegistration">Kayıt ol</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'aut',
  data() {
    return {
      name: '',
      lastname: '',
      email: '',
      password: '',
    }
  },
  methods: {
    userRegistration() {
      this.$firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          res.user
            .updateProfile({
              displayName: this.name,
            })
            .then(() => {
              this.$router.push('/login')
            })
        })
        .catch((error) => {
          alert(error.message)
        })
    },
  },
}
</script>
