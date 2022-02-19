<template>
  <section>
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h1>Customer</h1>
        <p v-if="user">Customer: {{ user.email }}</p>
        <button class="btn btn-primary" @click="signout">Signout</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'aut',
  data() {
    return {
      user: null,
    }
  },
  created() {
    const self = this
    this.$firebase.auth().onAuthStateChanged(function (user) {
      self.user = user
    })
  },
  methods: {
    signout() {
      this.$firebase
        .auth()
        .signOut()
        .then((user) => {
          this.$router.push('/login')
        })
    },
  },
}
</script>
