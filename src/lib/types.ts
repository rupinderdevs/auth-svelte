export interface Product {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	thumbnail: string;
}

export interface PROD {
	products: Product[];
  total: number;
	skip: number;
	limit: number;
}
export interface ProductsResponse {
	data: PROD;


}
