//============= IMPORT DATA ================
import { initializeApp } from 'firebase/app'
import {getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { doc, collection, updateDoc, onSnapshot, getFirestore} from 'firebase/firestore'
import { writable } from 'svelte/store'
//================ Export data =============
//svelte writable data
export const open = writable(false)
export const loged = writable('loading')
export const list = writable([])
export const myList = writable([])
//============= FIREBASE INITIALIZE ============
initializeApp({
  apiKey: "AIzaSyBrfNZCYnSXsVIGrIzEq7fBypkQJOK-ADk",
  authDomain: "casamento-invitation.firebaseapp.com",
  projectId: "casamento-invitation",
  storageBucket: "casamento-invitation.appspot.com",
  messagingSenderId: "557245127862",
  appId: "1:557245127862:web:b1bc75b5400ce728c45a17"
})
// ========= REALTIME DATA UPDATE ===========

//database snapshots
onSnapshot(collection(getFirestore(), "list"), (doc) => {
  let uid = getAuth().currentUser.uid
  
  let docs = []
  let items = []
  
  doc.forEach(doc => {

    let item = {
      id: doc.id,
      data: Object.values(doc.data()),
    }

    //pust items to array
    docs.push(item)
    //pust items to array
    Object.values(doc.data()).forEach(item => {
      if(item.owner_id != ''){
        items.push(item)
      }
    })
  })
  //set data to global writable vars
  list.set(docs)
  myList.set(items)
})
//login observer function
onAuthStateChanged( getAuth(), (user) => {
  if(user){
    console.log('AuthState: Loged.')
    loged.set(true)
  }else{
    console.log('AuthState: not loged.')
    loged.set(false)
  }
})
//========== EXPORT FUNCTIONS ==============
//Login function
export const login = () =>{
  let auth = getAuth()
  let googleProvider = new GoogleAuthProvider()
  signInWithPopup( auth, googleProvider)
}
//set item owner
export const setOwner = (item, index, name) => {
  const db = getFirestore()
  let uid = getAuth().currentUser.uid
  let toggle
  
  if(item.owner_id === uid){
    toggle = ''
  }else{
    toggle = uid
  }

  let itemRef = doc(db, 'list', name)
  
  updateDoc(itemRef, {[`${index}.owner_id`]: toggle})
  .then(() => {
      console.log("Document successfully updated!");
  })
  .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  })
}
//function to check check item owner
export const handledisabled = (item) => {
  let user = getAuth().currentUser.uid
  let id = item.owner_id
  let disabled
  // compare current uid to item uid
  if(id == user || id == ''){
    disabled = false
  }else{
    disabled = true
  }
  //return true to enable item
  //return false to disable item
  return disabled 
}
//checbox handler
export const handleChecked = (item) => {
  let uid = getAuth().currentUser.uid
  let response = item.owner_id == uid
  return response
}
//form submit
export const formSubmit = (presence, quantity, name) => {
  const db = getFirestore()
  let uid = getAuth().currentUser.uid
  let lst = []
  list.subscribe(i => lst = i)
  console.log(lst)
  // setDoc(doc(db, "users", uid), data)
}
