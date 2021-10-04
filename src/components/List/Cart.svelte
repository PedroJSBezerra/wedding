<script>
  import { myList } from '../../lib/firebase'
  import { fly } from 'svelte/transition'
  
</script>

{#if $myList.length > 0}
  <h1>
    Você escolheu 
    {#key $myList.length}
      <span in:fly={{ y: 20 }}>{$myList.length}</span> 
    {/key}
    presente{$myList.length == 1 ? '':"s"}
  </h1>
{:else}
  <h1>
    Lista de presentes
  </h1>
{/if}
<ul>
  {#each $myList as item}
    <li 
      in:fly={{ y: 40 }}
      out:fly={{x:200}}
    >{item.name}
    </li> 
  {/each}
</ul>

<style>
  h1{
    width: 100%;
    text-align: center;
    margin: 0;
  }
  ul{
    position: absolute;
    top: 60px;
    width: 100%;
    margin: 0;
    z-index: 1;
    list-style-type: none;
    padding: 0;
    text-align: center;
  }
  ul li:last-of-type{
    box-shadow: 0 3px 4px -2px;
    
  }
  li{
    background: white;
    padding: 6px 0;
  }
  li::before{
    content: '';
    display: block;
    width: 80%;
    height: 2px;
    background: rgba(0,0,0,.4);
    margin: 0 auto;
    border-radius: 1px;
  }
</style>