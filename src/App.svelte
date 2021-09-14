<script>
	import Loading from "./components/Loading.svelte";
	import Login from "./components/Login.svelte";
	import Main from "./components/Main.svelte";
	import {loged} from './stores/authentication'

</script>

<div class="app">
	{#if $loged === true}
		<Main />
	{:else if $loged === false}
		<Login />
	{:else if $loged === 'loading'}
		<Loading />
	{/if}
</div>

<style>
</style>