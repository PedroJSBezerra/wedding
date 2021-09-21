<script>
  import Icon_love_message from '../icons/icon_love_message.svelte'
  import {login} from '../stores/authentication'
</script>

<div class="login bg_wood">
  <div class="card">
    <h1>Convite</h1>
    <div class="icon">
      <Icon_love_message />
    </div>
    <h3>Para acessar o convite faça login</h3>

    <button on:click={login}>Login com Google</button>
  </div>
</div>

<style>
  .login{
    padding-top: 10vh;
    height: 100vh;
  }
  .card{
    width: 260px;
    background: rgba(255,255,255,.8);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    box-shadow: 3px 4px 8px -3px #999;
    margin: 0 auto;
  }
  button{
    font-family: sans-serif;
  }
  .bg_wood{
    background: url(../images/bg_wood.png);
  }
</style>