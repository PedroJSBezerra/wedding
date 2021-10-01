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
  let collections = ["cozinha","cama","banho",]
  function getData(element, index, array) {
    onSnapshot(collection(db, element), (querySnapshot) => {
      querySnapshot.forEach(doc => {
        let item = {
          id: doc.id,
          collection: 'cama',
          name: doc.data().name,
          photoUrl: doc.data().photoUrl,
          owner_id: doc.data().owner_id,
        }
        list[index].data.push(item)
      })
    })
  }
  collections.forEach(getData)
}
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
//initialize functions
function initialize(){
  getDatabase()
}
initialize()
