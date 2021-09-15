<script>

  let presence = ''
  let quantity = ''
  let name = ''

  const handleSubmit = (e) => {
    console.log(e)
    console.log(presence)
    console.log(quantity)
    console.log(name)
  }

</script>

<section>

  <form action="" method="POST" on:submit={handleSubmit}>
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
      <label for="name">Digite seu nome</label>
      <input id="name" placeholder="Digite seu nome aqui..."  bind:value={name} type="text">
    </div>

    <input type="submit" value="Enviar Resposta">
  </form>

</section>

<style>
  input[type=radio]{
    display: none;
  }
  input[type=radio]:checked + label{
    background: green;
  }
  input[value=no]:checked + label{
    background: red;
  }
</style>