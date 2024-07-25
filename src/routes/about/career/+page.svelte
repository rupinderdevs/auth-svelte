<script lang="ts">
	import type { PageServerData } from '../$types';

	export let data: PageServerData;

	const products = data;
	const users = data;
	// console.log('products==== on pageg', products.products);
	// console.log('users==== on pageg', users.users);

	const PRODUCTS = products.products;
	const USERS = users.users;
</script>

<main>
	<h1>Career</h1>
	<a href="/about/products">Producsr</a>
	<!-- {#each todos as todo}
		<p>{todo.title}</p> <br/>
	{/each} -->

	<div class="grid grid-cols-2 gap-10">
		<div class="">
			{#await data.data}
				<p>Loading...</p>
			{:then todos}
				{#each PRODUCTS as item}
					<div class="bg-gray-100 w-48 h-48 p-2 mb-2">
						<p>{item.title}</p>
						<img
							src={item.thumbnail}
							alt={item.description}
							width="100"
							height="100"
							loading="eager"
						/>
					</div>
					<br />
				{/each}
			{/await}
		</div>
		<div>
			{#await data.data}
				<p>Loading...</p>
			{:then todos}
				{#each USERS as item}
					<p>User : {item.firstName}</p>
					<br />
				{/each}
			{/await}
		</div>
	</div>
</main>
