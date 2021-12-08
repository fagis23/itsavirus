export interface EccomerceNode {
	category: string;
	setCategory: (category: string) => void;

	sneakers: Sneakers;
	setSneakers: (sneakers: Sneakers) => void;

	apiSneakers: () => any;
}

export interface Colors {
	name: string;
	color_hash: string;
}

export interface Shoes {
	name: string;
	category: string;
	price: number;
	sizes: string[];
	colors: Colors[];
	video: string;
	images: string;
}

export interface Sneakers {
	shoes: Shoes[];
}
