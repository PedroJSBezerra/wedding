<script>
  
  import Icon_close from '../icons/icon_close.svelte'
  import {open as liststate} from '../stores/liststate'
  import {scrollTop} from '../stores/functions'

  const handleclick = () => {
    liststate.set(false)
    scrollTop()
  }
  
</script>

<header>
  {#if $liststate}
    <h1>Lista de presentes</h1>
    <div class="btn_close" on:click={handleclick}>  
      <Icon_close />
    </div>
  {:else}
    <h1>Convite</h1>
  {/if}
</header>

<style>
	header{
    color: #806D39;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    width: 100%;
    height: 60px;
    box-shadow: 0px 0px 13px #333;
    position: relative;
	}
  h1{
    flex: 1;
    text-align: center;
  }
  .btn_close{
    background: white;
    display: flex;
    padding: 10px;
    border-radius: 50%;
  }
</style>