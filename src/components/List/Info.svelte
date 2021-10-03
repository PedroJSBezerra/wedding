<script>
  import Icon_info from '../../icons/Icon_info.svelte'
</script>

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

<style>
  .info{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
</style>