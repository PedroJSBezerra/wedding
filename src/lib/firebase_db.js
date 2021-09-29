import {collection, onSnapshot, getFirestore} from 'firebase/firestore'

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
        name: doc.data().name,
        photoUrl: doc.data().photoUrl,
        owner_id: doc.data().owner_id,
      }
      list[0].data.push(item)
    })
  })
}
//initialize functions
function initialize(){
  getDatabase()
}
initialize()
