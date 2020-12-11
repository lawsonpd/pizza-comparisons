<script>
	import Pizza from './Pizza.svelte';
	import { comparePizzas } from './Utils.svelte';
	
	let pizzas = [];
	
	$: pizzas = [
// 		[price, size]
// 		[12, 14],
// 		[15, 16],
// 		[20, 24],
// 		[5, 100]
	];
	
	let p = ''; // bind to input fields
	let s = ''; // bind to input fields
	
	function addPizza() {
// 		let n = pizzas.length();
		pizzas = [...pizzas, [p, s]];
		p = ''; // reset input field value
		s = ''; // reset input field value
	};
	
	let sorted_pizzas = comparePizzas(pizzas);
	
	function removePie(event) {
		return pizzas.splice(0, 1)
	}
</script>

<h1>Compare some pizzas!</h1>

<label>
	<input type="text" placeholder="Price" bind:value={p}>
	<input type="text" placeholder="Size" bind:value={s}>
</label>
<button on:click={addPizza}>
	Add pizza
</button>

{#if pizzas.length > 0}
	<h3>
		Pizzas:
	</h3>
	{#each pizzas}
		<Pizza on:remove={removePie} {pizzas}/>
	{/each}

	<h2>Results:</h2>
	<p>
		The best deal is the {sorted_pizzas[0][1]}" pizza for ${sorted_pizzas[0][0]}!
	</p>
{/if}


// // // // // // // // // // // // // // // // 

<script>
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>