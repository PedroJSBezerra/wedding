<script>
  import Invitation_info from './Invitation_info.svelte'
  import Invitation_list_toggle from './Invitation_list_toggle.svelte'
  import Invitation_form from './Invitation_form.svelte'
  import { open as liststate} from '../stores/liststate'
</script>


<section class={$liststate? "close":"invitation background"}>
  <Invitation_info />
  <Invitation_list_toggle />
  <Invitation_form />
</section>

<style>
  section{
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
	.background{
    background-image: url(/images/bg_white_wood.png);
    background-repeat: repeat-y;
    background-size: 100%;
	}
  .close{
    display: none;
  }
</style>