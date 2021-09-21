<script>

  let presence = 'yes'
  let quantity = '0'
  let name = ''

  const handleSubmit = (e) => {
    console.log(presence)
    console.log(quantity)
    console.log(name)
  }

</script>

<section>

  <form class="background" action="" on:submit|preventDefault={handleSubmit}>
    <div class="confirm">
      <h3>Confirmar presença?</h3>
      <input type="radio" name="presence" bind:group={presence} id="yes" value="yes" checked>
      <label for="yes">Sim</label>
      <input type="radio" name="presence" bind:group={presence} id="no" value="no">
      <label for="no">Não</label>
    </div>
    
    <div class="quantity">
      <h3>Quantas pessoas irão com você?</h3>
      <input type="radio" name="quantity" bind:group={quantity} id="0" value="0" checked>
      <label for="0">vou só</label>
      <input type="radio" name="quantity" bind:group={quantity} id="1" value="1">
      <label for="1">1 pessoa</label>
      <input type="radio" name="quantity" bind:group={quantity} id="2" value="2">
      <label for="2">2 pessoas ou mais</label>
    </div>

    <div class="name">
      <h3>Digite seu nome</h3>
      <input id="name" placeholder="Digite seu nome aqui..."  bind:value={name} type="text">
    </div>

    <input type="submit" value="Enviar Resposta">
  </form>

</section>

<style>
</style>