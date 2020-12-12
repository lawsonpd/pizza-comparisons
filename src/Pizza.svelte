<script>
	import { createEventDispatcher } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	
	export let i;
	export let pizza;
	
	const dispatch = createEventDispatcher();
	
	function removePie() {
		dispatch('remove', {
			id: i
		});
	}
</script>

<li in:fade out:fly="{{ y: 200, duration: 1000 }}">
	{pizza[0]}" pizza for ${pizza[1]}
	<button on:click={removePie}>delete</button>
</li>