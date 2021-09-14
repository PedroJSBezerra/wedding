import { writable } from 'svelte/store'

import {initializeApp} from 'firebase/app'
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged} from 'firebase/auth'

const firebaseApp = initializeApp({
  // Your web app's Firebase configuration
  apiKey: "AIzaSyBrfNZCYnSXsVIGrIzEq7fBypkQJOK-ADk",
  authDomain: "casamento-invitation.firebaseapp.com",
  projectId: "casamento-invitation",
  storageBucket: "casamento-invitation.appspot.com",
  messagingSenderId: "557245127862",
  appId: "1:557245127862:web:b1bc75b5400ce728c45a17"
});

const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()


onAuthStateChanged( auth, (user) => {
  if(user){
    console.log('AuthState: Loged.')
    loged.set(true)
  }else{
    loged.set(false)
    console.log('AuthState: not loged.')
  }
})


export function login (){
  signInWithPopup(auth, provider)
}
export function logout (){
  auth.signOut()
}

export const loged = writable('loading')