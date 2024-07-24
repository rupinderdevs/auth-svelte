import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	const todos = await fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
		response.json()
	);
	return {
		todos
	};
};
