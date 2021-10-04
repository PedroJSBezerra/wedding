<script>
  import Cart from './Cart.svelte'
  import Info from './Info.svelte'
  import Card from './Card.svelte'
  import Icon_close from '../../icons/icon_close.svelte'
  import { open } from '../../lib/firebase'
  import { fly } from 'svelte/transition'
  import { list } from '../../lib/firebase'
 
</script>

<section in:fly={{x: 300}} out:fly={{x:300}} class={$open? 'list':'list close'}>
  <head>
    <Cart/>
    <div class="icon" on:click={() => open.set(!open)}>
      <Icon_close />
    </div>
  </head>

  <div class="scroll background">
    <Info />
    {#each $list as section}
      <h1>{section.id}</h1>
      <ul class="cozinha">
        {#each section.data as item, index }
          <Card section={section} item={item} index={index}/>
        {/each}
      </ul>
    {/each}
</section>

<style>
  section{
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
  }
  .background{
    background: url('../images/bg_wood_blue.png');
    background-attachment: local;
  }
  .scroll{
    overflow-y: auto;
    height: calc(100% - 60px);
    padding: 0 1rem;
  }
  ul{
    list-style-type: none;
    padding: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-template-areas: 'title title';
  }
  h1{
    width: 100%;
  }
  head{
    display: flex;
    margin: 0;
    background: white;
    box-shadow: 2px 2px 6px -1px #999;
    align-items: center;
    width: 100%;
    height: 60px;
    position: relative;
    z-index: 1;
  }
  .icon{
    padding: 0 1rem;
    cursor: pointer;
  }

</style>