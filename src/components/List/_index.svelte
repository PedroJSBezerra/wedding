<script>
  import Icon_info from '../../icons/Icon_info.svelte'
  import Icon_close from '../../icons/icon_close.svelte'

  // import { cozinha, cama, banho } from '../../stores/whishlist'
  import { open } from '../../stores/liststate'

  
  import {doc, onSnapshot, getDoc, getFirestore} from 'firebase/firestore'
  
  const db = getFirestore()
  const docRef = doc(db, 'list', 'whish')
  const docSnap = getDoc(docRef)
  
  let cama = []
  let cozinha = []
  let banho = []

  const unsub = onSnapshot(docRef, (doc) => {
    cama = doc.data().cama, 
    cozinha = doc.data().cozinha,
    banho = doc.data().banho
  })
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
      {#each cozinha as item}
        <li>
          <label>
            <img src="{item.photoUrl}" alt="">
            <input type="checkbox" name="" id="">
            {item.name}
          </label>
        </li>
      {/each}
    </ul>

    <h1>Cama</h1>
    <ul class="cama">
      {#each cama as item}
        <li>
          <label>
            <img src="{item.photoUrl}" alt="">
            <input type="checkbox" name="" id="">
            {item.name}
          </label>
        </li>
      {/each}
    </ul>

    <h1>Banho</h1>
    <ul class="banho">
      {#each banho as item}
        <li>
          <label>
            <img src="{item.photoUrl}" alt="">
            <input type="checkbox" name="" id="">
            {item.name}
          </label>
        </li>
      {/each}
    </ul>
  </div>

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