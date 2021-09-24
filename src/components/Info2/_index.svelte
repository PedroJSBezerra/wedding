<script>
  import Icon_map from '../../icons/icon_map.svelte'
  import Icon_clock_flow from '../../icons/icon_clock_flow.svelte'
  import Icon_hero from '../../icons/Icon_hero.svelte'
  
  import Time from './Time.svelte'
  import Card from './Card.svelte'
  import Button from './Button.svelte'
</script>

<section class="info2 flex bg_wood">
  <Card >
    <div class="icon hero">
      <Icon_hero />
    </div>
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

  <span class="line"></span>

  <div class="list">
    <p>Clique no botão para ver a lista de presentes.</p>
    <Button />
  </div>

</section>

<style>
  section{
    scroll-snap-align: center;
    height: 100vh;
  }
  .bg_wood{
    background: url('../images/bg_wood.png');
  }
  .flex{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .icon.hero{
    margin: 1rem auto;
  }
  .icon{
    margin: 1rem;
  }
  .line{
    width: 100%;
    height: 2px;
    background: rgba(0,0,0,.2);
    margin-top: 1rem;
  }
  .list{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
</style>