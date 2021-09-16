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

  <form action="" on:submit|preventDefault={handleSubmit}>
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
  section{
    background: url(/images/frame_flower_gold.png);
    background-repeat: no-repeat;
    background-position: 50% 0px;
    background-size: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #806D39;
  }
  form{
    width: 230px;
    padding: 62px 0;
  }
  form > *{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    margin-top: 14px;
  }
  form > * h3{
    width: 100%;
    margin: 5px;
  }
  form > * label{
    padding: 6px 14px;
    margin: 4px;
    border-radius: 6px;
    border: 1px solid #806D39;
    cursor: pointer;
  }
  input[type=radio]{
    display: none;
  }
  input[type=radio]:checked + label{
    background: #66c766;
    color: white;
  }
  input[value=no]:checked + label{
    background: #e66a6a;
    color: white;
  }
  input[type=submit]{
    margin: 65px auto;
  }
</style>