<script>
  import Info from './Info/_index.svelte'
  import Info2 from './Info2/_index.svelte'
  import Form from './Form/_index.svelte'
</script>

<main class="scroll">
  <Info />
  <Info2 />
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