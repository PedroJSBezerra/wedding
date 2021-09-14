<script>
	import Loading from "./components/Loading.svelte";
	import Login from "./components/Login.svelte";
	import Main from "./components/Main.svelte";
	import Gifts_list from "./components/Gifts_list.svelte"
	import {loged} from './stores/authentication'

</script>

<div class="app">
	{#if $loged === true}
		<Main />
		<Gifts_list />
	{:else if $loged === false}
		<Login />
	{:else if $loged === 'loading'}
		<Loading />
	{/if}
</div>

<style>
	.app{
		background-image: url(/images/bg_white_wood.png);
	}
</style>