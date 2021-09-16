<script>

	import Loading from "./components/Loading.svelte";
	import Login from "./components/Login.svelte";
	import Main from "./components/Main.svelte";
	import Gifts_list from "./components/Gifts_list.svelte"
	import Form from "./components/Form.svelte"
	import {open as listOpen} from './stores/liststate'
	import {loged} from './stores/authentication'

</script>

<div class="{$listOpen? 'app noscroll':'app'}">
	{#if $loged === true}
		<header>
			<h1>Convite</h1>
		</header>
		<Main />

		<Gifts_list />
		<Form />
	{:else if $loged === false}
		<Login />
	{:else if $loged === 'loading'}
		<Loading />
	{/if}
</div>

<style>
	.app{    
		background-image: url(/images/bg_white_wood.png);
    background-repeat: repeat-y;
    background-size: 100%;
		margin-top: 65px;
	}
	header{
		display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    box-shadow: 2px 2px 8px #999;
    position: fixed;
    height: 65px;
    top: 0;
    width: 100%;
	}
	.noscroll{
		height: 100vh;
		overflow: hidden;
	}
</style>