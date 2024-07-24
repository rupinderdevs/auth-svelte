<script lang="ts">
	import type { PageServerData } from '../$types';

	export let data: PageServerData;

	const todos = data?.todos;
</script>

<main>
	<h1>Data</h1>

	<!-- {#each todos as todo}
		<p>{todo.title}</p> <br/>
	{/each} -->

    {#await data.todos}
        <p>Loading...</p>
    {:then todos} 
    {#each todos as todo}
    <h5>fsfs</h5>
    <p>{todo.title}</p> <br/>
{/each} 
    {/await}
</main>
