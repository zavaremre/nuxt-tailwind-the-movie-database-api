<template>
  <div class="vue-tempalte">
    <form @submit.prevent="forgetPassword">
      <h3>Forgot Password</h3>
      <div class="form-group">
        <label>Email</label>
        <input v-model="user.email" type="email" class="border border-light-200 p-3 rounded-20 text-gray-900 mb-4" />
      </div>
      <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: '',
      },
    }
  },
  methods: {
    forgetPassword() {
      this.$firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
          alert('Şifreyi sıfırlamak için kayıtlı e-postanızı kontrol edin!')
          this.user = {
            email: '',
          }
        })
        .catch((error) => {
          alert(error)
        })
    },
  },
}
</script>
