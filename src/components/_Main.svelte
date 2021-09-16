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
    height: 100%;
    width: 100%;
  }
</style>