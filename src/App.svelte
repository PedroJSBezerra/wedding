<script>
	import Main from "./components/_Main.svelte";
	import Login from "./components/_Login.svelte";
	import Loading from "./components/_Loading.svelte";
	
	import {loged} from './stores/authentication'

</script>

<div class="app noscroll">
	{#if $loged === true}
		<Main />
	{:else if $loged === false}
		<Login />
	{:else if $loged === 'loading'}
		<Loading />
	{/if}
</div>

<style type="text/scss">

	@import './styles/vars';

	.app{
		color: $color;
	}
	.noscroll{
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
</style>