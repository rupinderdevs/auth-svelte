<script>
	import { page } from '$app/stores';
	import ThemeSwitch from '$lib/ThemeSwitch.svelte';
	import Icon from './Icon.svelte';
	import { slide } from 'svelte/transition';

	const menuItems = [
		{ href: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
		{ href: '/dashboard/profile', label: 'Users', icon: 'users' },
		{ href: '/dashboard/table', label: 'Settings', icon: 'settings' }
	];

	let showReports = false;
</script>

<nav class="w-64 bg-white/90 dark:bg-gray-800 text-black dark:text-white h-screen p-4">
	<div class="mb-8">
		<h1 class="text-2xl font-bold">My Dashboard</h1>
	</div>
	<ul>
		{#each menuItems as item}
			<li class="mb-2">
				<a
					href={item.href}
					class="flex items-center p-2 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-200 {$page
						.url.pathname === item.href
						? 'bg-gray-700 dark:bg-white text-white dark:text-black'
						: ''}"
				>
					<Icon name={item.icon} />
					<span class="ml-3">{item.label}</span>
				</a>
			</li>
		{/each}
		<li class="mb-2">
			<button
				on:click={() => (showReports = !showReports)}
				class="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 w-full text-left"
			>
				<Icon name="reports" />
				<span class="ml-3">Reports</span>
				<Icon name={showReports ? 'chevron-up' : 'chevron-down'} class="ml-auto" />
			</button>
			{#if showReports}
				<ul transition:slide={{ duration: 300 }} class="ml-6 mt-2">
					<li>
						<a
							href="/dashboard/reports/sales"
							class="block py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-200"
						>
							Sales Report
						</a>
					</li>
					<li>
						<a
							href="/dashboard/reports/inventory"
							class="block py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-200"
						>
							Inventory Report
						</a>
					</li>
				</ul>
			{/if}
		</li>
	</ul>
	<div class="absolute bottom-2 mt-auto">
		<button
			class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
		>
			Log Out
		</button>
	</div>
	<ThemeSwitch />
</nav>
