<template>
  <section>
    <div class="flex flex-col justify-start items-center">
      <div v-for="item in list" :key="item.id">
        <Poster :movie="item" />
      </div>
      <p v-if="user">Merhaba: {{ user.email }}</p>
      <button class="btn btn-primary" @click="signout">Çıkış Yap</button>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'aut',
  data() {
    return {
      list: [],
      testCollection: [],
      user: null,
    }
  },

  created() {
    const self = this
    this.$firebase.auth().onAuthStateChanged(function (user) {
      self.user = user
    })
  },
  mounted() {
    const db = this.$firebase.firestore()
    db.collection('likeMovies').onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        this.testCollection.push(doc.data().id)
        this.$axios.get(`/api?action=movie/${doc.data().id}&append_to_response=similar_movies,credits,external_ids,include_video,videos,include_video_language,year,with_keywords,with_people,sort_by&sort_by=popularity.asc&page=1&region=tr&language=tr-TR`).then((response) => {
          this.list.push(response.data)
        })
      })
    })
  },
  methods: {
    signout() {
      this.$firebase
        .auth()
        .signOut()
        .then((user) => {
          this.$router.push('/aut/login')
        })
    },
  },
}
</script>
