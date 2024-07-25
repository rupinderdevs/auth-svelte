<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageServerData } from '../$types';
    import Cookies from 'js-cookie';

	export let data: PageServerData;

	const quotes = data;

	const QUOTE = data.quotes;
	console.log('quotes on layout pageee======g', quotes);

	const TOTAL = data.totalNumber.limit;

	// onMount(() => {
	// 	Cookies.set('total', TOTAL);
	// });

	console.log('users totllll', TOTAL);
</script>

<section class="grid grid-cols-12 gap-10">
	<div class="bg-green-200 col-span-2 h-screen p-10">
		<h1>About Layout</h1>
		{#each QUOTE as item}
			<p>{item.quote.slice(0, 10)}</p>
			<br />
		{/each}
	</div>
	<div class="col-span-10 bg-red-50">
		<slot />
	</div>
</section>
