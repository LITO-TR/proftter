import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC2uMqdR_5L4_ha5uRjwnmvVhlSggjheaY',
  authDomain: 'proftter.firebaseapp.com',
  projectId: 'proftter',
  storageBucket: 'proftter.appspot.com',
  messagingSenderId: '959735755221',
  appId: '1:959735755221:web:1501ff646d8e04b6144d5c',
  measurementId: 'G-921PTR6HWD'
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}
export const onAuthStateChanged = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizeUser =
            mapUserFromFirebaseAuthToUser(user)
      onChange(normalizeUser)
    })
}
export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth()
    .signInWithPopup(googleProvider)
    .then(mapUserFromFirebaseAuthToUser)
}
