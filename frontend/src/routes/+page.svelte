<script>
    import { onMount } from "svelte";

	let pokemons = [];
	let name = "";
	let age = 0;


	const getPokemons = async() => {
		let response = await fetch("/api/user");
		pokemons = await response.json();
		return pokemons;
	};
	const addPokemons = async() => {
		let response = await fetch("/api/user",{
			method: "POST",
			headers: {
				"Content-Type":"application/json"
			},
			body: JSON.stringify({
				name:name, 
				age: age
			})
		});
		pokemons = await response.json();
	};
	onMount(()=>{
		getPokemons();
	})


</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<section>
	<input type="text" bind:value={name}>
	<input type="number" bind:value={age}>
	<button on:click={addPokemons}>
		Add Pokemon
	</button>
	
	{#each pokemons as pokemon}
	<div>
		{pokemon.name} {pokemon.age}
	</div>
	{/each}


</section>


<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
