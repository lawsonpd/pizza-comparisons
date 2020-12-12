<script>
	import { fly, fade } from 'svelte/transition';
	export let sorted_pizzas;
	
	$: bestOption = sorted_pizzas[0];
	
	$: numSlices = bestOption[0] <= 10 ? 4 : (bestOption[0] > 10 && bestOption[0] < 16 ? 6 : 8)
</script>

<div>
	<h2>Results:</h2>
	<p>
		Best deal: {bestOption[0]}" pizza for ${bestOption[1]}
	</p>
	<p>
		That's about ${(bestOption[1] / numSlices).toFixed(2)} per slice ({numSlices} slices)
	</p>
</div>