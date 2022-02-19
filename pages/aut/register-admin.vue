<template>
  <div class="row">
    <div class="col-sm-4 off-set">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model="email" type="text" placeholder="Email" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input v-model="password" type="password" placeholder="Password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Register Admin</button>
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
      user: null,
    }
  },
  methods: {
    async onSubmit() {
      const admin = {
        role: {
          admin: true,
        },
      }
      await this.$firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          if (response) {
            const setAdmin = this.$firebase.functions().httpsCallable('setAdmin')
            const data = { uid: response.user.uid, role: admin.role }
            setAdmin(data)
              .then((result) => {
                // eslint-disable-next-line no-console
                console.log(`index.js - 183 - "🎉"`, result)
              })
              .then(() => {
                // signout
                this.$firebase
                  .auth()
                  .signOut()
                  .then(() => {
                    this.$router.push('/login')
                  })
              })
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('🤡', error.message)
        })
    },
  },
}
</script>
