<template>
  <div>
    <div class="bg-blue-600">{{ id }}</div>
    <button v-if="id === movieId" class="bg-red-600" @click="like(movieId)">Like</button>
  </div>
</template>
<script>
export default {
  props: {
    movieId: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      id: JSON.parse(this.movieId),
      isLike: true,
      isUser: null,
      disable: false,
    }
  },

  fetch() {
    const db = this.$firebase.firestore()
    db.collection('likeMovies').onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        const data = doc.data().id
        this.id = data
      })
    })
  },

  methods: {
    like(id) {
      this.disable = true
      setTimeout(() => {
        this.disable = false
      }, 2000)
      console.log('%cLike.vue line:50 id', 'color: #007acc;', id)
      const db = this.$firebase.firestore()
      db.collection('likeMovies').add({
        id: id.toString(),
      })
    },
  },
}
</script>
