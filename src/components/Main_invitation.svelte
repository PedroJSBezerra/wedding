<script>
  import Invitation_info from './Invitation_info.svelte'
  import Main_list_toggle from './Main_list_toggle.svelte'
  import Invitation_form from './Invitation_form.svelte'
</script>


<section class="invitation background">
  <Invitation_info />
  <Main_list_toggle />
  <Invitation_form />
</section>

<style>
	.background{
    background-image: url(/images/bg_white_wood.png);
    background-repeat: repeat-y;
    background-size: 100%;
	}
</style>