<script>
	import Main from "./components/main/Main_.svelte";
	import Login from "./components/pages/Login_.svelte";
	import Loading from "./components/pages/Loading_.svelte";
	
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