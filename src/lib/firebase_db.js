import {
  collection, 
  onSnapshot, 
  getFirestore,
  doc,
  updateDoc,
} from 'firebase/firestore'

const db = getFirestore()

//create array from firebase data
export let list = [
  {name: "Cozinha", data:[]},
  {name: "Cama", data:[]},
  {name: "Banho", data:[]}
]
//get realtime list from database
function getDatabase(){
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
export function setOwner(item, user){
  console.log(item.id)
  console.log(item.collection)
  console.log(item.owner_id)
  console.log(user)

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

//initialize functions
function initialize(){
  getDatabase()
}
initialize()
