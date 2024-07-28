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
	<!-- <Navbar /> -->

	<slot />
</main>
