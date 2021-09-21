<script>
  import Info from './Info/_index.svelte'
  import Form from './Form/_index.svelte'
</script>

<main class="scroll">
  <Info />
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