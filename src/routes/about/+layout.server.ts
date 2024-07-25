// https://dummyjson.com/image/SIZE/BACKGROUND/COLOR

import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	const QUOTES = await fetch('https://dummyjson.com/quotes?limit=40').then((response) =>
		response.json()
	);

	const finalData = QUOTES.quotes;
	const totalNumber= QUOTES.limit;

	if(totalNumber !== 40) {
		throw redirect(307, '/profile/info');
	}

	// console.log('QUOTES--------====>', QUOTES);
	// console.log('totalNumber====>.', totalNumber);

	return {
		quotes: finalData,
		totalNumber: QUOTES
	};
};
