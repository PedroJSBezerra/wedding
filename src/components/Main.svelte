<script>
  import Icon_aliance from '../icons/icon_aliance.svelte'
  import Icon_calendar from '../icons/icon_calendar.svelte'
  import Icon_map from '../icons/icon_map.svelte'
  import Icon_clock_flow from '../icons/icon_clock_flow.svelte'

  let days = 49
  let hours = 23
  let minutes = 59
  let seconds = 59
</script>

<section class="invitation">

  <div class="logo">
    <h1>Tayane <br> e Pedro</h1>
  </div>

  <div class="in">
    <div class="icon">
      <Icon_aliance />
    </div>
    <p>. . . . vão casar . . . .</p>
  </div>

  <div class="date">
    <div class="icon">
      <Icon_calendar />
    </div>
    <p>30.10.21 <br>sábado às 19 horas</p>
  </div>

  <div class="location">
    <div class="icon">
      <Icon_map />
    </div>
    <p>Rua Guiomar <br> Carneiro 14, <br> Croatá II, Pacajús/Ce</p>
  </div>
  
  <div class="time">
    <div class="icon">
      <Icon_clock_flow />
    </div>
    <p>Faltam <br>{days} dias, {hours} horas, <br> {minutes} minutos e {seconds} segundos</p>
  </div>

</section>

<style>
  .invitation{
    color: #806D39;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('/images/frame_flower (1).png');
    background-size: 360px;
    background-repeat: no-repeat;
    background-position: 50% -6px;
    padding: 42px 0 140px 0;
  }
  .invitation >:not(:first-child){
    display: flex;
    align-items: center;
    width: 250px;
  }
  .icon {
    padding: 20px;
  }
  .logo{
    text-align: center;
  }
  .logo h1:nth-child(1){
    font-family: Aniyah;
    margin: 0;
  }
</style>