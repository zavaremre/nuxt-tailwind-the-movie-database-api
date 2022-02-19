import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB7rFBBM-88qhb_fiS04cN-Yi7rH5lxwN8',
  authDomain: 'nuxt-bcf8d.firebaseapp.com',
  databaseURL: 'https://nuxt-bcf8d-default-rtdb.firebaseio.com',
  projectId: 'nuxt-bcf8d',
  storageBucket: 'nuxt-bcf8d.appspot.com',
  messagingSenderId: '594989430861',
  appId: '1:594989430861:web:37b8fa1e86ac1631a58404',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default ({ app }, inject) => {
  inject('firebase', { firestore: firebase.firestore, auth: firebase.auth, GoogleAuthProvider: firebase.auth.GoogleAuthProvider })
}
