<script>
  import Icon_info from '../icons/Icon_info.svelte'
  import Icon_close from '../icons/icon_close.svelte'
  import { cozinha, cama, banho} from '../stores/whishlist'
  import {open} from '../stores/liststate'
</script>

  <div class="btn_gift">
    <button on:click={() => open.set(true)}>Mostrar lista de presentes</button>
  </div>

  <section class={$open? 'gifts_list':'gifts_list_close'}>
    
    <div class="header">
      <h1>Lista de presentes</h1>
      <div class="btn_close" on:click={() => open.set(false)}>  
        <Icon_close />
      </div>
    </div>

    <div class="info">
      Opcional <br>
      Marque uma ou mais entre as opções de presente, se mudar de ideia é só voltar aqui depois. <br>
      Se o item estiver riscado é porque alguém já vai dar.
    </div>

    <div class="info">
      <div class="icon">
        <Icon_info />
      </div>
      Caso prefira levar algo que não está na lista também será bem vindo!
    </div>
    
    <ul class="cozinha">
      <h1>Cozinha</h1>
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

    <ul class="cama">
      <h1>Cama</h1>
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

    <ul class="banho">
      <h1>Banho</h1>
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

  </section>

<style>
  .gifts_list{
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    background: white;
    margin-top: 65px;
    transition: all .5s;
  }
  .gifts_list_close{
    display: none;
  }
  h1{
    text-align: center;
    width: 100%;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }
  li{
    list-style-type: none;
    width: 100%;
  }
  @media screen and (min-width: 340px) and (max-width: 800px){
    li{
      width: 50%;
    }
  }
  @media screen and (min-width: 801px){
    li{
      width: 190px;
    }
  }

  img{
    border-radius: 50%;
  }

  label{
    display: flex;
    flex-direction: column;
    height: 220px;
    padding: 20px;
    margin: 20px;
    align-items: center;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    box-shadow: 3px 4px 7px 1px #999;
    justify-content: flex-start;
    background: whitesmoke;
  }
  label input{
    min-width: 20px;
    min-height: 20px;
    margin: 10px;
  }
  .info{
    text-align: center;
    margin: 40px;
  }

  .header{
    box-shadow: 2px 2px 7px #999;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 4;
    background: white;
    width: 100%;
    height: 65px;
  }

  .btn_gift{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
  }
  .btn_close{
    background: white;
    display: flex;
    padding: 10px;
    border-radius: 50%;
  }
</style>