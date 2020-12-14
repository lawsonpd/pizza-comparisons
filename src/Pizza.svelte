<script>
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	
	export let id;
	export let pizza;
	
	const dispatch = createEventDispatcher();
	
	function remove() {
		// @dev This fn doesn't actually remove a pizza from the array of pizzas,
		// but rather it dispatches the 'remove' message up to the parent component
		// and there the `removePie` fn is called and removes the item.
		dispatch('remove', {
			id: id
		});
	}
</script>

<li transition:fade>
	{pizza[0]}" pizza for ${pizza[1]}
	<button on:click={remove}>delete</button>
</li>