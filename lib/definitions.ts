export type ProductType = {
    category:string;
	title: string;
	image: string;
	price: number;
	id: number;
	desc:string;
}

export type CartProductType = {
	category:string;
	title: string;
	image: string;
	price: number;
	id: number;
	onClick?: () => void;
};

export type ProductDetail = {
	category:string;
    id: number;
    title: string;
    price: number;
    desc:string;
    image: string;
    onClick?: () => void;
}


export type TProduct = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	[vlaue: string]: any;
};

export type TSponser ={
	name:string;
	image:string;
}

