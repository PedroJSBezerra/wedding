import {doc, docs, collection, onSnapshot, getFirestore, updateDoc} from 'firebase/firestore'
import { init } from 'svelte/internal'
const db = getFirestore()

export let cama = []
export let cozinha = []
export let banho = []

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
      cama.push(item)
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
      banho.push(item)
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
      cozinha.push(item)
    })
  })
}

function initialize(){
  getDatabase()
}
initialize()
