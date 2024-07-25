// import type { PageServerLoad } from '../$types';

// export const load: PageServerLoad = async () => {
// 	const todos = await fetch('https://dummyjson.com/products?limit=10').then((response) =>
// 		response.json()
// 	);
// 	const TODOS = todos.products;
// 	console.log('Page server side data===============>', TODOS);

// 	return {
// 		todos: TODOS
// 	};
// };
import type { PageServerLoad } from '../../$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const productsData = await fetch('https://dummyjson.com/products?limit=10').then((response) =>
		response.json()
	);

	const finalProducts = productsData.products;
	const userData = await fetch('https://dummyjson.com/users?limit=10').then((response) =>
		response.json()
	);

	const finalUsers = userData.users;

	// console.log('Producrs====>', finalProducts);
	// console.log('userData====>', finalUsers);

	return {
		products: finalProducts,
		users: finalUsers
	};
};
