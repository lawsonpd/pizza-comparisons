<script>
	import Pizza from './Pizza.svelte';
	import Results from './Results.svelte';
	import { pricePSI } from './utils.js';
	
	$: pizzas = []; // [size, price]
	
	let p = ''; // bind to input fields
	let s = ''; // bind to input fields
	
	function addPizza() {
		if (s > 30) {
			error = "That's an unbelievably large pizza...";
			return;
		}
		pizzas = [...pizzas, [s, p]];
		p = ''; // reset input field value
		s = ''; // reset input field value
		if (error) {error = ''};
	};
	
	$: sorted_pizzas = pizzas.slice().sort((p1, p2) => pricePSI(p1) > pricePSI(p2));
	
	function removePie(event) {
		pizzas.splice(event.detail.id, 1)
		pizzas = pizzas
	}
	
	let error;

	function reset() {
		pizzas = [];
	}
</script>

<main>
	<h1>Compare some pizzas!</h1>

	<div class="error">{#if error}{error}{/if}</div>

	<label>
		<input type="text" placeholder="Size" bind:value={s}>
		<input type="text" placeholder="Price" bind:value={p}>
	</label>
	<button on:click={addPizza}>
		Add pizza
	</button>

	{#if pizzas.length}
	<ul>
		{#each pizzas as pizza, i}
			<Pizza on:remove={removePie} {pizza} {i}/>
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