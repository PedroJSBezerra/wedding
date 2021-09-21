<script>
  import Icon_aliance from '../../icons/icon_aliance.svelte'
  import Icon_calendar from '../../icons/icon_calendar.svelte'
  import Icon_map from '../../icons/icon_map.svelte'
  import Icon_clock_flow from '../../icons/icon_clock_flow.svelte'
  import Time from './Time.svelte'
  
  import Card from './Card.svelte'

  let days = 49
  let hours = 23
  let minutes = 59
  let seconds = 59
</script>

<section class='info bg_wood'>
  <div class="box bg_flower">

    <Card>
      <h1>Tayane <br> e Pedro</h1>
    </Card>

    <Card>
      <div class="icon">
        <Icon_aliance />
      </div>
      <p>. . . . vão casar . . . .</p>
    </Card>


    <Card>
      <div class="icon">
        <Icon_calendar />
      </div>
      <p>30.10.21 <br>sábado às 19 horas</p>
    </Card>

    <Card>
      <div class="icon">
        <Icon_map />
      </div>
      <p>Rua Guiomar <br> Carneiro 14, <br> Croatá II, Pacajús/Ce</p>
    </Card>
    
    <Card >
      <div class="icon">
        <Icon_clock_flow />
      </div>
      <Time />
    </Card>

  </div>
</section>

<style>
  section{
    scroll-snap-align: start;
    height: 100vh;
  }
  h1{
    text-align: center;
    width: 100%;
    font-family: Aniyah;
    margin: 0;
  }
  .bg_wood{
    background: url('../images/bg_wood.png');
  }
  .box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
  .bg_flower{
    background: url('../images/frame_flower.png');
    background-size: 300px;
    background-repeat: no-repeat;
    background-position: center;
  }
  .icon{
    margin: 1rem;
  }
</style>