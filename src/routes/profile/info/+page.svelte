<!-- +page.svelte -->
<script lang="ts">
	import type { ProductsResponse } from '$lib/types';

	export let data: ProductsResponse;
	console.log('Data pagee--->>', data.data.products);

</script>

<span>Profile page</span>
<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

<h1>EEE {data.data.total} Products Found</h1>
<ul class="grid grid-cols-1 md:grid-cols-2 gap-10">
	{#each data.data.products as product}
		<li class="p-4 border bg-red-300 rounded-lg">
			<!-- <img src={product.thumbnail} alt={product.title} width="100" height="100" /> -->
			<h2 class="text-gray-500 text-xl font-medium">{product.discountPercentage}</h2>
			<p class="text-sm py-2 tracking-wide">{product.rating}</p>
			<p>Price: <span class="font-semibold text-green-800">  ${product.price} </span></p>
			<p>Category: {product.category}</p>
		</li>
	{/each}
</ul>
