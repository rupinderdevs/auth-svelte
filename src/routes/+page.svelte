<!-- +page.svelte -->
<script lang="ts">
	import NumberDisplay from '$lib/component/NumberDisplay.svelte';
	import { coolNum } from '$lib/store';
	import { fetchUser, user, userLimit } from '$lib/store/profile';
	import type { ProductsResponse } from '$lib/types';
	import { onMount } from 'svelte';

	export let data: ProductsResponse;
	console.log('Data pagee--->>', data.data.products);
	const handleIncrement = () => coolNum.update((i) => (i += 1));
// 	const handleDecrement = () => coolNum.update((i) => (i -= 1));

// 	async function fetchUser() {
// 	try {
// 		const response = await fetch('https://dummyjson.com/users?limit=20'); // Replace with your API endpoint
// 		const userData = await response.json();
//         const USER = userData.users;
// 		console.log('userdata', USER);

// 		user.set(USER);
// 	} catch (error) {
// 		console.error('Error fetching user data:', error);
// 	}
// }
onMount(()=>{
	fetchUser()
})

	console.log('$user-----', $user);
</script>

<span>Home page</span>
<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->
<!-- <NumberDisplay />
<button class="bg-gray-100 p-3 text-xl" on:click={handleDecrement}>-</button>

<button class="bg-gray-100 p-3 text-xl" on:click={handleIncrement}>+</button> -->
{#if $user}
    <p>Users:</p>
	<p>{$userLimit.limit}</p>
    <ul>
        {#each $user as userItem}
            <li>{userItem.firstName} {userItem.lastName}</li>
        {/each}
    </ul>
{:else}
    <p>Loading users...</p>
{/if}

<!-- <h1>{data.data.total} Products Found</h1> -->
<!-- <ul class="grid grid-cols-1 md:grid-cols-3 gap-10">
	{#each data.data.products as product}
		<li class="p-4 border rounded-lg">
			<img src={product.thumbnail} alt={product.title} width="100" height="100" />
			<h2 class="text-gray-500 text-xl font-medium">{product.title}</h2>
			<p class="text-sm py-2 tracking-wide">{product.description}</p>
			<p>Price: <span class="font-semibold text-green-800">  ${product.price} </span></p>
			<p>Category: {product.category}</p>
		</li>
	{/each}
</ul> -->
