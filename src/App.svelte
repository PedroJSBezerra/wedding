<script>
	import './lib/firebase'
	import Main from "./components/_Main.svelte"
	import Login from "./components/_Login.svelte"
	import Loading from "./components/_Loading.svelte"
	import {loged} from './stores/functions'
	
	import {getAuth, onAuthStateChanged} from 'firebase/auth'

	//login observer function
	onAuthStateChanged( getAuth(), (user) => {
		if(user){
			console.log('AuthState: Loged.')
			loged.set(true)
		}else{
			console.log('AuthState: not loged.')
			loged.set(false)
		}
	})

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

<style>
	.app{
		color: #5a2626;
	}
	.noscroll{
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
</style>