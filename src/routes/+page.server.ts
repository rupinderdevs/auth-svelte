// import type { ProductsResponse } from '$lib/types';

// const URL = 'https://dummyjson.com/products';

// export async function load() {
// 	const response = await fetch(URL);
// 	const data: ProductsResponse = await response.json();
// 	console.log('Data===========>>', data);

// 	return {
// 		data: data
// 	};
// }

import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

const ENVIRONMENT: string = import.meta.env.NODE_ENV;

export const load: PageServerLoad = async ({ locals }) => {
	return {
		user: locals.user
	};
};

export const actions: Actions = {
	login: async ({ cookies }) => {
		cookies.set('auth', 'regularusertoken', {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: ENVIRONMENT === 'production',
			maxAge: 60 * 60 * 24 * 7 // 1 week
		});

		throw redirect(303, '/');
	}
};
