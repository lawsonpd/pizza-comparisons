<script>
	import Pizza from './Pizza.svelte';
	import Results from './Results.svelte';
	import { comparePizzas } from './utils.js';
	
	$: pizzas = []; // [size, price]
	
	let size = ''; // bind to input fields
	let pizza = ''; // bind to input fields
	
	function addPizza() {
		if (size > 30) {
			error = "That's an unbelievably large pizza...";
			return;
		}
		pizzas = [...pizzas, [size, pizza]];
		size = ''; // reset input field value
		pizza = ''; // reset input field value
		if (error) {error = ''};
	};
	
	$: sorted_pizzas = comparePizzas(pizzas);
	
	function removePie(event) {
		pizzas.splice(event.detail.id, 1);
		pizzas = pizzas;
	}
	
	let error;

	const reset = () => pizzas = [];
</script>

<main>
	<h1>Compare some pizzas!</h1>

	<div class="error">{#if error}{error}{/if}</div>

	<label>
		<input type="text" placeholder="Size" bind:value={size}>
		<input type="text" placeholder="Price" bind:value={pizza}>
	</label>
	<button on:click={addPizza}>
		Add pizza
	</button>

	{#if pizzas.length}
	<ul>
		{#each pizzas as pizza, id}
			<Pizza on:remove={removePie} {pizza} {id}/>
		{/each}
	</ul>
		<button on:click={reset}>Reset</button>
		{#if pizzas.length > 1}
			<Results bind:sorted_pizzas/>
		{:else}
			<p>Add another pizza to see the comparison</p>
		{/if}
	{/if}
</main>

<style>
	.error {
		color: red;
		margin: 1% auto;
	}
	
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #0099ff;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>