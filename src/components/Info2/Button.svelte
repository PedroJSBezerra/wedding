<script>
  import Icon_gift_box from '../../icons/icon_gift_box.svelte'
  import {open} from '../../stores/liststate'

  const handleclick = () => {
    open.set(true)
  }

</script>

<button on:click={handleclick}>
  <div class="icon">
    <Icon_gift_box />
  </div>
  Lista de presentes
</button>

<style>
  Button{
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 5px;
  }
  .icon{
    margin-right: 8px;
  }
</style>