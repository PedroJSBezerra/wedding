<script>
  import Icon_info from '../icons/Icon_info.svelte'
  import { cozinha, cama, banho } from '../stores/whishlist'
  import { open } from '../stores/liststate'
</script>

  <section class={$open? 'list background':'list background close'}>

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
</style>