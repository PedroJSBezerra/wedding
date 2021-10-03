<script>
  import {getAuth} from 'firebase/auth'
  import {getFirestore, doc, setDoc, onSnapshot} from 'firebase/firestore'
  import {cozinha, cama, banho, handleSubmit} from '../../lib/firebase_db'

  let presence = 'yes'
  let quantity = '0'
  let name = ''



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

    <div>
      <h3>Você ecolheu {[...$cama,...$cozinha,...$banho].length} 
        presente{[...$cozinha, ...$cama, ...$banho].length == 1 ? '':"s"}</h3>
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
    scroll-snap-align: end;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../images/bg_wood.png');
  }
  form{
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background: rgba(255,255,255,.8);
    border-radius: 10px;
    box-shadow: 2px 2px 7px -3px;
  }
  form > *{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  form > * h3{
    width: 100%;
  }
  input[type=radio]{
    display: none;
  }
  input[type=radio]:checked + label{
    background: #73bd73;
    color: white;
  }
  #no:checked + label{
    background: #e66b6b;
  }
  label{
    display: block;
    border-radius: 5px;
    padding: 1rem 2.5rem;
    cursor: pointer;
    border: 1px solid;
    margin: 6px;
  }
  input[type=text]{
    width: 100%;
    text-align: center;
    border-radius: 5px;
  }
  input[type=submit]{
    margin-top: 2rem;
    border-radius: 5px;
    cursor: pointer;
  }
</style>