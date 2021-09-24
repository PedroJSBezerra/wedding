<script>
  import Icon_info from '../../icons/Icon_info.svelte'
  import { cozinha, cama, banho } from '../../stores/whishlist'
  import { open } from '../../stores/liststate'
</script>

  <section class={$open? 'list background':'list background close'}>

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
  section{
    position: fixed;
    top: 0;
    background: url('../images/bg_wood_blue.png');
    background-size: 100%;
    height: 100vh;
    padding: 1rem;
    overflow: auto;
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
    display: flex;
    flex-wrap: wrap;
  }
  ul h1{
    width: 100%;
  }
  ul li{
    width: 45%;
    padding: 0.5rem;
  }
  label{
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
  }

</style>