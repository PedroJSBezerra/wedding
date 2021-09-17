<script>
  import Main_invitation from './Main_invitation.svelte'
  import Main_list from './Main_list.svelte'
</script>

<main class="main scroll">
  <Main_invitation />
  <Main_list />
</main>

<style>
  .scroll{
    overflow-y: auto;
    width: 100%;
    height: calc(100vh - 60px);
  }
</style>