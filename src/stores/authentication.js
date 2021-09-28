//app
import {initializeApp} from 'firebase/app'
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBrfNZCYnSXsVIGrIzEq7fBypkQJOK-ADk",
  authDomain: "casamento-invitation.firebaseapp.com",
  projectId: "casamento-invitation",
  storageBucket: "casamento-invitation.appspot.com",
  messagingSenderId: "557245127862",
  appId: "1:557245127862:web:b1bc75b5400ce728c45a17"
});

//authentication
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged} from 'firebase/auth'
import { writable } from 'svelte/store'
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()
export const loged = writable('loading')
onAuthStateChanged( auth, (user) => {
  if(user){
    console.log('AuthState: Loged.')
    loged.set(true)
  }else{
    loged.set(false)
    console.log('AuthState: not loged.')
  }
})

//login
export function login (){
  signInWithPopup(auth, provider)
}
export function logout (){
  auth.signOut()
}

//database
import {getFirestore, collection, getDocs} from 'firebase/firestore'

const db = getFirestore()
const querySnapshot = getDocs(collection(db, "list"))
querySnapshot.forEach((doc) => {
  console.log(doc.data())
})