<script>

	import Header from "./components/_Header.svelte";
	import Main from "./components/_Main.svelte";

	import Login from "./components/_Login.svelte";
	import Loading from "./components/_Loading.svelte";
	
	import {loged} from './stores/authentication'

</script>

<div class="app">
	{#if $loged === true}
		<Header />
		<Main />
	{:else if $loged === false}
		<Login />
	{:else if $loged === 'loading'}
		<Loading />
	{/if}
</div>

<style>
	.app{
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
</style>