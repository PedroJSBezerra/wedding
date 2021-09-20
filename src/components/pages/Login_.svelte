<script>
  import {login} from '../../stores/authentication'
</script>

<div class="login">
  <h1>Convite</h1>

  <h3>Para acessar o convite faça login</h3>

  <button on:click={login}>Login com Google</button>
</div>

<style>
  .login{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  button{
    font-family: sans-serif;
  }
</style>