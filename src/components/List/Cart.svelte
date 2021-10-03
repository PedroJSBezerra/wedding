<script>
  import {getAuth} from 'firebase/auth'
  import {getFirestore, doc, onSnapshot} from 'firebase/firestore'

  import { fly, fade } from 'svelte/transition'

  const user = getAuth().currentUser
  const db = getFirestore()
  let cozinha = []
  let cama = []
  let banho = []

  onSnapshot(doc(db, "list", "Cozinha"), (doc) => {
    let lst = []
    Object.values(doc.data()).forEach((item, index, array) => {
      if(item.owner_id === user.uid){
        lst.push(item)
      }
    })
    cozinha = lst
  })
  onSnapshot(doc(db, "list", "Cama"), (doc) => {
    let lst = []
    Object.values(doc.data()).forEach((item, index, array) => {
      if(item.owner_id === user.uid){
        lst.push(item)
      }
    })
    cama = lst
  })
  onSnapshot(doc(db, "list", "Banho"), (doc) => {
    let lst = []
    Object.values(doc.data()).forEach((item, index, array) => {
      if(item.owner_id === user.uid){
        lst.push(item)
      }
    })
    banho = lst
  })
  
</script>

{#if [...cozinha, ...cama, ...banho].length > 0}
  <h1>
    Você escolheu 
    {#key [...cozinha, ...cama, ...banho].length}
      <span in:fly={{ y: 20 }}>{[...cozinha, ...cama, ...banho].length}</span> 
    {/key}
    presente{[...cozinha, ...cama, ...banho].length == 1 ? '':"s"}
  </h1>
{:else}
  <h1>
    Lista de presentes
  </h1>
{/if}
<ul>
  {#each [...cozinha, ...cama, ...banho] as item}
    <li 
      in:fly={{ y: 20 }}
      out:fly={{ y: 20}}
    >{item.name}
    </li> 
  {/each}
</ul>

<style>
  h1{
    width: 100%;
    text-align: center;
    margin: 0;
  }
  ul{
    position: absolute;
    top: 60px;
    width: 100%;
    margin: 0;
    z-index: 1;
    list-style-type: none;
    padding: 0;
    text-align: center;
  }
  ul li:last-of-type{
    box-shadow: 0 3px 4px -2px;
    
  }
  li{
    background: white;
    padding: 6px 0;
  }
  li::before{
    content: '';
    display: block;
    width: 80%;
    height: 2px;
    background: rgba(0,0,0,.4);
    margin: 0 auto;
    border-radius: 1px;
  }
</style>