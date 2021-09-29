import {doc, collection, onSnapshot, getFirestore, updateDoc} from 'firebase/firestore'
const db = getFirestore()

export let cama = []
export let cozinha = []
export let banho = []

//get list from database
getDatabase()
function getDatabase(){
  onSnapshot(collection(db, 'cama'), (querySnapshot) => {
    querySnapshot.forEach(doc => cama.push(doc.data()))
  })
  onSnapshot(collection(db, 'banho'), (querySnapshot) => {
    querySnapshot.forEach(doc => banho.push(doc.data()))
  })
  onSnapshot(collection(db, 'cozinha'), (querySnapshot) => {
    querySnapshot.forEach(doc => cozinha.push(doc.data()))
  })
}