<script>
  import Icon_info from '../../icons/Icon_info.svelte'
  import Icon_close from '../../icons/icon_close.svelte'
  import { open } from '../../stores/functions'
  // import {list, setOwner, check_owner, handleChecked} from '../../lib/firebase_db'
  // import '../../lib/listToFirebase'
  import {
    doc,
    collection, 
    updateDoc,
    onSnapshot, 
    getFirestore,
  } from 'firebase/firestore'
  import {getAuth} from 'firebase/auth'

  //create arrays from firebase data
  let cozinha = []
  let cama = []
  let banho = []
  //get realtime list from database
  const db = getFirestore()

  onSnapshot(doc(db, "list", "Cozinha"), (doc) => {
    cozinha = Object.values(doc.data())
  })
  onSnapshot(doc(db, "list", "Cama"), (doc) => {
    cama = Object.values(doc.data())
  })
  onSnapshot(doc(db, "list", "Banho"), (doc) => {
    banho = Object.values(doc.data())
  })

  //set item owner
  export const setOwner = (item, index, name) => {
    const db = getFirestore()

    let itemRef = doc(db, 'list', name)
    
    updateDoc(itemRef, {[`${index}.owner_id`]: getAuth().currentUser.uid})

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
  
</script>

<section class={$open? 'list background':'list background close'}>
  <head>
    <h1>Lista de presentes</h1>
    <div class="icon" on:click={() => open.set(!open)}>
      <Icon_close />
    </div>
  </head>

  <div class="scroll">
    
    <div class="info">
      <p>Opcional <br>
        Marque uma ou mais entre as opções de presente, 
        se mudar de ideia é só voltar aqui depois. <br>
        Se o item estiver riscado é porque alguém já vai dar.
      </p>
    </div>

    <div class="info">
      <div class="icon">
        <Icon_info />
      </div>
      <p>Caso prefira levar algo que não está na lista também será bem vindo!</p>
    </div>

    <h1>Cozinha</h1>
    <ul class="cozinha">
      {#each cozinha as item, index }
        <li>
          <label>
            <img src="{item.photoUrl}" alt="">
            <input 
              type="checkbox" 
              disabled={check_owner(item)}
              checked={handleChecked(item)}
              on:click={() => {setOwner(item, index, "Cozinha")}}
            >
            {item.name}
          </label>
        </li>
      {/each}
    </ul>
    <h1>Cama</h1>
    <ul class="cama">
      {#each cama as item, index }
        <li>
          <label>
            <img src="{item.photoUrl}" alt="">
            <input 
              type="checkbox" 
              disabled={check_owner(item)}
              checked={handleChecked(item)}
              on:click={() => {setOwner(item, index, "Cama")}}
            >
            {item.name}
          </label>
        </li>
      {/each}
    </ul>
    <h1>Banho</h1>
    <ul class="banho">
      {#each banho as item, index }
        <li>
          <label>
            <img src="{item.photoUrl}" alt="">
            <input 
              type="checkbox" 
              disabled={check_owner(item)}
              checked={handleChecked(item)}
              on:click={() => {setOwner(item, index, "Banho")}}
            >
            {item.name}
          </label>
        </li>
      {/each}
    </ul>
</section>

<style>
  section{
    background: url('../images/bg_wood_blue.png');
    background-size: 100%;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
  }
  .scroll{
    overflow-y: auto;
    height: calc(100% - 60px);
    padding: 0 1rem;
  }
  .info{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  ul{
    list-style-type: none;
    padding: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-template-areas: 'title title';
  }
  h1{
    width: 100%;
  }
  ul li{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  label{
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    height: 180px;
    width: 120px;
  }
  head{
    display: flex;
    margin: 0;
    background: white;
    box-shadow: 2px 2px 6px -1px #999;
    align-items: center;
    width: 100%;
    height: 60px;
    position: relative;
  }
  head h1{
    width: 100%;
    text-align: center;
    margin: 0;
  }
  .icon{
    padding: 0 1rem;
    cursor: pointer;
  }

</style>