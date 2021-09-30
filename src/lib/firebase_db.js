import {
  doc,
  collection, 
  updateDoc,
  onSnapshot, 
  getFirestore,
} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

//create array from firebase data
export let list = [
  {name: "Cozinha", data:[]},
  {name: "Cama", data:[]},
  {name: "Banho", data:[]}
]
//get realtime list from database
const getDatabase = () => {
  const db = getFirestore()

  onSnapshot(collection(db, 'cama'), (querySnapshot) => {
    querySnapshot.forEach(doc => {
      let item = {
        id: doc.id,
        collection: 'cama',
        name: doc.data().name,
        photoUrl: doc.data().photoUrl,
        owner_id: doc.data().owner_id,
      }
      list[1].data.push(item)
    })
  })
  onSnapshot(collection(db, 'banho'), (querySnapshot) => {
    querySnapshot.forEach(doc => {
      let item = {
        id: doc.id,
        collection: 'banho',
        name: doc.data().name,
        photoUrl: doc.data().photoUrl,
        owner_id: doc.data().owner_id,
      }
      list[2].data.push(item)
    })
  })
  onSnapshot(collection(db, 'cozinha'), (querySnapshot) => {
    querySnapshot.forEach(doc => {
      let item = {
        id: doc.id,
        collection: 'cozinha',
        name: doc.data().name,
        photoUrl: doc.data().photoUrl,
        owner_id: doc.data().owner_id,
      }
      list[0].data.push(item)
    })
  })
}
//set item owner
export const setOwner = (item) => {
  const db = getFirestore()
  let user 

  if(item.owner_id === 'no id'){
    console.log('op1')
    user = getAuth().currentUser.uid
  }else if(item.owner_id === getAuth().currentUser.uid){
    console.log('op2')
    user = 'no id'
  }

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
  console.log(item.owner_id)
  let user = getAuth().currentUser.uid
  let id = item.owner_id
  let disabled
  // compare current uid to item uid
  if(id == user || id == 'no id'){
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




//initialize functions
function initialize(){
  getDatabase()
}
initialize()
