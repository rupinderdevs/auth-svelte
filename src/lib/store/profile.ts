import { writable } from 'svelte/store';

export const user = writable(null);
export const userLimit = writable(1);

export async function fetchUser() {
	try {
		const response = await fetch('https://dummyjson.com/users?limit=6'); // Replace with your API endpoint
		const userData = await response.json();
        const USER = userData.users;
		console.log('userdata', USER);
		user.set(USER);
        userLimit.set(userData)
	} catch (error) {
		console.error('Error fetching user data:', error);
	}
}
