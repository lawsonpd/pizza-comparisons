<script>
	import { createEventDispatcher } from 'svelte';
	
	export let price;
	export let size;
	export let id;
	
	const dispatch = createEventDispatcher();
	
	function removePie() {
		dispatch('remove', {
			id: id
		});
	}
</script>

<p>
	Pizza {id+1}:
	{size}" pizza for ${price}
	<button on:click={removePie}>x</button>
</p>