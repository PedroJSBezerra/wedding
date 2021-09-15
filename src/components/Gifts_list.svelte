<script>
  import Icon_info from '../icons/Icon_info.svelte'
  import { cozinha, cama, banho} from '../stores/whishlist'
</script>

<section class="gifts_list">
  <h1>Lista de presentes</h1>

  <div class="info">
    Opcional <br>
    Marque uma ou mais entre as opções de presente, se mudar de ideia é só voltar aqui depois. <br>
    Se o item estiver riscado é porque alguém já vai dar.
  </div>
  <div class="info">
    <div class="icon">
      <Icon_info />
    </div>
    Caso prefira levar algo que não está na lista também é bem vindo!
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
    top: 0;
    overflow-y: auto;
		background-image: url(/images/bg_white_wood.png);
  }
  h1{
    text-align: center;
    width: 100%;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    justify-content: space-around;
  }
  li{
    list-style-type: none;
    margin: 20px;
  }
  label{
    display: flex;
    flex-direction: column;
    width: 90px;
    min-height: 200px;
    padding: 20px;
    align-items: center;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    box-shadow: 2px 2px 4px;
    justify-content: center;
    background: #fff;
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

</style>