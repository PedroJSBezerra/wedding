import {
  doc, 
  setDoc,
  collection, 
  addDoc, 
  onSnapshot, 
  getDoc, 
  getFirestore
} from 'firebase/firestore'

function setListCollection(){

  const db = getFirestore()

  let cozinha = {
    0:{
        name: 'Garrafa de café (rosa)',
        photoUrl: '/images/img_garrafadecafe.png',
        owner_id: '',
      },
    1:{
        name: 'Jogo de utensilios de cozinha',
        photoUrl: '/images/img_utensilios_cozinha.png',
        owner_id: '',
      },
    2:{
        name: 'Triturador manual (rosa)',
        photoUrl: '/images/img_triturador_manual.png',
        owner_id: 'WabZA5CfzqaVPZpZOZ6KS5PIQEe1',
      },
    3:{
        name: 'Jogo de utensilios de pia',
        photoUrl: '/images/img_utensilios_pia.png',
        owner_id: '',
      },
    4:{
        name: 'Jogo de panelas (rosa)',
        photoUrl: '/images/panelas.png',
        owner_id: '',
      },
    5:{
        name: 'Aparelho de jantar (rosa)',
        photoUrl: '/images/aparelho.png',
        owner_id: '',
      },
    6:{
        name: 'Batedeira',
        photoUrl: '/images/batedeira.png',
        owner_id: '',
      },
    7:{
        name: 'Liquidificador',
        photoUrl: '/images/liquidificador.png',
        owner_id: '',
      },
    8:{
        name: 'Conjunto de assadeira (vidro)',
        photoUrl: '/images/assadeira.png',
        owner_id: '',
      },
    9:{
        name: 'Ralador (inox) com depósito',
        photoUrl: '/images/ralador.png',
        owner_id: '',
      },
    10:{
        name: 'Potes de vidro (sanremo)',
        photoUrl: '/images/potes.png',
        owner_id: '',
      },
    11:{
        name: 'Forma de bolo (redonda)',
        photoUrl: '/images/forma.png',
        owner_id: '',
      },
    12:{
        name: 'Kit jarra e copos (vidro)',
        photoUrl: '/images/jarra.png',
        owner_id: '',
      },
    13:{
        name: 'Faqueiro tramontina (30 pçs)',
        photoUrl: '/images/faqueiro.png',
        owner_id: '',
      },
  }
  let cama = {
    0:{
        name: '2 travesseiros',
        photoUrl: '/images/travesseiro.png',
        owner_id: '',
      },
    1:{
        name: 'Jogo de coxa de cama',
        photoUrl: '/images/coxa.png',
        owner_id: '',
      },
    2:{
        name: 'Lençol de cama com elastico',
        photoUrl: '/images/lencol.png',
        owner_id: '',
      },
  }
  let banho = {
    0:{
        name: 'Tapete de porta',
        photoUrl: '/images/tapete.png',
        owner_id: '',
      },
    1:{
        name: 'Toalha',
        photoUrl: '/images/toalha.png',
        owner_id: '',
      },
    2:{
        name: 'Kit de banheiro (3 pçs)',
        photoUrl: '/images/kitbanheiro.png',
        owner_id: '',
      },
    3:{
        name: 'Kit de banheiro (pia)',
        photoUrl: '/images/kitpia.png',
        owner_id: '',
      }
  }
  let data = [{name:"Cozinha", data:cozinha}, {name:"Cama", data:cama}, {name:"Banho", data:banho}]
  data.forEach((element, index, array) => {
    setDoc(doc(db, 'list', data[index].name), element.data)
  })  

  console.log([cozinha, cama, banho])  
}
setListCollection()

//function to set data to firebase
function setDataToFirebase(){
  const db = getFirestore()
  
  let list = {
    
    cozinha: [
      {
        name: 'Garrafa de café (rosa)',
        photoUrl: '/images/img_garrafadecafe.png',
        owner_id: '',
      },
      {
        name: 'Jogo de utensilios de cozinha',
        photoUrl: '/images/img_utensilios_cozinha.png',
        owner_id: '',
      },
      {
        name: 'Triturador manual (rosa)',
        photoUrl: '/images/img_triturador_manual.png',
        owner_id: 'WabZA5CfzqaVPZpZOZ6KS5PIQEe1',
      },
      {
        name: 'Jogo de utensilios de pia',
        photoUrl: '/images/img_utensilios_pia.png',
        owner_id: '',
      },
      {
        name: 'Jogo de panelas (rosa)',
        photoUrl: '/images/panelas.png',
        owner_id: '',
      },
      {
        name: 'Aparelho de jantar (rosa)',
        photoUrl: '/images/aparelho.png',
        owner_id: '',
      },
      {
        name: 'Batedeira',
        photoUrl: '/images/batedeira.png',
        owner_id: '',
      },
      {
        name: 'Liquidificador',
        photoUrl: '/images/liquidificador.png',
        owner_id: '',
      },
      {
        name: 'Conjunto de assadeira (vidro)',
        photoUrl: '/images/assadeira.png',
        owner_id: '',
      },
      {
        name: 'Ralador (inox) com depósito',
        photoUrl: '/images/ralador.png',
        owner_id: '',
      },
      {
        name: 'Potes de vidro (sanremo)',
        photoUrl: '/images/potes.png',
        owner_id: '',
      },
      {
        name: 'Forma de bolo (redonda)',
        photoUrl: '/images/forma.png',
        owner_id: '',
      },
      {
        name: 'Kit jarra e copos (vidro)',
        photoUrl: '/images/jarra.png',
        owner_id: '',
      },
      {
        name: 'Faqueiro tramontina (30 pçs)',
        photoUrl: '/images/faqueiro.png',
        owner_id: '',
      },
    ],
    cama: [
    {
        name: '2 travesseiros',
        photoUrl: '/images/travesseiro.png',
        owner_id: '',
      },
      {
        name: 'Jogo de coxa de cama',
        photoUrl: '/images/coxa.png',
        owner_id: '',
      },
      {
        name: 'Lençol de cama com elastico',
        photoUrl: '/images/lencol.png',
        owner_id: '',
      },
    ],
    banho: [
      {
        name: 'Tapete de porta',
        photoUrl: '/images/tapete.png',
        owner_id: '',
      },
      {
        name: 'Toalha',
        photoUrl: '/images/toalha.png',
        owner_id: '',
      },
      {
        name: 'Kit de banheiro (3 pçs)',
        photoUrl: '/images/kitbanheiro.png',
        owner_id: '',
      },
      {
        name: 'Kit de banheiro (pia)',
        photoUrl: '/images/kitpia.png',
        owner_id: '',
      }
    ],
  }

  list.cozinha.map(item => addDoc(collection(db, 'cozinha'), item))
  list.cama.map(item => addDoc(collection(db, 'cama'), item))
  list.banho.map(item => addDoc(collection(db, 'banho'), item))
}