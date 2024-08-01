<script lang="ts">
	// external deps
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	// internal deps
	import Navbar from '$lib/component/navbar/Navbar.svelte';

	import '../app.css';

	onMount(() => themeChange());
</script>

<main class="">
	<Navbar />
	<a href="/" class="pb-2 space-x-3">Home</a>
	<a href="/protected" class="pb-3">Protected</a>
	<form action="/logout" method="POST">
		<button class="border rounded-xl bg-red-400 px-4 py-1">Logout</button>
	</form>
	<slot />
</main>
