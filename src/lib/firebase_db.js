import {
  doc,
  collection, 
  updateDoc,
  onSnapshot, 
  getFirestore,
} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

//create arrays from firebase data
export let cozinha = []
export let cama = []
export let banho = []
//get realtime list from database
const db = getFirestore()

onSnapshot(doc(db, "list", "Cozinha"), (doc) => {
  cozinha = doc.data().data
  console.log("Current data: ", doc.data());
})
onSnapshot(doc(db, "list", "Cama"), (doc) => {
  cama = doc.data().data
})
onSnapshot(doc(db, "list", "Banho"), (doc) => {
  banho = doc.data().data
})

//set item owner
export const setOwner = (item) => {
  console.table(item)
  
  const db = getFirestore()
  let user = getAuth().currentUser.uid

  let itemRef = doc(db, item.collection, item.id)
  updateDoc(itemRef, {owner_id: user})
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
