<script>
	import Main from "./components/_Main.svelte"
	import Login from "./components/_Login.svelte"
	import Loading from "./components/_Loading.svelte"
	
	import {getAuth, onAuthStateChanged} from 'firebase/auth'
	import {initializeApp} from 'firebase/app'
	
	let loged = 'loading'

	initializeApp({
		apiKey: "AIzaSyBrfNZCYnSXsVIGrIzEq7fBypkQJOK-ADk",
		authDomain: "casamento-invitation.firebaseapp.com",
		projectId: "casamento-invitation",
		storageBucket: "casamento-invitation.appspot.com",
		messagingSenderId: "557245127862",
		appId: "1:557245127862:web:b1bc75b5400ce728c45a17"
	})

	
	onAuthStateChanged( getAuth(), (user) => {
		if(user){
			console.log('AuthState: Loged.')
			loged = true
		}else{
			loged = false
			console.log('AuthState: not loged.')
		}
	})

</script>

<div class="app noscroll">
	{#if loged === true}
		<Main />
	{:else if loged === false}
		<Login />
	{:else if loged === 'loading'}
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