<script>
  import Icon_gift_box from '../icons/icon_gift_box.svelte'
  import { open } from '../stores/liststate'
  import {scrollTop} from '../stores/functions'

  const handletoggle = () => {
    open.set(true)
    scrollTop()
  }
</script>

<div class={$open? 'close':'list_toggle'}>
  <button on:click={handletoggle}>
    <div class="icon">
      <Icon_gift_box />
    </div>
    Mostrar lista de presentes
  </button>
</div>

<style>
  .list_toggle{
    /* box-shadow: 2px 2px 16px #999; */
    border-radius: 30px;
    margin: 40px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 200px;
    flex-direction: column;
  }
  .close{
    display: none;
  }
  button{
    display: flex;
    align-items: center;
    border-radius: 10px;
  }
  .icon{
    width: 40px;
  }
</style>