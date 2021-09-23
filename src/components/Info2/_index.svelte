<script>
  import Icon_map from '../../icons/icon_map.svelte'
  import Icon_clock_flow from '../../icons/icon_clock_flow.svelte'
  
  import Time from './Time.svelte'
  import Card from './Card.svelte'
</script>

<section class="info2 bg_wood">
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
</section>

<style>
section{
  scroll-snap-align: start;
  height: 100vh;
}
.icon{
  margin: 1rem;
}

.bg_wood{
  background: url('../images/bg_wood.png');
}
</style>