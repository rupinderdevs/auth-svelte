<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Table from '$lib/component/Table.svelte';

	let users: any[] = [];

	const columns = [
		{ key: 'id', label: 'ID' },
		{ key: 'name', label: 'Name' },
		{ key: 'email', label: 'Email' },
		{ key: 'phone', label: 'Phone' }
	];

	onMount(async () => {
		// Fetch users from an API
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		users = await response.json();
		console.log('userrr', users);
	});

	function handleDelete(event: CustomEvent) {
		const id = event.detail;
		// Implement delete logic here
		console.log(`Deleting user with id: ${id}`);
		users = users.filter((user) => user.id !== id);
	}

	function handleView(event: CustomEvent) {
		const id = event.detail;
		// Navigate to user details page
		goto(`/users/${id}`);
	}
</script>

<h1 class="text-2xl font-bold mb-4">Users</h1>

<Table data={users} {columns} on:delete={handleDelete} on:view={handleView} />
