<script>
  import { open } from '../stores/liststate'
  import {scrollTop} from '../stores/functions'

  const handletoggle = () => {
    open.set(true)
    scrollTop()
  }
</script>

<div class={$open? 'close':'list_toggle'}>
  <button on:click={handletoggle}>Mostrar lista de presentes</button>
</div>

<style>
  .list_toggle{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    flex-direction: column;
  }
  .close{
    display: none;
  }
</style>