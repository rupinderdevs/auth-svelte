import type { ProductsResponse } from '$lib/types';

const URL = 'https://dummyjson.com/products';

export async function load() {
	const response = await fetch(URL);
	const data: ProductsResponse = await response.json();
	console.log('Data===========>>', data);

	return {
		data: data
	};
}
