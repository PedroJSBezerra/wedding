<script>
  import Cart from './Cart.svelte'
  import Icon_info from '../../icons/Icon_info.svelte'
  import Icon_close from '../../icons/icon_close.svelte'
  import { open } from '../../stores/functions'
  import { fly, fade } from 'svelte/transition'
  import { cozinha, cama, banho, setOwner, check_owner, handleChecked } from '../../lib/firebase_db'
  // import '../../lib/listToFirebase'
 
</script>

<section in:fly={{x: 300}} out:fly={{x:300}} class={$open? 'list':'list close'}>
  <head>
    
    <Cart/>
    <div class="icon" on:click={() => open.set(!open)}>
      <Icon_close />
    </div>
  </head>


  <div class="scroll background">
    
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
      {#each $cozinha as item, index }
        <li in:fly={{ y: 200 }}>
          <input 
            id={item.name}
            type="checkbox" 
            disabled={check_owner(item)}
            checked={handleChecked(item)}
            on:click={() => {setOwner(item, index, "Cozinha")}}
          >
          <label for={item.name}>
            <img src="{item.photoUrl}" alt="">
            {item.name}
          </label>
        </li>
      {/each}
    </ul>
    <h1>Cama</h1>
    <ul class="cama">
      {#each $cama as item, index }
      <li>
          <input 
            id={item.name}
            type="checkbox" 
            disabled={check_owner(item)}
            checked={handleChecked(item)}
            on:click={() => {setOwner(item, index, "Cama")}}
          >
          <label for={item.name}>
            <img src="{item.photoUrl}" alt="">
            {item.name}
          </label>
        </li>
      {/each}
    </ul>
    <h1>Banho</h1>
    <ul class="banho">
      {#each $banho as item, index }
        <li>
          <input
            id={item.name} 
            type="checkbox" 
            disabled={check_owner(item)}
            checked={handleChecked(item)}
            on:click={() => {setOwner(item, index, "Banho")}}
          >
          <label for={item.name}>
            <img src="{item.photoUrl}" alt="">
            {item.name}
          </label>
        </li>
      {/each}
    </ul>
</section>

<style>
  section{
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
  }
  .background{
    background: url('../images/bg_wood_blue.png');
    background-attachment: local;
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
    position: relative;
  }
  input[type=checkbox]{
    /* display: none; */
    position: absolute;
    width: 20px;
    height: 20px;
    top: 56%;
  }
  input[type=checkbox]:checked + label{
    border: 2px solid green;
  }
  input[type=checkbox]:disabled + label{
    opacity: .5;
    text-decoration: line-through;
  }
  label{
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    height: 180px;
    width: 120px;
    border: 2px solid rgba(0,0,0,.0);
    box-shadow: 1px 1px 7px -3px #999;
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
    z-index: 1;
  }
  .icon{
    padding: 0 1rem;
    cursor: pointer;
  }

</style>