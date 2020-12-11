<script>
	import { createEventDispatcher } from 'svelte';
	
	export let i;
	export let pizza;
	
	const dispatch = createEventDispatcher();
	
	function removePie() {
		dispatch('remove', {
			id: i
		});
	}
</script>

<li>
	{pizza[0]}" pizza for ${pizza[1]}
	<button on:click={removePie}>delete</button>
</li>