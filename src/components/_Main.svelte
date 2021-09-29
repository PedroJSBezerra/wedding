<script>
  import Info from './Info/_index.svelte'
  import Info2 from './Info2/_index.svelte'
  import Form from './Form/_index.svelte'
  import List from './List/_index.svelte'
  import {open} from '../stores/functions'
</script>

<main class="scroll">
  <Info />
  <Info2 />
  {#if $open}
    <List />
  {/if}
  <Form />
</main>

<style>
  .scroll{
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
  }
</style>