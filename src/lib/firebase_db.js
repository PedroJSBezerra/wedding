import {
  doc,
  collection, 
  updateDoc,
  onSnapshot, 
  getFirestore,
} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { get, writable } from 'svelte/store'
//create arrays from firebase data
export const db = getFirestore()
export const user = getAuth().currentUser

export const cozinha = writable([])
export let cama = writable([])
export let banho = writable([])

export const list = writable([])

onSnapshot(collection(db, "list"), (doc) => {
  let docs = []
  doc.forEach(doc => docs.push(Object.values(doc.data())))
  list.set(docs)
})
//get realtime list from database
function getDatabase(){
  onSnapshot(doc(db, "list", "Cozinha"), (doc) => {
    cozinha.set(Object.values(doc.data()))
  })
  onSnapshot(doc(db, "list", "Cama"), (doc) => {
    cama.set(Object.values(doc.data()))
  })
  onSnapshot(doc(db, "list", "Banho"), (doc) => {
    banho.set(Object.values(doc.data()))
  })
}
getDatabase()
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
export const check_owner = (item) => {
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
  let response = item.owner_id == getAuth().currentUser.uid
  return response
}
//form submit
export const handleSubmit = (e) => {
  let data = {
    uid: user.uid,
    displayName: user.displayName,
    photo: user.photoURL,
    phone: user.phoneNumber,
    email: user.email,
    presence: presence,
    quantity: quantity,
    list:[...$cama,...$cozinha,...$banho]
  }
  setDoc(doc(db, "users", user.uid), data)
}