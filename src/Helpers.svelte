<script context="module">
	export function circleArea(diameter) {
		const radius = diameter / 2;
		const area = Math.PI * radius * radius;
		return area;
	}
	
	export function pricePSI(price, diameter) {
		const ppsi = price / circleArea(diameter);
		return ppsi;
	}
	
	export function comparePizzas(pizzas) {
		pizzas.sort((p1, p2) => pricePSI(p1) > pricePSI(p2));
		return pizzas;
	}
</script>