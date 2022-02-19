<template>
  <div class="row">
    <div class="col-sm-4 off-set">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model="email" type="email" class="form-control text-gray-800" placeholder="Enter email" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input v-model="password" type="password" class="form-control text-gray-800" placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'aut',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  created() {
    this.$firebase.auth().onAuthStateChanged((userAuth) => {
      // eslint-disable-next-line no-console
      console.log(userAuth)
      if (userAuth) {
        this.$firebase
          .auth()
          .currentUser.getIdTokenResult()
          .then((tokenResult) => {
            // eslint-disable-next-line no-console
            console.log('%clogin.vue line:46 object', 'color: #007acc;', 'Giriş Başarılı')
            // eslint-disable-next-line no-console
            console.log('🍎 ', tokenResult)
            // eslint-disable-next-line no-console
            console.log('🍎 ', tokenResult.claims)
          })
      }
    })
  },

  methods: {
    async onSubmit() {
      try {
        const { user } = await this.$firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        // eslint-disable-next-line no-console
        console.log(user)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('🤡', error)
      }
    },
  },
}
</script>
